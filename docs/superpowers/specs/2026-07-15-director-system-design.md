# Director System — Design

## Goal

Replace the flat, score-linear spawn ramp (`step_spawn`/`maybe_spawn_ship` in
`perihelion_combat.march`) with an L4D-style AI director: discrete pacing
states that build tension toward deliberate peaks and then force a real
breather, driven by how well the player is currently doing rather than
purely by elapsed score. Motivation: pacing and replayability — today's
ramp produces the same shape of run every time regardless of skill; a
director should make runs feel like they have peaks and lulls, and make a
skilled, streaky player's run look different from a cautious one.

Perihelion has no health pool — `shield` is a consumable buffer, and losing
without a shield charge ends the run instantly (`collide_ball_hazards_shield_or_die`,
`perihelion_combat.march:1080`). There's no "wounded" state to read, so the
director leans on streak/score signals already tracked on `Game`
(`ship_kill_streak`, `asteroid_kill_streak`, `shield`, `score`) instead of a
health-like input.

## States & transitions

Four states, cycling `Relax → BuildUp → Peak → Fade → Relax`:

- **Relax** — calmest pacing. Has a minimum duration (`relax_min_duration()`,
  8.0s) during which escalation is locked out even if the player is on a
  streak — guarantees a real breather after every peak.
- **BuildUp** — normal/baseline pacing, identical to today's unmodified
  constants. Entered once Relax's minimum has elapsed AND either kill-streak
  counter crosses its *existing* milestone threshold
  (`ship_kill_streak_threshold()` = 2 or `asteroid_kill_streak_threshold()` =
  5, `perihelion_combat.march:91-92`) — piggybacking on the same
  "streak milestone" event that already bumps the score multiplier, rather
  than inventing new thresholds.
- **Peak** — the climax. Entered after BuildUp holds for a fixed minimum
  (`build_min_duration()`, 5.0s) without the streak breaking. Elevated
  spawn rates, plus a one-time guaranteed hunter spawn at entry (see below).
  Lasts a fixed `peak_duration()` (10.0s) — capped, so peak never becomes
  the new sustained normal.
- **Fade** — short taper (`fade_duration()`, 4.0s) linearly interpolating
  spawn multipliers from Peak's back down to Relax's, instead of snapping
  instantly. Always leads to Relax.

**Early exit:** from BuildUp or Peak, if the player takes damage (shield
count decreases tick-over-tick — the only "hit" signal that exists, since
there's no health pool), the director drops straight to Fade regardless of
state timers. This directly couples punishment to relief: a hit always buys
the player a cooldown, even mid-peak.

**Note on Relax's escalation check:** the "streak crosses its milestone
threshold" trigger is evaluated continuously (not just at Relax entry) —
so if the player is deep into a hot streak when the minimum-duration timer
expires, BuildUp starts immediately rather than waiting for the next kill.

## Signals & spawn effects per state

Reuses fields already on `Game` — no new player-facing tracking needed:
`ship_kill_streak`, `asteroid_kill_streak`, `shield`, `score`.

| State | asteroid interval mult | ship spawn chance mult | ship chance cap | notes |
|---|---|---|---|---|
| Relax | 1.3× (slower) | 0.7× | 0.45 (unchanged) | |
| BuildUp | 1.0× (baseline) | 1.0× (baseline) | 0.45 (unchanged) | today's behavior |
| Peak | 0.4× (~2.5x faster) | 1.6× | 0.65 | + guaranteed hunter at entry, only if `score >= ship_score_min()` |
| Fade | lerp Peak→Relax over `fade_duration()` | lerp Peak→Relax | lerp | |

Multipliers apply to the existing constants (`asteroid_interval()`, the
`chance_raw` computation in `maybe_spawn_ship`) rather than replacing them —
e.g. effective asteroid interval = `asteroid_interval() * state_mult`.

**Guaranteed hunter gating:** the guaranteed hunter only fires if
`score >= ship_score_min()` — a peak entered before ships are normally
unlocked (early run) is asteroid-only intensity; it does not force a ship
to exist ahead of its normal unlock point.

**Fragility softening:** if `shield == 0` at the moment Peak is entered,
`drop_chance()` gets a 1.5× multiplier for that peak's duration — better
odds of a rescue pickup — rather than delaying or weakening the peak
itself. This is evaluated once at peak entry (not re-checked if the player
picks up a shield mid-peak, keeping the softening simple and predictable).

## Architecture

New module, `lib/perihelion_director.march`:

```
type DirectorState = Relax | BuildUp | Peak | Fade

type Director = {
  state : DirectorState,
  state_timer : Float,   -- counts down remaining time in a fixed-duration
                          -- state (BuildUp/Peak/Fade); counts UP toward
                          -- relax_min_duration() while in Relax
  prev_shield : Int,     -- last-tick shield value, to detect damage taken
}
```

`Game` (`perihelion_core.march`) gains one field: `director : Director`,
initialized to `{ state: Relax, state_timer: 0.0, prev_shield: 0 }` in both
of `Game`'s existing construction sites (fresh run + reset, mirroring how
`shield`/`ship_kill_streak`/etc. are initialized at `perihelion_core.march:744`
and `:771`).

**Ownership split:** Director owns *when and how much* to spawn — it
replaces `step_spawn`/`maybe_spawn_ship`'s decision logic (timers, rolls,
state transitions, multiplier lookup, the damage-taken edge check against
`prev_shield`). It calls back into Combat's existing `spawn_hunter`/
`spawn_star_turret` for ship construction (ship art rolling, ring picking)
and constructs `Asteroid` records the same way `step_spawn` does today —
those stay in Combat since Combat owns entity shape, avoiding duplicating
that logic in the new module. `Perihelion.Combat.step` calls
`Perihelion.Director.step(game, dt) : Game` in place of today's
`step_spawn` call; `Director.step` internally does what `step_spawn` +
`maybe_spawn_ship` did, scaled by the current state's multipliers.

`Director` threads `game.rng` the same way existing spawn code does (via
`Perihelion.Level.draw_pub`) — no separate RNG stream.

## Testing

New `test/test_director.march`: pure state-machine tests —

- Relax holds through a qualifying streak until `relax_min_duration()` elapses.
- BuildUp only advances to Peak after `build_min_duration()`, not immediately on entry.
- A shield decrease during BuildUp or Peak drops straight to Fade, bypassing remaining state time.
- Fade always lands in Relax after `fade_duration()`.
- Peak's guaranteed hunter is skipped when `score < ship_score_min()`.
- Peak's drop-chance softening only applies when `shield == 0` at peak entry, not other shield values.
- Multiplier lookup/interpolation math for each state, including Fade's lerp at a few sample timer values.

`test/test_combat.march` cases exercising `step_spawn`/`maybe_spawn_ship`
get updated for the new call sites (`Perihelion.Director.step` replacing
them in `Perihelion.Combat.step`) and any `Game` record literals in test
fixtures need the new `director` field added.

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
  counter's *current value* is at or above its existing milestone threshold
  (`ship_kill_streak >= ship_kill_streak_threshold()` = 2, or
  `asteroid_kill_streak >= asteroid_kill_streak_threshold()` = 5,
  `perihelion_combat.march:95-96`) — reusing the same thresholds that already
  gate the score multiplier, rather than inventing new ones. A per-tick
  director can only read the streak *value*, not the edge event that
  `streak_bumps` computes inside `collide_shots_*`, so this is a level check
  (`>= threshold`), not an edge trigger.
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

Note this relief valve only ever fires for a *shielded* player: shield
decreases only when a charge absorbs a hit
(`collide_ball_hazards_shield_or_die`, `perihelion_combat.march:1085`); a
shield-0 player isn't grazed, they hit `end_run` and the run is over. So the
`prev_shield` decrease can only be observed while `shield > 0`. The most
fragile players (shield 0) never see this early-exit — the shield-0 peak
softening (below) is what covers them instead.

**Streaks are not sticky.** The escalation level-check is evaluated
continuously, not just at Relax entry — so a hot streak that's already
past threshold when the minimum-duration timer expires starts BuildUp
immediately. But streaks reset aggressively (killing the other hazard type
zeroes the counter, `perihelion_combat.march:936,965`; a slow/backward
capture zeroes both, `perihelion_core.march:578`), so an in-progress BuildUp
whose streak drops back below threshold simply falls back toward Relax. That
churn is acceptable for now — BuildUp is deliberately *not* made sticky in
this version.

**Opening state.** A fresh run starts in Relax (`state_timer: 0.0`), so the
first `relax_min_duration()` seconds are calmer than today's baseline
opening (1.3× asteroid interval, 0.7× ship chance). This is an intentional
accepted change — the run eases in before the first build.

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

**Ship spawning becomes per-tick.** Today ships roll a spawn *per generated
star* (via `top_up` → `maybe_spawn_ship`), so ship rate implicitly scales
with how fast the player climbs. Relocating spawn ownership into the per-tick
director replaces that with a director-owned ship spawn timer
(`ship_spawn_interval()`, base 3.5s, tuned by inspection), analogous to the
asteroid timer. On each expiry the director runs the existing score-gated
chance roll (`chance_raw = 0.16 + 0.04*(score - ship_score_min())`, capped),
scaled by the state's ship-chance multiplier and cap. Net effect: ship
pacing is now owned by the director, decoupled from player climb speed — a
deliberate consequence of full relocation, and the point of a director.

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
  state_timer : Float,        -- counts down remaining time in a fixed-duration
                               -- state (BuildUp/Peak/Fade); counts UP toward
                               -- relax_min_duration() while in Relax
  asteroid_spawn_timer : Float, -- was Game.spawn_timer; now director-owned
  ship_spawn_timer : Float,     -- new: per-tick ship spawn cadence
  prev_shield : Int,          -- last-tick shield value, to detect damage taken
}
```

All spawn timing now lives in one place. `Game`'s existing
`spawn_timer : Float` field (the asteroid timer, declared
`perihelion_core.march:130`) is **removed** and folded into the director as
`asteroid_spawn_timer`; `Game` gains a single `director : Director` field
instead. The director is initialized in both of `Game`'s construction sites
(fresh run + reset, where `spawn_timer` is set today at
`perihelion_core.march:758` / `:785`) to:
`{ state: Relax, state_timer: 0.0, asteroid_spawn_timer: asteroid_interval(), ship_spawn_timer: ship_spawn_interval(), prev_shield: 0 }`
— the asteroid timer keeps its old initial value (`asteroid_interval()`),
just relocated.

**Ownership: director owns all spawn decisions per-tick.** `Director.step`
replaces both `step_spawn` (asteroids) and `maybe_spawn_ship` (ships)
entirely. It:
1. Advances `state_timer` and runs state transitions (including the
   `prev_shield`-decrease damage check).
2. Decrements `asteroid_spawn_timer`; on expiry, constructs an `Asteroid` the
   same way `step_spawn` does today, using the state's asteroid-interval
   multiplier to reset the timer.
3. Decrements `ship_spawn_timer`; on expiry, runs the score-gated ship chance
   roll scaled by the state's ship-chance multiplier/cap, and on success
   calls Combat's existing `spawn_hunter` / `spawn_star_turret`. Resets the
   timer to `ship_spawn_interval()`.
4. On Peak entry only: fires the one guaranteed hunter (if
   `score >= ship_score_min()`), independent of the ship timer.

**What stays in Combat:** the *construction* helpers `spawn_hunter` and
`spawn_star_turret` (`perihelion_combat.march:1119,1098`) stay put — they own
entity shape (ship-art rolling, ring picking) and the director calls into
them. `maybe_spawn_ship` (the decision wrapper) is removed; its chance math
moves into the director.

**Turret placement rule.** `maybe_spawn_ship` spawned a turret on
`star_idx = List.length(stars) - 1` — the star just appended by `top_up`. In
the per-tick model there's no "just-appended" star, so the director uses the
same expression evaluated at spawn time: `List.length(game.stars) - 1`, i.e.
the top star currently on the ladder. Hunter placement is unchanged (it
already derives from `game.current`, not from generation,
`perihelion_combat.march:1120`).

**Call-site changes:**
- `Perihelion.Combat.step` calls `Perihelion.Director.step(game, dt) : Game`
  in place of its `step_spawn` call (`perihelion_combat.march:166`).
- `Perihelion.Core.top_up`'s `maybe_spawn_ship` call
  (`perihelion_core.march:648`) is **removed** — `top_up` now only generates
  stars; ships no longer spawn on star generation. This is the change that
  prevents double-spawning.

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
- Ship timer expiry runs the score-gated roll (no ship below `ship_score_min()`; chance scales with state multiplier and cap).
- Asteroid timer expiry spawns an asteroid on the state's scaled interval.
- A `damage-taken` early-exit is a no-op when `shield == 0` (no decrease to observe, since that path is `end_run`, not a shield tick).

`test/test_combat.march` cases exercising `step_spawn`/`maybe_spawn_ship`
are updated: `step_spawn` no longer exists (folded into
`Perihelion.Director.step`, called from `Perihelion.Combat.step`), and
`maybe_spawn_ship` is removed. Any test that asserted a ship spawns on star
generation (via `top_up`) must move to asserting the director's timer-driven
ship spawn instead. Any `Game` record literals in test fixtures drop the
`spawn_timer` field and add the `director` field.

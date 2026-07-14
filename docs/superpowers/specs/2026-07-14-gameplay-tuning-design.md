# Gameplay Tuning & Fixes — Design

## Goal

A batch of gameplay tuning changes and one real bug fix, gathered from playtesting after the WebGL nebula feature shipped:

1. Fix a milestone re-trigger exploit (the actual bug behind "reward nodes should have no duplicates / be consumed after 1 visit").
2. Retrofit the existing per-star pulse effects so visual speed reflects the star's real orbit speed.
3. Asteroids can fragment into smaller pieces on a shot kill.
4. Asteroids can kill enemy ships (new collision), destroying both.
5. Enemy ships get a per-ship accuracy skill modifier instead of always firing perfectly aimed shots.
6. Nebula clouds become less frequent and more varied in size.

**Deferred, not in this spec:** the "trajectory preview draws 2 dotted lines fanning from the ball" report. Ruled out during brainstorming: it isn't the ball's motion trail (confirmed intentional, keep as-is) and isn't the nebula's filament rendering (confirmed via screenshot — those are cloud tendrils, a separate, correctly-working effect). The actual cause is still unconfirmed; revisit once a clear screenshot of the real trajectory-preview view (orbiting, `TrajectoryPreview` special equipped) is available.

## 1. Milestone re-trigger fix (the "reward nodes" bug)

**Root cause** (`lib/perihelion_core.march:531`, `on_capture`): forward-progress scoring and the `stars_chained` milestone counter are both gated on the same condition, `idx > game.current`. A backward "rescue" capture (line 558-560: falling to an older star resets `current` to that older index, no chain penalty) can leave `current` lower than stars the player already passed. Forward-capturing back through that same stretch re-satisfies `idx > game.current` for each star — re-incrementing `stars_chained` and re-triggering `Perihelion.Upgrades.milestone_check`/the milestone choice screen for territory the player already covered. This lets a player oscillate across the same few stars to farm free upgrade screens.

**Fix:** add a high-water-mark field to `Game` — `max_current : Int` (same shape as the existing `max_mult` field) — updated to `max2(game.max_current, idx)` on every forward capture. Gate the `stars_chained` increment and the milestone-trigger check on `idx > game.max_current` (genuinely new territory) instead of `idx > game.current`. Leave the existing `idx > game.current` scoring/multiplier logic untouched — replaying recovered territory after a rescue still scores and builds combo, it just can't re-trigger milestones for stars already counted once.

`max_current` initializes to `0` alongside `current: 0` at both `Game` construction sites (`new_game`/`new_game_saved`).

## 2. Star orbit-speed visual effects

**Current state** (`lib/perihelion.march:166-192`): the three decorative pulse effects (ring/halo/particle, dispatched by `pulse_style`) already vary in speed per star, but `pulse_speed(s) = 0.6 + hashf(s.x, s.y+2.0, ...) * 1.8` and `dot_speed(s) = 0.4 + hashf(s.x+5.0, s.y+5.0) * 2.4` derive purely from the star's fixed screen position — completely unrelated to `Star.speed_mult` (the value that actually drives the star's real orbital angular velocity, `lib/perihelion_core.march`'s `step_orbit`).

**Fix:** remap `pulse_speed`/`dot_speed` to derive from `s.speed_mult` instead of a position hash, linearly mapping `speed_mult`'s existing range `[speed_mult_min(), speed_mult_max()]` = `[0.7, 1.6]` (`lib/perihelion_level.march:19-20`) onto each effect's existing visual-speed range (`[0.6, 2.4]` for pulse, `[0.4, 2.8]` for dots) — same visual ranges, same styles, just driven by the star's actual spin. `pulse_style`/`pulse_active`/`pulse_phase`/`dot_count` stay position-hash-derived (pure aesthetic variety, no orbit-speed relationship intended).

## 3. Asteroid fragmentation

**Current state**: `Asteroid { x, y, vx, vy, radius, shape_seed, mode }` (`lib/perihelion_combat.march:14-19`) has no health/size-tier concept — `collide_shots_asteroids` (combat.march:769-793) always destroys a hit asteroid outright. All spawned asteroids share one fixed radius, `asteroid_radius() = 10.0`.

**Fix:** on a shot kill, roll a small chance (`asteroid_fragment_chance()`, proposing `0.20`) for the asteroid to fragment instead of just dying. Only asteroids at or above a minimum size can fragment (`asteroid_fragment_min_radius()`, proposing `7.0` — since the base spawn radius is `10.0`, this allows exactly one fragmentation generation before fragments drop below the threshold, so no new "generation" field is needed on `Asteroid`). On fragmentation: 2-4 fragments (count derived deterministically from the asteroid's own `shape_seed`, no new RNG draw needed), each at `radius: parent.radius * 0.55`, velocity fanned outward from the parent's existing heading (`vx, vy`) at evenly-spread angles, spawned as `mode: AsteroidDrifting` regardless of the parent's mode. This requires threading `game.rng` through `collide_shots_asteroids` (currently pure/rng-free), mirroring the existing threaded-fold shape `Combat.roll_drops` already uses for ship-kill pickup rolls.

Fragments are ordinary `Asteroid` values — no new fields, no separate entity type. They're subject to the same drift/gravity/capture/despawn/collision rules as any other asteroid, and (being below `asteroid_fragment_min_radius()`) simply won't re-satisfy the fragmentation gate on their own death.

## 4. Asteroid-kills-ship collision

**Current state**: ships and asteroids never check collision against each other — confirmed via search, no function anywhere compares `game.ships`' positions against `game.asteroids`'. They currently pass through each other freely.

**Fix:** a new collision pass (mirroring the shape of `collide_shots_ships`/`collide_shots_asteroids`) checks every ship against every asteroid (circle-circle, `ship_radius()` + asteroid's own `radius`). On overlap, **both are destroyed** (confirmed with the user — mirrors how ball-vs-asteroid already destroys overlapping asteroids for the player). This is treated as an environmental/incidental kill: **no score, no multiplier/streak bump, no pickup-drop roll** (confirmed with the user) — the ship just disappears, same as a ship removed by `retarget_ships_past_removal` when its star is star-killed. This pass runs once per tick alongside the other collision passes in `Combat`'s per-tick update sequence.

## 5. Enemy ship accuracy

**Current state** (`lib/perihelion_combat.march:428-437`, `ship_fire_shot`): every ship shot is a perfectly aimed unit vector toward the ball's exact current position — no spread, no miss chance, no per-ship variation. Contrast with the player's own `Spread` weapon, which explicitly rotates shots by a fixed angle step.

**Fix:** add `skill : Float` to `Ship`, rolled uniformly in `[0.3, 1.0]` at spawn time (both `spawn_hunter` and `spawn_star_turret`, each already threading `Random.Rng` through one `draw` call for the idle timer — add a second draw for skill). `ship_fire_shot` computes the true aim angle as today, then applies a random angular deviation of `(1.0 - skill) * ship_max_deviation()` (proposing `ship_max_deviation() = 0.4` radians, ~23°), sign and magnitude drawn from `game.rng` at fire time. A skill-`1.0` ship fires dead-on (no deviation); a skill-`0.3` ship's shots can miss by up to `0.28` rad (~16°) in either direction. No separate "miss chance" flag — inaccuracy is entirely expressed through the spread itself. Skill is independent of `hunter`/turret role and of the ship's spawn-time score gate (a simple uniform roll, matching this codebase's existing convention for per-entity variation rolls).

## 6. Nebula tuning

**Current state** (`lib/perihelion_nebula.march:20-22`): `cloud_chance() = 0.55` (55% of stars spawn a cloud), `radius_min()/radius_max() = 240.0/700.0` with the size roll biased toward small (`lerp(radius_min, radius_max, rt*rt)` — squaring skews most clouds small with a rare large tail).

**Fix:**
- `cloud_chance()`: `0.55` → `0.30` — clouds become the exception, not the norm.
- `radius_min()`/`radius_max()`: `240.0/700.0` → `150.0/900.0` — wider range in both directions. `anchor_jitter() = 90.0 < radius_min() = 150.0` invariant (a cloud always overlaps its anchor star) still holds.
- Size-roll curve: `rt*rt` → plain `rt` (uniform across the range instead of biased toward small) — small and large clouds should both show up regularly instead of "mostly small, rarely huge."

No changes to `Perihelion.Nebula`'s density/falloff/visibility logic, or to the WebGL rendering side — this is purely a constants-and-curve retune within `star_cloud`.

## Testing approach

Items 1-2 and 6 are pure-logic/pure-constant changes, testable the same way the existing `test/test_core.march`/`test/test_nebula.march` suites already cover their respective modules (deterministic seeded assertions). Items 3-5 (asteroid fragmentation, asteroid-ship collision, ship accuracy) add new RNG consumption and new collision passes in `Perihelion.Combat` — testable via `test/test_combat.march` the same way existing collision/drop-roll logic is tested (seeded `Random.Rng`, assert on resulting lists/counts across a seed sweep, matching e.g. how `pick_carryover`'s tests sweep 20 seeds for distribution sanity). No shell/rendering test coverage needed beyond existing conventions (this game has no visual/pixel-diff test infrastructure; the star-effect and nebula-tuning changes are visual-only and get verified by browser inspection, matching how the WebGL work was verified).

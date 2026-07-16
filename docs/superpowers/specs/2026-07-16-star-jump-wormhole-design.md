# Star Jump wormhole animation

## Goal

Give the `StarJump` special ability (X key, portal icon) a real animation: instead of instantly teleporting the ball, it opens a wormhole at the departure point, holds the ball invulnerable/suspended for a brief travel pause, then opens a second wormhole at the arrival point as the ball reappears. Currently `apply_star_jump` (`lib/perihelion_core.march:285`) does everything in one instant, zero-visual-effect step.

## Scope

- Pure-layer: a new transient `Game.jump` state representing "mid-transit," real enough to test (invulnerability, input-blocking, delayed resolution).
- Shell/Fx: detecting jump activation/resolution (same pattern as the existing death-explosion `just_died` detection), hiding the ball during transit, and spawning two wormhole visual instances.
- New WebGL shader: a batched `WebGL.draw_wormholes` binding rendering a swirling, noise-turbulent vortex ring with a dark center, monochrome, reusing the `hash`/`valueNoise`/`fbm` helpers already shared by the nebula/star/explosion shaders.
- Not in scope: changing StarJump's targeting logic (still rolls 1..4 stars ahead, same RNG draw), changing what a landing does (still the same `on_capture` seam, same scoring/multiplier/milestone behavior — only *when* it fires changes), any visual "tunnel" connecting the two wormholes (they're two independent open/close animations, not a connected effect).

## Pure-layer changes (`lib/perihelion_core.march`)

```march
type JumpTransit = { target_idx : Int, start_x : Float, start_y : Float, time_left : Float }
```

`Game` gains `jump : Option(JumpTransit)` (defaults to `None` in `fresh_run` and both existing `Game` literal sites).

`fn jump_transit_duration() : Float` — new constant, the pure-layer travel-pause length (seconds).

**Activation** (`apply_special`'s `StarJump` arm): rolls the target exactly as `apply_star_jump` does today (`Perihelion.Level.draw_pub`, `1 + jump roll` up to `star_jump_max_stars()`), consumes `special_charges` immediately. If a valid target star exists at that index, sets `jump: Some({ target_idx, start_x: game.ball_x, start_y: game.ball_y, time_left: jump_transit_duration() })` and leaves `ball_x`/`ball_y`/`mode` untouched (frozen at the start point). If the ladder isn't generated that far yet (existing rare/harmless case), behaves as today: consumes the roll, no-ops.

**Resolution** — new `step_jump_transit(game, dt_s) : Game`, called every `Playing`-phase tick (same rhythm as `fire_cooldown`/`starkiller_cooldown` ticking down elsewhere in `update`). While `game.jump` is `Some`, decrements `time_left`; when it reaches `<= 0`, calls `on_capture` with the stored `target_idx`/target star (the same call `apply_star_jump` makes today) and clears `jump` to `None`. This is the exact same landing seam as today — score/multiplier/milestone-trigger behavior is unchanged, only delayed until this moment instead of firing on the input frame.

**Invulnerability**: while `game.jump` is `Some`, ball-vs-hazard collision checks (`Combat.collide_ball_hazards_shield_or_die`, `Core.check_death`) skip entirely — the ball can't die or take a hit mid-transit.

**Input blocking**: while `game.jump` is `Some`, `step_playing` ignores W/S (orbit ring change), tap-to-release, fire input, and other specials — the only thing that can happen to the ball is the transit timer counting down. Everything else in the world (asteroids, enemy ships, enemy shots, ambient timers) continues simulating normally; only the ball and its input are suspended, so this doesn't read as a full-game freeze.

## Shell/Fx changes (`lib/perihelion.march`)

**Trigger detection**: `tick()` already computes `just_died` by comparing the pre-update `Game` to the post-update `Game` (`was_playing(game) && is_over_phase(g2)`). The same shape adds two more comparisons:
- `just_jumped = match (game.jump, g2.jump) do (None, Some(_)) -> true | _ -> false end` (jump just activated this frame)
- `jump_landed = match (game.jump, g2.jump) do (Some(_), None) -> true | _ -> false end` (transit just resolved this frame)

**Ball visibility**: `draw_ball` is skipped entirely whenever `game.jump` is `Some` — a direct function of existing state, no new Fx field needed for this part.

**Wormhole spawn timing** (new `Fx` fields, same read-and-decay shape as `explosion_time_left`):
- `wormhole_a_x/y`, `wormhole_a_time_left` — captured from `g2.jump`'s `start_x/start_y` the frame `just_jumped` is true; counts down over its own fixed cosmetic duration (independent of the Core `time_left`, same relationship `explosion_duration()` has to `shake_duration()`).
- `wormhole_b_x/y`, `wormhole_b_time_left` — captured from the ball's new `x/y` the frame `jump_landed` is true; counts down the same way. This is also the exact frame the ball becomes visible again, so the arrival wormhole visually blooms in around the reappearing ball rather than gating its reappearance.

**Draw pipeline**: a new `draw_wormholes_gl` composited the same way `draw_explosion_gl` is today — one `WebGL.draw_wormholes` call carrying both active instances (0, 1, or 2 of them depending on which timers are still counting down) plus one `Canvas.draw_node` blit, called after `Canvas.restore(ctx)` pops the camera transform (same reasoning as the star-orb composite fix from earlier this session — compositing a screen-space offscreen canvas while the camera transform is still active double-transforms it).

## Shader (`stdlib/webgl.march` + `runtime/march_webgl.mjs`)

```march
type WormholeGl = { x : Float, y : Float, radius : Float, progress : Float, seed : Float }
fn draw_wormholes(gl, wormholes : List(WormholeGl), view_w : Float, view_h : Float, t : Float) : Unit
```

Batched (list of up to a small fixed cap, e.g. 4 — mirroring `MAX_STARS`'s pattern, sized well above the 2 instances ever actually simultaneously active), since both instances can be visible simultaneously for a brief overlap. Each instance renders as a rotating, noise-turbulent ring spiraling toward a dark hole at the center — reusing the `hash`/`valueNoise`/`fbm` GLSL helpers already shared by the nebula/star/explosion shaders — monochrome (white/gray), matching the game's established palette. `progress` (0..1, computed March-side from each instance's own `time_left` / cosmetic duration) drives a symmetric open→peak→close envelope, the same `sin(phase * π)`-style arc already used for the coronal ejection flares: `0` is fully closed/invisible, the midpoint is the fully-open vortex, `1` is closed again.

## Testing

Pure-layer, real test coverage (unlike the purely cosmetic star shader before it):
- Activating `StarJump` (with a charge and a valid target) sets `game.jump` to `Some` and does NOT move the ball or change `current`/score immediately.
- While `jump` is `Some`, an asteroid overlapping the ball's position does not end the run (invulnerability).
- While `jump` is `Some`, W/S key input does not change the ball's orbit ring, and fire input does not spawn a shot.
- After `time_left` counts down to 0 (via repeated `update` calls), the ball lands at the target star, `jump` is back to `None`, and score/multiplier/milestone behavior matches what `apply_star_jump` produces today for the same roll.

Shell/shader layer: build + visual-verify only, same as the nebula/star/explosion shaders — outside the pure-layer test suite.

## Open implementation details (left to implementation, not blocking the spec)

- Exact value of `jump_transit_duration()` and the two cosmetic wormhole durations — tuned visually during implementation (starting point: ~0.35-0.45s each).
- Exact GLSL vortex/spiral math (rotation speed, spiral tightness, dark-center falloff) — tuned visually, following the same iterative approach used for the star shader.
- Exact landing/arrival screen position used for `wormhole_b` — the same position `on_capture` places the ball at (not re-derived, just read after resolution).

# Swirling star orb + coronal ejections shader

## Goal

Replace the flat white circle used for a star's core (`draw_star`, `lib/perihelion.march:750-771`) with a WebGL-rendered orb that subtly swirls/roils, and periodically emits loop-shaped coronal ejections on the largest stars. Purely cosmetic (shell/`Fx`-layer), monochrome to match the game's existing white/gray/black visual language — no new gameplay state.

## Scope

- **All stars** get the swirling/roiling surface shader.
- **Only stars at/above a size threshold** (new `star_ejection_min_radius()` constant) additionally emit periodic coronal ejections.
- Existing orbit rings and the decorative pulse effect (ring/halo/particle, `pulse_active`/`draw_pulse_*`) are unchanged and continue to render as they do today — this feature only replaces the flat circle fill, it doesn't touch ring/pulse logic.
- Not in scope: any gameplay effect from ejections (no damage, no push), any per-star manual authoring (everything is derived from existing `Star` fields + a position-seeded hash), colored/warm palette (explicitly rejected in favor of staying monochrome).

## Data model

New binding in the March toolchain (`stdlib/webgl.march` + `runtime/march_webgl.mjs`), following the existing `WebGL.draw_nebula` pattern:

```march
type StarGl = { x : Float, y : Float, radius : Float, seed : Float, ejections : Bool }

extern "webgl" : Cap(Ffi) do
  fn webgl_draw_stars(ctx: Context, stars: List(StarGl), view_w: Float, view_h: Float, t: Float) : Unit = "march_webgl_draw_stars"
end

fn draw_stars(ctx, stars, view_w, view_h, t) do webgl_draw_stars(ctx, stars, view_w, view_h, t) end
```

- `x`, `y`, `radius` are screen-space (already camera/zoom-transformed), matching how `Cloud` is built for `draw_nebula`.
- `seed` = `hashf(star.x, star.y)` (world-space position, so it's stable across frames and unique per star) — drives swirl pattern phase and, for eligible stars, ejection angle/period/phase.
- `ejections` = `star.radius >= star_ejection_min_radius()` (screen-space radius at the time of the call is fine; this only needs to be visually consistent, not exact).

## Rendering pipeline change

Current `draw_star(ctx, s, t, aim)` does, per star, in one Canvas-2D pass: orbit rings → pulse effect → target-highlight → flat circle fill.

This becomes two passes over the star list, mirroring how the nebula background/foreground and explosion are already sequenced in `draw()`:

1. **Pass 1 (Canvas 2D, per-star, unchanged logic)** — `draw_star` keeps doing orbit rings, pulse effect, and target-highlight, but drops the final `Canvas.arc` flat-fill block.
2. **Pass 2 (new, batched WebGL)** — after pass 1 has run for every star, build a `List(StarGl)` (one entry per visible star, screen-space) and make a single `WebGL.draw_stars` call, then one `Canvas.draw_node` blit to composite it onto the 2D canvas — same rhythm as `draw_nebula`'s existing composite step.

Ordering: pass 2 happens immediately after pass 1 for the star list, before the ball/ship and other foreground elements draw (so orbit rings/pulses sit visually under the star orb, same as today's stacking, and later elements draw on top of the composited orb).

This requires restructuring the existing `draw_stars(ctx, stars, cam, view_h, t, aim)` recursive-list-walker (`lib/perihelion.march:942`) into: an unchanged recursive walk for pass 1, a new small `List(StarGl)` builder (also a recursive walk, computing screen-space coords the same way pass 1 does), and the new batched draw+blit call.

## Shader design

Implemented in `runtime/march_webgl.mjs` as a new fragment shader source + cached program state (own `WeakMap`, following the `nebulaStateFor`/`explosionStateFor` precedent), reusing the existing `hash`/`valueNoise`/`fbm` GLSL helpers already shared by the nebula and explosion shaders.

- **Swirl/roil (every star)**: domain-warped fbm noise sampled per-pixel within the star's disc, with the noise-space UV slowly advected (rotated/offset) over time `t` for a convecting look. Radial falloff clips it to the disc and brightens toward the limb (edge) for a plasma-like read. Per-star `seed` offsets the noise domain so each star's pattern differs.
- **Coronal ejections (eligible stars only)**: a deterministic cycle per star, `phase = fract(t * speed(seed) + offset(seed))`, same pure-function-of-time approach as the existing `pulse_speed`/`pulse_phase` pattern (period roughly 4-8s, varied by seed so stars desync from each other). Drives 1-2 noise-perturbed loop-shaped filament arcs anchored at a seed-chosen point on the rim, stretching outward and fading in/out across the cycle envelope (fade in → hold → fade out). Approximated procedurally (bent-arc distance field warped by noise), not a physical simulation.

All new shader logic lives in the toolchain repo (`~/code/march/.claude/worktrees/perihelion-fixes`), matching where the nebula/explosion shaders live.

## Performance

One `WebGL.draw_stars` call + one `Canvas.draw_node` composite blit per frame, regardless of star count (same cost class as the existing nebula pass) — not one draw call per star.

## Testing

This is shell/`Fx`-layer cosmetic code, outside the pure-layer `march_core`/`march_combat`/etc. test suite (same as the nebula and explosion shaders before it). Verified by: clean `./build.sh`, full `./run-tests.sh` regression pass (confirming no pure-layer code was touched/broken), and a visual check in the browser.

## Open implementation details (left to implementation, not blocking the spec)

- Exact GLSL noise-domain-warp parameters (octave count, warp strength) for the swirl — tuned visually during implementation.
- Exact filament-arc math for ejections — tuned visually during implementation.
- Exact value of `star_ejection_min_radius()` — picked relative to the existing star radius range from the size-variation work (task #4), tuned so only a minority of stars qualify.

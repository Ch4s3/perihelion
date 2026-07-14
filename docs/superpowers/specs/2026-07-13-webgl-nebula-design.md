# WebGL Nebula Generation — Design

## Goal

Replace Perihelion's current Canvas-2D nebula rendering (a small tiled value-noise
texture painted inside a per-cloud lobed silhouette, then blurred) with a WebGL
fragment-shader pass that produces genuinely organic nebula shapes: domain-warped
fractal noise, thin curving filaments, and real low-density voids — matching the
wispy, swirling look of real black-and-white nebula photography, at a quality
level Canvas 2D compositing can't reach without per-pixel shader math.

## Repos touched

Perihelion now lives in its own repo (this one), separate from the March
compiler monorepo. This feature touches both:

- **March compiler monorepo** (`~/code/march`) — a new `stdlib/webgl.march` +
  `runtime/march_webgl.mjs` module, plus two small compiler-integration edits
  (`bin/main.ml`, `lib/tir/js_emit.ml`). Same shape as the existing
  `canvas`/`dom`/`audio` modules this game already depends on.
- **This repo** (`~/code/perihelion`) — the shell wiring that calls the new
  `WebGL` module and composites its output, plus (until the compiler-side
  change ships in a published toolchain) rebuilding against a local march
  checkout the same way `build.sh` already does for the fixes this game
  needed before the repo split.

The implementation plan for this feature should sequence the two repos:
land and verify the `WebGL` stdlib module in the march monorepo first, then
wire it up here.

## Architecture

**A second, offscreen WebGL canvas rendering only the nebula, composited into the
existing 2D canvas via `drawImage`.** Not a full WebGL rewrite of the renderer —
everything else (stars, ships, asteroids, shots, trail, HUD text) stays exactly as
it is today in Canvas 2D. Only the nebula's per-pixel noise genuinely benefits
from the GPU; the rest of the game's minimalist vector/text look is already fast
and correct.

```
Perihelion.Nebula.visible_clouds(stars, camera_y, view_h, seed)   -- unchanged, pure March
        |
        v
shell: screen_clouds = map (cloud) -> { x: cloud.x - camera_x, y: cloud.y - camera_y, ... }
        |
        v
WebGL.draw_nebula(gl_ctx, screen_clouds, view_w, view_h, t)   -- new, renders to offscreen canvas
        |
        v
Canvas.draw_image(ctx, webgl_canvas_as_image, 0.0, 0.0)   -- one drawImage, same spot draw_nebula runs today
```

### New module: `stdlib/webgl.march` + `runtime/march_webgl.mjs` (march monorepo)

Mirrors `canvas.march`/`march_canvas.mjs` exactly: an opaque `Context` resource,
an `extern "webgl"` block bound to JS functions in the new runtime file. Two
compiler-integration steps this game already exercised once (the same fix
`audio` needed):

1. Add `"webgl.march"` to `bin/main.ml`'s `js_only_stdlib_file_list`.
2. Add `"webgl" -> Some "./march_webgl.mjs"` to `lib/tir/js_emit.ml`'s
   `js_runtime_module_path`.

Bindings needed (kept small — the March side only orchestrates, the shader does
the real work):

```march
mod WebGL do
  needs Ffi

  resource Context

  type Cloud = { x : Float, y : Float, radius : Float, strength : Float, seed : Float }

  extern "webgl" : Cap(Ffi) do
    fn webgl_get_context(node: Node) : Option(Context) = "march_webgl_get_context"
    fn webgl_resize(ctx: Context, w: Float, h: Float) : Unit = "march_webgl_resize"
    fn webgl_draw_nebula(ctx: Context, clouds: List(Cloud), view_w: Float, view_h: Float, t: Float) : Unit = "march_webgl_draw_nebula"
    fn webgl_canvas_node(ctx: Context) : Node = "march_webgl_canvas_node"
  end
end
```

`webgl_canvas_node` returns the underlying offscreen `<canvas>` element as a
`Dom.Node` so it can be passed straight into the EXISTING `Canvas.draw_image`
binding — no new image-marshalling code needed on the 2D side.

### Shell integration (this repo, `lib/perihelion.march`)

- Boot: create the offscreen WebGL canvas once (`Dom.create_canvas`-equivalent,
  detached — never appended to the visible DOM tree), get its context, compile
  the shader program once and cache it (module-level, same pattern as
  `march_canvas.mjs`'s cached noise tile / pattern).
- Every resize (`resize_canvas`, already called every tick in `tick`): also
  resize the offscreen WebGL canvas to match the viewport.
- `draw()`: where `draw_nebula(ctx, game.stars, game.camera_y, game.view_h, seedf)`
  runs today, instead: map `visible_clouds` to screen-space, call
  `WebGL.webgl_draw_nebula`, then `Canvas.draw_image(ctx, WebGL.webgl_canvas_node(gl), 0.0, 0.0)`.

## Shader technique

`Perihelion.Nebula`'s `Cloud { x, y, radius, strength }` list stays the single
source of truth — still pure March, still deterministic, still unit-testable
exactly as today (`test/test_nebula.march` is untouched). The shader receives each
visible cloud as a uniform array entry (position already in screen space,
radius, strength, and a per-cloud `seed` float derived the same
`hash3(sx, sy, seed)` way `star_cloud` already derives everything else, passed
through so the shader can vary silhouette/filament shape per-cloud without any
new random state crossing the March/JS boundary).

For each pixel, for each cloud within reach of that pixel:

1. **Base fBm density** — 4 octaves of value noise (each octave: standard
   hash-based 2D value noise, smoothstep-interpolated), summed with halving
   amplitude and doubling frequency per octave (classic fractal Brownian
   motion), normalized to `[0, 1]`.
2. **Domain warp** — before the fBm sample, offset the input UV by a *separate*,
   lower-frequency 2-octave noise field (scaled by a `warp_strength` constant):
   `warped_uv = uv + warp_strength * (fbm(uv * warp_freq) - 0.5)`. This single
   step is what turns flat mottled noise into the swirling, marble-like flow
   real nebula photos have — confirmed as the key technique across every
   reference found (gamedev.SE thread, Unity nebula writeups).
3. **Radial falloff** — same smoothstep falloff already used
   (`Nebula.falloff`), multiplied into the warped fBm so density still goes to
   exactly 0 at `cloud.radius` regardless of noise value — clouds stay
   spatially bounded to where the March-side model says they are.
4. **Filaments** — 2-3 thin tendrils per cloud, each a Gaussian-bump angular
   reach (same shape as today's single "arm") but with its *centerline angle*
   itself perturbed by the SAME warp noise field sampled along the tendril's
   length, so filaments curve instead of running straight — replacing the
   single straight arm with a small number of genuinely wispy tendrils.
5. **Holes** — instead of a `destination-out` circle cut into an otherwise-flat
   fill, holes are now just points where warped fBm density legitimately dips
   low (a second, sparser noise field gates in low-density regions within the
   inner ~60% of the radius) — a real property of the density field rather
   than a separate compositing step.
6. Sum every cloud's contribution at that pixel (same additive-then-clamp shape
   `Nebula.density` already uses), map to grayscale luminance (`#ffffff` at
   full density, fading to transparent — stays monochrome, matching the
   existing aesthetic and the reference images) times `strength`, output.

Blur: WebGL renders at full resolution with the falloff/warp already producing
soft edges from the noise math itself, so **no separate blur pass is needed**
(unlike the Canvas 2D version, which needed `ctx.filter = blur(...)` because a
clipped vector path has a hard edge by construction — a shader's density field
doesn't have that problem).

## Data flow / determinism

Cloud placement (`star_cloud`, `visible_clouds`) is completely unchanged — still
computed in pure March from `(stars, seed)`, still exactly as
deterministic and testable as today. Only the *rendering* of each cloud moves
to the GPU. `test/test_nebula.march`'s existing coverage (cloud placement, radius/
strength distribution, visibility filtering) needs zero changes. The shader
itself is not unit-tested (no March test harness reaches into GLSL) — verified
by browser inspection instead, same as the rest of the shell/draw layer.

## Performance

One draw call per frame to the offscreen canvas, cloud data as a small uniform
array (visible clouds are already filtered to a handful by `visible_clouds`'
margin-based visibility check) — well within a single fragment shader's budget
at 60fps for a viewport-sized canvas. No readback, no per-pixel JS loop (the
old noise-tile generation ran once at startup in JS; the new fBm runs entirely
on GPU, every frame, at full resolution).

## Testing approach

- Existing `test/test_nebula.march` (cloud placement/visibility) — unchanged, stays
  green.
- Shader correctness — browser-only, via live inspection (screenshot + visual
  comparison against the reference images), matching how the rest of the
  Canvas/shell drawing layer is already verified in this codebase (no
  automated pixel-diffing infrastructure exists or is being added here).
- Regression check: confirm the game still runs correctly with WebGL
  unavailable (older browsers / restricted contexts) — `webgl_get_context`
  returns `None` the same way `Canvas.get_context` already can, and the shell
  should skip the nebula draw entirely rather than crash (mirrors how a
  missing 2D context is already handled at boot).

## Open questions / assumptions flagged for review

- **WebGL1 vs WebGL2**: assuming WebGL1 (`getContext("webgl")` with a fallback
  to `"experimental-webgl"`) for the widest compatibility, since nothing here
  needs WebGL2-only features (no compute shaders, no MRT). Flag if WebGL2-only
  features become useful later (e.g. multiple render targets for a
  glow/bloom pass).
- **Cloud count cap**: `visible_clouds` has no hard cap today (only the
  camera-margin visibility filter). The shader needs a fixed-size uniform
  array (GLSL has no dynamic arrays), so a max cloud count (proposed: 16,
  generous relative to typical on-screen density) needs enforcing — clouds
  beyond the cap silently drop rather than crash. Not expected to matter in
  practice given typical star density, but worth confirming.
- **Cross-repo landing order** (new, from the repo split): the `WebGL` stdlib
  module has to exist in a march build that this repo's `build.sh` points at
  before the shell wiring here can compile at all. Until it's in a published
  toolchain, `build.sh`'s `MARCH_ROOT` override is how this repo picks up an
  unreleased compiler checkout — same mechanism already in use for the
  Int-division-truncation and self-tail-call fixes this game needed.

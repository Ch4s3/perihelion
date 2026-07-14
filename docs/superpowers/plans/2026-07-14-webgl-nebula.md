# WebGL Nebula Generation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Perihelion's Canvas-2D nebula rendering with a WebGL fragment-shader pass (domain-warped fractal noise, curving filaments, real density-based holes), composited onto the existing 2D canvas.

**Architecture:** A new `WebGL` March stdlib module (mirroring `Canvas`/`Audio`) wraps a WebGL context bound to a second, offscreen `<canvas>`. The shell renders nebula clouds to it every frame and composites the result onto the game's visible 2D canvas with one `Canvas.draw_image` call. Everything else (stars, ships, HUD) stays Canvas 2D.

**Tech Stack:** March (compiler + stdlib), WebGL1 (`getContext("webgl")`, fallback `"experimental-webgl"`), GLSL ES 1.00, dune/alcotest (compiler-side golden test).

## Global Constraints

- WebGL1, not WebGL2 (per spec: nothing here needs WebGL2-only features).
- Max 16 clouds per frame (`MAX_CLOUDS`); clouds beyond that silently drop, never crash.
- `Perihelion.Nebula` (cloud placement logic, `test/test_nebula.march`) must not change — only rendering moves to the GPU.
- WebGL unavailable (`get_context` returns `None`) must degrade gracefully: skip the nebula draw, never crash.
- No separate blur pass — the shader's own falloff/warp math produces soft edges.
- This is a two-repo feature. Phase 1 lands in the march compiler monorepo (worktree `/Users/80197052/code/march/.claude/worktrees/perihelion-fixes`, branch `claude/perihelion-aim-fix`) and must be fully built/tested there before Phase 2 (in `/Users/80197052/code/perihelion`) begins — Phase 2's `build.sh` compiles against that worktree via `MARCH_ROOT`, so Phase 1's `stdlib/webgl.march` must exist and compile cleanly first.

---

# Phase 1 — March compiler monorepo

All Phase 1 tasks run from `/Users/80197052/code/march/.claude/worktrees/perihelion-fixes`. Build/test commands in this phase use `dune build --root .` (this is a Claude worktree nested inside the main repo — see `/Users/80197052/code/march/.claude/worktrees/perihelion-fixes/CLAUDE.md`'s "Worktree dev-compiler workflow" note; plain `dune build` walks up and builds the wrong tree).

### Task 1: `runtime/march_webgl.mjs` — WebGL nebula shader renderer

**Files:**
- Create: `runtime/march_webgl.mjs`

**Interfaces:**
- Produces (JS exports, consumed by Task 2's `extern "webgl"` block):
  - `march_webgl_get_context(node) -> Option-shaped object` (`{$: "Some", _0: glContext}` or `{$: "None"}`)
  - `march_webgl_resize(gl, w, h) -> undefined`
  - `march_webgl_canvas_node(gl) -> HTMLCanvasElement`
  - `march_webgl_draw_nebula(gl, clouds, viewW, viewH, t) -> undefined`, where `clouds` is a March `List(Cloud)` value (`{$: "Cons", _0: head, _1: tail}` / `{$: "Nil"}`) and each `Cloud` is a plain object `{x, y, radius, strength, seed}` (all `Float`/JS `number`).

This is pure JS (no March involved yet) — write and inspect the file directly; there is no automated test for GLSL correctness (per spec's Testing approach), so verification for this task is a Node syntax/import smoke check, not a browser render.

- [ ] **Step 1: Write `runtime/march_webgl.mjs`**

```js
// march_webgl.mjs — WebGL nebula rendering for March programs compiled with
// --target js. Renders Perihelion.Nebula's cloud field (domain-warped
// fractal noise, curving filaments, density-based holes) to an offscreen
// <canvas>, composited into the game's 2D canvas via Canvas.draw_image.
// The offscreen canvas is created by March (Dom.create("canvas")) and
// never appended to the visible DOM tree.

const MAX_CLOUDS = 16;

function some(v) { return { $: "Some", _0: v }; }
const none = { $: "None" };
function opt(v) { return (v != null) ? some(v) : none; }

const VERTEX_SRC = `
attribute vec2 a_position;
varying vec2 vUv;
void main() {
  vUv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `
precision mediump float;
#define MAX_CLOUDS ${MAX_CLOUDS}

uniform vec2 u_resolution;
uniform int u_cloudCount;
uniform vec2 u_cloudPos[MAX_CLOUDS];
uniform float u_cloudRadius[MAX_CLOUDS];
uniform float u_cloudStrength[MAX_CLOUDS];
uniform float u_cloudSeed[MAX_CLOUDS];

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 4; i++) {
    sum += amp * valueNoise(p * freq);
    freq *= 2.0;
    amp *= 0.5;
  }
  return sum;
}

float smoothFalloff(float dist, float radius) {
  if (dist >= radius) return 0.0;
  float t = 1.0 - dist / radius;
  return t * t * (3.0 - 2.0 * t);
}

float filaments(vec2 rel, float dist, float radius, float seed) {
  float angle = atan(rel.y, rel.x);
  float total = 0.0;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float baseAngle = seed * 6.2831853 + fi * 2.0943951;
    float warpedAngle = baseAngle
      + (fbm(rel * 0.01 + vec2(seed * 13.0 + fi, seed * 7.0)) - 0.5) * 2.0;
    float angleDiff = mod(angle - warpedAngle + 3.14159265, 6.2831853) - 3.14159265;
    float angularFalloff = exp(-angleDiff * angleDiff * 10.0);
    float radialFalloff = smoothFalloff(dist, radius * 0.9);
    total += angularFalloff * radialFalloff * 0.5;
  }
  return total;
}

void main() {
  vec2 fragCoord = vec2(vUv.x, 1.0 - vUv.y) * u_resolution;
  float density = 0.0;

  for (int i = 0; i < MAX_CLOUDS; i++) {
    if (i >= u_cloudCount) break;
    vec2 rel = fragCoord - u_cloudPos[i];
    float dist = length(rel);
    float radius = u_cloudRadius[i];
    if (dist >= radius) continue;

    vec2 uv = rel / radius;
    vec2 warpOffset = vec2(
      fbm(uv * 2.0 + vec2(u_cloudSeed[i] * 13.0, 0.0)) - 0.5,
      fbm(uv * 2.0 + vec2(u_cloudSeed[i] * 29.0, 5.0)) - 0.5
    ) * 0.6;
    vec2 warpedUv = uv + warpOffset;

    float base = fbm(warpedUv * 3.0 + vec2(u_cloudSeed[i] * 7.0, 0.0));
    float radial = smoothFalloff(dist, radius);
    float d = base * radial;

    d += filaments(rel, dist, radius, u_cloudSeed[i]);

    float holeNoise = fbm(uv * 5.0 + vec2(u_cloudSeed[i] * 41.0, 100.0));
    if (dist < radius * 0.6 && holeNoise < 0.28) {
      d *= holeNoise / 0.28;
    }

    density += clamp(d, 0.0, 1.0) * u_cloudStrength[i];
  }

  density = clamp(density, 0.0, 1.0);
  gl_FragColor = vec4(1.0, 1.0, 1.0, density * 0.6);
}
`;

function compileShader(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("march_webgl: shader compile failed: " + log);
  }
  return shader;
}

function linkProgram(gl, vertSrc, fragSrc) {
  const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc);
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    throw new Error("march_webgl: program link failed: " + log);
  }
  gl.deleteShader(vert);
  gl.deleteShader(frag);
  return program;
}

// One renderer state (program, buffer, uniform locations) per WebGL
// context, built lazily on first draw and cached for the context's
// lifetime -- mirrors march_canvas.mjs's cached noise tile.
const __state = new WeakMap();

function stateFor(gl) {
  let st = __state.get(gl);
  if (st !== undefined) return st;

  const program = linkProgram(gl, VERTEX_SRC, FRAGMENT_SRC);

  const quad = new Float32Array([
    -1, -1, 1, -1, -1, 1,
    -1, 1, 1, -1, 1, 1,
  ]);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(program, "a_position");
  const uniforms = {
    resolution: gl.getUniformLocation(program, "u_resolution"),
    cloudCount: gl.getUniformLocation(program, "u_cloudCount"),
    cloudPos: gl.getUniformLocation(program, "u_cloudPos"),
    cloudRadius: gl.getUniformLocation(program, "u_cloudRadius"),
    cloudStrength: gl.getUniformLocation(program, "u_cloudStrength"),
    cloudSeed: gl.getUniformLocation(program, "u_cloudSeed"),
  };

  st = { program, buffer, aPosition, uniforms };
  __state.set(gl, st);
  return st;
}

// Walks a March List(Cloud) (Cons/Nil cells, records with named fields) into
// flat Float32Arrays sized MAX_CLOUDS, capping silently past that count.
function cloudsToArrays(clouds) {
  const pos = new Float32Array(MAX_CLOUDS * 2);
  const radius = new Float32Array(MAX_CLOUDS);
  const strength = new Float32Array(MAX_CLOUDS);
  const seed = new Float32Array(MAX_CLOUDS);
  let node = clouds;
  let count = 0;
  while (node.$ === "Cons" && count < MAX_CLOUDS) {
    const c = node._0;
    pos[count * 2] = c.x;
    pos[count * 2 + 1] = c.y;
    radius[count] = c.radius;
    strength[count] = c.strength;
    seed[count] = c.seed;
    count++;
    node = node._1;
  }
  return { pos, radius, strength, seed, count };
}

export function march_webgl_get_context(node) {
  const gl = node.getContext("webgl") || node.getContext("experimental-webgl");
  return opt(gl);
}

export function march_webgl_resize(gl, w, h) {
  gl.canvas.width = w;
  gl.canvas.height = h;
  gl.viewport(0, 0, w, h);
}

export function march_webgl_canvas_node(gl) {
  return gl.canvas;
}

export function march_webgl_draw_nebula(gl, clouds, viewW, viewH, _t) {
  const st = stateFor(gl);
  const { pos, radius, strength, seed, count } = cloudsToArrays(clouds);

  gl.useProgram(st.program);
  gl.bindBuffer(gl.ARRAY_BUFFER, st.buffer);
  gl.enableVertexAttribArray(st.aPosition);
  gl.vertexAttribPointer(st.aPosition, 2, gl.FLOAT, false, 0, 0);

  gl.uniform2f(st.uniforms.resolution, viewW, viewH);
  gl.uniform1i(st.uniforms.cloudCount, count);
  gl.uniform2fv(st.uniforms.cloudPos, pos);
  gl.uniform1fv(st.uniforms.cloudRadius, radius);
  gl.uniform1fv(st.uniforms.cloudStrength, strength);
  gl.uniform1fv(st.uniforms.cloudSeed, seed);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
}
```

`_t` is accepted but unused for now — the design spec's architecture threads a time value through for future animation, but nothing in this task's shader is time-driven yet.

- [ ] **Step 2: Verify the file parses as a valid ES module**

Run: `node --check runtime/march_webgl.mjs`
Expected: no output, exit code 0 (a syntax check only — it does not execute the module-level code, so no browser/WebGL APIs need to exist).

- [ ] **Step 3: Commit**

```bash
git add runtime/march_webgl.mjs
git commit -m "feat(webgl): add WebGL nebula shader renderer (JS runtime)"
```

---

### Task 2: `stdlib/webgl.march` + compiler registration + availability golden test

**Files:**
- Create: `stdlib/webgl.march`
- Modify: `bin/main.ml:261`
- Modify: `lib/tir/js_emit.ml:330-334`
- Create: `test/native/js_webgl_available.march`
- Create: `test/native/js_webgl_available.expected`
- Modify: `test/dune` (new rule block, insert after the `js_canvas_available` block ending around line 2105)

**Interfaces:**
- Consumes: `runtime/march_webgl.mjs`'s exports from Task 1 (`march_webgl_get_context`, `march_webgl_resize`, `march_webgl_canvas_node`, `march_webgl_draw_nebula`).
- Produces: the `WebGL` March module — `WebGL.Context` (opaque resource), `WebGL.Cloud` (record type `{x, y, radius, strength, seed}`, all `Float`), `WebGL.get_context(node) : Option(Context)`, `WebGL.resize(ctx, w, h) : Unit`, `WebGL.draw_nebula(ctx, clouds, view_w, view_h, t) : Unit`, `WebGL.canvas_node(ctx) : Node`. Phase 2 wiring in the perihelion repo calls these exactly.

- [ ] **Step 1: Write `stdlib/webgl.march`**

```march
-- WebGL — GPU nebula rendering for March compiled with --target js.
--
-- Wraps a WebGL rendering context to draw Perihelion's domain-warped
-- fractal-noise nebula clouds on the GPU. Requires --target js; calling
-- these functions from a native build panics.
--
-- Usage:
--   let node = Dom.create("canvas")  -- detached, never appended to the DOM
--   match WebGL.get_context(node) do
--     None    -> ()  -- WebGL unavailable; skip nebula rendering
--     Some(gl) ->
--       WebGL.resize(gl, 800.0, 600.0)
--       WebGL.draw_nebula(gl, clouds, 800.0, 600.0, 0.0)
--       Canvas.draw_image(ctx, WebGL.canvas_node(gl), 0.0, 0.0)
--   end

mod WebGL do
  needs Ffi

  -- Opaque handle to a WebGLRenderingContext.
  resource Context

  -- A single nebula cloud in screen-space pixel coordinates, ready to hand
  -- to the shader: `seed` varies filament/noise shape per-cloud without
  -- threading any new random state across the March/JS boundary.
  type Cloud = { x : Float, y : Float, radius : Float, strength : Float, seed : Float }

  extern "webgl" : Cap(Ffi) do
    fn webgl_get_context(node: Node)                                                : Option(Context) = "march_webgl_get_context"
    fn webgl_resize(ctx: Context, w: Float, h: Float)                               : Unit = "march_webgl_resize"
    fn webgl_draw_nebula(ctx: Context, clouds: List(Cloud), view_w: Float, view_h: Float, t: Float) : Unit = "march_webgl_draw_nebula"
    fn webgl_canvas_node(ctx: Context)                                              : Node = "march_webgl_canvas_node"
  end

  -- ── Public API ─────────────────────────────────────────────────────────

  doc "Get a WebGL rendering context for a `<canvas>` element (falls back to \"experimental-webgl\"). Returns `None` if WebGL is unavailable."
  fn get_context(node)                              do webgl_get_context(node) end

  doc "Resize the WebGL canvas's backing buffer to `(w, h)` and update its viewport. Call whenever the game viewport changes size."
  fn resize(ctx, w, h)                              do webgl_resize(ctx, w, h) end

  doc "Render `clouds` (screen-space pixel coordinates) into the offscreen WebGL canvas at `(view_w, view_h)` resolution. `t` is reserved for future time-based animation. Composite the result with `Canvas.draw_image(ctx2d, WebGL.canvas_node(ctx), 0.0, 0.0)`."
  fn draw_nebula(ctx, clouds, view_w, view_h, t)     do webgl_draw_nebula(ctx, clouds, view_w, view_h, t) end

  doc "The underlying offscreen `<canvas>` element, as a `Dom.Node` -- pass directly to `Canvas.draw_image`."
  fn canvas_node(ctx)                                do webgl_canvas_node(ctx) end

end
```

- [ ] **Step 2: Register `webgl.march` as a JS-only stdlib module**

In `bin/main.ml`, find line 261:

```ocaml
let js_only_stdlib_file_list = ["dom.march"; "canvas.march"; "audio.march"]
```

Replace with:

```ocaml
let js_only_stdlib_file_list = ["dom.march"; "canvas.march"; "audio.march"; "webgl.march"]
```

- [ ] **Step 3: Register the `webgl` JS runtime module path**

In `lib/tir/js_emit.ml`, find lines 330-334:

```ocaml
let js_runtime_module_path = function
  | "dom"    -> Some "./march_dom.mjs"
  | "canvas" -> Some "./march_canvas.mjs"
  | "audio"  -> Some "./march_audio.mjs"
  | _        -> None
```

Replace with:

```ocaml
let js_runtime_module_path = function
  | "dom"    -> Some "./march_dom.mjs"
  | "canvas" -> Some "./march_canvas.mjs"
  | "audio"  -> Some "./march_audio.mjs"
  | "webgl"  -> Some "./march_webgl.mjs"
  | _        -> None
```

- [ ] **Step 4: Build the compiler**

Run: `dune build --root . bin/main.exe`
Expected: exit code 0, no output (a clean build).

- [ ] **Step 5: Write the availability golden test source**

Create `test/native/js_webgl_available.march`:

```march
-- Regression: WebGL module must be auto-loaded for --target js builds.
-- webgl.march is JS-only and excluded from native/JIT stdlib precompile.
-- This typechecks WebGL.* usage without calling it at runtime (no real
-- <canvas>/WebGLRenderingContext exists under plain node).
mod JsWebglAvailable do
  fn webgl_smoke(node: Node, clouds: List(WebGL.Cloud)) : Unit do
    match WebGL.get_context(node) do
      None -> ()
      Some(ctx) ->
        WebGL.resize(ctx, 800.0, 600.0)
        WebGL.draw_nebula(ctx, clouds, 800.0, 600.0, 0.0)
        let _ = WebGL.canvas_node(ctx)
        ()
    end
  end

  fn main() : Unit do
    println("webgl available")
  end
end
```

- [ ] **Step 6: Write the expected output**

Create `test/native/js_webgl_available.expected`:

```
webgl available
```

- [ ] **Step 7: Add the dune golden-test rule**

In `test/dune`, find the end of the `js_canvas_available` block (the line `(rule (alias runtest) (action (diff native/js_canvas_available.expected js_canvas_available.out)))`, currently at line 2105) and insert immediately after it:

```
; js_webgl_available — verifies that webgl.march is auto-loaded for --target js builds
(rule
 (targets js_webgl_available.mjs)
 (deps (file %{exe:../bin/main.exe}) (glob_files ../stdlib/*.march)
       (file native/js_webgl_available.march) march_runtime.mjs)
 (action (run %{exe:../bin/main.exe} --target js --no-copy-runtime
              -o js_webgl_available.mjs native/js_webgl_available.march)))

(rule
 (targets js_webgl_available.out)
 (deps js_webgl_available.mjs march_runtime.mjs)
 (action (with-stdout-to js_webgl_available.out (run node js_webgl_available.mjs))))

(rule (alias runtest) (action (diff native/js_webgl_available.expected js_webgl_available.out)))
```

- [ ] **Step 8: Run the new golden test**

Run: `dune build --root . test/run_codegen.exe && ./_build/default/test/run_codegen.exe -e 2>&1 | grep -i webgl`
Expected: a line containing `js_webgl_available` and `[OK]` (alcotest's short-name column may truncate the label — confirm no `FAIL` appears for it).

If it fails with a shader/parse error from `march`, re-check Step 1's syntax against `stdlib/canvas.march`/`stdlib/audio.march` (both read during Task setup) for the exact `extern "..." : Cap(Ffi) do ... end` shape.

- [ ] **Step 9: Commit**

```bash
git add stdlib/webgl.march bin/main.ml lib/tir/js_emit.ml \
  test/native/js_webgl_available.march test/native/js_webgl_available.expected test/dune
git commit -m "feat(webgl): add WebGL stdlib module, register for --target js, golden smoke test"
```

---

### Task 3: Docs, full-suite verification, commit

**Files:**
- Modify: `CLAUDE.md:146`
- Modify: `docs/stdlib.md:14`
- Modify: `specs/todos.md`
- Modify: `specs/progress.md`

**Interfaces:** None — this task only touches docs and runs verification; Phase 2 does not depend on anything from this task's diffs.

- [ ] **Step 1: Update the stale stdlib module count**

`stdlib/` now has 111 `.march` files (was 110 — confirm with `ls stdlib/*.march | wc -l`).

In `CLAUDE.md`, find line 146:

```
stdlib/                     110 March stdlib modules (list, map, enum, sort, crypto, http, json, distributed-OTP, …)
```

Replace with:

```
stdlib/                     111 March stdlib modules (list, map, enum, sort, crypto, http, json, distributed-OTP, …)
```

In `docs/stdlib.md`, find line 14:

```
March ships with 110 stdlib modules covering collections, strings, I/O, HTTP, cryptography, and more. This page provides an overview and quick reference for the most commonly used modules.
```

Replace `110` with `111`.

- [ ] **Step 2: Run the doc-freshness lint**

Run: `scripts/check-docs.sh`
Expected: exit code 0; the stdlib module-count check (`Check B`) reports `ok — no stale stdlib counts`.

- [ ] **Step 3: Move the todo and add a progress entry**

In `specs/todos.md`, add a new entry (near other recently-completed Perihelion/JS-backend items) — this is a genuinely new capability, not a fix, so it doesn't need the "bug/root cause" shape used elsewhere in that file; a short "Done" note is enough:

```markdown
## WebGL nebula rendering — `stdlib/webgl.march` (done 2026-07-14)

- ✅ Added a `WebGL` JS-only stdlib module (mirrors `Canvas`/`Audio`): opaque
  `Context` resource, `Cloud` record type, `extern "webgl"` block bound to
  `runtime/march_webgl.mjs` (a domain-warped fractal-noise nebula shader).
  Registered in `bin/main.ml`'s `js_only_stdlib_file_list` and
  `lib/tir/js_emit.ml`'s `js_runtime_module_path`, same two-step pattern
  `audio.march` needed. Golden availability test:
  `test/native/js_webgl_available.march`.
```

In `specs/progress.md`, add a new dated "Current State" section at the top (above the existing most-recent entry), following the file's established format:

```markdown
## Current State (as of 2026-07-14, WebGL nebula rendering — new `stdlib/webgl.march` module)

**Added a `WebGL` stdlib module** for GPU-rendered nebula effects on
`--target js` builds: opaque `Context` resource wrapping a
`WebGLRenderingContext`, a `Cloud` record type, and four bindings
(`get_context`, `resize`, `draw_nebula`, `canvas_node`) backed by
`runtime/march_webgl.mjs` — a hand-written GLSL fragment shader
implementing 4-octave fBm, domain warping, curving filaments, and
density-gated holes. Registered via the same two-step pattern every prior
JS-only stdlib module (`dom`/`canvas`/`audio`) needed:
`js_only_stdlib_file_list` (`bin/main.ml`) and `js_runtime_module_path`
(`lib/tir/js_emit.ml`). Verified via a new golden availability test
(`test/native/js_webgl_available.march`, mirrors
`js_canvas_available.march`) plus the full compiler/eval/codegen suites.
stdlib module count: 111 (was 110).
```

- [ ] **Step 4: Run the full compiler/eval/codegen suites**

Run:
```bash
dune build --root . test/run_compiler.exe test/run_eval.exe test/run_codegen.exe
/Users/80197052/code/march/.claude/worktrees/perihelion-fixes/_build/default/test/run_compiler.exe -e
/Users/80197052/code/march/.claude/worktrees/perihelion-fixes/_build/default/test/run_eval.exe -e
/Users/80197052/code/march/.claude/worktrees/perihelion-fixes/_build/default/test/run_codegen.exe -e
```

Use **absolute paths** to invoke the test binaries (not `./_build/...`) — a relative invocation makes `test_eval.ml`'s `repl integration` suite miscompute its own binary location and spuriously fail (`Sys.executable_name` resolves relative to the invocation string, not the true absolute path). See `bin/main.ml`'s early subcommand dispatch note for an unrelated example of the same relative-vs-absolute class of issue; here it's `test/test_eval.ml`'s `test_repl_renders_desugar_parse_error`, not something this plan touches — just invoke absolutely and it's a non-issue.

Expected: all three exit 0, "All suites passed" (or each individual "Test Successful" with 0 failures) — 503 compiler tests, 232 eval tests, 405 codegen tests (was 404 — the new `js_webgl_available` golden adds one).

- [ ] **Step 5: Commit**

```bash
git add CLAUDE.md docs/stdlib.md specs/todos.md specs/progress.md
git commit -m "docs(webgl): update stdlib count, todos, progress for the new WebGL module"
```

**Phase 1 complete.** Do not begin Phase 2 until Task 3's Step 4 (full suite) passes.

---

# Phase 2 — perihelion repo

All Phase 2 tasks run from `/Users/80197052/code/perihelion`. This repo does not yet depend on a published march toolchain (see its `README.md`) — `build.sh`/`run-tests.sh` build march from `MARCH_ROOT` (defaults to `~/code/march`, but Phase 1 landed in a **worktree**, not the main checkout). Every build/test command in this phase must set:

```bash
export MARCH_ROOT=/Users/80197052/code/march/.claude/worktrees/perihelion-fixes
```

first (or prefix each command with `MARCH_ROOT=... `).

### Task 4: Thread a WebGL context through `Fx`

**Files:**
- Modify: `lib/perihelion.march` (the `Fx` type and `fx_init`, lines 28-39)

**Interfaces:**
- Consumes: `WebGL.Context`, `WebGL.get_context` (Phase 1, Task 2).
- Produces: `Fx.gl : Option(WebGL.Context)` — Task 5 reads this field to decide whether to render the nebula.

- [ ] **Step 1: Add the `gl` field to `Fx`**

In `lib/perihelion.march`, find (around line 28):

```march
  type Fx = {
    trail : List((Float, Float)),
    t : Float,
    particles : List(Particle),
    flash : Option((Float, Float, Float)),
    actx : Audio.Ctx,
    muted : Bool
  }
```

Replace with:

```march
  type Fx = {
    trail : List((Float, Float)),
    t : Float,
    particles : List(Particle),
    flash : Option((Float, Float, Float)),
    actx : Audio.Ctx,
    muted : Bool,
    gl : Option(WebGL.Context)
  }
```

- [ ] **Step 2: Create the offscreen canvas + WebGL context in `fx_init`**

Find (around line 37):

```march
  pfn fx_init() : Fx do
    { trail: Nil, t: 0.0, particles: Nil, flash: None, actx: Audio.create(), muted: false }
  end
```

Replace with:

```march
  pfn fx_init() : Fx do
    let gl_node = Dom.create("canvas")
    { trail: Nil, t: 0.0, particles: Nil, flash: None, actx: Audio.create(), muted: false,
      gl: WebGL.get_context(gl_node) }
  end
```

(`step_fx`, `{ fx1 with muted: muted2 }`, and every other `{ fx with ... }` record-update site in this file preserve `gl` automatically — March record update syntax copies every field not explicitly listed. No other call site in this file needs a change for this task.)

- [ ] **Step 3: Build and confirm it compiles**

Run: `MARCH_ROOT=/Users/80197052/code/march/.claude/worktrees/perihelion-fixes ./build.sh`
Expected: `compiled /Users/80197052/code/perihelion/perihelion.mjs` printed, exit code 0. (The game is not yet visually different — this task only adds plumbing; Task 5 wires up the actual draw call.)

- [ ] **Step 4: Run the existing test suite (confirms nothing broke)**

Run: `MARCH_ROOT=/Users/80197052/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: exit code 0, all five `test/*.march` files report their existing pass counts (185/212/141/145/149 — combat/core/level/nebula/upgrades) unchanged.

- [ ] **Step 5: Commit**

```bash
git add lib/perihelion.march
git commit -m "feat(webgl): thread an offscreen WebGL context through Fx"
```

---

### Task 5: Render the nebula via WebGL, composite onto the 2D canvas

**Files:**
- Modify: `lib/perihelion.march` (`draw`, `draw_nebula`/`draw_nebula_clouds`/`nebula_alpha_cap`, `tick`, `resize_canvas` area)

**Interfaces:**
- Consumes: `Fx.gl` (Task 4), `WebGL.resize`/`WebGL.draw_nebula`/`WebGL.canvas_node` (Phase 1), `Perihelion.Nebula.visible_clouds`/`Perihelion.Nebula.Cloud` (unchanged, existing), `Canvas.draw_image` (existing stdlib).
- Produces: the game's actual nebula visual now comes from WebGL; the old Canvas-2D nebula path is removed entirely.

- [ ] **Step 1: Delete the old Canvas-2D nebula drawing code**

In `lib/perihelion.march`, find this block (around lines 401-419) — the section header, its 4-line comment (both describe the old Canvas-2D approach being replaced), and the three functions it introduces:

```march
  -- ── Nebula ───────────────────────────────────────────────────────────
  -- Renders Perihelion.Nebula's clouds right after the starfield (behind
  -- stars/entities/ball, so the player passes THROUGH a cloud, not around
  -- it). "Subtle atmosphere": alpha is capped low enough that everything
  -- gameplay-relevant stays clearly readable through it.
  fn nebula_alpha_cap() : Float do 0.16 end

  pfn draw_nebula_clouds(ctx, clouds : List(Perihelion.Nebula.Cloud)) : Unit do
    match clouds do
      Nil -> ()
      Cons(c, rest) ->
        Canvas.fill_noise_circle(ctx, c.x, c.y, c.radius, nebula_alpha_cap() * c.strength)
        draw_nebula_clouds(ctx, rest)
    end
  end

  pfn draw_nebula(ctx, stars : List(Star), cam : Float, view_h : Float, seed : Float) : Unit do
    draw_nebula_clouds(ctx, Perihelion.Nebula.visible_clouds(stars, cam, view_h, seed))
  end
```

Replace the whole block with just a new section header and comment (Step 2 adds the replacement functions right after it):

```march
  -- ── Nebula ───────────────────────────────────────────────────────────
  -- Renders Perihelion.Nebula's clouds via WebGL, composited onto the 2D
  -- canvas (see docs/superpowers/specs/2026-07-13-webgl-nebula-design.md).
  -- Rendered right after the background fill, before the camera translate,
  -- so the composite lands in screen space -- see draw_nebula_gl below.
```

- [ ] **Step 2: Add the screen-space cloud mapping + WebGL draw + composite function**

Add this new function where `draw_nebula` used to be (same location, replacing it):

```march
  pfn to_screen_clouds(clouds : List(Perihelion.Nebula.Cloud), cam_x : Float, cam_y : Float) : List(WebGL.Cloud) do
    match clouds do
      Nil -> Nil
      Cons(c, rest) ->
        Cons({ x: c.x - cam_x, y: c.y - cam_y, radius: c.radius, strength: c.strength, seed: hashf(c.x, c.y) },
             to_screen_clouds(rest, cam_x, cam_y))
    end
  end

  pfn draw_nebula_gl(ctx, gl_opt : Option(WebGL.Context), game : Game, seed : Float) : Unit do
    match gl_opt do
      None -> ()
      Some(gl) ->
        let clouds = Perihelion.Nebula.visible_clouds(game.stars, game.camera_y, game.view_h, seed)
        let screen_clouds = to_screen_clouds(clouds, game.camera_x, game.camera_y)
        WebGL.draw_nebula(gl, screen_clouds, game.view_w, game.view_h, seed)
        Canvas.draw_image(ctx, WebGL.canvas_node(gl), 0.0, 0.0)
    end
  end
```

`to_screen_clouds` derives each cloud's shader seed via the shell's own `hashf(a, b)` helper (defined earlier in this file, around line 49) — `Perihelion.Nebula.Cloud` itself gains no new field, matching the spec's "Cloud placement logic unchanged, pure March" constraint.

- [ ] **Step 3: Wire the new draw call into `draw()`, composited in screen space**

Find `draw()` (around line 675):

```march
  pfn draw(ctx, game : Game, fx : Fx) : Unit do
    Canvas.set_global_alpha(ctx, 1.0)
    Canvas.set_fill_style(ctx, "#0a0a0a")
    Canvas.fill_rect(ctx, 0.0, 0.0, game.view_w, game.view_h)
    Canvas.save(ctx)
    Canvas.translate(ctx, 0.0 - game.camera_x, 0.0 - game.camera_y)
    let seedf = int_to_float(game.seed)
    draw_starfield(ctx, game.camera_x, game.camera_y, game.view_w, game.view_h, seedf, fx.t)
    draw_nebula(ctx, game.stars, game.camera_y, game.view_h, seedf)
```

Replace with:

```march
  pfn draw(ctx, game : Game, fx : Fx) : Unit do
    Canvas.set_global_alpha(ctx, 1.0)
    Canvas.set_fill_style(ctx, "#0a0a0a")
    Canvas.fill_rect(ctx, 0.0, 0.0, game.view_w, game.view_h)
    let seedf = int_to_float(game.seed)
    draw_nebula_gl(ctx, fx.gl, game, seedf)
    Canvas.save(ctx)
    Canvas.translate(ctx, 0.0 - game.camera_x, 0.0 - game.camera_y)
    draw_starfield(ctx, game.camera_x, game.camera_y, game.view_w, game.view_h, seedf, fx.t)
```

The nebula composite now happens **before** `Canvas.translate` (i.e. while `ctx`'s transform is still identity), because `WebGL.draw_nebula`'s clouds are already in screen-space pixel coordinates (via `to_screen_clouds`) and `Canvas.draw_image(ctx, ..., 0.0, 0.0)` must land at literal screen `(0, 0)` — drawing it after the translate would double-offset the composited image by `(-camera_x, -camera_y)`.

- [ ] **Step 4: Resize the WebGL canvas alongside the 2D canvas**

Find `resize_canvas` (around line 770):

```march
  pfn resize_canvas(el, game : Game, w : Float, h : Float) : Unit do
    if w == game.view_w && h == game.view_h do
      ()
    else
      Dom.set_attr(el, "width", int_to_string(float_to_int(w)))
      Dom.set_attr(el, "height", int_to_string(float_to_int(h)))
    end
  end
```

Add a new function immediately after it:

```march
  pfn resize_gl(gl_opt : Option(WebGL.Context), game : Game, w : Float, h : Float) : Unit do
    if w == game.view_w && h == game.view_h do
      ()
    else
      match gl_opt do
        None -> ()
        Some(gl) -> WebGL.resize(gl, w, h)
      end
    end
  end
```

Then find the call site in `tick()` (around line 884):

```march
    resize_canvas(el, game, view_w, view_h)
```

Replace with:

```march
    resize_canvas(el, game, view_w, view_h)
    resize_gl(fx.gl, game, view_w, view_h)
```

- [ ] **Step 5: Build**

Run: `MARCH_ROOT=/Users/80197052/code/march/.claude/worktrees/perihelion-fixes ./build.sh`
Expected: `compiled /Users/80197052/code/perihelion/perihelion.mjs`, exit code 0. If it fails with "Unknown function `draw_nebula`" or similar, confirm every old call site from Step 1 was actually removed (search the file for `draw_nebula(` with the old 5-arg native signature — only `draw_nebula_gl` should remain).

- [ ] **Step 6: Run the test suite**

Run: `MARCH_ROOT=/Users/80197052/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: exit code 0, `test_nebula.march`'s 145 tests unchanged (this task never touched `lib/perihelion_nebula.march`).

- [ ] **Step 7: Commit**

```bash
git add lib/perihelion.march
git commit -m "feat(webgl): render the nebula via WebGL, composite onto the 2D canvas"
```

---

### Task 6: Sync the runtime shim, verify in a browser, update docs, push

**Files:**
- Modify: `build.sh`
- Modify: `README.md`

**Interfaces:** None — this is the final integration/verification task.

- [ ] **Step 1: Copy `march_webgl.mjs` alongside the other runtime shims**

In `build.sh`, find:

```bash
echo "Syncing runtime shims from march..."
cp "$MARCH_ROOT/runtime/march_runtime.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_dom.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_canvas.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_audio.mjs" "$HERE/"
```

Replace with:

```bash
echo "Syncing runtime shims from march..."
cp "$MARCH_ROOT/runtime/march_runtime.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_dom.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_canvas.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_audio.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_webgl.mjs" "$HERE/"
```

- [ ] **Step 2: Rebuild with the updated script**

Run: `MARCH_ROOT=/Users/80197052/code/march/.claude/worktrees/perihelion-fixes ./build.sh`
Expected: exit code 0; `ls march_webgl.mjs` in the repo root now succeeds.

- [ ] **Step 3: Serve and verify in a browser**

Start a static server (`python3 -m http.server 8000` from the repo root, or the project's existing `perihelion-upgrades` preview launch config if using the Browser pane tooling) and open `index.html`.

Check, via the browser (screenshot + console):
- The game loads and runs with no console errors (specifically no "march_webgl: shader compile failed" or "program link failed" — if either appears, the GLSL source has a syntax error; read the logged error text, it names the offending line).
- A nebula is visible near stars that previously showed the old soft cloudy patches — now should show the domain-warped/filament look instead of flat noise circles.
- Resize the browser window (or rotate on mobile emulation) and confirm the nebula still renders correctly at the new size (exercises `resize_gl`/`WebGL.resize`).
- Play through orbiting/releasing at least once and confirm no regressions in stars/ships/HUD (everything not touched by this plan).

If WebGL is unavailable in the test environment, confirm the game still runs (no nebula, no crash) — this is the `None` branch of `draw_nebula_gl`.

- [ ] **Step 4: Update the README**

In `README.md`, find the "Building" section's note about pending compiler fixes:

```
This repo doesn't yet depend on a published March toolchain — a few compiler
fixes this game needs (JS-target `Audio` module support, self-recursive
tail-call return values, `Int` division truncation) aren't in a released
version yet.
```

Replace with:

```
This repo doesn't yet depend on a published March toolchain — a few compiler
fixes/additions this game needs (JS-target `Audio` module support,
self-recursive tail-call return values, `Int` division truncation,
JS-target `WebGL` module support) aren't in a released version yet.
```

- [ ] **Step 5: Commit and push**

```bash
git add build.sh README.md
git commit -m "feat(webgl): sync march_webgl.mjs shim, verify in browser"
git push
```

**Phase 2 complete.**

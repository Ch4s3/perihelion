# Pixel-Art Player Ship Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the player's plain white circle with a pre-rendered pixel-art ship sprite that rotates to face travel direction.

**Architecture:** A 64x96 pixel grid (extracted by averaged-downsampling a reference image, provided verbatim below) is drawn once at boot into an offscreen canvas via merged-run `Canvas.fill_rect` calls, at a fixed 32x48 world-unit target size. Every frame, drawing the ship becomes one `Canvas.draw_node` blit under a translate+rotate transform — the same offscreen-canvas-then-blit pattern already used for the WebGL nebula.

**Tech Stack:** March, Canvas 2D (`stdlib/canvas.march`), Dom (`stdlib/dom.march`) — no new stdlib bindings needed, everything used here already exists.

## Global Constraints

- Enemy ships are NOT touched by this plan — they keep their existing triangle. Only the player ball changes.
- No new march-compiler-monorepo work — this plan is entirely within `~/code/perihelion`.
- The sprite's local "nose" points UP (row 0 of the grid), not +X — every rotation call needs a fixed `+1.5707963` (90°) offset added to the computed heading, matching the existing rotation convention where heading 0 = nose at +X (see `ship_heading`'s `ShipOrbiting` case, which already adds a `±90°` offset for the same reason).
- `player_sprite` must be `Option(Node)` (not a bare `Node`) — `Canvas.get_context` is `Option`-returning, and `draw_ball` must fall back to the original circle draw when it's `None`, never crash.
- **Critical, learned the hard way in the earlier WebGL nebula work:** a freshly created `<canvas>` via `Dom.create("canvas")` defaults to 300x150 pixels until its `width`/`height` attributes are explicitly set. The offscreen sprite canvas MUST have `Dom.set_attr(node, "width", "32")` / `Dom.set_attr(node, "height", "48")` called on it BEFORE getting its 2D context and drawing — otherwise the sprite draws into the corner of an oversized canvas, and `Canvas.draw_node`'s natural-size blit will look wrong (a repeat of the exact bug that had to be fixed in the WebGL nebula's Task 5).
- Every `Canvas.fill_rect` call the sprite-drawing code emits must use pixel-rounded rectangle edges (round each edge of a cell run to the nearest whole pixel via `Math.round`, computing both edges independently rather than a start-plus-width) — adjacent runs must share exact boundaries with no sub-pixel gaps. This exact gap-artifact bug was hit once already (in the design brainstorming's HTML mockup) and wasted a full round of back-and-forth; get it right the first time here.

---

### Task 1: Pixel-data grid + offscreen pre-render infrastructure

**Files:**
- Modify: `lib/perihelion.march` (`Fx` type around line 28, `fx_init` around line 37 — add new functions near them)

**Interfaces:**
- Produces: `Fx.player_sprite : Option(Node)` (new field) — Task 2 reads this in `draw_ball`.
- Produces: `draw_player_sprite_pixels(ctx) : Unit` — called once from `fx_init`, not used elsewhere.

- [ ] **Step 1: Add the `player_sprite` field to `Fx`**

Find (around line 28):

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

Replace with:

```march
  type Fx = {
    trail : List((Float, Float)),
    t : Float,
    particles : List(Particle),
    flash : Option((Float, Float, Float)),
    actx : Audio.Ctx,
    muted : Bool,
    gl : Option(WebGL.Context),
    player_sprite : Option(Node)
  }
```

- [ ] **Step 2: Add the pixel-grid data and sprite-drawing functions**

Add these functions somewhere near `fx_init` (e.g. immediately before it). This is the full 64-column x 96-row grid, extracted by averaging every pixel of a reference image into each cell and classifying by brightness into 5 tones (`0` = background/skip, `1` = `#e2e2e2` light hull, `2` = `#333333` dark, `3` = `#ffffff` white highlight, `4` = `#9a9a9a` mid gray). Transcribe every row exactly as given — do not trim or "clean up" rows, even the all-zero ones at the top/bottom (they're harmless, and transcribing exactly avoids miscounting):

```march
  pfn player_sprite_grid() : List(String) do
    ["0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000001100000011000000000000000000000000000",
     "0000000000000000000000000001100000011000000000000000000000000000",
     "0000000000000000000000000001100000011000000000000000000000000000",
     "0000000000000000000000000001100240011000000000000000000000000000",
     "0000000000000000000000000001142242044000000000000000000000000000",
     "0000000000000000000000000001334244022000000000000000000000000000",
     "0000000000000000000000000002331444220000000000000000000000000000",
     "0000000000000000000000000021331444222200000000000000000000000000",
     "0000000000000000000000000013331444224310000000000000000000000000",
     "0000000000000000000000000133331444223334200000000000000000000000",
     "0000000000000000000000000333331444243333310000000000000000000000",
     "0000000000000000000000000433331444243333312000000000000000000000",
     "0000000000000000000000000333331444243333334000000000000000000000",
     "0000000000000000000000000333331444243333314000000000000000000000",
     "0000000000000000000000000333332244243333314000000000000000000000",
     "0000000000000000000000000333334244043333314000000000000000000000",
     "0000000000000000000000000333331444043333314000000000000000000000",
     "0000000000000000000000000333311440043333312000000000000000000000",
     "0000000000000000000000000333311420043333312000000000000000000000",
     "0000000000000000000000000333311000043313312000000000000000000000",
     "0000000000000000000000000333314000043123312000000000000000000000",
     "0000000000000000000000000333314400043423312000000000000000000000",
     "0000000000000000000000000333314420213423312000000000000000000000",
     "0000000000000000000000000333314442133423312000000000000000000000",
     "0000000000000000000000003333314442133423310000000000000000000000",
     "0000000000000000000000003333314442133423400000000000000000000000",
     "0000000000000000000000003333314442133422000000000000000000000000",
     "0000000000000000000000043333314442133420000000000000000000000000",
     "0000000000000000000000041333314442133421200000000000000000000000",
     "0000000000000000000000002333314442133421200000000000000000000000",
     "0000000000000000000000003333314442133111200000000000000000000000",
     "0000000000000000000000003333314442133311200000000000000000000000",
     "0000000000000000000000003333344442133311200000000000000000000000",
     "0000000000000000000000003341300002133331200000000000000000000000",
     "0000000000000000000000003344400002133111200000000000000000000000",
     "0000000000000000000000003342200002133441200000000000000000000000",
     "0000000000000000000000003334224312133331200000000000000000000000",
     "0000000000000000000000003331444312133111200000000000000000000000",
     "0000000000000000000000003333133312133221200000000000000000000000",
     "0000000000000000000000002333333312133142200000000000000000000000",
     "0000000000000000000000000333333312133312000000000000000000000000",
     "0000000000000000000000044341333312222221420000000000000000000000",
     "0000000000000000000000011104333312000003140000000000000000000000",
     "0000000000000000000004313342233312021223333000000000000000000000",
     "0000000000000000000004113342013312023423333200000000000000000000",
     "0000000000000000000011133142013312043423331320000000000000000000",
     "0000000000000000002413331442013312043423331342000000000000000000",
     "0000000000000000002313311442013312043223333132000000000000000000",
     "0000000000000000004333344442043312043223333312000000000000000000",
     "0000000000000000041333444442024312043223333334200000000000000000",
     "0000000000000000043333444442013312020023333334200000000000000000",
     "0000000000000000041333444442013312022223333334200000000000000000",
     "0000000000000000041333444442013312043223333334200000000000000000",
     "0000000000000000041333444420024332413223333334200000000000000000",
     "0000000000000000041333444400002331333223333331400000000000000000",
     "0000000000000000041333442000013333333334133331400000000000000000",
     "0000000000000000041333220020013333333141413331400000000000000000",
     "0000000000000000041333000042013333333223423331400000000000000000",
     "0000000000000000041333004442013333333223314331400000000000000000",
     "0000000000000000041333004442013333333223331331400000000000000000",
     "0000000000000000041333024442022222222223333331400000000000000000",
     "0000000000000000041333024442000000000023333331400000000000000000",
     "0000000000000000041333024442000000000023333334200000000000000000",
     "0000000000000000024333024442000000000023333332000000000000000000",
     "0000000000000000002433024442000000000023333342000000000000000000",
     "0000000000000000000233024442000000000023333320000000000000000000",
     "0000000000000000000233422442000000000023333120000000000000000000",
     "0000000000000000000022222220000000000002242200000000000000000000",
     "0000000000000000000002442000000000000002442000000000000000000000",
     "0000000000000000000004314000000000000001312000000000000000000000",
     "0000000000000000000013311400000000000013331400000000000000000000",
     "0000000000000000000031141100000000000031111100000000000000000000",
     "0000000000000000000012002100000000000032004100000000000000000000",
     "0000000000000000000020000200000000000020000200000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000",
     "0000000000000000000000000000000000000000000000000000000000000000"]
  end

  pfn sprite_tone_color(tone : String) : String do
    match tone do
      "1" -> "#e2e2e2"
      "2" -> "#333333"
      "3" -> "#ffffff"
      _   -> "#9a9a9a"
    end
  end

  -- Emits one fill_rect for the run [start_col, end_col] (inclusive) at
  -- row_idx, in a grid_w x grid_h grid mapped onto a target_w x target_h
  -- canvas. Both edges are rounded independently to the nearest whole
  -- pixel so adjacent runs share exact boundaries -- never compute one
  -- edge and add a separately-rounded width, or gaps appear between runs.
  pfn draw_sprite_run(ctx, row_idx : Int, start_col : Int, end_col : Int, tone : String, grid_w : Int, grid_h : Int, target_w : Float, target_h : Float) : Unit do
    if tone == "0" do
      ()
    else
      let x0 = Math.round(int_to_float(start_col) / int_to_float(grid_w) * target_w)
      let x1 = Math.round(int_to_float(end_col + 1) / int_to_float(grid_w) * target_w)
      let y0 = Math.round(int_to_float(row_idx) / int_to_float(grid_h) * target_h)
      let y1 = Math.round(int_to_float(row_idx + 1) / int_to_float(grid_h) * target_h)
      Canvas.set_fill_style(ctx, sprite_tone_color(tone))
      Canvas.fill_rect(ctx, x0, y0, x1 - x0, y1 - y0)
    end
  end

  -- Walks one row's characters left to right, tracking the current run's
  -- start column and tone; emits a run (via draw_sprite_run) every time
  -- the tone changes, and once more at the end of the row for the final
  -- run. col starts at 1 (not 0) because run_tone is pre-seeded with the
  -- character at column 0 by draw_sprite_row.
  pfn draw_sprite_row_go(ctx, row : String, row_idx : Int, col : Int, run_start : Int, run_tone : String, grid_w : Int, grid_h : Int, target_w : Float, target_h : Float) : Unit do
    if col >= grid_w do
      draw_sprite_run(ctx, row_idx, run_start, grid_w - 1, run_tone, grid_w, grid_h, target_w, target_h)
    else
      let tone = String.slice(row, col, 1)
      if tone == run_tone do
        draw_sprite_row_go(ctx, row, row_idx, col + 1, run_start, run_tone, grid_w, grid_h, target_w, target_h)
      else
        draw_sprite_run(ctx, row_idx, run_start, col - 1, run_tone, grid_w, grid_h, target_w, target_h)
        draw_sprite_row_go(ctx, row, row_idx, col + 1, col, tone, grid_w, grid_h, target_w, target_h)
      end
    end
  end

  pfn draw_sprite_row(ctx, row : String, row_idx : Int, grid_w : Int, grid_h : Int, target_w : Float, target_h : Float) : Unit do
    draw_sprite_row_go(ctx, row, row_idx, 1, 0, String.slice(row, 0, 1), grid_w, grid_h, target_w, target_h)
  end

  pfn draw_sprite_rows(ctx, rows : List(String), row_idx : Int, grid_w : Int, grid_h : Int, target_w : Float, target_h : Float) : Unit do
    match rows do
      Nil -> ()
      Cons(row, rest) ->
        draw_sprite_row(ctx, row, row_idx, grid_w, grid_h, target_w, target_h)
        draw_sprite_rows(ctx, rest, row_idx + 1, grid_w, grid_h, target_w, target_h)
    end
  end

  doc "Draws the full player-ship pixel grid onto ctx, which must belong to a canvas already sized to exactly 32x48 (see fx_init) -- called once at boot, never per-frame."
  pfn draw_player_sprite_pixels(ctx) : Unit do
    draw_sprite_rows(ctx, player_sprite_grid(), 0, 64, 96, 32.0, 48.0)
  end
```

- [ ] **Step 3: Wire sprite creation into `fx_init`**

Find (around line 37):

```march
  pfn fx_init() : Fx do
    let gl_node = Dom.create("canvas")
    { trail: Nil, t: 0.0, particles: Nil, flash: None, actx: Audio.create(), muted: false,
      gl: WebGL.get_context(gl_node) }
  end
```

Replace with:

```march
  pfn fx_init() : Fx do
    let gl_node = Dom.create("canvas")
    let sprite_node = Dom.create("canvas")
    Dom.set_attr(sprite_node, "width", "32")
    Dom.set_attr(sprite_node, "height", "48")
    let sprite_ctx = Canvas.get_context(sprite_node)
    match sprite_ctx do
      None -> ()
      Some(sctx) -> draw_player_sprite_pixels(sctx)
    end
    { trail: Nil, t: 0.0, particles: Nil, flash: None, actx: Audio.create(), muted: false,
      gl: WebGL.get_context(gl_node),
      player_sprite: sprite_ctx }
  end
```

Note the explicit `Dom.set_attr` width/height calls BEFORE `Canvas.get_context` — this is the exact step that was missing for the WebGL offscreen canvas earlier and caused a real bug (canvas stuck at its 300x150 default). Do not skip it.

- [ ] **Step 4: Build**

Run: `export MARCH_ROOT=/Users/80197052/code/march/.claude/worktrees/perihelion-fixes && cd /Users/80197052/code/perihelion && ./build.sh`
Expected: exit 0, `compiled /Users/80197052/code/perihelion/perihelion.mjs`. Check for other dune/build processes first (`ps aux | grep perihelion-fixes`) — if one is already running against that worktree, wait for it rather than starting a concurrent one (stacking concurrent `dune build` invocations against the same worktree root has caused lock deadlocks in this project before). If you find a process stuck at 0% CPU for an unreasonable time (`ps -p <pid> -o pid,pcpu,etime,command`), it's safe to kill it.

- [ ] **Step 5: Run the existing test suite (confirms nothing broke)**

Run: `./run-tests.sh` (same `MARCH_ROOT` from Step 4)
Expected: exit 0, all five files at their existing pass counts (combat 185, core 212, level 141, nebula 145, upgrades 149) — this task adds no new March-level tests (there's no test infra for canvas-drawing code in this project; see the Testing Approach note in the design spec), just confirms the build didn't regress anything.

- [ ] **Step 6: Self-check the run-merging algorithm by hand**

Before moving on, manually trace `draw_sprite_row_go` against the string `"01120"` (grid_w=5) and confirm it emits exactly two non-background runs: `(start_col=1, end_col=2, tone="1")` and `(start_col=3, end_col=3, tone="2")` — columns 0 and 4 (`tone="0"`) must NOT produce a `fill_rect` call. Note in your report whether this traced correctly.

- [ ] **Step 7: Commit**

```bash
git add lib/perihelion.march
git commit -m "feat(sprite): add pixel-art player ship grid + offscreen pre-render"
```

---

### Task 2: Wire the sprite into `draw_ball`, with rotation

**Files:**
- Modify: `lib/perihelion.march` (`draw_ball` around line 567, its call site around line 716)

**Interfaces:**
- Consumes: `Fx.player_sprite : Option(Node)` (Task 1), `Canvas.draw_node(ctx, node, x, y) : Unit` (already exists in the stdlib from the WebGL nebula work).
- Produces: `ball_heading(game : Game) : Float` — not consumed elsewhere in this plan, but a natural extension point if anything else ever needs the player's facing direction.

- [ ] **Step 1: Add `ball_heading`**

Add this function near `ship_heading` (search for `pfn ship_heading` to find it) — same file, same section, since it's the direct player-side analog:

```march
  doc "The player ball's facing direction, mirroring ship_heading's shape: Flying uses the velocity vector, Orbiting uses the tangent direction (same -90 degree offset ship_heading's ShipOrbiting case uses, since orbit_dir is always 1.0 today)."
  pfn ball_heading(game : Game) : Float do
    match game.mode do
      Flying(vx, vy) -> Math.atan2(vy, vx)
      Orbiting(_, _, angle) -> angle - 1.5707963
    end
  end
```

- [ ] **Step 2: Rewrite `draw_ball` to use the sprite**

Find (around line 567):

```march
  pfn draw_ball(ctx, game : Game) : Unit do
    Canvas.set_fill_style(ctx, "#ffffff")
    Canvas.begin_path(ctx)
    Canvas.arc(ctx, game.ball_x, game.ball_y, 6.0, 0.0, two_pi())
    Canvas.fill(ctx)
    if game.shield > 0 do
      Canvas.set_stroke_style(ctx, "#cccccc")
      Canvas.set_line_width(ctx, 2.0)
      Canvas.begin_path(ctx)
      Canvas.arc(ctx, game.ball_x, game.ball_y, 10.0, 0.0, two_pi())
      Canvas.stroke(ctx)
    else
      ()
    end
  end
```

Replace with:

```march
  pfn draw_ball(ctx, game : Game, fx : Fx) : Unit do
    match fx.player_sprite do
      None ->
        Canvas.set_fill_style(ctx, "#ffffff")
        Canvas.begin_path(ctx)
        Canvas.arc(ctx, game.ball_x, game.ball_y, 6.0, 0.0, two_pi())
        Canvas.fill(ctx)
      Some(sprite) ->
        Canvas.save(ctx)
        Canvas.translate(ctx, game.ball_x, game.ball_y)
        Canvas.rotate(ctx, ball_heading(game) + 1.5707963)
        Canvas.draw_node(ctx, sprite, 0.0 - 16.0, 0.0 - 24.0)
        Canvas.restore(ctx)
    end
    if game.shield > 0 do
      Canvas.set_stroke_style(ctx, "#cccccc")
      Canvas.set_line_width(ctx, 2.0)
      Canvas.begin_path(ctx)
      Canvas.arc(ctx, game.ball_x, game.ball_y, 10.0, 0.0, two_pi())
      Canvas.stroke(ctx)
    else
      ()
    end
  end
```

`0.0 - 16.0` / `0.0 - 24.0` center the 32x48 sprite on the ball's position (half width, half height) — the offscreen canvas's own internal drawing is in its own local top-left-origin space, but `Canvas.draw_node` draws it at an offset from the CURRENT (already translated+rotated) origin, so this offset must be the negative half-size, not zero.

- [ ] **Step 3: Update the one call site**

Find (around line 716, inside `draw(ctx, game, fx)`):

```march
    draw_ball(ctx, game)
```

Replace with:

```march
    draw_ball(ctx, game, fx)
```

- [ ] **Step 4: Build**

Run: `export MARCH_ROOT=/Users/80197052/code/march/.claude/worktrees/perihelion-fixes && cd /Users/80197052/code/perihelion && ./build.sh`
Expected: exit 0, clean compile. If it fails with an arity/type error on `draw_ball`, confirm the call site update in Step 3 was actually applied (search for `draw_ball(` — there should be exactly one call site, now 3-arg).

- [ ] **Step 5: Run the test suite**

Run: `./run-tests.sh` (same `MARCH_ROOT`)
Expected: exit 0, same five pass counts as Task 1 (185/212/141/145/149) — this task is pure rendering, no test coverage exists or is expected for it.

- [ ] **Step 6: Verify in a browser**

Serve the game (e.g. `python3 -m http.server` from the repo root, or reuse this project's existing preview tooling) and check:

1. **At rest (before tapping to start / while orbiting):** the ship renders as the detailed pixel-art sprite, not a plain circle. Confirm no console errors.
2. **While orbiting:** the sprite's nose should point in the tangential direction of travel around the star (roughly perpendicular to the line from the star to the ball), and should visibly rotate as the ball orbits. If the nose instead points radially (toward/away from the star) or is exactly backwards from the direction of travel, the `+1.5707963` offset likely needs to be `-1.5707963` instead (Canvas's rotation direction convention) — try flipping the sign and re-verify.
3. **While flying (after tapping to release):** the sprite's nose should point in the direction the ball is actually moving (matching its velocity vector), and should visibly re-orient during a release before the next capture.
4. **Shield ring:** with a shield charge active, confirm the shield ring still draws correctly around the ship regardless of its rotation (it's drawn separately, unaffected by the sprite's rotation, but confirm this visually rather than assuming).
5. Play through a full orbit-release-capture cycle at least twice to confirm the rotation reads correctly in normal gameplay, not just at a single frozen frame.

Take a screenshot of the ship in both an Orbiting and a Flying moment for your report.

- [ ] **Step 7: Commit and push**

```bash
git add lib/perihelion.march
git commit -m "feat(sprite): draw the player ship as a rotating pixel-art sprite"
git push
```

**Plan complete.**

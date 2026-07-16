# Director System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Perihelion's flat, score-linear spawn ramp with an L4D-style pacing director that cycles Relax → BuildUp → Peak → Fade based on the player's live kill-streak/shield signals.

**Architecture:** A new pure module `Perihelion.Director` owns the pacing state machine (state, timers, per-state spawn multipliers) as pure functions with no `Game` dependency. The spawn *driver* stays in `Perihelion.Combat` (where the private `spawn_hunter`/`spawn_star_turret` construction helpers live) and consults the director each tick for how much to spawn. `Game` gains a `director` field and loses its `spawn_timer` field (folded into the director). `Core.top_up` stops spawning ships on star generation.

**Tech Stack:** March (compiled to JS). Pure modules under `lib/`, interpreter-run tests under `test/`. Modules are auto-discovered via `MARCH_LIB_PATH=lib` — no explicit imports; cross-module references use fully-qualified names (e.g. `Perihelion.Combat.asteroid_interval()`).

## Global Constraints

- **Toolchain:** the default `MARCH_ROOT=~/code/march` frequently fails to build even unmodified code. Build and test with:
  `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
  If that worktree is missing, see `~/.claude/.../memory/toolchain_march_root.md`.
- **Cross-module visibility:** only `fn` (public) functions are callable from another module. Calling a `pfn` (private) across modules reports the *misleading* error ``Unknown module `Perihelion``` at the call site — not a clear visibility error. Every director function called from `Combat` or from tests MUST be `fn`, not `pfn`.
- **Circular module references are allowed** in this codebase (`Core.top_up` calls `Combat.maybe_spawn_ship` while `Combat.spawn_star_turret` calls `Core.star_at`). So `Combat` calling `Director` while `Director` reads `Combat` constants is fine.
- **Float literals need a decimal point** (`0.0`, `1.3`); negation of a float is written `0.0 - x`.
- **Behavior parity in BuildUp:** the BuildUp state must reproduce today's exact spawn behavior (asteroid interval ×1.0, ship chance ×1.0 capped at 0.45) so the baseline is unchanged.

---

## File Structure

- **Create** `lib/perihelion_director.march` — `Perihelion.Director`: pure state machine. `DirectorState`/`Director` types, tuning constants, `initial`, `advance` (transitions + damage detection), per-state multiplier lookups, `entered_peak`, `state_name`.
- **Create** `test/test_director.march` — `TestPerihelionDirector`: unit tests for every transition and multiplier.
- **Modify** `lib/perihelion_core.march` — `Game` type gains `director`, loses `spawn_timer`; both `Game` construction sites; `top_up` drops its `maybe_spawn_ship` call.
- **Modify** `lib/perihelion_combat.march` — replace `step_spawn` with the director-driven `step_director` (+ `step_asteroid_spawn`, `step_ship_spawn`, `maybe_spawn_ship_now`); remove `maybe_spawn_ship`; route `Combat.step` through `step_director`; add the drop-chance softening multiplier in `roll_drops`.
- **Modify** `test/test_combat.march` — fixture drops `spawn_timer`, adds `director`; migrate the `spawn_n` helper, the `step` spawn-timer test, and the `maybe_spawn_ship` describe block to the director model.
- **Modify** `test/test_core.march` — fixture drops `spawn_timer`, adds `director`.

---

## Task 1: Director state machine (pure module + tests)

**Files:**
- Create: `lib/perihelion_director.march`
- Test: `test/test_director.march`

**Interfaces:**
- Consumes (from existing `Perihelion.Combat`): `asteroid_interval() : Float`, `ship_kill_streak_threshold() : Int` (= 2), `asteroid_kill_streak_threshold() : Int` (= 5).
- Produces (used by Task 2 + tests):
  - `type DirectorState = Relax | BuildUp | Peak | Fade`
  - `type Director = { state : DirectorState, state_timer : Float, asteroid_spawn_timer : Float, ship_spawn_timer : Float, prev_shield : Int, peak_softened : Bool }`
  - `fn initial() : Director`
  - `fn ship_spawn_interval() : Float` (= 3.5)
  - `fn advance(d : Director, ship_streak : Int, ast_streak : Int, shield : Int, dt : Float) : Director`
  - `fn asteroid_interval_mult(d : Director) : Float`
  - `fn ship_chance_mult(d : Director) : Float`
  - `fn ship_chance_cap(d : Director) : Float`
  - `fn drop_chance_mult(d : Director) : Float`
  - `fn entered_peak(before : Director, after : Director) : Bool`
  - `fn state_name(d : Director) : String`

- [ ] **Step 1: Write the failing test file**

Create `test/test_director.march`:

```
-- Tests for Perihelion.Director — pure pacing state machine.
-- Run from repo root:
--   MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh
mod TestPerihelionDirector do

  pfn fabs(x : Float) : Float do
    if x < 0.0 do 0.0 - x else x end
  end

  pfn approx(a : Float, b : Float) : Bool do
    fabs(a - b) < 0.001
  end

  -- Build a director in an arbitrary state; spawn timers are irrelevant to
  -- the pure state machine, so they're zeroed here.
  pfn dir(state : DirectorState, timer : Float, prev_shield : Int, softened : Bool) : Director do
    { state: state, state_timer: timer, asteroid_spawn_timer: 0.0, ship_spawn_timer: 0.0,
      prev_shield: prev_shield, peak_softened: softened }
  end

  describe "advance: Relax" do
    test "holds in Relax before min duration even with a hot streak" do
      let d = dir(Relax, 0.0, 0, false)
      -- ship_streak 5 (>= threshold 2), but only 0.1s elapsed
      let d2 = Perihelion.Director.advance(d, 5, 0, 3, 0.1)
      assert (Perihelion.Director.state_name(d2) == "relax")
    end

    test "escalates to BuildUp once min duration elapsed and a streak is hot" do
      -- state_timer already at the min minus a hair; dt pushes it over
      let d = dir(Relax, Perihelion.Director.relax_min_duration() - 0.01, 0, false)
      let d2 = Perihelion.Director.advance(d, 2, 0, 3, 0.1)
      assert (Perihelion.Director.state_name(d2) == "buildup")
      assert (approx(d2.state_timer, Perihelion.Director.build_min_duration()))
    end

    test "stays in Relax past min duration when no streak is hot" do
      let d = dir(Relax, Perihelion.Director.relax_min_duration() + 5.0, 0, false)
      let d2 = Perihelion.Director.advance(d, 1, 4, 3, 0.1)
      assert (Perihelion.Director.state_name(d2) == "relax")
    end
  end

  describe "advance: BuildUp" do
    test "advances to Peak after build_min elapses, latching softened when fragile" do
      let d = dir(BuildUp, 0.05, 0, false)
      let d2 = Perihelion.Director.advance(d, 2, 0, 0, 0.1)
      assert (Perihelion.Director.state_name(d2) == "peak")
      assert (d2.peak_softened)
    end

    test "Peak is not softened when shielded at entry" do
      let d = dir(BuildUp, 0.05, 1, false)
      let d2 = Perihelion.Director.advance(d, 2, 0, 1, 0.1)
      assert (Perihelion.Director.state_name(d2) == "peak")
      assert (!d2.peak_softened)
    end

    test "damage taken drops BuildUp straight to Fade" do
      let d = dir(BuildUp, 3.0, 2, false)
      -- shield dropped 2 -> 1 this tick
      let d2 = Perihelion.Director.advance(d, 2, 0, 1, 0.1)
      assert (Perihelion.Director.state_name(d2) == "fade")
    end
  end

  describe "advance: Peak and Fade" do
    test "Peak fades after peak_duration" do
      let d = dir(Peak, 0.05, 1, true)
      let d2 = Perihelion.Director.advance(d, 2, 0, 1, 0.1)
      assert (Perihelion.Director.state_name(d2) == "fade")
    end

    test "damage taken drops Peak straight to Fade" do
      let d = dir(Peak, 8.0, 2, true)
      let d2 = Perihelion.Director.advance(d, 2, 0, 1, 0.1)
      assert (Perihelion.Director.state_name(d2) == "fade")
    end

    test "Fade returns to Relax and clears softening" do
      let d = dir(Fade, 0.05, 0, true)
      let d2 = Perihelion.Director.advance(d, 0, 0, 0, 0.1)
      assert (Perihelion.Director.state_name(d2) == "relax")
      assert (!d2.peak_softened)
    end
  end

  describe "multiplier lookups" do
    test "BuildUp reproduces baseline (1.0 / 1.0 / 0.45)" do
      let d = dir(BuildUp, 1.0, 0, false)
      assert (approx(Perihelion.Director.asteroid_interval_mult(d), 1.0))
      assert (approx(Perihelion.Director.ship_chance_mult(d), 1.0))
      assert (approx(Perihelion.Director.ship_chance_cap(d), 0.45))
    end

    test "Peak cranks asteroid interval down and ship chance up" do
      let d = dir(Peak, 5.0, 0, false)
      assert (Perihelion.Director.asteroid_interval_mult(d) < 1.0)
      assert (Perihelion.Director.ship_chance_mult(d) > 1.0)
      assert (Perihelion.Director.ship_chance_cap(d) > 0.45)
    end

    test "Fade lerps from Peak toward Relax at the midpoint" do
      let d = dir(Fade, Perihelion.Director.fade_duration() / 2.0, 0, false)
      -- midpoint of peak(0.4) -> relax(1.3) = 0.85
      assert (approx(Perihelion.Director.asteroid_interval_mult(d), 0.85))
    end

    test "drop-chance softening only in Peak while softened" do
      assert (approx(Perihelion.Director.drop_chance_mult(dir(Peak, 5.0, 0, true)), 1.5))
      assert (approx(Perihelion.Director.drop_chance_mult(dir(Peak, 5.0, 0, false)), 1.0))
      assert (approx(Perihelion.Director.drop_chance_mult(dir(Relax, 5.0, 0, true)), 1.0))
    end
  end

  describe "entered_peak" do
    test "true only on the BuildUp->Peak edge" do
      assert (Perihelion.Director.entered_peak(dir(BuildUp, 0.0, 0, false), dir(Peak, 10.0, 0, false)))
      assert (!Perihelion.Director.entered_peak(dir(Peak, 5.0, 0, false), dir(Peak, 4.9, 0, false)))
      assert (!Perihelion.Director.entered_peak(dir(Relax, 0.0, 0, false), dir(BuildUp, 5.0, 0, false)))
    end
  end

end
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: FAIL — `test_director.march` errors with an unknown-module / unknown-function error for `Perihelion.Director` (the module doesn't exist yet). (Other test files should still pass.)

- [ ] **Step 3: Write the director module**

Create `lib/perihelion_director.march`:

```
-- Perihelion.Director — an L4D-style pacing state machine. Pure: no Game
-- dependency. Cycles Relax -> BuildUp -> Peak -> Fade -> Relax based on the
-- player's live kill-streak and shield signals. The spawn *driver* lives in
-- Perihelion.Combat (which owns the private ship-construction helpers); this
-- module only decides state and per-state spawn multipliers.
mod Perihelion.Director do

  type DirectorState = Relax | BuildUp | Peak | Fade

  -- state_timer: counts UP toward relax_min_duration() in Relax; counts DOWN
  -- to 0 in the fixed-duration states (BuildUp/Peak/Fade).
  -- asteroid_spawn_timer / ship_spawn_timer: owned by Combat's driver, carried
  -- here so all spawn timing lives in one record. prev_shield: last tick's
  -- shield, to detect damage (a decrease). peak_softened: latched at Peak
  -- entry when shield == 0, boosting drop chance for that peak.
  type Director = {
    state : DirectorState,
    state_timer : Float,
    asteroid_spawn_timer : Float,
    ship_spawn_timer : Float,
    prev_shield : Int,
    peak_softened : Bool
  }

  -- ── Tuning constants ─────────────────────────────────────────────────
  fn relax_min_duration() : Float do 8.0 end
  fn build_min_duration() : Float do 5.0 end
  fn peak_duration() : Float do 10.0 end
  fn fade_duration() : Float do 4.0 end
  -- Base cadence for the director-owned ship spawn roll (tunable by
  -- inspection). Ship spawning is no longer tied to star generation.
  fn ship_spawn_interval() : Float do 3.5 end

  fn relax_asteroid_mult() : Float do 1.3 end
  fn relax_ship_mult() : Float do 0.7 end
  fn relax_ship_cap() : Float do 0.45 end
  fn peak_asteroid_mult() : Float do 0.4 end
  fn peak_ship_mult() : Float do 1.6 end
  fn peak_ship_cap() : Float do 0.65 end
  fn peak_drop_mult() : Float do 1.5 end
  fn baseline_ship_cap() : Float do 0.45 end

  doc "A fresh director: calm (Relax), with spawn timers primed to today's initial values."
  fn initial() : Director do
    { state: Relax, state_timer: 0.0,
      asteroid_spawn_timer: Perihelion.Combat.asteroid_interval(),
      ship_spawn_timer: ship_spawn_interval(),
      prev_shield: 0, peak_softened: false }
  end

  pfn is_peak(s : DirectorState) : Bool do
    match s do
      Peak -> true
      _ -> false
    end
  end

  doc "Human-readable state tag: relax | buildup | peak | fade."
  fn state_name(d : Director) : String do
    match d.state do
      Relax -> "relax"
      BuildUp -> "buildup"
      Peak -> "peak"
      Fade -> "fade"
    end
  end

  -- The escalation gate: past min relax AND at least one streak at/over its
  -- existing threshold. A level check (streak value >= threshold), not the
  -- edge event Combat.streak_bumps computes, since a per-tick director can
  -- only read the current value.
  pfn streak_hot(ship_streak : Int, ast_streak : Int) : Bool do
    ship_streak >= Perihelion.Combat.ship_kill_streak_threshold()
    || ast_streak >= Perihelion.Combat.asteroid_kill_streak_threshold()
  end

  pfn advance_state(d : Director, ship_streak : Int, ast_streak : Int,
                    shield : Int, took_damage : Bool, dt : Float) : Director do
    match d.state do
      Relax ->
        let t = d.state_timer + dt
        if t >= relax_min_duration() && streak_hot(ship_streak, ast_streak) do
          { d with state: BuildUp, state_timer: build_min_duration() }
        else
          { d with state_timer: t }
        end
      BuildUp ->
        if took_damage do
          { d with state: Fade, state_timer: fade_duration() }
        else
          let t = d.state_timer - dt
          if t <= 0.0 do
            { d with state: Peak, state_timer: peak_duration(), peak_softened: shield == 0 }
          else
            { d with state_timer: t }
          end
        end
      Peak ->
        if took_damage do
          { d with state: Fade, state_timer: fade_duration() }
        else
          let t = d.state_timer - dt
          if t <= 0.0 do
            { d with state: Fade, state_timer: fade_duration() }
          else
            { d with state_timer: t }
          end
        end
      Fade ->
        let t = d.state_timer - dt
        if t <= 0.0 do
          { d with state: Relax, state_timer: 0.0, peak_softened: false }
        else
          { d with state_timer: t }
        end
    end
  end

  doc "Advance the director one tick. Handles state timers, transitions, and the damage-taken early-exit. Pure — does not spawn; the spawn timers are advanced by Combat's driver."
  fn advance(d : Director, ship_streak : Int, ast_streak : Int, shield : Int, dt : Float) : Director do
    let took_damage = shield < d.prev_shield
    let d2 = advance_state(d, ship_streak, ast_streak, shield, took_damage, dt)
    { d2 with prev_shield: shield }
  end

  -- During Fade, state_timer counts down from fade_duration() to 0: frac goes
  -- 0 (just entered, still at the peak value) -> 1 (about to relax).
  pfn fade_lerp(d : Director, peak_val : Float, relax_val : Float) : Float do
    let frac = 1.0 - d.state_timer / fade_duration()
    peak_val + frac * (relax_val - peak_val)
  end

  doc "Multiplier applied to asteroid_interval() this tick (higher = slower spawns)."
  fn asteroid_interval_mult(d : Director) : Float do
    match d.state do
      Relax -> relax_asteroid_mult()
      BuildUp -> 1.0
      Peak -> peak_asteroid_mult()
      Fade -> fade_lerp(d, peak_asteroid_mult(), relax_asteroid_mult())
    end
  end

  doc "Multiplier applied to the ship spawn chance this tick."
  fn ship_chance_mult(d : Director) : Float do
    match d.state do
      Relax -> relax_ship_mult()
      BuildUp -> 1.0
      Peak -> peak_ship_mult()
      Fade -> fade_lerp(d, peak_ship_mult(), relax_ship_mult())
    end
  end

  doc "Cap on the (post-multiplier) ship spawn chance this tick."
  fn ship_chance_cap(d : Director) : Float do
    match d.state do
      Relax -> relax_ship_cap()
      BuildUp -> baseline_ship_cap()
      Peak -> peak_ship_cap()
      Fade -> fade_lerp(d, peak_ship_cap(), relax_ship_cap())
    end
  end

  doc "Multiplier applied to drop_chance(): 1.5 during a softened peak, else 1.0."
  fn drop_chance_mult(d : Director) : Float do
    match d.state do
      Peak -> if d.peak_softened do peak_drop_mult() else 1.0 end
      _ -> 1.0
    end
  end

  doc "True only on the tick the director transitions BuildUp -> Peak (used to fire the guaranteed hunter)."
  fn entered_peak(before : Director, after : Director) : Bool do
    !is_peak(before.state) && is_peak(after.state)
  end

end
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: PASS — `test_director.march` all green; every other test file still passes (Task 1 touches no existing file).

- [ ] **Step 5: Commit**

```bash
git add lib/perihelion_director.march test/test_director.march
git commit -m "feat(director): pure pacing state machine + tests"
```

---

## Task 2: Integrate the director into Game and route all spawning through it

This is an atomic change: adding `director` to `Game` and removing `spawn_timer` forces every construction site, the spawn driver, and both test fixtures to move together, or nothing compiles.

**Files:**
- Modify: `lib/perihelion_core.march` (`Game` type ~`:130`; construction sites ~`:740` and `:762`; `top_up` `:639-652`)
- Modify: `lib/perihelion_combat.march` (`Combat.step` `:165-169`; `step_spawn` `:171-197`; `roll_drops` `:979`; `maybe_spawn_ship` `:1139-1158`)
- Modify: `test/test_combat.march` (fixture `:61`; `spawn_n` `:72-77`; `step` test `:270-285`; `maybe_spawn_ship` block `:690-706`)
- Modify: `test/test_core.march` (fixture `:61`)

**Interfaces:**
- Consumes (from Task 1): all of `Perihelion.Director`'s produced signatures.
- Consumes (existing, unchanged): `Perihelion.Combat.spawn_hunter(game, rng) : Game`, `spawn_star_turret(game, star_idx, rng) : Game`, `asteroid_interval/_speed/_radius/_jitter()`, `ship_score_min() : Int` (= 4), `hunter_chance() : Float`, `draw(rng)`.
- Produces: `Perihelion.Combat.step_director(game, dt_s) : Game` replaces `step_spawn`; `maybe_spawn_ship` is removed; `Game` has `director : Director` and no `spawn_timer`.

- [ ] **Step 1: Write the failing integration tests**

In `test/test_combat.march`, replace the entire `describe "maybe_spawn_ship" do ... end` block (`:690-706`) with a director-driven block, and add a `top_up` regression test. Use these exact tests:

```
  describe "director-driven ship spawn" do
    test "no ships below the score threshold" do
      let g0 = base_game(0.0)
      -- ship_spawn_timer at ~0 so the roll fires this tick
      let d = { g0.director with ship_spawn_timer: 0.001 }
      let g = { g0 with score: 2, director: d }
      let g2 = Perihelion.Combat.step_director(g, 0.1)
      assert (List.is_empty(g2.ships))
    end

    test "ship spawn is deterministic per seed at high score" do
      let g0 = base_game(0.0)
      let d = { g0.director with ship_spawn_timer: 0.001 }
      let g = { g0 with score: 50, rng: Random.seed(999), director: d }
      let g2 = Perihelion.Combat.step_director(g, 0.1)
      let g3 = { g0 with score: 50, rng: Random.seed(999), director: d }
      let g4 = Perihelion.Combat.step_director(g3, 0.1)
      assert (List.length(g2.ships) == List.length(g4.ships))
      assert (rng_eq(g2.rng, g4.rng))
    end
  end
```

Also add, inside the existing `describe "step" do` block (near the spawn-timer test), a regression test that `top_up` no longer spawns ships:

```
    test "top_up generates stars without spawning ships" do
      let g0 = base_game(0.0)
      let g = { g0 with score: 50, rng: Random.seed(3) }
      -- top_up appends look-ahead stars; ships must NOT spawn from that path
      let g2 = Perihelion.Core.top_up(g)
      assert (List.is_empty(g2.ships))
      assert (List.length(g2.stars) >= List.length(g.stars))
    end
```

- [ ] **Step 2: Run tests to verify they fail (compile error)**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: FAIL — `test_combat.march` fails to compile: `base_game` still sets the removed-to-be `spawn_timer` and there's no `director` field yet; `Perihelion.Combat.step_director` doesn't exist. This confirms the tests exercise the new surface.

- [ ] **Step 3: Add `director` to `Game`, remove `spawn_timer`**

In `lib/perihelion_core.march`, in the `Game` type definition (around `:130`), remove the `spawn_timer : Float,` field and add:

```
    director : Perihelion.Director.Director,
```

- [ ] **Step 4: Update both `Game` construction sites**

In `lib/perihelion_core.march`, both `Game` record literals set `spawn_timer: Perihelion.Combat.asteroid_interval()` (at `:758` and `:785`). In each, replace that field with:

```
          director: Perihelion.Director.initial(),
```

(`initial()` primes `asteroid_spawn_timer` to `asteroid_interval()`, preserving today's first-asteroid delay.)

- [ ] **Step 5: Stop `top_up` from spawning ships**

In `lib/perihelion_core.march`, `top_up` (`:639-652`), the recursive branch currently ends:

```
      top_up(Perihelion.Combat.maybe_spawn_ship(g2, List.length(g2.stars) - 1))
```

Replace that line with (star generation only; ships now come from the director):

```
      top_up(g2)
```

- [ ] **Step 6: Replace `step_spawn` with the director driver in Combat**

In `lib/perihelion_combat.march`, replace the whole `step_spawn` function (`:171-197`) with these four functions:

```
  -- Director-driven spawn driver (replaces step_spawn + maybe_spawn_ship).
  -- Advances the pacing director, fires the guaranteed hunter on Peak entry,
  -- then runs the asteroid and ship spawn timers scaled by the current state.
  pfn step_director(game : Game, dt_s : Float) : Game do
    let d0 = game.director
    let d1 = Perihelion.Director.advance(d0, game.ship_kill_streak, game.asteroid_kill_streak, game.shield, dt_s)
    let g1 = { game with director: d1 }
    let g2 = if Perihelion.Director.entered_peak(d0, d1) && game.score >= ship_score_min() do
               spawn_hunter(g1, g1.rng)
             else
               g1
             end
    let g3 = step_asteroid_spawn(g2, dt_s)
    step_ship_spawn(g3, dt_s)
  end

  -- Asteroid spawn timer (was step_spawn's body). Interval scaled by the
  -- director's asteroid multiplier; jitter unchanged.
  pfn step_asteroid_spawn(game : Game, dt_s : Float) : Game do
    let d = game.director
    let t = d.asteroid_spawn_timer - dt_s
    if t > 0.0 do
      { game with director: { d with asteroid_spawn_timer: t } }
    else
      let (r1, side_f) = draw(game.rng)
      let (r2, y_f) = draw(r1)
      let (r3, ang_f) = draw(r2)
      let (r4, next_f) = draw(r3)
      let (r5, shape_f) = draw(r4)
      let from_left = side_f < 0.5
      let x = if from_left do 0.0 - 20.0 else game.view_w + 20.0 end
      let y = game.camera_y + y_f * game.view_h
      let jitter = (ang_f - 0.5) * 1.0472
      let dir_x = if from_left do 1.0 else 0.0 - 1.0 end
      let vx = dir_x * asteroid_speed() * Math.cos(jitter)
      let vy = asteroid_speed() * Math.sin(jitter)
      let a = { x: x, y: y, vx: vx, vy: vy, radius: asteroid_radius(), shape_seed: shape_f, mode: AsteroidDrifting }
      let interval = asteroid_interval() * Perihelion.Director.asteroid_interval_mult(d)
      { game with
          asteroids: Cons(a, game.asteroids),
          rng: r5,
          director: { d with asteroid_spawn_timer: interval + (next_f - 0.5) * 2.0 * asteroid_jitter() } }
    end
  end

  -- Ship spawn timer. On expiry, roll the score-gated chance (below) and
  -- reset the timer to the director's base cadence.
  pfn step_ship_spawn(game : Game, dt_s : Float) : Game do
    let d = game.director
    let t = d.ship_spawn_timer - dt_s
    if t > 0.0 do
      { game with director: { d with ship_spawn_timer: t } }
    else
      let g1 = { game with director: { d with ship_spawn_timer: Perihelion.Director.ship_spawn_interval() } }
      maybe_spawn_ship_now(g1)
    end
  end

  doc "The per-tick ship spawn roll (was maybe_spawn_ship, previously called per generated star from Core.top_up). Score-gated and ramping; chance scaled by the director's ship multiplier and cap. Turret spawns on the top star; hunter spawns behind the player (unchanged)."
  pfn maybe_spawn_ship_now(game : Game) : Game do
    if game.score < ship_score_min() do
      game
    else
      let d = game.director
      let (rng2, roll) = draw(game.rng)
      let base = 0.16 + 0.04 * int_to_float(game.score - ship_score_min())
      let scaled = base * Perihelion.Director.ship_chance_mult(d)
      let cap = Perihelion.Director.ship_chance_cap(d)
      let chance = if scaled > cap do cap else scaled end
      if roll < chance do
        let (rng3, kind_roll) = draw(rng2)
        if kind_roll < hunter_chance() do
          spawn_hunter(game, rng3)
        else
          spawn_star_turret(game, List.length(game.stars) - 1, rng3)
        end
      else
        { game with rng: rng2 }
      end
    end
  end
```

- [ ] **Step 7: Route `Combat.step` through the driver**

In `lib/perihelion_combat.march`, in `step` (`:165-169`), change the first line from:

```
    let g1 = step_spawn(game, dt_s)
```

to:

```
    let g1 = step_director(game, dt_s)
```

- [ ] **Step 8: Remove the old `maybe_spawn_ship` and apply the drop-chance softening**

In `lib/perihelion_combat.march`:

1. Delete the entire `maybe_spawn_ship` function (`:1139-1158`, including its `doc` line). Its logic now lives in `maybe_spawn_ship_now`. Leave `spawn_star_turret` and `spawn_hunter` untouched.
2. In `roll_drops` (`:979`), change the drop gate from:

```
        let g2 = if roll < drop_chance() do
```

to:

```
        let g2 = if roll < drop_chance() * Perihelion.Director.drop_chance_mult(game.director) do
```

- [ ] **Step 9: Update the `test_combat.march` fixture and helpers**

In `test/test_combat.march`:

1. In `base_game` (`:61`), replace `spawn_timer: 4.0,` with `director: Perihelion.Director.initial(),`.
2. Replace the `spawn_n` helper (`:72-77`) — it called the removed `maybe_spawn_ship`. Change its body to drive the director instead:

```
  pfn spawn_n(game : Game, n : Int) : Game do
    if n == 0 do
      game
    else
      let d = { game.director with ship_spawn_timer: 0.001 }
      spawn_n(Perihelion.Combat.step_director({ game with director: d }, 0.1), n - 1)
    end
  end
```

Then update any caller of `spawn_n(g, star_idx, k)` to the new 2-arg form `spawn_n(g, k)` (search the file for `spawn_n(`).
3. In the `describe "step"` spawn-timer test (`:270-285`), the fixture line `let g = { g0 with spawn_timer: 0.01 }` and the final `assert (g2.spawn_timer > 0.0)` reference the removed field. Replace them:

```
      let g = { g0 with director: { g0.director with asteroid_spawn_timer: 0.01 } }
```

and the final assertion:

```
      assert (g2.director.asteroid_spawn_timer > 0.0)
```

- [ ] **Step 10: Update the `test_core.march` fixture**

In `test/test_core.march`:

1. In the fixture at `:61`, replace `spawn_timer: 4.0,` with `director: Perihelion.Director.initial(),`.
2. At `:576`, a test pushes the timer out to suppress asteroid interference: `let g = { g0 with phase: Playing, spawn_timer: 100000.0 }`. Migrate it to:

```
      let g = { g0 with phase: Playing, director: { g0.director with asteroid_spawn_timer: 100000.0 } }
```

(Re-run `grep -n spawn_timer test/test_core.march` afterward to confirm no other references remain.)

- [ ] **Step 11: Run the full suite to verify it passes**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: PASS — every test file green, including the new director-driven ship-spawn block and the `top_up`-doesn't-spawn-ships regression.

- [ ] **Step 12: Commit**

```bash
git add lib/perihelion_core.march lib/perihelion_combat.march test/test_combat.march test/test_core.march
git commit -m "feat(director): route all spawning through the pacing director"
```

---

## Task 3: Build and browser sanity check

The prior tasks are interpreter-tested; this task confirms the game compiles to JS and plays.

**Files:** none (build + manual verification).

- [ ] **Step 1: Build the game to JS**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./build.sh`
Expected: `Compiling perihelion → perihelion.mjs...` then `Done!` with no compiler errors.

- [ ] **Step 2: Serve and open the game**

Run: `python3 -m http.server 8000` (from repo root), then open `http://localhost:8000` in a browser. Use the run/verify skills if available.

- [ ] **Step 3: Verify director behavior by play**

Confirm by playing ~2 minutes:
- The opening ~8s is noticeably calm (few asteroids), then pacing picks up as you build a kill streak.
- After a sustained streak, a burst of intensity arrives (faster asteroids, a hunter appears), then eases off into a lull.
- Taking a hit (consuming a shield) visibly calms the action shortly after.
- No double-spawning of asteroids or ships; no crash in the browser console.

- [ ] **Step 4: Commit the rebuilt artifact**

```bash
git add perihelion.mjs
git commit -m "build(director): recompile perihelion.mjs with the pacing director"
```

---

## Self-Review

**Spec coverage:**
- Four states + cycle → Task 1 `DirectorState`/`advance_state`. ✓
- Relax min-duration escalation lock, level-check `>= threshold` → Task 1 `advance_state` Relax arm + `streak_hot`. ✓
- BuildUp min duration → Peak → Task 1 BuildUp arm. ✓
- Peak fixed duration + guaranteed hunter (score-gated) → Task 1 `entered_peak` + Task 2 `step_director` hunter branch. ✓
- Damage → Fade early exit (shielded-only, via `prev_shield` decrease) → Task 1 `advance` `took_damage`. ✓
- Fade lerp back to Relax → Task 1 `fade_lerp` + multiplier lookups. ✓
- Per-state asteroid/ship/cap multipliers, BuildUp = baseline → Task 1 lookups + Task 2 application in `step_asteroid_spawn`/`maybe_spawn_ship_now`. ✓
- Shield-0 peak drop-chance softening (latched at entry) → Task 1 `peak_softened` + `drop_chance_mult`, Task 2 `roll_drops`. ✓
- Ship spawning relocated to per-tick timer; `top_up` no longer spawns; turret on top star → Task 2 Steps 5, 6, 8. ✓
- `Game` gains `director`, drops `spawn_timer`; both construction sites; fixtures migrated → Task 2 Steps 3, 4, 9, 10. ✓
- Fresh run opens in Relax → Task 1 `initial()`. ✓
- Testing (director state machine, ship/asteroid timers, migrated fixtures) → Task 1 tests + Task 2 Step 1. ✓

**Placeholder scan:** no TBD/TODO; every code step shows complete code; every command has expected output. ✓

**Type consistency:** `Director`/`DirectorState` field and constructor names match across Task 1 and Task 2; `step_director`/`step_asteroid_spawn`/`step_ship_spawn`/`maybe_spawn_ship_now` used consistently; `entered_peak`/`advance`/`initial`/`state_name`/`asteroid_interval_mult`/`ship_chance_mult`/`ship_chance_cap`/`drop_chance_mult`/`ship_spawn_interval` signatures identical where referenced. ✓

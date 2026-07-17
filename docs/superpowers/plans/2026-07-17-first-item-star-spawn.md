# First-item star spawn Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Guarantee the player's first item pickup spawns on a weighted-random captured star (50% star 3, 25% star 6, 25% star 9), independent of the existing per-kill 25% drop roll.

**Architecture:** A `first_item_star : Int` field on `Game`, rolled once per run in `fresh_run` (`lib/perihelion_core.march`), consumed once in `on_capture`'s forward-capture branch to spawn a `Pickup` at the captured star's position via the existing `Perihelion.Upgrades.roll_one` draw.

**Tech Stack:** March language, pure functional game-state module (`Perihelion.Core`), interpreter-run tests via `./run-tests.sh`.

## Global Constraints

- Spec: `docs/superpowers/specs/2026-07-17-first-item-star-spawn-design.md`
- Weighting: 50% star 3, 25% star 6, 25% star 9 — exact values, not tunable-by-request but expressed as named constants per this codebase's convention.
- The guaranteed spawn fires on schedule regardless of any earlier kill-drop pickup (no "already has an item" check).
- Draws from the same pool as normal drops: `Perihelion.Upgrades.roll_one`.
- Does not touch `roll_drops`, `drop_chance()`, the director's `drop_chance_mult`, or the milestone-choice system (`milestone_check`/`draw_choices`).
- Build/test: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh` (the default `MARCH_ROOT=~/code/march` checkout is missing stdlib this project depends on — always use the worktree path). If that worktree is missing, see `docs/superpowers/specs/2026-07-17-first-item-star-spawn-design.md`'s repo for recovery, or run `git -C ~/code/march worktree list`.
- **pfn visibility trap:** a private (`pfn`) function can only be called unqualified from within its own module. Calling it qualified from a different module (e.g. `Perihelion.Combat.draw` from `Perihelion.Core`) does not give a clear error — it reports the misleading `Unknown module `Perihelion`.`. This is why the new RNG roll in this plan calls `Perihelion.Level.draw_pub` directly (public `fn`) rather than `Perihelion.Combat.draw` (private `pfn`) or `Perihelion.Upgrades.draw` (also private `pfn`, and pointless to call across modules anyway).

---

## File Structure

- Modify `lib/perihelion_core.march`: add `first_item_star` field to the `Game` type, add 5 new tuning constants + 1 private roll helper, wire the roll into `fresh_run` (both branches), consume the field in `on_capture`'s forward-capture branch.
- Modify `test/test_core.march`: add `first_item_star: 0,` to `mk_game`'s `Game` literal (line ~60); add new `describe` blocks for the roll and the spawn behavior.
- Modify `test/test_combat.march`: add `first_item_star: 0,` to `base_game`'s `Game` literal (line ~60) — required for the file to typecheck once the field exists on `Game`, no behavior change needed there.

---

### Task 1: Add `first_item_star` field, roll it at run start

**Files:**
- Modify: `lib/perihelion_core.march:41` (new constants, after `mult_cap()`)
- Modify: `lib/perihelion_core.march:144` (new `Game` field, after `stars_chained : Int,`)
- Modify: `lib/perihelion_core.march:818` (new `pfn roll_first_item_star`, immediately before `fresh_run`; wire into both `fresh_run` branches)
- Modify: `test/test_core.march:60` (`mk_game` literal)
- Modify: `test/test_combat.march:60` (`base_game` literal)
- Test: `test/test_core.march` (new `describe "first_item_star roll"` block)

**Interfaces:**
- Produces: `Game.first_item_star : Int` — the star (3, 6, or 9) on which the guaranteed first item will spawn, set once per run.
- Produces: `Perihelion.Core.first_item_star_early() : Int`, `first_item_star_mid() : Int`, `first_item_star_late() : Int`, `first_item_star_early_chance() : Float`, `first_item_star_mid_chance() : Float` — public tuning constants, consumed by Task 2.
- Consumes: `Perihelion.Level.draw_pub(rng : Random.Rng) : (Random.Rng, Float)` (existing, public).

- [ ] **Step 1: Add the write test for `first_item_star` distribution and determinism**

Open `test/test_core.march`. Find the last `describe` block before the file's closing `end` (the module's final `end`, after the last `describe`). Add a new `describe` block right before that final `end`:

```march
  describe "first_item_star roll" do
    test "first_item_star is always 3, 6, or 9" do
      fn all_valid(seed : Int) : Bool do
        if seed == 0 do
          true
        else
          let g = Perihelion.Core.new_game(seed)
          let s = g.first_item_star
          if s == 3 || s == 6 || s == 9 do all_valid(seed - 1) else false end
        end
      end
      assert (all_valid(200))
    end

    test "first_item_star is deterministic for a given seed" do
      let a = Perihelion.Core.new_game(42)
      let b = Perihelion.Core.new_game(42)
      assert (a.first_item_star == b.first_item_star)
    end

    test "first_item_star distribution is roughly 50/25/25 over many seeds" do
      fn count_early(seed : Int, acc : Int) : Int do
        if seed == 0 do
          acc
        else
          let g = Perihelion.Core.new_game(seed)
          count_early(seed - 1, if g.first_item_star == 3 do acc + 1 else acc end)
        end
      end
      -- 400 seeds, expect ~200 landing on the 50% (star 3) bucket. Wide
      -- tolerance band since this samples real RNG output, not a fixed
      -- sequence -- see check_seeds-style sampling used elsewhere in this
      -- file (e.g. "dying with exactly one upgrade held" above).
      let early = count_early(400, 0)
      assert (early > 150)
      assert (early < 250)
    end
  end
```

- [ ] **Step 2: Run tests to verify this fails (field doesn't exist yet)**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: FAIL — compile error on `test_core.march`, `Game` has no field `first_item_star` (or similar "unknown field"/type error), since neither the field nor `new_game` return it yet.

- [ ] **Step 3: Add the tuning constants**

In `lib/perihelion_core.march`, after line 41 (`fn mult_cap() : Int do 5 end`), insert:

```march
  -- First guaranteed item spawn: rolled once per run (fresh_run) and
  -- consumed the one time stars_chained reaches it (on_capture, forward
  -- capture only). Weighted toward an earlier appearance so most runs see
  -- their first item well before the early/guaranteed milestone beats
  -- (star 5 / star 10 -- see Perihelion.Upgrades.early_milestone_star /
  -- milestone_star_interval). Independent of and in addition to normal
  -- per-kill drops (Perihelion.Combat.roll_drops) -- this always fires on
  -- schedule, even if the player already got lucky with an earlier kill.
  fn first_item_star_early() : Int do 3 end
  fn first_item_star_mid() : Int do 6 end
  fn first_item_star_late() : Int do 9 end
  fn first_item_star_early_chance() : Float do 0.5 end
  fn first_item_star_mid_chance() : Float do 0.25 end
```

- [ ] **Step 4: Add the `first_item_star` field to the `Game` type**

In `lib/perihelion_core.march`, at line 144, change:

```march
    stars_chained : Int,
```

to:

```march
    stars_chained : Int,
    -- Which forward-capture count (3, 6, or 9) triggers the guaranteed
    -- first item spawn -- see first_item_star_early/mid/late above and
    -- on_capture below. Rolled once in fresh_run.
    first_item_star : Int,
```

- [ ] **Step 5: Add the weighted roll helper**

In `lib/perihelion_core.march`, immediately before line 818 (`pfn fresh_run(seed : Int, ...`), insert:

```march
  -- Weighted 3-way draw for first_item_star: 50% -> 3, 25% -> 6, 25% -> 9.
  -- Same threshold-compare pattern as Combat/Upgrades' own drop rolls
  -- (roll_drops, milestone_check), but calls Level.draw_pub directly
  -- rather than Perihelion.Combat.draw/Perihelion.Upgrades.draw -- both of
  -- those are pfn (private to their own module) and can't be called
  -- qualified from here.
  pfn roll_first_item_star(rng : Random.Rng) : (Random.Rng, Int) do
    let (rng2, roll) = Perihelion.Level.draw_pub(rng)
    let star =
      if roll < first_item_star_early_chance() do
        first_item_star_early()
      else if roll < first_item_star_early_chance() + first_item_star_mid_chance() do
        first_item_star_mid()
      else
        first_item_star_late()
      end
    (rng2, star)
  end

```

- [ ] **Step 6: Wire the roll into `fresh_run`'s empty-stars branch**

In `lib/perihelion_core.march`, inside `fresh_run`, change the `Nil ->` branch. Before:

```march
      Nil ->
        -- unreachable: initial_stars always returns 3 stars
        { seed: seed, phase: Ready, ball_x: 0.0, ball_y: 0.0, mode: Orbiting(0, 0, start_angle),
          stars: Nil, current: 0, score: 0, best: best,
          camera_y: 0.0, camera_x: 0.0, rng: rng2,
```

After:

```march
      Nil ->
        -- unreachable: initial_stars always returns 3 stars
        let (rng3, first_item_star) = roll_first_item_star(rng2)
        { seed: seed, phase: Ready, ball_x: 0.0, ball_y: 0.0, mode: Orbiting(0, 0, start_angle),
          stars: Nil, current: 0, score: 0, best: best,
          camera_y: 0.0, camera_x: 0.0, rng: rng3,
```

Then, in the same record literal, change:

```march
          stars_chained: 0,
          loop_angle: 0.0, fire_cooldown: 0.0,
          director: Perihelion.Director.initial(), runs: runs,
          view_w: view_w, view_h: view_h,
          fx_bursts: Nil, capture_flash: None, paused: false, pickup_collected: false, death_cause: DeathNone,
          jump: None }
```

to:

```march
          stars_chained: 0,
          first_item_star: first_item_star,
          loop_angle: 0.0, fire_cooldown: 0.0,
          director: Perihelion.Director.initial(), runs: runs,
          view_w: view_w, view_h: view_h,
          fx_bursts: Nil, capture_flash: None, paused: false, pickup_collected: false, death_cause: DeathNone,
          jump: None }
```

- [ ] **Step 7: Wire the roll into `fresh_run`'s normal branch**

In the same function, the `Cons(s0, _) ->` branch. Before:

```march
      Cons(s0, _) ->
        { seed: seed, phase: Ready,
          ball_x: s0.x + Math.cos(start_angle) * s0.capture_radius,
          ball_y: s0.y + Math.sin(start_angle) * s0.capture_radius,
          mode: Orbiting(0, 0, start_angle),
          stars: stars, current: 0, score: 0, best: best,
          camera_y: s0.y - cam_anchor() * view_h,
          camera_x: 0.0,
          rng: rng2,
```

After:

```march
      Cons(s0, _) ->
        let (rng3, first_item_star) = roll_first_item_star(rng2)
        { seed: seed, phase: Ready,
          ball_x: s0.x + Math.cos(start_angle) * s0.capture_radius,
          ball_y: s0.y + Math.sin(start_angle) * s0.capture_radius,
          mode: Orbiting(0, 0, start_angle),
          stars: stars, current: 0, score: 0, best: best,
          camera_y: s0.y - cam_anchor() * view_h,
          camera_x: 0.0,
          rng: rng3,
```

Then, in the same record literal, change:

```march
          stars_chained: 0,
          loop_angle: 0.0, fire_cooldown: 0.0,
          director: Perihelion.Director.initial(), runs: runs,
          view_w: view_w, view_h: view_h,
          fx_bursts: Nil, capture_flash: None, paused: false, pickup_collected: false, death_cause: DeathNone,
          jump: None }
    end
  end
```

to:

```march
          stars_chained: 0,
          first_item_star: first_item_star,
          loop_angle: 0.0, fire_cooldown: 0.0,
          director: Perihelion.Director.initial(), runs: runs,
          view_w: view_w, view_h: view_h,
          fx_bursts: Nil, capture_flash: None, paused: false, pickup_collected: false, death_cause: DeathNone,
          jump: None }
    end
  end
```

- [ ] **Step 8: Update the two test `Game` literals so the project typechecks**

In `test/test_core.march`, inside `mk_game` (around line 60), change:

```march
      stars_chained: 0,
      loop_angle: 0.0, fire_cooldown: 0.0, director: Perihelion.Director.initial(), runs: Nil,
```

to:

```march
      stars_chained: 0,
      -- Never coincides with a single-hop capture (new_chained starts at
      -- 1) so existing tests that don't care about this feature are
      -- unaffected; tests that DO want the guaranteed spawn override this
      -- via `{ mk_game(0.0) with first_item_star: N }`.
      first_item_star: 0,
      loop_angle: 0.0, fire_cooldown: 0.0, director: Perihelion.Director.initial(), runs: Nil,
```

In `test/test_combat.march`, inside `base_game` (around line 60), make the identical change:

```march
      stars_chained: 0,
      loop_angle: 0.0, fire_cooldown: 0.0, director: Perihelion.Director.initial(), runs: Nil,
```

to:

```march
      stars_chained: 0,
      first_item_star: 0,
      loop_angle: 0.0, fire_cooldown: 0.0, director: Perihelion.Director.initial(), runs: Nil,
```

- [ ] **Step 9: Run tests to verify Step 1's tests pass**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: PASS for all of `test_core.march`, `test_combat.march`, and every other `test/*.march` file (the field addition must not break anything else — check the full output, not just the new tests).

- [ ] **Step 10: Commit**

```bash
git add lib/perihelion_core.march test/test_core.march test/test_combat.march
git commit -m "feat(core): roll a weighted first_item_star (50/25/25 across 3/6/9) at run start"
```

---

### Task 2: Spawn the guaranteed pickup on capture

**Files:**
- Modify: `lib/perihelion_core.march:622-658` (`on_capture`, forward-capture branch)
- Test: `test/test_core.march` (new `describe "guaranteed first item spawn"` block)

**Interfaces:**
- Consumes: `Game.first_item_star : Int` (Task 1), `Perihelion.Upgrades.roll_one(rng : Random.Rng, owned_weapons : List(WeaponKind), current_special : Option(SpecialKind)) : (Random.Rng, UpgradeKind)` (existing), `Perihelion.Combat.pickup_ttl() : Float` (existing, public), the existing `Pickup` type `{ x : Float, y : Float, ttl : Float, kind : Perihelion.Upgrades.UpgradeKind }` (`lib/perihelion_combat.march:70`).
- Produces: on the forward capture where `new_chained == game.first_item_star`, exactly one new entry is prepended to `game.pickups`.

- [ ] **Step 1: Write the failing tests**

In `test/test_core.march`, add a new `describe` block right before the file's final `end` (after the block added in Task 1):

```march
  describe "guaranteed first item spawn" do
    test "reaching first_item_star spawns exactly one pickup at the captured star" do
      let g0 = { mk_game(0.0) with first_item_star: 1 }
      let g = mk_flying_from(g0, 200.0, 420.0, 0.0, 0.0 - Perihelion.Core.fly_speed())
      let g2 = run_until_capture(g, 10)
      assert (g2.stars_chained == 1)
      assert (List.length(g2.pickups) == 1)
    end

    test "not reaching first_item_star does not spawn the guaranteed pickup" do
      let g0 = { mk_game(0.0) with first_item_star: 5 }
      let g = mk_flying_from(g0, 200.0, 420.0, 0.0, 0.0 - Perihelion.Core.fly_speed())
      let g2 = run_until_capture(g, 10)
      assert (g2.stars_chained == 1)
      assert (List.is_empty(g2.pickups))
    end

    test "first_item_star spawn is deterministic for a given seed" do
      fn capture_pickup_count(seed : Int) : Int do
        let g0 = { mk_game(0.0) with first_item_star: 1, seed: seed, rng: Random.seed(seed) }
        let g = mk_flying_from(g0, 200.0, 420.0, 0.0, 0.0 - Perihelion.Core.fly_speed())
        let g2 = run_until_capture(g, 10)
        List.length(g2.pickups)
      end
      assert (capture_pickup_count(11) == capture_pickup_count(11))
    end

    -- The spawn check only exists inside on_capture's forward-capture
    -- branch (idx > game.current) -- a backward capture takes the other
    -- branch entirely and never touches pickups, so this is a structural
    -- guarantee. Verified end-to-end here: capture star 1 forward (fires
    -- the guaranteed spawn once), then fly back down to star 0 and confirm
    -- pickups doesn't grow a second time.
    test "a backward capture back through an already-captured first_item_star does not re-spawn it" do
      let g0 = { mk_game(0.0) with first_item_star: 1 }
      let g1 = run_until_capture(mk_flying_from(g0, 200.0, 420.0, 0.0, 0.0 - Perihelion.Core.fly_speed()), 10)
      assert (g1.stars_chained == 1)
      assert (List.length(g1.pickups) == 1)
      let g2 = run_until_capture(mk_flying_from(g1, g1.ball_x, g1.ball_y, 0.0, Perihelion.Core.fly_speed()), 40)
      assert (g2.current == 0)
      assert (List.length(g2.pickups) == 1)
    end
  end
```

Note on the last test: `g1.ball_x` stays exactly `200.0` through the whole first hop (straight-up flight, `vx: 0.0`, starting at `bx: 200.0`), so flying straight down (`vy: fly_speed()`) from `(g1.ball_x, g1.ball_y)` reliably re-enters star 0's capture circle (centered at `(200.0, 520.0)`, `capture_radius: 54.0`) without any horizontal drift. If this test's `run_until_capture` fuel (`40`) turns out insufficient once actually run (interpreter-verified distance, not hand-computed here), increase it — this mirrors the "adjust if wrong once run" RNG-branch-pinning convention already used elsewhere in this file (e.g. the early-milestone tests).

- [ ] **Step 2: Run tests to verify they fail**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: FAIL — the first two new tests fail on the `List.length(g2.pickups)` / `List.is_empty(g2.pickups)` assertions (no spawn logic exists yet, so `pickups` stays `Nil` in all cases).

- [ ] **Step 3: Implement the guaranteed spawn in `on_capture`**

In `lib/perihelion_core.march`, inside `on_capture`'s forward-capture branch, change:

```march
      let captured_game = { snapped with
          current: idx,
          score: game.score + new_mult,
          stars_chained: new_chained,
          multiplier: new_mult,
          max_mult: max2(game.max_mult, new_mult),
          ship_kill_streak: if streaks_live do game.ship_kill_streak else 0 end,
          asteroid_kill_streak: if streaks_live do game.asteroid_kill_streak else 0 end,
          capture_flash: Some((captured.x, captured.y)) }
      let (rng_after_check, triggered) = Perihelion.Upgrades.milestone_check(captured_game.rng, new_chained)
      if triggered do
        let (rng2, choices) = Perihelion.Upgrades.draw_choices(rng_after_check, captured_game.owned_weapons, captured_game.special)
        top_up({ captured_game with phase: Milestone, rng: rng2, milestone_choices: choices })
      else
        top_up({ captured_game with rng: rng_after_check })
      end
```

to:

```march
      let captured_game = { snapped with
          current: idx,
          score: game.score + new_mult,
          stars_chained: new_chained,
          multiplier: new_mult,
          max_mult: max2(game.max_mult, new_mult),
          ship_kill_streak: if streaks_live do game.ship_kill_streak else 0 end,
          asteroid_kill_streak: if streaks_live do game.asteroid_kill_streak else 0 end,
          capture_flash: Some((captured.x, captured.y)) }
      -- Guaranteed first item: fires exactly once per run, the one time
      -- new_chained reaches first_item_star (stars_chained only climbs on
      -- forward captures -- see the backward branch below, which never
      -- touches it -- so this equality can only ever be true once).
      -- Independent draw from the milestone-choice roll below: both are
      -- threaded off captured_game.rng in sequence, never reusing the same
      -- rng value twice.
      let item_game =
        if new_chained == captured_game.first_item_star do
          let (rng_item, upgrade) = Perihelion.Upgrades.roll_one(captured_game.rng, captured_game.owned_weapons, captured_game.special)
          { captured_game with
              rng: rng_item,
              pickups: Cons({ x: captured.x, y: captured.y, ttl: Perihelion.Combat.pickup_ttl(), kind: upgrade }, captured_game.pickups) }
        else
          captured_game
        end
      let (rng_after_check, triggered) = Perihelion.Upgrades.milestone_check(item_game.rng, new_chained)
      if triggered do
        let (rng2, choices) = Perihelion.Upgrades.draw_choices(rng_after_check, item_game.owned_weapons, item_game.special)
        top_up({ item_game with phase: Milestone, rng: rng2, milestone_choices: choices })
      else
        top_up({ item_game with rng: rng_after_check })
      end
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `MARCH_ROOT=~/code/march/.claude/worktrees/perihelion-fixes ./run-tests.sh`
Expected: PASS for all of `test_core.march` and every other `test/*.march` file.

- [ ] **Step 5: Commit**

```bash
git add lib/perihelion_core.march test/test_core.march
git commit -m "feat(core): spawn the guaranteed first item when first_item_star is captured"
```

---

## Self-Review Notes

- **Spec coverage:** `Game.first_item_star` field (Task 1 Step 4) ✓; weighted roll at run start (Task 1 Steps 3, 5-7) ✓; consumption in `on_capture` forward branch, position at captured star, `roll_one` pool, no "already has one" check (Task 2 Step 3) ✓; determinism + distribution testing (Task 1 Step 1) ✓; spawn/no-spawn/backward-no-retrigger testing (Task 2 Step 1) ✓. No spec requirement left uncovered.
- **Placeholder scan:** no TBD/TODO; the one caveat (Task 2's backward-capture test fuel value) is flagged as "verify and adjust if needed," matching this codebase's own existing convention for RNG/geometry-dependent tests rather than being a genuine unresolved gap.
- **Type consistency:** `first_item_star : Int` used identically across the `Game` type, both `fresh_run` branches, and both test literals. `roll_first_item_star`'s `(Random.Rng, Int)` return matches every call site's `let (rng3, first_item_star) = ...` destructuring. `roll_one`'s `(Random.Rng, UpgradeKind)` return matches `let (rng_item, upgrade) = ...`.

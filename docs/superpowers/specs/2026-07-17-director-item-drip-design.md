# Director-paced item drip

## Goal

After the guaranteed first item (star 3/6/9 — see `2026-07-17-first-item-star-spawn-design.md`), keep a trickle of item pickups flowing across the rest of the run, paced by the existing pacing director (`Perihelion.Director`) rather than left purely to the per-kill 25% `drop_chance()` roll. Every forward star capture becomes eligible to drop an item; the odds and cadence are shaped by the director's current phase (Relax/BuildUp/Peak/Fade), so the drip feels tied to the run's tension curve rather than being flat.

## Scope

- Trigger event: forward star capture (`on_capture`'s `idx > game.current` branch), the same seam the first-item-star feature and milestone system already use — not kills, not a raw timer.
- Eligibility gate: a per-run cooldown counted in star captures (not seconds) — a capture is only eligible to roll if at least `item_drip_cooldown_stars()` forward captures have passed since the last successful drip (or run start).
- Rate: every eligible capture rolls against a phase-dependent chance (`Perihelion.Director.item_drip_chance`), following the same per-phase-constant + `fade_lerp` pattern the director already uses for `asteroid_interval_mult`/`ship_chance_mult`/`ship_chance_cap`.
- Draws from the same pool as normal drops (`Perihelion.Upgrades.roll_one`), spawned at the captured star's position — same `Pickup` shape as the first-item-star feature and `roll_drops`.
- Fully independent of the guaranteed first-item-star spawn and of `roll_drops`/`drop_chance()`/`drop_chance_mult`/the milestone system. All of these can in principle land on the same star capture (e.g. the rare case where the drip cooldown lapses to land on star 3 or star 10 too) — not specifically prevented, matching this codebase's existing convention of independent RNG-threaded mechanisms rather than adding cross-mechanism exclusion.
- Not in scope: changing `roll_drops`, `drop_chance()`, `drop_chance_mult`, the milestone system, or the first-item-star feature itself.

## Mechanic

### `Perihelion.Director` (`lib/perihelion_director.march`)

New tuning constants, alongside the existing per-phase constants (`relax_asteroid_mult()` etc., after `fn baseline_ship_cap() : Float do 0.45 end`):

```march
fn relax_item_drip_chance() : Float do 0.15 end
fn buildup_item_drip_chance() : Float do 0.05 end
fn peak_item_drip_chance() : Float do 0.02 end
fn item_drip_cooldown_stars() : Int do 2 end
```

Rates: Relax rewards calm/exploration stretches most generously; BuildUp is modest; Peak is deliberately the rarest since it already carries the existing `peak_drop_mult()` 1.5x kill-drop boost (when softened) and the guaranteed hunter spawn on Peak entry — this drip is additive, not a replacement, so Peak shouldn't be double-rewarded on top of what it already gets.

New dispatch function, same shape as `asteroid_interval_mult`/`ship_chance_mult` (placed right after `drop_chance_mult`):

```march
doc "Chance a captured star triggers the drip-fed item spawn this phase (see item_drip_cooldown_stars for the cooldown gate applied before this is even rolled)."
fn item_drip_chance(d : Director) : Float do
  match d.phase do
    Relax -> relax_item_drip_chance()
    BuildUp -> buildup_item_drip_chance()
    Peak -> peak_item_drip_chance()
    Fade -> fade_lerp(d, peak_item_drip_chance(), relax_item_drip_chance())
  end
end
```

### `Game` type (`lib/perihelion_core.march`)

New field, alongside `first_item_star`:

```march
stars_since_drip : Int,
```

Rolled/initialized to `0` in `fresh_run` (both branches), same as `stars_chained`/`first_item_star`.

### `on_capture` (`lib/perihelion_core.march`, forward-capture branch)

After the first-item-star spawn check (from the prior feature), add the drip check, threading RNG sequentially same as every other roll in this branch:

1. Increment `stars_since_drip` by 1.
2. If the incremented value is `< item_drip_cooldown_stars()`, that's the new value — no roll, not eligible yet.
3. Otherwise, roll one `Perihelion.Level.draw_pub` against `Perihelion.Director.item_drip_chance(game.director)`:
   - Success: draw via `Perihelion.Upgrades.roll_one`, spawn a `Pickup` at `(captured.x, captured.y)` (same shape as `roll_drops`/the first-item-star spawn), and reset the counter to `0`.
   - Failure: keep the incremented counter (still eligible next time, since it's already past the cooldown threshold — no need to re-wait).
4. The (possibly updated) `rng` feeds into the existing `milestone_check` call, same sequential-threading discipline as the first-item-star feature.

## Testing

Real `Core`/`Director`-layer test coverage:
- `Perihelion.Director.item_drip_chance` returns the right constant per phase, and interpolates correctly through Fade (mirrors existing `asteroid_interval_mult` Fade tests if present, else same style as other phase-dispatch tests in `test/test_director.march`).
- A star capture before the cooldown elapses (`stars_since_drip` at 0 or 1 when `item_drip_cooldown_stars() == 2`) never spawns a drip pickup, regardless of phase/seed.
- Once the cooldown has elapsed, a capture in a seed/phase combination known to roll under the phase's chance spawns exactly one pickup and resets `stars_since_drip` to 0.
- A failed roll (seed known to roll over the phase's chance) leaves `stars_since_drip` at its incremented (still-eligible) value, not reset.
- The drip mechanism doesn't interfere with the first-item-star spawn or the milestone system when multiple mechanisms are eligible on the same capture (RNG threads through all three without reuse/corruption).

## Open implementation details (left to implementation, not blocking the spec)

- Exact numeric tuning of the four new constants (0.15/0.05/0.02/2) — starting point as listed above, adjustable during implementation/playtesting without changing the mechanic's shape.

# Nebula Tuning & Ship-Silhouette Shield — Design

## Goal

Four gameplay/visual tweaks: rarer nebulas, more irregularly-shaped nebulas, nebulas that can appear independent of the star ladder, and a shield that traces the player ship's actual silhouette instead of a plain circle.

## A. Nebula frequency

`Perihelion.Nebula.cloud_chance()` (`lib/perihelion_nebula.march:20`) drops from `0.55` to `0.30` — each star independently rolls this chance for a nebula anchored to it, unchanged otherwise.

## B. Multi-lobe shapes (no shader changes)

The WebGL shader already sums density contributions from an arbitrary list of clouds per pixel (`march_webgl.mjs`, capped at `MAX_CLOUDS = 16`, silently dropping any past that). So irregularity is a **data** change, not a shader change: `star_cloud` currently returns `Option(Cloud)` — one circular-falloff blob per star. It becomes `List(Cloud)`: when a star rolls a cloud, it gets 2-3 lobes instead of 1, each jittered near the same shared anchor point (within roughly half the base radius), each with its own independently-rolled radius fraction (0.5-0.85x the base rolled radius) and strength. `collect_star_clouds` changes from `Cons`-ing one optional cloud to appending the returned list. Because lobes cluster near one anchor and each individually satisfies the existing "always overlaps its star" jitter bound, the "a spawned cloud always overlaps the star it's rooted to" invariant still holds for at least one lobe (the others may drift slightly further but stay close).

Budget note: dropping `cloud_chance` to 0.30 while roughly tripling entries-per-hit keeps total simultaneous cloud count in the same ballpark as today; not a new risk, same silent 16-cap that already exists.

## C. Off-path free-floating clouds

A new, second spawn mechanism, independent of the star ladder entirely. Stars are laid out with `x` clamped to `[margin(), view_w - margin()]` (`lib/perihelion_level.march:79`) — a fixed 60px margin corridor. Free clouds ignore this:

- World Y is divided into fixed-size bands (500 units each).
- Each band independently rolls a low chance (~0.12) via a hash seeded by `(band_index, seed)` — same `hash3`-style function, different inputs, so this reshuffles per run exactly like star clouds do.
- On a hit, the free cloud's `x` is drawn from a wider range than the star corridor (roughly `-100.0` to `view_w + 100.0`), `y` is jittered within the band, and radius/strength use the same distribution as star clouds (`radius_min()`/`radius_max()`, skewed-small).
- These are filtered to the visible band the same way `visible_clouds` already filters star clouds (`in_view`/`filter_visible`), and folded into the same returned `List(Cloud)` — no changes needed to `to_screen_clouds` or `draw_nebula_gl` (both already just consume `List(Cloud)` generically).

Entirely contained in `lib/perihelion_nebula.march` — no edits needed to `lib/perihelion.march`.

## D. Ship-silhouette shield

Replaces the shield's plain circle (`draw_ball`, `Canvas.arc(ctx, game.ball_x, game.ball_y, 10.0, ...)`) with a stroked outline derived from the same 64x96 pixel grid the pixel-art-ship feature extracted (`player_sprite_grid()`).

- A new pure function walks the 96 rows of the grid; for each row with at least one non-`"0"` cell, records `(row, leftmost_col, rightmost_col)`.
- The hull polygon is built by walking down the right-edge points (top to bottom) then back up the left-edge points (bottom to top), closing the path — a simple row-hull outline, not a precise per-pixel trace, but it follows the ship's actual silhouette (mast prongs, forked legs) rather than a generic bounding shape.
- Points are scaled from grid-space (64x96) to the same 32x48 target the sprite itself uses, then scaled up an additional ~1.15x from the sprite's center so the shield visibly surrounds the ship rather than tracing directly on top of it.
- `draw_ball` strokes this path (`Canvas.begin_path`/`Canvas.move_to`/`Canvas.line_to`.../`Canvas.close_path`/`Canvas.stroke`) inside the same `Canvas.save`/`translate`/`rotate`/`Canvas.restore` block already used for the sprite — so it inherits the ship's rotation automatically, no separate rotation math needed.
- Only drawn when `fx.player_sprite` is `Some` (mirrors the sprite fallback); when `None`, the shield keeps its current plain-circle behavior since there's no grid to derive a hull from in that fallback path.

**Dependency:** this touches `draw_ball` in `lib/perihelion.march`, the same function the in-flight pixel-art-ship Task 2 is currently modifying. Implementation is blocked until that work lands and commits, to avoid a merge conflict — sequenced as a follow-on task, not parallel with it.

## Testing approach

Nebula tuning (A/B/C) is pure procedural generation with no gameplay-logic surface change — verified by browser inspection (visual density/frequency/shape check), consistent with how the original nebula feature was verified. No automated test coverage expected, matching `lib/perihelion_nebula.march`'s existing test file (`test/test_nebula.march`) scope — if that file asserts anything about `cloud_chance()`'s exact value or `star_cloud`'s `Option` return shape, those tests need updating for the new value/type; everything else in it (density/falloff math) is unaffected.

Shield outline (D) has no gameplay-logic change either (visual-only) — verified by browser inspection matching the pixel-art-ship's own verification approach.

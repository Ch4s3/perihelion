# Enemy Ship Randomization — Design

## Goal

Replace the enemy ship's plain `#e2e2e2` triangle (`draw_ships`) with a composed pixel-art sprite, built by stacking one randomly-picked tile from each of `greyscale_ship_tiles/top/`, `.../middle/`, and `.../bottom/` (8 tiles each, 24 total, all 176px wide, greyscale PNGs). Every spawned `Ship` gets its own random top/middle/bottom combination, giving up to 8×8×8 = 512 distinct silhouettes from 24 source images. Scoped to enemy ships only — the player ship's pixel-art sprite (`docs/superpowers/specs/2026-07-14-pixel-art-player-ship-design.md`) is unaffected and untouched.

## Approach: pre-render 24 tiles once, composite 3 per ship at draw time

This directly extends the pattern already established for the player ship: extract each source PNG into a pixel grid offline, classify into a small palette, pre-render once into an offscreen canvas at boot, and blit every frame via `Canvas.draw_node`. The only new idea is *compositing three independent pre-rendered pieces per ship* instead of one fixed sprite — each `Ship` stores which of the 8 tiles it rolled per band, and `draw_ships` stacks and blits all three every frame.

Two alternatives were considered and rejected:
- **Pre-render all 512 combinations.** Fewer draw calls per ship (1 vs 3), but requires a keyed cache built lazily against immutable data structures, and up to 512 offscreen canvases for combinations that may never all appear in one run. The 24-tile approach uses a fixed, small, boot-time cost regardless of how many ships spawn.
- **Rasterize each ship's grid every frame.** Re-walks ~150-200 grid rows per ship per frame — exactly the per-frame cost the player-sprite design already eliminated by pre-rendering. Rejected for the same reason.

## Offline extraction

A reproducible script (mirroring how `player-ship2.png` was extracted) loads each of the 24 PNGs, downsamples to a pixel grid, and classifies each cell into the same 5-value palette already used by the player ship (`sprite_tone_color`: `0`=background/skip, `1`=`#e2e2e2`, `2`=`#333333`, `3`=`#ffffff`, `4`=`#9a9a9a`).

All 24 tiles are extracted at a **shared column count** (32 columns, chosen so the existing 176px-wide source art — same aspect ratio for every tile — downsamples to square-ish cells at a size close to the player ship's cell size). Row count scales per tile proportional to its source height, so tops/mids/bottoms keep their relative proportions (top ~250px tall source → fewer grid rows than middle ~305px). Extracting all bands at the same column count keeps every tile horizontally registered — stacking top/middle/bottom of arbitrary combinations lines up left/right edges without per-combination adjustment.

Extracted grids are emitted as March data into a **new module, `lib/perihelion_shipart.march`**, one function per tile (`enemy_top_grid(idx)`, `enemy_mid_grid(idx)`, `enemy_bot_grid(idx)` each dispatching on `0..7`, or 24 named functions — implementer's choice, following whatever shape reads cleanest against `perihelion.march`'s existing `player_sprite_grid()`). Keeping this out of `perihelion.march` matches this codebase's pattern of splitting large generated/data-heavy content into its own file, and keeps the ~24×200 rows of grid data from dominating the main module.

Source PNGs (all 24 tiles + `reference_sheet.png`) are copied into `docs/superpowers/specs/assets/enemy-tiles/` for future re-extraction, following the precedent set by `player-ship2.png`.

## Data model

**`Fx`** gains three fields holding the 24 pre-rendered offscreen sprites, keyed by band and index:
```
enemy_tops : List(Node)     -- 8 entries, index 0-7
enemy_mids : List(Node)     -- 8 entries
enemy_bots : List(Node)     -- 8 entries
```
(`List(Node)` rather than `List(Option(Node))` — same defensive posture as `player_sprite` would suggest `Option`, but since all 24 are drawn in one boot-time loop with the same "freshly created canvas always succeeds" assumption already used for `player_sprite`, a single top-level `Option` around the whole trio — or simply proceeding as today — is sufficient. Concretely: `fx_init()` builds all 24 canvases the same way `sprite_node` is built; if any individual `Canvas.get_context` call were to return `None` that tile silently draws nothing, matching how `draw_ball`'s `None` arm degrades today.)

`fx_init()` creates 24 detached canvases (one per tile), sized to that tile's target width/height (see Scale below), and draws each via `draw_sprite_rows` — the exact function the player sprite already uses, unchanged.

**`Ship`** (in `perihelion_combat.march`) gains three fields:
```
top_idx : Int, mid_idx : Int, bot_idx : Int
```
each in `0..7`, rolled once at spawn and fixed for the ship's lifetime (no re-rolling, no visual changes mid-flight — same "deterministic per entity" principle as the player's fixed sprite).

## Rolling ship art at spawn

A new shared helper:
```
pfn roll_ship_art(rng : Random.Rng) : (Random.Rng, Int, Int, Int)
```
draws three independent `0..7` indices (via the existing `draw`/`Random` machinery already threaded through `spawn_star_turret`/`spawn_hunter`) and returns the advanced `rng` alongside them. Both spawn sites call this once and pass the three indices into their `Ship` record literal, the same way they already thread `rng2`/`rng3` through `pick_ring_idx`. No visual distinction between hunters and turrets — both roll from the same 512-combination pool.

## Compositing and rendering

`draw_ships` replaces the triangle-drawing body with:
1. `Canvas.save` / `translate(sx, sy)` / `rotate(heading + <offset>)` — same rotation-offset convention `draw_ball` uses relative to `ball_heading`, since the tile art's "nose" is the top tile's top edge (row 0), not local +X.
2. Look up `top_idx`/`mid_idx`/`bot_idx` into `fx.enemy_tops`/`enemy_mids`/`enemy_bots` (list indexing helper — implementer's choice of existing `List` utilities or a small `list_at` helper if none fits).
3. Blit top, then middle, then bottom via `Canvas.draw_node`, each horizontally centered (same x) and vertically stacked with no gap: top's bottom edge = middle's top edge = bottom's top edge, the whole stack centered on `(sx, sy)` (i.e. offset upward by half the total stack height, matching how `draw_ball` offsets by `-16.0, -24.0` for a centered blit).
4. `Canvas.restore`.

`draw_ships` needs `fx` threaded in as a parameter (it currently only takes `ctx, ships` — its one call site in `draw` already has `fx` in scope, so this is a signature change, not new plumbing).

## Scale and hitbox

Target: composed enemy stack reads as a capital-ship silhouette relative to the player — roughly **1.3–1.5× the player sprite's rendered height** (player is 48 world units tall), tuned by browser inspection once real art is in. Each of the 24 tiles is pre-rendered at a target width/height derived from a single shared world-units-per-grid-cell constant, so tops/mids/bottoms drawn at the same cell scale always align edge-to-edge regardless of which combination is picked.

`ship_radius()` (currently a flat `10.0` used for all collision checks against the ship) grows to track the new visible size — recommended ~40-50% of the total stack height, consistent with how `ball_radius()` (6.0) compares to the player sprite's 48-unit height. This is a single constant change; collision code itself (`perihelion_combat.march`) doesn't otherwise change shape, since ship collision is already a simple circle test against `ship_radius()`.

## Testing approach

No automated test coverage for the visual composition itself — pure rendering change, same justification as the player-ship spec (no new `Game`-level gameplay logic). `Ship` gaining three `Int` fields does touch `test_combat.march`/`test_core.march` wherever a `Ship` record is constructed by hand in test fixtures — those call sites need the three new fields added (any fixed values are fine, e.g. all `0`, since the fields carry no gameplay behavior). `ship_radius()` changing is gameplay-relevant (collision distance) and should be checked against any existing collision tests that hardcode expected hit/miss distances.

Verified by browser inspection: multiple ships on screen simultaneously should show visibly different top/middle/bottom combinations, tiles should align without seams or off-center stacking, and the enemy silhouette should read clearly as distinct from the player ship and from background asteroids.

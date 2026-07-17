# First-item star spawn

## Goal

Guarantee the player's first item pickup appears on a specific captured star, weighted 50% star 3 / 25% star 6 / 25% star 9, instead of relying purely on the existing per-kill 25% `drop_chance()` roll (`lib/perihelion_combat.march:148`) to eventually produce one. Today there is no "first item" concept at all — drops are purely independent per-kill RNG, and a player can go many stars without ever seeing a pickup.

## Scope

- Only affects the *timing* of one guaranteed pickup spawn. The existing per-kill `roll_drops` behavior (`lib/perihelion_combat.march:1205`) is untouched and keeps running in parallel — a player can still get an earlier item from a lucky kill.
- The guaranteed spawn fires **on schedule regardless** of whether the player already picked up an item earlier. It is a fixed pacing beat, not a "first item" backstop that checks whether one was already granted.
- Draws from the same pool as normal drops (`Perihelion.Upgrades.roll_one`, shared with milestones; StarKiller excluded from that pool same as today).
- Not in scope: the milestone-choice system (`Perihelion.Upgrades.milestone_check`/`draw_choices`, triggered at `stars_chained` multiples of 10, plus the existing 25%-chance early milestone at star 5) — that's a separate screen-based mechanism and is unaffected by this change.
- Not in scope: any change to `roll_drops`, `drop_chance()`, or the director's `drop_chance_mult`.

## Mechanic

### `Game` type (`lib/perihelion_core.march:144` area)

New field:
```march
first_item_star : Int,
```

### Roll at run start (`fresh_run`, `lib/perihelion_core.march:818`)

In both branches (the unreachable empty-stars fallback and the normal path), thread the existing `rng2` (from `Perihelion.Level.initial_stars`) through a new weighted 3-way draw before constructing the `Game` record:

```march
fn roll_first_item_star(rng : Random.Rng) : (Random.Rng, Int) do
  let (rng2, roll) = Perihelion.Combat.draw(rng)
  let star =
    if roll < 0.5 do 3
    else if roll < 0.75 do 6
    else 9
    end
  (rng2, star)
end
```

Same threshold-compare pattern already used for `drop_chance`/`starkiller_drop_chance` checks (`lib/perihelion_combat.march:1212`, `1220`). The resulting `rng` replaces `rng2` as the `rng:` field on the constructed `Game`; `first_item_star:` is set from the drawn value.

### Spawn on capture (`on_capture`, `lib/perihelion_core.march:622`, forward-capture branch starting line 632)

After `new_chained` is computed (line 639), check `new_chained == game.first_item_star`. If true, before/alongside the existing milestone check (line 652), draw an upgrade via `Perihelion.Upgrades.roll_one(rng, captured_game.owned_weapons, captured_game.special)` and prepend a new `Pickup` to `captured_game.pickups`:

```march
{ x: captured.x, y: captured.y, ttl: pickup_ttl(), kind: drawn_upgrade }
```

This is a separate RNG draw from the milestone check's `rng_after_check` — both must be threaded sequentially (not reusing the same `rng` twice) so the two mechanisms don't collide or desync each other's random sequences. Because `stars_chained` only climbs on forward captures and a backward capture doesn't reset it (`lib/perihelion_core.march:661`), each of star 3/6/9 is reached at most once per run, so no additional "already fired" flag is needed — the equality check alone is sufficient.

## Testing

Real `Core`-layer test coverage:
- Across many seeds, `first_item_star` only ever takes values 3, 6, or 9, and over a large sample the distribution is approximately 50/25/25.
- Capturing forward up to (and including) `game.first_item_star` results in exactly one new `Pickup` appearing in `game.pickups` at the captured star's position, at the moment that star is captured (not before, not on a later star).
- Capturing stars that aren't `first_item_star` does not spawn this guaranteed pickup (independent of whether a normal kill-drop pickup exists).
- A backward capture that passes back through an already-captured star does not re-trigger the spawn.
- RNG determinism: same seed produces the same `first_item_star` and the same drawn upgrade kind.

## Open implementation details (left to implementation, not blocking the spec)

- Exact ordering of the two RNG draws (guaranteed-item roll vs. milestone check roll) within the forward-capture branch — either order is RNG-safe as long as both are threaded sequentially; implementation picks whichever reads cleaner.

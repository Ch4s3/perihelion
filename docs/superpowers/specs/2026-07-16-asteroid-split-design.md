# Asteroid splitting

## Goal

When a shot kills a full-size asteroid, it splits into 2 smaller live asteroids instead of just dying into cosmetic debris. Today, nothing does this: `collide_shots_asteroids` (`lib/perihelion_combat.march:922`) removes a killed asteroid outright, and the "chunk debris" burst (`lib/perihelion.march`'s `Debris` type) is purely cosmetic, non-interactive wreckage.

## Scope

- Only full-size asteroids split (`radius >= asteroid_radius()`) — fragments spawn below that threshold and don't split further when killed, so the chain terminates after one level.
- Splitting only happens on a **shot** kill (`collide_shots_asteroids`). Colliding into an asteroid (ends the run) doesn't split it — irrelevant, since the run is over.
- Not in scope: general asteroid size variation (today every asteroid spawns at a single fixed `asteroid_radius()`; this only introduces one smaller fragment size, not a size gradient), fragments inheriting `AsteroidOrbiting` mode, any change to scoring (every kill — parent or fragment — scores identically via the existing `killed * new_mult` path).

## Mechanic (`lib/perihelion_combat.march`)

New constants:
```march
fn asteroid_split_count() : Int do 2 end
fn asteroid_fragment_radius() : Float do asteroid_radius() * 0.6 end
fn asteroid_fragment_speed_mult() : Float do 1.3 end
fn asteroid_fragment_spread() : Float do 0.9 end -- radians, ~51 degrees each side of the parent's heading
```

New helper, deterministic (no RNG threading — same no-state-needed pattern already used for chunk debris/asteroid shapes, keyed off the parent's own `shape_seed` + fragment index):
```march
pfn spawn_fragment(parent : Asteroid, i : Int) : Asteroid
```
Computes a per-fragment angle offset via `hashf(parent.shape_seed, int_to_float(i))` mapped into `[-spread, spread]`, rotates the parent's velocity direction by that offset, scales speed by `asteroid_fragment_speed_mult()`, and returns a new `Asteroid` at the parent's death position with `radius: asteroid_fragment_radius()`, a fresh `shape_seed` (derived the same hashed way, for sprite variety), and `mode: AsteroidDrifting`.

`collide_shots_asteroids` changes: for each killed asteroid with `radius >= asteroid_radius()`, append `asteroid_split_count()` fragments (via `spawn_fragment`) to the surviving `alive` list. Fragments a killed asteroid spawns are added in the SAME pass as its own removal — they don't exist yet this frame for shots/collisions to hit, avoiding same-frame double-kill ambiguity. `fx_bursts`/`burst_points(dead)` (the existing cosmetic debris trigger) is unchanged — the parent still gets its debris burst at the moment of death, on top of (not instead of) spawning fragments.

## Testing

Real `Combat`-layer test coverage:
- Killing a full-size asteroid leaves `asteroid_split_count()` new asteroids in `game.asteroids`, each with `radius == asteroid_fragment_radius()` and `mode == AsteroidDrifting`.
- Killing a fragment (radius already `< asteroid_radius()`) does not spawn any further asteroids.
- Fragment velocities are deterministic for a given parent (same `shape_seed`/index -> same output) and diverge from each other (not identical headings).
- Score awarded for a splitting kill matches today's `killed * new_mult` formula unchanged (fragments aren't scored on spawn, only on their own later death).

## Open implementation details (left to implementation, not blocking the spec)

- Exact numeric tuning of `asteroid_fragment_spread()`/`asteroid_fragment_speed_mult()` — tuned visually during implementation, starting point as listed above.

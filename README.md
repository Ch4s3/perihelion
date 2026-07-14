# Perihelion

A one-tap orbit-slingshot game written in [March](https://github.com/march-language/march)
and compiled to JavaScript. Orbit a star, release on a tangent, capture the
next one before you drift off into the dark.

Play: tap to release · W/S to change orbit ring · Q/E to cycle weapons ·
X to activate your special · R to reset · M to mute.

## Building

This repo doesn't yet depend on a published March toolchain — a few compiler
fixes/additions this game needs (JS-target `Audio` module support,
self-recursive tail-call return values, `Int` division truncation,
JS-target `WebGL` module support) aren't in a released version yet.
Until then, `build.sh`/`run-tests.sh` build the compiler from a
local checkout of the [march monorepo](https://github.com/march-language/march):

```bash
# defaults to ~/code/march; override with MARCH_ROOT if yours lives elsewhere
./build.sh        # compiles lib/perihelion.march -> perihelion.mjs, syncs runtime shims
./run-tests.sh     # runs every test/*.march file
```

Then open `index.html` in a browser, or serve the directory:

```bash
python3 -m http.server 8000
```

Once the needed fixes ship in a released March toolchain, this should switch
to plain `forge build --target js` / `forge test`.

## Structure

- `lib/` — game source (pure `Perihelion.Core`/`Combat`/`Level`/`Nebula`/
  `Upgrades` modules + the `Perihelion` shell module wiring Dom/Canvas/Audio)
- `test/` — interpreter-run unit tests for every pure module
- `perihelion.mjs`, `march_*.mjs` — compiled output + runtime shims, checked
  in so the game can be served directly (and pulled by URL, e.g. via jsDelivr)
  without a build step on the consuming end

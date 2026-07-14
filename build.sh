#!/usr/bin/env bash
# Build perihelion to JS.
#
# This repo is standalone (extracted from the march monorepo) but still
# needs a march compiler to build itself. Until the compiler fixes this
# game currently depends on (audio JS-module mapping, self-recursive
# tail-call return value, Int `/` truncation on --target js) are published
# in a `forge`-installable toolchain release, this script builds march
# itself from a local checkout of the march monorepo -- set MARCH_ROOT to
# point at one (defaults to ~/code/march). Once those fixes ship in a
# release, this can switch to plain `forge build --target js`.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
MARCH_ROOT="${MARCH_ROOT:-$HOME/code/march}"

if [ ! -d "$MARCH_ROOT" ]; then
  echo "error: march monorepo checkout not found at $MARCH_ROOT" >&2
  echo "       set MARCH_ROOT to point at a march checkout, e.g.:" >&2
  echo "         MARCH_ROOT=/path/to/march ./build.sh" >&2
  exit 1
fi

BUILD="$MARCH_ROOT/_build/default"
MARCH_EXE="$BUILD/bin/main.exe"
MARCH_STDLIB="$BUILD/stdlib"

echo "Building march from $MARCH_ROOT..."
(cd "$MARCH_ROOT" && dune build --root "$MARCH_ROOT" bin/main.exe)

echo "Compiling perihelion → perihelion.mjs..."
MARCH_STDLIB="$MARCH_STDLIB" MARCH_LIB_PATH="$HERE/lib" "$MARCH_EXE" --target js \
  -o "$HERE/perihelion.mjs" "$HERE/lib/perihelion.march"

echo "Syncing runtime shims from march..."
cp "$MARCH_ROOT/runtime/march_runtime.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_dom.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_canvas.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_audio.mjs" "$HERE/"
cp "$MARCH_ROOT/runtime/march_webgl.mjs" "$HERE/"

echo "Done! Open index.html in a browser, or serve this directory."

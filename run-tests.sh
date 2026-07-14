#!/usr/bin/env bash
# Run every test file in test/. See build.sh for why this builds march from
# a local checkout rather than using a `forge test`-resolved toolchain.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
MARCH_ROOT="${MARCH_ROOT:-$HOME/code/march}"

if [ ! -d "$MARCH_ROOT" ]; then
  echo "error: march monorepo checkout not found at $MARCH_ROOT" >&2
  echo "       set MARCH_ROOT to point at a march checkout, e.g.:" >&2
  echo "         MARCH_ROOT=/path/to/march ./run-tests.sh" >&2
  exit 1
fi

BUILD="$MARCH_ROOT/_build/default"
MARCH_EXE="$BUILD/bin/main.exe"
MARCH_STDLIB="$BUILD/stdlib"

(cd "$MARCH_ROOT" && dune build --root "$MARCH_ROOT" bin/main.exe stdlib)

status=0
for f in "$HERE"/test/*.march; do
  echo "--- $(basename "$f") ---"
  MARCH_STDLIB="$MARCH_STDLIB" MARCH_LIB_PATH="$HERE/lib" "$MARCH_EXE" test "$f" || status=1
done
exit $status

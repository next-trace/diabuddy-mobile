#!/usr/bin/env bash
# Local pre-commit verification for nexdoz-mobile.
# Expo builds are run via EAS; CI only typechecks.

set -euo pipefail

cd "$(dirname "$0")/.."

step() {
    printf '\n==> %s\n' "$1"
}

step "pnpm install --frozen-lockfile"
pnpm install --frozen-lockfile

step "pnpm typecheck"
pnpm typecheck

printf '\nAll local checks passed.\n'

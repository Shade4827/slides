#!/usr/bin/env bash

set -e

ROOT_DIR=$(git rev-parse --show-toplevel)

SLIDES_DIR="$ROOT_DIR/slides/slides"
OUTPUT_DIR="$ROOT_DIR/nuxt/public/slides"

for dir in $SLIDES_DIR/*; do
  if [ -d "$dir" ]; then
    name=$(basename "$dir")

    echo "Building slide: $name"

    pnpm slidev build "$dir/slides.md" \
      --base "/slides/$name/" \
      --out "$OUTPUT_DIR/$name" \
      --without-notes
  fi
done

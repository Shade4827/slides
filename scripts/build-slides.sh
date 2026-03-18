#!/usr/bin/env bash

set -e

SLIDES_DIR="slides/slides"
OUTPUT_DIR="nuxt/public/slides"

pnpm slidev build "$SLIDES_DIR/sample/slides.md" \
  --base /slides/sample/ \
  --out ../../../nuxt/public/slides/sample \
  --without-notes

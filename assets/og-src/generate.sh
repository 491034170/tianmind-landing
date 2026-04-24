#!/usr/bin/env bash
#
# Regenerate assets/og.jpg from assets/og-src/og.html via Chrome headless.
# Run this whenever you change og.html.
#
# Dependencies:
#   - Google Chrome / Chromium installed in a standard path.
#   - ImageMagick ('magick' or 'convert') on PATH.

set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$HERE/../.." && pwd)"
HTML="$HERE/og.html"
OUT_PNG="$HERE/.og.png"
OUT_JPG="$REPO_ROOT/assets/og.jpg"

# Find Chrome. Prefer Google Chrome on macOS; fall back to chromium on Linux.
CHROME=""
for candidate in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "/usr/bin/google-chrome" \
  "/usr/bin/google-chrome-stable" \
  "/usr/bin/chromium" \
  "/usr/bin/chromium-browser"; do
  if [[ -x "$candidate" ]]; then CHROME="$candidate"; break; fi
done
if [[ -z "$CHROME" ]]; then
  echo "error: no Chrome / Chromium binary found" >&2
  exit 1
fi

# Find ImageMagick.
if command -v magick >/dev/null 2>&1; then
  IM=magick
elif command -v convert >/dev/null 2>&1; then
  IM=convert
else
  echo "error: ImageMagick not found (brew install imagemagick / apt install imagemagick)" >&2
  exit 1
fi

echo "==> rendering $HTML -> $OUT_PNG"
rm -f "$OUT_PNG"
# --virtual-time-budget lets fonts from Google Fonts finish loading before
# the screenshot snaps. Without it, Chrome often captures a frame with
# fallback fonts in place.
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-sandbox \
  --window-size=1200,630 \
  --virtual-time-budget=3000 \
  --screenshot="$OUT_PNG" \
  "file://$HTML" >/dev/null 2>&1

if [[ ! -s "$OUT_PNG" ]]; then
  echo "error: Chrome did not produce a PNG" >&2
  exit 1
fi

echo "==> encoding $OUT_PNG -> $OUT_JPG (JPEG q=88, 4:2:0)"
"$IM" "$OUT_PNG" -quality 88 -strip -sampling-factor 4:2:0 "$OUT_JPG"

rm -f "$OUT_PNG"

echo
echo "done: $OUT_JPG"
ls -l "$OUT_JPG"

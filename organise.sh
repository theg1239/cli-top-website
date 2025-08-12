#! /bin/bash

set -e

if [ $# -ne 1 ]; then
  echo "Usage: $0 x.y.z"
  exit 1
fi

VERSION="$1"
FOLDER="buildFiles/v$VERSION"

# Unzip the Windows installer
if [ ! -f cli-top-windows-installer.zip ]; then
  echo "Warning: cli-top-windows-installer.zip not found and will not be processed"
else
  unzip -o cli-top-windows-installer.zip

  INSTALLER_EXE=$(ls cli-top-installer-*.exe 2>/dev/null | head -n 1)
  if [ -n "$INSTALLER_EXE" ]; then
    mv "$INSTALLER_EXE" "$FOLDER/cli-top-windows-installer_v$VERSION.exe"
    rm -f cli-top-windows-installer.zip
  fi
fi

# Create the versioned folder
mkdir -p "$FOLDER"

# List of files to copy and rename
FILES=(
  "cli-top-linux.zip"
  "cli-top-windows.zip"
  "cli-top-macos.zip"
  "cli-top-android.zip"
)

for FILE in "${FILES[@]}"; do
  if [ ! -f "$FILE" ]; then
    echo "Warning: $FILE not found and will not be included in $FOLDER"
    continue
  fi
  BASENAME=$(basename "$FILE" .zip)
  EXT="${FILE##*.}"
  mv "$FILE" "$FOLDER/${BASENAME}_v$VERSION.$EXT"
done

# Update latest.json with the new version
jq --arg v "$VERSION" '.version = $v' latest.json > latest.json.tmp && mv latest.json.tmp latest.json

# Add blank entry to releases.json
TODAY=$(date +%Y-%m-%d)
jq --arg v "$VERSION" --arg d "$TODAY" \
  '.releases |= [{"version": $v, "releaseDate": $d, "changes": []}] + . ' releases.json > releases.json.tmp && mv releases.json.tmp releases.json

echo "Files copied and renamed to $FOLDER"
echo "latest.json and releases.json updated"
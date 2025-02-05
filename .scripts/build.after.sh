#!/bin/bash

# Define the destination folder where you want to copy the files
DESTINATION_DIR="/c/Users/otavi/OneDrive/Documentos/Web/wordpress/wp-content/plugins/otavio-serra-plugin"

# Check if the directory exists
if [ ! -d "$DESTINATION_DIR" ]; then
  # Create the directory
  echo "Creating the directory: " . "$DESTINATION_DIR";
  mkdir -p "$DESTINATION_DIR"
fi

unset GIT_INDEX_FILE
echo "Start copy files to: " . "$DESTINATION_DIR";

# Copy files to the destination folder
rsync -av --include='/build/' --include='/build/**/*' --exclude='/*' . "$DESTINATION_DIR"
rsync -av --include='/otavio-serra-plugin.php' --include='/pages/' --include='/pages/**/*' --include='/controllers/' --include='/controllers/**/*'  --include='/views/' --include='/views/**/*' --exclude='/*' . "$DESTINATION_DIR"

echo "End copy";
exit 0;
#!/bin/bash

# Edge Education Template Packaging Script

echo "📦 Packaging Edge Education Template..."

# Create a temporary directory
TEMP_DIR="edge-education-template"
mkdir -p $TEMP_DIR

# Copy source files
echo "📋 Copying source files..."
cp -r ../client $TEMP_DIR/
cp -r ../server $TEMP_DIR/
cp -r ../shared $TEMP_DIR/
cp ../package.json $TEMP_DIR/
cp ../tsconfig.json $TEMP_DIR/
cp ../tailwind.config.ts $TEMP_DIR/
cp ../postcss.config.js $TEMP_DIR/
cp ../vite.config.ts $TEMP_DIR/
cp ../drizzle.config.ts $TEMP_DIR/
cp ../theme.json $TEMP_DIR/

# Copy template files
cp README.md $TEMP_DIR/
cp CUSTOMIZATION.md $TEMP_DIR/
cp LICENSE $TEMP_DIR/
cp setup.sh $TEMP_DIR/

# Clean up any development files
echo "🧹 Cleaning up development files..."
rm -rf $TEMP_DIR/node_modules
rm -rf $TEMP_DIR/client/dist
rm -rf $TEMP_DIR/client/node_modules
find $TEMP_DIR -name ".DS_Store" -delete

# Create a zip file
echo "🗜️ Creating zip archive..."
zip -r edge-education-template.zip $TEMP_DIR

# Clean up temporary directory
rm -rf $TEMP_DIR

echo "✅ Template packaged successfully! The template is available as edge-education-template.zip"
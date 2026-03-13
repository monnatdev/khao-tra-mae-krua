#!/bin/bash

# Script to optimize images for production
# This will reduce file sizes by 70-90%

echo "🖼️  Starting image optimization..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null && ! command -v magick &> /dev/null; then
    echo "❌ ImageMagick not installed!"
    echo "📦 Install it first:"
    echo "   macOS: brew install imagemagick"
    echo "   Ubuntu: sudo apt-get install imagemagick"
    echo "   Windows: Download from https://imagemagick.org/script/download.php"
    exit 1
fi

# Create backup directory
mkdir -p public/images_backup
mkdir -p public/logos_backup

echo "💾 Creating backups..."
cp -r public/images/* public/images_backup/ 2>/dev/null || true
cp -r public/logos/* public/logos_backup/ 2>/dev/null || true

echo "🔧 Optimizing images..."

# Optimize JPG images (quality 85, max width 1920px)
find public/images -name "*.jpg" -type f | while read file; do
    echo "  Processing: $file"
    if command -v magick &> /dev/null; then
        magick "$file" -quality 85 -resize '1920x1920>' "$file"
    else
        convert "$file" -quality 85 -resize '1920x1920>' "$file"
    fi
done

# Optimize PNG images
find public/logos -name "*.png" -type f | while read file; do
    echo "  Processing: $file"
    if command -v magick &> /dev/null; then
        magick "$file" -quality 85 -resize '1920x1920>' "$file"
    else
        convert "$file" -quality 85 -resize '1920x1920>' "$file"
    fi
done

echo "✅ Image optimization complete!"
echo "📊 Checking sizes..."
du -sh public/images public/logos

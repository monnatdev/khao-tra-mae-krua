#!/bin/bash

# Script to optimize video for production
# This will reduce file size by 50-80%

echo "🎥 Starting video optimization..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg not installed!"
    echo "📦 Install it first:"
    echo "   macOS: brew install ffmpeg"
    echo "   Ubuntu: sudo apt-get install ffmpeg"
    echo "   Windows: Download from https://ffmpeg.org/download.html"
    exit 1
fi

# Create backup
mkdir -p public/videos_backup
echo "💾 Creating backup..."
cp public/videos/*.mp4 public/videos_backup/ 2>/dev/null || true

# Optimize video
VIDEO_FILE="public/videos/04_20240702_export_Rice_aleef.mp4"
OUTPUT_FILE="public/videos/04_20240702_export_Rice_aleef_optimized.mp4"

if [ -f "$VIDEO_FILE" ]; then
    echo "🔧 Optimizing video..."
    echo "  Input: $VIDEO_FILE"
    
    ffmpeg -i "$VIDEO_FILE" \
        -vcodec libx264 \
        -crf 28 \
        -preset slow \
        -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
        -movflags +faststart \
        -y \
        "$OUTPUT_FILE"
    
    # Show file sizes
    echo ""
    echo "📊 Results:"
    echo "  Original: $(du -h "$VIDEO_FILE" | cut -f1)"
    echo "  Optimized: $(du -h "$OUTPUT_FILE" | cut -f1)"
    echo ""
    echo "✅ Video optimization complete!"
    echo "🔄 Replace original? (y/n)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        mv "$OUTPUT_FILE" "$VIDEO_FILE"
        echo "✅ Original file replaced!"
    else
        echo "ℹ️  Optimized file saved as: $OUTPUT_FILE"
    fi
else
    echo "❌ Video file not found: $VIDEO_FILE"
    exit 1
fi

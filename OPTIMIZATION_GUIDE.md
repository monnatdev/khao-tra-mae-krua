# 🚀 Image & Video Optimization Guide

## ปัญหาปัจจุบัน
- รูปภาพรวม: **58MB**
- วีดีโอ: **31MB**
- **รวมทั้งหมด: ~90MB** (ใหญ่เกินไป!)

## เป้าหมาย
- ลดขนาดเหลือ **20-25MB** (ลด 70%)
- Loading เร็วขึ้น 3-4 เท่า
- ประหยัด bandwidth

---

## วิธีที่ 1: ใช้ Scripts (แนะนำ)

### ติดตั้ง Tools

**macOS:**
```bash
brew install imagemagick ffmpeg
```

**Ubuntu/Debian:**
```bash
sudo apt-get install imagemagick ffmpeg
```

**Windows:**
- ImageMagick: https://imagemagick.org/script/download.php
- FFmpeg: https://ffmpeg.org/download.html

### รัน Scripts

```bash
# 1. Optimize รูปภาพ
chmod +x scripts/optimize-images.sh
./scripts/optimize-images.sh

# 2. Optimize วีดีโอ
chmod +x scripts/optimize-video.sh
./scripts/optimize-video.sh
```

---

## วิธีที่ 2: ใช้ Online Tools (ง่ายที่สุด)

### สำหรับรูปภาพ:

1. **TinyPNG** (แนะนำ)
   - เข้า: https://tinypng.com
   - ลากไฟล์ทั้งหมดจาก `public/images/` และ `public/logos/`
   - ดาวน์โหลดไฟล์ที่ optimize แล้ว
   - แทนที่ไฟล์เดิม

2. **Squoosh** (ละเอียดกว่า)
   - เข้า: https://squoosh.app
   - ปรับ Quality: 80-85
   - Resize: Max width 1920px
   - Format: WebP หรือ JPEG

### สำหรับวีดีโอ:

1. **CloudConvert**
   - เข้า: https://cloudconvert.com/mp4-converter
   - Upload: `public/videos/04_20240702_export_Rice_aleef.mp4`
   - Settings:
     - Video Codec: H.264
     - Quality: Medium (CRF 28)
     - Resolution: 1920x1080
   - Convert & Download

2. **HandBrake** (Desktop App)
   - ดาวน์โหลด: https://handbrake.fr
   - Preset: "Fast 1080p30"
   - Quality: RF 28
   - Convert

---

## วิธีที่ 3: ใช้ NPM Package

```bash
npm install -D sharp
```

สร้างไฟล์ `scripts/optimize.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const imagesDir = 'public/images';
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(imagesDir, file);
      console.log(`Optimizing: ${file}`);
      
      await sharp(inputPath)
        .resize(1920, 1920, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ quality: 85 })
        .toFile(inputPath + '.tmp');
      
      fs.renameSync(inputPath + '.tmp', inputPath);
    }
  }
  
  console.log('✅ Done!');
}

optimizeImages();
```

รัน:
```bash
node scripts/optimize.js
```

---

## ตรวจสอบผลลัพธ์

```bash
# ดูขนาดไฟล์
du -sh public/images public/videos public/logos

# ดูรายละเอียด
find public -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.mp4" \) -exec ls -lh {} \;
```

---

## หลังจาก Optimize แล้ว

### 1. ใช้ LazyVideo Component

แก้ไข `components/Vision.tsx`:

```tsx
import LazyVideo from "./LazyVideo"

// แทนที่ <video> tag ด้วย:
<LazyVideo 
  src="/videos/04_20240702_export_Rice_aleef.mp4"
  poster="/images/rice.jpg"
/>
```

### 2. ตรวจสอบ Performance

```bash
npm run build
npm run start
```

เปิด Chrome DevTools:
- Network tab: ดู file sizes
- Lighthouse: ตรวจสอบ Performance Score

---

## Expected Results

| Item | Before | After | Savings |
|------|--------|-------|---------|
| Images | 58MB | 12-15MB | 75% |
| Video | 31MB | 8-10MB | 70% |
| **Total** | **90MB** | **20-25MB** | **72%** |

---

## Deploy Checklist

- [ ] Optimize รูปภาพทั้งหมด
- [ ] Optimize วีดีโอ
- [ ] ใช้ LazyVideo component
- [ ] Test บน localhost
- [ ] Check Lighthouse score (ควรได้ 80+)
- [ ] Deploy!

---

## Hosting Recommendations

### Vercel (แนะนำ)
- ✅ Free: 100GB bandwidth/month
- ✅ Auto Image Optimization
- ✅ CDN ทั่วโลก
- Deploy: `vercel --prod`

### Netlify
- ✅ Free: 100GB bandwidth/month
- ✅ CDN ทั่วโลก
- Deploy: `netlify deploy --prod`

### Cloudflare Pages
- ✅ Unlimited bandwidth
- ✅ CDN ทั่วโลก
- Deploy: `wrangler pages deploy`

---

## ติดปัญหา?

1. ตรวจสอบว่า tools ติดตั้งแล้ว: `convert --version` และ `ffmpeg -version`
2. ดู error logs ใน scripts
3. ลอง online tools แทน (ง่ายกว่า)

---

**หมายเหตุ:** สำรองไฟล์ต้นฉบับก่อน optimize เสมอ! Scripts จะสร้าง backup folder อัตโนมัติ

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeImages() {
  const imagesDir = path.resolve(process.cwd(), 'public/images');
  const fleetDir = path.resolve(imagesDir, 'fleet');

  const filesToConvert = [
    { src: 'hero-limo.png', out: 'hero-limo.webp', width: 1920, quality: 82 },
    { src: 'hero-limo-mobile.png', out: 'hero-limo-mobile.webp', width: 900, quality: 80 },
    { src: 'interior-limo.png', out: 'interior-limo.webp', width: 1600, quality: 82 },
    { src: 'reserva-tarmac.png', out: 'reserva-tarmac.webp', width: 1600, quality: 82 },
  ];

  for (const item of filesToConvert) {
    const inputPath = path.join(imagesDir, item.src);
    const outputPath = path.join(imagesDir, item.out);
    if (fs.existsSync(inputPath)) {
      console.log(`Converting ${item.src} to ${item.out}...`);
      await sharp(inputPath)
        .resize({ width: item.width, withoutEnlargement: true })
        .webp({ quality: item.quality })
        .toFile(outputPath);
      const stat = fs.statSync(outputPath);
      console.log(`Done! Output size: ${(stat.size / 1024).toFixed(1)} KB`);
    }
  }

  // Also convert fleet images to webp if not present
  if (fs.existsSync(fleetDir)) {
    const fleetFiles = fs.readdirSync(fleetDir);
    for (const f of fleetFiles) {
      if (f.endsWith('.png') && !f.endsWith('.webp')) {
        const inputPath = path.join(fleetDir, f);
        const webpName = f.replace(/\.png$/, '.webp');
        const outputPath = path.join(fleetDir, webpName);
        console.log(`Converting fleet image ${f} to ${webpName}...`);
        await sharp(inputPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
      }
    }
  }
}

optimizeImages().catch(console.error);

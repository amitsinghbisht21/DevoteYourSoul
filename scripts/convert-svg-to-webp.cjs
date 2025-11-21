const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '..', 'public', 'assets', 'blog-images');

async function convert() {
  let files;
  try {
    files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
  } catch (err) {
    console.error('Unable to read directory', dir, err.message);
    return;
  }
  if (files.length === 0) {
    console.log('No SVG files found to convert.');
    return;
  }
  for (const file of files) {
    const svgPath = path.join(dir, file);
    const base = file.replace(/\.svg$/, '');
    const outPath = path.join(dir, base + '.webp');
    try {
      const data = fs.readFileSync(svgPath);
      await sharp(data)
        .webp({ quality: 85 })
        .toFile(outPath);
      console.log('Converted', file, '->', base + '.webp');
    } catch (err) {
      console.error('Failed to convert', file, err.message);
    }
  }
}

convert();

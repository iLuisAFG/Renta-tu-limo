import fs from 'fs';
import path from 'path';
import https from 'https';

const FONTS_DIR = path.resolve(process.cwd(), 'public/fonts');
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

function fetch(url: string, headers: Record<string, string> = {}): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

function downloadBinary(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', reject);
    });
  });
}

async function run() {
  const cssUrl =
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Cormorant+Garamond:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';

  const css = await fetch(cssUrl, {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });

  // Parse @font-face blocks specifically for latin
  const blocks = css.split('@font-face').slice(1);
  const latinBlocks = blocks.filter((b) => b.includes('/* latin */') || b.includes('unicode-range: U+0000-00FF'));

  const fontFaceCss: string[] = [];

  for (const block of latinBlocks) {
    const familyMatch = block.match(/font-family:\s*'([^']+)'/);
    const weightMatch = block.match(/font-weight:\s*(\d+)/);
    const styleMatch = block.match(/font-style:\s*([^;]+)/);
    const urlMatch = block.match(/src:\s*url\((https:[^)]+)\)/);

    if (familyMatch && weightMatch && urlMatch) {
      const family = familyMatch[1];
      const weight = weightMatch[1];
      const style = styleMatch ? styleMatch[1].trim() : 'normal';
      const woff2Url = urlMatch[1];

      const cleanFamily = family.replace(/\s+/g, '-').toLowerCase();
      const fileName = `${cleanFamily}-${weight}-${style}.woff2`;
      const filePath = path.join(FONTS_DIR, fileName);

      console.log(`Downloading font ${fileName} from ${woff2Url}...`);
      await downloadBinary(woff2Url, filePath);

      fontFaceCss.push(`
@font-face {
  font-family: '${family}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('/fonts/${fileName}') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`);
    }
  }

  const cssPath = path.resolve(process.cwd(), 'src/styles/fonts.css');
  fs.writeFileSync(cssPath, fontFaceCss.join('\n\n'), 'utf-8');
  console.log(`Saved fonts CSS to ${cssPath}`);
}

run().catch(console.error);

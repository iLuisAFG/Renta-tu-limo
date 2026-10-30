import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ROUTES_CONFIG, type RouteConfig } from '../src/routes.config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distServerDir = path.resolve(rootDir, 'dist-server');

async function prerender() {
  console.log('🚀 Starting static prerendering for rentalimosina.com...');

  // 1. Verify dist and dist-server exist
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}. Run vite build first.`);
  }

  const serverEntryPath = path.resolve(distServerDir, 'entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`SSR server bundle not found at ${serverEntryPath}. Run vite build --ssr src/entry-server.tsx first.`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  // Dynamic import of the compiled SSR server bundle using pathToFileURL on Windows
  const { pathToFileURL } = await import('url');
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  console.log(`📄 Found ${ROUTES_CONFIG.length} routes to prerender.\n`);

  for (const route of ROUTES_CONFIG) {
    console.log(`Generating [${route.type}] ${route.path} ...`);
    const { html: appHtml } = render(route.path);

    // Build head replacement tags
    const titleTag = `<title>${route.title}</title>`;
    const descTag = `<meta name="description" content="${route.description}" />`;
    const canonicalTag = `<link rel="canonical" href="${route.canonical}" />`;
    const ogTitleTag = `<meta property="og:title" content="${route.title}" />`;
    const ogDescTag = `<meta property="og:description" content="${route.description}" />`;
    const ogUrlTag = `<meta property="og:url" content="${route.canonical}" />`;
    const ogImgTag = `<meta property="og:image" content="${route.ogImage}" />`;
    const twTitleTag = `<meta name="twitter:title" content="${route.title}" />`;
    const twDescTag = `<meta name="twitter:description" content="${route.description}" />`;
    const twImgTag = `<meta name="twitter:image" content="${route.ogImage}" />`;
    const schemaTag = `<script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n</script>`;

    let pageHtml = template;

    // Replace Title
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, titleTag);

    // Replace Meta Description
    pageHtml = pageHtml.replace(/<meta name="description" content="[\s\S]*?" \/>/i, descTag);

    // Replace Canonical
    pageHtml = pageHtml.replace(/<link rel="canonical" href="[\s\S]*?" \/>/i, canonicalTag);

    // Replace OG Tags
    pageHtml = pageHtml.replace(/<meta property="og:title" content="[\s\S]*?" \/>/i, ogTitleTag);
    pageHtml = pageHtml.replace(/<meta property="og:description" content="[\s\S]*?" \/>/i, ogDescTag);
    pageHtml = pageHtml.replace(/<meta property="og:url" content="[\s\S]*?" \/>/i, ogUrlTag);
    pageHtml = pageHtml.replace(/<meta property="og:image" content="[\s\S]*?" \/>/i, ogImgTag);

    // Replace Twitter Tags
    pageHtml = pageHtml.replace(/<meta name="twitter:title" content="[\s\S]*?" \/>/i, twTitleTag);
    pageHtml = pageHtml.replace(/<meta name="twitter:description" content="[\s\S]*?" \/>/i, twDescTag);
    pageHtml = pageHtml.replace(/<meta name="twitter:image" content="[\s\S]*?" \/>/i, twImgTag);

    // Inject JSON-LD Schema before </head>
    pageHtml = pageHtml.replace('</head>', `  ${schemaTag}\n  </head>`);

    // Inject Rendered App HTML into #root
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine target output file
    let targetFilePath = templatePath;
    if (route.path !== '/') {
      const cleanPath = route.path.replace(/^\/|\/$/g, '');
      const outDir = path.resolve(distDir, cleanPath);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      targetFilePath = path.resolve(outDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');
    console.log(`   ✓ Wrote static HTML to: ${path.relative(rootDir, targetFilePath)}`);
  }

  // 2. Generate dist/sitemap.xml
  console.log('\n🗺️ Generating canonical XML sitemap...');
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES_CONFIG.map(
  (r) => `  <url>
    <loc>${r.canonical}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.type === 'home' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.type === 'home' ? '1.0' : r.type === 'occasion' ? '0.9' : '0.8'}</priority>
  </url>`
).join('\n')}
</urlset>`;

  const sitemapDist = path.resolve(distDir, 'sitemap.xml');
  fs.writeFileSync(sitemapDist, sitemapXml, 'utf-8');
  console.log(`   ✓ Sitemap written to: ${path.relative(rootDir, sitemapDist)}`);

  // 3. Generate dist/robots.txt
  console.log('\n🤖 Ensuring robots.txt in dist...');
  const robotsTxt = `# robots.txt para Renta tu Limo
User-agent: *
Allow: /

# Declaración del Sitemap XML canónico
Sitemap: https://rentalimosina.com/sitemap.xml
`;
  const robotsDist = path.resolve(distDir, 'robots.txt');
  fs.writeFileSync(robotsDist, robotsTxt, 'utf-8');
  console.log(`   ✓ robots.txt written to: ${path.relative(rootDir, robotsDist)}`);

  // 4. Ensure 404.html in dist
  const fourOhFourSrc = path.resolve(rootDir, 'public/404.html');
  const fourOhFourDist = path.resolve(distDir, '404.html');
  if (fs.existsSync(fourOhFourSrc)) {
    fs.copyFileSync(fourOhFourSrc, fourOhFourDist);
    console.log(`   ✓ 404.html copied to: ${path.relative(rootDir, fourOhFourDist)}`);
  }

  console.log('\n✨ Prerender complete! All 19 pages generated successfully.');
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});

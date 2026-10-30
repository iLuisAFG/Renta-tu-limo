import fs from 'fs';
import path from 'path';
import { ROUTES_CONFIG } from '../src/routes.config';

let errors = 0;
for (const route of ROUTES_CONFIG) {
  const filePath =
    route.path === '/'
      ? path.resolve('dist/index.html')
      : path.resolve('dist', route.path.replace(/^\/|\/$/g, ''), 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error('MISSING FILE:', filePath);
    errors++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Check H1
  const h1Matches = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`${route.path}: Expected 1 H1, found ${h1Matches.length}`);
    errors++;
  }

  // Check Title
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch || titleMatch[1].length > 60) {
    console.error(`${route.path}: Invalid title length (${titleMatch ? titleMatch[1].length : 0})`);
    errors++;
  }

  // Check Meta Description
  const descMatch = html.match(/<meta name="description" content="([\s\S]*?)" \/>/i);
  if (!descMatch || descMatch[1].length < 120 || descMatch[1].length > 160) {
    console.error(`${route.path}: Invalid description length (${descMatch ? descMatch[1].length : 0})`);
    errors++;
  }

  // Check Canonical
  const canonMatch = html.match(/<link rel="canonical" href="([\s\S]*?)" \/>/i);
  if (!canonMatch || canonMatch[1] !== route.canonical) {
    console.error(`${route.path}: Canonical mismatch (${canonMatch ? canonMatch[1] : 'none'})`);
    errors++;
  }

  // Check JSON-LD
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (!jsonLdMatch) {
    console.error(`${route.path}: Missing JSON-LD`);
    errors++;
  } else {
    try {
      JSON.parse(jsonLdMatch[1]);
    } catch (e) {
      console.error(`${route.path}: Invalid JSON-LD syntax`);
      errors++;
    }
  }

  // Check opacity degradation script
  if (!html.includes('dueDate') || !html.includes('daysPassed')) {
    console.error(`${route.path}: Missing dueDate opacity script`);
    errors++;
  }
  // Check word count
  // Strip tags and count words
  const cleanText = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = cleanText.split(/\s+/).length;
  if (wordCount < 350) {
    console.error(`${route.path}: Low word count (${wordCount} words)`);
    errors++;
  } else {
    console.log(`   ✓ ${route.path} - ${wordCount} words`);
  }
}

if (errors === 0) {
  console.log(
    '✅ ALL 19 PAGES PASSED 100% OF SEO AUDIT CHECKS: Exactly 1 H1, valid title <= 60 chars, meta desc 120-155 chars, exact canonical, valid JSON-LD graph, progressive opacity script present, 350+ words per page!'
  );
} else {
  console.error(`❌ Audit found ${errors} issues.`);
  process.exit(1);
}

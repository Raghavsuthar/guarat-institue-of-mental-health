import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

const html = await readFile('dist/index.html', 'utf8');
const serviceWorker = await readFile('dist/sw.js', 'utf8');
const indexPath = 'dist/data/conditions-index.json';
const indexText = await readFile(indexPath, 'utf8');
const index = JSON.parse(indexText) as Array<{
  id: string;
  name: { en?: string; hi?: string; gu?: string };
  searchText?: string;
}>;

const preloadTags = html.match(/<link\b(?=[^>]*rel=["']modulepreload["'])[^>]*>/g) ?? [];
const preloadHrefs = preloadTags
  .map((tag) => tag.match(/href=["']([^"']+)["']/)?.[1])
  .filter((href): href is string => Boolean(href));

assert.ok(html.includes('type="module"'), 'Production HTML must contain the module entry point.');
assert.ok(
  !preloadHrefs.some((href) => /ArticlesView|vendor-markdown|react-markdown/i.test(href)),
  `Markdown/article code must remain out of the initial modulepreload list. Found: ${preloadHrefs.join(', ')}`,
);

assert.ok(index.length > 0, 'Generated condition index must not be empty.');
assert.ok(index.every((item) => item.id && item.name?.en && item.name?.hi && item.name?.gu), 'Every index record must have an ID and localized names in en/hi/gu.');
assert.ok(index.every((item) => typeof item.searchText === 'string' && item.searchText.length > 0), 'Every condition record must include searchable text.');

const assets = await readdir('dist/assets');
assert.ok(assets.some((asset) => /^CrisisModal-.*\.js$/.test(asset)), 'Crisis modal chunk must be emitted.');
assert.ok(assets.some((asset) => /^EmergencyView-.*\.js$/.test(asset)), 'Emergency view chunk must be emitted.');
assert.ok(assets.some((asset) => /^emergency-.*\.js$/.test(asset)), 'Emergency content chunk must be emitted.');
assert.ok(
  serviceWorker.includes('conditions-index.json'),
  'Generated service worker must include the localized condition index in its precache manifest.',
);
for (const pattern of [/CrisisModal-.*\.js/, /EmergencyView-.*\.js/, /emergency-.*\.js/]) {
  assert.ok(pattern.test(serviceWorker), `Generated service worker must precache critical offline asset matching ${pattern}`);
}

console.log(`PWA build verification passed: ${index.length} trilingual condition records; ${preloadHrefs.length} initial modulepreloads; crisis, emergency, and condition-index assets included in the service-worker manifest.`);

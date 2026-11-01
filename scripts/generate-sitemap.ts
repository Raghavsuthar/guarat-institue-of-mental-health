import fs from 'fs';
import path from 'path';

import { conditionsData } from '../src/data/conditions';
import { substancesData } from '../src/data/substances';
import { treatmentsData } from '../src/data/treatments';
import { symptomsData } from '../src/data/symptoms';
import { articlesData } from '../src/data/articles';
import { glossaryData } from '../src/data/glossary';
import { childAdolescentTopics } from '../src/data/childAdolescent';
import { womensMentalHealthTopics } from '../src/data/womensMentalHealth';

const DOMAIN = 'https://gujarat-institute-of-mental-health.in';
const languages = ['en', 'hi', 'gu'];
const today = new Date().toISOString().split('T')[0];

const staticPaths = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'conditions', priority: '0.9', changefreq: 'weekly' },
  { path: 'child-psychiatry', priority: '0.9', changefreq: 'weekly' },
  { path: 'womens-mental-health', priority: '0.9', changefreq: 'weekly' },
  { path: 'addiction', priority: '0.9', changefreq: 'weekly' },
  { path: 'treatments', priority: '0.8', changefreq: 'monthly' },
  { path: 'symptoms', priority: '0.8', changefreq: 'monthly' },
  { path: 'myths', priority: '0.8', changefreq: 'weekly' },
  { path: 'caregivers', priority: '0.8', changefreq: 'monthly' },
  { path: 'interactive', priority: '0.8', changefreq: 'monthly' },
  { path: 'emergency', priority: '0.9', changefreq: 'monthly' },
  { path: 'resources', priority: '0.9', changefreq: 'monthly' },
  { path: 'articles', priority: '0.9', changefreq: 'weekly' },
  { path: 'glossary', priority: '0.7', changefreq: 'monthly' },
  { path: 'faq', priority: '0.8', changefreq: 'monthly' },
  { path: 'outreach', priority: '0.8', changefreq: 'monthly' },
  { path: 'about', priority: '0.7', changefreq: 'monthly' },
  { path: 'accessibility', priority: '0.6', changefreq: 'monthly' },
];

const dynamicPaths: Array<{ path: string; priority: string; changefreq: string }> = [];

// Conditions
conditionsData.forEach((c) => {
  dynamicPaths.push({ path: `conditions/${c.slug}`, priority: '0.8', changefreq: 'monthly' });
});

// Child & Adolescent Psychiatry Topics
childAdolescentTopics.forEach((ct) => {
  dynamicPaths.push({ path: `child-psychiatry/${ct.slug}`, priority: '0.8', changefreq: 'monthly' });
});

// Women's Mental Health Topics
womensMentalHealthTopics.forEach((wt) => {
  dynamicPaths.push({ path: `womens-mental-health/${wt.slug}`, priority: '0.8', changefreq: 'monthly' });
});

// Substances
substancesData.forEach((s) => {
  dynamicPaths.push({ path: `substances/${s.slug}`, priority: '0.8', changefreq: 'monthly' });
});

// Treatments
treatmentsData.forEach((t) => {
  dynamicPaths.push({ path: `treatments/${t.id}`, priority: '0.7', changefreq: 'monthly' });
});

// Symptoms
symptomsData.forEach((sym) => {
  dynamicPaths.push({ path: `symptoms/${sym.id}`, priority: '0.7', changefreq: 'monthly' });
});

// Articles
articlesData.forEach((art) => {
  dynamicPaths.push({ path: `articles/${art.slug}`, priority: '0.8', changefreq: 'monthly' });
});

// Glossary
glossaryData.forEach((g) => {
  dynamicPaths.push({ path: `glossary/${g.id}`, priority: '0.6', changefreq: 'monthly' });
});

const allPaths = [...staticPaths, ...dynamicPaths];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

for (const item of allPaths) {
  for (const lang of languages) {
    const loc = item.path ? `${DOMAIN}/${lang}/${item.path}` : `${DOMAIN}/${lang}`;
    xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
`;
    // hreflang alternate links
    for (const altLang of languages) {
      const altLoc = item.path ? `${DOMAIN}/${altLang}/${item.path}` : `${DOMAIN}/${altLang}`;
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altLoc}"/>\n`;
    }
    const defaultLoc = item.path ? `${DOMAIN}/en/${item.path}` : `${DOMAIN}/en`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultLoc}"/>\n`;
    xml += `  </url>\n`;
  }
}

xml += `</urlset>\n`;

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml);
console.log(`Generated sitemap.xml with ${allPaths.length * languages.length} URLs at ${sitemapPath}`);


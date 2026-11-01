import { mkdir, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { conditionsData } from '../src/data/conditions';

const locales = ['en', 'hi', 'gu'] as const;

function compactText(value: string, limit: number): string {
  const normalized = value.replace(/\s+/g, ' ').trim();
  if (normalized.length <= limit) return normalized;
  const candidate = normalized.slice(0, limit);
  const lastSpace = candidate.lastIndexOf(' ');
  return `${candidate.slice(0, lastSpace > limit * 0.65 ? lastSpace : limit).trimEnd()}…`;
}

const index = conditionsData.map((condition) => {
  const commonSymptoms = condition.commonSymptoms;
  const overview = Object.fromEntries(
    locales.map((locale) => [locale, compactText(condition.overview[locale], 260)]),
  );
  const symptoms = Object.fromEntries(
    locales.map((locale) => [
      locale,
      (commonSymptoms[locale] ?? commonSymptoms.en ?? []).slice(0, 8),
    ]),
  );
  const evidenceHighlights = condition.evidenceHighlights?.slice(0, 1).map((highlight) => ({
    fact: Object.fromEntries(
      locales.map((locale) => [locale, compactText(highlight.fact[locale], 220)]),
    ),
    citationRef: highlight.citationRef,
  }));

  return {
    id: condition.id,
    slug: condition.slug,
    category: condition.category,
    conditionIcon: condition.conditionIcon,
    name: condition.name,
    medicalTerms: condition.medicalTerms,
    overview,
    commonSymptoms: symptoms,
    evidenceHighlights,
    // Keep full overview and symptom terms searchable without shipping full clinical detail,
    // vignettes, treatment plans, and FAQs in the library index.
    searchText: `${Object.values(condition.overview).join(' ')} ${Object.values(commonSymptoms).flat().join(' ')}`.toLowerCase(),
  };
});

await mkdir('public/data', { recursive: true });
const serializedIndex = JSON.stringify(index);
await writeFile('public/data/conditions-index.json', serializedIndex, 'utf8');
console.log(`Generated lightweight index for ${index.length} condition guides: ${Buffer.byteLength(serializedIndex)} bytes (${gzipSync(serializedIndex).byteLength} bytes gzip).`);

import assert from 'node:assert/strict';
import test from 'node:test';
import { conditionsData } from '../src/data/conditions';
import { conditionEvidenceGuides } from '../src/data/conditionEvidenceGuides';

const locales = ['en', 'hi', 'gu'] as const;

test('every published condition has a trilingual evidence guide with sources', () => {
  const conditionIds = conditionsData.map((condition) => condition.id);
  const guideIds = Object.keys(conditionEvidenceGuides);

  assert.equal(new Set(conditionIds).size, conditionIds.length, 'Condition IDs must be unique.');
  assert.deepEqual(
    guideIds.filter((id) => !conditionIds.includes(id)),
    [],
    'Evidence guides must not refer to unknown conditions.',
  );

  const missing = conditionIds.filter((id) => !conditionEvidenceGuides[id]);
  assert.deepEqual(missing, [], 'Every condition must have an evidence guide.');

  for (const [id, guide] of Object.entries(conditionEvidenceGuides)) {
    assert.ok(guide.title, `${id}: title is required`);
    for (const locale of locales) {
      assert.ok(guide.title[locale]?.trim(), `${id}: missing title for ${locale}`);
      assert.ok(guide.introduction[locale]?.trim(), `${id}: missing introduction for ${locale}`);
      assert.ok(guide.reviewedNote[locale]?.trim(), `${id}: missing review note for ${locale}`);
    }
    assert.ok(guide.findings.length > 0, `${id}: at least one finding is required`);
    for (const [index, finding] of guide.findings.entries()) {
      for (const locale of locales) {
        assert.ok(finding.text[locale]?.trim(), `${id} finding ${index}: missing text for ${locale}`);
        assert.ok(finding.limitation[locale]?.trim(), `${id} finding ${index}: missing limitation for ${locale}`);
      }
    }
    assert.ok(guide.sources.length > 0, `${id}: at least one source is required`);
    for (const source of guide.sources) {
      assert.ok(/^https:\/\//.test(source.url), `${id}: source URL must use HTTPS: ${source.url}`);
      assert.ok(source.title.trim() && source.organization.trim() && source.note.trim(), `${id}: source metadata must be complete`);
    }
  }
});

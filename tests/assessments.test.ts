import assert from 'node:assert/strict';
import test from 'node:test';
import { screenersData } from '../src/data/assessments';

test('all reflection tools have unique IDs and complete localized content', () => {
  assert.equal(screenersData.length, 10);
  assert.equal(new Set(screenersData.map((tool) => tool.id)).size, screenersData.length);

  for (const tool of screenersData) {
    assert.ok(tool.questions.length > 0);
    assert.ok(tool.frequencyOptions.length >= 2);
    assert.equal(new Set(tool.questions.map((question) => question.id)).size, tool.questions.length);

    for (const language of ['en', 'hi', 'gu'] as const) {
      assert.ok(tool.name[language].trim());
      assert.ok(tool.purpose[language].trim());
      assert.ok(tool.disclaimer[language].trim());
      for (const question of tool.questions) assert.ok(question.text[language].trim());
      for (const option of tool.frequencyOptions) assert.ok(option.label[language].trim());
      for (const item of tool.interpretations) {
        assert.ok(item.level[language].trim());
        assert.ok(item.description[language].trim());
        assert.ok(item.recommendation[language].trim());
      }
    }
  }
});

test('ASRS item threshold configuration is complete', () => {
  const tool = screenersData.find((item) => item.id === 'asrs');
  assert.deepEqual(tool?.positiveResponseThresholds, [2, 2, 2, 3, 3, 3]);
  assert.deepEqual(tool?.interpretations.map(({ minScore, maxScore }) => [minScore, maxScore]), [[0, 3], [4, 6]]);
});

test('DAST question three is configured for its opposite response direction', () => {
  const tool = screenersData.find((item) => item.id === 'dast10');
  assert.deepEqual(tool?.reverseScoredQuestionIds, [3]);
});

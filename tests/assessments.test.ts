import assert from 'node:assert/strict';
import test from 'node:test';
import { screenersData } from '../src/data/assessments';
import {
  getAssessmentCategory,
  getQuestionText,
  getResultPresentation,
} from '../src/utils/assessmentSafety';

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

test('recognized screeners and adapted reflections are explicitly distinguished', () => {
  assert.equal(getAssessmentCategory('phq9'), 'recognized');
  assert.equal(getAssessmentCategory('gad7'), 'recognized');
  assert.equal(getAssessmentCategory('asrs'), 'recognized');
  assert.equal(getAssessmentCategory('dast10'), 'recognized');
  assert.equal(getAssessmentCategory('scoff'), 'recognized');
  for (const id of ['mood-reflection', 'alcohol-reflection', 'ptsd-reflection', 'postpartum-reflection']) {
    assert.equal(getAssessmentCategory(id), 'adapted');
  }
  assert.equal(getAssessmentCategory('isi'), 'pending-review');
});

test('adapted and pending-review tools never show a clinical score or severity band', () => {
  for (const id of ['mood-reflection', 'alcohol-reflection', 'ptsd-reflection', 'postpartum-reflection', 'isi']) {
    assert.deepEqual(getResultPresentation(id), { showScore: false, showInterpretation: false });
  }
  assert.deepEqual(getResultPresentation('phq9'), { showScore: true, showInterpretation: true });
});

test('PHQ-9 and GAD-7 wording corrections are localized', () => {
  assert.match(getQuestionText('phq9', 5, 'en'), /poor appetite or overeating/i);
  assert.match(screenersData.find((tool) => tool.id === 'phq9')!.questions[4].text.hi, /भूख कम लगना/);
  assert.match(screenersData.find((tool) => tool.id === 'phq9')!.questions[4].text.gu, /ભૂખ ઓછી લાગવી/);
  assert.match(getQuestionText('gad7', 4, 'en'), /trouble relaxing/i);
  assert.equal(screenersData.find((tool) => tool.id === 'gad7')!.questions[3].text.en, 'Trouble relaxing');
  assert.doesNotMatch(getQuestionText('gad7', 4, 'en'), /sitting still/i);
});

test('PHQ-9 source data separates moderately severe and severe score bands', () => {
  const bands = screenersData.find((tool) => tool.id === 'phq9')!.interpretations;
  assert.deepEqual(bands.slice(-2).map(({ minScore, maxScore }) => [minScore, maxScore]), [[15, 19], [20, 27]]);
  assert.equal(getResultPresentation('phq9', 17).band, 'moderately-severe');
  assert.equal(getResultPresentation('phq9', 21).band, 'severe');
});

test('DAST-10 source data separates substantial and severe score bands', () => {
  const bands = screenersData.find((tool) => tool.id === 'dast10')!.interpretations;
  assert.deepEqual(bands.map(({ minScore, maxScore }) => [minScore, maxScore]), [[0, 0], [1, 2], [3, 5], [6, 8], [9, 10]]);
  assert.equal(getResultPresentation('dast10', 8).band, 'substantial');
  assert.equal(getResultPresentation('dast10', 9).band, 'severe');
});

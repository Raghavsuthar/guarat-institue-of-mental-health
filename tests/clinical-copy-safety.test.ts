import assert from 'node:assert/strict';
import test from 'node:test';
import { conditionsData } from '../src/data/conditions';

const publishedConditionCopy = JSON.stringify(conditionsData);

const unsafeClinicalCopyPatterns: Array<{ label: string; pattern: RegExp }> = [
  {
    label: 'guaranteed or near-guaranteed cure-rate claims',
    pattern: /near\s+90%\s+cure\s+rates?/i,
  },
  {
    label: 'unsupported treatment response or freedom percentages',
    pattern: /(?:70%\s+to\s+80%|75%\s+to\s+85%)[^.]{0,140}(?:freedom|dramatic clinical improvement|response rate)/i,
  },
  {
    label: 'fixed 24–48 hour SSRI effect claims for PMDD',
    pattern: /(?:ssri|selective serotonin reuptake inhibitor)[^.]{0,180}24\s+to\s+48\s+hours/i,
  },
  {
    label: 'inevitable relapse claims after medication discontinuation',
    pattern: /almost inevitably leads to a severe relapse/i,
  },
  {
    label: 'deterministic claims about genetic causation',
    pattern: /most genetically determined conditions in medicine/i,
  },
  {
    label: 'unsupported superlative mortality claim',
    pattern: /highest medical mortality rate of any psychiatric condition/i,
  },
  {
    label: 'simplistic neurotransmitter-balance explanation of antipsychotic action',
    pattern: /antipsychotics work by keeping neurotransmitters balanced/i,
  },
];

test('published condition copy avoids unsupported cure, response, genetic, and relapse guarantees', () => {
  const violations = unsafeClinicalCopyPatterns
    .filter(({ pattern }) => pattern.test(publishedConditionCopy))
    .map(({ label }) => label);

  assert.deepEqual(
    violations,
    [],
    `Condition copy contains high-risk overstatements: ${violations.join('; ')}`,
  );
});

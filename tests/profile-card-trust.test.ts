import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const homeView = readFileSync(new URL('../src/views/HomeView.tsx', import.meta.url), 'utf8');
const profileCardStart = homeView.indexOf('About Gujarat Institute of Mental Health Snippet');
const profileCard = profileCardStart >= 0 ? homeView.slice(profileCardStart) : '';

test('home profile card avoids unverified consultant and registration claims', () => {
  assert.notEqual(profileCardStart, -1, 'home profile card section should exist');
  assert.doesNotMatch(profileCard, /Consultant Psychiatrist|MBBS, DNB \(Psychiatry\)|National Medical Commission|NMC\b/i);
});

test('home profile card describes the institute as public education and avoids personal credentials', () => {
  assert.match(profileCard, /Gujarat Institute of Mental Health/i);
  assert.match(profileCard, /public education|general mental-health education/i);
  assert.doesNotMatch(profileCard, /DNB Psychiatry resident|MBBS|NMC\b/i);
});


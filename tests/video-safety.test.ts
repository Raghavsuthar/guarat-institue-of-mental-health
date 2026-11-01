import assert from 'node:assert/strict';
import test from 'node:test';
import { conditionsData } from '../src/data/conditions';
import { substancesData } from '../src/data/substances';

const videoIdPattern = /^[a-zA-Z0-9_-]{11}$/;

test('embedded condition and substance videos have valid IDs and source attribution', () => {
  const entries = [
    ...conditionsData.map((item) => ({ type: 'condition', id: item.id, ...item })),
    ...substancesData.map((item) => ({ type: 'substance', id: item.id, ...item })),
  ];

  const embedded = entries.filter((item) => item.youtubeVideoId);
  assert.ok(embedded.length >= 7, 'Expected the curated condition and substance video set.');

  for (const item of embedded) {
    assert.ok(videoIdPattern.test(item.youtubeVideoId!), `${item.type} ${item.id}: malformed YouTube video ID`);
    assert.ok(item.educationalVideoTitle, `${item.type} ${item.id}: missing educational video title`);
    assert.ok(item.educationalVideoSource?.trim(), `${item.type} ${item.id}: missing video source attribution`);
    for (const locale of ['en', 'hi', 'gu'] as const) {
      assert.ok(item.educationalVideoTitle?.[locale]?.trim(), `${item.type} ${item.id}: missing title for ${locale}`);
    }
  }

  for (const item of entries.filter((entry) => entry.educationalVideoUrl)) {
    assert.ok(/^https:\/\//.test(item.educationalVideoUrl!), `${item.type} ${item.id}: external video links must use HTTPS`);
  }
});

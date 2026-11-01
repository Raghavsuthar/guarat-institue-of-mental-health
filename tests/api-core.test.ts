import test from 'node:test';
import assert from 'node:assert/strict';
import { hasValidAdminToken, normalizePingPayload } from '../server/shared/analytics';
import { isCrisisQuery } from '../src/utils/crisisDetection';

test('crisis detection catches English self-harm phrases before model use', () => {
  assert.equal(isCrisisQuery('I want to end my life'), true);
  assert.equal(isCrisisQuery('I am thinking about suicide'), true);
});

test('crisis detection catches Hindi, Gujarati, and common transliterations', () => {
  assert.equal(isCrisisQuery('मुझे आत्महत्या के विचार आ रहे हैं'), true);
  assert.equal(isCrisisQuery('મને આત્મહત્યા વિશે વિચારો આવે છે'), true);
  assert.equal(isCrisisQuery('mujhe khudkushi ke vichar aa rahe hain'), true);
  assert.equal(isCrisisQuery('mujhe marna hai'), true);
  assert.equal(isCrisisQuery('મારે જીવવું નથી'), true);
});

test('ordinary educational questions are not classified as crisis queries', () => {
  assert.equal(isCrisisQuery('What is cognitive behavioural therapy?'), false);
  assert.equal(isCrisisQuery('डिप्रेशन के लक्षण क्या हैं?'), false);
  assert.equal(isCrisisQuery('ચિંતા માટે કઈ થેરાપી ઉપયોગી છે?'), false);
});

test('analytics payload normalization accepts only known language, device and event values', () => {
  const normalized = normalizePingPayload({
    lang: 'gu',
    path: '/gu/conditions/ocd?private=value',
    referrerDomain: 'www.example.org',
    deviceType: 'mobile',
    eventType: 'page_view',
  });
  assert.ok(normalized);
  assert.equal(normalized.lang, 'gu');
  assert.equal(normalized.path, 'gu/conditions/ocd');
  assert.equal(normalized.referrerDomain, 'example.org');
  assert.equal(normalized.deviceType, 'mobile');
  assert.equal(normalized.eventType, 'page_view');
  assert.equal(normalizePingPayload({ lang: 'fr' }), null);
  assert.equal(normalizePingPayload({ deviceType: 'watch' }), null);
  assert.equal(normalizePingPayload({ eventType: 'unknown' }), null);
  assert.equal(normalizePingPayload([]), null);
});

test('analytics path and referrer values are bounded and control characters removed', () => {
  assert.equal(normalizePingPayload({ path: 'x'.repeat(250) }), null);
  const normalized = normalizePingPayload({
    path: '/en/conditions/depression\u0000',
    referrerDomain: 'google.com\nforged',
  });
  assert.ok(normalized);
  assert.equal(normalized.path, 'en/conditions/depression');
  assert.equal(normalized.referrerDomain, 'Other');
});


test('admin analytics requires a long server-side secret and a Bearer header', () => {
  const secret = 'test-only-secret-that-is-longer-than-32-chars';
  assert.equal(hasValidAdminToken({ headers: { authorization: `Bearer ${secret}` } }, secret), true);
  assert.equal(hasValidAdminToken({ headers: { authorization: secret } }, secret), false);
  assert.equal(hasValidAdminToken({ headers: { authorization: 'Bearer wrong-secret' } }, secret), false);
  assert.equal(hasValidAdminToken({ headers: { authorization: `Bearer ${secret}` } }, 'short'), false);
  assert.equal(hasValidAdminToken({ headers: {} }, secret), false);
});

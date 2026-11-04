import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const serverPath = path.join(root, 'dist', 'server.cjs');
const port = Number(process.env.SERVER_SMOKE_PORT || 4179);
const server = spawn(process.execPath, [serverPath], {
  cwd: root,
  env: { ...process.env, NODE_ENV: 'production', PORT: String(port) },
  stdio: 'ignore',
});

try {
  let healthResponse;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Production server exited before becoming ready (code ${server.exitCode}).`);
    }
    try {
      healthResponse = await fetch(`http://127.0.0.1:${port}/api/health`, {
        signal: AbortSignal.timeout(1000),
        cache: 'no-store',
      });
      break;
    } catch {
      await delay(250);
    }
  }

  assert.ok(healthResponse, 'Production server did not become ready within 10 seconds.');
  assert.equal(healthResponse.status, 200);
  assert.match(healthResponse.headers.get('content-type') || '', /application\/json/i);
  const health = await healthResponse.json();
  assert.equal(health.status, 'ok');

  const pageResponse = await fetch(`http://127.0.0.1:${port}/en/privacy`, {
    signal: AbortSignal.timeout(3000),
  });
  assert.equal(pageResponse.status, 200);
  assert.match(pageResponse.headers.get('content-type') || '', /text\/html/i);
  assert.match(await pageResponse.text(), /id="root"/);

  console.log('Production server smoke test passed: JSON health endpoint and SPA deep-route fallback.');
} finally {
  if (server.exitCode === null) {
    server.kill('SIGTERM');
    await Promise.race([once(server, 'exit'), delay(3000)]);
    if (server.exitCode === null) server.kill('SIGKILL');
  }
}

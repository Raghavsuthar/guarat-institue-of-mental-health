# Production Server Build Reliability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Ensure the documented Express production server and Docker image can actually start from the output of `npm run build`, with a CI smoke test proving the runtime contract.

**Architecture:** Use the repository's existing esbuild dependency to bundle `server.ts` to `dist/server.cjs` after the Vite build. A Node.js built-in smoke script starts that artifact and checks the health JSON and SPA fallback; CI builds the Docker image and starts it to verify the health endpoint and SPA fallback.

**Tech Stack:** Node.js 22, npm, Vite 6, esbuild, Express 4, GitHub Actions, Docker.

**Spec:** `docs/superpowers/specs/2026-11-04-production-server-build-design.md`

## Global Constraints
- Use `package-lock.json` as the reproducible install source.
- Do not add dependencies.
- Keep the Vercel `api/` handlers unchanged.
- Never commit directly to `main`.
- Do not claim a check passed unless its CI output was inspected.

## Review Focus
- Missing or malformed `dist/server.cjs` must fail the smoke check.
- The server must bind to the smoke-test port through `PORT`.
- Health checks must return JSON, not the SPA HTML fallback.
- A language-prefixed deep route must still return the SPA shell.
- The child process must be terminated even when an assertion fails.

---

### Task 1: Build and verify the production Express entry point

**Files:**
- Create: `scripts/smoke-server.mjs`
- Modify: `package.json`
- Modify: `.github/workflows/ci.yml`
- Modify: `docs/AUDIT.md` after verification
- Modify: `docs/DECISIONS.md` after verification

**Interfaces:**
- The production entry point remains `dist/server.cjs`.
- `npm run test:server` runs `node scripts/smoke-server.mjs`.
- The smoke script starts the built server using `PORT` and verifies `/api/health` and `/en/privacy`.

- [x] Write the smoke test and wire it into CI before changing the build.
- [x] Run the smoke test against the current build and confirm it fails because `dist/server.cjs` is absent.
- [x] Update `npm run build` to run content validation, sitemap generation, Vite build, and esbuild bundling in that order.
- [x] Run the smoke test and confirm the production server responds with JSON health and SPA HTML.
- [x] Run `npm run validate`, `npm run lint`, `npm test`, and `npm run build`.
- [x] Build the Docker image.
- [x] Review CI output and update the audit/decision log with only observed results.
- [x] Commit the verified implementation.


## Verification record

- Red: CI run 41767728422 failed at `npm run test:server` after the original Vite-only build; the Express production entry point was not generated.
- Green: CI run 41768135612 passed validation, type-check, 12 unit tests, production build, direct server smoke test, Docker build, and Docker-container smoke test.
- Browser: run 41768135622 passed all 7 Chromium/browser/axe checks.
- Review: self-review of the PR diff found no added dependencies, no Vercel handler changes, and no clinical/UI content changes.
- Outstanding: npm audit reports 19 advisories, including 1 critical and 5 high. This task records but does not remediate dependency vulnerabilities.

# Website runtime and deployment audit — 4 November 2026

**Repository:** `Raghavsuthar/guarat-institue-of-mental-health`  
**Audited baseline:** `0cd15779118b51d3be37d5b38f2ebbc9e2b98db6`  
**Working branch:** `fix/website-runtime-bugs-2026-11`  
**Scope:** application source, API execution paths, build/deployment configuration, existing tests, and GitHub Actions evidence.

## Executive findings

Three reproducible defects were identified. All three have targeted fixes in this branch.

| Severity | Finding | Evidence | Fix |
|---|---|---|---|
| High | Self-hosted/Docker build did not generate the server bundle required by its start command | `package.json` ran only `vite build`; Dockerfile and `npm start` required `dist/server.cjs`; Vite config had no production hook compiling `server.ts` | Build now validates content, generates sitemap, builds Vite, and bundles `server.ts` with esbuild to `dist/server.cjs`; Docker asserts the artifact exists |
| High | Gemini client was instantiated without explicitly passing the server API key and used an unverified model identifier | Same configuration appeared in Vercel `api/qa.ts`, Express `server.ts`, and Vite dev API; official Google Gen AI SDK docs require an API key for Gemini Developer API | Pass `process.env.GEMINI_API_KEY`, use documented `gemini-flash-latest` by default, allow server-only `GEMINI_MODEL` override |
| High | Crisis detection missed common high-signal English phrases (e.g. “I am suicidal”, “I want to hurt myself”, “I took too many pills”, “I am not safe with myself”) | Existing API-core tests failed on these phrases; the helper only matched a narrower set of substrings | Added explicit phrases and regression coverage through the existing test cases |
| Medium | Mobile screener E2E assertion used an over-escaped regular expression | Latest main browser workflow `41790529609`: 10 passed, 1 failed; trace/log showed the app tap set `aria-pressed=true`, but progress assertion searched for a literal `\\d` | Corrected the regex to match the numeric answered count |

## Changes made

- `api/qa.ts`: explicit Gemini API key, documented default model alias, configurable server-side model constant.
- `server.ts`: explicit key, shared model and shared safety prompt from `api/qa.ts`.
- `server/apiPlugin.ts`: same Gemini model/key/prompt configuration for local Vite API parity.
- `vite.config.ts` and `server.ts`: load server-only `.env` values with `dotenv/config`, so local Vite and Express API runtimes can read documented secrets without exposing them to client bundles.
- `src/utils/crisisDetection.ts`: add common high-signal English self-harm and overdose expressions.
- `package.json`: complete production build sequence including Express server bundle.
- `Dockerfile`: fail the image build if `dist/server.cjs` is absent.
- `e2e/self-assessment.spec.mjs`: correct mobile progress matcher.
- `tests/qa-safety.test.ts`: cover API method/input/language validation, crisis short-circuit, and model configuration.

## Documentation consulted

- Context7 official React 19, Vite 6, Express 4, Google Gen AI SDK, and esbuild documentation.
- Google Gen AI SDK quickstart demonstrates passing `apiKey` to `new GoogleGenAI({ apiKey })`; SDK client reference states the Gemini API requires it.
- Google Gen AI SDK quickstart uses the `gemini-flash-latest` model alias.
- esbuild CLI supports `--bundle --format=cjs --platform=node --packages=external`.

## Verification

- Main baseline CI run `41790529632` passed.
- Main baseline browser run `41790529609` failed only on the mobile progress regex assertion (10 passed, 1 failed); the exact failing locator and line were read from the workflow log.
- Fix-branch CI run `41804358885` passed validation, TypeScript, unit tests, and the production client/server build before the final shared-prompt cleanup commits. A later run exposed missing crisis phrases in an existing regression test; those phrases have now been added and the latest-head workflow is running.
- The browser workflow and CI were re-triggered after the final commits; final head results must be checked before merge.
- No real Gemini request was made: deployment secrets are not read or exposed during this audit.
- No live Vercel/Docker deployment was changed or claimed.

## Remaining risks / not yet verified

1. **Production provider integration:** test the Q&A endpoint with the deployment's actual Gemini key and configured model. The model alias is documented by the SDK, but provider availability/quota and account access are deployment-specific.
2. **Upstash integration:** test analytics write/read and distributed rate limiting with the actual server-side Upstash credentials. Do not enter real patient data.
3. **Full route matrix:** current Playwright coverage focuses on legal pages and screeners. Add route-level smoke coverage for all major sections and all three languages.
4. **PWA/offline:** inspect service-worker update behavior, offline navigation, and cache exclusions on a real browser/device.
5. **Self-hosted runtime:** CI now proves the bundle builds; Docker image startup and health endpoint still need a container runtime check.
6. **Dependency security:** the earlier report-only scan identified 19 advisories (1 critical, 5 high, 10 moderate, 3 low). Re-run and remediate in a separate dependency-focused PR; do not mix broad upgrades into this runtime fix.
7. **Local Vite API parity:** `server/apiPlugin.ts` still has a custom development-only request parser and file-backed analytics implementation. It is not the production API path; a separate pass should decide whether to harden or replace it with shared handler logic.

## Release decision

Keep PR #8 in draft until both latest-head CI workflows pass and a deployment-owner verifies the real Gemini and Upstash integrations. Merge does not equal deployment. Clinical content, screening permissions, translations, and independent clinical sign-off are outside this software-runtime audit.

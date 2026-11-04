# Website runtime and application audit — 4 November 2026

**Repository:** `Raghavsuthar/guarat-institue-of-mental-health`  
**Audited baseline:** `0cd15779118b51d3be37d5b38f2ebbc9e2b98db6`  
**Working branch:** `fix/website-runtime-bugs-2026-11`  
**Scope:** source-level review of the React application, API execution paths, build/deployment configuration, clinical self-reflection copy, existing tests, live Vercel health response, and GitHub Actions evidence.

## Executive findings

Seven reproducible or directly verifiable issues were identified. Targeted corrections are included in this branch; final browser workflow status must be checked before merge.

| Severity | Finding | Evidence | Correction |
|---|---|---|---|
| High | Self-hosted/Docker build did not generate the server bundle required by its start command | `package.json` ran only `vite build`; Dockerfile and `npm start` required `dist/server.cjs` | Build now validates content, generates sitemap, builds Vite, and bundles `server.ts` with esbuild; CI asserts the artifact and smoke-tests Express health |
| High | Gemini client was instantiated without explicitly passing the server API key and used an unverified model identifier | Same configuration appeared in Vercel `api/qa.ts`, Express `server.ts`, and Vite dev API | Pass server-side `GEMINI_API_KEY`; use documented `gemini-flash-latest` by default with a server-only `GEMINI_MODEL` override |
| High | Crisis detection missed common high-signal English phrases | New regression cases for “I am suicidal”, “I want to hurt myself”, “I took too many pills”, and “I am not safe with myself” failed before the term-list correction | Add the missed phrases and keep English, Hindi, Gujarati, and transliteration coverage |
| Medium | Mobile screener E2E assertion used an over-escaped regular expression | Main browser run `41790529609`: 10 passed, 1 failed; trace showed the tap set `aria-pressed=true`, while the assertion searched for a literal `\\d` | Correct the matcher to accept the numeric answered count |
| Medium | Shared self-reflection notice incorrectly claimed every tool summarized the previous two weeks | The page contains tools with different recall periods, including ASRS (six months) and DAST-10 (twelve months); the new browser regression test failed before copy correction | Replace the blanket statement with trilingual wording that each questionnaire uses its own stated recall period |
| Medium | README overstated clinical validation and listed instruments not present in the current app | README described “validated screeners” and named AUDIT-C/CAGE, while the app labels its adapted tools as educational and not independently validated | Update the feature description to distinguish established-instrument references from adapted, non-diagnostic reflections |
| Low | Q&A assistant badge implied generated answers were clinically verified | UI label said “Verified Psychiatric Education” although answers are generated and are not independently verified | Change the label to “General educational information” |

## Changes made

- `api/qa.ts`: explicit Gemini API key, documented default model alias, configurable server-side model constant, shared education-only safety instruction.
- `server.ts`: explicit key, shared model and safety prompt, and server-only dotenv loading.
- `server/apiPlugin.ts`: same Gemini model/key/prompt configuration for local Vite API parity.
- `vite.config.ts`: load server-only `.env` values for local development without exposing them through client variables.
- `src/utils/crisisDetection.ts`: add common high-signal English self-harm and overdose expressions.
- `package.json`: validate content, generate sitemap, build Vite, and bundle the Express server to `dist/server.cjs`.
- `Dockerfile`: fail the image build if the server bundle is absent.
- `e2e/self-assessment.spec.mjs`: correct the mobile progress matcher and add a trilingual recall-period regression test.
- `src/views/InteractiveView.tsx`: correct the recall-period notice in English, Hindi, and Gujarati.
- `README.md`: remove unsupported “validated screener” claims and remove tools not present in the app.
- `src/components/EducationalQAAssistant.tsx`: remove the implication that generated answers are clinically verified.
- `tests/api-core.test.ts` and `tests/qa-safety.test.ts`: add crisis-expression and Q&A validation/configuration coverage.

## Documentation consulted

- Context7 documentation for React 19, Vite 6, Express 4, Google Gen AI SDK, and esbuild.
- Official Google Gen AI SDK quickstart and client reference require passing `apiKey` to `new GoogleGenAI({ apiKey })` and demonstrate `gemini-flash-latest`.
- esbuild CLI documentation supports `--bundle --format=cjs --platform=node --packages=external`.

## Verification evidence

- Main baseline CI `41790529632` passed.
- Main baseline browser workflow `41790529609` failed only on the malformed mobile progress assertion (10 passed, 1 failed).
- The recall-period browser regression failed on the old copy at run `41804521410`, as expected.
- The new crisis-expression unit test failed against the old helper at run `41804667439`, as expected.
- Fix-branch CI run `41804912023` passed content validation, TypeScript, unit tests, and the production frontend/server build.
- On the later head, run `41805040247` completed validation, type-checking, unit tests, production build, and the Express health smoke-test step successfully; final job completion and browser workflow should still be checked before merge.
- The public Vercel `/api/health` endpoint returned HTTP 200 during the audit. The Vercel runtime-errors view showed no runtime errors in the selected seven-day window. This does not verify Gemini calls, Upstash connectivity, or browser-side exceptions.
- No real Gemini request was made because deployment secrets were not accessed. No production deployment or environment settings were changed.

## Remaining risks / not yet verified

1. **Gemini integration:** verify a real, non-sensitive Q&A request with the deployment's configured key/model, quota, and permissions.
2. **Upstash integration:** verify analytics write/read and shared rate limiting with server-side credentials. Do not use real patient data.
3. **Docker container:** the Express health smoke test ran in CI; this branch still needs a full Docker image build and container-start smoke test before the self-hosted Docker path is signed off.
4. **Route coverage:** current Playwright coverage is narrow (legal pages and self-reflection). Add route smoke coverage for all major sections and all three languages.
5. **PWA/offline:** verify service-worker update behavior, offline navigation, and API/cache exclusions on a real browser/device.
6. **Dependency security:** baseline report-only audit found 19 advisories (1 critical, 5 high, 10 moderate, 3 low). Re-run and remediate in a separate dependency-focused PR.
7. **Local Vite API parity:** `server/apiPlugin.ts` still uses a custom development-only request parser and file-backed analytics path. Review body-size limits and validation parity separately; this is not the production Vercel API path.
8. **KIRAN helpline status:** the site still lists KIRAN `1800-599-0019`. Government sources conflict: a PIB release describes its merger/phasing out under Tele-MANAS, while the current DEPwD helpline directory still lists the number. Keep Tele-MANAS `14416` prominent and obtain institutional confirmation before removing or promoting the KIRAN number. Sources: [PIB merger announcement](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2006265&lang=2&reg=48) and [current DEPwD directory](https://depwd.gov.in/en/others-helplines/).

## Release decision

Keep PR #8 in draft until the latest CI and browser/accessibility workflows finish, the Docker container path is verified, and a deployment owner checks real Gemini and Upstash integrations. Merge does not equal deployment. Clinical content, instrument permissions, translations, helpline details, and independent clinical sign-off require appropriate human review.

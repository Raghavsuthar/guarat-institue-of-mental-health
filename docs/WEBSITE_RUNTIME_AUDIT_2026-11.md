# Website runtime and application audit — 4 November 2026

**Repository:** `Raghavsuthar/guarat-institue-of-mental-health`  
**Audited baseline:** `0cd15779118b51d3be37d5b38f2ebbc9e2b98db6`  
**Working branch:** `fix/website-runtime-bugs-2026-11`  
**Scope:** source-level review of the React application, API execution paths, build/deployment configuration, clinical self-reflection copy, existing tests, GitHub Actions evidence and deployment-check status.

## Executive findings

Eleven reproducible or directly verifiable issues were identified. Targeted corrections are included in this branch; final browser workflow status must be checked before merge.

| Severity | Finding | Evidence | Correction |
|---|---|---|---|
| High | Self-hosted/Docker build did not generate the server bundle required by its start command | `package.json` ran only `vite build`; Dockerfile and `npm start` required `dist/server.cjs` | Build now validates content, generates sitemap, builds Vite, and bundles `server.ts` with esbuild; CI asserts the artifact and smoke-tests Express health |
| High | Gemini client was instantiated without explicitly passing the server API key and used an unverified model identifier | Same configuration appeared in Vercel `api/qa.ts`, Express `server.ts`, and Vite dev API | Pass server-side `GEMINI_API_KEY`; use documented `gemini-flash-latest` by default with a server-only `GEMINI_MODEL` override |
| High | Crisis detection missed common high-signal English phrases | New regression cases for “I am suicidal”, “I want to hurt myself”, “I took too many pills”, and “I am not safe with myself” failed before the term-list correction | Add the missed phrases and keep English, Hindi, Gujarati, and transliteration coverage |
| Medium | Local server secrets were not loaded from the documented `.env` file in Vite/Express runtimes | Vite config and direct Express startup read `process.env`, but did not bootstrap the `.env` file; Vite 6 docs confirm env files are not loaded during config evaluation by default | Load server-side env values with `dotenv/config` in Vite config and Express entry point |
| Medium | Mobile screener E2E assertion used an over-escaped regular expression | Main browser run `41790529609`: 10 passed, 1 failed; trace showed the tap set `aria-pressed=true`, while the assertion searched for a literal `\\d`. A second stale assertion omitted the word “stated” from the UI copy | Correct both matchers without changing working answer-selection UI |
| Medium | Shared self-reflection notice incorrectly claimed every tool summarized the previous two weeks | The page contains tools with different recall periods, including ASRS (six months) and DAST-10 (twelve months); the new browser regression test failed before copy correction | Replace the blanket statement with trilingual wording that each questionnaire uses its own stated recall period |
| Medium | README overstated clinical validation and listed instruments not present in the current app | README described “validated screeners” and named AUDIT-C/CAGE, while the app labels its adapted tools as educational and not independently validated | Update the feature description to distinguish established-instrument references from adapted, non-diagnostic reflections |
| Low | Q&A assistant badge implied generated answers were clinically verified | UI label said “Verified Psychiatric Education” although answers are generated and are not independently verified | Change the label to “General educational information” |
| Low | Search shortcut hint did not match the actual keyboard handler | Header displayed `/`, while the global key handler listened for Ctrl/⌘+K | Update the visible hint to `Ctrl/⌘ K` |
| Medium | Header search button's accessible name omitted visible shortcut text | Axe `label-content-name-mismatch` identified the header search button; its accessible name did not include all visible label text | Make the accessible name match the visible label and shortcut exactly |
| Medium | Search dialog lacked an accessible name and Escape-key dismissal | The dialog had `role=dialog`/`aria-modal` but no accessible name or Escape listener, despite displaying an “ESC” close affordance | Add a localized accessible name from `t.search.title` and close the dialog on Escape |

## Changes made

- `api/qa.ts`: explicit Gemini API key, documented default model alias, configurable server-side model constant, shared education-only safety instruction.
- `server.ts`: explicit key, shared model and safety prompt, and server-only dotenv loading.
- `server/apiPlugin.ts`: same Gemini model/key/prompt configuration for local Vite API parity.
- `src/utils/crisisDetection.ts`: add common high-signal English self-harm and overdose expressions, then remove duplicate entries.
- `src/components/SearchModal.tsx`: add localized dialog naming and Escape-key dismissal.
- `vite.config.ts` and `server.ts`: load documented server-only `.env` values without exposing secrets to the client.
- `package.json`: validate content, generate sitemap, build Vite, and bundle the Express server to `dist/server.cjs`.
- `Dockerfile`: fail the image build if the server bundle is absent.
- `e2e/self-assessment.spec.mjs`: correct the mobile progress matcher and add a trilingual recall-period regression test.
- `src/views/InteractiveView.tsx`: correct the recall-period notice in English, Hindi, and Gujarati.
- `README.md`: remove unsupported “validated screener” claims and remove tools not present in the app.
- `src/components/EducationalQAAssistant.tsx`: remove the implication that generated answers are clinically verified.
- `src/components/Header.tsx`: make the displayed search shortcut and accessible name match the existing Ctrl/⌘+K handler.
- `src/components/SearchModal.tsx`: add a localized dialog name and Escape-key dismissal.
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
- The new search-shortcut browser test failed against the old header hint at run `41805363000` (`Expected: Ctrl/⌘ K`, `Received: /`), as expected.
- The privacy-page axe check then identified `label-content-name-mismatch` on the header search button at run `41805693075`; the accessible name was corrected to include the complete visible text. The search-dialog test now checks its localized name and Escape dismissal.
- Fix-branch CI run `41804912023` passed content validation, TypeScript, unit tests, and the production frontend/server build.
- On the later head, run `41805040247` completed validation, type-checking, unit tests, production build, and the Express health smoke-test step successfully; final job completion and browser workflow should still be checked before merge.
- CI on head `aafc573` passed content validation, TypeScript, unit tests, production client/server build, and the Express `/api/health` smoke test. The browser/accessibility workflow is still running.
- The Vercel check for the latest PR head is failing because the account hit its build-rate limit; this is an external preview-build blocker, not evidence of an application compile failure. No live preview for the latest head is available.
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

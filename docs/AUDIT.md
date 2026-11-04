# Mindcare Repository Audit

**Audit date:** 2026-10-24  
**Repository:** `gujarat-institute-mental-health/Mindcare`  
**Base commit audited:** `2a5f0e46c7d078b6030c62ff2a91ce9ca0318f91`  
**Audit branch:** `improve/audit`  
**Scope:** Source/configuration review through GitHub repository access, plus attempted production deployment/API access. This is not a full browser-based penetration, accessibility, or performance audit.

## Executive summary

The codebase has a meaningful trilingual education library and a CI build/content-validation workflow. The main risks are the mismatch between the Express API implementation and the current static SPA deployment configuration, fabricated analytics seed data, filesystem-based analytics persistence, process-local rate limits, and incomplete automated runtime testing.

The production deployment metadata was retrievable from Vercel and reports a READY production deployment built from the audited commit. However, attempts to fetch the production API endpoints through the available Vercel/web access were denied or unavailable, and direct network probing from this environment failed DNS resolution. Therefore, this audit does **not** claim to have verified the live API responses.

## P0/P1 findings (≤15 lines)

1. **P0 — API hosting mismatch:** `vercel.json:2-6` rewrites every path to `/index.html`; Express endpoints exist in `server.ts:172-288`, but no Vercel `/api` function files were found in the reviewed tree. Production API behavior remains unverified.
2. **P0 — Synthetic analytics:** `server.ts:87-145` and `server/apiPlugin.ts:25-82` generate a fictional 30-day history and traffic breakdown when no store exists.
3. **P0 — Non-durable storage:** `server.ts:67, 147-169` and `server/apiPlugin.ts:5, 85-116` use `.analytics-data.json` on the local filesystem.
4. **P0 — Admin production verification pending:** `server.ts:249-286` has server-side token validation, but deployed API rejection behavior and secret configuration could not be verified through current access.
5. **P1 — Port mismatch:** `server.ts:7, 380-385` hard-codes port 3000 despite README deployment guidance for `PORT`.
6. **P1 — Per-process rate limiting:** `server.ts:17-40` uses an in-memory Map, unsuitable as a shared limit across multiple serverless instances.
7. **P1 — Q&A safety tests missing:** `server.ts:288+` contains English/Hindi/Gujarati crisis matching and a Gemini system instruction, but CI has no API or adversarial prompt tests.
8. **P1 — Validation is narrower than the brief requires:** `scripts/validate-content.ts:10-117` checks selected localized fields; no test suite is configured for browser journeys, accessibility, or API behavior.
9. **P1 — Possible orphaned views:** `src/views/FAQView.tsx`, `GlossaryView.tsx`, and `AccessibilityView.tsx` exist in the repository tree but were not found as imports/routes in `src/App.tsx`.
10. **P1 — Bundle/performance unknown:** `src/App.tsx:32-49` lazy-loads views but imports condition/substance/topic data statically; no Lighthouse or bundle report was available in this audit environment.
11. **P1 — Content governance incomplete:** condition records have `lastReviewed` and references in `src/types/index.ts:47-92`, but reviewer fields are optional and the existing validator does not establish that references are current or independently verified.
12. **P1 — Deployment config ambiguity:** README documents Vercel, Netlify, GitHub Pages, and full-stack Docker, while their backend capabilities differ; no single production API contract is documented.
13. **P1 — Video PR #2 is open/stale:** compare its diff with current `main`; do not merge without review.
14. **Runtime verification gap:** screenshots, Playwright journeys, axe, Lighthouse, and live API JSON-vs-SPA probes could not be completed with the available tools/network access; treat them as unverified, not passed.

## Evidence and findings

### 1. Repository baseline and CI

- Latest audited commit: [`2a5f0e4`](https://github.com/gujarat-institute-mental-health/Mindcare/commit/2a5f0e46c7d078b6030c62ff2a91ce9ca0318f91).
- Vercel deployment metadata reports production target `READY`, project `mindcare`, framework `vite`, and Git commit `2a5f0e46c7d078b6030c62ff2a91ce9ca0318f91`.
- `.github/workflows/ci.yml:1-31` runs Node 22, installs dependencies, runs `npm run validate`, `npm run lint`, and `npm run build`.
- `package.json` declares `lint` as `tsc --noEmit`; it is type-checking, not ESLint.
- The package manifest includes React, TypeScript, Vite, React Router, Tailwind 4, Motion, Lucide, React Markdown, PWA tooling, Express, Google GenAI, and build tooling. The lockfile's resolved versions should be treated as authoritative.

### 2. API inventory

| Endpoint | Client call | Server implementation | Audit status |
|---|---|---|---|
| `GET /api/health` | No first-party client use identified in reviewed snippets | `server.ts:172-179`; `server/apiPlugin.ts:118-130` | Production probe unavailable |
| `POST /api/analytics/ping` | `src/utils/analytics.ts:72-102` | `server.ts:181+`; `server/apiPlugin.ts:132+` | Production probe unavailable |
| `GET /api/analytics/summary` | `src/utils/analytics.ts:164-188` (fetch helper) | `server.ts:249-286` | Production probe unavailable |
| `POST /api/qa` | `src/components/EducationalQAAssistant.tsx:124+` | `server.ts:288+`; corresponding Vite middleware later in `server/apiPlugin.ts` | Production probe unavailable |

**Deployment concern:** `vercel.json:2-6` defines a catch-all rewrite to `/index.html`. The reviewed configuration does not define Vercel Functions for these API endpoints. The Express server and Vite middleware exist, but their existence does not prove they run in the Vercel production deployment.

Attempts to retrieve `https://mindcare-five-delta.vercel.app/api/health` and `/api/analytics/summary` through the available Vercel URL fetcher returned a 403 access-denied error. A direct `curl` attempt could not resolve the host from this environment. Therefore, whether these endpoints return JSON or SPA HTML is **[UNVERIFIED]**.

### 3. Security and privacy

- Admin auth checks a server-side `ADMIN_PASSWORD` with a minimum length of 32 and bearer token validation in `server.ts` (admin endpoint begins at line 249; helper is earlier in the file).
- Rate limiting is process-local and keyed by request IP in `server.ts:17-40`; it is not a distributed limiter.
- The API accepts anonymous aggregate analytics events. The client respects `navigator.doNotTrack === '1'` in `src/utils/analytics.ts`, but no full consent/privacy behavior was tested.
- Q&A input is limited to 2,000 characters in `server.ts:288+`; the server contains a crisis short-circuit before model generation. Coverage for transliteration, colloquial expressions, false negatives, and prompt injection has not been tested.
- Secret rotation status cannot be inferred from source code. Do not expose or request the secret value; verify it in the hosting control panel and rotate any credential that appeared in Git history.

### 4. Routes and data

- Routes are defined in `src/App.tsx` starting at line 277. Conditions use `/:lang/conditions` and `/:lang/conditions/:slug`; child, women's, and substance detail paths also have slug routes.
- The three language codes are `en`, `hi`, and `gu`.
- `src/types/index.ts:47-92` defines the main `Condition` model, localized fields, references, review date/status, related IDs, and optional video IDs.
- `src/data/conditionEvidenceGuides.ts:10-26` defines evidence-guide types and a keyed guide collection.
- The current validator imports condition, substance, treatment, symptom, article, glossary, myth, and FAQ datasets. It checks selected localized fields but does not by itself prove source currency, all related IDs, or all external URLs are valid.
- FAQ/glossary/accessibility view components are present, but were not found as route imports in `src/App.tsx` (no exact import match). Confirm navigation intent before removing or exposing them.

### 5. Performance, accessibility, and visual baseline

- `src/App.tsx:32-49` lazy-loads many views, but also statically imports data needed for deep-link lookups.
- `vite.config.ts:74+` defines manual vendor chunks; no measured bundle sizes or Lighthouse scores were available.
- PWA configuration is in `vite.config.ts`; the service worker includes configured assets and a 5 MB maximum precache-file size. Actual offline crisis behavior was not tested.
- No Playwright, axe, or Lighthouse run was possible from the available environment. No before screenshots were captured. Mobile layout, keyboard flows, modal focus behavior, contrast, font rendering, reduced motion, and offline crisis access remain **[UNVERIFIED]**.

### 6. Clinical content and video governance

- Main condition schema and localized content live in `src/data/conditions.ts` and imported batches, with evidence guides in `src/data/conditionEvidenceGuides.ts`.
- The guide schema includes localized title/introduction/findings/limitations and source links. It does not currently encode GRADE level, effect estimates, guideline recommendation strength, or verified-on/retraction-check metadata.
- `VIDEO_TODO.md` identifies integrated videos and pending topics. PR #2 is open according to current GitHub PR search; review its changes against `main` rather than merging blindly.
- No new clinical claims were added during this audit. Any future clinical additions require source retrieval, source opening, and clinical review before merge.

## Prioritized backlog

| Item | Evidence | Severity | Effort | Suggested phase |
|---|---|---:|---:|---|
| Confirm and repair production API routing | `vercel.json:2-6`, API routes in `server.ts` | P0 | M-L | Phase 2 |
| Remove fictional analytics seed data | `server.ts:87-145`; `server/apiPlugin.ts:25-82` | P0 | S | Phase 2 |
| Replace filesystem analytics with durable store or explicitly disable server analytics | `server.ts:67,147-169` | P0 | M | Phase 2 |
| Verify/rotate admin secret and test deployed rejection | `server.ts` admin auth | P0 | M | Phase 2 |
| Honor `PORT`; align env docs | `server.ts:7,380-385`; README | P1 | S | Phase 2 |
| Shared rate limits and Q&A adversarial tests | `server.ts:17-40,288+` | P1 | M | Phase 2 |
| Add browser, API, accessibility and visual regression tests | `package.json`, CI workflow | P1 | M-L | Phase 7 |
| Capture mobile/desktop before screenshots and Lighthouse baseline | Tool access gap | P1 | M | Phase 1 follow-up |
| Complete route/orphan view review | `src/App.tsx:277+`; `src/views/*` | P1 | S-M | Phase 6 |
| Build condition/reference/reviewer coverage report | `src/types/index.ts:47-92`; validator | P1 | M | Phase 5 |
| Measure and reduce initial data bundle | `src/App.tsx`, `vite.config.ts` | P1 | M-L | Phase 4 |
| Reconcile video PR #2 with current main | PR #2 | P1 | S-M | Phase 6 |
| Design token and responsive visual overhaul | Current UI + missing visual baseline | P2 | L | Phase 3 |
| Add deeper source-reviewed condition guides one PR at a time | Evidence guide schema | P2 | L | Phase 5 |

## What was not completed in this audit

- No local checkout or build/test execution was available through the connected GitHub tools.
- No screenshots were captured.
- No Playwright, axe, or Lighthouse results were produced.
- No live API JSON-vs-SPA result was observed.
- No external clinical sources were retrieved/opened for new content because this phase added no clinical claims.
- No claim is made that the complete site is WCAG 2.2 AA compliant or meets the target Lighthouse scores.

These limitations are explicit to avoid confusing source review with runtime verification.


## Phase 3 UI baseline update — 2026-10-24

- Added Calm Aurora shared design tokens and restrained CSS-only ambient background in `src/index.css`.
- Applied the new hero identity class to the home page and documented token intent/accessibility in `docs/DESIGN_SYSTEM.md`.
- Replaced the home-page author badge's unsupported “MBBS, MD Psychiatry · NMC Registered” claim with “Psychiatry resident · Public education” (localized in English, Hindi, and Gujarati).
- Source-level review only at this point. No screenshots, axe scan, Lighthouse run, or live preview interaction is claimed until CI/preview/browser evidence is available.


## Phase 3 visual redesign update — 2026-10-24

The Calm Aurora styling pass was merged from PR #15 (`improve/phase-3-visual-redesign`). It applies shared tokens and restrained responsive styles to the header, crisis strip, home hero support panels, library tiles, condition listing cards, condition/substance detail shells, and footer notice. It also removes the unsupported “NMC Registered Specialist” badge wording in favor of a public-education descriptor.

This is a source-level change, not proof of visual acceptance. Screenshots at 360/390/768/1280/1536 px, English/Hindi/Gujarati font rendering, light/dark system behavior, reduced-motion behavior, keyboard checks, axe, and Lighthouse remain **[UNVERIFIED]** until executed against a deployed preview. No performance score or visual regression pass is claimed here.


## Phase 3 follow-up — 2026-10-24

- Follow-up polish merged from PR #16 (`improve/phase-3-accessibility-polish`): mark the active navigation item with `aria-current`, connect the mobile-menu trigger to its controlled navigation panel, and expose selected language buttons with `aria-pressed`.
- Removed a persistent pulse animation from the footer crisis icon to keep urgent content calm and reduce unnecessary motion.
- Corrected footer profile wording to a localized “Psychiatry resident · Public education” descriptor and removed the unsupported NMC-registration claim.
- Replaced the absolute “zero visitor data collection / strictly confidential” statement with a more qualified, trilingual privacy note that warns users not to enter identifying details into Q&A. This is copy-level risk reduction, not a substitute for a full privacy-policy and data-flow review.
- Source-level review only; browser/axe/mobile keyboard verification remains **[UNVERIFIED]** until a preview can be interacted with using suitable tooling.


## Phase 4 baseline and first optimization — 2026-10-24

- Recorded CI build baseline from Phase 2: Vite reported a main JavaScript chunk around 3.43 MB uncompressed / 959 KB gzip, with a chunk-size warning above 600 kB. This is build output, not a Lighthouse measurement.
- Merged in PR #17 (`improve/phase-4-defer-content-data`): remove four eager dataset imports from the application entry and load the matching content module asynchronously only when a condition, child-psychiatry, women's mental-health, or substance detail slug exists.
- This is a candidate bundle-splitting optimization. Actual before/after chunk sizes, deep-link loading behavior, and route regression checks must be confirmed from CI and preview before acceptance.
- No Lighthouse or runtime performance score is claimed.

- Follow-up within the same Phase 4 PR: seven global dialog components are now lazy-loaded and mounted only when opened or when a valid detail record is resolved. This is intended to keep search/screener/crisis/detail-modal implementation and SearchModal's data dependencies out of the initial entry path; confirm the actual chunk output in CI.


### Phase 4 CI bundle output — 2026-10-24

- The CI build for the on-demand dialog/data split no longer emits the previous single 3,437.90 kB `index` chunk. It emitted three `index-*` chunks at 421.62 kB, 432.33 kB, and 477.01 kB, plus a separate 1,304.25 kB `conditions-*` chunk (372.64 kB gzip). Other dialog components, including CrisisModal and ScreenerModal, are emitted as their own chunks.
- This confirms chunk splitting in the build output; it does **not** establish total initial transfer size, route-level download behavior, Lighthouse performance, or real-user LCP/INP. The `conditions` chunk still exceeds the 600 kB warning threshold and remains a follow-up optimization target.


## Phase 4 follow-up — lightweight home-page spotlights — 2026-10-24

- The home view previously imported the full 531 KB source file `src/data/conditions.ts` solely to provide four featured cards to `ConditionSpotlight`; CI emitted a 1,304.25 kB minified `conditions-*` chunk.
- Merged in PR #18: added a compact localized `src/data/conditionSpotlight.ts` with only four cards' IDs, slugs, categories, names, and short generic summaries. The full clinical dataset remains owned by the conditions library/detail flow.
- Corrected the spotlight ADHD identifier from `adhd_adult` to the existing data ID `adhd` and aligned its slug with the record in `newConditions.ts`.
- This should keep the large conditions dataset off the home route's import graph. Confirm emitted chunks and preview behavior in CI; no Lighthouse or runtime route test is claimed.


## Repository state sync — 2026-10-24

- Updated the audit's phase 3/4 notes to distinguish merged changes from outstanding runtime verification. PRs #15–#18 are merged; browser interaction and Lighthouse results remain unverified.
- Phase 2 code was merged in PR #13, but production acceptance is still blocked on server-side environment configuration and live API/Redis verification.


## Phase 4 follow-up — condition library index isolation (PR pending)

- The full condition dataset remains a separate 1,304.25 kB minified chunk (372.64 kB gzip) in the prior CI build. The Conditions library imported it for card rendering and search, so visiting the library required the full data chunk.
- The current branch generates `public/data/conditions-index.json` with compact localized card metadata and searchable overview/symptom text. The view fetches this index, leaving long-form condition detail content to the existing detail/deep-link path.
- CI run #97 passed validation, TypeScript, API tests, and production build. It measured the generated index at 276,772 bytes (57,282 bytes gzip); the separate condition detail chunk remains 1,304.25 kB (372.64 kB gzip) in build output but is no longer statically imported by the Conditions view. This confirms the source/build structure, not route network transfer. Preview, offline, Lighthouse, and runtime checks remain pending.


## Preview HTTP verification — Phase 4 (deployment built from commit b867041)

- `/data/conditions-index.json` returned HTTP 200 with `application/json`, 23 records, localized `en`/`hi`/`gu` names, searchable text, and no long illustrative-vignette field.
- A direct condition deep-link URL returned HTTP 200 with the SPA HTML shell. This verifies the rewrite response only, not client-side rendering or route navigation.
- `/sw.js` returned HTTP 200 and its content includes `conditions-index.json`, confirming the index is in the generated service-worker precache manifest.
- The HTML entry preloads React/UI vendor chunks but does not preload the condition data chunk. This is consistent with the intended route-level separation; it is not a browser network trace.
- Manual browser rendering, language interaction, offline-mode behavior, Lighthouse, and axe remain unverified.


## New P0 runtime finding — preview API probes (2026-10-24)

- On the READY preview deployment `mindcare-kbn00t1di-gujarat-institute-mental-healths-projects.vercel.app`, `GET /api/health` returned HTTP 200 JSON.
- `GET /api/analytics/summary`, `GET /api/analytics/ping`, and `GET /api/qa` returned HTTP 500 with Vercel `FUNCTION_INVOCATION_FAILED` plain-text responses, rather than the handlers' expected JSON status responses. These are not accepted as passing API checks.
- The Vercel project environment listing (without decrypting values) contains only `GEMINI_API_KEY` and `APP_URL`; no preview-branch variables are configured, and `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, and `ADMIN_PASSWORD` are absent from the listed project environment.
- Runtime error/log access returned HTTP 403 through the connected Vercel integration, so the function invocation root cause is not verified. Do not guess at a code fix or claim Phase 2 production acceptance. Next: restore authorized runtime-log access, diagnose the shared-helper invocation failure, provision the required server-side configuration without sharing secrets in chat, and retest JSON/status behavior.

## Phase 4 build-level PWA checks — 2026-10-24

- Added a production-build assertion for route-specific Markdown preload boundaries, the generated trilingual condition index, and crisis/emergency assets in the service-worker precache manifest.
- This turns source/build assumptions into CI checks; it is not a browser offline simulation, visual check, or Lighthouse measurement.
- CI results are pending for this branch.

## Profile and structured-data trust correction — 2026-10-24

- Preview HTML inspection revealed structured data labeling the author “Consultant Psychiatrist” and listing “DNB Psychiatry, MBBS” as completed qualifications. The About page also asserted NMC/GMC registration and NMC compliance without verification evidence in this repository.
- The profile is now described as a DNB Psychiatry resident; unverified registration/compliance claims are removed, and the educational-only scope is explicit in localized copy and metadata.
- CI and preview verification are pending on this branch. No conclusion is made about the author's registration status; any public registration details should be owner-verified.

## Phase 5 content coverage — 2026-10-24

- Added evidence-guide coverage for the ten existing conditions that previously lacked a dedicated guide, completing the 23-condition guide map.
- Added `docs/CONTENT_REVIEW.md` and `docs/CHANGELOG-content.md`, plus a test that checks condition coverage, trilingual fields, HTTPS source URLs, and source metadata.
- Public guidance and source pages were checked during authoring. No independent clinician sign-off or browser-level review of rendered evidence cards is claimed; the review register lists these as pending.

## Phase 6 video curation — 2026-10-24

- Added source-attributed video metadata and rendering for condition and substance detail views, plus an ID-format guard for embeds.
- Added coverage for OCD/ERP, alcohol use disorder, and opioid use disorder, while retaining existing NIMH/NAMI educational videos.
- Added `docs/VIDEO_REVIEW.md` and automated source/ID metadata checks. Runtime playback, captions, regional availability, and independent clinical review remain unverified.


## Phase 7 — privacy, terms, and responsible disclosure foundation (PR pending, 2026-10-24)

- Added localized `/:lang/privacy` and `/:lang/terms` routes in a lazy-loaded view, with English, Hindi, and Gujarati copy. The pages are explicitly marked as drafts pending owner and legal review; they describe local storage, aggregate analytics, Q&A data flow, AI-processing possibility, and limitations without promising confidentiality or zero collection.
- Added footer links to both pages and removed the unverified claim that the site complies with National Medical Commission medical ethics regulations. The footer now uses an educational-scope statement.
- Added root `SECURITY.md` with responsible disclosure guidance and `docs/LEGAL_REVIEW.md` / `docs/LICENSE_DECISION.md` to record unresolved owner decisions.
- These changes are source-level only until CI and a deployed preview are checked. No legal approval, independent translation review, production data-flow verification, or runtime accessibility pass is claimed.
- Remaining owner blockers: publish a privacy/security contact channel; confirm analytics/Redis/AI-provider retention and region; select code/content licences; obtain legal and fluent clinical-language review. Phase 2 production acceptance remains blocked until required server-side configuration and live API/storage checks are verified.


### Phase 7 browser/axe follow-up — 2026-10-24

- Added a Chromium workflow that tests the built application locally in CI, covering privacy routes in all three languages, terms navigation, and horizontal overflow at 360/390/768/1280/1536 px. The initial run passed all six tests.
- The first axe scan found two serious categories: insufficient contrast on selected language buttons and visible-label/accessibility-name mismatches on the search and floating emergency buttons. Those source issues have been corrected by darkening selected language controls and including visible text in accessible names.
- The axe gate now fails on serious or critical WCAG 2.0/2.1 A/AA findings. Re-run CI after these fixes before accepting this follow-up.
- The initial scan was limited to the English privacy route and does not establish full-site conformance; live Vercel, screen-reader, offline, and Lighthouse checks remain separate.


### Home-page profile card trust follow-up — 2026-10-24

- The home-page author card still contained legacy “Consultant Psychiatrist”, completed-qualification, and NMC-registration claims after the broader About-page/structured-data correction.
- The card now identifies the author as a DNB Psychiatry resident and describes Mindcare as general public mental-health education; it explicitly says the site does not provide personal diagnoses, consultations, or prescriptions.
- A source-level regression test guards against reintroducing those unverified claims. This is a content/source check, not independent credential verification or a browser-rendering check.


### Self-assessment interaction fix — 2026-10-25

- Fixed the Interactive page so each assessment card passes its own tool ID to the screener modal; previously every card opened the default PHQ-9, making the selected tool appear unresponsive or incorrect.
- Score totals and displayed maximums now derive from the active tool's questions and answer options, rather than assuming every tool uses a 0–3 scale. Safety guidance now follows each question's explicit crisis marker instead of a PHQ-9-only hard-coded question ID.
- Added a Playwright regression test for opening GAD-7 from its own card. CI results are pending; no production behavior is claimed until checks and preview are reviewed.
- Clinical limitation: these interaction fixes do not validate the clinical scoring/translation/licensing of every listed instrument. That review remains separate and required before describing all tools as validated.

## Calm & Compassionate theme implementation — 2026-10-25

- Added a sage, warm-ivory, and forest-green visual layer to `src/index.css`, reusing the existing shared design classes and preserving the mobile safe-area, reduced-motion, and crisis-strip rules.
- Updated the header accent from teal/gold/purple to forest/sand/sage so the brand accent aligns with the selected theme.
- This is a source-level styling change only. Build, type-check, browser screenshots, mobile widths, contrast, and trilingual font rendering must be verified in CI/preview before merge. Crisis messaging remains visually distinct.



## 2026-11-04 — Condition content quality audit update

**Repository:** `Raghavsuthar/guarat-institue-of-mental-health`  
**Base commit:** `48f5a73c67f0053548ed664944f4ec89e964d12c`  
**Working branch:** `improve/clinical-content-quality-phase1`

- Static inventory confirms 23 main condition records and 23 matching evidence-guide keys.
- Existing validation checks selected localized fields for presence, not semantic translation parity or claim-level clinical correctness.
- Targeted editorial corrections are being made in 17 condition records; the full inventory and the six records without targeted copy edits are documented in `docs/CONDITION_CONTENT_AUDIT_2026-11.md`.
- Added a regression test for high-risk cure/response guarantees, deterministic genetic language, inevitable-relapse claims, diagnostic-tool accuracy claims, and blanket breastfeeding-safety wording.
- The new test was observed failing on the original content for ten pattern groups and passed after correction. On PR head `714c196`, CI passed content validation, TypeScript/lint, API safety tests, and production build (run `41775294157`); browser smoke, responsive, and axe checks also passed (run `41775294207`).
- Current sources opened for the targeted corrections include WHO depression/mhGAP, NICE bipolar/eating disorders/ADHD/autism/social anxiety/OCD-BDD guidance, ACOG perinatal guidelines, and NHS phobia guidance.
- This is not a full clinical review, independent psychiatrist sign-off, fluent translation review, external-link crawl, or live deployment verification.


## 2026-11-04 — Website runtime and deployment audit

- See `docs/WEBSITE_RUNTIME_AUDIT_2026-11.md` for the complete scope, evidence, fixes, and release gates.
- Three defects were reproduced: missing Express production bundle in the build pipeline, Gemini client/model configuration mismatch across backend runtimes, and a false-negative mobile screener E2E regex.
- Fixes are isolated in `fix/website-runtime-bugs-2026-11` / PR #8. CI on the pre-cleanup head passed build and unit checks; final-head workflows are pending verification.
- No live deployment or provider credentials were accessed. Gemini/Upstash production integration, Docker startup, full route matrix, and PWA/offline behavior remain unverified.


- Runtime audit follow-up: crisis detection now includes common high-signal English expressions; the local `.env` bootstrap was corrected for Vite and Express; CI now starts the built Express server and checks `/api/health`. See `docs/WEBSITE_RUNTIME_AUDIT_2026-11.md` and PR #8.

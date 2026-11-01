# Architecture Decisions

## 2026-10-24 — Production API runtime and analytics storage

**Implementation status:** Merged in PR #13. **Production acceptance status:** still pending until environment configuration and live API/storage checks are verified.

### Decision

- Keep the Vite-built React SPA on Vercel.
- Implement production endpoints as Vercel Functions under the root `api/` directory.
- Keep `server.ts` as the Express entry point for Docker/self-host deployments.
- Use Upstash Redis REST as the durable aggregate analytics store and shared rate-limit store for both API runtimes.
- Share validation, crisis detection, token verification, rate limiting, and analytics storage helpers from `server/shared/analytics.ts`.
- Exclude `/api/*` from the SPA fallback rewrite.
- If Upstash configuration is missing or storage is unavailable, API handlers return an explicit error instead of reporting fake analytics or silently treating HTML as JSON.

### Rationale

The current Vercel project is configured as a Vite SPA and does not automatically run the Express server. Vercel Functions fit the existing hosting model; Upstash Redis REST avoids adding a database SDK and supports serverless use. Keeping Express preserves the self-host/Docker option.

### Required server-side environment

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `ADMIN_PASSWORD` (unique, at least 32 characters)
- `GEMINI_API_KEY` (optional; the Q&A endpoint has a non-personalized educational fallback)
- `RATE_LIMIT_SALT` (recommended; used to hash transient rate-limit identifiers)

Never add these values to source control or prefix them with `VITE_`.

### Data and privacy

- Analytics values are aggregate counters only.
- No raw IP address or user query is written to the analytics store.
- Rate-limit identifiers are hashed before being used as temporary Redis keys; the keys expire.
- Daily analytics buckets expire after 90 days.
- The app does not claim that analytics are durable until the required Redis environment is configured and a production write/read test passes.

### Consequences and follow-up

- Local Vite development keeps a separate development-only analytics file, initialized at zero.
- Self-hosted Express deployments require the same Upstash credentials for analytics and shared rate limits.
- A missing Redis configuration intentionally makes analytics endpoints return HTTP 503.
- Verify live `/api/health`, `/api/analytics/ping`, `/api/analytics/summary`, and `/api/qa` after deployment.
- Confirm the selected Upstash database's retention, access control, and billing settings in the owner account.
- This PR does not provision an Upstash database or set production secrets.


## 2026-10-24 — Dependency audit and build baseline

**Status:** Findings confirmed by GitHub Actions CI run #72; remediation not yet applied.

The report-only `npm audit` step found **10 advisories** in the installed dependency graph: 1 critical, 5 high, 3 moderate, and 1 low. npm reports compatible fixes available for the listed packages.

| Package | Severity | Finding / note |
|---|---|---|
| `proxy-addr` | Critical | IP spoofing through IPv4-mapped IPv6 trusted subnet handling; GHSA-jqcg-44mw-7w3h |
| `body-parser` | High | Denial of service with trailing bytes after a compressed request body; GHSA-27r3-jxmh-p828 |
| `brace-expansion` | High | Multiple CPU/stack exhaustion advisories; GHSA-q2hr-2g5m-vwhr, GHSA-qhr7-859c-m2p7, GHSA-6j4f-fj2g-mc7p |
| `vite` | High | Multiple advisories affecting versions up to 6.4.3; includes custom middleware cross-origin script execution and path access issues |
| `sharp` | High | librsvg dependency vulnerability CVE-2026-96889; GHSA-wq5f-xc86-pv6w |
| `source-map-js` | High | Event-loop denial of service via indexed source-map offsets; GHSA-68fv-2mgg-jv7q |
| `fast-uri` | Moderate | Multiple URI normalization / scheme / host confusion advisories |
| `qs` | Moderate | Array-limit bypass and denial of service advisories |
| `express` | Moderate | Inherits the `qs` advisory in the installed dependency graph |
| `serialize-javascript` | Low | Script-termination/XSS serialization advisories |

**Decision:** Do not run `npm audit fix --force` or blindly upgrade major versions. Prepare a dedicated dependency-remediation PR using compatible fixes, then run content validation, typecheck, unit tests, production build, and a fresh `npm audit`. Review whether the Vite advisories affect production-only deployment or development tooling separately; do not dismiss them solely because some apply to the dev server.

**Build baseline:** CI run #72 passed content validation, TypeScript checks, API safety tests, and production build. Vite reported a main JS chunk of approximately 3.43 MB uncompressed / 959 KB gzip, plus a warning that a chunk exceeds 600 kB. This is a Phase 4 performance target, not a failed build.


## 2026-10-24 — Phase 3 Calm Aurora visual system

**Status:** Merged in PR #15. Visual/browser acceptance remains unverified because no interactive preview review was available.

### Decision
- Extend the existing Calm Aurora tokens instead of introducing a second CSS framework, remote fonts, or new image dependencies.
- Apply the shared visual language to the sticky header/crisis strip, home storytelling and library tiles, condition listing cards, condition/substance detail shells, and footer notice.
- Replace the unsupported “NMC Registered Specialist” badge with a descriptive public-education label; this is not a credential claim.
- Keep crisis access links visible and preserve their phone targets; reduce persistent pulsing decoration to avoid unnecessary motion.
- Use CSS-only decoration, transform/opacity transitions, and reduced-motion overrides to avoid added network requests and layout shifts.

### Verification limits
- CI is the source of truth for TypeScript, content validation, unit tests, and production build.
- No browser screenshots, cross-width visual comparison, axe scan, or Lighthouse measurement is claimed until those tools actually run against the preview.
- Manual clinical review of the copy and verification of all displayed helplines remain separate sign-off items.


## 2026-10-24 — Phase 3 accessibility and trust-copy follow-up

**Status:** Merged in PR #16. Browser keyboard/screen-reader verification remains pending.

- Add programmatic state to language controls and active navigation, and link the mobile menu button to its panel for assistive technology.
- Remove persistent footer crisis-icon pulsing; crisis information should be prominent without a perpetual animation.
- Avoid unsupported professional-registration claims in the footer. Use the descriptive, localized public-education role instead.
- Avoid absolute privacy guarantees that conflict with aggregate analytics. Tell visitors that aggregate page-view analytics may be sent when enabled and not to submit identifying details to the Q&A tool.
- These source changes do not establish runtime accessibility, analytics behavior, or legal privacy-policy compliance; verify separately.


## 2026-10-24 — Phase 4 lazy deep-link dataset loading

**Status:** Merged in PR #17. Runtime route checks and Lighthouse measurement remain pending.

- Keep route components and their current schemas unchanged.
- Remove eager dataset imports from `src/App.tsx`; load the relevant content module only when its URL contains a detail slug. Cancel stale effect results when the slug changes and fail closed to a null detail if the module fails to load.
- Rationale: the entry module should not force all deep-link data collections into the initial chunk merely to resolve an optional modal.
- Acceptance requires successful type-check/build, inspection of emitted chunk sizes, and direct-link checks for condition, child topic, women's topic, and substance routes. Performance targets must be measured separately with Lighthouse; this code change alone does not establish them.

- Extend the split to global dialogs: load Search, Crisis, Screener, and detail-dialog components on demand, wrapped in `Suspense` with a null fallback. Render them only when requested or when the corresponding deep-linked record exists. Preserve crisis state handoff from screener/detail dialogs.


### CI evidence update

The Phase 4 build confirms code splitting: the previous 3,437.90 kB `index` chunk is replaced by `index-*` chunks of 421.62 kB, 432.33 kB, and 477.01 kB, while the condition collection is emitted as a separate 1,304.25 kB chunk (372.64 kB gzip). Crisis and screener dialogs are separate chunks. Do not describe this as a Lighthouse improvement or a verified reduction in initial network transfer until browser/network measurements are available. The remaining large conditions chunk should be considered for batch-level splitting.


## 2026-10-24 — Keep home spotlights independent from the full condition library

**Status:** Merged in PR #18. Confirm spotlight rendering and detail-link behavior in the preview.

- Use a small presentation-only localized dataset for the four home spotlight cards instead of importing all of `src/data/conditions.ts` into `HomeView`.
- Keep summaries generic and non-clinical; the condition library remains the source for full educational content. The spotlight click only requires the matching slug to navigate to the detail route.
- Correct the stale ADHD spotlight ID to `adhd`, matching the existing condition record.
- Acceptance requires TypeScript/build success and inspection of emitted chunks. Confirm that home spotlights render and that all four links resolve in the preview before considering the optimization complete.


## Status reconciliation — 2026-10-24

Implementation PRs #13 (API hardening), #15–#16 (visual/accessibility polish), and #17–#18 (bundle splitting/home spotlight isolation) are merged. Merge status does not equal production acceptance: Phase 2 still needs environment setup and live API/storage tests; Phase 3 still needs browser accessibility/visual review; Phase 4 still needs runtime route checks, Lighthouse measurement, and further review of the remaining large conditions chunk.


## 2026-10-24 — Serve a compact condition-library index

**Status:** Implemented on `improve/phase-4-performance-pwa`; CI run #97 passed. Preview acceptance is pending.

- The Conditions library now fetches a generated JSON index rather than importing the full condition dataset for its card list.
- `scripts/generate-condition-index.ts` derives localized card fields and full overview/symptom search text from the canonical `conditionsData`. The build and `predev` hook generate the file so the development server and production build use the same schema.
- The index keeps only short display excerpts, a compact evidence highlight, and the search corpus. Long illustrative vignettes, treatment plans, FAQs, and other detail fields remain in the full condition dataset.
- This is a source-level payload reduction strategy, not yet a measured Lighthouse improvement. CI must confirm that the generator and type-check/build succeed; preview testing must confirm category counts, search, language rendering, and deep links.


## 2026-10-24 — Phase 4 preview HTTP checks

**Status:** HTTP-level checks passed on the READY preview deployment built from commit `b867041`; browser acceptance remains pending.

- The generated index endpoint returned JSON 200 with 23 trilingual records and omitted long-form vignette fields.
- A direct condition deep link returned the SPA shell with 200.
- The generated service worker includes the condition index in its precache manifest, and the initial HTML does not preload the condition data chunk.
- These checks confirm deployment assets and HTTP responses, not client-side rendering, search interaction, offline operation, or Lighthouse metrics.


## 2026-10-24 — Phase 2 preview API failure re-observed

**Status:** Open P0 blocker; runtime cause not diagnosed.

- The current preview returns HTTP 200 JSON for `/api/health`, but HTTP 500 `FUNCTION_INVOCATION_FAILED` plain text for GET requests to `/api/analytics/summary`, `/api/analytics/ping`, and `/api/qa`.
- The project environment listing shows only `GEMINI_API_KEY` and `APP_URL`; Redis REST credentials and the admin password are not configured. However, the observed generic invocation failures are not the intended JSON 503 response, so missing configuration alone is not assumed to be the complete cause.
- Runtime logs could not be read because the Vercel integration returned 403. Keep this unresolved until logs are accessible and the routes return documented JSON responses. Never paste secret values into chat or source control.


## 2026-10-24 — Avoid forcing Markdown into an eagerly preloaded vendor chunk

**Status:** Corrected on `improve/phase-4-vendor-chunks` after preview HTML inspection.

- The prior build grouped `lucide-react`, `motion`, and `react-markdown` into `vendor-ui` (254.36 kB minified / 76.94 kB gzip).
- A first attempt to split all three packages emitted `vendor-markdown` at 119.02 kB minified / 36.85 kB gzip, but the deployed preview HTML still contained a `modulepreload` for that chunk. This means the attempted split did **not** keep Markdown off the initial preload graph.
- Removed the forced `vendor-markdown` manual chunk and let Rollup retain route-specific dynamic-import boundaries. Keep separate icon and Motion chunks only if CI/preview output confirms they are useful.
- Acceptance requires a new CI build and preview HTML check confirming that no Markdown-specific chunk is preloaded on the home route. No Lighthouse or real network savings are claimed.

## 2026-10-24 — Make PWA payload boundaries a build invariant

**Status:** Implemented on `improve/phase-4-pwa-build-verification`; CI pending.

- Preview inspection showed that a forced manual Markdown chunk could appear in the home page's module-preload list even though the Articles route was lazy. The build now checks that the generated HTML keeps article/Markdown code out of the initial preload list.
- Validate that the compact condition index is non-empty, has localized names and search text, and is included in the service-worker precache manifest.
- Verify that crisis and emergency code/content chunks are emitted and represented in the precache manifest, supporting—but not proving—offline availability.
- These checks are artifact-level safeguards. They do not replace browser offline tests, keyboard/axe checks, or Lighthouse measurement.

## 2026-10-24 — Correct public author profile claims

**Status:** Implemented on `improve/profile-accuracy-final`; CI pending.

- Preview HTML exposed JSON-LD describing the author as a “Consultant Psychiatrist” and listing DNB Psychiatry as completed, while project context identifies the author as a DNB Psychiatry resident.
- The About page asserted NMC/GMC registration and NMC-compliance claims without verification evidence in the repository. The updated profile uses the resident role and clear educational-only scope.
- Package description and structured metadata no longer imply that the DNB qualification is completed.
- This is a factuality/trust correction. It does not verify the author's registration status or provide clinical/legal certification.

## 2026-10-24 — Add evidence summaries for remaining condition guides

**Status:** Implemented on `improve/phase-5-evidence-guides-final`; CI pending.

- Added public-facing English/Hindi/Gujarati evidence summaries for social anxiety, specific phobia, insomnia, somatic symptom disorder, illness anxiety, persistent depressive disorder, PMDD, personality disorders, postpartum depression/anxiety, and BDD.
- Each summary includes source metadata, limitations, and non-diagnostic language. The personality-disorder summary explicitly limits the cited NICE CG78 recommendations to borderline personality disorder.
- Added content-review and changelog records plus automated coverage/localization/source-metadata checks.
- Automated validation cannot replace clinician sign-off, expert translation review, or browser verification.

## 2026-10-24 — Attribute and validate educational videos

**Status:** Implemented on `improve/phase-6-verified-videos`; CI pending.

- Use the existing privacy-enhanced click-to-play player; validate the YouTube ID before rendering and show the educational title and source.
- Add curated videos for OCD/ERP, alcohol use disorder, and opioid use disorder, retaining existing NIMH/NAMI selections for other priority topics.
- Document English-only limitations and review requirements. Automated checks validate syntax and attribution, not playback or the clinical content of a video.


## 2026-10-24 — Phase 7 privacy/terms draft and disclosure policy

**Status:** Implemented on `improve/phase-7-privacy-security`; awaiting CI and preview checks.

- Add English, Hindi, and Gujarati privacy notice and terms pages at language-prefixed routes. Both pages prominently state that they are drafts pending owner/legal review.
- Describe local language preference/local analytics storage and the analytics event categories visible in the client code. Explain that Q&A messages are sent to the site API and may be forwarded to a configured AI provider; instruct visitors not to submit identifying or sensitive health information.
- Avoid a blanket claim that the site is confidential, stores no data, is legally compliant, or has verified retention settings.
- Remove the unverified footer statement asserting NMC medical-ethics compliance. Link the privacy and terms pages from the footer.
- Add `SECURITY.md` and an owner review checklist. Do not add a repository-wide licence until the owner confirms rights and desired reuse for code, authored content, translations, images, videos, and screening instruments.

**Acceptance limits:** No legal sign-off or independent translation review is claimed. Production data flows, AI-provider retention, Redis region/retention, contact channel, applicable law, and license choices remain owner-verification items. Runtime route rendering, keyboard navigation, axe, and mobile layout require preview/browser checks.


## 2026-10-24 — Remove stale credentials from home-page profile card

**Status:** Implemented on `improve/phase-3-profile-card-copy`; CI/preview verification pending.

- Ruling: use “DNB Psychiatry resident” and public-education-only language in the home card — the repository's current profile correction identifies the author as a resident, while the previous card still asserted consultant status and registration without supporting evidence — cost if wrong: the card may be less specific than the owner wishes, but it avoids publishing unsupported credentials.
- Keep the home card visually aligned with Calm Aurora through the existing `aurora-story-panel` surface instead of adding another component or dependency.
- Add a source-level regression test for the stale credential wording. It does not establish registration status, clinical credentialing, or browser-level appearance.

## 2026-10-25 — Calm & Compassionate visual direction

- Decision: use warm ivory surfaces, sage-green accents, forest-green primary actions, readable dark-green text, and restrained sand-gold accents for Mindcare's shared visual language.
- Rationale: the site is public-facing mental-health education; the interface should feel calm and approachable without weakening clinical clarity or emergency visibility.
- Scope: CSS design layer and header accent only in this change. No clinical content, screening behavior, language routes, API behavior, or data handling is intentionally changed.
- Verification: pending CI and preview review; do not describe this as production-applied until the PR is merged and deployed.

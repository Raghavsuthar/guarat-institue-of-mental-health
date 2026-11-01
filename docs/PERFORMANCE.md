# Performance and PWA verification log

**Last updated:** 2026-10-24  
**Scope:** Build-artifact analysis and source-level optimization. No browser runner or production network access was available during this pass.

## Known measurements from CI artifacts

- Historical pre-splitting report: main JavaScript chunk approximately **3.43 MB uncompressed / 959 KB gzip**. This is a build artifact metric, not an initial-transfer or Lighthouse measurement.
- After the first split, CI emitted a small `index` chunk (7.90 kB), three `index-*` chunks (421.62 kB, 432.33 kB, and 477.01 kB), and a separate `conditions-*` chunk (1,304.25 kB, 372.64 kB gzip).
- The large condition chunk should only be needed for full condition data/detail flows. Before this change, the Conditions library imported the full dataset directly to render cards and search.
- CI run #97 measured the generated index at **276,772 bytes (57,282 bytes gzip)**. The separate condition detail chunk remains **1,304.25 kB (372.64 kB gzip)** in the build output, but the Conditions view no longer statically imports that module. Browser network traces are still needed to confirm the actual route transfer.

## Phase 4 implementation

- Generate `public/data/conditions-index.json` from the canonical condition records at build time and before `npm run dev`.
- The index includes localized card metadata, short overview excerpts, a small symptom list, one compact evidence highlight, and a full-text search string built from overview and symptom text.
- `ConditionsView` fetches the index as JSON instead of importing `src/data/conditions.ts`. Full detail records remain in the canonical dataset and are loaded by the existing deep-link detail flow.
- The index intentionally excludes long illustrative vignettes, treatment detail, FAQs, and other non-card content.

## Acceptance checks

- CI must pass `npm run validate`, `npm run lint`, `npm test`, and `npm run build`.
- Inspect CI build output and artifact sizes after the change; record actual generated index size and the condition detail chunk size.
- Preview-check category counts, localized card rendering, search across names/medical terms/overview/symptoms, and condition deep links in English, Hindi, and Gujarati.
- Check PWA offline behavior and run Lighthouse/axe when browser access is available.

## Not yet verified

No Lighthouse scores, Core Web Vitals, real initial network transfer, offline browser behavior, or production route interactions are claimed by this source/build change alone.


## Preview HTTP verification — Phase 4 (deployment built from commit b867041)

- `/data/conditions-index.json` returned HTTP 200 with `application/json`, 23 records, localized `en`/`hi`/`gu` names, searchable text, and no long illustrative-vignette field.
- A direct condition deep-link URL returned HTTP 200 with the SPA HTML shell. This verifies the rewrite response only, not client-side rendering or route navigation.
- `/sw.js` returned HTTP 200 and its content includes `conditions-index.json`, confirming the index is in the generated service-worker precache manifest.
- The HTML entry preloads React/UI vendor chunks but does not preload the condition data chunk. This is consistent with the intended route-level separation; it is not a browser network trace.
- Manual browser rendering, language interaction, offline-mode behavior, Lighthouse, and axe remain unverified.


## Phase 4 follow-up — verify route-specific Markdown loading

- Prior CI emitted `vendor-ui` at **254.36 kB minified / 76.94 kB gzip**.
- Splitting Lucide icons, Motion, and React Markdown into separate manual chunks emitted a `vendor-markdown` chunk at **119.02 kB minified / 36.85 kB gzip**, but the preview HTML still preloaded it from the home page. The attempted split therefore failed its main acceptance criterion.
- The branch now removes the forced `vendor-markdown` chunk and relies on Rollup's route-level dynamic-import graph for Markdown. Check the new CI output and preview HTML before accepting this optimization.
- Browser network traces, actual initial transfer, and Lighthouse remain unverified.

## Phase 4 — automated PWA build-boundary checks

- Added `scripts/verify-pwa-build.ts` to run after `vite build` and before the Express bundle.
- The check asserts that the HTML entry does not module-preload the lazy Articles/Markdown code, the generated condition index has localized names and searchable text in English/Hindi/Gujarati, and the service-worker manifest includes the condition index plus crisis/emergency assets.
- This verifies emitted build artifacts and the precache manifest only. It does not simulate a browser going offline, confirm service-worker activation/update UX, or provide Lighthouse/Core Web Vitals scores; those still require browser-level tests.

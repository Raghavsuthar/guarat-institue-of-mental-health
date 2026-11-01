# Mindcare Improvement Brief

Read this file and execute it phase by phase. Repository: `gujarat-institute-mental-health/Mindcare`. Never edit `main` directly; use `improve/<phase-name>` branches, small commits, and a pull request per phase.

## Mission

Harden, deepen, and visually improve Mindcare, a trilingual (English, Hindi, Gujarati) public mental-health education portal for India. Keep the product educational, non-diagnostic, culturally respectful, accessible, privacy-preserving, and fast on low-end Android devices.

## Non-negotiable rules

1. Audit first. Keep `docs/AUDIT.md` current and evidence-based.
2. Preserve all existing routes, condition/topic deep links, language switching, crisis access, screeners, and PWA behavior.
3. Never invent clinical claims, numbers, citations, DOI/PMID identifiers, helplines, credentials, or reviewer names. Open sources in the session before using them; mark unresolved items `[UNVERIFIED]`.
4. Never expose or commit secrets. Treat any credential ever committed as compromised and document rotation steps without printing it.
5. Use browser screenshots, Playwright, axe, Lighthouse, and API tests where tools are available. Never claim a test passed unless it ran.
6. Ask at most one concise question for an irreversible or genuinely ambiguous decision. Otherwise decide and document the rationale in `docs/DECISIONS.md`.
7. Every phase must pass content validation, TypeScript checks, build, and relevant tests in CI before merge.

## Phase 1 — Audit

Maintain `docs/AUDIT.md` with file/line evidence and a prioritized backlog. Inventory runtime routes, API endpoints, content integrity, translations, related IDs, source freshness, video coverage, bundle size, PWA behavior, security, privacy, and design. Capture before screenshots at 360/390/768/1280/1536 widths and in en/hi/gu, light/dark, and reduced-motion modes when browser tooling is available. Explicitly mark unavailable runtime evidence as unverified.

## Phase 2 — P0 backend, data integrity, and security

- Confirm production API routes return JSON, not SPA HTML.
- Use Vercel Functions for the Vercel-hosted API or document a separately hosted Node service; keep Docker/self-host support.
- Use durable storage and shared rate limiting; remove synthetic analytics and start at zero.
- Honor `process.env.PORT`; align `.env.example`, README, and server-only secrets.
- Verify admin authentication, rotate any exposed credential, and test unauthorized requests against the deployed API.
- Ensure crisis messages in English, Hindi, Gujarati, and common transliterations bypass the model before any AI call.
- Test prompt injection, output limits, request validation, rate limiting, safe fallbacks, and no logging of user text.
- Keep the SPA fallback from swallowing `/api/*`.

## Phase 3 — Visual redesign

Use a premium, calm “Calm Aurora” direction: teal/aqua, indigo/violet, warm coral accents, layered depth, refined typography, selective glass panels, and distinct category themes. Build design tokens first. Redesign the home hero, sticky responsive header, category/condition tiles, detail views, storytelling sections, and footer. Honor reduced motion, animate only transform/opacity, avoid layout shifts, and keep the page fast. Use self-hosted/subset fonts with correct Hindi/Gujarati rendering where practical.

## Phase 4 — Performance and PWA

Measure before/after bundle size and Lighthouse. Lazy-load condition data and search index by route/entity where practical; split heavy tools and admin code; optimize images and fonts; ensure service-worker updates are clear and crisis/breathing/grounding content is available offline. Targets: Lighthouse mobile performance ≥90, accessibility ≥95, best practices ≥95, SEO ≥95; LCP <2.5 s, CLS <0.1, INP <200 ms. Report actual measurements rather than assuming targets are met.

## Phase 5 — Evidence-based content

Extend the existing condition schema backward-compatibly. Add evidence quality, guideline positions, Indian context, clinician-only education where safe, reference metadata, review dates, and source-verification state. Upgrade the validator to check trilingual parity, duplicate IDs/slugs, related IDs, citations, reference metadata, and review status. Prioritize gaps from the coverage matrix, including substance-use disorders, sleep, perinatal conditions, child mental health, treatment-resistant depression/neuromodulation, medication-class education, somatic symptom disorders, and culturally relevant idioms of distress. Clearly label investigational biomarkers as not for clinical use. Use one condition/content batch per PR and add `docs/CONTENT_REVIEW.md` plus `docs/CHANGELOG-content.md`.

## Phase 6 — Feature completion

Confirm or add real FAQ, glossary, and accessibility routes; breadcrumbs; multilingual typo-tolerant search; accessible glossary tooltips; local-only mood/sleep journals and CBT tools; printable/PDF and reference exports; licensed screening tools with local scoring and safe crisis escalation; accessibility controls; verified service directories only when source data is available; privacy-preserving feedback; verified video coverage; and complete per-route multilingual SEO. Skip features already implemented and verified.

## Phase 7 — Quality and CI

Add ESLint with React hooks/a11y rules, Prettier, Vitest or Node-based unit tests, Playwright end-to-end tests, axe, API tests, link checking (report-only for external links), and Lighthouse CI. CI should validate content, lint, typecheck, unit-test, build, run e2e/axe/Lighthouse against preview where supported, and publish results. Choose one package manager; CI currently uses npm. Add `SECURITY.md`, a clear license decision, privacy notice, and terms in all three languages.

## Acceptance evidence

- Production APIs return expected JSON; Q&A, analytics, and admin are tested end-to-end.
- No synthetic analytics are presented as real; durable storage and shared rate limits work.
- Secrets stay server-side; unauthenticated admin requests are rejected.
- Crisis keywords bypass AI and return verified local resources.
- Deep links and language switching work in en/hi/gu.
- Lighthouse, axe, keyboard, reduced-motion, and small-screen results are recorded.
- Clinical additions have opened source links and human review status.
- Offline crisis and grounding content are tested.
- README, AGENTS.md, AUDIT.md, DECISIONS.md, CONTENT_REVIEW.md, and content changelog stay current.

## Owner-supplied inputs needed before final production sign-off

- Name/credentials of the actual clinical reviewer.
- Verified helplines and hospital/service-directory source data.
- Real photos and permission to use them.
- Code/content licensing preference.
- Domain/hosting choices and configuration of server-side secrets.
- Licensing/permissions for each questionnaire instrument.
- Clinical sign-off on each evidence-content batch.


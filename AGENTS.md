# Mindcare Agent Guide

## Mission

Mindcare is a trilingual (English, Hindi, Gujarati) public psychiatry education portal. It is educational, not diagnostic or a substitute for individualized care. Treat crisis, substance-use, screening, and treatment content as clinically sensitive.

## Stack

- React 19, TypeScript 5.8, Vite 6, React Router 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- Motion, Lucide React, React Markdown, `vite-plugin-pwa`
- Express 4 for self-hosted/Docker mode
- Vercel Functions under `api/` for production API endpoints
- Google GenAI SDK for the educational Q&A assistant
- Upstash Redis REST for durable aggregate analytics and shared rate limits
- Node.js 22; npm is the CI package manager

Use `package-lock.json` as the reproducible install source. Do not update `bun.lock` unless deliberately changing package-manager policy.

## Commands

- `npm ci` — install locked dependencies
- `npm run validate` — validate authored content
- `npm run lint` — TypeScript type-check (`tsc --noEmit`; not ESLint)
- `npm test` — API/core unit tests
- `npm run build` — content validation, sitemap generation, Vite build, Express bundle
- `npm run dev` — local Vite dev server

## Branch and PR rules

- Never commit directly to `main`.
- Use `improve/<phase-name>` branches, small commits, and one PR per phase.
- Never force-push.
- Do not merge stale PR #2 without comparing its diff to current `main`.
- Do not claim browser/API/performance/security verification unless the check actually ran and its output was inspected.
- Every phase must run validation, type-check, build, and relevant tests in CI before merge.

## Content schema

- Conditions are primarily authored in `src/data/conditions.ts` and condition batches.
- The main `Condition` type is in `src/types/index.ts`.
- Localized content uses `en`, `hi`, and `gu`.
- Evidence guides are in `src/data/conditionEvidenceGuides.ts`.
- Keep the existing schema unless a backward-compatible change is justified.
- Never invent clinical claims, statistics, references, DOI/PMID identifiers, helpline numbers, reviewer names, or credentials.
- Retrieve and open a source before adding a clinical claim. Mark unresolved claims `[UNVERIFIED]`.
- Do not machine-translate references. Machine-assisted clinical strings need human-review status.
- Keep screening educational, not diagnostic; confirm instrument licensing before adding or redistributing instruments.

## API and security

- API handlers must return JSON and appropriate status codes; never silently return SPA HTML as API data.
- Crisis detection must happen before any model call.
- Never send secrets to client code or commit them.
- Do not log user Q&A text.
- Analytics must contain only aggregate events and must never display synthetic metrics as real.
- Keep admin authentication server-side; require a unique `ADMIN_PASSWORD` of at least 32 characters.
- Do not store raw IP addresses. Rate-limit keys must be hashed and short-lived.
- Fail clearly if required durable storage is unavailable.

## UI and accessibility

- Preserve language-prefixed routes and deep links.
- Do not regress language switching, crisis access, screeners, PWA behavior, or modal focus behavior.
- Honor `prefers-reduced-motion`.
- Check mobile widths, keyboard navigation, contrast, accessible names, and Hindi/Gujarati text wrapping.
- Keep animations subtle and avoid animating layout properties.

## Required handoff

Update `docs/AUDIT.md`, `docs/DECISIONS.md`, `docs/CONTENT_REVIEW.md`, and `docs/CHANGELOG-content.md` as applicable. Clearly separate verified facts, unverified risks, and decisions.

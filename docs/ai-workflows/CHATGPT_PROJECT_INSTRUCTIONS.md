# ChatGPT Project Instructions — Mindcare Engineering

Follow repository `AGENTS.md` first; these instructions supplement, not override, it. Mindcare is a trilingual public psychiatry and mental-health education portal.

## Operating method
1. **Inspect:** read relevant files, project instructions, package scripts, current branch, and established patterns. Do not assume files or framework behavior.
2. **Plan:** summarize the goal, user impact, risks, likely files, and a minimal plan. Ask only if a missing decision blocks safe progress.
3. **Baseline:** reproduce the bug or record current behavior. Identify validation commands from `package.json` and CI.
4. **Implement:** make the smallest coherent change, follow existing patterns, preserve compatibility, and use tests first when practical.
5. **Validate:** run relevant tests, content validation, type-check, build, and security/accessibility checks when available. Label checks not run and why.
6. **Review:** inspect the complete diff for correctness, secrets, privacy, accessibility, localization, performance, regressions, and scope creep.
7. **Deliver:** report changed files, behavior, actual test results, limitations, and branch/PR links only if they exist.
8. **Handoff:** record decisions, current state, unresolved questions, and concrete next steps.

## Repository safety
- Follow `AGENTS.md`, existing conventions, lockfile policy, and CI. Do not alter dependencies unless required and justified.
- Never commit directly to `main`, force-push, rewrite history, or merge a PR unless explicitly authorized.
- Prefer a dedicated `improve/<short-scope>` or `fix/<short-scope>` branch and reviewable PR.
- Never claim a command ran, passed, or deployed unless actual output confirms it.
- Do not expose environment values, tokens, credentials, personal data, or secret-bearing logs. Use synthetic test fixtures only.

## Clinical and content safety
- Mindcare educates; it does not diagnose, prescribe, or replace individual clinical assessment.
- Verify medical statements against reliable primary guidelines or peer-reviewed sources before adding them. Do not invent citations, statistics, identifiers, or hotline numbers.
- Keep crisis information accurate for the intended geography and crisis pathways visible and functional.
- Keep screening tools educational, respect licensing, and never present a screening score as a diagnosis.
- Machine-translated clinical text requires human review; do not represent unreviewed translations as clinically approved.
- Do not silently change medication, suicide/self-harm, pregnancy, child/adolescent, or emergency guidance.

## Regression checklist
Check relevant items for every change: English/Hindi/Gujarati content and locale routes (`/en`, `/hi`, `/gu`); mobile layouts, keyboard navigation, accessible names, contrast, reduced-motion preference, and long-text wrapping; deep links, not-found handling, sitemap/SEO and metadata; PWA/offline behavior and service-worker cache updates; API JSON/status behavior; crisis resources, screening disclaimers, and privacy-safe analytics; content validation, TypeScript, tests, and production build.

## Required final report
Include summary, files changed, validation commands and actual outcomes, security/privacy considerations, clinical-review needs, and remaining risks. Label unverified claims `[UNVERIFIED]`. Do not present planned work as completed.

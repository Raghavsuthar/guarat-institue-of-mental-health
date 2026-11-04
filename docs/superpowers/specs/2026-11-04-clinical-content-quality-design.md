# Clinical content quality — Phase 1 design

**Date:** 2026-11-04  
**Repository:** `Raghavsuthar/guarat-institue-of-mental-health`  
**Target:** `main` via a separate reviewable pull request

## Intent

Improve the safety, accuracy, and trustworthiness of the public-facing trilingual condition library without expanding the catalogue or implying that content has received independent clinician sign-off.

## Goals

- Audit all 23 published condition records and their evidence-guide mappings.
- Correct clear overstatements in patient-facing condition copy, beginning with unsupported cure/response guarantees, deterministic genetic explanations, simplistic neurotransmitter language, and inevitable-relapse wording.
- Preserve equivalent safety messages and educational framing in English, Hindi, and Gujarati.
- Add automated regression checks for a small set of high-risk overclaim patterns.
- Record what was checked, what was changed, and what still needs qualified human clinical and language review.

## Non-goals

- This phase is not a substitute for psychiatrist-led clinical review or fluent clinical translation review.
- Do not rewrite every condition or add new conditions in this phase.
- Do not add medication doses, personalized treatment advice, new helplines, or unverified service listings.
- Do not change the existing condition/evidence-guide schema or UI.

## Approaches considered

1. **Broad rewrite of all 23 conditions:** rejected because large-scale medical copy changes without a human clinical reviewer increase the risk of introducing errors and make review difficult.
2. **Inventory plus targeted corrections and regression checks:** selected because it directly addresses identified safety issues while keeping the diff focused and auditable.
3. **Documentation-only audit:** rejected because it would leave known misleading statements visible to the public.

## Implementation decisions

- Keep the existing React/TypeScript data model and npm workflow.
- Make a dedicated `improve/clinical-content-quality-phase1` branch; do not touch `main` or the separate open production-build PR.
- Write regression tests before changing content.
- Update only the affected condition strings, maintaining all three locales.
- Record source references and limitations in the audit/review documents.
- Use CI as the authoritative test/build evidence where this environment cannot run the repository locally.

## Acceptance criteria

- All 23 condition IDs remain present and mapped to evidence guides.
- Targeted overclaim regression tests fail before content edits and pass afterward.
- `npm run validate`, `npm run lint`, `npm test`, and `npm run build` pass in CI.
- The audit explicitly distinguishes source-code inspection from clinical/translation review.
- No clinician-review status or deployment success is claimed without evidence.

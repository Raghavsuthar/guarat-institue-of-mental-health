# Self-Reflection Tool Clinical Safety Implementation Plan

> **For agentic workers:** Follow this plan task-by-task using the repository's existing TypeScript tests and React components.

**Goal:** Correct known instrument-specific scoring and wording issues, clearly distinguish recognized screening instruments from adapted reflections, and prevent misleading clinical interpretations or missed safety signals.

**Architecture:** Keep the existing data-driven questionnaire model. Add only the metadata and per-tool behavior needed to distinguish scored instruments from unscored educational reflections; avoid new dependencies or a broad component rewrite. Preserve the current trilingual UI and existing test runner.

**Tech Stack:** React 19, TypeScript, Vite, Node test runner via tsx, Playwright browser tests.

**Spec:** This plan; scope approved in conversation: retain all ten tools with clear labels distinguishing recognized instruments from adapted educational reflections.

## Global Constraints
- Do not present adapted mood, alcohol, PTSD, or postpartum reflections as validated instruments.
- Do not apply clinical cut-offs to adapted reflections or the ISI until exact item anchors and reuse permission are verified.
- Preserve immediate safety guidance for self-harm endorsements.
- Do not claim Hindi/Gujarati psychometric validation.
- Add no dependencies; keep the change minimal.

## Review Focus
- Incomplete answers must not silently produce a score.
- Self-harm endorsement must remain visible regardless of total score.
- Reverse-scored DAST item must be applied only to the intended question.
- Adapted tools must not display clinical severity labels or clinical cut-offs.
- Changing tools must clear prior answers and crisis state.

---

### Task 1: Lock the scoring and classification contract

**Files:**
- Modify: `src/data/assessments.ts`
- Test: `tests/assessments.test.ts`

- [ ] Add tests that assert instrument-vs-adapted classification, absence of score bands on unvalidated reflections, PHQ-9 score bands, GAD-7 Q4 wording, and DAST-10 interpretation boundaries.
- [ ] Run `npm test` and confirm the new assertions fail for the expected current-data reasons.
- [ ] Implement the minimum data changes: PHQ-9 split 15–19 / 20–27, GAD-7 Q4 wording correction, exact DAST-10 bands, and safe non-clinical labels for adapted tools.
- [ ] Run `npm test`.

### Task 2: Make the result UI respect the data contract

**Files:**
- Modify: `src/components/ScreenerModal.tsx`
- Test: existing browser test suite

- [ ] Ensure unvalidated reflections do not present a clinical score or severity band as a clinical interpretation.
- [ ] Ensure incomplete answers cannot be submitted.
- [ ] Keep safety alert rendering independent of total score and retain Tele-MANAS / emergency guide actions.
- [ ] Run the existing browser tests and add focused coverage for the changed behaviors.

### Task 3: Document outstanding clinical review

**Files:**
- Create: `docs/SELF_REFLECTION_CLINICAL_REVIEW_2026-11.md`

- [ ] Record exact items requiring permission, source verification, and fluent Hindi/Gujarati clinical review (including ISI anchors, SCOFF wording, AUDIT-C options, and adapted mood/PTSD/postpartum tools).
- [ ] Run `npm test`, `npm run lint`, `npm run validate`, and `npm run build`.
- [ ] Open a draft PR; do not merge or claim deployment.
# Clinical Content Quality Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Remove clear patient-facing clinical overstatements from the highest-risk condition copy and add regression safeguards without changing the catalogue or UI.

**Architecture:** Keep the current condition and evidence-guide data model. Add a focused Node test that scans the published condition dataset for known high-risk absolute claims, then update the exact affected localized strings and maintain the content audit register.

**Tech Stack:** React 19, TypeScript 5.8, Vite 6.4, Node test runner via `tsx --test`, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-11-04-clinical-content-quality-design.md`

## Global Constraints

- Preserve all 23 existing condition IDs and evidence-guide mappings.
- Preserve English, Hindi, and Gujarati fields.
- Do not add new clinical claims, statistics, helplines, reviewer names, or credentials without opened authoritative sources.
- Do not claim independent clinical or language review.
- Do not commit directly to `main`; use `improve/clinical-content-quality-phase1`.
- Keep changes scoped to patient-facing copy, regression tests, and content-review documentation.

## Review Focus

- A localized copy field may retain a misleading cure/response guarantee after English is corrected; scan all locales.
- A numerical statistic may be copied into an illustrative example or FAQ rather than a primary overview; scan the full serialized condition data.
- A safe replacement must not accidentally remove useful emergency guidance or imply treatment is ineffective.
- Source links may exist without supporting every claim; do not treat source presence as claim verification.
- A successful type-check does not prove semantic translation equivalence; record this as pending human review.

---

### Task 1: Add overclaim regression tests

**Files:**
- Create: `tests/clinical-copy-safety.test.ts`
- Read: `src/data/conditions.ts` and imported condition batches

- [x] **Step 1: Write failing tests** for known public-copy patterns that overstate cure rates, treatment guarantees, inevitable relapse, or deterministic genetic causation. Scan all serialized condition data so nested examples, FAQs, and localized fields are included.
- [x] **Step 2: Run the focused test in CI** and confirm it fails because the known phrases are present, not because of a test/runtime error.
- [x] **Step 3: Keep the test narrow**: prohibit the identified unsafe phrase patterns, not all percentages or all biological terminology.
- [x] **Step 4: Commit** the failing test before content edits.

### Task 2: Correct targeted condition copy

**Files:**
- Modify: `src/data/conditions.ts`
- Modify: `src/data/newConditions.ts`
- Modify: `src/data/newConditionsBatch2.ts`
- Modify: `src/data/newConditionsBatch3.ts`

- [x] **Step 1: Update** the depression explanation to describe interacting biological, psychological, and social factors without presenting a single neurotransmitter or inflammation pathway as a settled cause.
- [x] **Step 2: Update** bipolar and other genetic explanations to describe polygenic/familial contribution without deterministic language or unsupported precision.
- [x] **Step 3: Update** schizophrenia medication/relapse copy to describe reduced symptom and relapse risk, with individualized clinician-supervised decisions rather than inevitable relapse.
- [x] **Step 4: Remove** unsupported cure/response guarantees from phobia, illness-anxiety, PMDD, and eating-disorder copy while retaining cautious descriptions of evidence-based treatment.
- [x] **Step 5: Align** English, Hindi, and Gujarati replacements and retain the original field structure.
- [x] **Step 6: Run** the focused safety test and full test suite.

### Task 3: Record the full 23-condition audit

**Files:**
- Create: `docs/CONDITION_CONTENT_AUDIT_2026-11.md`
- Modify: `docs/CONTENT_REVIEW.md`
- Modify: `docs/CHANGELOG-content.md`

- [x] **Step 1: Record** all 23 condition IDs, evidence-guide presence, priority tier, identified content risks, and follow-up review needs.
- [x] **Step 2: Clearly distinguish** automated/source inspection from claim-by-claim clinical review and fluent clinical-language review.
- [x] **Step 3: Record** the authoritative source pages consulted for the corrected claims and their scope.
- [x] **Step 4: Keep** independent clinician sign-off explicitly pending.

### Task 4: Verify and hand off

- [x] **Step 1:** Run `npm run validate`.
- [x] **Step 2:** Run `npm run lint`.
- [x] **Step 3:** Run `npm test`.
- [x] **Step 4:** Run `npm run build`.
- [x] **Step 5:** Inspect the final diff and GitHub Actions output; report every failed or unavailable check.
- [x] **Step 6:** Open a separate draft PR against `main`; do not merge or claim deployment.


## Verification record

- Final PR head: `e22e64862e0868ddad0accf895a7da4107a95356`.
- CI & Quality Assurance: passed (run `41774922899`).
- Browser, responsive, and axe smoke tests: passed (run `41774922885`).
- Regression test: confirmed red on the baseline content and green after the content corrections.
- Independent psychiatrist sign-off and fluent Hindi/Gujarati clinical-language review remain external review gates, not software acceptance criteria.

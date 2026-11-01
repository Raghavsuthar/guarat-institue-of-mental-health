# Mindcare content coverage audit — Phase 0

**Audit date:** 2026-10-25  
**Scope:** Static repository inventory of content data, evidence-guide metadata, India resource records, video curation notes, and existing validation. This is a source-code audit, not a clinical review or a live-site/browser audit.

## Executive summary

Mindcare already has a substantial trilingual condition library and a first evidence-guide system. The next step should be quality, safety, and completeness—not simply adding more disorder names.

### Confirmed repository findings

- Conditions are assembled from `src/data/conditions.ts` and four expansion modules: `newConditions.ts`, `newConditionsBatch2.ts`, `newConditionsBatch3.ts`, and `newConditionsBatch4.ts`.
- Substance education is separated into `src/data/substances.ts`, `newSubstances.ts`, and `newSubstancesBatch2.ts`.
- Evidence summaries and source metadata live in `src/data/conditionEvidenceGuides.ts`; editorial tracking is in `docs/CONTENT_REVIEW.md` and `docs/CHANGELOG-content.md`.
- India service listings live in `src/data/resources.ts`; video curation is documented in `VIDEO_TODO.md` and `docs/VIDEO_REVIEW.md`.
- Existing scripts/tests include `scripts/validate-content.ts`, `tests/evidence-guides.test.ts`, `tests/video-safety.test.ts`, and `tests/qa-safety.test.ts`.
- Several entries in `src/data/resources.ts` contain literal `[VERIFY: ...]` text in user-facing fields. The static scan found **49 occurrences of VERIFY** across phone numbers, hours, websites, operating bodies, languages, cost, and verification labels. These are not appropriate as patient-facing copy and indicate that resource verification is incomplete.
- At least the Tele-MANAS and national emergency records mix useful service information with unresolved verification notes. Other records include KIRAN, NIMHANS, district mental-health services, de-addiction resources, and NGO support; their current numbers, hours, eligibility, and availability should not be treated as confirmed until checked against official source pages.
- Existing content-review notes explicitly say that automated checks do not establish independent clinical review or translation quality. Keep that distinction.

## Priority findings and action

| Priority | Finding | Required action |
|---|---|---|
| P0 — safety | Unresolved `[VERIFY]` notes appear inside public resource data | Verify each number and URL from an official source; remove unsupported claims or clearly mark the listing as a general directory entry. Never silently strip the warning while leaving an unverified claim looking confirmed. |
| P0 — safety | Emergency and mental-health support information is time-sensitive | Keep emergency response separate from counselling/support lines. Show a plain instruction to contact local emergency services or attend the nearest emergency department when there is immediate danger. Recheck official numbers before release. |
| P1 — evidence | Evidence guides cover a subset of condition records | Generate an ID-based coverage report: every condition ID, guide present/missing, source URL scheme, source organization/title, and review date. Prioritize missing guides by public-health impact rather than alphabetic order. |
| P1 — translation | English/Hindi/Gujarati fields are present in many records, but presence alone does not establish equivalence | Add parity checks for safety instructions, urgency, treatment limitations, and service access; arrange fluent clinical-language review before claiming translation quality. |
| P1 — video safety | The video TODO lists outstanding topics and notes availability/caption limitations | Treat video availability, publisher attribution, captions, embed privacy, and clinical relevance as separate review criteria. Do not invent IDs or imply localized versions exist without checking. |
| P2 — maintainability | Coverage information is split across data modules and documentation | Generate the audit from source IDs where possible so the report stays current; avoid a second manually maintained condition list. |

## Phased implementation sequence

1. **Phase 0 — inventory and safeguards:** create a machine-readable coverage report and fail validation when unresolved verification placeholders appear in patient-facing content.
2. **Phase 1 — official service directory:** verify Tele-MANAS and emergency information from government sources; verify each other listing independently. Remove, defer, or label unsupported entries instead of guessing. Record the source URL and review date.
3. **Phase 2 — evidence-guide coverage:** produce a condition-by-condition missing-guide report, then write the highest-priority missing guides in English, Hindi, and Gujarati using original plain-language summaries and linked primary guidance.
4. **Phase 3 — substances and treatment literacy:** audit substance-specific guidance, withdrawal/emergency warnings, medication safety, psychotherapy options, and recovery support.
5. **Phase 4 — videos and practical tools:** verify media metadata and captions; review self-help worksheets and screeners for licensing, privacy, and non-diagnostic framing.
6. **Phase 5 — quality gate:** run type-check, content validation, unit tests, production build, and browser checks; record source-check dates and clinical/translation reviews honestly.

## Source and review policy

- Prefer Government of India / state health department sources for Indian helplines, emergency numbers, eligibility, and public services.
- Prefer WHO mhGAP and current disorder-specific guidelines for clinical recommendations; record each source's exact scope.
- Link to sources and summarize in original wording. Do not copy full copyrighted articles.
- A source URL being present does not mean its current status has been confirmed. Store a review date only after actually checking the source.
- Do not claim consultant sign-off, guideline currency, 24/7 availability, free access, or multilingual support unless verified.
- Any immediate-risk advice must be visible, concise, and consistent across English, Hindi, and Gujarati.

## Important limitation

This audit has not yet changed patient-facing website content and does not prove that all current pages, videos, translations, or service listings are accurate. The next implementation change should address the P0 resource-directory issue before expanding the content catalogue further.

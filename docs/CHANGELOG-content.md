# Mental-health content changelog

## 2026-10-24 — Phase 5, batch 2

Added trilingual public-facing evidence summaries for the ten existing conditions that did not previously have a dedicated evidence guide:

- Social anxiety disorder
- Specific phobia
- Insomnia disorder
- Somatic symptom disorder
- Illness anxiety disorder
- Persistent depressive disorder
- Premenstrual dysphoric disorder (PMDD)
- Personality disorders overview
- Postpartum depression and anxiety
- Body dysmorphic disorder (BDD)

### Editorial changes

- Added source organization, title, URL, and scope note for each cited source.
- Added limitations and non-diagnostic caveats to every guide.
- Emphasized that somatic symptoms are real and are not intentionally produced.
- Clarified that NICE CG78 is specific to borderline personality disorder, not every personality disorder.
- Added pregnancy/postpartum urgent warning signs and cautions against abruptly stopping medication.
- Avoided personalized medication instructions, dose recommendations, or claims that any treatment guarantees recovery.

### Validation

- Added `tests/evidence-guides.test.ts` to check that all condition IDs have guides, all summaries are localized in English/Hindi/Gujarati, and every guide has complete HTTPS source metadata.
- Source-check date is recorded as 2026-10-24. No independent clinician sign-off is claimed; see `docs/CONTENT_REVIEW.md`.

## 2026-10-24 — Phase 6, educational videos

- Added attributed educational videos for OCD/ERP, alcohol use disorder, and opioid use disorder; retained the existing NIMH/NAMI videos for depression, bipolar disorder, anxiety, and schizophrenia.
- Updated condition and substance detail views to show a localized educational-video heading, title, and publisher attribution.
- Added an 11-character YouTube ID format guard before constructing an embed URL.
- Updated `VIDEO_TODO.md` and added `docs/VIDEO_REVIEW.md` with current coverage and limitations.
- Added `tests/video-safety.test.ts` to validate ID format, source attribution, localized titles, and HTTPS external links.
- Automated checks do not verify ongoing video availability, captions, or clinical review; see the video review register.

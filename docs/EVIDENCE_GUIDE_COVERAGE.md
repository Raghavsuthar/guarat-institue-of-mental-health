# Evidence-guide coverage inventory — Phase 0 follow-up

**Inventory date:** 2026-10-25  
**Method:** Static ID comparison of condition records in the five condition modules against top-level keys in `src/data/conditionEvidenceGuides.ts`. This checks presence only—not scientific accuracy, source freshness, translation quality, or reference adequacy.

## Results

- Condition IDs discovered in the five source modules: **23 unique IDs**.
- IDs with a matching top-level evidence-guide key: **23**.
- IDs without a matching top-level evidence-guide key: **0**.

### Matching IDs

- `depression`
- `bipolar`
- `anxiety-gad`
- `panic-disorder`
- `ocd`
- `schizophrenia`
- `ptsd`
- `geriatric-dementia-delirium`
- `anorexia-nervosa`
- `bulimia-nervosa`
- `binge-eating-disorder`
- `adhd`
- `autism-spectrum-disorder`
- `social-anxiety-disorder`
- `specific-phobia`
- `insomnia-disorder`
- `somatic-symptom-disorder`
- `illness-anxiety-disorder`
- `persistent-depressive-disorder`
- `pmdd`
- `personality-disorders-overview`
- `postpartum-depression-and-anxiety`
- `body-dysmorphic-disorder`

### Missing evidence-guide keys



## Interpretation

This is a targeted inventory of the five core condition modules—not a count of every mental-health topic in the application. Other content types (substance guides, child/adolescent topics, women's mental health, symptoms, treatments, articles, FAQs, glossary, and video records) require separate audits.

A missing guide does **not** mean the condition page itself is missing or unsafe; it means there is no matching key in this specific evidence-guide registry. Existing guide presence likewise does not establish that every claim is fully sourced or recently reviewed.

## Recommended next step

All 23 IDs in these five condition modules have a matching evidence-guide key. The next task is therefore **depth and quality review**, not creating duplicate guides. Review guide sources for currency, source-to-claim alignment, trilingual equivalence, limitations, and whether the guidance is appropriate to the condition and population. Prioritize schizophrenia/psychosis, bipolar disorder, OCD, PTSD, and ADHD for this deeper review because safety and treatment nuance are especially important.

## Acceptance criteria for the next authoring batch

- Every substantive clinical claim maps to a source appropriate to the claim.
- Use current official guidance where available; note guideline jurisdiction and target population.
- Write original plain-language summaries; link sources rather than copying them.
- Keep English, Hindi, and Gujarati equivalent in meaning, including limitations and urgent-help instructions.
- Avoid individualized diagnosis, medication selection, or dose changes.
- Record source-check date separately from independent clinical-review status.

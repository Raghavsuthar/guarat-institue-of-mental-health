# Condition Evidence Guide Audit — Phase 1

**Scope:** Static inventory of `src/data/conditionEvidenceGuides.ts` on 2026-10-25. This is a content-governance audit, not a clinical endorsement and not a live validation of every external source URL.

## Findings

- The evidence-guide registry contains **23 condition keys**: depression, generalized anxiety disorder, OCD, schizophrenia, bipolar disorder, panic disorder, PTSD, ADHD, geriatric dementia/delirium, anorexia nervosa, bulimia nervosa, binge-eating disorder, autism spectrum disorder, social anxiety disorder, specific phobia, insomnia disorder, somatic symptom disorder, illness anxiety disorder, persistent depressive disorder, PMDD, personality disorders overview, postpartum depression/anxiety, and body dysmorphic disorder.
- The guide interface supports a multilingual title, introduction, findings with limitations, sources, and a reviewed-note field.
- The registry references **22 unique source URLs** across WHO, NICE, NIMH, and CDC. This count indicates URL inventory only; it does not establish that each link currently resolves, that the cited page supports every claim, or that recommendations are current.
- Some conditions have more than one source, but source quantity alone is not a measure of evidence quality.
- The current data shape has no structured source publication/update date, access date, recommendation strength, or clinical-reviewer field. The human-readable reviewed note is not a substitute for a documented review record.
- The source list includes general public information pages and clinical guidelines. Future revisions should distinguish these source types and prioritize current clinical guidelines/systematic reviews for treatment claims.

## Required next review

For each guide, reviewers should verify:
1. The URL resolves and the page title/organization match the citation.
2. Each treatment or safety claim is directly supported by the cited source.
3. Recommendations reflect the latest available guideline, including relevant updates or superseding guidance.
4. Important limitations, shared decision-making, treatment access, and relapse/follow-up considerations are represented without implying guaranteed outcomes.
5. Hindi and Gujarati convey the same clinical meaning and safety caveats as English.
6. Emergency guidance is locally appropriate for India and does not substitute a general educational page for urgent care.
7. No page implies that screening or website content provides a diagnosis.

## Suggested clinical-review order

1. **Higher-risk / treatment-sensitive:** schizophrenia, bipolar disorder, PTSD, OCD, ADHD, eating disorders, postpartum depression/anxiety, dementia/delirium.
2. **Common conditions:** depression, generalized anxiety, panic disorder, social anxiety, insomnia.
3. **Other guides:** specific phobia, persistent depressive disorder, PMDD, somatic symptom disorder, illness anxiety, body dysmorphic disorder, autism, personality-disorder overview.

This is a proposed review order based on safety and treatment sensitivity, not a ranking of condition importance.

## Source hierarchy for updates

- Current national or international clinical practice guidelines (e.g., NICE; relevant Indian MoHFW/NMC/state guidance where available).
- WHO guidance and mhGAP for global/public-health recommendations.
- Systematic reviews and high-quality evidence syntheses for questions not covered by guidelines.
- Authoritative public information pages (e.g., NIMH, CDC) for accessible explanatory context, not as the sole basis for nuanced treatment recommendations.

## Implementation safeguards

- Keep all patient-facing content available in English, Hindi, and Gujarati.
- Keep sources attached to the individual guide and preserve clear educational/non-diagnostic framing.
- Record the last checked date and the clinical reviewer in the content change record.
- Do not label a guide “clinically reviewed” unless a qualified reviewer has actually reviewed the revised content.
- Do not remove uncertainty or limitation statements merely to make copy sound more definitive.
- Verify the full production build and content validation before merging any patient-facing edits.

## Explicit exclusions

This audit does **not** claim that all 22 URLs were opened or checked live, that every claim is fully evidence-matched, that a psychiatrist has clinically approved the guides, or that the public website has changed. It records the current inventory and a safe review process for the next content phase.

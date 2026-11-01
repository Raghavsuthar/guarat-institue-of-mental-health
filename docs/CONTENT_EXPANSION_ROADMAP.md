# Evidence-Based Content Expansion Roadmap

**Prepared:** 2026-10-25  
**Status:** Research-backed implementation plan, not a claim that every listed topic has already been authored or clinically approved.

## Mission

Build a comprehensive, trustworthy public mental-health education library for India in English, Hindi, and Gujarati. Keep content understandable on mobile, non-stigmatizing, accessible, culturally respectful, and educational rather than diagnostic or a substitute for individualized care.

"All content available online" is not a safe or legally realistic target: sources have copyright and licensing terms, recommendations differ by population and jurisdiction, and content changes. Mindcare should synthesize verified public guidance in original wording, link to primary sources, and avoid copying entire articles, paywalled texts, proprietary instruments, or videos. A claim must not be added until its source has been opened and checked.

## Initial repository review

- Mindcare already has condition/topic data, trilingual localization, evidence-guide summaries, screening/reflection tools, crisis links, educational videos, and content validation.
- Existing content-review and changelog files should remain the record of what was added and actually reviewed.
- The project guidance calls for small phase branches/PRs, opened source links for clinical claims, no invented citations, and CI validation/type-check/build/tests before merge.
- The right next step is a coverage and quality audit, not duplicating content already present.

## Source hierarchy

1. **India-specific official sources:** Ministry of Health and Family Welfare, Directorate General of Health Services, National Health Mission, Tele-MANAS and relevant public institutions.
2. **WHO:** mhGAP recommendations, evidence centre, fact sheets and technical guidance.
3. **Current disorder-specific guidelines:** NICE, APA and other recognized guideline organizations, within their stated population and jurisdiction.
4. **Government health education:** NIMHANS, NHS, NIMH and comparable national health services for plain-language explanations.
5. **Systematic reviews and high-quality studies:** Cochrane, PubMed-indexed systematic reviews and peer-reviewed trials where guidelines do not answer a specific question.

Search snippets, AI summaries, commercial wellness blogs, social posts, and a video alone are not sufficient evidence for a clinical claim.

## Research sources checked for this roadmap

| Source | Intended use | Link |
|---|---|---|
| WHO mhGAP evidence centre (2023 guideline, 3rd edition) | Depression, dementia, psychosis/bipolar, alcohol/drug use, anxiety, stress-related conditions, child/adolescent disorders and self-harm/suicide | https://www.who.int/teams/mental-health-and-substance-use/treatment-care/mental-health-gap-action-programme/evidence-centre |
| WHO mhGAP executive summary | Summary of updated/new recommendations and modules | https://www.ncbi.nlm.nih.gov/books/NBK598408/ |
| WHO mental disorders fact sheet, checked 2026-10-25 | General framing, stigma, access and treatment context | https://www.who.int/news-room/fact-sheets/detail/mental-disorders |
| Government of India, DGHS — National Mental Health Programme | Indian service-delivery context and official Tele-MANAS access details | https://www.dghs.mohfw.gov.in/national-mental-health-programme.php |
| Ministry of Health and Family Welfare / PIB, 7 Feb 2025 | Dated Tele-MANAS programme update; recheck before repeating time-sensitive statistics | https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2100593&lang=2&reg=48 |
| NIMHANS Centre for Addiction Medicine — Public Awareness | Indian public-facing alcohol/drug, school and college resources | https://cam.nimhans.ac.in/resources/ |
| NIMHANS e-Learning Hub | Addiction, tobacco cessation, motivational interviewing and suicide-prevention learning resources | https://nimhanselearning.org/ |
| NICE depression in adults NG222 | Recognition, assessment, treatment choices, follow-up and relapse prevention within its scope | https://www.nice.org.uk/guidance/ng222/chapter/Recommendations |
| APA clinical practice guidelines | Guideline index; verify current status and target population per topic | https://www.psychiatry.org/guidelines |
| NHS mental health conditions | Plain-language topic coverage and signposting; not a replacement for India-specific service information | https://www.nhs.uk/mental-health/conditions/ |

### Source-use rules

- Record source publication/update date separately from the last-checked date.
- If a source is updated, superseded, unavailable or outside the intended population, mark it for re-review.
- Recheck time-sensitive service numbers against official Indian sources before release. Do not infer state or language availability.
- A source link is not equivalent to clinical endorsement or completed human review.
- Preserve source titles and metadata in their original language; translate the explanatory summary, not the source title.

## Coverage map and implementation order

Each phase should be a separate small PR with its own source register, tests and changelog. Inventory existing content IDs and guides before authoring each batch.

### Phase 0 — Baseline and coverage inventory
- Inventory condition, substance, symptom, treatment, article, FAQ, glossary, video and resource IDs.
- Build a matrix of topic × English/Hindi/Gujarati × evidence guide × references × review date × video availability × safety notes.
- Mark missing, partial, stale, duplicate, untranslated, unreferenced and [UNVERIFIED] items distinctly.
- Extend existing validators rather than create a competing schema.
- Deliverable: auditable coverage matrix; do not invent copy merely to fill gaps.

### Phase 1 — Safety-critical foundations
- Crisis/self-harm: supportive language, immediate help, verified Indian contacts, family guidance and safe signposting.
- Urgent warning signs: psychosis, mania, severe depression, delirium, postpartum psychosis, severe intoxication/withdrawal and medical emergencies.
- How to seek care: professional roles, what an appointment involves, consent, privacy and shared decisions.
- Medication literacy: general purpose, monitoring, common versus urgent adverse effects, pregnancy/lactation review and why medicines should not be changed solely based on a website.
- Family/caregiver guidance and safety-plan conversations.
- Deliverable: official-source-backed pages reviewed in all three languages.

### Phase 2 — Core high-impact conditions
Prioritize complete guides for depression and persistent depressive symptoms; anxiety, panic, social anxiety, phobias and health anxiety; bipolar disorder and mania/hypomania; schizophrenia and other psychotic disorders; OCD; trauma-related conditions and PTSD; alcohol, tobacco/nicotine, cannabis, opioid and other substance-use disorders; insomnia; dementia and delirium. Distinguish gradual cognitive decline from acute confusion.

Each guide should cover plain-language definition, symptoms and functional impact, risk factors without blame, myths, assessment process, evidence-based treatment categories, proportionate self-help, family guidance, urgent signs, India-specific care navigation and references.

### Phase 3 — Lifespan and context-specific topics
- Children/adolescents: ADHD, autism, learning difficulties, depression/anxiety, behavioural concerns, self-harm warning signs and school support.
- Perinatal: pregnancy/postpartum depression and anxiety, postpartum psychosis as an emergency, individualized medication review.
- Reproductive transitions: PMS/PMDD, infertility-related distress, menopause-related symptoms and when to seek assessment.
- Older adults: depression, dementia, delirium, loneliness, caregiver strain, falls and medication review.
- Include disability, chronic physical illness, bereavement, migration, poverty, work stress and culturally shaped expressions of distress.

### Phase 4 — Additional conditions and differential explanations
Cover eating disorders/body-image concerns; personality disorders without treating them as synonymous with borderline personality disorder; somatic symptom disorder, illness anxiety and functional symptoms (explicitly say symptoms are real); dissociative disorders, grief-related conditions, adjustment disorders and locally relevant presentations. Explain overlap with physical and neurological illness. Never turn differential diagnosis into a self-diagnosis checklist.

### Phase 5 — Treatment and recovery library
- Psychotherapies: CBT, behavioural activation, ERP, exposure-based therapies, interpersonal therapy, family interventions, motivational interviewing, relapse prevention and psychosocial rehabilitation.
- Medication-class explainers: antidepressants, antipsychotics, mood stabilizers, anxiolytics, ADHD medicines, substance-use medicines, sleep medicines and dementia medicines.
- ECT, rTMS and other procedures only with accurate indications, limitations and specialist context.
- Recovery: sleep, activity, social connection, family psychoeducation, supported employment/education and relapse prevention.
- Separate established treatments from emerging/investigational approaches. Biomarkers, neuroimaging, supplements and wearables must not be portrayed as stand-alone diagnostic tests or proven treatments without supporting evidence.
- Avoid public-facing individualized dosing or treatment instructions.

### Phase 6 — Patient and caregiver tools
Appointment-preparation checklist, symptom timeline, questions for a clinician, medication discussion worksheet, sleep diary, locally stored mood/activity reflection, CBT thought record, behavioural activation planner, grounding, paced breathing and urge-surfing exercises. Include cautions and alternatives. Explain screener limits and verify instrument licensing before reproducing questionnaires. Tools should minimize data collection and work locally where possible.

### Phase 7 — Videos and visual explainers
For each video verify publisher, availability, language, captions, age suitability, accessibility, embedding permission and clinical relevance. Prefer official public-health or academic sources and reviewed original explainers. Record source, publisher, language/caption status and review date. Do not use sensationalizing imagery.

### Phase 8 — Indian services, rights and navigation
Verify Tele-MANAS, emergency response, district mental-health services, de-addiction services, disability/social support and legal-rights information from official sources. Distinguish nationwide from state/district-specific services; record source and last-verified date. Have qualified local clinical/legal experts review summaries about the Mental Healthcare Act, disability rights, consent, confidentiality, minors and emergency care.

### Phase 9 — Quality, translation and maintenance
Validate unique IDs/slugs, locale parity, HTTPS source metadata, source dates, review status, related-ID integrity and internal links. Machine-assisted translations require human language/clinical review before being marked reviewed. Test keyboard/accessibility, mobile layouts, reduced motion, deep links and builds. Maintain a quarterly source-review queue and immediately recheck crisis resources, major guideline changes and safety warnings.

## Required page template

1. **At a glance:** brief definition and intended audience.
2. **What a person may experience:** symptoms and impact, without stigma.
3. **What is known / unknown:** risk factors and uncertainty without blame or simplistic chemical-imbalance claims.
4. **How professionals assess it:** no self-diagnosis; note relevant medical, substance or medication factors.
5. **Evidence-based care options:** guideline-grounded categories, preferences and shared decisions.
6. **What may help day to day:** proportionate low-risk options, not a replacement for care.
7. **How family/friends can help:** respectful practical support.
8. **When to seek urgent help:** clear warning signs and verified local routes.
9. **India-specific care navigation:** verified services only.
10. **Sources and limitations:** organization, title, URL, publication/update date where known, date checked, scope and review status.
11. **English/Hindi/Gujarati:** equivalent meaning and safety guidance.
12. **Editorial metadata:** content ID, batch, source-check date, human reviewer status and next review trigger.

## Acceptance checklist for every batch

- [ ] Clinical statements trace to sources opened and checked.
- [ ] No invented statistics, citations, credentials or unverified helpline numbers.
- [ ] Source scope, date and uncertainty are represented accurately.
- [ ] English, Hindi and Gujarati convey equivalent meaning and safety guidance.
- [ ] Clearly educational, not diagnostic or individualized medical advice.
- [ ] Instrument licensing and video/embed permissions checked.
- [ ] Crisis wording reviewed by a qualified human.
- [ ] Content validator, type-check, tests and build pass in CI.
- [ ] Content review register and changelog updated.
- [ ] Clinical sign-off claimed only after an identified qualified reviewer actually reviews the batch.

## First execution sequence

1. Complete Phase 0 inventory against the current repository.
2. Generate a coverage report without changing public content.
3. Choose one high-priority gap and verify primary sources.
4. Author one batch in the existing schema in all three languages.
5. Add tests and update review/changelog records.
6. Open one PR and inspect CI/diff; do not merge automatically.
7. Repeat, tracking completed, partial and blocked work visibly.

## Research boundary

This is a research plan and source map, not a comprehensive systematic review. It does not claim every article, textbook, guideline or video online has been read. Copyrighted source material must be summarized in original wording with attribution and links. Recheck sources before publication and arrange qualified human review.

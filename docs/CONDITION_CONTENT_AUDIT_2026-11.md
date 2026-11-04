# Condition content audit — 4 November 2026

**Repository:** `Raghavsuthar/guarat-institue-of-mental-health`  
**Audited baseline:** `main` at `48f5a73c67f0053548ed664944f4ec89e964d12c`  
**Scope:** All published records assembled by `src/data/conditions.ts` and its four imported condition batches, plus the evidence-guide registry.  
**Method:** Static source inspection, inventory of condition IDs and evidence-guide keys, targeted search for absolute outcome claims, genetic determinism, medication-safety absolutes, and diagnostic-tool accuracy claims; selected source pages opened for the targeted copy corrections.

## Executive summary

- **23/23** published condition IDs have a matching evidence-guide key in the repository snapshot.
- The existing automated content validator checks selected localized fields for non-empty English, Hindi, and Gujarati strings. It does not verify semantic translation equivalence, claim-to-source support, current guideline status, or clinical correctness.
- The evidence-guide test checks guide coverage, populated translations, and basic HTTPS/source metadata. It does not prove that each cited source supports every claim.
- Targeted copy corrections in this phase cover **14 condition records**: depression, bipolar disorder, schizophrenia, anorexia nervosa, bulimia nervosa, binge-eating disorder, ADHD, autism, social anxiety disorder, specific phobia, illness anxiety disorder, PMDD, personality-disorder overview, and perinatal/postpartum depression and anxiety.
- The remaining nine records are inventoried below and remain due for claim-by-claim source review.
- This is an editorial and source-inspection audit, **not** independent clinical sign-off or fluent clinical-language review. No reviewer credential or clinical approval is claimed.

## Full condition inventory

| Condition ID | Evidence guide | Priority | Audit finding / action |
|---|---:|---|---|
| `depression` | Present | P0 | Replaced simplified neurotransmitter/biological-cause wording and fixed heritability percentage with a multifactorial explanation. |
| `bipolar` | Present | P0 | Removed deterministic genetic percentages and overconfident single-mechanism wording; clarified that family/genetic contribution is not destiny. |
| `anxiety-gad` | Present | P1 | Genetic heritability estimate and highly specific neurocircuit explanations need source/uncertainty review. |
| `panic-disorder` | Present | P1 | Heritability percentage and “false suffocation alarm” mechanism need careful qualification and source matching. |
| `ocd` | Present | P1 | Review neurocircuit/neurochemical statements and ensure ERP recommendations reflect the cited guideline's scope and population. |
| `schizophrenia` | Present | P0 | Corrected FAQ wording that described antipsychotics as simply balancing neurotransmitters and said abrupt discontinuation almost inevitably causes relapse. |
| `ptsd` | Present | P1 | Review gene-polymorphism claims and broad statements about SSRI efficacy across all symptom clusters; verify treatment wording against trauma-focused guidance. |
| `geriatric-dementia-delirium` | Present | P0 | Review claims implying delirium is always reversible; retain emphasis on acute change, urgent medical assessment, causes, and safety. |
| `anorexia-nervosa` | Present | P0 | Removed unsupported mortality superlative and fixed heritability estimate; now describes serious medical risk without ranking claims. |
| `bulimia-nervosa` | Present | P0 | Removed fixed genetic estimate and unsupported remission percentages; retained the need for medical assessment because purging can cause serious complications. |
| `binge-eating-disorder` | Present | P1 | Removed fixed genetic and remission percentages; clarified that treatment response varies and medication is an individualized clinical decision. |
| `adhd` | Present | P1 | Removed precise heritability and medication-response claims and “normalizing neurotransmission” language; clarified specialist assessment and individual variation. |
| `autism-spectrum-disorder` | Present | P1 | Removed fixed heritability percentages and unsupported >90% diagnostic-tool accuracy claim; clarified that ADOS-2/ADI-R support but do not independently establish diagnosis. |
| `social-anxiety-disorder` | Present | P1 | Removed precise heritability and CBT-response percentages; retained CBT as an evidence-based option without promising a fixed outcome. |
| `specific-phobia` | Present | P1 | Removed near-90% cure claim and “panacea” wording; described graded exposure as a helpful option with variable response. |
| `insomnia-disorder` | Present | P1 | Review all medication, alcohol, and sleep-hygiene claims; avoid implying sleep-hygiene advice alone treats chronic insomnia. |
| `somatic-symptom-disorder` | Present | P1 | Review highly specific neuroimaging/pain-processing claims; retain respectful wording that symptoms are real and do not exclude coexisting medical illness. |
| `illness-anxiety-disorder` | Present | P1 | Removed unsupported 70–80% recovery claim; clarified that appropriate physical symptoms still require medical assessment. |
| `persistent-depressive-disorder` | Present | P1 | Review monoamine/neuroplasticity explanations and ensure chronicity, bipolar differential, and functioning are accurately represented. |
| `pmdd` | Present | P1 | Removed fixed response percentages and 24–48-hour SSRI effect claim; clarified that treatment schedules and response require individualized review. |
| `personality-disorders-overview` | Present | P1 | Removed fixed remission percentages. Preserve the explicit scope limitation that NICE CG78 is specific to borderline personality disorder, not all personality disorders. |
| `postpartum-depression-and-anxiety` | Present | P0 | Corrected blanket breastfeeding-safety language, unsupported remission and screening-detection percentages, routine-lab wording, and conflated diagnostic timing. |
| `body-dysmorphic-disorder` | Present | P1 | Review medication and cosmetic-treatment claims against BDD-specific evidence; maintain distinction between BDD and somatic symptom disorders. |

## Changes made in this phase

1. **Biological explanations:** Removed single-neurotransmitter or deterministic genetic formulations where they were presented as settled individual-level causes.
2. **Treatment outcomes:** Removed unsupported fixed cure, remission, or response percentages and replaced them with cautious descriptions of evidence-based options and variable response.
3. **Medication discontinuation:** Replaced inevitable-relapse language with a risk-based explanation and advice to discuss changes with the treating clinician.
4. **Autism assessment:** Clarified that structured tools contribute to a comprehensive assessment and must not be used alone to diagnose autism.
5. **Perinatal safety:** Replaced blanket statements about medication being completely safe during breastfeeding with individualized consideration of maternal symptoms, previous response, infant factors, benefits, and risks.
6. **Screening and investigations:** Clarified that screening is not diagnosis and that laboratory investigations should be guided by clinical history/examination rather than described as mandatory for everyone.

## Sources opened for targeted corrections

- WHO, *Depressive disorder (depression)*, 11 September 2026: https://www.who.int/news-room/fact-sheets/detail/depression — describes depression as a complex interaction of social, psychological, and biological factors.
- WHO, *mhGAP guideline for mental, neurological and substance use disorders*, third edition, 20 November 2023: https://www.who.int/publications-detail-redirect/9789240084278 — evidence-based guidance for MNS conditions, including psychosis, bipolar disorders, eating disorders, and self-harm.
- NICE, *Bipolar disorder: assessment and management* (CG185), last updated 2 September 2025: https://www.nice.org.uk/guidance/cg185 — includes current recommendations and updated valproate safety information.
- NICE, *Eating disorders: recognition and treatment* (NG69): https://www.nice.org.uk/guidance/ng69 — covers physical-risk assessment and treatment approaches for anorexia, bulimia, and binge-eating disorder.
- NICE, *ADHD: diagnosis and management* (NG87): https://www.nice.org.uk/guidance/ng87 — states that rating scales alone do not establish diagnosis and describes specialist assessment and ongoing review.
- NICE, *Autism spectrum disorder in under 19s: recognition, referral and diagnosis* (CG128): https://www.nice.org.uk/guidance/cg128 — states that an autism-specific diagnostic tool must not be relied on alone.
- NICE, *Social anxiety disorder: recognition, assessment and treatment* (CG159): https://www.nice.org.uk/guidance/cg159 — supports structured CBT and individualized assessment.
- NICE, *Obsessive-compulsive disorder and body dysmorphic disorder: treatment* (CG31): https://www.nice.org.uk/guidance/cg31 — describes ERP/CBT and treatment decisions by impairment and preference.
- ACOG, *Treatment and Management of Mental Health Conditions During Pregnancy and Postpartum* (CPG No. 5), June 2023, with a clinical practice update listed in October 2025: https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/treatment-and-management-of-mental-health-conditions-during-pregnancy-and-postpartum — guidance on medication benefits/risks during pregnancy and lactation.
- ACOG, *Screening and Diagnosis of Mental Health Conditions During Pregnancy and Postpartum* (CPG No. 4), June 2023: https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum — scope includes depression, anxiety, bipolar disorder, suicidality, and postpartum psychosis.
- NHS, *Phobias — treatment*, page reviewed 11 March 2026: https://www.nhs.uk/mental-health/conditions/phobias/treatment/ — describes treatment as helping manage symptoms, not a guaranteed cure.

## Remaining work and limitations

- Complete claim-by-claim source verification for every field in all 23 conditions.
- Verify source links, source dates, and scope for each evidence-guide finding; a source URL being present does not establish claim support.
- Arrange fluent clinical-language review of Hindi and Gujarati, especially emergency and medication-safety instructions.
- Obtain independent psychiatrist review before displaying any “clinically reviewed” status.
- Revisit the nine records marked pending and the remaining detailed copy in the 14 corrected records; targeted corrections do not constitute full clinical approval.
- Verify patient-facing resource listings separately against official government/service sources.

## Release status

This document records static repository findings and targeted editorial changes. It does not establish that the live website has deployed these changes, that every external link is currently reachable, or that a clinician has approved the content.

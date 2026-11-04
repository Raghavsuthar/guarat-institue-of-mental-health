# Condition content audit — Phase 2 findings (4 November 2026)

**Repository:** `Raghavsuthar/guarat-institue-of-mental-health`  
**Branch:** `improve/clinical-content-quality-phase1`  
**PR:** #2 (draft; not merged)  
**Scope:** Focused follow-up inspection of the six records previously listed as receiving no targeted copy edits: OCD, PTSD, geriatric dementia/delirium, somatic symptom disorder, persistent depressive disorder, and body dysmorphic disorder.

## Findings requiring correction or claim-level verification

### 1. OCD — unsupported response rates and overly categorical neurobiology

The patient-facing copy states that combined ERP and SSRI treatment produces a 65–75% response rate, repeats a similar percentage in the evidence highlights, and describes OCD as a neurocircuit disorder "rooted in" CSTC abnormalities. The current cited NICE CG31 recommendations support ERP/CBT and SSRIs according to functional impairment, including combined treatment for severe impairment, but the inspected recommendations do not substantiate the page's specific 65–75% figure. NICE also describes delayed SSRI onset (up to 12 weeks) and monitoring needs.

**Action:** Remove the unqualified percentage unless the exact population, outcome definition, study and follow-up are mapped to a cited source. Reframe the neurobiology as an area of research involving interacting circuit and neurotransmitter systems, not a settled single causal explanation. Check all illustrative examples for invented precise symptom-reduction percentages.

Source: NICE CG31, recommendations 1.5.1–1.5.3 — https://www.nice.org.uk/guidance/cg31/chapter/Recommendations

### 2. PTSD — neurobiological certainty and treatment-scope review

The copy describes specific imaging findings and neuroendocrine changes in causal, categorical language. It also requires a field-by-field review of treatment statements so that trauma-focused CBT and EMDR are presented as evidence-based options within their recommended populations and timing, rather than implying a universal treatment sequence or guaranteed outcome.

**Action:** Qualify group-level neurobiology and remove deterministic wording where the evidence does not support individual-level inference. Map every treatment claim to a PTSD-specific guideline and population.

Sources:
- NICE NG116, adult trauma-focused CBT recommendations — https://www.nice.org.uk/guidance/ng116/chapter/recommendations
- NICE NG116, EMDR and medication recommendations — https://www.nice.org.uk/guidance/ng116/chapter/recommendations

### 3. Geriatric dementia/delirium — high-priority recovery overclaims

The recovery-outlook text says delirium resolves to premorbid baseline in 80–90% of cases and late-life depression reaches full remission in up to 70%. The same record repeats an 80–90% delirium reversibility figure in its evidence highlights and translations. These figures are not adequately tied to a clearly defined population, outcome, timeframe or source in the record. The language risks implying that delirium is predictably or completely reversible.

NICE describes delirium as usually temporary, but specifically recommends re-evaluating causes and assessing for possible dementia when it does not resolve. This is incompatible with presenting complete recovery as an assured or near-universal outcome.

**Action:** Remove or precisely source and qualify the percentages. State that delirium is an acute condition that requires prompt assessment and treatment of underlying causes, that recovery varies, and that persistent symptoms require reassessment and follow-up.

Source: NICE CG103, delirium recommendations (including 1.7.1, 1.7.5 and 1.8.1) — https://www.nice.org.uk/guidance/cg103/chapter/Recommendations

### 4. Persistent depressive disorder — unsupported remission and prognosis statistics

The recovery outlook claims approximately 65–75% achieve substantial response or full remission; an evidence highlight claims over 70% remission; another claims up to 75% develop superimposed major depressive episodes. These statements combine different outcomes and appear without sufficient population, denominator, follow-up and source mapping. The copy also makes strong claims about neuroplasticity and recurrence prevention.

NICE NG222 recommends treatment choices for chronic depressive symptoms, including CBT focused on chronic symptoms and further-line options based on response and clinical need; it does not validate these exact percentages in the inspected recommendations.

**Action:** Remove unqualified outcome statistics and the implication that maintenance treatment guarantees prevention. Describe chronicity, available treatments and variable response without a fixed remission promise. Verify the diagnostic criteria and terminology against the intended DSM-5-TR/ICD-11 framework.

Source: NICE NG222, section 1.10 (chronic depressive symptoms) — https://www.nice.org.uk/guidance/ng222/chapter/Recommendations

### 5. Somatic symptom disorder — claim-to-source review remains open

The previous audit identified highly specific neuroimaging and pain-processing explanations as needing review. This phase did not complete source verification for those claims or establish that each evidence highlight maps to the cited paper. Do not treat the presence of a citation label as proof that the cited work supports the full sentence.

**Action:** Complete claim-level mapping and ensure the page explicitly respects coexisting medical illness and does not imply symptoms are fabricated or exclusively psychiatric.

### 6. Body dysmorphic disorder — treatment wording needs guideline alignment

The page says SSRIs at "OCD-range doses" are first-line for moderate-to-severe symptoms. NICE CG31 recommends BDD-specific CBT (including ERP) for adults with mild impairment and identifies fluoxetine as the initial pharmacological option for adults with BDD because of the available evidence. The page's broader SSRI-class statement should not be presented as though it exactly reflects this guideline.

**Action:** Align the treatment summary with the BDD-specific recommendations, make impairment and shared decision-making explicit, and distinguish the BDD evidence base from OCD treatment guidance.

Source: NICE CG31, recommendations 1.5.1.5 and 1.5.3.9 — https://www.nice.org.uk/guidance/cg31/chapter/Recommendations

## Status and limitations

- This phase is a focused source-and-copy inspection, not an independent clinical review.
- No changes to condition copy are made by this report alone.
- The six records remain open for correction and complete claim-to-source mapping; the other 17 records also remain subject to the full review described in the Phase 1 audit.
- Hindi and Gujarati clinical-language review remains outstanding.
- No clinical-review badge, approval status, or reviewer credential should be displayed.
- The repository's automated tests validate selected structural and wording patterns only; they cannot establish clinical correctness or semantic translation parity.

## Verification

The Phase 1 PR head `b46d84578e7b6a9f6977789d45513d377329a6c9` was checked during this follow-up. GitHub Actions reported success for CI & Quality Assurance run `41775494807` and Browser and Accessibility Smoke Tests run `41775494851`. These results apply to that commit and do not verify any later changes.

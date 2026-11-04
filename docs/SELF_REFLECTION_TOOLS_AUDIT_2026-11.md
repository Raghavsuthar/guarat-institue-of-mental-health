# Self-reflection tools: implementation and clinical-content audit

**Date:** 4 November 2026  
**Branch:** `fix/self-reflection-scales-functional-and-safe`  
**Scope:** Ten interactive tools displayed by the Self-Reflection page.

## Functional behaviour

The modal now synchronizes its selected tool with the card that opened it, clears answers/results when a new tool is selected, exposes an accessible dialog title and selected states, and shows answer progress. Browser coverage exercises opening, answering every question, viewing results, closing, switching tools, and launching in Hindi and Gujarati.

## Instrument identity and scoring safeguards

| Tool shown | Implementation status |
|---|---|
| PHQ-9 | Nine-item educational adaptation; wording/localized versions require comparison against the authorized original before calling this a validated localized PHQ-9 |
| GAD-7 | Seven-item educational adaptation; verify exact wording and translations against the authorized instrument before claiming validated localization |
| Mood pattern reflection | Nine adapted questions; explicitly not the full MDQ and must not use MDQ criteria |
| Alcohol use reflection | Adapted questions; explicitly not AUDIT-C. Current common answer anchors are not the official item-specific AUDIT-C response anchors |
| ASRS-v1.1 Part A | Six items; now applies item-specific frequency thresholds (items 1–3: sometimes or more; items 4–6: often or more) and counts positive items. Four or more positive items indicates a positive screen, not a diagnosis |
| Insomnia Severity Index | Seven-item educational implementation; compare exact wording, response anchors and interpretation against the authorized ISI before claiming validated localization |
| DAST-10 | Ten yes/no items; item 3 is reverse scored in the total |
| PTSD symptom reflection | Five adapted items; explicitly not the PC-PTSD-5. The official trauma-exposure gate and instrument validation have not been established here |
| SCOFF | Five-item educational implementation; confirm exact wording and approved translation before representing localized copies as validated |
| Postpartum mood reflection | Five adapted questions; explicitly not the EPDS (which has ten items) |

## Important clinical limitations

- All tools are presented for education and reflection, not diagnosis or treatment decisions.
- The adapted mood, alcohol, PTSD and postpartum tools must not be interpreted with the original instruments' clinical cut-offs.
- The ASRS Part A scoring logic is item-threshold based, not a simple raw sum. A positive screen should lead to a comprehensive assessment; it does not establish ADHD.
- DAST-10 item 3 has the opposite scoring direction to the other yes/no items.
- The current common answer-option data model is not sufficient to faithfully reproduce every instrument's item-specific response anchors (notably AUDIT-C). This requires a per-question response-option model before exact validated instruments can be represented.
- Hindi and Gujarati content needs review by fluent clinical-language reviewers. Structural localization tests do not establish semantic equivalence or psychometric validity.
- Verify permissions/licensing and the appropriate validated language versions before publishing exact questionnaire reproductions.

## Sources for subsequent instrument-level verification

- PHQ-9: Kroenke K, Spitzer RL, Williams JBW. The PHQ-9. *J Gen Intern Med.* 2001;16:606–613. https://doi.org/10.1046/j.1525-1497.2001.016009606.x
- GAD-7: Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder. *Arch Intern Med.* 2006;166:1092–1097. https://doi.org/10.1001/archinte.166.10.1092
- ASRS: Kessler RC et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS). *Psychol Med.* 2005;35:245–256. https://doi.org/10.1017/S0033291704002892
- AUDIT: WHO, AUDIT: The Alcohol Use Disorders Identification Test — Guidelines for Use in Primary Care. https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a
- DAST-10: Skinner HA. The Drug Abuse Screening Test. *Addict Behav.* 1982;7:363–371. https://doi.org/10.1016/0306-4603(82)90005-3
- PC-PTSD-5: Prins A et al. The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5). https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp
- ISI: Bastien CH, Vallières A, Morin CM. Validation of the Insomnia Severity Index. *Sleep Med.* 2001;2:297–307. https://doi.org/10.1016/S1389-9457(00)00065-4
- SCOFF: Morgan JF, Reid F, Lacey JH. The SCOFF questionnaire. *BMJ.* 1999;319:1467–1468. https://doi.org/10.1136/bmj.319.7223.1467
- EPDS: Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression. *Br J Psychiatry.* 1987;150:782–786. https://doi.org/10.1192/bjp.150.6.782
- MDQ: Hirschfeld RMA et al. Development and validation of a screening instrument for bipolar spectrum disorder. *Am J Psychiatry.* 2000;157:1873–1875. https://doi.org/10.1176/appi.ajp.157.11.1873

This audit records implementation boundaries; it is not a clinical validation or translation approval.

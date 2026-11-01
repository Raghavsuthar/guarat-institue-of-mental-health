# Educational Video Curation Checklist & Integration Guide
**Project:** Gujarat Institute of Mental Health — Public Psychiatry & Mental Health Education
**Content curator:** Gujarat Institute of Mental Health, DNB Psychiatry resident; independent clinical review is pending

---

## 📌 Clinical Safety & Licensing Standards for Videos
To safeguard patient safety and ensure clinical integrity:
1. **No Speculative or Unvetted Videos:** Video IDs must never be fabricated. Only officially verified, peer-reviewed, or professionally authored educational videos should be embedded.
2. **Recommended Sources:**
   - World Health Organization (WHO) Mental Health series
   - NIMHANS (National Institute of Mental Health and Neurosciences, Bengaluru)
   - NHS UK / Royal College of Psychiatrists (RCPsych)
   - American Psychiatric Association (APA) Patient Education
   - MedCircle / Osmosis / Psych2Go (clinically verified episodes only)
   - Verified educational videos authored or narrated by licensed psychiatrists
3. **Strict Clinical Constraints:**
   - No depiction of self-harm methods or graphic crisis moments.
   - No fear-mongering regarding psychotropic medications.
   - Respects cultural sensitivities in Indian healthcare (multilingual availability in Hindi and Gujarati preferred whenever feasible).
4. **Privacy-Preserving Embed:**
   - All videos play via `YouTubeEmbed.tsx` using `youtube-nocookie.com`.
   - Uses click-to-play with lazy thumbnail facades (zero iframes or third-party cookies loaded prior to explicit user intent).

---

## 🔎 Audit Findings & Priority Queue (2026-10-20)

The condition library's video field was unpopulated for its core entries; the detail modal already supported click-to-play YouTube embeds, but the condition data had placeholder TODOs rather than curated IDs. The substance detail view did not yet render educational videos.

### Highest-priority gaps remaining

| Priority | Condition/topic | Current status | Next action |
|---|---|---|---|
| P1 | Bipolar disorder | Missing verified video | Select a patient-facing video from APA/NIMHANS/NHS; do not reuse general awareness content without review. |
| P1 | Panic disorder / panic attacks | Missing verified video | Find an evidence-based explainer that demystifies physical symptoms without implying all chest symptoms are anxiety. |
| P1 | Schizophrenia | Official NIMH recording linked externally | Confirm recording playback, captions and regional accessibility before considering direct embedding. |
| P1 | Alcohol use disorder | Integrated | NIH/NIAAA treatment-options video; ensure the text still emphasizes medically supervised withdrawal. |
| P1 | Opioid use disorder | Integrated | APA educational overview. |
| P2 | Tobacco/nicotine and cannabis use | Missing verified videos | Curate distinct, substance-specific education; avoid unverified detox or medication claims. |
| P2 | PTSD, dementia/delirium, postpartum depression | Missing verified videos | Prioritize trauma-informed and caregiver-safe content from recognized health organizations. |

**Verified embeds added in this change:** APA depression overview; ADAA anxiety overview; ADAA/IOCDF ERP overview; NIH/NIAAA alcohol-use-disorder treatment overview; APA opioid-use-disorder overview. Source pages confirmed the publisher, title and topic. These are English-language selections; localized versions remain a separate review task.

---

## 📋 Comprehensive Video TODO Checklist

### 1. Psychiatric Conditions

| Condition ID | Clinical Name | Suggested Video Topic | Status | Target YouTube ID |
|---|---|---|---|---|
| `depression` | Major Depressive Disorder | Clinical Depression: Symptoms, Brain Biology & Hope | ✅ Integrated | `yEGVmiudF-o` — [APA: What is depression?](https://www.youtube.com/watch?v=yEGVmiudF-o) |
| `bipolar` | Bipolar Disorder | Understanding Bipolar I & II: Manic vs Depressive Phases | ⏳ Pending | `// TODO(video): Bipolar disorder cycle, mood stabilization, and family role` |
| `dysthymia` | Persistent Depressive Disorder | Chronic Low-Grade Depression (Dysthymia) vs Major Depression | ⏳ Pending | `// TODO(video): PDD overview and long-term psychological scaffolding` |
| `cyclothymia` | Cyclothymic Disorder | Cyclothymia: Managing Chronic Mood Fluctuations | ⏳ Pending | `// TODO(video): Cyclothymic disorder diagnosis and daily tracking` |
| `gad` | Generalized Anxiety Disorder | How Chronic Worry Affects the Body & Brain | ✅ Integrated | `gkSypHQ-a9g` — [ADAA: Anxiety & Anxiety Disorders](https://www.youtube.com/watch?v=gkSypHQ-a9g) |
| `panic` | Panic Disorder & Agoraphobia | Anatomy of a Panic Attack & The Adrenaline Loop | ⏳ Pending | `// TODO(video): Panic sensations demystified and somatic grounding` |
| `social_anxiety` | Social Anxiety Disorder | Social Anxiety: Cognitive Restructuring & Exposure | ⏳ Pending | `// TODO(video): Social anxiety vs introversion and behavioral exposure` |
| `specific_phobia` | Specific Phobias | Phobias and Systematic Desensitization | ⏳ Pending | `// TODO(video): Systematic desensitization for specific phobias` |
| `agoraphobia` | Agoraphobia | Agoraphobia: Breaking the Fear of Public / Open Spaces | ⏳ Pending | `// TODO(video): Agoraphobia recovery steps and panic loop interruption` |
| `ocd` | Obsessive-Compulsive Disorder | The OCD Cycle (Obsessions, Anxiety, Compulsions) & ERP | ✅ Integrated | `EJcIwcIBMPw` — [ADAA/IOCDF: What is ERP like for Contamination OCD](https://www.youtube.com/watch?v=EJcIwcIBMPw) |
| `body_dysmorphic` | Body Dysmorphic Disorder | BDD: Perception, Shame, and Evidence-Based Therapy | ⏳ Pending | `// TODO(video): BDD clinical reality vs cosmetic dissatisfaction` |
| `hoarding` | Hoarding Disorder | Hoarding Disorder: Cognitive Processing & Compassionate Support | ⏳ Pending | `// TODO(video): Hoarding psychology and safety-first family approach` |
| `trichotillomania` | Trichotillomania (Hair Pulling) | Body-Focused Repetitive Behaviors & Habit Reversal | ⏳ Pending | `// TODO(video): Habit Reversal Training for hair-pulling / skin-picking` |
| `schizophrenia` | Schizophrenia | Understanding Psychosis, Dopamine, and Antipsychotic Care | 🔗 Official video page | [NIMH: Understanding Schizophrenia recording](https://www.nimh.nih.gov/news/events/2023/facebook-live-understanding-schizophrenia) — linked externally; no unverified ID embedded |
| `schizoaffective` | Schizoaffective Disorder | Schizoaffective Disorder: Dual Diagnosis of Mood & Psychosis | ⏳ Pending | `// TODO(video): Schizoaffective management, sleep hygiene, and mood stability` |
| `delusional` | Delusional Disorder | Fixed Non-Bizarre Beliefs and Compassionate Clinical Engagement | ⏳ Pending | `// TODO(video): Delusional disorder clinical approach and therapeutic alliance` |
| `ptsd` | Post-Traumatic Stress Disorder | Trauma, The Amygdala, and Trauma-Informed Therapies | ⏳ Pending | `// TODO(video): PTSD trauma loop, hyperarousal, and EMDR/trauma-focused CBT` |
| `complex_ptsd` | Complex PTSD (C-PTSD) | Chronic Interpersonal Trauma and Emotional Regulation | ⏳ Pending | `// TODO(video): C-PTSD developmental impact and relational recovery` |
| `adjustment` | Adjustment Disorder | Navigating Severe Life Stressors & Acute Reactive Grief | ⏳ Pending | `// TODO(video): Adjustment disorder vs clinical depression` |
| `dementia_alzheimers` | Alzheimer's & Related Dementias | Cognitive Decline, Memory Networks, and Caregiver Support | ⏳ Pending | `// TODO(video): Alzheimer's staging, behavioral management, and caregiver wellbeing` |
| `delirium` | Acute Delirium in the Elderly | Medical Emergency of Sudden Confusion in Older Adults | ⏳ Pending | `// TODO(video): Delirium vs Dementia: Recognizing acute medical emergencies` |
| `geriatric_depression` | Late-Life Depression | Pseudodementia, Vascular Depression, and Senior Mental Health | ⏳ Pending | `// TODO(video): Late-life depression, physical illness overlap, and safe pharmacotherapy` |
| `anorexia` | Anorexia Nervosa | Starvation Biology, Body Image Distortion, and Re-feeding | ⏳ Pending | `// TODO(video): Anorexia medical dangers and multidisciplinary recovery team` |
| `bulimia` | Bulimia Nervosa | Binge-Purge Cycle, Electrolyte Balance, and CBT-E | ⏳ Pending | `// TODO(video): Bulimia cycle and nutritional stabilization` |
| `binge_eating` | Binge Eating Disorder | Loss of Control Eating, Neurobiology, and Non-Judgmental Care | ⏳ Pending | `// TODO(video): Binge eating disorder vs emotional eating` |
| `adhd_adult` | Adult ADHD | Executive Dysfunction, Dopamine, and Life Structuring | ⏳ Pending | `// TODO(video): Adult ADHD diagnostic nuance and multimodal management` |
| `autism_spectrum` | Autism Spectrum Condition | Neurodiversity, Sensory Processing, and Social Scaffolding | ⏳ Pending | `// TODO(video): Adult and adolescent autism understanding and sensory wellness` |
| `insomnia` | Chronic Insomnia Disorder | Sleep Architecture, Hyperarousal, and CBT-I Protocol | ⏳ Pending | `// TODO(video): CBT for Insomnia (CBT-I) sleep restriction and stimulus control` |
| `somatization` | Somatic Symptom Disorder | Brain-Body Signaling, Central Sensitization, and Relief | ⏳ Pending | `// TODO(video): Somatic symptom disorder: Real physical pain without structural organ damage` |
| `illness_anxiety` | Illness Anxiety Disorder | Health Anxiety, Reassurance Traps, and Cognitive Reappraisal | ⏳ Pending | `// TODO(video): Health anxiety loop and stopping cyberchondria/reassurance cycles` |
| `bpd` | Borderline Personality Disorder | Emotion Dysregulation, Fear of Abandonment, and DBT | ⏳ Pending | `// TODO(video): Dialectical Behavior Therapy (DBT) and emotional regulation for BPD` |
| `postpartum_depression` | Postpartum Depression | Perinatal Hormones, New Mother Guilt, and Safe Treatment | ⏳ Pending | `// TODO(video): Postpartum depression vs baby blues, lactation-safe psychiatric care` |

---

### 2. Evidence-Based Treatments & Psychotherapies

| Modality ID | Therapy Name | Suggested Video Topic | Status | Target YouTube ID |
|---|---|---|---|---|
| `cbt` | Cognitive Behavioral Therapy | The CBT Thought-Emotion-Behavior Triangle in Practice | ⏳ Pending | `// TODO(video): CBT session walkthrough: automatic thoughts to balanced thoughts` |
| `erp` | Exposure & Response Prevention | How ERP Retrains the Brain in OCD & Severe Phobias | ⏳ Pending | `// TODO(video): Exposure and Response Prevention (ERP) protocol and habituation curve` |
| `dbt` | Dialectical Behavior Therapy | DBT Skills: Distress Tolerance, Mindfulness, Emotional Regulation | ⏳ Pending | `// TODO(video): DBT biosocial theory and 4 core skill modules` |
| `supportive` | Supportive Psychotherapy | Therapeutic Alliance, Active Listening & Ego Scaffolding | ⏳ Pending | `// TODO(video): Supportive counseling principles and crisis de-escalation` |
| `family` | Family & Caregiver Psychoeducation | Overcoming High Expressed Emotion (EE) at Home | ⏳ Pending | `// TODO(video): Reducing caregiver burden and supportive communication strategies` |
| `mi` | Motivational Interviewing | Resolving Ambivalence in Substance Use & Habit Change | ⏳ Pending | `// TODO(video): Motivational interviewing stages of change and open collaboration` |
| `ba` | Behavioral Activation | Behavioral Activation for Depression: Action Precedes Motivation | ⏳ Pending | `// TODO(video): Graded task assignment and values-based behavioral scheduling` |
| `ipt` | Interpersonal Psychotherapy | Healing Depression Through Grief, Disputes, and Role Transitions | ⏳ Pending | `// TODO(video): Interpersonal psychotherapy focus areas` |
| `act` | Acceptance & Commitment Therapy | Psychological Flexibility, Defusion, and Committed Action | ⏳ Pending | `// TODO(video): ACT hexaflex and accepting uncomfortable inner experiences` |
| `ect` | Modern Electroconvulsive Therapy | Demystifying Modern ECT: Anesthesia, Safety, and High Efficacy | ⏳ Pending | `// TODO(video): Modern modified ECT under general anesthesia: Facts vs cinematic myths` |
| `rtms` | Repetitive TMS | How Magnetic Pulses Stimulate Dormant Prefrontal Circuits | ⏳ Pending | `// TODO(video): rTMS clinic walkthrough: non-invasive neurostimulation without anesthesia` |

---

### 3. Psychotropic Medication Classes

| Medication ID | Class Name | Suggested Video Topic | Status | Target YouTube ID |
|---|---|---|---|---|
| `ssri_snri` | Antidepressants (SSRIs / SNRIs) | How SSRIs Work: Synaptic Reuptake & Neuroplasticity Timeline | ⏳ Pending | `// TODO(video): SSRI mechanism of action, latency period (2-4 weeks), and safe tapering` |
| `antipsychotics` | Antipsychotic Medications | Dopamine D2 Pathways, Positive/Negative Symptoms & Metabolic Safety | ⏳ Pending | `// TODO(video): Second-generation atypical antipsychotics and ongoing physical health monitoring` |
| `mood_stabilizers` | Mood Stabilizers (Lithium, Valproate) | Cellular Signaling, Neuroprotection, and Routine Blood Level Checks | ⏳ Pending | `// TODO(video): Lithium and mood stabilizer safety: hydration, lab tests, and preventing relapse` |
| `anxiolytics` | Anxiolytics & Hypnotics (BZDs) | GABA-A Receptor Transmission: Acute Short-Term Relief vs Dependence Risk | ⏳ Pending | `// TODO(video): Safe benzodiazepine usage, short-term crisis indications, and avoiding tolerance` |
| `adhd_meds` | ADHD Medications (Stimulants / Non-Stimulants) | Prefrontal Dopamine & Norepinephrine Tuning for Attention & Impulse Control | ⏳ Pending | `// TODO(video): ADHD psychopharmacology: How stimulants calm distractibility` |
| `anticraving` | Anti-Craving & Substance Use Pharmacotherapy | Opioid / Alcohol Neurocircuitry, Relapse Prevention & Naltrexone/Acamprosate | ⏳ Pending | `// TODO(video): Anti-craving medications: Medication-Assisted Treatment (MAT) principles` |

---

### 4. Substance Use Disorders — Priority Integrations

| Substance ID | Topic | Status | Verified Video |
|---|---|---|---|
| `alcohol` | Alcohol use disorder treatment options | ✅ Integrated | [NIH/NIAAA: Treatment options for AUD](https://www.youtube.com/watch?v=SZhXdVs1Mmo) |
| `opioids` | Opioid use disorder overview | ✅ Integrated | [APA: What is Opioid Use Disorder?](https://www.youtube.com/watch?v=CCLbKGKsp18) |
| `bipolar` | Bipolar disorder overview | ⏳ Pending | No video ID added until a suitable video is verified on a trusted publisher page. |

**Verification rule:** A YouTube ID is only embedded when the publisher/title/topic were confirmed from a reputable source page. Other conditions remain pending rather than receiving guessed IDs. English-language videos are currently used; Hindi/Gujarati versions should be added only after publisher, content, and captions are checked.

## 🛠️ How to Add a Video to Any Entry

When you have identified a high-quality educational video:
1. Copy the 11-character YouTube video ID (e.g., from `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`).
2. Open the corresponding data file (e.g., `src/data/treatments/cbt_erp_dbt.ts` or `src/data/conditions.ts`).
3. Add or update the property:
   ```typescript
   youtubeVideoId: 'dQw4w9WgXcQ',
   ```
   Or for multiple curated videos:
   ```typescript
   curatedVideoIds: ['dQw4w9WgXcQ', 'anotherVideoId'],
   ```
4. The system's `YouTubeEmbed` component will automatically render the video in `TreatmentsView`, `MedicationsView`, or `ConditionDetailModal` with a privacy-enhanced, click-to-play facade!


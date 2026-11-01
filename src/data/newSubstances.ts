import { SubstanceInfo } from '../types';

export const newSubstancesData: SubstanceInfo[] = [
  // 1. Sedatives & Hypnotics (Benzodiazepines / Sleeping pill misuse)
  {
    id: 'sedatives-hypnotics',
    slug: 'sedatives-and-hypnotics-misuse',
    name: {
      en: 'Sedatives & Hypnotics (Benzodiazepine / Sleeping Pill Misuse)',
      hi: 'नींद की गोलियां और शामक दवाएं (बेंजोडायजेपाइन निर्भरता)',
      gu: 'ઊંઘની ગોળીઓ અને શામક દવાઓનું વ્યસન (બેન્ઝોડાયઝેપાઇન)',
    },
    medicalTerms: {
      en: 'Sedative, Hypnotic, or Anxiolytic Use Disorder (ICD-11: 6C43)',
      hi: 'शामक और निद्राजनक दवाओं पर निर्भरता',
      gu: 'ઊંઘની દવાઓ પર નિર્ભરતા',
    },
    whatIsIt: {
      en: 'Sedative and hypnotic use disorder develops when prescription medications designed for short-term anxiety or acute insomnia (such as Alprazolam, Clonazepam, Lorazepam, or Zolpidem) are taken for prolonged periods, at escalating doses, or without medical supervision.',
      hi: 'जब चिंता या अनिद्रा के लिए दी जाने वाली नींद व शांत करने वाली दवाएं (जैसे अल्प्राजोलम, क्लोनाजेपाम, लोराजेपाम आदि) बिना डॉक्टर की सलाह के, लंबे समय तक या ज्यादा मात्रा में ली जाने लगती हैं, तो यह गंभीर लत बन जाती है।',
      gu: 'જ્યારે ડૉક્ટરની સલાહ વિના કે વધુ માત્રામાં લાંબા સમય સુધી ઊંઘની ગોળીઓ (જેમ કે અલ્પ્રાઝોલામ, ક્લોનાઝેપામ) લેવાની આદત પડી જાય તેને શામક દવાઓનું વ્યસન કહે છે.',
    },
    whyAddictive: {
      en: 'These agents strongly potentiate GABA-A receptors, calming the central nervous system rapidly. However, brain neuroadaptation occurs within weeks, downregulating natural GABA receptors and creating profound tolerance, rebound anxiety, and severe physical dependence.',
      hi: 'ये दवाएं दिमाग के गाबा (GABA) रिसेप्टर्स को उत्तेजित करके तुरंत शांति देती हैं। कुछ ही हफ्तों में मस्तिष्क इनका आदी हो जाता है, जिससे दवा न लेने पर बेचैनी और अनिद्रा पहले से कई गुना बढ़ जाती है।',
      gu: 'આ દવાઓ મગજને ક્ષણિક શાંતિ આપે છે પરંતુ થોડા જ અઠવાડિયામાં મગજ ટેવાઈ જતાં ગોળી વગર ઊંઘ આવવી અસંભવ બની જાય છે અને બેચેની ખૂબ વધી જાય છે.',
    },
    brainBodyEffects: {
      en: 'Drowsiness, impaired psychomotor coordination, anterograde amnesia (memory blackouts), slowed reaction time, increased falls/fractures in the elderly, and respiratory depression.',
      hi: 'सुस्ती, याददाश्त की कमजोरी, ध्यान भटकना, लड़खड़ाहट, बुजुर्गों में गिरने व हड्डी टूटने का खतरा और सांस धीमी होना।',
      gu: 'સુસ્તી, યાદશક્તિ નબળી પડવી, ચાલવામાં લથડાવું, વૃદ્ધોમાં પડી જવાનું જોખમ અને શ્વાસ ધીમો પડવો.',
    },
    problematicUseSigns: {
      en: [
        'Taking sleeping pills every single night for months without psychiatric re-evaluation',
        'Increasing the dose independently because the original pill "stopped working"',
        'Panicking if the pill strip is not physically beside the bed or during travel',
        'Visiting multiple pharmacies or clinics to procure tablets without a fresh prescription',
        'Combining sleeping tablets with alcohol to achieve stronger sedation',
      ],
      hi: [
        'महीनों या सालों तक हर रात बिना डॉक्टर से पूछे नींद की गोली खाना',
        'असर कम होने पर अपने आप खुराक (Dose) बढ़ाते जाना',
        'बिस्तर के पास गोली न होने पर अत्यधिक घबराहट होना',
        'अलग-अलग मेडिकल स्टोर से बिना पर्ची के गोलियां जुगाड़ने की कोशिश करना',
        'गहरी नींद के लिए शराब के साथ गोली मिलाकर खाना',
      ],
      gu: [
        'મહિનાઓ સુધી રોજ રાત્રે ડૉક્ટરને પૂછ્યા વગર ઊંઘની ગોળી લેવી',
        'અસર ન થતાં જાતે જ ડોઝ વધારી દેવો',
        'ગોળી વગર સૂવા જતાં જ ગભરાટ થવો',
        'જુદા જુદા મેડિકલ સ્ટોરમાંથી છૂપી રીતે ગોળીઓ ખરીદવી',
        'દારૂ સાથે ઊંઘની ગોળી લેવી',
      ],
    },
    dependenceSigns: {
      en: [
        'Profound rebound insomnia and agonizing daytime panic if a single dose is missed',
        'Physical tremors, sweating, auditory/visual hypersensitivity during missed doses',
        'Inability to function or relax without the medication in the bloodstream',
      ],
      hi: [
        'एक भी दिन गोली न मिलने पर भयानक बेचैनी, पसीना छूटना और रात भर आंख न लगना',
        'हाथों में कंपन और आवाजों या रोशनी से डर लगना',
        'गोली के बिना सामान्य महसूस न कर पाना',
      ],
      gu: [
        'એક દિવસ ગોળી ન મળે તો આખી રાત તડપવું અને ભારે ગભરાટ થવો',
        'હાથ ધ્રૂજવા અને શરીરમાં પરસેવો વળી જવો',
        'દવા વિના સામાન્ય દિનચર્યા ન થઈ શકવી',
      ],
    },
    withdrawalSymptoms: {
      en: [
        'Agonizing rebound anxiety and severe total insomnia',
        'Autonomic hyperarousal: tachycardia, sweating, hypertension, severe tremors',
        'Sensory distortions and depersonalization',
        'Life-threatening grand mal epileptic seizures',
        'Delirium tremens-like confused agitated psychosis',
      ],
      hi: [
        'भयानक घबराहट और कई रातों तक बिल्कुल नींद न आना',
        'दिल की धड़कन और ब्लड प्रेशर का बहुत बढ़ जाना, हाथ कांपना',
        'मिर्गी के गंभीर दौरे (Seizures) पड़ना जो जानलेवा हो सकते हैं',
        'मानसिक भ्रम, पागलपन जैसी बेचैनी और अजीब चीजें दिखना',
      ],
      gu: [
        'અતિશય ગભરાટ અને સળંગ રાતો સુધી ઊંઘ ન આવવી',
        'ધબકારા અને બ્લડ પ્રેશર વધવું, શરીર ધ્રૂજવું',
        'ખેંચ (આંચકી / ફિટ) આવવી જે જીવલેણ બની શકે છે',
        'માનસિક ભ્રમ અને અવાજો સંભળાવવા',
      ],
    },
    withdrawalTimeline: {
      en: 'Onset within 1-2 days for short-acting agents (Alprazolam, Lorazepam) or 3-7 days for long-acting agents (Clonazepam, Diazepam). Acute withdrawal peaks over 1-2 weeks; protracted withdrawal anxiety can persist for months if not professionally tapered.',
      hi: 'छोटी अवधि की दवाओं में 24-48 घंटों में विड्रॉल शुरू होता है; लंबी अवधि की दवाओं में 3-5 दिन बाद। अचानक बंद करने पर कभी भी दौरा पड़ सकता है।',
      gu: 'અચાનક ગોળી બંધ કરવાથી ૧ થી ૩ દિવસમાં ગંભીર આંચકી કે ખેંચ આવી શકે છે. તેથી ક્યારેય જાતે બંધ ન કરવી.',
    },
    healthRisks: {
      en: 'Fatal respiratory arrest (especially when co-ingested with alcohol or opioids), traumatic fall injuries and hip fractures in seniors, cognitive deterioration mimicking dementia, and overdose.',
      hi: 'शराब के साथ मिलाकर लेने पर सांस रुकने से मौत, बुजुर्गों में गिरकर कूल्हे की हड्डी टूटना, और याददाश्त का हमेशा के लिए कमजोर होना।',
      gu: 'દારૂ સાથે લેવાથી શ્વાસ બંધ થઈ જવો, વૃદ્ધોમાં હાડકાં ભાંગવા અને કાયમી યાદશક્તિ ગુમાવવી.',
    },
    treatmentApproach: {
      en: 'CRITICAL SAFETY RULE: NEVER STOP BENZODIAZEPINES ABRUPTLY. Professional medical tapering schedule (often transitioning to long-acting equivalents like Diazepam/Clonazepam and tapering by 10-25% every 1-2 weeks), supported by non-addictive psychiatric medications and CBT for Insomnia (CBT-I).',
      hi: 'अत्यंत महत्वपूर्ण: नींद की गोलियों को कभी भी अचानक बंद न करें! डॉक्टर की देखरेख में धीरे-धीरे (हफ्तों या महीनों में) खुराक घटाई जाती है और साथ में सुरक्षित गैर-नशे वाली दवाएं व CBT-I थेरेपी दी जाती है।',
      gu: 'મહત્વપૂર્ણ ચેતવણી: ઊંઘની ગોળીઓ ક્યારેય અચાનક બંધ કરવી નહીં! મનોચિકિત્સકની સલાહ મુજબ ધીમે ધીમે ડોઝ ઘટાડીને જ છોડાવી શકાય છે.',
    },
    relapseTriggers: {
      en: 'A bad night of sleep, acute situational panic, stress at work, or entering an old insomnia thought spiral.',
      hi: 'अचानक किसी रात नींद न आना, तनाव या पुरानी चिंता का उभरना।',
      gu: 'કોઈ રાત્રે ઊંઘ ન આવવી કે અચાનક આવેલો માનસિક તણાવ.',
    },
    faqs: [
      {
        question: {
          en: 'Can I just stop taking my sleeping pills tomorrow cold turkey?',
          hi: 'क्या मैं कल से ही अपनी नींद की गोलियां पूरी तरह बंद कर सकता हूँ?',
          gu: 'શું હું કાલથી જ ઊંઘની ગોળીઓ સાવ બંધ કરી દઉં?',
        },
        answer: {
          en: 'NO. Stopping benzodiazepines cold turkey is medically dangerous and can trigger life-threatening seizures, severe psychosis, and cardiovascular collapse. Always taper under a psychiatrist\'s guidance.',
          hi: 'बिल्कुल नहीं! नींद की गोलियां अचानक बंद करने से मिर्गी के जानलेवा दौरे पड़ सकते हैं और मानसिक संतुलन बिगड़ सकता है। हमेशा डॉक्टर की निगरानी में धीरे-धीरे बंद करें।',
          gu: 'ક્યારેય નહીં! અચાનક બંધ કરવાથી ખેંચ આવી શકે છે અને જીવનું જોખમ ઊભું થાય છે. હંમેશા ડૉક્ટરની સલાહ મુજબ જ ધીમે ધીમે ઓછી કરવી.',
        },
      },
    ],
    references: [
      { citation: 'Lader M. Benzodiazepine harm: how can it be reduced? Br J Clin Pharmacol. 2014;77(2):295-301.', source: 'British Journal of Clinical Pharmacology', year: '2014' },
      { citation: 'NICE Guidelines: Medicines associated with dependence or withdrawal symptoms. 2022.', source: 'NICE UK', year: '2022' },
    ],
    lastReviewed: '2026-08',
  },

  // 2. Inhalants & Solvents (household solvents, glue, sniffing)
  {
    id: 'inhalants',
    slug: 'inhalant-use-disorder-solvents-glue',
    name: {
      en: 'Inhalants & Solvents (Glue, Petrol, Thinner, Correction Fluid)',
      hi: 'इनहेलेंट्स और विलायक (गोंद, व्हाइटनर/सुलेचन, पेट्रोल सूंघने का नशा)',
      gu: 'ઇન્હેલન્ટ્સ અને સોલ્વન્ટ્સ (વ્હાઇટનર, ગુંદર, પેટ્રોલ સુંઘવાનો નશો)',
    },
    medicalTerms: {
      en: 'Inhalant Use Disorder (ICD-11: 6C45), Volatile Solvent Misuse',
      hi: 'इनहेलेंट यूज़ डिसऑर्डर (विलायक का नशा)',
      gu: 'સોલ્વન્ટ યુઝ ડિસઓર્ડર',
    },
    whatIsIt: {
      en: 'Inhalant misuse involves deliberately breathing in volatile hydrocarbon vapors from domestic, industrial, or commercial products (such as typing correction fluid/whitener, adhesive rubber glues like dendrite/thinner, nail polish remover, gasoline/petrol, or paint spray) to achieve rapid intoxication.',
      hi: 'सुलूशन, व्हाइटनर (इरेज़र फ्लूइड), पेट्रोल, पेंट थिनर, या फेविकोल/गोंद के रासायनिक वाष्प (Vapors) को सूंघकर नशा करना। यह विशेष रूप से गरीब बच्चों, सड़क पर रहने वाले युवाओं और स्कूल के छात्रों में बहुत खतरनाक लत के रूप में देखा जाता है।',
      gu: 'વ્હાઇટનર, ગુંદર, પેટ્રોલ કે થીનર જેવા કેમિકલ્સની વાસ સુંઘીને નશો કરવો. ખાસ કરીને કિશોરો અને શાળાના બાળકોમાં આ ઝેરી નશો ખૂબ ઝડપથી ફેલાય છે.',
    },
    whyAddictive: {
      en: 'Volatile hydrocarbons are extremely lipophilic. They cross the blood-brain barrier within seconds of inhalation, producing instantaneous central nervous system depression, euphoria, and perceptual distortion via GABA enhancement and NMDA receptor antagonism. The rapid crash reinforces repetitive sniffing.',
      hi: 'ये रसायन फेफड़ों से सीधे कुछ ही सेकंड में दिमाग की चर्बी में घुल जाते हैं और तुरंत तेज नशा देते हैं। नशा केवल कुछ मिनट रहता है, इसलिए बच्चा बार-बार इसे सूंघने का आदी हो जाता है।',
      gu: 'આ કેમિકલ્સ શ્વાસમાં લેતાં જ થોડી સેકન્ડોમાં મગજને બહેકાવી દે છે. તેનો નશો થોડી મિનિટો જ રહેતો હોવાથી બાળક વારંવાર સુંઘવા મજબૂર બને છે.',
    },
    brainBodyEffects: {
      en: 'Dizziness, slurred speech, ataxia, severe chemical burns of the airway, permanent destruction of brain white matter (myelin sheath dissolution), and profound peripheral neuropathy.',
      hi: 'चक्कर आना, लड़खड़ाना, जीभ लड़खड़ाना, फेफड़ों और गले में जलन, और मस्तिष्क के सफेद पदार्थ (White matter) का स्थायी रूप से नष्ट हो जाना।',
      gu: 'ચક્કર આવવા, જીભ લથડવી, ફેફસાં બળી જવા અને મગજના કોષોનો કાયમી નાશ થવો.',
    },
    problematicUseSigns: {
      en: [
        'Chemical odors on breath, hair, or clothing',
        'Paint or chemical stains on face, lips, fingers, or sleeves',
        'Hidden plastic bags, soaked rags, or empty correction fluid bottles in pockets/school bags',
        'Unexplained lethargy, bloodshot eyes, and runny nose ("glue-sniffer\'s rash" around mouth/nose)',
        'Sudden severe drop in school grades, truancy, and behavioral outbursts',
      ],
      hi: [
        'कपड़ों, सांस या बालों से पेट्रोल या केमिकल की दुर्गंध आना',
        'चेहरे, होंठों या उंगलियों पर स्याही, पेंट या व्हाइटनर के निशान',
        'बैग में छिपाए गए कपड़े के टुकड़े, पॉलीथिन की थैलियां या व्हाइटनर की खाली शीशियां',
        'मुंह और नाक के चारों तरफ लाल चकत्ते या दाने पड़ना (Sniffer\'s rash)',
        'पढ़ाई में अचानक भारी गिरावट और स्कूल से भागना',
      ],
      gu: [
        'કપડાં કે શ્વાસમાંથી કેમિકલ કે પેટ્રોલની વાસ આવવી',
        'મોં, હોઠ કે હાથ પર વ્હાઇટનર કે રંગના ડાઘ',
        'દફતરમાંથી પ્લાસ્ટિકની કોથળીઓ કે વ્હાઇટનરની ખાલી બોટલો મળવી',
        'નાક અને મોંની આસપાસ લાલ ચકામા કે ફોલ્લીઓ થવી',
        'અભ્યાસમાંથી અચાનક ધ્યાન હટી જવું અને ચિડચિડા થવું',
      ],
    },
    dependenceSigns: {
      en: [
        'Craving to sniff volatile substances as soon as feeling bored, stressed, or cold',
        'Needing more inhalations to get high',
        'Extreme irritability, aggressiveness, and anxiety when access to inhalants is cut off',
      ],
      hi: [
        'तनाव या ठंड लगने पर तुरंत केमिकल सूंघने की तलब होना',
        'नशा न मिलने पर अत्यधिक गुस्सा, तोड़फोड़ और आक्रामक व्यवहार',
      ],
      gu: [
        'ગમે તે રીતે કેમિકલ મેળવવાની જીદ કરવી',
        'નશો ન મળે ત્યારે તોડફોડ અને અતિશય હિંસક વર્તન કરવું',
      ],
    },
    withdrawalSymptoms: {
      en: [
        'Nausea, sweating, tachycardia, severe headache',
        'Irritability, sleep disturbance, muscle tremors, and intense cravings',
      ],
      hi: ['जी मिचलाना, पसीना आना, तेज सिरदर्द, चिड़चिड़ापन और हाथ कांपना।'],
      gu: ['ઉબકા આવવા, પરસેવો છૂટવો, માથાનો દુખાવો અને ચિડચિડાપણું.'],
    },
    withdrawalTimeline: {
      en: 'Begins within 24 to 48 hours of cessation; psychological cravings and mood swings can persist for weeks.',
      hi: 'बंद करने के 24 से 48 घंटे में लक्षण शुरू होते हैं और मानसिक तलब हफ्तों तक रह सकती है।',
      gu: 'બંધ કર્યાના ૧-૨ દિવસમાં લક્ષણો દેખાય છે અને તલપ લાંબો સમય રહે છે.',
    },
    healthRisks: {
      en: 'SUDDEN SNIFFING DEATH SYNDROME: Even on the first use, hydrocarbon sensitization of cardiac myocardium can trigger sudden fatal ventricular fibrillation. Long-term use causes irreversible brain damage (leukoencephalopathy), kidney tubular acidosis, and liver failure.',
      hi: 'सडन स्निफिंग डेथ सिंड्रोम (Sudden Sniffing Death): पहली बार सूंघने पर भी दिल की धड़कन अचानक रुकने से तुरंत मौत हो सकती है! इसके अलावा हमेशा के लिए दिमाग की नसों का सूखना, किडनी फेल होना और बहरापन।',
      gu: 'અચાનક મૃત્યુનું જોખમ (Sudden Sniffing Death): પહેલી જ વાર સુંઘવાથી હૃદયના ધબકારા થંભી જઈને તાત્કાલિક મોત થઈ શકે છે! કાયમી મગજની ખોડ અને કિડની ફેલ થવાનું જોખમ.',
    },
    treatmentApproach: {
      en: 'Urgent medical detox with cardiac monitoring (avoiding catecholamines), long-term adolescent psychiatric intervention, removal from toxic peer environments, residential child rehabilitation, and family therapy.',
      hi: 'तत्काल अस्पताल में हृदय की जांच, सुरक्षित वातावरण, बाल मनोचिकित्सक द्वारा काउंसलिंग, और बच्चे को नशेड़ी दोस्तों के समूह से दूर करना।',
      gu: 'તાત્કાલિક હોસ્પિટલમાં હૃદયની સારવાર, બાળ મનોચિકિત્સક દ્વારા કાઉન્સેલિંગ અને બાળકને ખોટી સોબતમાંથી મુક્ત કરવું.',
    },
    relapseTriggers: {
      en: 'Access to pocket money, unsupervised access to stationery or hardware shops, peer pressure, street homelessness.',
      hi: 'स्टेशनरी की दुकानों पर आसानी से व्हाइटनर मिलना, नशेड़ी दोस्तों का दबाव और अकेलापन।',
      gu: 'સરળતાથી કેમિકલ મળી જવું અને નશાખોર મિત્રોનું દબાણ.',
    },
    faqs: [
      {
        question: {
          en: 'Can sniffing glue or whitener really kill someone on their very first try?',
          hi: 'क्या पहली बार व्हाइटनर या गोंद सूंघने से भी मौत हो सकती है?',
          gu: 'શું પહેલી જ વાર સુંઘવાથી પણ મોત થઈ શકે?',
        },
        answer: {
          en: 'YES. "Sudden Sniffing Death Syndrome" occurs when hydrocarbons sensitize heart muscle cells to adrenaline. A sudden startle or exertion can instantly trigger fatal arrhythmia in a completely healthy youth.',
          hi: 'हाँ, बिल्कुल। पहली बार सूंघने पर भी दिल की धड़कन अचानक अनियंत्रित होकर रुक सकती है, जिससे स्वस्थ बच्चे की भी मौके पर ही मौत हो सकती है।',
          gu: 'હા, ચોક્કસ! આ કેમિકલથી હૃદયના ધબકારા અચાનક અનિયમિત થઈને ક્ષણભરમાં મોત થઈ શકે છે.',
        },
      },
    ],
    references: [
      { citation: 'Baydala L. Inhalant abuse. Paediatr Child Health. 2010;15(7):443-448.', source: 'Paediatrics & Child Health', year: '2010' },
      { citation: 'National Institute on Drug Abuse (NIDA). Inhalants Research Report. 2020.', source: 'NIDA', year: '2020' },
    ],
    lastReviewed: '2026-08',
  },

  // 3. Prescription Drug Misuse (Codeine cough syrups, OTC analgesics, Tramadol)
  {
    id: 'prescription-drug-misuse',
    slug: 'prescription-drug-misuse-codeine-painkillers',
    name: {
      en: 'Prescription Drug Misuse (Codeine Syrups, Tramadol, Opioid Painkillers)',
      hi: 'प्रिस्क्रिप्शन दवाओं का दुरुपयोग (कोडीन कफ सिरप, ट्रामाडोल, दर्द निवारक गोलियां)',
      gu: 'પ્રિસ્ક્રિપ્શન દવાઓનો દુરુપયોગ (કોડીન કફ સીરપ, ટ્રામાડોલ, દર્દશામક ગોળીઓ)',
    },
    medicalTerms: {
      en: 'Other Specified Substance-Related and Addictive Disorders (ICD-11: 6C4E)',
      hi: 'प्रिस्क्रिप्शन दवाओं पर निर्भरता',
      gu: 'દર્દશામક દવાઓનું વ્યસન',
    },
    whatIsIt: {
      en: 'Prescription drug misuse refers to taking pharmaceutical medications (such as codeine-containing cough syrups, Tramadol, Pregabalin, Tapentadol, or high-dose opioid analgesics) in a manner, dosage, or route not prescribed by a physician, or solely for their euphoric/sedative effects.',
      hi: 'डॉक्टर की पर्ची पर मिलने वाली दवाओं—विशेषकर कोडीन युक्त कफ सिरप, ट्रामाडोल, टॅपेंटाडोल, या प्रीगाबालिन—को बिना बीमारी के केवल नशे, सुस्ती या आनंद के लिए अधिक मात्रा में पीना या खाना।',
      gu: 'ખાંસીની કોડીનવાળી દવાઓ, ટ્રામાડોલ કે પેઇનકિલર ગોળીઓને ડૉક્ટરની સલાહ વગર માત્ર નશો કરવા માટે મોટી માત્રામાં પીવી કે ખાવી.',
    },
    whyAddictive: {
      en: 'Prescription opioids and related compounds bind to mu-opioid and GABA-modulating pathways, flooding reward circuits with dopamine while dampening emotional and physical pain. Over repeated exposures, neurotolerance escalates rapidly.',
      hi: 'ये दवाएं दिमाग के दर्द और आनंद के रिसेप्टर्स पर असर करती हैं। धीरे-धीरे दिमाग इनका आदी हो जाता है और उसी आनंद के लिए पूरी-पूरी बोतल कफ सिरप या मुट्ठी भर गोलियां खानी पड़ती हैं।',
      gu: 'આ દવાઓ મગજમાં ઝડપથી ડોપામાઇન વધારે છે. થોડા જ સમયમાં દર્દી આખો બાટલો સીરપ કે મુઠ્ઠી ભરીને ગોળીઓ ખાતો થઈ જાય છે.',
    },
    brainBodyEffects: {
      en: 'Drowsiness, mental clouding, severe chronic constipation, pupillary constriction, respiratory depression, seizures (with Tramadol overdose), and liver damage (from acetaminophen combinations).',
      hi: 'भारी नशा, कब्ज, पुतलियों का सिकुड़ना, सांस धीमी होना, ट्रामाडोल से मिर्गी के दौरे पड़ना और लिवर खराब होना।',
      gu: 'ઘેન ચડવું, ગંભીર કબજિયાત, શ્વાસ ધીમો પડવો, ટ્રામાડોલથી આંચકી આવવી અને લિવર બગડવું.',
    },
    problematicUseSigns: {
      en: [
        'Consuming multiple bottles of cough syrup in a day without any respiratory illness',
        'Buying medications from unlicensed vendors, illicit delivery channels, or online black markets',
        'Fabricating chronic pain or injuries to get doctors to write opioid prescriptions ("doctor shopping")',
        'Inability to work, study, or interact with family without taking pills or syrup',
      ],
      hi: [
        'बिना खांसी के दिन में कफ सिरप की कई बोतलें गटक जाना',
        'काले बाजार या बिना बिल के मेडिकल स्टोर से दवाएं खरीदना',
        'फर्जी दर्द का बहाना बनाकर डॉक्टरों से पर्ची लिखवाने की कोशिश करना',
        'दवा खाए बिना बिस्तर से न उठ पाना',
      ],
      gu: [
        'ખાંસી ન હોવા છતાં દિવસમાં સીરપની આખી બોટલો પી જવી',
        'કાળાબજારમાંથી દવાઓ મેળવવી',
        'દર્દના ખોટા બહાના બનાવી ડૉક્ટરો પાસેથી દવા લખાવવી',
        'દવા વગર કોઈ કામ ન કરી શકવું',
      ],
    },
    dependenceSigns: {
      en: [
        'Severe muscle aches, abdominal cramps, diarrhea, and intense agitation if access is cut off',
        'Rapidly escalating daily expenditure to purchase bulk prescription packs',
      ],
      hi: [
        'सिरप या गोली न मिलने पर बदन टूटना, दस्त, पेट में ऐंठन और भयानक बेचैनी',
        'दवाएं खरीदने के लिए घर से पैसे या सामान चोरी करना',
      ],
      gu: [
        'દવા ન મળે ત્યારે આખા શરીરમાં કળતર, ઝાડા અને અસહ્ય બેચેની થવી',
        'દવાઓ ખરીદવા માટે દેવું કરવું કે ચોરી કરવી',
      ],
    },
    withdrawalSymptoms: {
      en: [
        'Dilated pupils, rhinorrhea, lacrimation, piloerection ("gooseflesh")',
        'Severe bone and muscle aches, nausea, vomiting, diarrhea',
        'Severe insomnia, dysphoria, and uncontrollable drug craving',
      ],
      hi: ['आंखों-नाक से पानी बहना, रोंगटे खड़े होना, हड्डियों में असहनीय दर्द, उल्टी-दस्त और भयानक बेचैनी।'],
      gu: ['આંખ-નાકમાંથી પાણી વહેવું, હાડકાંમાં કળતર, ઉલટી-ઝાડા અને અતિશય અજંપો.'],
    },
    withdrawalTimeline: {
      en: 'Onset 6-12 hours after last dose; peaks at 48-72 hours; acute physical symptoms subside in 7-10 days, but cravings persist for months.',
      hi: 'दवा छोड़ने के 8-12 घंटे में विड्रॉल शुरू होता है, 3 दिन पर चरम पर होता है और 7-10 दिन में शारीरिक दर्द कम होता है।',
      gu: '૮ થી ૧૨ કલાકમાં દુખાવો શરૂ થાય છે અને અઠવાડિયા સુધી તીવ્ર શારીરિક તકલીફ રહે છે.',
    },
    healthRisks: {
      en: 'Fatal respiratory depression and overdose death; acute seizures (specifically with Tramadol / Tapentadol); toxic liver failure from paracetamol-adulterated pain medications.',
      hi: 'ओवरडोज से सांस रुकने पर मौके पर मौत; मिर्गी के दौरे पड़ना और लिवर फेल हो जाना।',
      gu: 'ઓવરડોઝથી શ્વાસ બંધ થઈ જવો, તાણ આવવી અને લિવર ફેલ થવું.',
    },
    treatmentApproach: {
      en: 'Structured inpatient or outpatient psychiatric detoxification, transition to non-opioid pain modalities, Medication-Assisted Treatment (Buprenorphine / Naltrexone) where indicated, and addiction psychotherapy.',
      hi: 'मनोचिकित्सक द्वारा सुरक्षित डिटॉक्सिफिकेशन, दर्द के सुरक्षित विकल्प, नशा-विरोधी दवाएं (जैसे नाल्ट्रैक्सोन) और मनोवैज्ञानिक काउंसलिंग।',
      gu: 'મનોચિકિત્સક દ્વારા સુરક્ષિત ડીટોક્સ, વૈજ્ઞાનિક દવાઓ દ્વારા સારવાર અને કાઉન્સેલિંગ.',
    },
    relapseTriggers: {
      en: 'Physical aches, chronic untreated back/joint pain, exposure to pharmacies, emotional stress.',
      hi: 'पुराना शारीरिक दर्द, मेडिकल स्टोर देखना और मानसिक तनाव।',
      gu: 'જૂનો શારીરિક દુખાવો, મેડિકલ સ્ટોર જોવો અને માનસિક તાણ.',
    },
    faqs: [
      {
        question: {
          en: 'Why do so many young people get hooked on cough syrups or pain pills?',
          hi: 'युवा कफ सिरप या पेनकिलर की लत में क्यों पड़ जाते हैं?',
          gu: 'યુવાનો ખાંસીની દવાઓ કે દર્દશામક ગોળીઓના રવાડે કેમ ચડી જાય છે?',
        },
        answer: {
          en: 'Because they are manufactured as medicines, many mistakenly believe they are "safer and cleaner" than street drugs. In reality, pharmaceutical opioids cause identical severe chemical dependence and lethal overdose risks.',
          hi: 'लोग सोचते हैं कि यह तो "दवा" है इसलिए सुरक्षित होगी। लेकिन वास्तव में इनमें मौजूद नशीले तत्व हेरोइन जितने ही खतरनाक होते हैं और जान ले सकते हैं।',
          gu: 'લોકો તેને માત્ર "દવા" માનીને સુરક્ષિત સમજે છે, પરંતુ આ કેમિકલ્સ પણ અન્ય ગંભીર નશાઓ જેટલા જ ઘાતક હોય છે.',
        },
      },
    ],
    references: [
      { citation: 'NIMHANS. Clinical Practice Guidelines on Management of Prescription Drug Misuse. 2021.', source: 'NIMHANS Guidelines', year: '2021' },
      { citation: 'Volkow ND, et al. Characteristics of opioid prescriptions in 2007-2016. JAMA. 2019.', source: 'JAMA', year: '2019' },
    ],
    lastReviewed: '2026-08',
  },

  // 4. Polysubstance Use (combining alcohol, sedatives, stimulants, opioids)
  {
    id: 'polysubstance-use',
    slug: 'polysubstance-use-disorder',
    name: {
      en: 'Polysubstance Use (Mixing Multiple Substances)',
      hi: 'पॉलीसबस्टेंस यूज़ (एक से अधिक नशों का खतरनाक मिश्रण)',
      gu: 'પોલીસબસ્ટન્સ યુઝ (એકસાથે અનેક નશાઓનું ઘાતક મિશ્રણ)',
    },
    medicalTerms: {
      en: 'Disorders due to use of multiple specified psychoactive substances (ICD-11: 6C4F)',
      hi: 'पॉलीसबस्टेंस डिपेंडेंस सिंड्रोम',
      gu: 'પોલીસબસ્ટન્સ ડિપેન્ડન્સ',
    },
    whatIsIt: {
      en: 'Polysubstance use involves consuming more than one psychoactive substance simultaneously or sequentially (such as drinking alcohol while taking sleeping pills, combining opioids with sedatives, or using stimulants alongside alcohol). This practice exponentially multiplies toxicities.',
      hi: 'एक साथ या थोड़े अंतराल में एक से अधिक नशों का सेवन करना (जैसे शराब के साथ नींद की गोली खाना, स्मैक/अफीम के साथ गांजा या शराब पीना, या उत्तेजक दवाओं के साथ बीयर पीना)। यह संयोजन जहर के असर को कई गुना बढ़ा देता है।',
      gu: 'એકસાથે એકથી વધુ નશાઓ કરવા (જેમ કે દારૂ સાથે ઊંઘની ગોળી લેવી કે અફીણ સાથે દારૂ પીવો). આ મિશ્રણ ઝેરની અસરને અનેક ગણી વધારી દે છે.',
    },
    whyAddictive: {
      en: 'Cross-sensitization and additive activation of multiple neurotransmitter systems (dopamine, GABA, opioid, serotonin) hijack the brain\'s reward pathways far more aggressively than single substances, creating tangled physiological and psychological dependency.',
      hi: 'अलग-अलग नशे दिमाग के कई हिस्सों को एक साथ उत्तेजित करते हैं। इससे व्यक्ति को अकेला कोई एक नशा काफी नहीं लगता और वह कई नशों के खतरनाक चक्रव्यूह में फंस जाता है।',
      gu: 'જુદા જુદા નશાઓ મગજના કેન્દ્રોને એકસાથે બગાડે છે, જેથી દર્દી એકસાથે અનેક વ્યસનોનો ગુલામ બની જાય છે.',
    },
    brainBodyEffects: {
      en: 'Profound synergy of depressant effects on the respiratory center; erratic cardiovascular strain (arrhythmias from mixing stimulants and depressants); acute multi-organ liver and kidney toxicity.',
      hi: 'सांस की गति का अचानक रुक जाना, दिल की धड़कन का अनियंत्रित होना, कोमा, और लिवर-किडनी का एक साथ फेल होना।',
      gu: 'શ્વાસ અચાનક બંધ થઈ જવો, હૃદયના અનિયમિત ધબકારા, કોમા અને લિવર-કિડની ફેઈલ થઈ જવા.',
    },
    problematicUseSigns: {
      en: [
        'Using "uppers" (stimulants/nicotine) to counter the sedation of "downers" (alcohol/benzodiazepines)',
        'Taking sleeping pills to force sleep after heavy binge drinking',
        'Co-ingesting prescription pills alongside illicit street drugs',
        'Unpredictable, explosive behavioral volatility or recurrent accidental overdoses',
      ],
      hi: [
        'शराब के नशे को कम करने के लिए सिगरेट या अन्य नशा करना, और सोने के लिए नींद की गोली खाना',
        'एक नशे के असर को दबाने के लिए दूसरा नशा लेना',
        'अत्यधिक हिंसक या भ्रमित व्यवहार करना और बार-बार अस्पताल के इमरजेंसी में पहुंचना',
      ],
      gu: [
        'એક નશાની અસર ઓછી કરવા બીજો નશો કરવો',
        'દારૂ પીધા પછી ઊંઘવા માટે ગોળીઓ ખાવી',
        'અતિશય હિંસક વર્તન અને વારંવાર ઇમરજન્સીમાં દાખલ થવું',
      ],
    },
    dependenceSigns: {
      en: [
        'Multiple distinct withdrawal syndromes occurring concurrently when substances are unavailable',
        'Total collapse of personal hygiene, employment, and relationships',
      ],
      hi: [
        'नशा न मिलने पर एक साथ कई तरह के भयानक विड्रॉल लक्षण उभरना',
        'जीवन, परिवार और कामकाज का पूरी तरह बर्बाद हो जाना',
      ],
      gu: [
        'નશો ન મળતાં અનેક પ્રકારના જીવલેણ લક્ષણો એકસાથે દેખાવા',
        'જીવન અને પરિવારનું સંપૂર્ણ પતન થવું',
      ],
    },
    withdrawalSymptoms: {
      en: [
        'Complex mixed withdrawal: severe delirium, autonomic instability, seizures, hallucinations, profound hyperpyrexia, and cardiovascular collapse.',
      ],
      hi: ['मिश्रित गंभीर विड्रॉल: मिर्गी के दौरे, मानसिक पागलपन (Delirium), तेज बुखार, और दिल की गति रुकना।'],
      gu: ['મિશ્ર ગંભીર લક્ષણો: ખેંચ આવવી, માનસિક ભ્રમ, ખૂબ તાવ અને હાર્ટ એટેકનું જોખમ.'],
    },
    withdrawalTimeline: {
      en: 'Highly unpredictable; overlapping peak withdrawal times of different half-life agents require continuous inpatient ICU/psychiatric monitoring.',
      hi: 'अत्यंत अप्रत्याशित; अलग-अलग दवाओं का असर अलग समय पर खत्म होता है, इसलिए केवल आईसीयू या विशेष नशा मुक्ति अस्पताल में ही इलाज संभव है।',
      gu: 'ખૂબ જ અણધાર્યું; દર્દીને તાત્કાલિક સ્પેશિયલ હોસ્પિટલના આઈસીયુમાં દાખલ કરવો પડે છે.',
    },
    healthRisks: {
      en: 'THE HIGHEST CAUSE OF ACCIDENTAL OVERDOSE DEATH WORLDWIDE: Alcohol + Benzodiazepines + Opioids synergistic respiratory arrest. Anoxic brain injury, sudden cardiac death, and suicide.',
      hi: 'दुनिया में सबसे ज्यादा ओवरडोज से मौतें इसी से होती हैं: शराब + नींद की गोली + अफीम का मिश्रण सांस को पूरी तरह बंद कर देता है।',
      gu: 'દુનિયામાં સૌથી વધુ નશાથી થતા મોત આના લીધે થાય છે: દારૂ + ઊંઘની ગોળીઓ + અફીણનું મિશ્રણ શ્વાસ સાવ રોકી દે છે.',
    },
    treatmentApproach: {
      en: 'MANDATORY HOSPITAL INPATIENT DETOXIFICATION: Multi-agent medical stabilization, continuous vital monitoring, sequential tapering, followed by long-term residential therapeutic community and dual-diagnosis psychiatric care.',
      hi: 'अनिवार्य अस्पताल में भर्ती (Inpatient Care): डॉक्टरों की 24 घंटे निगरानी में क्रमबद्ध डिटॉक्स, मनोवैज्ञानिक पुनर्वास और लंबे समय तक काउंसलिंग।',
      gu: 'હોસ્પિટલમાં ફરજિયાત દાખલ કરીને સારવાર: ૨૪ કલાક દેખરેખ હેઠળ ડીટોક્સિફિકેશન અને વ્યસનમુક્તિ કેન્દ્રમાં લાંબી સારવાર.',
    },
    relapseTriggers: {
      en: 'Using "just one" substance (e.g. "just beer"), which immediately lowers judgment and triggers full-blown relapse to all substances.',
      hi: 'यह सोचना कि "मैं सिर्फ बीयर पियूंगा बाकी नशा नहीं करूंगा"—एक नशा शुरू होते ही दिमाग तुरंत पुराने सभी नशों की तरफ भागता है।',
      gu: 'એવો વહેમ કે "હું માત્ર બિયર પીશ"—એક નશો શરૂ થતાં જ બધા જૂના વ્યસનો પાછા શરૂ થઈ જાય છે.',
    },
    faqs: [
      {
        question: {
          en: 'Why is mixing alcohol with sleeping tablets so deadly?',
          hi: 'शराब और नींद की गोलियों को एक साथ लेना इतना जानलेवा क्यों है?',
          gu: 'દારૂ અને ઊંઘની ગોળીઓ એકસાથે લેવી કેમ જીવલેણ છે?',
        },
        answer: {
          en: 'Both alcohol and sleeping pills depress the brain\'s respiratory control center in the brainstem. Combined, their effect is not just 1 + 1 = 2; it is a synergistic multiplier that can stop breathing silently in sleep.',
          hi: 'शराब और नींद की गोली दोनों दिमाग के सांस लेने वाले केंद्र को सुन्न कर देते हैं। एक साथ लेने पर इनका असर 10 गुना बढ़ जाता है और व्यक्ति नींद में ही बिना तड़पे दम तोड़ देता है।',
          gu: 'બંને વસ્તુઓ મગજના શ્વાસ લેવાના કેન્દ્રને સાવ ધીમું કરી દે છે. બંને સાથે લેવાથી ઊંઘમાં જ શ્વાસ બંધ થઈ જાય છે અને વ્યક્તિ ક્યારેય જાગતી નથી.',
        },
      },
    ],
    references: [
      { citation: 'Connor JP, et al. Polysubstance use: Diagnostic challenges, mechanisms, and clinical management. Lancet Psychiatry. 2014;1(4):300-312.', source: 'The Lancet Psychiatry', year: '2014' },
      { citation: 'World Health Organization. Guidelines on Polysubstance Use and Dependence Management. Geneva: WHO.', source: 'WHO', year: '2020' },
    ],
    lastReviewed: '2026-08',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },

  // 5. Stimulants (Cocaine & Amphetamine-Type Stimulants / ATS)
  {
    id: 'stimulants-cocaine-ats',
    slug: 'stimulants-cocaine-amphetamine-ats',
    name: {
      en: 'Stimulants (Cocaine & Amphetamine-Type Stimulants / ATS)',
      hi: 'उत्तेजक नशीले पदार्थ (कोकीन और एम्फ़ैटेमिन / ATS / मेथ)',
      gu: 'સ્ટીમ્યુલન્ટ્સ (કોકેઈન અને એમ્ફેટામાઈન / એમડી / મેથ)',
    },
    medicalTerms: {
      en: 'Stimulant Use Disorder (ICD-11: 6C46 / 6C47; Cocaine and Amphetamine-Type Stimulants)',
      hi: 'उत्तेजक नशीले पदार्थों पर निर्भरता',
      gu: 'ઉત્તેજક પદાર્થોનું વ્યસન',
    },
    whatIsIt: {
      en: 'Stimulant use disorder encompasses illicit central nervous system stimulants including cocaine (powder, crack) and amphetamine-type stimulants (ATS, methamphetamine/"crystal meth", MDMA/"ecstasy", and diverted pharmaceutical stimulants). These agents produce intense, transient alertness, confidence, and hyperarousal.',
      hi: 'उत्तेजक नशीले पदार्थों में कोकीन, एम्फ़ैटेमिन, मेथाम्फेटामाइन (क्रिस्टल मेथ/एमडी) और अन्य सिंथेटिक उत्तेजक शामिल हैं। ये दिमाग को अत्यधिक उत्तेजित करके कुछ समय के लिए झूठी ऊर्जा, अत्यधिक आत्मविश्वास और उत्साह पैदा करते हैं।',
      gu: 'સ્ટીમ્યુલન્ટ્સમાં કોકેઈન, એમ્ફેટામાઈન, મેથ અને MD જેવી દવાઓનો સમાવેશ થાય છે. આ પદાર્થો મગજની ચેતાઓને કૃત્રિમ રીતે ઉત્તેજિત કરીને થોડા સમય માટે ખોટો ઉત્સાહ આપે છે.',
    },
    whyAddictive: {
      en: 'Stimulants block dopamine reuptake transporters (and in the case of amphetamines, induce direct dopamine efflux into the synaptic cleft), causing massive supra-physiological surges of dopamine in the nucleus accumbens. Rapid neurochemical tolerance triggers compulsive binge-and-crash cycles and fierce psychological craving.',
      hi: 'ये पदार्थ मस्तिष्क में डोपामिन (Dopamine) के स्तर को सामान्य से 10 गुना तक बढ़ा देते हैं। जैसे ही इनका असर खत्म होता है, डोपामिन का स्तर गिर जाता है और गंभीर उदासी, चिड़चिड़ापन और दोबारा लेने की असहनीय तलब (Binge-Crash) शुरू हो जाती है।',
      gu: 'આ પદાર્થો મગજમાં ડોપામાઇનનું પ્રમાણ અતિશય વધારી દે છે. અસર ઓછી થતાં જ વ્યક્તિ ઊંડી હતાશામાં ગરકાવ થઈ જાય છે અને ફરીથી નશો મેળવવા તડપી ઊઠે છે.',
    },
    brainBodyEffects: {
      en: 'Severe tachycardia, malignant hypertension, pupil dilation (mydriasis), jaw clenching (bruxism), acute paranoia, hyperthermia, cardiac arrhythmias, cerebral vasoconstriction (stroke risk), and violent impulsive behavior.',
      hi: 'दिल की धड़कन तेज होना, खतरनाक हाई ब्लड प्रेशर, पुतलियों का फैलना, दांत भींचना, अत्यधिक वहम (Paranoia), हिंसक आक्रामकता, दिल का दौरा और ब्रेन स्ट्रोक का खतरा।',
      gu: 'હૃદયના ધબકારા અનિયમિત થવા, ઊંચું બ્લડ પ્રેશર, આંખોની કીકીઓ પહોળી થવી, શંકા-વહેમ, હાર્ટ એટેક અને બ્રેઈન હેમરેજનું જોખમ.',
    },
    problematicUseSigns: {
      en: [
        'Days-long wakefulness runs without eating or sleeping ("runs" or "binging")',
        'Unexplained dilated pupils, rapid pressured speech, and extreme restless pacing',
        'Intense irritability, grandiosity, or unprovoked rage when questioned',
        'Sudden, severe financial depletion and secretive disappearances for consecutive days',
        'Severe skin picking driven by tactile hallucinations of crawling parasites (formication / "crank bugs")',
      ],
      hi: [
        'बिना खाए-पिए कई दिनों तक लगातार जागते रहना और भाग-दौड़ करना',
        'आंखों की पुतलियां बड़ी होना और बिना रुके बहुत तेजी से बातें करना',
        'अत्यधिक गुस्सा, शक करना और परिवार पर साजिश का आरोप लगाना',
        'त्वचा पर कीड़े रेंगने का वहम होना और खुद की त्वचा को नोंचना-छीलना',
        'अचानक लाखों रुपये खर्च होना या चोरी-छिपे गायब हो जाना',
      ],
      gu: [
        'સૂતા કે ખાધા વિના સતત બે-ત્રણ દિવસ જાગતા રહેવું',
        'આંખો પહોળી રહેવી અને ઝડપથી અસંબદ્ધ વાતો કરવી',
        'ત્વચા પર જીવડાં ચાલતાં હોય તેવા ભાસથી ચામડી ખોતરવી',
        'અતિશય વહેમ અને પરિવારજનો પર શંકા કરવી',
      ],
    },
    dependenceSigns: {
      en: [
        'Inability to function socially or professionally without stimulant consumption',
        'Tolerance necessitating dramatically higher quantities or transitions to intravenous/smoked routes',
        'Profound depressive "anhedonia" and near-complete inability to feel joy during sober periods',
      ],
      hi: [
        'उत्तेजक नशा लिए बिना रोजमर्रा का कोई भी काम न कर पाना',
        'नशा न मिलने पर गहरी लाचारी और आत्महत्या के विचार आना',
        'पहले जैसा असर पाने के लिए मात्रा लगातार बढ़ाते जाना',
      ],
      gu: [
        'નશા વિના રોજિંદા કામ કરવા અસમર્થ બનવું',
        'નશો ન મળતાં તીવ્ર ડિપ્રેશન અને આત્મહત્યાના વિચારો આવવા',
      ],
    },
    withdrawalSymptoms: {
      en: [
        'The stimulant "crash": severe exhaustion, excessive sleepiness (hypersomnia), ravenous hunger, profound dysphoria, vivid disturbing nightmares, and intense suicidal ideation.',
      ],
      hi: [
        'उत्तेजक का क्रैश: अत्यधिक मानसिक सुस्ती, कई दिनों तक सोए रहना, बहुत ज्यादा भूख लगना, गहरा डिप्रेशन और आत्महत्या के तीव्र विचार।',
      ],
      gu: [
        'સ્ટીમ્યુલન્ટ ક્રેશ: ભારે થાક, દિવસો સુધી ઊંઘતા રહેવું, અતિશય ભૂખ લાગવી, ઊંડી હતાશા અને આપઘાતના વિચારો.',
      ],
    },
    withdrawalTimeline: {
      en: 'Acute crash begins within 12-24 hours after last dose and peaks at days 2-4 with exhaustion and depression. Protracted emotional blunting and intense cravings can persist for 3-6 months.',
      hi: 'अंतिम खुराक के 12-24 घंटे बाद क्रैश शुरू होता है और 2-4 दिन तक गंभीर डिप्रेशन रहता है। अत्यधिक तलब और उदासी 3 से 6 महीने तक जारी रह सकती है।',
      gu: '૧૨-૨૪ કલાકમાં તીવ્ર થાક શરૂ થાય છે અને ૨-૪ દિવસમાં ચરમસીમાએ પહોંચે છે. તલપ અને ઉદાસી ૩ થી ૬ મહિના સુધી ચાલી શકે છે.',
    },
    healthRisks: {
      en: 'Acute myocardial infarction, malignant hyperthermia, lethal cardiac arrhythmia, intracerebral hemorrhage (stroke), severe stimulant-induced paranoid psychosis, and rapid dental destruction.',
      hi: 'अचानक दिल का दौरा, ब्रेन स्ट्रोक, शरीर का तापमान खतरनाक रूप से बढ़ना, सिज़ोफ्रेनिया जैसा गहरा पागलपन (सायकोसिस), और दांतों का सड़ना।',
      gu: 'હાર્ટ એટેક, બ્રેઈન સ્ટ્રોક, હૃદય બંધ પડી જવું, ગંભીર સાયકોસિસ (ગાંડપણ) અને મોતના જોખમો.',
    },
    treatmentApproach: {
      en: 'Psychiatric emergency medical stabilization for acute toxicity, cardiac monitoring, and cooling. For dependence: Contingency Management (CM), Matrix Model Cognitive Behavioral Therapy, and treatment of co-occurring depression or ADHD in specialized de-addiction centers.',
      hi: 'अस्पताल में आपातकालीन जांच (हृदय व रक्तचाप की निगरानी), शरीर को ठंडा रखना, तथा नशा मुक्ति केंद्र में कॉग्निटिव बिहेवियरल थेरेपी (CBT) और मनोवैज्ञानिक पुनर्वास।',
      gu: 'હોસ્પિટલમાં તાત્કાલિક ઈમરજન્સી સારવાર, હૃદયની દેખરેખ અને વ્યસનમુક્તિ કેન્દ્રમાં લાંબા ગાળાનું કાઉન્સેલિંગ.',
    },
    relapseTriggers: {
      en: 'Visual cues (foil, pipes, white powder, club environments), exhaustion, alcohol consumption (which forms cocaethylene, an even more toxic metabolite), and peer pressure.',
      hi: 'पार्टी का माहौल, थकान, शराब पीना (शराब और कोकीन मिलकर कोकाएथिलीन बनाते हैं जो बहुत जहरीला होता है), और पुराने नशा करने वाले साथी।',
      gu: 'પાર્ટીનું વાતાવરણ, થાક, દારૂ પીવો અને જૂના નશેડી મિત્રો સાથે સંપર્ક.',
    },
    faqs: [
      {
        question: {
          en: 'Can stimulants cause permanent paranoia or psychosis?',
          hi: 'क्या उत्तेजक नशों से हमेशा के लिए पागलपन (Psychosis) हो सकता है?',
          gu: 'શું સ્ટીમ્યુલન્ટ્સથી કાયમી વહેમ કે સાયકોસિસ થઈ શકે?',
        },
        answer: {
          en: 'Yes. Heavy stimulant misuse can induce severe paranoid psychosis with persecutory delusions and tactile hallucinations. While it often resolves with cessation and antipsychotic treatment, in vulnerable individuals it can unmask chronic psychiatric illness.',
          hi: 'हां, लगातार कोकीन या मेथ लेने से गंभीर वहम और सायकोसिस हो सकता है जिसमें व्यक्ति को लगता है कि कोई उसकी जान लेने आ रहा है। तुरंत डॉक्टर से इलाज न कराने पर यह स्थायी रूप ले सकता है।',
          gu: 'હા, સતત નશો કરવાથી દર્દીને ગંભીર વહેમ થઈ જાય છે કે કોઈ તેને મારી નાખવા માંગે છે. તાત્કાલિક મનોચિકિત્સકની સારવાર જરૂરી બને છે.',
        },
      },
    ],
    references: [
      { citation: 'Farrell M, et al. Amphetamine and methamphetamine use disorder. Nat Rev Dis Primers. 2019;5(1):79.', source: 'Nature Reviews', year: '2019' },
      { citation: 'United Nations Office on Drugs and Crime (UNODC). World Drug Report 2023: Stimulant Markets.', source: 'UNODC', year: '2023' },
    ],
    lastReviewed: '2026-08',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
];


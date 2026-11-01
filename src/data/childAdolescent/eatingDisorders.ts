import { ChildAdolescentTopic } from '../../types';

export const eatingDisordersChildData: ChildAdolescentTopic = {
  id: 'child-eating-disorders',
  slug: 'child-eating-disorders',
  name: {
    en: 'Youth Eating Disorders & Body Image Concerns',
    hi: 'किशोर ईटिंग डिसऑर्डर एवं शरीर छवि संबंधी चिंताएं',
    gu: 'કિશોર ઇટિંગ ડિસઓર્ડર અને શારીરિક દેખાવની ચિંતાઓ',
  },
  medicalTerms: {
    en: 'Feeding & Eating Disorders in Youth (ICD-11: 6B80–6B83 | DSM-5-TR: 307.1, 307.51, 307.59)',
    hi: 'बच्चों एवं किशोरों में भोजन संबंधी विकार (ICD-11: 6B80–6B83)',
    gu: 'કિશોરોમાં આહાર સંબંધિત વિકારો (ICD-11: 6B80–6B83)',
  },
  tagline: {
    en: 'Severe neurobiological and psychiatric conditions involving distorted body perception, dangerous food restriction, bingeing, or purging in adolescents.',
    hi: 'शरीर के आकार को लेकर भ्रम, अत्यधिक डाइटिंग, छिपकर ज्यादा खाना या उल्टी करने जैसे गंभीर भोजन संबंधी मानसिक विकार।',
    gu: 'શરીરના વજન કે દેખાવ અંગે ગંભીર વહેમ, અત્યંત ઓછું ખાવું, છુપાઈને વધુ ખાવું કે ઉલ્ટીઓ કરવા જેવો આહાર સંબંધિત માનસિક રોગ.',
  },
  overview: {
    en: 'Eating disorders in youth—primarily Anorexia Nervosa, Bulimia Nervosa, Binge-Eating Disorder, and Avoidant/Restrictive Food Intake Disorder (ARFID)—are severe, potentially life-threatening psychiatric illnesses with profound medical sequelae. They are NOT lifestyle choices, phases, or vanity. Adolescents with Anorexia experience distorted body image and intense terror of weight gain despite severe emaciation. Bulimia involves cycles of secretive binge-eating followed by compensatory purging (vomiting, laxatives, extreme exercise). ARFID involves extreme sensory food aversion or fear of choking without body image distortion. Early multimodal intervention halts irreversible bone, cardiac, and developmental damage.',
    hi: 'किशोरों में ईटिंग डिसऑर्डर (जैसे एनोरेक्सिया नर्वोसा, बुलिमिया, और बिंज ईटिंग) गंभीर और जानलेवा मानसिक बीमारियां हैं जिनके गंभीर शारीरिक दुष्प्रभाव होते हैं। यह कोई शौक, फैशन या दिखावा नहीं है। एनोरेक्सिया से पीड़ित किशोर हड्डियों का ढांचा बन जाने के बावजूद खुद को आईने में मोटा देखते हैं और वजन बढ़ने के भयानक खौफ में खाना छोड़ देते हैं। बुलिमिया में अत्यधिक खाने के बाद उल्टी करने या जुलाब लेने की प्रवृत्ति होती है। वहीं एआरएफआईडी (ARFID) में खाने की बनावट से डर के कारण बच्चे भोजन सीमित कर देते हैं। समय पर इलाज से जीवन बचाया जा सकता है।',
    gu: 'ઇટિંગ ડિસઓર્ડર (જેવા કે એનોરેક્સિયા, બુલિમિયા અને બિન્જ ઇટિંગ) એ ગંભીર તબીબી અને માનસિક બીમારીઓ છે. આ કોઈ ફેશન કે નખરાં નથી. એનોરેક્સિયામાં હાડપિંજર જેવા થઈ જવા છતાં બાળક પોતાને જાડું માની ખાવાનું છોડી દે છે. બુલિમિયામાં વધુ પડતું ખાઈને પરાણે ઉલ્ટીઓ કરવામાં આવે છે. યોગ્ય સમયે સારવાર ન મળે તો હૃદય અને હાડકાં પર ગંભીર જીવલેણ અસરો થઈ શકે છે.',
  },
  typicalDevelopmentVsRedFlags: [
    {
      ageRange: {
        en: 'Middle Childhood (7–11 years)',
        hi: 'मध्य बाल्यावस्था (7–11 वर्ष)',
        gu: 'શાળા વય (7–11 વર્ષ)',
      },
      typicalDevelopment: {
        en: 'Fussy or picky eating regarding vegetables, preferring familiar sweet or savory comfort foods, which improves with gentle exposure.',
        hi: 'हरी सब्जियां खाने में नखरे करना और मनपसंद चीजें खाने की जिद्द, जो प्यार से समझाने पर धीरे-धीरे ठीक हो जाती है।',
        gu: 'શાકભાજી ખાવામાં થોડા નખરાં કરવા અને ગળી કે ચટાકેદાર વાનગીઓ પસંદ કરવી, જે ધીમે ધીમે સામાન્ય થઈ જાય છે.',
      },
      redFlagsClinicalConcern: {
        en: 'ARFID: eating fewer than 5 specific foods; gagging or vomiting at the sight or smell of normal foods; stunted linear growth curve; or intense terror of vomiting/choking preventing eating.',
        hi: 'ARFID: केवल 4-5 चुनिंदा चीजें खाना; सामान्य खाने की गंध से भी उल्टी का अहसास होना; बच्चे की लंबाई और वजन का पूरी तरह रुक जाना; या खाना अटकने के डर से भोजन छोड़ देना।',
        gu: 'ARFID: માત્ર ૨-૩ પસંદગીની ચીજો જ ખાવી; અન્નની સુગંધથી પણ ઉબકા આવવા; બાળકની ઊંચાઈ અને વજન અટકી જવું; અથવા ગળામાં ફસાઈ જવાના ડરે ખાવાનું બંધ કરવું.',
      },
    },
    {
      ageRange: {
        en: 'Early Adolescence (12–15 years)',
        hi: 'प्रारंभिक किशोरावस्था (12–15 वर्ष)',
        gu: 'કિશોરાવસ્થા (12–15 વર્ષ)',
      },
      typicalDevelopment: {
        en: 'Curiosity about fitness, joining school athletics, and wanting to eat healthier or cut down on junk food snacks.',
        hi: 'फिटनेस को लेकर उत्सुकता, स्कूल में खेलकूद में भाग लेना, और जंक फूड कम करके पौष्टिक खाना खाने की इच्छा जताना।',
        gu: 'ફિટનેસ પ્રત્યે જાગૃતિ, રમતોમાં ભાગ લેવો અને જંક ફૂડ ઓછું કરીને સારો ખોરાક ખાવાની ઇચ્છા રાખવી.',
      },
      redFlagsClinicalConcern: {
        en: 'Rigid elimination of entire food groups (zero carbohydrates, zero oil); obsessive calorie counting; skipping meals secretly; hiding food in napkins; and dramatic weight loss accompanied by denial of hunger.',
        hi: 'रोटी-चावल या तेल-घी को पूरी तरह छोड़ देना; हर कौर की कैलोरी गिनना; छिपकर खाना फेंकना या टिशू पेपर में छिपाना; तेजी से वजन घटना और भूख लगने पर भी भूखे रहने की जिद्द।',
        gu: 'રોટલી, ભાત કે ઘી-તેલ સદંતર બંધ કરી દેવા; કેલરીની ગણતરી કરવી; જમવાનું છુપાવીને ફેંકી દેવું અને ખૂબ વજન ઘટી જવા છતાં ભૂખ નથી તેવું કહેવું.',
      },
    },
    {
      ageRange: {
        en: 'Older Adolescence (16–18 years)',
        hi: 'उत्तर किशोरावस्था (16–18 वर्ष)',
        gu: 'મોટી વયના કિશોરો (16–18 વર્ષ)',
      },
      typicalDevelopment: {
        en: 'Following social media fitness influencers occasionally, wanting to look presentable for school functions, and trying moderate exercise routines.',
        hi: 'सोशल मीडिया पर फिटनेस पेज देखना, स्कूल के कार्यक्रमों के लिए अच्छे कपड़े पहनना, और सामान्य व्यायाम करना।',
        gu: 'સોશિયલ મીડિયા પર ફિટનેસ ટિપ્સ જોવી અને સામાન્ય કસરત કરવી.',
      },
      redFlagsClinicalConcern: {
        en: 'Disappearing to the bathroom immediately after meals with running water (to induce vomiting); raw calluses on knuckles (Russell\'s sign); menstrual cessation (amenorrhea); dizziness/fainting; and exercising compulsively for hours despite physical injury.',
        hi: 'खाना खाते ही नल चलाकर तुरंत बाथरूम में उल्टी करने भागना; उंगलियों पर उल्टी कराने के निशान; लड़कियों में माहवारी (पीरियड्स) बंद हो जाना; चक्कर खाकर गिरना; और चोट लगने पर भी पागलों की तरह घंटों कसरत करना।',
        gu: 'જમ્યા પછી તરત બાથરૂમમાં જઈ ઉલ્ટી કરવી; આંગળીઓ પર ઉલ્ટી કરાવવાના નિશાન; માસિક ધર્મ બંધ થઈ જવો; ચક્કર આવવા અને કલાકો સુધી અવિરત કસરત કરવી.',
      },
    },
  ],
  commonSigns: [
    {
      category: {
        en: 'Behavioral & Dietary Warning Signs',
        hi: 'व्यवहार एवं खान-पान संबंधी चेतावनी संकेत',
        gu: 'આહાર અને વર્તણૂકના ચેતવણી સંકેતો',
      },
      signs: {
        en: [
          'Skipping meals with excuses ("I already ate at tuition" or "My stomach hurts")',
          'Developing rigid eating rituals (cutting food into tiny crumbs, chewing each bite 40 times, using specific tiny spoons)',
          'Sudden adoption of extreme restrictive diets without nutritional guidance',
          'Evidence of binge eating: large amounts of food disappearing from the pantry, hidden food wrappers in bedroom drawers',
          'Frequent bathroom visits immediately following meals, often with running faucets or showers to mask sounds of vomiting',
        ],
        hi: [
          'बहाने बनाकर खाना छोड़ना ("मैंने ट्यूशन में खा लिया था" या "पेट खराब है")',
          'खाने के अजीब नियम बनाना (खाने को बहुत छोटे टुकड़ों में काटना, बहुत धीरे-धीरे खाना, बच्चों के छोटे चम्मच से खाना)',
          'अचानक अत्यधिक डाइटिंग शुरू कर देना और रोटी-घी पूरी तरह बंद कर देना',
          'बिंज ईटिंग: रसोई से अचानक बहुत सारा खाना गायब होना, कमरे में बिस्कुट-चिप्स के खाली पैकेट छिपे मिलना',
          'खाना खाते ही तुरंत वॉशरूम जाना और उल्टी की आवाज छिपाने के लिए नल चलाकर रखना',
        ],
        gu: [
          'બહાના બનાવીને જમવાનું ટાળવું ("મેં ટ્યુશનમાં ખાઈ લીધું છે" કે "પેટમાં દુખે છે")',
          'ખાવાના વિચિત્ર નિયમો બનાવવા (ખોરાકના બહુ નાના ટુકડા કરવા, ખૂબ ધીમે ખાવું, નાની ચમચી વાપરવી)',
          'અચાનક કડક ડાયટિંગ શરૂ કરી દેવું અને રોટલી કે ઘી સાવ બંધ કરી દેવા',
          'બિન્જ ઇટિંગ: રસોડામાંથી અચાનક ખોરાક ગાયબ થવો, રૂમમાં રેપર્સ કે પેકેટો છુપાવેલા મળવા',
          'જમ્યા પછી તરત બાથરૂમમાં જવું અને ઊલટીનો અવાજ છુપાવવા નળ ચાલુ રાખવો',
        ],
      },
    },
    {
      category: {
        en: 'Physical & Physiological Complications',
        hi: 'शारीरिक एवं चिकित्सीय जटिलताएं',
        gu: 'શારીરિક અને તબીબી ગૂંચવણો',
      },
      signs: {
        en: [
          'Rapid, dramatic, or continuous weight loss (or failure to make expected developmental weight gains during puberty)',
          'Hypothermia: feeling constantly cold, wearing heavy jackets in warm weather, cold blueish hands and feet',
          'Bradycardia (dangerously slow resting heart rate below 50 bpm) and orthostatic hypotension (dizziness upon standing)',
          'Dry, brittle hair, hair loss on the scalp, and growth of fine downy body hair (lanugo)',
          'Loss of menstrual cycles (amenorrhea) in post-menarchal adolescent girls',
        ],
        hi: [
          'अचानक और बहुत तेजी से वजन घटना (या किशोरावस्था में सामान्य रूप से वजन न बढ़ना)',
          'हर समय ठंड लगना, गर्मी के मौसम में भी स्वेटर पहनना, हाथ-पैर नीले पड़ना',
          'दिल की धड़कन खतरनाक रूप से धीमी होना (50 से कम) और खड़े होने पर चक्कर आना',
          'बालों का झड़ना, रूखी त्वचा, और शरीर पर पतले रोएं (लानुगो) उग आना',
          'किशोरियों में माहवारी (पीरियड्स) का रुक जाना या बंद हो जाना',
        ],
        gu: [
          'ઝડપથી અને અસામાન્ય રીતે વજન ઘટી જવું (અથવા ઉંમર પ્રમાણે વજન ન વધવું)',
          'સતત ઠંડી લાગવી, ગરમીમાં પણ ગરમ કપડાં પહેરવા, હાથ-પગ વાદળી જેવા ઠંડા થઈ જવા',
          'હૃદયના ધબકારા ખૂબ ધીમા પડી જવા (૫૦થી ઓછા) અને ઊભા થતાં ચક્કર આવવા',
          'વાળ ખરવા, ત્વચા સુકાઈ જવી અને શરીર પર પાતળા રૂંવાડા (લેનુગો) ઊગવા',
          'કિશોરીઓમાં માસિક ધર્મ (પીરિયડ્સ) અનિયમિત થવા કે સાવ બંધ થઈ જવા',
        ],
      },
    },
    {
      category: {
        en: 'Psychological & Body Perception Signs',
        hi: 'मानसिक एवं शरीर छवि संबंधी लक्षण',
        gu: 'માનસિક અને શરીરના દેખાવના લક્ષણો',
      },
      signs: {
        en: [
          'Intense, irrational dread of being "fat" or gaining weight even when visibly underweight',
          'Body checking: compulsively weighing oneself multiple times a day, pinching skin, measuring waist in mirrors',
          'Total denial of medical danger or emaciation',
          'Severe mood swings, irritability, depression, and social withdrawal from peers to avoid eating together',
        ],
        hi: [
          'हड्डियों का ढांचा होने पर भी खुद को "मोटा" समझना और वजन बढ़ने का बेकाबू खौफ',
          'दिन में 10 बार वजन नापना, आईने में खुद को घंटों देखना और पेट-कमर को नापते रहना',
          'अपनी कमजोरी या गंभीर स्थिति को पूरी तरह नकारना',
          'अत्यधिक चिड़चिड़ापन, अवसाद और साथ में खाने से बचने के लिए दोस्तों से दूरी बनाना',
        ],
        gu: [
          'ખૂબ પાતળા હોવા છતાં પોતાને "જાડા" માનવા અને વજન વધવાનો સતત ગંભીર ડર રહેવો',
          'દિવસમાં અનેક વાર વજન માપવું, અરીસામાં કલાકો સુધી પોતાની જાતને ચકાસ્યા કરવી',
          'પોતાની શારીરિક નબળાઈ કે જોખમી સ્થિતિનો સાવ અસ્વીકાર કરવો',
          'તીવ્ર ચીડિયાપણું, હતાશા અને મિત્રો સાથે જમવાનું ટાળવા માટે એકલા રહેવું',
        ],
      },
    },
  ],
  whenToSeekHelp: {
    en: 'Eating disorders carry the highest medical mortality rate of any psychiatric category. Immediate consultation with a child psychiatrist or adolescent medicine specialist is mandatory if an adolescent exhibits rapid weight loss, meal refusal, post-meal vomiting, or menstrual cessation. URGENT MEDICAL EMERGENCY: If resting heart rate is below 45–50 bpm, systolic blood pressure is below 80–90 mmHg, electrolyte imbalances exist, or fainting occurs, immediate hospital admission to an adolescent medical unit is life-saving.',
    hi: 'ईटिंग डिसऑर्डर सभी मानसिक बीमारियों में सबसे अधिक जानलेवा होते हैं। यदि किसी किशोर में तेजी से वजन घटने, खाना छोड़ने, उल्टी करने या माहवारी रुकने के लक्षण दिखें, तो बिना एक दिन की भी देरी किए तुरंत बाल मनोचिकित्सक से संपर्क करें। आपातकालीन चेतावनी: यदि दिल की धड़कन 50 से कम हो, ब्लड प्रेशर 80 से नीचे गिर जाए, या चक्कर खाकर बेहोशी आए, तो तुरंत आपातकालीन अस्पताल में भर्ती कराना जीवन रक्षक होता है।',
    gu: 'ઇટિંગ ડિસઓર્ડર ખૂબ જોખમી અને જીવલેણ બની શકે છે. જો કિશોરમાં વજન ઝડપથી ઘટતું હોય, ખાવાની ના પાડતું હોય કે જમ્યા પછી ઉલ્ટી કરતું હોય તો વિલંબ વિના બાળ મनोચિકિત્સકની સલાહ લો. જો હૃદયના ધબકારા ૫૦ થી ઘટી જાય, બ્લડ પ્રેશર ઘટી જાય કે બેભાન થાય તો તાત્કાલિક હોસ્પિટલમાં દાખલ કરવું જરૂરી છે.',
  },
  causesAndRiskFactors: {
    en: 'Youth eating disorders arise from a complex interplay of genetic vulnerabilities (50–70% heritability in anorexia), neurochemical imbalances in dopamine and serotonin reward pathways, and personality traits like perfectionism and obsessive rigidity. Social media platforms promote toxic beauty standards, body shaming, and diet culture. In the Indian context, family and peer comments on weight, sports demanding specific weights, and high academic perfectionism serve as potent triggers.',
    hi: 'ईटिंग डिसऑर्डर आनुवंशिक संवेदनशीलता, मस्तिष्क के न्यूरोट्रांसमीटर्स, और परफेक्शनिज्म जैसे स्वभाव के मेल से होते हैं। सोशल मीडिया पर छरहरे शरीर की अवास्तविक तस्वीरें, वजन को लेकर रिश्तेदारों और दोस्तों द्वारा ताने (बॉडी शेमिंग), और पढ़ाई में हर चीज में परफेक्ट होने का दबाव इस बीमारी को जन्म देते हैं।',
    gu: 'આ રોગ જનીનિક કારણો, મગજના રસાયણો અને વધુ પડતા પરફેક્શનિઝમથી થાય છે. સોશિયલ મીડિયા પર દેખાવાડું વલણ, જાડાપણાની મજાક ઉડાવવી (બોડી શેમિંગ) અને વાલીઓ કે સંબંધીઓના ટોણાં આ બીમારીને ઉત્તેજન આપે છે.',
  },
  schoolAndHomeImpact: {
    en: 'At school, students with eating disorders avoid the cafeteria, eat lunch alone, or spend lunch hours exercising. Malnutrition leads to brain fog, plummeting grades, and fainting during physical education. At home, every meal becomes a 90-minute war zone with screaming, tears, and deceit, shattering family tranquility.',
    hi: 'स्कूल में, बच्चे कैंटीन जाने से बचते हैं या लंच में अकेले छिपकर बैठते हैं। कुपोषण के कारण दिमाग सुन्न हो जाता है और पढ़ाई में मन नहीं लगता। घर में, हर भोजन का समय 2 घंटे का युद्ध बन जाता है जिसमें रोना-धोना, चीखना और खाना छिपाना होता है, जिससे पूरे घर की शांति छिन जाती है।',
    gu: 'શાળામાં બાળક લંચ બોક્સ ખાવાને બદલે ફેંકી દે છે. કુપોષણને લીધે ચક્કર આવે છે અને અભ્યાસ બગડે છે. ઘરમાં જમવાના સમયે ભારે રકઝક અને વિખવાદ થાય છે.',
  },
  assessmentOverview: {
    en: 'Assessment is multidisciplinary, conducted jointly by a child psychiatrist and an adolescent pediatrician. It includes comprehensive physical exam (vitals, orthostatics, ECG for QT prolongation), lab panels (electrolytes, complete blood count, liver and kidney function, thyroid and reproductive hormones), screening tools (Eating Disorder Examination-Questionnaire — EDE-Q), and psychological evaluation of co-occurring depression, anxiety, or OCD.',
    hi: 'मूल्यांकन बाल मनोचिकित्सक और बाल रोग विशेषज्ञ द्वारा मिलकर किया जाता है: विस्तृत शारीरिक जांच (ईसीजी, ब्लड प्रेशर, दिल की धड़कन), खून की पूरी जांच (इलेक्ट्रोलाइट्स, हीमोग्लोबिन, किडनी और लिवर की जांच), और डिप्रेशन व ओसीडी की पड़ताल।',
    gu: 'તપાસ બાળ મનોચિકિત્સક અને બાળરોગ નિષ્ણાત દ્વારા સાથે મળીને થાય છે: ઇસીજી (ECG), બ્લડ ટેસ્ટ, ઇલેક્ટ્રોલાઇટ્સ અને માનસિક સ્થિતિનું ઊંડાણપૂર્વક મૂલ્યાંકન કરવામાં આવે છે.',
  },
  treatmentApproach: {
    parentTrainingAndBehavioral: {
      en: 'Family-Based Treatment (FBT / The Maudsley Method) is the established gold-standard outpatient intervention for adolescent anorexia and bulimia. In Phase 1, parents take full, loving, non-negotiable charge of re-nourishing the child at home, preventing meals from being negotiated or sabotaged by the illness.',
      hi: 'फैमिली-बेस्ड ट्रीटमेंट (FBT / मॉड्सले पद्धति) किशोरों के लिए सबसे सफल इलाज है। पहले चरण में माता-पिता प्यार से लेकिन दृढ़ता के साथ बच्चे के भोजन और पोषण की पूरी जिम्मेदारी अपने हाथ में लेते हैं, और बीमारी के बहकावे में आकर भोजन से समझौता नहीं करते।',
      gu: 'ફેમિલી-બેઝ્ડ ટ્રીટમેન્ટ (FBT) સૌથી શ્રેષ્ઠ પદ્ધતિ છે, જેમાં વાલીઓ જાતે જ બાળકના ખોરાક અને પોષણની જવાબદારી સંભાળે છે અને કોઈ બાંધછોડ વગર યોગ્ય આહાર આપે છે.',
    },
    psychotherapy: {
      en: 'Specialized Adolescent Cognitive Behavioral Therapy (CBT-E) addresses distorted body beliefs and dietary rules. Adolescent & Parent Interpersonal Psychotherapy (IPT) resolves relational stressors.',
      hi: 'विशेषज्ञ कॉग्निटिव बिहेवियरल थेरेपी (CBT-E) शरीर के प्रति गलत सोच और डाइटिंग के नियमों को ठीक करती है, जबकि इंटरपर्सनल थेरेपी पारिवारिक और सामाजिक रिश्तों को सुधारती है।',
      gu: 'વિશેષ CBT-E થેરાપી દ્વારા શરીર પ્રત્યેના ખોટા વિચારો દૂર કરાય છે અને યોગ્ય પોષણ અંગે સમજણ અપાય છે.',
    },
    schoolSupportAndAccommodations: {
      en: 'Accommodations: suspension of competitive athletics and physical education until medically cleared; quiet monitored lunch setting with staff supervision to ensure meals are consumed without purging; and medical absence flexibility.',
      hi: 'स्कूल में सहयोग: जब तक डॉक्टर अनुमति न दें तब तक भारी खेलकूद से छूट; लंच के समय किसी शिक्षक की निगरानी में भोजन करना ताकि खाना फेंका या उल्टी न की जाए; और अस्पताल के दिनों में परीक्षाओं में छूट।',
      gu: 'શાળા સહાય: ડૉક્ટરની મંજૂરી ન મળે ત્યાં સુધી રમતગમતમાંથી મુક્તિ; શિક્ષકની દેખરેખ હેઠળ શાંતિથી જમવાની વ્યવસ્થા અને પરીક્ષામાં અનુકૂળતા.',
    },
    medicationGuidance: {
      en: 'Medications are never a standalone cure. In Anorexia, medication does not restore weight; however, atypical antipsychotics like low-dose Olanzapine can reduce paralyzing mealtime obsessional anxiety. In Bulimia Nervosa, high-dose Fluoxetine is FDA-approved to reduce binge-purge frequencies alongside psychotherapy.',
      hi: 'दवाएं कभी भी अकेला इलाज नहीं होतीं। एनोरेक्सिया में खाना खाने के समय होने वाली तीव्र घबराहट को शांत करने के लिए बहुत कम मात्रा में सहायक दवाएं दी जा सकती हैं। बुलिमिया में फ्लुओक्सेटिन दवा उल्टी करने और अत्यधिक खाने की आदत को कम करने में मदद करती है।',
      gu: 'દવાઓ માત્ર સહાયક છે. જમતી વખતે થતી અતિશય ગભરામણ ઘટાડવા કે ઉલ્ટી કરવાની ટેવ રોકવા માટે મનોચિકિત્સક દ્વારા ચોક્કસ દવાઓ અપાય છે.',
    },
  },
  parentCaregiverGuidance: [
    {
      en: 'Never comment on body shape, weight, or size—even complimentary remarks like "You look so slim!" inadvertently reinforce that weight determines human worth.',
      hi: 'शरीर के आकार या वजन पर कभी टिप्पणी न करें—यहाँ तक कि "तुम कितनी पतली लग रही हो!" जैसी तारीफ भी बच्चे के दिमाग में यह बात बैठा देती है कि पतला होना ही सबसे जरूरी है।',
      gu: 'બાળકના શરીર કે વજન પર ક્યારેય ટિપ્પણી ન કરો. "તું કેટલી પાતળી થઈ ગઈ છે!" જેવા વખાણ પણ બીમારીને ઉત્તેજન આપે છે.',
    },
    {
      en: 'Recognize food as medicine. In adolescent anorexia, food is the non-negotiable medical prescription needed to heal a starving brain. Do not debate with the illness at mealtimes.',
      hi: 'भोजन को दवा समझें। एनोरेक्सिया में भोजन ही मस्तिष्क को ठीक करने की सबसे बड़ी दवा है। खाने की मेज पर बच्चे से बहस करने के बजाय प्यार और दृढ़ता से भोजन कराएं।',
      gu: 'ખોરાકને દવા ગણો. મગજને સાજું કરવા પૂરતો ખોરાક અનિવાર્ય છે. જમતી વખતે દલીલો કરવાને બદલે પ્રેમથી આહાર આપો.',
    },
    {
      en: 'Remove scales and mirrors from the bedroom. Stop the endless cycle of daily body-checking and weighing.',
      hi: 'कमरे से वजन नापने की मशीन और आईने हटा दें ताकि बार-बार वजन नापने की बीमारी पर रोक लगे।',
      gu: 'રૂમમાંથી વજન કાંટો હટાવી દો જેથી વારંવાર વજન માપવાની ટેવ અટકે.',
    },
    {
      en: 'Supervise meals and the 60 minutes following mealtimes. Spend peaceful, relaxing time together after eating to prevent secretive purging or excessive exercising.',
      hi: 'खाना खाने के बाद के 60 मिनट तक बच्चे के साथ रहें। साथ में कोई फिल्म देखें या बोर्ड गेम खेलें ताकि वह उल्टी करने या कसरत करने न भागे।',
      gu: 'જમ્યા પછીના ૧ કલાક સુધી બાળક સાથે સમય વિતાવો જેથી તે ઉલ્ટી કરવા કે વધુ કસરત કરવા ન જાય.',
    },
  ],
  illustrativeExamples: [
    {
      en: 'Riya, a 15-year-old in Mumbai preparing for school exams, read online articles advocating "clean eating" and completely eliminated rice, roti, dairy, and oil. Over four months, her weight dropped from 48 kg to 34 kg. Her parents noticed her shivering constantly and wearing thick coats in May. She spent two hours a day examining her collarbones in the mirror, crying that she was "disgustingly fat." When her pulse dropped to 42 beats per minute, she was hospitalized for acute bradycardia and medical stabilization. Through inpatient refeeding followed by outpatient Family-Based Treatment (FBT), her parents learned how to supervise nutrition with loving authority, helping Riya restore a healthy weight and resume schooling.',
      hi: 'मुंबई की 15 वर्षीया रिया ने इंटरनेट पर "क्लीन ईटिंग" पढ़कर रोटी, चावल, दूध और तेल सब बंद कर दिया। चार महीने में उसका वजन 48 किलो से गिरकर 34 किलो रह गया। वह मई की गर्मी में भी स्वेटर पहनकर कांपती रहती थी। आईने में अपनी हड्डियां देखकर भी वह रोती थी कि वह "बहुत मोटी" है। जब दिल की धड़कन 42 तक गिर गई, तो उसे तुरंत अस्पताल में भर्ती कराया गया। मेडिकल स्थिति सुधरने के बाद फैमिली-बेस्ड ट्रीटमेंट (FBT) से माता-पिता ने घर पर पोषण की जिम्मेदारी संभाली और रिया ने सामान्य वजन पाकर दोबारा स्कूल शुरू किया।',
      gu: 'મુંબઈની ૧૫ વર્ષની રિયાએ ડાયેટિંગના ચક્કરમાં રોટલી, ભાત અને તેલ સાવ બંધ કરી દીધા. ૪ મહિનામાં વજન ૪૮ થી ઘટીને ૩૪ કિલો થઈ ગયું. અતિશય ગરમીમાં પણ તે ધ્રૂજતી રહેતી. હૃદયના ધબકારા ૪૨ થઈ જતાં તેને હોસ્પિટલમાં દાખલ કરવી પડી. FBT પદ્ધતિ અને વાલીઓની સંભાળથી રિયા સાજી થઈ શકી.',
    },
    {
      en: 'Karan, a 16-year-old in Chandigarh, joined a gym to build athletic endurance. Within six months, his parents noticed large quantities of sweets, bread, and snacks vanishing overnight. They discovered hidden empty boxes under his bed. After these secret midnight binges, Karan would spend four hours running on the treadmill or induce vomiting to "undo" the calories. A psychiatric consultation diagnosed Bulimia Nervosa fueled by intense body dissatisfaction. Through specialized adolescent CBT (CBT-E) and family nutritional support, Karan normalized his relationship with food and ceased purging cycles.',
      hi: 'चंडीगढ़ के 16 वर्षीय करन ने जिम जाना शुरू किया। कुछ महीनों बाद रसोई से रात में रोटियां, ब्रेड और मिठाइयां गायब होने लगीं। कमरे से खाली रैपर मिले। रात में अत्यधिक खाने के बाद करन घंटों ट्रेडमिल पर दौड़ता या उल्टी करता ताकि कैलोरी जल जाए। मनोचिकित्सक ने बुलिमिया नर्वोसा की पहचान की। विशेषज्ञ सीबीटी थेरेपी और पोषण काउंसलिंग से करन ने भोजन के साथ स्वस्थ रिश्ता बनाया और उल्टी करने की आदत से मुक्ति पाई।',
      gu: 'ચંડીગઢના ૧૬ વર્ષના કરણને રાત્રે વધુ પડતું ખાવાની અને પછી પરાણે ઉલ્ટી કરવાની ટેવ પડી ગઈ હતી. તે કલાકો સુધી કસરત કરતો. તપાસમાં બુલિમિયા નર્વોસા જણાયું. યોગ્ય CBT-E કાઉન્સિલિંગ અને આહાર માર્ગદર્શનથી કરન આ ચક્રમાંથી બહાર આવ્યો.',
    },
  ],
  evidenceHighlights: [
    {
      statistic: 'Up to 5x higher mortality',
      context: {
        en: 'Anorexia nervosa has the highest medical and psychiatric mortality of any mental health disorder, primarily from cardiac arrest and malnutrition.',
        hi: 'एनोरेक्सिया नर्वोसा में हृदय गति रुकने और गंभीर कुपोषण के कारण मृत्यु का जोखिम अन्य सभी मानसिक रोगों की तुलना में 5 गुना तक अधिक होता है।',
        gu: 'એનોરેક્સિયા નર્વોસામાં હૃદય રોગ અને કુપોષણને લીધે મૃત્યુનું જોખમ અન્ય માનસિક બીમારીઓ કરતાં ૫ ગણું વધુ હોય છે.',
      },
      source: 'Archives of General Psychiatry & American Journal of Psychiatry',
    },
    {
      statistic: 'FBT Success Rate ~70%',
      context: {
        en: 'Long-term remission rate for adolescent anorexia treated with Family-Based Treatment (Maudsley model) initiated within the first year of illness.',
        hi: 'फैमिली-बेस्ड ट्रीटमेंट (FBT) से पहले वर्ष में इलाज शुरू होने पर 70% तक किशोर पूरी तरह स्वस्थ हो जाते हैं।',
        gu: 'FBT પદ્ધતિ દ્વારા વહેલી સારવાર શરૂ કરવાથી ૭૦% કિશોરો સંપૂર્ણ સાજા થઈ જાય છે.',
      },
      source: 'Journal of the American Academy of Child and Adolescent Psychiatry',
    },
  ],
  mythsVsFacts: [
    {
      myth: {
        en: 'Myth: Eating disorders are just modern teenage vanity and phases that will pass when they grow up.',
        hi: 'भ्रांति: ईटिंग डिसऑर्डर सिर्फ आज के दौर का फैशन या नखरे हैं जो बड़े होने पर अपने आप ठीक हो जाएंगे।',
        gu: 'માન્યતા: ઇટિંગ ડિસઓર્ડર એ માત્ર ફેશન કે નખરાં છે જે મોટા થતાં આપોઆપ મટી જશે.',
      },
      fact: {
        en: 'Fact: Eating disorders are severe, genetically influenced neurobiological psychiatric diseases with profound cardiac, endocrine, and neurological mortality risks requiring intensive medical treatment.',
        hi: 'तथ्य: ईटिंग डिसऑर्डर आनुवंशिक और न्यूरोबायोलॉजिकल कारणों से होने वाली गंभीर और जानलेવા बीमारियां हैं जिनके लिए तुरंत विशेषज्ञ डॉक्टरी इलाज जरूरी होता है।',
        gu: 'હકીકત: આ જીવલેણ તબીબી અને માનસિક રોગ છે જેના માટે તાત્કાલિક સારવાર અનિવાર્ય છે.',
      },
    },
    {
      myth: {
        en: 'Myth: Only girls get eating disorders; boys are not affected.',
        hi: 'भ्रांति: ईटिंग डिसऑर्डर केवल लड़कियों को होते हैं, लड़कों को नहीं।',
        gu: 'માન્યતા: ઇટિંગ ડિસઓર્ડર માત્ર છોકરીઓને જ થાય છે, છોકરાઓને નહીં.',
      },
      fact: {
        en: 'Fact: Approximately 25–30% of adolescent eating disorder cases occur in males, frequently presenting as muscularity-oriented restriction ("bigorexia"), compulsive gym-going, and bingeing.',
        hi: 'तथ्य: लगभग 25-30% मामले लड़कों में होते हैं, जो अक्सर सिक्स-पैक एब्स बनाने की सनक, घंटों जिम करने, और छिपकर खाने के रूप में सामने आते हैं।',
        gu: 'હકીકત: ૨૫ થી ૩૦% કિસ્સાઓ છોકરાઓમાં જોવા મળે છે, જેમાં બોડી બનાવવા માટે અતિશય કસરત અને ખાવાના વહેમ જોવા મળે છે.',
      },
    },
  ],
  faqs: [
    {
      question: {
        en: 'What is ARFID and how is it different from Anorexia?',
        hi: 'ARFID क्या है और यह एनोरेक्सिया से कैसे अलग है?',
        gu: 'ARFID શું છે અને તે એનોરેક્સિયાથી કેવી રીતે અલગ છે?',
      },
      answer: {
        en: 'ARFID (Avoidant/Restrictive Food Intake Disorder) involves severe food restriction leading to weight loss or nutritional failure, but unlike Anorexia, there is ZERO fear of being fat and NO distorted body image. The restriction is driven purely by sensory aversion (textures, smells), fear of adverse consequences (choking, vomiting), or lack of interest in eating.',
        hi: 'ARFID में बच्चा भोजन बहुत कम खाता है और उसका वजन घट जाता है, लेकिन एनोरेक्सिया के विपरीत इसमें मोटा होने का कोई डर नहीं होता और न ही शरीर को लेकर कोई हीनभावना होती है। इसमें खाना न खाने का कारण खाने की बनावट (टेक्सचर) से नफरत, खाना गले में अटकने का डर, या भूख का अहसास न होना होता है।',
        gu: 'ARFID માં બાળક ખાવાનું ટાળે છે પણ એનોરેક્સિયાની જેમ જાડા થવાનો કોઈ ડર નથી હોતો. ખોરાકની બનાવટ કે ગળામાં ફસાઈ જવાના ડરથી બાળક ખાતું નથી.',
      },
    },
    {
      question: {
        en: 'When does an adolescent with an eating disorder need emergency hospitalization?',
        hi: 'ईटिंग डिसऑर्डर से पीड़ित किशोर को तुरंत अस्पताल में भर्ती कराने की आवश्यकता कब होती है?',
        gu: 'ઇટિંગ ડિસઓર્ડર ધરાવતા કિશોરને તાત્કાલિક હોસ્પિટલમાં દાખલ ક્યારે કરવું પડે?',
      },
      answer: {
        en: 'Immediate hospitalization is required when there are acute medical instability signs: heart rate under 45–50 bpm, systolic blood pressure below 80–90 mmHg, abnormal cardiac rhythms (QT prolongation), severe electrolyte disturbances (low potassium from vomiting), refusal to drink fluids, acute suicidal intent, or body weight below 70–75% of median for age.',
        hi: 'तत्काल भर्ती जरूरी है जब: दिल की धड़कन 50 से कम हो, ब्लड प्रेशर 80 से नीचे गिर जाए, ईसीजी में खराबी आए, उल्टी के कारण पोटेशियम खतरनाक रूप से घट जाए, पानी पीने से मना कर दे, या वजन सामान्य से 25-30% कम हो जाए।',
        gu: 'જ્યારે ધબકારા ૫૦ થી ઘટી જાય, બ્લડ પ્રેશર ઓછું થઈ જાય, શરીરમાં ક્ષારો (પોટેશિયમ) ઘટી જાય, પાણી પીવાની ના પાડે કે વજન ખૂબ ઘટી જાય ત્યારે તાત્કાલિક હોસ્પિટલમાં દાખલ કરવું પડે છે.',
      },
    },
  ],
  references: [
    {
      title: 'Practice Parameter for the Assessment and Treatment of Children and Adolescents with Eating Disorders',
      source: 'Journal of the American Academy of Child and Adolescent Psychiatry',
      year: 2021,
    },
    {
      title: 'Academy for Eating Disorders: Medical Care Standards Guide for Pediatric and Adolescent Patients',
      source: 'International Journal of Eating Disorders',
      year: 2022,
    },
  ],
  relatedIds: [],
  lastReviewed: '2026-03-15',
  reviewStatus: 'peer_reviewed',
};

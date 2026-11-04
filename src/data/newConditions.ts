import { Condition } from '../types';

export const newConditionsData: Condition[] = [
  // 1. Eating Disorders: Anorexia Nervosa
  {
    id: 'anorexia-nervosa',
    slug: 'anorexia-nervosa',
    category: 'eating',
    conditionIcon: 'anorexia-nervosa',
    name: {
      en: 'Anorexia Nervosa',
      hi: 'एनोरेक्सिया नर्वोसा (Anorexia Nervosa)',
      gu: 'એનોરેક્સિયા નર્વોસા (ખોરાકનો અસ્વીકાર / વજન વધવાનો ભય)',
    },
    medicalTerms: {
      en: 'Anorexia Nervosa (ICD-11: 6B80, DSM-5-TR)',
      hi: 'एनोरेक्सिया नर्वोसा',
      gu: 'એનોરેક્સિયા નર્વોસા',
    },
    overview: {
      en: 'Anorexia Nervosa (ICD-11: 6B80, DSM-5-TR) is a severe, life-threatening psychiatric and metabolic disorder characterized by persistent, rigid restriction of energy intake relative to requirements, leading to significantly low body weight in the context of age, sex, developmental trajectory, and physical health. Individuals experience an intense, unrelenting fear of gaining weight or becoming fat, even when profoundly emaciated, accompanied by a profound perceptual distortion of their body weight, shape, and proportions. Patients demonstrate an alarming lack of insight or outright denial regarding the medical peril of their emaciation. Driven by altered reward neurobiology, starvation paradoxically functions as an anxiety-dampening mechanism, resulting in obsessive calorie counting, compulsive body checking, secretive exercising, and multisystem neuroendocrine collapse.',
      hi: 'एनोरेक्सिया नर्वोसा (Anorexia Nervosa) एक गंभीर, जानलेवा मानसिक और शारीरिक विकार है, जिसमें वजन बढ़ने या मोटे होने के अत्यधिक और अवास्तविक डर के कारण व्यक्ति भोजन की मात्रा को बेहद कम कर देता है। इसके परिणामस्वरूप शरीर का वजन खतरनाक रूप से घट जाता है। अत्यधिक दुबली और हड्डियों का ढांचा हो जाने के बावजूद मरीज जब खुद को आईने में देखता है, तो उसे अपना शरीर मोटा ही नजर आता है (गंभीर बॉडी इमेज विकार)। मरीज अपनी जानलेवा कमजोरी को मानने से इनकार करता है और दिन-रात कैलोरी गिनने, भोजन छिपाने या अत्यधिक व्यायाम करने में लगा रहता है। भुखमरी के कारण दिल की धड़कन धीमी होना, पीरियड्स बंद होना और अंगों का काम करना बंद होने का गंभीर खतरा पैदा हो जाता है।',
      gu: 'એનોરેક્સિયા નર્વોસા એ એક અત્યંત ગંભીર અને જીવલેણ માનસિક-શારીરિક રોગ છે, જેમાં વજન વધી જવાના કે જાડા દેખાવાના અતિશય અને કાલ્પનિક ડરને કારણે વ્યક્તિ ખોરાક લેવાનું લગભગ બંધ કરી દે છે. આના કારણે શરીરનું વજન સામાન્ય કરતાં ઘણું ઘટી જાય છે અને માત્ર હાડપિંજર જેવું બની જાય છે. અરીસામાં જોતી વખતે અત્યંત દૂબળી વ્યક્તિને પણ પોતાનું શરીર જાડું જ દેખાય છે. દર્દી પોતાની જીવલેણ નબળાઈ સ્વીકારવાનો ઇનકાર કરે છે અને સતત કેલરી ગણવામાં કે છૂપી રીતે કસરત કરવામાં વ્યસ્ત રહે છે. આના લીધે હૃદયના ધબકારા ઘટી જવા, માસિક બંધ થઈ જવું અને જીવ જોખમમાં મુકાઈ જવાની શક્યતા રહે છે.',
    },
    illustrativeExamples: [
      {
        en: 'Ananya, a 17-year-old high-achieving student in Ahmedabad preparing for competitive medical entrance exams, embarked on a "clean eating" diet after a relative remarked that she looked healthier after losing two kilograms during a school vacation. Within four months, clean eating escalated into an obsessive, rigid starvation regimen: Ananya eliminated all carbohydrates, fats, and dairy, restricting herself to fewer than 450 calories a day (black coffee, plain cucumber slices, and clear broth). Her weight plummeted from 52 kg to 34 kg (BMI 13.8). Despite protruding ribs, sunken eyes, and fine downy lanugo hair covering her arms, Ananya stood in front of the mirror sobbing, convinced her thighs were "grotesquely fat." She cut food into micro-fractions to delay eating, secretly exercised in her bedroom doing 500 jumping jacks every midnight despite severe dizzy spells, and wore baggy layers to conceal her emaciation. Her menstrual cycles completely stopped (amenorrhea). During a physics class, Ananya collapsed and was rushed to the hospital, where emergency testing revealed sinus bradycardia of 36 beats per minute, hypokalemia, and dangerous orthostatic hypotension. Admitted to adolescent psychiatry and medical stabilization, Ananya underwent gradual medical refeeding to avert refeeding syndrome, followed by Family-Based Treatment (FBT / Maudsley model). Over 12 months of structured parental meal support, psychoeducation, and individual cognitive reframing, Ananya regained a healthy weight of 50 kg, resumed menstruation, and rebuilt a peaceful relationship with food.',
        hi: 'अहमदाबाद की 17 वर्षीय मेधावी छात्रा अनन्या मेडिकल प्रवेश परीक्षा की तैयारी कर रही थी। छुट्टियों में दो किलो वजन कम होने पर एक रिश्तेदार ने उसकी तारीफ कर दी, जिसके बाद अनन्या ने "स्वस्थ खान-पान" के नाम पर डाइटिंग शुरू की। चार महीनों में यह साधारण डाइटिंग एक जानलेवा बीमारी में बदल गई: अनन्या ने रोटी, चावल, तेल और दूध पूरी तरह छोड़ दिया और पूरे दिन में केवल 400-450 कैलोरी (खीरा, ब्लैक कॉफी और उबला सूप) लेने लगी। उसका वजन 52 किलो से गिरकर मात्र 34 किलो (BMI 13.8) रह गया। पसलियां साफ दिखने और आंखों के गड्ढे में धंस जाने के बावजूद जब वह आईने में देखती, तो रो पड़ती कि उसके पैर "बहुत मोटे" हैं। वह खाने के छोटे-छोटे टुकड़े करके घंटों थाली में घुमाती, रात को कमरे का दरवाजा बंद करके कमजोरी के बावजूद 500 जंपिंग जैक लगाती और ढीले कपड़े पहनकर अपनी कमजोरी छिपाती। उसके मासिक धर्म (पीरियड्स) पूरी तरह बंद हो गए। एक दिन कोचिंग क्लास में वह बेहोश होकर गिर पड़ी। अस्पताल ले जाने पर पता चला कि उसके दिल की धड़कन गिरकर 36 प्रति मिनट हो गई थी और खून में पोटेशियम खतरनाक रूप से कम था। डॉक्टरों ने तुरंत उसे भर्ती कर रिफीडिंग सिंड्रोम से बचाते हुए पोषण दिया। इसके बाद मनोरोग विभाग में फैमिली-बेस्ड ट्रीटमेंट (FBT) शुरू हुआ। 12 महीने के कठिन इलाज, माता-पिता की देखरेख में संतुलित भोजन और थेरेपी के बाद अनन्या का वजन वापस 50 किलो हुआ, पीरियड्स शुरू हुए और उसने भोजन के साथ अपनी जंग जीत ली।',
        gu: 'અમદાવાદની ૧૭ વર્ષીય તેજસ્વી વિદ્યાર્થિની અનન્યા મેડિકલ પ્રવેશ પરીક્ષાની તૈયારી કરતી હતી. વેકેશનમાં બે કિલો વજન ઘટતાં સંબંધીએ વખાણ કર્યા, જેથી તેણે "હેલ્ધી ડાયટ" ના નામે ખાવાનું ઓછું કર્યું. ચાર મહિનામાં આ સામાન્ય ડાયટિંગ જીવલેણ વળગણમાં ફેરવાઈ ગયું: અનન્યાએ અનાજ, તેલ અને દૂધ સાવ બંધ કરી દીધા અને આખો દિવસ માત્ર ૪૦૦-૪૫૦ કેલરી (કાકડી અને બ્લેક કોફી) પર રહેવા લાગી. તેનું વજન ૫૨ કિલોથી ઘટીને માત્ર ૩૪ કિલો (BMI 13.8) થઈ ગયું. પાંસળીઓ ઉપસી આવી હોવા છતાં અરીસામાં જોઈને તે રડતી કે "મારા સાથળ હજુ બહુ જાડા છે." તે ખોરાકના નાના-નાના ટુકડા કરીને કલાકો સુધી બેસી રહેતી, ચક્કર આવવા છતાં રાત્રે રૂમ બંધ કરીને ૫૦૦ કૂદકા મારતી અને પોતાનું પાતળાપણું છુપાવવા મોટા કપડાં પહેરતી. તેનું માસિક ધર્મ સાવ બંધ થઈ ગયું. ક્લાસરૂમમાં અચાનક ઢળી પડતાં તેને હોસ્પિટલ લઈ જવાઈ, જ્યાં તેના હૃદયના ધબકારા ઘટીને ૩૬ થઈ ગયા હોવાનું માલૂમ પડ્યું. ડૉક્ટરોએ તેને તાત્કાલિક દાખલ કરી પોષણ આપ્યું અને ફેમિલી-બેઝ્ડ થેરાપી (FBT) શરૂ કરી. ૧૨ મહિનાના સઘન કાઉન્સેલિંગ, માતા-પિતાના પ્રેમભર્યા સાથ અને સારવાર પછી અનન્યાનું વજન ૫૦ કિલો સામાન્ય થયું, માસિક નિયમિત બન્યું અને તે બીમારીના સકંજામાંથી મુક્ત થઈ.',
      },
      {
        en: 'Dev, a 20-year-old collegiate track runner in Vadodara, developed an obsessive drive for leanness, believing that shedding every possible gram of body fat would shave seconds off his distance timings. He drastically curtailed his caloric intake to isolated protein shakes and raw greens while running up to 20 kilometers daily, ignoring recurrent metatarsal stress fractures and severe joint aches. Despite his coach warning him of severe muscle wasting and his ribs visibly showing through his jersey, Dev felt terrified that eating a bowl of rice would make him "sluggish and fat." When routine team medical screening identified sinus bradycardia and low bone mineral density, he was referred to sports psychiatry. Engaged in Enhanced Cognitive Behavioral Therapy for Eating Disorders (CBT-E) paired with clinical sports nutrition, Dev reconstructed his view of nutritional fuel, restored a healthy body weight, and safely resumed university athletics.',
        hi: 'वडोदरा के 20 वर्षीय कॉलेज एथलीट देव में शरीर की चर्बी घटाने का ऐसा जुनून सवार हुआ कि उसने सामान्य भोजन त्याग दिया। दौड़ में तेज होने के भ्रम में वह केवल प्रोटीन पाउडर और उबली सब्जियों पर रहने लगा और हड्डियों में फ्रैक्चर के बावजूद रोज 20 किलोमीटर दौड़ता रहा। अत्यधिक कमजोरी और पसलियां दिखने के बाद भी उसे लगता था कि एक कटोरी दाल-चावल खाने से वह "मोटा और धीमा" हो जाएगा। स्पोर्ट्स साइकियाट्रिस्ट द्वारा CBT-E थेरेपी और सही पोषण मार्गदर्शन से देव ने भोजन के प्रति अपना डर दूर किया, स्वस्थ वजन हासिल किया और खेल में सुरक्षित वापसी की।',
        gu: 'વડોદરાના ૨૦ વર્ષીય કોલેજ એથ્લેટ દેવમાં દોડમાં ઝડપી બનવા માટે શરીરની ચરબી સાવ ખતમ કરી દેવાનું વળગણ પેદા થયું. તેણે ભાત, રોટલી કે તેલવાળો ખોરાક સાવ બંધ કરી દીધો અને પગના હાડકામાં તિરાડ હોવા છતાં દરરોજ ૨૦ કિમી દોડતો રહ્યો. કોચની ચેતવણી છતાં તેને ડર હતો કે સાદો ખોરાક ખાવાથી પણ તે જાડો થઈ જશે. સ્પોર્ટ્સ સાયકિયાટ્રિસ્ટ દ્વારા CBT-E થેરાપી અને પોષણ માર્ગદર્શન મેળવીને દેવે ખોરાકનો ભય જીત્યો, વજન સામાન્ય કર્યું અને રમતગમતમાં ફરી સફળ શરૂઆત કરી.',
      },
      {
        en: 'Priya, a 24-year-old software consultant in Surat, developed adult-onset restrictive anorexia following prolonged workplace stress and critical comments regarding her appearance. She established rigid, ritualized food rules, refusing to eat with colleagues and secretly fasting for entire weekends to compensate for modest workday meals. Weighing just 38 kg, she experienced persistent dizziness, severe constipation, and profound social isolation. Recognizing her deteriorating health, her family consulted an eating disorders specialist. Through individual CBT-E and structured nutritional counseling, Priya learned to dismantle her perfectionistic food rules, re-established balanced intuitive eating, and regained vital physical energy and social connection.',
        hi: 'सूरत की 24 वर्षीय सॉफ्टवेयर कंसलटेंट प्रिया को दफ्तर के तनाव और अपने लुक्स पर सहकर्मियों की टिप्पणियों के बाद एनोरेक्सिया हो गया। उसने साथ में खाना खाना पूरी तरह छोड़ दिया और दफ्तर के एक साधारण भोजन की भरपाई के लिए पूरे वीकेंड भूखे रहने लगी। 38 किलो तक वजन गिर जाने से उसे चक्कर आते थे और उसने दोस्तों से मिलना बंद कर दिया। मनोचिकित्सक की CBT-E थेरेपी और सही डाइट प्लान की मदद से प्रिया ने अपने खाने के कड़े नियमों को तोड़ा, संतुलित खान-पान अपनाया और अपनी खोई हुई ऊर्जा वापस पाई।',
        gu: 'સુરતની ૨૪ વર્ષીય સોફ્ટવેર કન્સલ્ટન્ટ પ્રિયાને ઓફિસના તણાવ અને દેખાવ અંગેની ટિપ્પણીઓ બાદ એનરેક્સિયા થયો. તેણે સહકર્મચારીઓ સાથે જમવાનું બંધ કરી દીધું અને સામાન્ય ભોજન કર્યા પછી પણ કલાકો સુધી ભૂખ્યા રહેવાની સજા પોતાની જાતને આપવા લાગી. તેનું વજન માત્ર ૩૮ કિલો થઈ ગયું અને ચક્કર આવવા લાગ્યા. નિષ્ણાત સાયકિયાટ્રિસ્ટની CBT-E થેરાપી અને આહાર આયોજન દ્વારા પ્રિયાએ ભોજનનો ખોટો ડર દૂર કર્યો, નિયમિત આહાર શરૂ કર્યો અને નવું સ્વસ્થ જીવન મેળવ્યું.',
      },
    ],
    commonSymptoms: {
      en: [
        'Persistent restriction of food intake resulting in significantly low body weight',
        'Intense, overwhelming fear of weight gain or becoming fat despite being underweight',
        'Distorted body image (perceiving oneself as overweight despite severe thinness)',
        'Preoccupation with calorie counting, body checking, or ritualistic eating habits',
        'Amenorrhea (loss of menstrual periods) in females, dizziness, and cold intolerance',
      ],
      hi: [
        'वजन खतरनाक रूप से कम होने पर भी खाना बहुत कम खाना या छोड़ देना',
        'वजन बढ़ने या मोटे होने का लगातार अत्यधिक डर',
        'अत्यधिक दुबले होने पर भी खुद को मोटा समझना (बॉडी इमेज विकार)',
        'दिन भर कैलोरी गिनना और भोजन के टुकड़े-टुकड़े करके धीमे खाना',
        'लड़कियों में मासिक धर्म (पीरियड्स) बंद होना, अत्यधिक कमजोरी और ठंड लगना',
      ],
      gu: [
        'શરીર અત્યંત દૂબળું હોવા છતાં ખોરાક લેવાનું સતત ટાળવું',
        'વજન વધી જવાનો સતત તીવ્ર ડર રહેવો',
        'અતિશય પાતળા હોવા છતાં અરીસામાં પોતાને જાડા માનવા',
        'વારંવાર વજન માપવું અને કેલરીની ગણતરી કરવી',
        'માસિક ધર્મ બંધ થઈ જવો, ચક્કર આવવા અને ઠંડી સહન ન થવી',
      ],
    },
    dailyLifeImpact: {
      en: 'Anorexia nervosa is associated with a markedly increased risk of serious medical complications and death. Severe restriction can cause bradycardia, electrolyte disturbances, bone loss, gastrointestinal problems, and cognitive changes; urgent medical assessment is important when physical health is deteriorating. Chronic severe starvation leads to critical sinus bradycardia, pericardial effusions, hypokalemic arrhythmias, severe osteopenia with pathological fractures, gastroparesis, and loss of brain volume ("starvation brain") leading to cognitive slowing. Social lives crumble as individuals avoid all family dinners, peer gatherings, and social celebrations involving food. The illness inflicts intense emotional exhaustion and relational trauma across families.',
      hi: 'एनोरेक्सिया नर्वोसा में गंभीर शारीरिक जटिलताओं और मृत्यु का जोखिम बढ़ सकता है। लंबे समय तक बहुत कम भोजन लेने से हृदय की धड़कन धीमी होना, इलेक्ट्रोलाइट में बदलाव, हड्डियों की कमजोरी, पाचन संबंधी समस्याएँ और सोचने-समझने में कठिनाई हो सकती है। स्वास्थ्य बिगड़ने पर तुरंत चिकित्सकीय मूल्यांकन जरूरी है। मरीज भोजन से जुड़े किसी भी सामाजिक कार्यक्रम या पारिवारिक दावत में जाने से बचता है, जिससे वह अकेला पड़ जाता है। इस बीमारी के कारण पूरे परिवार में हर भोजन के समय भारी तनाव और रोना-धोना मचता है।',
      gu: 'એનોરેક્સિયા નર્વોસામાં ગંભીર શારીરિક જટિલતાઓ અને મૃત્યુનું જોખમ વધી શકે છે. લાંબા સમય સુધી ખૂબ ઓછું ખાવાથી હૃદયના ધબકારા ધીમા થવા, ઇલેક્ટ્રોલાઇટમાં ફેરફાર, હાડકાં નબળાં થવા, પાચન સમસ્યાઓ અને વિચારશક્તિમાં ફેરફાર થઈ શકે છે. આરોગ્ય બગડતું હોય તો તાત્કાલિક તબીબી મૂલ્યાંકન જરૂરી છે. સામાજિક પ્રસંગો કે લગ્ન-પાર્ટીઓમાં ખાવાનું ટાળવા માટે દર્દી એકલતામાં પુરાઈ રહે છે. દરેક ભોજન વખતે ઘરમાં ઝઘડા અને તણાવનું વાતાવરણ રહે છે, જેનાથી સમગ્ર પરિવાર માનસિક યાતના ભોગવે છે.',
    },
    causes: {
      en: 'Anorexia nervosa develops through interacting biological, psychological, developmental, and social influences. Genetic and family factors may contribute to vulnerability, but no single cause explains an individual's illness. Anxiety, perfectionistic traits, stressful experiences, weight-related stigma, and pressures about body shape can all be relevant. Prolonged undernutrition can itself affect mood, thinking, and appetite.',
      hi: 'एनोरेक्सिया नर्वोसा जैविक, मनोवैज्ञानिक, विकासात्मक और सामाजिक कारकों की परस्पर क्रिया से विकसित हो सकता है। आनुवंशिक और पारिवारिक कारक जोखिम में योगदान दे सकते हैं, लेकिन किसी एक कारण से व्यक्ति की बीमारी नहीं समझाई जा सकती। चिंता, पूर्णतावादी प्रवृत्तियाँ, तनावपूर्ण अनुभव, वजन को लेकर कलंक और शरीर के आकार से जुड़ा सामाजिक दबाव भूमिका निभा सकते हैं। लंबे समय तक कुपोषण स्वयं मनोदशा, सोच और भूख को प्रभावित कर सकता है।',
      gu: 'એનોરેક્સિયા નર્વોસા જૈવિક, માનસિક, વિકાસાત્મક અને સામાજિક પરિબળોની પરસ્પર અસરથી વિકસી શકે છે. આનુવંશિક અને પારિવારિક પરિબળો જોખમમાં ફાળો આપી શકે છે, પરંતુ કોઈ એક કારણથી વ્યક્તિની બીમારી સમજાવી શકાતી નથી. ચિંતા, પૂર્ણતાવાદી વલણ, તણાવપૂર્ણ અનુભવો, વજન અંગેનો કલંક અને શરીરના આકાર અંગેનું સામાજિક દબાણ અસર કરી શકે છે. લાંબા સમયનું કુપોષણ પોતે મનોદશા, વિચારશક્તિ અને ભૂખને અસર કરી શકે છે.',
    },
    riskFactors: {
      en: [
        'First-degree relative with an eating disorder, mood disorder, or obsessive-compulsive disorder',
        'Premorbid perfectionism, obsessive traits, negative emotionality, and high harm avoidance',
        'Engagement in appearance- or weight-centric activities (ballet, modeling, gymnastics, distance running)',
        'History of childhood weight teasing, bullying, or early childhood feeding difficulties',
        'Acculturative stress and intensive exposure to social media promoting "thinspiration" or extreme dieting',
      ],
      hi: [
        'परिवार में किसी को ईटिंग डिसऑर्डर, डिप्रेशन या ओसीडी (OCD) की बीमारी होना',
        'परफेक्शनिस्ट स्वभाव और हर बात में अत्यधिक डर या चिंता की प्रवृत्ति',
        'मॉडलिंग, डांस, जिमनास्टिक या एथलेटिक्स जैसी गतिविधियां जहां पतले शरीर का दबाव हो',
        'बचपन में वजन या शारीरिक बनावट को लेकर दोस्तों द्वारा चिढ़ाया जाना',
        'सोशल मीडिया पर डाइटिंग और अत्यधिक दुबलेपन को बढ़ावा देने वाले वीडियो देखना',
      ],
      gu: [
        'પરિવારમાં કોઈને ઈટિંગ ડિસઓર્ડર, ડિપ્રેશન કે ઓસીડી (OCD) હોવો',
        'અતિશય પરફેક્ટ રહેવાનો અને ચિંતાતુર સ્વભાવ',
        'મોડેલિંગ, નૃત્ય કે એથ્લેટિક્સ જેવી રમતો જેમાં પાતળા રહેવાનું દબાણ હોય',
        'બાળપણમાં વજન કે દેખાવને લઈને મજાક ઉડાવાઈ હોવી',
        'સોશિયલ મીડિયા પર ઝીરો ફિગરના ફોટા અને કડક ડાયટિંગના કન્ટેન્ટનો પ્રભાવ',
      ],
    },
    psychiatricAssessment: {
      en: 'Assessment requires a comprehensive medical and psychiatric examination: detailed developmental and eating trajectory, calculation of BMI and percentage of median BMI for age/sex, evaluation of vital signs (temperature, postural blood pressure, resting heart rate), comprehensive blood counts, serum electrolytes (potassium, magnesium, phosphate, calcium), renal and liver panels, and a 12-lead ECG to evaluate for prolonged QTc interval and life-threatening arrhythmias. Psychiatric screening assesses body dysmorphic schemas, depression, anxiety, and suicide risk.',
      hi: 'मनोचिकित्सक द्वारा विस्तृत शारीरिक और मानसिक मूल्यांकन किया जाता है: बचपन से खाने की आदतों का इतिहास, बीएमआई (BMI) की सटीक गणना, ब्लड प्रेशर, नाड़ी और तापमान की माप। साथ ही रक्त की पूरी जांच, इलेक्ट्रोलाइट्स (पोटेशियम, मैग्नीशियम, फॉस्फोरस), किडनी व लिवर फंक्शन, और ईसीजी (ECG) से दिल की धड़कन की जांच की जाती है ताकि अचानक कार्डियक अरेस्ट के खतरे को टाला जा सके। मरीज के तनाव और आत्महत्या के जोखिम की भी जांच होती है।',
      gu: 'મનોચિકિત્સક અને તબીબો દ્વારા સંપૂર્ણ શારીરિક અને માનસિક તપાસ થાય છે: બાળપણથી ખાવા-પીવાની ટેવો, BMI ની ગણતરી, બ્લડ પ્રેશર અને હૃદયના ધબકારાની ચકાસણી. લોહીના તમામ રિપોર્ટ, ઇલેક્ટ્રોલાઇટ્સ (પોટેશિયમ, કેલ્શિયમ), કિડની-લિવર ટેસ્ટ અને હૃદયની ગતિ તપાસવા ECG કરવામાં આવે છે જેથી હૃદય બંધ પડવાનું જોખમ ટાળી શકાય. દર્દીના ડિપ્રેશન અને આત્મહત્યાના જોખમનું પણ મૂલ્યાંકન થાય છે.',
    },
    diagnosisExplanation: {
      en: 'According to DSM-5-TR, Anorexia Nervosa requires: (1) Persistent restriction of energy intake relative to requirements leading to significantly low body weight (BMI < 18.5 kg/m² in adults, or less than minimally expected percentile in children/adolescents); (2) Intense fear of gaining weight or of becoming fat, or persistent behavior that interferes with weight gain despite low weight; and (3) Disturbance in the way in which one\'s body weight or shape is experienced, undue influence of body weight or shape on self-evaluation, or persistent lack of recognition of the seriousness of current low body weight. Subtypes: Restricting Type (weight loss accomplished solely through dieting, fasting, and/or excessive exercise without regular binge/purge behaviors) and Binge-Eating/Purging Type (the individual has regularly engaged in binge eating or purging behaviors like self-induced vomiting or laxative abuse over the past 3 months). In ICD-11, it is coded under 6B80.',
      hi: 'DSM-5-TR के अनुसार एनोरेक्सिया नर्वोसा का निदान तब किया जाता है जब: (1) व्यक्ति भोजन की मात्रा इतनी कम कर दे कि उसका वजन उम्र और कद के अनुसार सामान्य से बहुत नीचे गिर जाए (वयस्कों में BMI 18.5 से कम); (2) वजन बढ़ने या मोटे होने का लगातार अत्यधिक डर बना रहे; और (3) दुबले होने के बावजूद खुद को मोटा समझना, या अपनी जानलेवा कमजोरी को नजरअंदाज करना। इसके दो प्रकार होते हैं: (क) रेस्ट्रिक्टिंग टाइप (केवल खाना छोड़ना और अत्यधिक कसरत करना); और (ख) बिंज-ईटिंग/पर्जिंग टाइप (कम खाने के साथ-साथ कभी-कभी ज्यादा खाकर जानबूझकर उल्टी करना या जुलाब की दवाएं लेना)। ICD-11 में इसे 6B80 कोड दिया गया है।',
      gu: 'DSM-5-TR ના વૈજ્ઞાનિક નિયમો મુજબ એનોરેક્સિયાનું નિદાન ત્યારે થાય છે જ્યારે: (૧) ખોરાક સાવ ઓછો કરી દેવાથી શરીરનું વજન ઉંમર અને ઊંચાઈ કરતાં જોખમી સ્તરે ઘટી જાય (પુખ્ત વયે BMI 18.5 થી ઓછો); (૨) વજન વધી જવાનો તીવ્ર ભય કાયમ રહે; અને (૩) હાડપિંજર જેવા શરીર છતાં પોતાને જાડા માનવા અને બીમારીની ગંભીરતા ન સ્વીકારવી. આના બે પ્રકાર છે: (ક) રેસ્ટ્રિક્ટિંગ ટાઈપ (માત્ર ભૂખ્યા રહેવું અને અતિશય કસરત કરવી); અને (ખ) બિન્જ-ઈટિંગ/પર્જિંગ ટાઈપ (વધુ પડતું ખાઈને ઊલટી કરી નાખવી કે જુલાબ લેવા). ICD-11 માં આનો કોડ 6B80 છે.',
    },
    differentialConsiderations: {
      en: 'Differential diagnosis requires careful exclusion of medical conditions causing profound weight loss: occult malignancies, hyperthyroidism, Addison\'s disease, inflammatory bowel disease (Crohn\'s, ulcerative colitis), celiac disease, and chronic infections (tuberculosis, HIV). In psychiatric differentials: Avoidant/Restrictive Food Intake Disorder (ARFID) involves severe food restriction and emaciation due to sensory food aversions or fear of choking, but completely lacks body image distortion or desire for thinness; Major Depressive Disorder presents with appetite loss without fear of fatness; Obsessive-Compulsive Disorder involves food contamination fears without weight-shape distortion; and Bulimia Nervosa is distinguished by body weight that remains within or above normal ranges.',
      hi: 'इसे थायरॉयड की अधिकता (Hyperthyroidism), टीबी, कैंसर, आंतों की बीमारी (Crohn\'s / Celiac Disease) जैसी शारीरिक बीमारियों से अलग पहचानना जरूरी है जिनमें वजन गिरता है। मानसिक रोगों में: ARFID (जिसमें भोजन के स्वाद या गले में अटकने के डर से खाना छोड़ा जाता है, लेकिन इसमें पतले होने की चाह नहीं होती); डिप्रेशन (जिसमें भूख मर जाती है पर मोटे होने का डर नहीं होता); ओसीडी (गंदगी के डर से खाना न खाना); और बुलिमिया (जिसमें वजन सामान्य या अधिक रहता है) से इसे अलग तौला जाता है।',
      gu: 'આને થાઇરોઇડ, ટીબી, કેન્સર કે પાચનતંત્રના ગંભીર રોગોથી અલગ પાડવું જરૂરી છે જેનાથી વજન ઘટતું હોય. માનસિક રોગોમાં: ARFID (જેમાં સ્વાદ કે ગળામાં ફસાઈ જવાના ડરથી ખાવાનું ટાળવામાં આવે છે, પરંતુ વજન ઘટાડવાની કોઈ ઇચ્છા હોતી નથી); ડિપ્રેશન (જેમાં ભૂખ મરી જાય છે પણ જાડા થવાનો ડર નથી હોતો); ઓસીડી (OCD); અને બુલિમિયા (જેમાં વજન સામાન્ય હોય છે) થી તેનું ચોક્કસ તબીબી તારણ કાઢવું અનિવાર્ય છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Educating patient and family on medical consequences of starvation and the neurobiology of eating disorders.',
        hi: 'भुखमरी के शारीरिक खतरों और मस्तिष्क पर उसके प्रभाव के बारे में मरीज और परिवार को समझाना।',
        gu: 'ભૂખ્યા રહેવાથી શરીર અને મગજ પર થતા ગંભીર નુકસાન વિશે પરિવારને માર્ગદર્શન આપવું.',
      },
      lifestyleSupport: {
        en: 'Structured refeeding under medical supervision with balanced nutritional pacing to avoid refeeding syndrome.',
        hi: 'चिकित्सक की देखरेख में धीरे-धीरे संतुलित पोषण शुरू करना।',
        gu: 'ડૉક્ટરની દેખરેખ હેઠળ ધીમે ધીમે પૌષ્ટિક આહાર પુનઃ શરૂ કરવો.',
      },
      psychotherapy: {
        en: 'Family-Based Treatment (FBT / Maudsley approach) for adolescents, Cognitive Behavioral Therapy-Enhanced (CBT-E), and Adolescent-Focused Therapy.',
        hi: 'फैमिली-बेस्ड ट्रीटमेंट (FBT), कॉग्निटिव बिहेवियरल थेरेपी (CBT-E) और व्यक्तिगत मनोचिकित्सा।',
        gu: 'ફેમિલી-બેઝ્ડ થેરાપી (FBT) અને કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT-E).',
      },
      medications: {
        en: 'No medication is primary for anorexia; medications may cautiously address comorbid severe depression or anxiety once nutrition stabilizes.',
        hi: 'इसकी कोई प्राथमिक दवा नहीं है; पोषण सुधरने के बाद डिप्रेशन या एंग्जायटी के लिए दवाएं दी जा सकती हैं।',
        gu: 'કોઈ પ્રાથમિક દવા નથી; સહાયક સારવાર તરીકે જરૂર જણાયે ડિપ્રેશનની દવા આપી શકાય છે.',
      },
      familySocialInterventions: {
        en: 'Intensive family support to facilitate mealtime routines without conflict or shame.',
        hi: 'बिना डांटे या तनाव दिए भोजन कराने में परिवार की सक्रिय सहायता।',
        gu: 'તણાવમુક્ત વાતાવરણમાં ભોજન કરાવવા માટે પરિવારને સહયોગ આપવો.',
      },
    },
    treatmentGoals: {
      en: 'Restoration of healthy weight, normalization of eating behaviors, correction of cognitive distortions, and relapse prevention.',
      hi: 'स्वस्थ वजन की पुनर्स्थापना, खान-पान की सामान्य आदतें बनाना और सोच में सुधार।',
      gu: 'સ્વસ્થ વજન પાછું મેળવવું, ખાવાની સામાન્ય આદતો કેળવવી અને મનમાંથી ડર દૂર કરવો.',
    },
    recoveryOutlook: {
      en: 'The recovery trajectory in Anorexia Nervosa is a protracted, multi-stage process requiring sustained multidisciplinary dedication, yet full physical and psychological recovery is achievable. Approximately 50% to 60% of individuals achieve sustained remission when treated early with evidence-based interventions like Family-Based Treatment (FBT) or Enhanced Cognitive Behavioral Therapy (CBT-E). Early intervention within the first three years of illness onset dramatically boosts complete recovery rates, reverses starvation-induced structural brain changes, normalizes sinus rhythm and bone density trajectories, and restores reproductive fertility. While roughly 20% develop a protracted or chronic course requiring long-term harm reduction, dedicated nutritional rehabilitation, compassionate therapeutic support, and peer solidarity consistently enable sufferers to reclaim joyful, values-aligned lives free from the tyranny of the scale.',
      hi: 'एनोरेक्सिया नर्वोसा से पूरी तरह ठीक होने की यात्रा लंबी और धैर्यपूर्ण होती है, लेकिन सही समय पर मिला वैज्ञानिक इलाज पूरी तरह स्वस्थ जीवन लौटा सकता है। 50% से 60% मरीज फैमिली-बेस्ड ट्रीटमेंट (FBT) और सीबीटी-ई (CBT-E) जैसी आधुनिक मनोवैज्ञानिक पद्धतियों से पूरी तरह ठीक हो जाते हैं। बीमारी के शुरुआती तीन वर्षों में इलाज शुरू होने पर ठीक होने की संभावना सबसे अधिक होती है; इससे मस्तिष्क का सिकुड़ना रुकता है, दिल की धड़कन सामान्य होती है, हड्डियां मजबूत होती हैं और लड़कियों में पीरियड्स व प्रजनन क्षमता वापस लौट आती है। यद्यपि कुछ मामलों में इलाज लंबा चलता है, लेकिन निरंतर पारिवारिक सहयोग, सही पोषण और मनोचिकित्सा की मदद से मरीज इस घातक बीमारी को हराकर सामान्य, खुशहाल और सफल जीवन जीने में पूरी तरह सक्षम होते हैं।',
      gu: 'એનોરેક્સિયા નર્વોસામાંથી સાજા થવાની પ્રક્રિયા ધીમી અને લાંબી છે, પરંતુ યોગ્ય સમયે શરૂ થયેલી વૈજ્ઞાનિક સારવારથી દર્દી ૧૦૦% સામાન્ય જીવનમાં પાછો ફરી શકે છે. ફેમિલી-બેઝ્ડ થેરાપી (FBT) અને આધુનિક કાઉન્સેલિંગ દ્વારા ૫૦% થી ૬૦% દર્દીઓ સંપૂર્ણપણે સાજા થઈ જાય છે. બીમારી શરૂ થયાના પ્રથમ ત્રણ વર્ષમાં સારવાર મળે તો સાજા થવાનો દર ખૂબ ઊંચો રહે છે; હૃદયના ધબકારા સામાન્ય થાય છે, હાડકાં મજબૂત બને છે, મગજની કાર્યક્ષમતા સુધરે છે અને માસિક ધર્મ ફરી નિયમિત થઈ જાય છે. પરિવારનો સ્નેહપૂર્ણ સાથ, નિયમિત પૌષ્ટિક આહાર અને મનોચિકિત્સકનું માર્ગદર્શન દર્દીને કેલરી અને વજનના જીવલેણ ભયમાંથી મુક્ત કરીને નવી જિંદગી આપે છે.',
    },
    relapsePrevention: {
      en: 'Regular outpatient monitoring, maintaining regular eating schedules, and proactive psychological coping during stressful transitions.',
      hi: 'नियमित फॉलो-अप, भोजन का निश्चित समय रखना और तनाव के समय सावधानी बरतना।',
      gu: 'નિયમિત ફોલો-અપ અને તણાવપૂર્ણ સમયે તાત્કાલિક સલાહ લેવી.',
    },
    urgentWarningSigns: {
      en: 'Severe bradycardia (heart rate < 40 bpm), postural hypotension, fainting, severe electrolyte derangement, or acute suicidal ideation.',
      hi: 'दिल की धड़कन बहुत धीमी होना (<40), बेहोशी, इलेक्ट्रोलाइट्स की भारी कमी या आत्महत्या के विचार।',
      gu: 'હૃદયના ધબકારા અત્યંત ધીમા પડવા, બેભાન થવું કે જીવ જોખમમાં હોવાના સંકેતો.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Anorexia is just a teenage diet fad or attention-seeking vanity.',
          hi: 'एनोरेक्सिया केवल डाइटिंग का शौक या दिखावा है।',
          gu: 'એનોરેક્સિયા એ માત્ર મોર્ડન ડાયટિંગનો શોખ કે નાટક છે.',
        },
        fact: {
          en: 'Anorexia nervosa is a life-threatening, biologically grounded psychiatric illness with among the highest mortality rates in psychiatry.',
          hi: 'यह एक गंभीर, जानलेवा मानसिक और शारीरिक बीमारी है जिसका तुरंत इलाज जरूरी है।',
          gu: 'આ એક ગંભીર, જીવલેણ જૈવિક-માનસિક બીમારી છે જેને તાત્કાલિક સારવારની જરૂર હોય છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can males develop anorexia nervosa?',
          hi: 'क्या पुरुषों या लड़कों को भी एनोरेक्सिया हो सकता है?',
          gu: 'શું પુરુષોમાં પણ આ બીમારી થઈ શકે છે?',
        },
        answer: {
          en: 'Yes. Anorexia affects individuals of all genders, backgrounds, and ages, though it is historically underrecognized in males.',
          hi: 'हाँ, यह बीमारी सभी उम्र और लिंग के लोगों को हो सकती है। लड़कों और पुरुषों में भी इसके मामले पाए जाते हैं।',
          gu: 'હા, આ બીમારી પુરુષો અને સ્ત્રીઓ બંનેમાં થઈ શકે છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'Randomized controlled trials confirm Family-Based Treatment (FBT / Maudsley approach) as the most efficacious first-line outpatient therapy for adolescents with anorexia nervosa, yielding superior long-term remission rates.',
          hi: 'क्लिनिकल अध्ययनों से सिद्ध है कि किशोरों में एनोरेक्सिया के इलाज के लिए फैमिली-बेस्ड ट्रीटमेंट (FBT) सबसे प्रभावी थेरेपी है, जिससे ठीक होने की दर काफी अधिक होती है।',
          gu: 'ક્લિનિકલ ટ્રાયલ્સ સાબિત કરે છે કે કિશોરોમાં એનોરેક્સિયાની સારવાર માટે ફેમિલી-બેઝ્ડ ટ્રીટમેન્ટ (FBT) સર્વોત્તમ થેરાપી છે, જે લાંબા ગાળે ઉત્તમ પરિણામો આપે છે.',
        },
        citationRef: 'Archives of General Psychiatry Trial',
      },
      {
        fact: {
          en: 'Clinical trials demonstrate Enhanced Cognitive Behavioral Therapy (CBT-E) produces significant weight restoration and sustained reduction in core eating disorder psychopathology in adults.',
          hi: 'अध्ययनों से प्रमाणित है कि वयस्कों में एन्हांस्ड कॉग्निटिव बिहेवियरल थेरेपी (CBT-E) वजन बढ़ाने और खाने के डर को खत्म करने में अत्यधिक प्रभावी है।',
          gu: 'સંશોધનો દર્શાવે છે કે પુખ્ત વયના દર્દીઓમાં વિસ્તૃત સીબીટી (CBT-E) થેરાપી વજન સામાન્ય કરવામાં અને આહાર સંબંધિત માનસિક ભય દૂર કરવામાં અત્યંત અસરકારક છે.',
        },
        citationRef: 'NICE Clinical Guideline NG69',
      },
      {
        fact: {
          en: 'Evidence-based nutritional rehabilitation protocols emphasizing gradual caloric reintroduction with electrolyte monitoring effectively eliminate fatal refeeding syndrome.',
          hi: 'वैज्ञानिक पोषण दिशानिर्देशों के अनुसार, धीरे-धीरे कैलोरी बढ़ाना और इलेक्ट्रोलाइट्स की निगरानी करना जानलेवा रिफीडिंग सिंड्रोम के खतरे को पूरी तरह टाल देता है।',
          gu: 'વૈજ્ઞાનિક પોષણ પદ્ધતિ દર્શાવે છે કે ધીમે ધીમે આહાર વધારવાથી અને ક્ષારોની તપાસ રાખવાથી જીવલેણ રિફીડિંગ સિન્ડ્રોમનું જોખમ ટળી જાય છે.',
        },
        citationRef: 'The Lancet Review on Anorexia',
      },
      {
        fact: {
          en: 'Systematic reviews confirm early intervention within the first 1–2 years of illness onset dramatically decreases the risk of chronic intractable illness and physical morbidity.',
          hi: 'समीक्षाओं से स्पष्ट है कि बीमारी के शुरुआती एक-दो वर्षों में सही इलाज शुरू होने से इसके गंभीर या लाइलाज होने का खतरा काफी कम हो जाता है।',
          gu: 'સમીક્ષાઓ પુષ્ટિ કરે છે કે રોગના શરૂઆતના એક-બે વર્ષમાં જ યોગ્ય સારવાર શરૂ થવાથી બીમારી ગંભીર થતી અટકે છે.',
        },
        citationRef: 'APA Eating Disorder Guidelines',
      },
    ],
    references: [
      { citation: 'Treasure J, Duarte TA, Schmidt U. Anorexia nervosa. Lancet. 2020;395(10227):898-911.', source: 'The Lancet', year: '2020' },
      { citation: 'National Institute for Health and Care Excellence (NICE). Eating disorders: recognition and treatment: NICE guideline [NG69]. London: NICE, 2020.', source: 'NICE Guidelines', year: '2020' },
      { citation: 'Lock J, Le Grange D, Agras WS, et al. Randomized clinical trial comparing family-based treatment with adolescent-focused individual therapy for adolescents with anorexia nervosa. Arch Gen Psychiatry. 2010;67(10):1025-1032.', source: 'Archives of General Psychiatry', year: '2010' },
      { citation: 'Fairburn CG, Cooper Z, Doll HA, et al. Transdiagnostic cognitive-behavioral therapy for patients with eating disorders: a two-site trial. Am J Psychiatry. 2009;166(3):311-319.', source: 'American Journal of Psychiatry', year: '2009' },
      { citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Eating Disorders, Fourth Edition. Washington, DC: APA, 2023.', source: 'APA Guidelines', year: '2023' },
    ],
    lastReviewed: '2026-09',
    reviewStatus: { lastReviewed: '2026-08', reviewer: '[VERIFY: Gujarat Institute of Mental Health]' },
    relatedIds: ['bulimia-nervosa', 'depression', 'cbt'],
    relatedContent: {
      conditionSlugs: ['bulimia-nervosa', 'binge-eating-disorder', 'obsessive-compulsive-disorder'],
      medicationIds: ['antipsychotics', 'antidepressants'],
      treatmentIds: ['family-therapy', 'cbt'],
    },
  },

  // 2. Eating Disorders: Bulimia Nervosa
  {
    id: 'bulimia-nervosa',
    slug: 'bulimia-nervosa',
    category: 'eating',
    conditionIcon: 'bulimia-nervosa',
    name: {
      en: 'Bulimia Nervosa',
      hi: 'बुलिमिया नर्वोसा (Bulimia Nervosa)',
      gu: 'બુલિમિયા નર્વોસા (અતિશય ખાવું અને પછી ઉલટી કરવી)',
    },
    medicalTerms: {
      en: 'Bulimia Nervosa (ICD-11: 6B81)',
      hi: 'बुलिमिया नर्वोसा',
      gu: 'બુલિમિયા નર્વોસા',
    },
    overview: {
      en: 'Bulimia Nervosa (ICD-11: 6B81, DSM-5-TR) is a severe, cyclic eating and psychiatric disorder characterized by recurrent, uncontrollable episodes of binge eating followed by inappropriate compensatory behaviors designed to prevent weight gain. During a binge, an individual consumes an objectively massive quantity of food within a discrete period of time while experiencing a terrifying sensation of complete loss of control. To mitigate overwhelming guilt, panic, and bodily distress, the individual resorts to purging mechanisms: self-induced vomiting, laxative or diuretic misuse, periods of prolonged starvation, or compulsive compensatory exercise. A person\'s self-esteem is morbidly dominated by body shape and weight. Because most individuals maintain an average or near-normal weight (BMI ≥ 18.5), the disorder often remains hidden in deep secrecy and shame for years, while silently inflicting life-threatening electrolyte collapses, cardiac arrhythmias, and severe gastrointestinal destruction.',
      hi: 'बुलिमिया नर्वोसा (Bulimia Nervosa) एक गंभीर और गुप्त मानसिक विकार है, जिसमें व्यक्ति कम समय में अनियंत्रित होकर बहुत अधिक मात्रा में भोजन खा लेता है (Binge eating), और फिर वजन बढ़ने के भयंकर डर, घबराहट और आत्मग्लानि के कारण जानबूझकर उल्टी करता है, पेट साफ करने वाली दवाइयां (Laxatives) खाता है, या कई दिनों तक भूखा रहता है। इस बीमारी में व्यक्ति का आत्मसम्मान पूरी तरह इस बात पर निर्भर करता है कि उसका वजन और शरीर का आकार कैसा है। चूंकि बुलिमिया से पीड़ित अधिकांश लोगों का वजन सामान्य या सामान्य से थोड़ा अधिक होता है, इसलिए परिवार और दोस्तों को वर्षों तक इस बीमारी का पता नहीं चलता। लेकिन अंदर ही अंदर यह शरीर में पोटेशियम की खतरनाक कमी, दिल की धड़कन का रुकना और आंतों व दांतों को गंभीर रूप से नुकसान पहुंचाता है।',
      gu: 'બુલિમિયા નર્વોસા એ એક ગંભીર અને છૂપી માનસિક બીમારી છે, જેમાં વ્યક્તિ થોડા સમયમાં કાબૂ ગુમાવીને અતિશય માત્રામાં ખોરાક ખાઈ લે છે (બિન્જ ઈટિંગ), અને પછી વજન વધી જવાના ડર, પસ્તાવા અને ગભરાટના કારણે જાતે આંગળી નાખીને ઊલટી કરી નાખે છે, જુલાબની દવાઓ લે છે કે ભૂખ્યા રહે છે. દર્દીનું સમગ્ર આત્મસન્માન તેના વજન અને શરીરના દેખાવ પર ટકેલું હોય છે. મોટાભાગના દર્દીઓનું વજન સામાન્ય હોવાથી પરિવારજનોને વર્ષો સુધી આ ખતરનાક બીમારીની ખબર પડતી નથી. છૂપી રીતે ચાલતી આ બીમારી શરીરમાં પોટેશિયમનું પ્રમાણ જોખમી રીતે ઘટાડી નાખે છે, જેનાથી અચાનક હૃદય બંધ પડવાનું અને દાંત-અન્નનળીને ગંભીર નુકસાન થવાનું જોખમ રહે છે.',
    },
    illustrativeExamples: [
      {
        en: 'Rahul, a 23-year-old software developer in Bengaluru, began rigidly restricting his diet after friends teased him about his weight during college. By daytime, he adhered to extreme calorie restriction, skipping breakfast and consuming only a plain salad for lunch. However, after returning to his apartment late at night exhausted and stressed, intense biological starvation and emotional tension overwhelmed his willpower. In a dissociated, frantic state, Rahul would order two family-sized pizzas, a box of garlic bread, a tub of ice cream, and chocolate brownies—consuming over 4,500 calories in under 40 minutes while standing over the kitchen sink. As soon as the binge concluded, waves of catastrophic panic, self-loathing, and terror of becoming obese engulfed him. Rahul would sprint into the bathroom, turn the shower on to drown the sound, and repeatedly thrust his fingers down his throat until bile and blood-streaked gastric acid burned his throat. This secretive ritual escalated to occurring 5 to 6 nights a week over eighteen months. Rahul developed painful swelling of the salivary glands under his jaw (producing a swollen "chipmunk face"), erosive dental decay, chronic heartburn, and sudden dizzy spells. One morning at his desk, Rahul suffered severe cardiac palpitations and lightheadedness. Emergency medical blood testing revealed critical hypokalemia with a serum potassium of 2.6 mEq/L and ECG abnormalities, placing him at immediate risk of fatal ventricular fibrillation. After urgent electrolyte stabilization, a psychiatrist initiated high-dose Fluoxetine and manualized Cognitive Behavioral Therapy for Eating Disorders (CBT-ED). By implementing structured regular meals (eliminating daytime starvation), identifying emotional triggers, and reframing body image shame, Rahul successfully dismantled the binge-purge cycle and regained cardiac and psychological health.',
        hi: 'बेंगलुरु में 23 वर्षीय सॉफ्टवेयर इंजीनियर राहुल ने कॉलेज में दोस्तों द्वारा वजन को लेकर ताना मारे जाने के बाद सख्त डाइटिंग शुरू की थी। दिन में वह नाश्ता छोड़ देता और दोपहर में केवल खीरा-टमाटर खाता। लेकिन रात में ऑफिस के काम के तनाव और दिन भर की भुखमरी के कारण उसका आत्मनियंत्रण टूट जाता। रात को अकेले फ्लैट में राहुल पर खाने का ऐसा भूत सवार होता कि वह ऑनलाइन दो बड़े पिज्जा, गार्लिक ब्रेड, आइसक्रीम और पेस्ट्री मंगवाता और किचन के सिंक के पास खड़े-खड़े मात्र 40 मिनट में 4,500 से अधिक कैलोरी खा जाता। खाते समय उसे लगता कि वह अपने हाथों को रोक नहीं पा रहा है। खाना खत्म होते ही उसके मन में भारी पछतावा, घिन और मोटे होने का खौफ भर जाता। वह तुरंत बाथरूम में जाकर नल खोल देता ताकि आवाज बाहर न जाए और गले में उंगलियां डालकर तब तक उल्टी करता जब तक कि पेट से पित्त और खून के रेशे न निकल आएं। डेढ़ साल तक यह सिलसिला हफ्ते में 5 से 6 बार चलता रहा। राहुल के गालों के पास की लार ग्रंथियों में सूजन आ गई, दांतों की चमक उड़कर वे पीले पड़ गए और सीने में भयंकर जलन रहने लगी। एक दिन ऑफिस में अचानक उसका दिल बेतहाशा धड़कने लगा और चक्कर खाकर वह गिर पड़ा। अस्पताल में जांच कराने पर पता चला कि खून में पोटेशियम गिरकर 2.6 mEq/L रह गया था, जिससे दिल का दौरा पड़ने का खतरा था। इमरजेंसी में पोटेशियम चढ़ाने के बाद मनोरोग विशेषज्ञ ने दवा (Fluoxetine) और सीबीटी थेरेपी शुरू की। नियमित भोजन करने और तनाव को संभालने के तरीके सीखकर राहुल ने उल्टी करने की इस खतरनाक लत से पूरी तरह मुक्ति पाई।',
        gu: 'બેંગલુરુમાં સોફ્ટવેર એન્જિનિયર તરીકે કામ કરતા ૨૩ વર્ષીય રાહુલે કોલેજમાં મિત્રોની મજાક પછી આકરી ડાયટિંગ શરૂ કરી હતી. દિવસ દરમિયાન તે ભૂખ્યો રહેતો અને બપોરે માત્ર સલાડ ખાતો. પરંતુ રાત્રે ઘરે એકલા હોવાથી અને કામના તણાવ વચ્ચે ભૂખ સહન ન થતાં તેનો કાબૂ છૂટી જતો. રાત્રે ૧૧ વાગ્યે તે બે મોટા પીઝા, ગાર્લિક બ્રેડ, આઈસ્ક્રીમ અને ચોકલેટ મંગાવીને ઊભાં-ઊભાં ૪૦ મિનિટમાં ૪,૫૦૦ કેલરી ખાઈ જતો. પેટ ભરાઈ ગયા પછી તેને ભયંકર પસ્તાવો અને જાડા થઈ જવાનો ફફડાટ થતો. તે તરત બાથરૂમમાં શાવર ચાલુ કરીને મોંમાં આંગળી નાખીને બળજબરીથી બધું ઓકી કાઢતો. દોઢ વર્ષથી અઠવાડિયામાં ૫-૬ વાર આ છૂપો સિલસિલો ચાલતો હતો. રાહુલના ગાલ નીચેની લાળગ્રંથિઓ સૂજી ગઈ, દાંત કાળા-પીળા થઈ ગયા અને ગળામાં સતત બળતરા રહેતી. એક દિવસ ઓફિસમાં અચાનક હૃદયના ધબકારા અનિયમિત થઈ જતાં તે ઢળી પડ્યો. બ્લડ ટેસ્ટમાં પોટેશિયમનું સ્તર ઘટીને ૨.૬ થઈ ગયું હતું, જેનાથી હૃદય ગમે ત્યારે બંધ પડી શકે તેમ હતું. હોસ્પિટલમાં તાત્કાલિક સારવાર પછી સાયકિયાટ્રિસ્ટે તેને દવાઓ અને ખાસ CBT થેરાપી આપી. નિયમિત સમયે યોગ્ય આહાર લેવાનું શીખીને અને મનમાંથી વજનનો ડર દૂર કરીને રાહુલે આ જીવલેણ ચક્રમાંથી કાયમ માટે છુટકારો મેળવ્યો.',
      },
      {
        en: 'Meera, a 21-year-old undergraduate student in Rajkot maintaining a normal body weight, experienced recurrent distress during stressful examination periods. Unable to stop herself, she would consume vast quantities of traditional sweets, fried farsan, and packaged snacks in secret, feeling completely out of control. Consumed by panic over potential weight gain, Meera began secretly abusing over-the-counter laxatives and spending three hours every night performing punishing treadmill running. Severe abdominal cramping, chronic dehydration, and social withdrawal alerted her parents, who arranged a psychiatric consultation. Through structured outpatient CBT-ED and guided nutritional meal planning, Meera learned to stop compensatory purging, manage academic anxiety through adaptive coping skills, and rebuild healthy gastrointestinal function.',
        hi: 'राजकोट की 21 वर्षीय कॉलेज छात्रा मीरा सामान्य वजन की होने के बावजूद परीक्षा के तनाव में अनियंत्रित रूप से बहुत सारा मीठा और तला-भुना खा लेती थी। इसके तुरंत बाद वजन बढ़ने के डर से वह छिपकर पेट साफ करने वाली दवाइयां (लैक्सेटिव) खाती और रात-रात भर ट्रेडमिल पर दौड़ती। पेट में भयंकर मरोड़ और पानी की कमी होने पर माता-पिता उसे मनोचिकित्सक के पास ले गए। सीबीटी थेरेपी और खान-पान के सही समय-सारणी से मीरा ने दवाइयों का गलत इस्तेमाल बंद किया और तनाव से निपटना सीखा।',
        gu: 'રાજકોટની ૨૧ વર્ષીય કોલેજ વિદ્યાર્થિની મીરા સામાન્ય વજન ધરાવતી હોવા છતાં પરીક્ષાના તણાવમાં છૂપી રીતે ખૂબ મીઠાઈઓ અને તળેલો નાસ્તો ખાઈ લેતી હતી. ત્યારબાદ વજન વધી જવાના ગભરાટમાં તે જુલાબની દવાઓ લેતી અને કલાકો સુધી કસરત કરતી. પેટમાં સતત દુખાવો અને નબળાઈ જોઈને પરિવારે સાયકિયાટ્રિસ્ટનો સંપર્ક કર્યો. CBT થેરાપી અને નિયમિત ભોજન વ્યવસ્થા દ્વારા મીરાએ બુલિમિયા પર વિજય મેળવ્યો અને તણાવ સામે લડવાનું શીખી લીધું.',
      },
      {
        en: 'Alok, a 27-year-old financial analyst in Mumbai, hid his bulimia for over four years. Exhausted by high-pressure banking hours, he binged on fast food in his parked car before driving home, then purged in the privacy of his ensuite bathroom. It was only when his dentist identified extensive palatal enamel dissolution and referred him to a clinic that Alok acknowledged his condition. Cognitive Behavioral Therapy for Eating Disorders focusing on distress tolerance alongside fluoxetine enabled Alok to establish regular eating patterns, eliminate compensatory purging entirely, and protect his long-term gastrointestinal and oral health.',
        hi: 'मुंबई के 27 वर्षीय वित्तीय विश्लेषक आलोक पिछले चार वर्षों से बुलिमिया छिपा रहे थे। दफ्तर के भारी दबाव के बाद वे कार में ही फास्ट फूड खाते और घर जाकर उल्टी करते। जब उनके डेंटिस्ट ने दांतों के इनेमल के घिसने पर चेतावनी दी, तब वे मनोरोग विशेषज्ञ के पास पहुंचे। थेरेपी और दवाओं की मदद से आलोक ने अपनी यह पुरानी आदत पूरी तरह छोड़ दी और स्वस्थ जीवनशैली अपनाई।',
        gu: 'મુંબઈના ૨૭ વર્ષીય ફાઇનાન્સિયલ એનાલિસ્ટ આલોક ચાર વર્ષથી બુલિમિયા છુપાવી રહ્યા હતા. કામના ભારે તણાવ બાદ તેઓ બહાર અતિશય ખાતા અને ઘરે જઈને ઊલટી કરતા. દાંતના ડૉક્ટરે જ્યારે દાંતના ઇનેમલ ઘસાઈ જવાની ગંભીરતા સમજાવી ત્યારે તેમણે મનોચિકિત્સકની સલાહ લીધી. સાયકોથેરાપી અને દવાઓથી આલોકે ઊલટી કરવાની લત કાયમ માટે બંધ કરી અને સ્વસ્થ બન્યા.',
      },
    ],
    commonSymptoms: {
      en: [
        'Recurrent episodes of binge eating with an intense feeling of loss of control',
        'Recurrent inappropriate compensatory behaviors (self-induced vomiting, laxatives, extreme fasting)',
        'Self-evaluation unduly influenced by body shape and weight',
        'Secrecy around food, eating in isolation, and rushing to the bathroom after meals',
        'Sore throat, dental enamel erosion, swollen salivary glands (chipmunk cheeks)',
      ],
      hi: [
        'अनियंत्रित होकर बहुत तेजी से अत्यधिक भोजन खा लेना',
        'वजन रोकने के लिए जानबूझकर उल्टी करना या दवाइयों का दुरुपयोग करना',
        'शरीर के आकार और वजन को लेकर लगातार अत्यधिक हीनभावना',
        'चुपके से खाना और भोजन के तुरंत बाद बाथरूम जाना',
        'गले में दर्द, दांतों का क्षरण और गालों के पास ग्रंथियों में सूजन',
      ],
      gu: [
        'કાબૂ વગર ટૂંકા સમયમાં વધુ પડતો ખોરાક ખાઈ જવો',
        'ખાધા પછી પસ્તાવો થવો અને ઊલટી કરી નાખવી',
        'શરીરના વજન અને દેખાવ અંગે સતત ચિંતા',
        'છૂપી રીતે ખાવું અને જમ્યા પછી તરત બાથરૂમ દોડી જવું',
        'દાંત ખરાબ થવા, ગળામાં સોજો અને વારંવાર એસિડિટી',
      ],
    },
    dailyLifeImpact: {
      en: 'Bulimia Nervosa inflicts profound psychosocial, financial, and physical devastation. Sufferers spend substantial financial resources purchasing binge foods and live under the exhausting burden of pervasive shame, guilt, and deceit. Relationships erode due to emotional instability, irritability, and social withdrawal around mealtimes. Physically, chronic self-induced vomiting produces life-threatening hypokalemic metabolic alkalosis, fatal cardiac arrhythmias, esophageal tears (Mallory-Weiss syndrome) or rupture (Boerhaave syndrome), chronic gastric reflux, severe dental perimylolysis (gastric acid dissolving tooth enamel), and painful parotid gland enlargement (sialadenosis).',
      hi: 'बुलिमिया नर्वोसा व्यक्ति के सामाजिक, आर्थिक और शारीरिक जीवन को तहस-नहस कर देता है। ज्यादा खाने के सामान खरीदने में भारी पैसे खर्च होते हैं और मरीज लगातार झूठ बोलने, अपराधबोध और शर्मिंदगी के बोझ तले दबता जाता है। भोजन से जुड़े कार्यक्रमों से बचने के कारण दोस्त और रिश्तेदार छूट जाते हैं। शारीरिक रूप से, बार-बार उल्टी करने से खून में पोटेशियम की घातक कमी हो जाती है जिससे अचानक दिल की धड़कन रुक सकती है, पेट के तेजाब से भोजन की नली (Food pipe) फट सकती है, दांत पूरी तरह सड़कर घिस जाते हैं, और चेहरे के दोनों तरफ की ग्रंथियां सूज जाती हैं।',
      gu: 'બુલિમિયા નર્વોસા દર્દીના સામાજિક, આર્થિક અને શારીરિક સ્વાસ્થ્યને પાયમાલ કરી નાખે છે. વધુ પડતો ખોરાક ખરીદવામાં મોટો આર્થિક ખર્ચ થાય છે અને વ્યક્તિ સતત જૂઠું બોલવાના અને અપરાધભાવના બોજ હેઠળ જીવે છે. સામાજિક મેળાવડાઓ અને ભોજનના પ્રસંગો ટાળવાને કારણે તે એકલો પડી જાય છે. શારીરિક રીતે, વારંવાર ઊલટી કરવાથી પોટેશિયમ ઘટીને અચાનક હાર્ટ એટેક આવી શકે છે, અન્નનળી ફાટી જવાનું જોખમ રહે છે, પેટનો એસિડ વારંવાર મોંમાં આવવાથી આગળના દાંત સાવ ઘસાઈને સડી જાય છે અને ગાલ નીચે સોજા ચડી જાય છે.',
    },
    causes: {
      en: 'The condition arises from an intricate interplay of neurobiology, behavioral conditioning, and psychosocial pressures. Genetic and family factors may contribute to vulnerability, alongside emotional, behavioural, and social influences. Neurobiological investigations identify dysregulation in central serotonergic satiety systems, altered dopamine reward responsiveness, and blunted postprandial gut hormone signaling (cholecystokinin). Crucially, rigid cognitive dietary restraint acts as the primary physiological and psychological engine: starvation triggers primal neurochemical survival drives that override cognitive inhibition, culminating in a binge, which subsequently triggers panic and compensatory purging.',
      hi: 'यह बीमारी मस्तिष्क की बनावट, आदतों और सामाजिक दबाव के मिले-जुले असर से होती है। आनुवंशिक और पारिवारिक कारक जोखिम में योगदान दे सकते हैं, साथ ही भावनात्मक, व्यवहारिक और सामाजिक प्रभाव भी भूमिका निभाते हैं। मस्तिष्क में सेरोटोनिन और डोपामाइन रसायनों के असंतुलन से भूख और संतुष्टि का संकेत ठीक से नहीं पहुंचता। सबसे मुख्य कारण सख्त डाइटिंग है: जब व्यक्ति खुद को लंबे समय तक भूखा रखता है, तो मस्तिष्क जीवित रहने के लिए भोजन की ऐसी तीव्र इच्छा पैदा करता है जिसे इच्छाशक्ति रोक नहीं पाती। इसके बाद व्यक्ति बेतहाशा खाता है और फिर डर के मारे उल्टी कर देता है।',
      gu: 'આ બીમારી જૈવિક રચના, મગજના રસાયણો અને સામાજિક દબાણના સંયોજનથી થાય છે. આનુવંશિક અને પારિવારિક પરિબળો જોખમમાં ફાળો આપી શકે છે; ભાવનાત્મક, વર્તણૂકીય અને સામાજિક પરિબળો પણ અસર કરે છે. મગજમાં સેરોટોનિન અને ડોપામાઇન જેવા રસાયણોની અનિયમિતતાથી ભૂખ અને તૃપ્તિનું સંતુલન બગડે છે. સૌથી મોટું કારણ આકરી ડાયટિંગ છે: દિવસ દરમિયાન ભૂખ્યા રહેવાથી મગજ આપમેળે ખોરાકની એટલી તીવ્ર તલપ પેદા કરે છે કે દર્દી કાબૂ ગુમાવી દે છે અને વધુ પડતું ખાઈ લીધા પછી ગભરાટમાં ઊલટી કરી નાખે છે.',
    },
    riskFactors: {
      en: [
        'History of rigid restrictive dieting or chronic weight-cycling ("yo-yo dieting")',
        'Premorbid overweight status or childhood exposure to weight-related teasing and criticism',
        'Affective dysregulation, high impulsivity, perfectionism, and comorbid mood or anxiety disorders',
        'Family history of eating disorders, substance use disorders, or major depressive disorder',
        'Internalization of westernized appearance ideals equating thinness with personal worth and success',
      ],
      hi: [
        'सख्त डाइटिंग करने या बार-बार वजन घटाने-बढ़ाने का इतिहास',
        'बचपन में अधिक वजन होना या परिवार व दोस्तों द्वारा मोटापे को लेकर ताने मिलना',
        'भावनाओं पर नियंत्रण न रख पाना, जल्दबाजी में कदम उठाना, और डिप्रेशन या चिंता का शिकार होना',
        'परिवार में किसी को खान-पान के विकार, नशे की लत या गंभीर डिप्रेशन होना',
        'दुबलेपन को ही सुंदरता और सफलता का एकमात्र पैमाना मान लेना',
      ],
      gu: [
        'વારંવાર કડક ડાયટિંગ કરવાનો કે વજન ઉતારવા-વધારવાનો ઇતિહાસ',
        'બાળપણમાં વજન વધુ હોવું અથવા મિત્રો દ્વારા વજન અંગે મજાક ઉડાવાઈ હોવી',
        'લાગણીઓ પર કાબૂ ન રાખી શકવો, આવેગશીલ સ્વભાવ અને ચિંતા કે ડિપ્રેશન',
        'પરિવારમાં ઈટિંગ ડિસઓર્ડર, વ્યસન કે ડિપ્રેશનનો ઇતિહાસ',
        'પાતળા દેખાવાને જ સફળતા અને સુંદરતા માનવાની માનસિકતા',
      ],
    },
    psychiatricAssessment: {
      en: 'Assessment includes a comprehensive clinical interview quantifying binge frequency, types of foods consumed, purging modalities (vomiting frequency, laxative/diuretic/enema abuse, intense exercise), and dietary restriction patterns. Physical evaluation inspects for Russell\'s sign (calluses or abrasions over the dorsal hand metacarpophalangeal joints from induced vomiting), bilateral parotid enlargement, and dental perimylolysis. Essential lab workup requires serum electrolytes (potassium, sodium, chloride, bicarbonate), magnesium, phosphate, renal function (BUN, creatinine), and a 12-lead ECG to detect hypokalemic ST-depression, T-wave flattening, or prominent U-waves.',
      hi: 'मनोचिकित्सक द्वारा खान-पान और उल्टी करने के तरीके का विस्तृत ब्योरा लिया जाता है (दवाइयों का उपयोग, व्यायाम आदि)। शारीरिक जांच में हाथों की उंगलियों पर निशान (Russell\'s sign - जो गले में उंगली डालने से बनते हैं), गालों के पास ग्रंथियों की सूजन, और दांतों के क्षरण की जांच की जाती है। सबसे जरूरी जांच खून में पोटेशियम, सोडियम, बाइकार्बोनेट और किडनी फंक्शन की होती है। दिल की धड़कन में किसी जानलेवा बदलाव को पकड़ने के लिए ईसीजी (ECG) किया जाता है।',
      gu: 'મનોચિકિત્સક દ્વારા દર્દીની ખાવા-પીવાની અને ઊલટી કરવાની રીતોની ઊંડાણપૂર્વક તપાસ થાય છે. શારીરિક તપાસમાં હાથની આંગળીઓ પરના ઘસરકા (Russell\'s sign), ગાલ નીચેની લાળગ્રંથિઓનો સોજો અને દાંતની સ્થિતિ તપાસવામાં આવે છે. લોહીમાં પોટેશિયમ, સોડિયમ અને કિડનીના કાર્યોનું પરીક્ષણ ખૂબ મહત્વનું છે. હૃદયના ધબકારા સામાન્ય છે કે નહીં તે ચકાસવા માટે ઈસીજી (ECG) કરવામાં આવે છે જેથી કોઈપણ જીવલેણ સ્થિતિ અટકાવી શકાય.',
    },
    diagnosisExplanation: {
      en: 'According to DSM-5-TR, Bulimia Nervosa requires: (1) Recurrent episodes of binge eating characterized by eating, in a discrete period of time, an amount of food definitely larger than what most individuals would eat under similar circumstances, accompanied by a sense of lack of control over eating during the episode; (2) Recurrent inappropriate compensatory behaviors in order to prevent weight gain (self-induced vomiting, laxative/diuretic misuse, fasting, or excessive exercise); (3) The binge eating and inappropriate compensatory behaviors both occur, on average, at least once a week for 3 months; (4) Self-evaluation is unduly influenced by body shape and weight; and (5) The disturbance does not occur exclusively during episodes of Anorexia Nervosa. Severity is rated by the frequency of inappropriate compensatory behaviors per week: Mild (1–3), Moderate (4–7), Severe (8–13), and Extreme (14 or more). In ICD-11, it is classified under 6B81.',
      hi: 'DSM-5-TR के अनुसार बुलिमिया नर्वोसा का निदान तब तय होता है जब: (1) व्यक्ति थोड़े समय में बहुत अधिक मात्रा में भोजन खा लेता है और उसका खाने पर कोई नियंत्रण नहीं रहता; (2) वजन बढ़ने से रोकने के लिए वह जानबूझकर उल्टी करता है, जुलाब लेता है, भूखा रहता है या अत्यधिक कसरत करता है; (3) यह बिंज-ईटिंग और उल्टी करने का सिलसिला कम से कम 3 महीने तक हर हफ्ते औसतन 1 बार अवश्य होता रहा हो; (4) व्यक्ति का आत्मसम्मान केवल उसके शरीर के वजन और आकार से तय होता हो; और (5) यह लक्षण एनोरेक्सिया के दौरान न हो रहे हों। इसकी गंभीरता उल्टी या दवाइयों के इस्तेमाल की साप्ताहिक संख्या से तय होती है (हल्की: 1-3 बार, मध्यम: 4-7 बार, गंभीर: 8-13 बार, अत्यधिक गंभीर: 14 या अधिक बार प्रति सप्ताह)। ICD-11 में इसका कोड 6B81 है।',
      gu: 'DSM-5-TR મુજબ બુલિમિયા નર્વોસાના નિદાન માટેના નિયમો: (૧) ટૂંકા સમયમાં મોટા પ્રમાણમાં ખોરાક ખાઈ જવો અને ખાવા પરનો કાબૂ સાવ છૂટી જવો; (૨) વજન ન વધે તે માટે જાતે ઊલટી કરવી, જુલાબની ગોળીઓ લેવી કે અતિશય કસરત કરવી; (૩) આ બંને લક્ષણો ઓછામાં ઓછા ૩ મહિના સુધી દર અઠવાડિયે સરેરાશ ૧ વાર બનતા હોવા જોઈએ; (૪) પોતાનું મૂલ્યાંકન માત્ર વજન અને શરીરના આકારના આધારે જ કરવું; અને (૫) આ લક્ષણો એનોરેક્સિયાના ભાગરૂપે ન હોવા જોઈએ. અઠવાડિયામાં કેટલી વાર દર્દી ઊલટી કરે છે તેના આધારે બીમારીની ગંભીરતા નક્કી થાય છે (હળવી: ૧-૩ વખત, મધ્યમ: ૪-૭ વખત, ગંભીર: ૮-૧૩ વખત, અતિ ગંભીર: ૧૪ કે વધુ વખત પ્રતિ સપ્તાહ). ICD-11 માં આનો કોડ 6B81 છે.',
    },
    differentialConsiderations: {
      en: 'Crucial differentials include: Anorexia Nervosa, Binge-Eating/Purging type (distinguished decisively by significantly low body weight, BMI < 18.5 kg/m²); Binge Eating Disorder (BED, distinguished by the complete absence of regular inappropriate compensatory purging behaviors); Kleine-Levin syndrome (a rare neurological condition causing episodic hypersomnia, megaphagia, and hypersexuality); Major Depressive Disorder with atypical features (marked by hyperphagia and weight gain, but without compensatory purging or shape overvaluation); and Borderline Personality Disorder (which shares impulsivity and affective instability and frequently presents comorbidity).',
      hi: 'इसे एनोरेक्सिया के बिंज-ईटिंग/पर्जिंग प्रकार (जिसमें वजन सामान्य से बहुत कम होता है); बिंज ईटिंग डिसऑर्डर (जिसमें ज्यादा खाने के बाद उल्टी नहीं की जाती); क्लाइन-लेविन सिंड्रोम (मस्तिष्क की दुर्लभ बीमारी जिसमें अत्यधिक नींद और ज्यादा भूख लगती है); डिप्रेशन (जिसमें ज्यादा खाया जा सकता है पर उल्टी नहीं की जाती); और बॉर्डरलाइन पर्सनालिटी डिसऑर्डर से अलग पहचानना आवश्यक होता है।',
      gu: 'આને એનોરેક્સિયાના પર્જિંગ પ્રકાર (જેમાં દર્દીનું વજન અતિશય ઓછું હોય છે); બિન્જ ઈટિંગ ડિસઓર્ડર (જેમાં વધુ ખાધા પછી ઊલટી કરવામાં આવતી નથી); ક્લાઇન-લેવિન સિન્ડ્રોમ (મગજનો દુર્લભ રોગ જેમાં ખૂબ ઊંઘ અને ભૂખ લાગે છે); સામાન્ય ડિપ્રેશન; અને બોર્ડરલાઇન પર્સનાલિટી ડિસઓર્ડરથી અલગ તારવવું અનિવાર્ય છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Explaining the biological binge-purge cycle where restriction inevitably triggers rebound overeating.',
        hi: 'यह समझाना कि भूखे रहने से ही अनियंत्रित खाने (Binge) की तीव्र इच्छा पैदा होती है।',
        gu: 'દર્દીને સમજાવવું કે કડક ભૂખ્યા રહેવાથી જ વધુ ખાવાની તીવ્ર ઇચ્છા પેદા થાય છે.',
      },
      lifestyleSupport: {
        en: 'Establishing regular, scheduled three meals and two snacks per day to eliminate physiological starvation cues.',
        hi: 'दिन में 3 बार नियमित भोजन और 2 बार हल्का नाश्ता तय समय पर लेना।',
        gu: 'દિવસમાં ૩ વખત નિયમિત ભોજન અને ૨ વખત હળવો નાસ્તો સમયસર લેવો.',
      },
      psychotherapy: {
        en: 'Cognitive Behavioral Therapy for Eating Disorders (CBT-ED) is the first-line gold standard; Interpersonal Psychotherapy (IPT) is also effective.',
        hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT) सबसे प्रभावी उपचार पद्धति है।',
        gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) સૌથી અસરકારક સારવાર છે.',
      },
      medications: {
        en: 'High-dose Fluoxetine (an SSRI) has strong evidence in reducing the frequency of binge eating and purging alongside psychotherapy.',
        hi: 'मनोचिकित्सक की सलाह से कुछ एंटीडिप्रेसेंट दवाएं बिंज और उल्टी करने की तलब को काफी कम कर देती हैं।',
        gu: 'ડૉક્ટરની સલાહ મુજબ યોગ્ય દવાઓ ખાવાની અનિયંત્રિત તલપ ઘટાડવામાં મદદરૂપ બને છે.',
      },
      familySocialInterventions: {
        en: 'Family psychoeducation to dismantle shame and support healthy kitchen environments.',
        hi: 'परिवार को सहयोग देना सिखाना ताकि वे ताने देने के बजाय मरीज का संबल बनें।',
        gu: 'પરિવારજનો દર્દીને ટોકવાને બદલે પ્રેમપૂર્વક સાથ આપે તેવું વાતાવરણ બનાવવું.',
      },
    },
    treatmentGoals: {
      en: 'Cessation of binge-purge episodes, stabilization of electrolytes, reduction of body shape preoccupation, and emotional self-regulation.',
      hi: 'उल्टी और बिंज खाने पर पूरी तरह रोक, इलेक्ट्रोलाइट्स सामान्य करना और स्वस्थ सोच।',
      gu: 'અનિયંત્રિત ખાવા અને ઊલટી પર કાબૂ મેળવવો અને શારીરિક સ્વાસ્થ્ય સુધારવું.',
    },
    recoveryOutlook: {
      en: 'The long-term prognosis for Bulimia Nervosa is significantly favorable when patients receive evidence-based psychological and medical care. CBT adapted for eating disorders (CBT-ED) is an evidence-based treatment that can reduce binge-purge behaviours for many people. The degree of improvement varies, and medical assessment and monitoring remain important because repeated purging can cause serious physical complications. Recovery involves gradual normalization of metabolic and hunger-satiety hormonal cues, healing of dental and gastrointestinal inflammation, and restoration of cardiac electrolyte stability. Overcoming cognitive perfectionism, dismantling shame, and cultivating self-compassion allow individuals to reclaim bodily peace, healthy social eating, and resilient psychological well-being.',
      hi: 'बुलिमिया नर्वोसा का सही इलाज मिलने पर ठीक होने की संभावना बहुत अच्छी होती है। जब मरीज सीबीटी (CBT-ED) थेरेपी और डॉक्टर द्वारा दी गई दवाओं (जैसे Fluoxetine) का कोर्स पूरा करते हैं, तो कई लोगों में बिंज और उल्टी के व्यवहार में कमी आ सकती है, लेकिन सुधार की मात्रा व्यक्ति के अनुसार अलग-अलग होती है। इलाज के दौरान आंतों और दांतों की सूजन ठीक होती है, दिल की धड़कन सुरक्षित होती है और भूख-प्यास के प्राकृतिक संकेत सामान्य होते हैं। अपने शरीर से नफरत करने के बजाय खुद को स्वीकार करना सीखकर व्यक्ति बिना किसी अपराधबोध के स्वस्थ और खुशहाल सामाजिक जीवन में लौट आता है।',
      gu: 'બુલિમિયા નર્વોસાની સમયસર અને સાચી સારવારથી દર્દીના સાજા થવાની શક્યતા ઘણી વધારે છે. યોગ્ય સાયકોથેરાપી (CBT-ED) અને તબીબી માર્ગદર્શનથી ઘણા લોકોમાં વધુ પડતું ખાવા અને ઊલટી કરવાના વર્તનમાં ઘટાડો થઈ શકે છે, પરંતુ સુધારાની માત્રા દરેક વ્યક્તિમાં અલગ હોય છે. સારવાર દરમિયાન પાચનતંત્ર અને અન્નનળીના સોજા મટે છે, પોટેશિયમનું પ્રમાણ સ્થિર થાય છે અને હૃદય સુરક્ષિત બને છે. વજન અને શરીરના ખોટા ભયમાંથી મુક્ત થઈને દર્દી પરિવાર સાથે સામાન્ય ભોજનનો આનંદ માણી શકે છે અને ખુશહાલ જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Identifying emotional vulnerability triggers, avoiding strict restrictive diets, and continuing therapy consolidation sessions.',
      hi: 'सख्त डाइटिंग से बचना, तनाव प्रबंधन सीखना और डॉक्टर के संपर्क में रहना।',
      gu: 'કડક ડાયટિંગ ટાળવું અને તણાવ સમયે યોગ્ય ટેકો મેળવવો.',
    },
    urgentWarningSigns: {
      en: 'Severe hypokalemia (dangerously low potassium causing cardiac arrhythmia), hematemesis (vomiting blood), or fainting.',
      hi: 'खून की उल्टी होना, पोटेशियम खतरनाक रूप से गिर जाना या दिल की धड़कन असामान्य होना।',
      gu: 'લોહીની ઊલટી થવી, પોટેશિયમ ઘટી જવું કે હૃદયના ધબકારા અનિયમિત થવા.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Purging after eating gets rid of all the calories consumed.',
          hi: 'उल्टी करने से खाया हुआ सारा खाना और कैलोरी पूरी तरह निकल जाती है।',
          gu: 'ઊલટી કરી નાખવાથી બધી કેલરી નીકળી જાય છે.',
        },
        fact: {
          en: 'Vomiting removes less than half of ingested calories while causing severe dehydration, acid reflux, tooth decay, and deadly electrolyte crashes.',
          hi: 'उल्टी से आधी से भी कम कैलोरी निकलती है, लेकिन इससे पोटेशियम की घातक कमी, दांतों की खराबी और दिल के दौरे का खतरा पैदा हो जाता है।',
          gu: 'ઊલટી કરવાથી અડધી પણ કેલરી દૂર થતી નથી, પરંતુ પોટેશિયમ ઘટી જવાથી હૃદય બંધ પડવાનું જોખમ ઊભું થાય છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Are people with bulimia always underweight?',
          hi: 'क्या बुलिमिया से पीड़ित लोग हमेशा बहुत दुबले होते हैं?',
          gu: 'શું બુલિમિયાવાળા દર્દીઓ હંમેશા પાતળા જ હોય છે?',
        },
        answer: {
          en: 'No. Most people with bulimia nervosa are within a normal weight or slightly above average weight range, making the disorder easy to hide for years.',
          hi: 'नहीं। बुलिमिया के अधिकांश मरीज सामान्य वजन के होते हैं, इसलिए परिवार को वर्षों तक इसकी भनक नहीं लगती।',
          gu: 'ના. મોટાભાગના દર્દીઓનું વજન સામાન્ય હોય છે, તેથી આ તકલીફ લાંબો સમય છૂપી રહી શકે છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'CBT adapted for eating disorders is an evidence-based psychological treatment that can help reduce binge-purge symptoms; response varies between individuals.',
          hi: 'CBT-ED एक प्रमाण-आधारित मनोवैज्ञानिक उपचार है, जो कई लोगों में बिंज और उल्टी के लक्षणों को कम करने में मदद कर सकता है; उपचार का असर व्यक्ति के अनुसार अलग होता है।',
          gu: 'CBT-ED એક પુરાવા આધારિત મનોવૈજ્ઞાનિક સારવાર છે, જે ઘણા લોકોમાં બિન્જ અને ઊલટીના લક્ષણો ઘટાડવામાં મદદરૂપ થઈ શકે છે; પ્રતિભાવ વ્યક્તિ પ્રમાણે બદલાય છે.',
        },
        citationRef: 'NICE Clinical Guideline NG69',
      },
      {
        fact: {
          en: 'Double-blind randomized clinical trials demonstrate high-dose Fluoxetine (60 mg daily) significantly reduces binge eating frequency and purging episodes independent of depressive comorbidity.',
          hi: 'डबल-ब्लाइंड अध्ययनों से प्रमाणित है कि फ्लूऑक्सेटिन (Fluoxetine 60 mg) बिंज खाने और उल्टी करने की तलब को तेजी से कम करती है।',
          gu: 'ડબલ-બ્લાઇન્ડ પરીક્ષણો સાબિત કરે છે કે ફ્લુઓક્સેટિન દવા અતિશય ખાવાની અને ઊલટી કરવાની તીવ્ર ઇચ્છાને નોંધપાત્ર રીતે ઘટાડે છે.',
        },
        citationRef: 'Archives of General Psychiatry Multicenter Trial',
      },
      {
        fact: {
          en: 'Routine monitoring of serum potassium and electrocardiograms is medically essential in active purging, preventing fatal ventricular arrhythmias caused by hypokalemia.',
          hi: 'समीक्षाओं के अनुसार, लगातार उल्टी करने वाले मरीजों में पोटेशियम और ईसीजी की नियमित जांच जानलेवा कार्डियक अरेस्ट से बचाने के लिए अनिवार्य है।',
          gu: 'તબીબી સમીક્ષાઓ જણાવે છે કે વારંવાર ઊલટી કરતા દર્દીઓમાં પોટેશિયમ અને ઇસીજીની નિયમિત તપાસ જીવલેણ હાર્ટ એટેક ટાળવા માટે અત્યંત જરૂરી છે.',
        },
        citationRef: 'APA Eating Disorder Guidelines',
      },
      {
        fact: {
          en: 'Eliminating daytime dietary restriction and establishing consistent meal frequency is proven to break the physiological deprivation cycle driving nocturnal binge eating.',
          hi: 'दिन में भूखे रहने की आदत छोड़कर समय पर संतुलित भोजन लेने से रात में अनियंत्रित खाने की शारीरिक तलब जड़ से खत्म होती है।',
          gu: 'દિવસ દરમિયાન ભૂખ્યા રહેવાનું ટાળીને સમયસર સંતુલિત ભોજન લેવાથી રાત્રે કાબૂ ગુમાવીને ખાવાનું કુદરતી રીતે બંધ થાય છે.',
        },
        citationRef: 'The Lancet Psychiatry Review',
      },
    ],
    references: [
      { citation: 'Hay P, Chinn D, Forbes D, et al. Royal Australian and New Zealand College of Psychiatrists clinical practice guidelines for the treatment of eating disorders. Aust N Z J Psychiatry. 2014;48(11):977-1008.', source: 'ANZJP', year: '2014' },
      { citation: 'National Institute for Health and Care Excellence (NICE). Eating disorders: recognition and treatment: NICE guideline [NG69]. London: NICE, 2020.', source: 'NICE Guidelines', year: '2020' },
      { citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Eating Disorders, Fourth Edition. Washington, DC: APA, 2023.', source: 'APA Guidelines', year: '2023' },
      { citation: 'Fluoxetine Bulimia Collaborative Study Group. Fluoxetine in the treatment of bulimia nervosa: a multicenter, placebo-controlled, double-blind trial. Arch Gen Psychiatry. 1992;49(2):139-147.', source: 'Archives of General Psychiatry', year: '1992' },
      { citation: 'Fairburn CG, Cooper Z, Doll HA, et al. Transdiagnostic cognitive-behavioral therapy for patients with eating disorders. Am J Psychiatry. 2009;166(3):311-319.', source: 'American Journal of Psychiatry', year: '2009' },
    ],
    lastReviewed: '2026-09',
    reviewStatus: { lastReviewed: '2026-08', reviewer: '[VERIFY: Gujarat Institute of Mental Health]' },
    relatedIds: ['anorexia-nervosa', 'binge-eating-disorder', 'cbt'],
    relatedContent: {
      conditionSlugs: ['anorexia-nervosa', 'binge-eating-disorder', 'major-depressive-disorder'],
      medicationIds: ['antidepressants'],
      treatmentIds: ['cbt', 'dbt'],
    },
  },

  // 3. Eating Disorders: Binge Eating Disorder
  {
    id: 'binge-eating-disorder',
    slug: 'binge-eating-disorder',
    category: 'eating',
    conditionIcon: 'binge-eating-disorder',
    name: {
      en: 'Binge Eating Disorder (BED)',
      hi: 'बिंज ईटिंग डिसऑर्डर (Binge Eating Disorder)',
      gu: 'બિન્જ ઈટિંગ ડિસઓર્ડર (વારંવાર અતિશય ખાવું)',
    },
    medicalTerms: {
      en: 'Binge Eating Disorder (ICD-11: 6B82)',
      hi: 'बिंज ईटिंग डिसऑर्डर',
      gu: 'બિન્જ ઈટિંગ ડિસઓર્ડર',
    },
    overview: {
      en: 'Binge Eating Disorder (BED, ICD-11: 6B82, DSM-5-TR) is a severe, distinct psychiatric and metabolic condition characterized by recurrent, uncontrollable episodes of consuming objectively large quantities of food in a discrete period of time (e.g., within two hours), accompanied by an overwhelming subjective sense of complete loss of control. During these episodes, individuals eat much more rapidly than normal, eat until painfully or uncomfortably stuffed, consume massive quantities even when physically satiated, and eat in secretive isolation due to profound embarrassment. Episodes conclude with devastating waves of self-disgust, depression, and paralyzing guilt. Unlike Bulimia Nervosa, BED is defined by the complete absence of regular inappropriate compensatory behaviors (such as purging, laxative abuse, fasting, or extreme exercise). As the most common eating disorder globally, BED affects individuals across all body sizes, genders, and socioeconomic backgrounds, yet remains heavily shrouded in secrecy and delayed diagnosis due to societal weight bias.',
      hi: 'बिंज ईटिंग डिसऑर्डर (Binge Eating Disorder - BED) एक गंभीर और कष्टकारी मानसिक विकार है, जिसमें व्यक्ति कम समय में (जैसे दो घंटे के भीतर) अनियंत्रित होकर बहुत भारी मात्रा में भोजन खा लेता है। इस दौरान मरीज को लगता है कि वह खुद को रोक नहीं सकता। वह सामान्य से बहुत तेजी से खाता है, पेट में असहनीय भारीपन होने तक खाता रहता है, और भूख न होने पर भी खाता चला जाता है। दूसरों के सामने शर्मिंदगी से बचने के लिए वह अकेले में छुपकर खाता है, और खाने के बाद खुद से नफरत, गहरा पछतावा और डिप्रेशन महसूस करता है। बुलिमिया के विपरीत, बिंज ईटिंग डिसऑर्डर में मरीज उल्टी करने, जुलाब लेने या भूखे रहने जैसी कोई क्रिया नहीं करता। यह दुनिया में सबसे आम ईटिंग डिसऑर्डर है, लेकिन समाज में मोटापे और खान-पान को लेकर बने तानों के कारण लोग इसे बीमारी न मानकर अपनी कमजोरी समझकर वर्षों तक अकेले घुटते रहते हैं।',
      gu: 'બિન્જ ઈટિંગ ડિસઓર્ડર (BED) એ એક ગંભીર અને વાસ્તવિક માનસિક બીમારી છે, જેમાં વ્યક્તિ થોડા સમયમાં કાબૂ ગુમાવીને સામાન્ય કરતાં ઘણો વધુ ખોરાક ખાઈ લે છે. આ દરમિયાન ખાવા પરનો તેનો સંયમ સાવ છૂટી જાય છે. તે ખૂબ ઝડપથી ખાય છે, પેટમાં દુખાવો થાય કે શ્વાસ લેવામાં તકલીફ પડે ત્યાં સુધી ખાતો રહે છે અને ભૂખ ન હોવા છતાં ખાય છે. શરમ અને સંકોચના કારણે તે એકાંતમાં છૂપી રીતે ખાય છે અને ખાધા પછી ભારે અફસોસ, ગ્લાનિ અને નિરાશા અનુભવે છે. બુલિમિયાથી વિપરીત, આ બીમારીમાં દર્દી ઊલટી કરતો નથી કે દવાઓ લેતો નથી. આ રોગ કોઈપણ ઉંમર કે વજન ધરાવતી વ્યક્તિમાં થઈ શકે છે, પરંતુ સમાજમાં વજન અંગેની મજાક અને જાગૃતિના અભાવે દર્દી તેને પોતાની નબળાઈ માનીને અંદરથી પીડાતો રહે છે.',
    },
    illustrativeExamples: [
      {
        en: 'Priya, a 34-year-old human resources manager in Pune, had struggled with weight cycling and restrictive diets since adolescence. After enduring demanding workdays managing corporate disputes and settling her young children to sleep, an uncontrollable trance-like state would descend around 10:30 PM. Alone in the dimly lit kitchen, Priya would consume an entire family-sized packet of potato wafers, half a loaf of bread with thick butter, leftover rice and curry, four pastries, and large scoops of ice cream in less than 45 minutes. She ate mechanically, barely chewing or tasting the food, until her stomach stretched painfully and nausea set in. While eating, she felt a brief, numbing dissociation from daily stress, immediately replaced by devastating waves of self-hatred, crying spells, and deep shame. To hide the evidence from her family, Priya wrapped the food cartons in newspapers and buried them at the bottom of the building\'s outside garbage bins before sunrise. Convinced she was merely "lazy and lacking self-control," she avoided social gatherings with colleagues, declined professional promotions that required public visibility, and developed non-alcoholic fatty liver disease (NAFLD) and prediabetes. After five years of silent torment, Priya sought psychiatric consultation for chronic insomnia and severe depression. The psychiatrist accurately diagnosed Binge Eating Disorder, initiating manualized Cognitive Behavioral Therapy for BED (CBT-BED), intuitive eating education, and medical management with Lisdexamfetamine. By learning to stop restrictive daytime fasting, developing emotional distress tolerance strategies, and decoupling stress from food, Priya eliminated her binge episodes, normalized her metabolic markers, and regained control of her life.',
        hi: 'पुणे में 34 वर्षीय एचआर मैनेजर प्रिया किशोरावस्था से ही वजन घटाने की सख्त डाइटिंग के चक्कर में फंसी हुई थी। ऑफिस में दिन भर के तनाव और बच्चों को सुलाने के बाद, रात 10:30 बजे उसके दिमाग पर एक अजीब सी बेचैनी और खाने की तीव्र इच्छा हावी हो जाती। किचन में अकेले खड़े होकर, प्रिया मात्र 45 मिनट के भीतर वेफर्स का पूरा बड़ा पैकेट, आधी ब्रेड पर मक्खन लगाकर, बचा हुआ चावल-सब्जी, चार पेस्ट्री और आइसक्रीम खा जाती। वह बिना चबाए और बिना स्वाद लिए इतनी तेजी से खाती कि पेट में असहनीय दर्द होने लगता। खाते समय कुछ मिनटों के लिए तनाव से राहत मिलती, लेकिन खाना खत्म होते ही वह फूट-फूट कर रोने लगती और खुद से नफरत करने लगती। परिवार को पता न चले, इसलिए वह सुबह होने से पहले खाली पैकेटों को अखबार में लपेटकर दूर कचरे के डिब्बे में फेंक आती। खुद को "कमजोर और लालची" मानकर वह दोस्तों के साथ पार्टियों में जाने से कतराने लगी और ऑफिस में प्रमोशन लेने से मना कर दिया क्योंकि उसे मंच पर बोलने में शर्म आती थी। जांच में उसे फैटी लिवर और प्रीडायबिटीज पाया गया। पांच साल तक अकेले घुटने के बाद, डिप्रेशन के इलाज के लिए वह एक मनोचिकित्सक के पास पहुंची। डॉक्टर ने बिंज ईटिंग डिसऑर्डर की पहचान कर सीबीटी (CBT-BED) थेरेपी और सही दवा शुरू की। दिन में भूखे रहने की आदत छोड़कर और तनाव को संभालने के नए तरीके सीखकर प्रिया ने बिंज ईटिंग को पूरी तरह हरा दिया और एक स्वस्थ जीवन की शुरुआत की।',
        gu: 'પુણેની ૩૪ વર્ષીય એચઆર મેનેજર પ્રિયા કિશોરાવસ્થાથી જ વજન ઉતારવાના નિષ્ફળ પ્રયાસો કરતી હતી. દિવસભર ઓફિસનું કામ અને સાંજે બાળકોને ઊંઘાડ્યા પછી, રાત્રે ૧૦:૩૦ વાગ્યે તેના પર અનિયંત્રિત ખાવાનું ભૂત સવાર થતું. રસોડામાં એકલા ઊભા રહીને પ્રિયા ૪૫ મિનિટમાં મોટું વેફર્સનું પેકેટ, બ્રેડ-બટર, બચેલું ભોજન, ચાર મીઠાઈઓ અને આઈસ્ક્રીમ ખાઈ જતી. તે ખોરાકનો સ્વાદ માણ્યા વગર એટલી ઝડપથી ગળી જતી કે પેટ ફાટી જવા જેવો દુખાવો થતો. ખાતી વખતે તણાવમાંથી થોડી ક્ષણિક મુક્તિ મળતી, પણ પૂરું થતાં જ તે રડી પડતી અને પોતાને ધિક્કારવા લાગતી. ઘરના સભ્યોને ખબર ન પડે તે માટે તે ખાલી પેકેટો કચરાપેટીમાં છૂપી રીતે દાટી દેતી. પોતાને "આળસુ અને નિર્બળ" માનીને તેણે સામાજિક પ્રસંગોમાં જવાનું બંધ કરી દીધું અને ઓફિસમાં આગળ વધવાનું ટાળ્યું. તેને ફેટી લિવર અને ડાયાબિટીસની શરૂઆત થઈ ગઈ હતી. પાંચ વર્ષની ચૂપચાપ પીડા પછી, ડિપ્રેશનના કારણે તેણે મનોચિકિત્સકની સલાહ લીધી. ડૉક્ટરે બિન્જ ઈટિંગ ડિસઓર્ડરનું સાચું નિદાન કરીને ખાસ CBT થેરાપી અને દવાઓ શરૂ કરી. દિવસ દરમિયાન ભૂખ્યા રહેવાનું બંધ કરીને અને માનસિક તાણને અન્ય રીતે હળવો કરતાં શીખીને પ્રિયાએ વધુ પડતું ખાવાની ટેવ પર સંપૂર્ણ વિજય મેળવ્યો.',
      },
      {
        en: 'Rajesh, a 42-year-old textile merchant in Surat, experienced worsening uncontrollable eating binges during periods of business volatility. Sitting alone in his back office in the afternoons, Rajesh ordered boxes of deep-fried kachoris, farsan, and sweets, consuming thousands of calories within an hour until physically breathless and nauseous. Overcome by humiliation, he disposed of the cartons outside his neighborhood and avoided family meals at home. His physical health declined with severe hypertension and early type 2 diabetes. Encouraged by his physician, Rajesh consulted a clinical psychologist specializing in eating disorders. Through CBT-BED, Rajesh learned to recognize emotional exhaustion cues, establish regular meal times without restrictive skipping, and safely manage business stress, achieving full cessation of binge episodes.',
        hi: 'सूरत के 42 वर्षीय कपड़ा व्यापारी राजेश व्यापारिक मंदी और तनाव के समय अनियंत्रित रूप से खाने के शिकार हो गए। दोपहर में दफ्तर में अकेले बैठकर वे डिब्बे भर-भर के कचौरी, समोसे और मिठाइयां मंगाकर एक घंटे में खा जाते, जब तक कि सांस फूलने न लगे। भारी शर्मिंदगी के कारण वे खाली डिब्बे बाहर फेंक देते और रात को घर पर खाना नहीं खाते थे। बीपी और शुगर बढ़ने पर डॉक्टर की सलाह से उन्होंने क्लिनिकल साइकोलॉजिस्ट से संपर्क किया। सीबीटी थेरेपी की मदद से राजेश ने तनाव के समय खाने की अपनी आदत पर पूरी तरह काबू पा लिया।',
        gu: 'સુરતના ૪૨ વર્ષીય કાપડના વેપારી રાજેશ વેપારમાં નુકસાન અને તણાવના સમયે ખાવા પરનો કાબૂ ગુમાવી બેસતા. બપોરે ઓફિસમાં એકલા બેસીને તેઓ કચોરી, ફરસાણ અને મીઠાઈઓના બોક્સ મંગાવીને હાંફી જાય ત્યાં સુધી ખાઈ લેતા. ભારે શરમજનક સ્થિતિથી બચવા તેઓ ખાલી પેકેટ દૂર ફેંકી આવતા અને રાત્રે ઘરે ભોજન ટાળતા. બ્લડ પ્રેશર અને ડાયાબિટીસ વધતાં ડૉક્ટરની સલાહથી તેમણે સાયકોલોજિસ્ટની મદદ લીધી. CBT થેરાપીથી રાજેશે તણાવમાં વધુ પડતું ખાવાની લત પર સંપૂર્ણ નિયંત્રણ મેળવ્યું.',
      },
      {
        en: 'Tanya, a 19-year-old university student in Chandigarh, cycled through extreme fasting trends followed by nighttime pantry raids. After fasting for 18 hours, intense neurochemical hunger drove her to consume entire boxes of cereal, bread with jam, and family snack bags in secret, weeping with guilt immediately afterward. Unlike bulimia, Tanya never purged or took laxatives, leading her to believe she suffered from a character flaw. Consultation with a psychiatrist led to an accurate diagnosis of BED. Structured nutritional rebalancing, dismantling of fasting rules, and CBT-BED allowed Tanya to restore intuitive hunger cues and achieve lasting freedom from binge episodes.',
        hi: 'चंडीगढ़ की 19 वर्षीय कॉलेज छात्रा तान्या दिन में 18 घंटे भूखे रहने (इंटरमिटेंट फास्टिंग) के बाद रात को भूख के तीव्र आवेग में किचन में रखी ब्रेड, बिस्कुट और स्नैक्स के पूरे पैकेट छिपकर खा जाती थी और फिर बिस्तर पर बैठकर रोती थी। वह उल्टी नहीं करती थी, इसलिए खुद को ही कमजोर मानती रही। मनोरोग विशेषज्ञ द्वारा बिंज ईटिंग डिसऑर्डर का निदान होने के बाद सीबीटी थेरेपी और सही खान-पान से तान्या ने सख्त उपवास की आदत छोड़ी और बिंज ईटिंग से मुक्ति पाई।',
        gu: 'ચંદીગઢની ૧૯ વર્ષીય કોલેજ વિદ્યાર્થિની તાન્યા આખો દિવસ ભૂખ્યા રહેવાના ડાયટિંગ પછી રાત્રે ભૂખના ભારે આવેગમાં રસોડામાં પડેલા બિસ્કિટ, બ્રેડ અને નાસ્તાના પેકેટો છૂપી રીતે ખાઈ જતી અને પછી પસ્તાવામાં રડતી. તે ઊલટી કરતી ન હોવાથી પોતાને જ દોષિત માનતી હતી. સાયકિયાટ્રિસ્ટ દ્વારા બિન્જ ઈટિંગ ડિસઓર્ડરનું નિદાન થયા બાદ યોગ્ય કાઉન્સેલિંગ અને આહાર આયોજનથી તાન્યાએ આ રોગ પર વિજય મેળવ્યો.',
      },
    ],
    commonSymptoms: {
      en: [
        'Eating much more rapidly than normal',
        'Eating until feeling uncomfortably full',
        'Eating large amounts of food when not feeling physically hungry',
        'Eating alone because of feeling embarrassed by how much one is eating',
        'Feeling disgusted with oneself, depressed, or very guilty afterward',
      ],
      hi: [
        'सामान्य से बहुत अधिक तेजी से भोजन करना',
        'पेट में असहनीय भारीपन होने तक खाते रहना',
        'शारीरिक भूख न होने पर भी बहुत अधिक खाना',
        'शर्मिंदगी के कारण अकेले में छुपकर खाना',
        'खाने के बाद खुद से घृणा, गहरा अपराधबोध या डिप्रेशन महसूस होना',
      ],
      gu: [
        'ખૂબ જ ઝડપથી ખોરાક આરોગવો',
        'પેટમાં અસહ્ય ભાર ન લાગે ત્યાં સુધી ખાતા રહેવું',
        'ભૂખ ન હોવા છતાં પુષ્કળ ખાવું',
        'શરમજનક લાગવાથી એકાંતમાં ખાવું',
        'ખાધા પછી ભારે અફસોસ અને નિરાશા અનુભવવી',
      ],
    },
    dailyLifeImpact: {
      en: 'Binge Eating Disorder exacts a severe psychological, social, and medical toll. Chronic binge episodes predispose sufferers to severe metabolic consequences, including obesity, type 2 diabetes mellitus, dyslipidemia, non-alcoholic fatty liver disease (NAFLD/NASH), hypertension, obstructive sleep apnea, and osteoarthritis. Sufferers face rampant social isolation, occupational disruption, severe major depressive disorder, and suicidal ideation fueled by pervasive internal and external weight stigmatization.',
      hi: 'बिंज ईटिंग डिसऑर्डर व्यक्ति के शारीरिक और मानसिक स्वास्थ्य को भारी नुकसान पहुंचाता है। बार-बार ज्यादा खाने से मोटापा, टाइप 2 डायबिटीज, हाई ब्लड प्रेशर, कोलेस्ट्रॉल, फैटी लिवर और स्लीप एप्निया (नींद में सांस रुकना) जैसी गंभीर बीमारियां घेर लेती हैं। समाज में मिलने वाले तानों के कारण मरीज अकेलेपन में चला जाता है, नौकरी और करियर में पीछे छूटने लगता है, और गंभीर डिप्रेशन व हीनभावना का शिकार हो जाता है।',
      gu: 'આ બીમારી શારીરિક અને માનસિક બંને રીતે ખૂબ નુકસાન કરે છે. વારંવાર અતિશય ખાવાથી સ્થૂળતા, ટાઇપ ૨ ડાયાબિટીસ, હાઇ બ્લડ પ્રેશર, કોલેસ્ટ્રોલ, ફેટી લિવર અને ઊંઘમાં શ્વાસ રૂંધાવાની બીમારી (સ્લીપ એપ્નિયા) થઈ શકે છે. સમાજમાં વજન અંગેની મજાક અને ભેદભાવથી દર્દી એકલવાયો બની જાય છે, નોકરીમાં ધ્યાન આપી શકતો નથી અને તીવ્ર ડિપ્રેશનનો ભોગ બને છે.',
    },
    causes: {
      en: 'BED has a complex neurobiological and psychological etiology. Genetic vulnerability may contribute, but binge-eating episodes arise through interacting biological, psychological, and environmental factors; no single reward-circuit explanation accounts for every person. Neuroendocrine investigations reveal blunted hypothalamic leptin sensitivity and altered ghrelin regulation. Psychologically, bingeing serves as a maladaptive emotion regulation mechanism to escape unbearable negative emotional states, catalyzed by chronic cycles of strict dietary restriction that prime the brain for rebound bingeing.',
      hi: 'यह बीमारी मस्तिष्क की कार्यप्रणाली, हार्मोन्स और मानसिक तनाव के मिले-जुले असर से होती है। आनुवंशिक संवेदनशीलता योगदान दे सकती है, लेकिन बिंज ईटिंग के पीछे जैविक, मनोवैज्ञानिक और पर्यावरणीय कारकों की परस्पर क्रिया होती है; कोई एक मस्तिष्क-प्रक्रिया हर व्यक्ति के अनुभव को नहीं समझाती। भावनात्मक रूप से, जब व्यक्ति तनाव, अकेलेपन या उदासी को संभाल नहीं पाता, तो भोजन को सहारे के रूप में इस्तेमाल करता है। इसके अलावा, बार-बार सख्त डाइटिंग करने से भी दिमाग में खाने की तीव्र भूख पैदा होती है जो बिंज में बदल जाती है।',
      gu: 'આ રોગ મગજની રચના, હોર્મોન્સ અને માનસિક તાણના કારણે થાય છે. આનુવંશિક સંવેદનશીલતા ફાળો આપી શકે છે, પરંતુ બિન્જ ઈટિંગ પાછળ જૈવિક, માનસિક અને પર્યાવરણીય પરિબળોની પરસ્પર અસર હોય છે. મગજમાં ડોપામાઇન અને સંતોષ આપતા રસાયણોનું સંતુલન બગડે છે, જેથી વ્યક્તિ મીઠી અને ચરબીયુક્ત વાનગીઓ ખાવાનું રોકી શકતી નથી. ભાવનાત્મક રીતે, દુઃખ, એકલતા કે ગુસ્સો દબાવવા માટે દર્દી ખોરાકનો સહારો લે છે. વારંવાર કડક ડાયટિંગ કરવાથી પણ મગજ ખોરાક માટે વધુ તલપાપડ બને છે અને દર્દી કાબૂ ગુમાવી દે છે.',
    },
    riskFactors: {
      en: [
        'History of chronic restrictive or yo-yo dieting, and childhood weight teasing or fat-shaming',
        'Childhood emotional abuse, adverse life events, or family environments with poor emotional communication',
        'Co-occurring psychiatric disorders: Major Depressive Disorder, Generalised Anxiety Disorder, or ADHD',
        'First-degree family history of eating disorders, obesity, or substance use disorders',
        'High neuroticism, impulsivity, poor interceptive awareness, and negative urgency traits',
      ],
      hi: [
        'लगातार सख्त डाइटिंग करना और बचपन में वजन को लेकर ताने मिलना',
        'बचपन में भावनात्मक आघात या परिवार में तनावपूर्ण माहौल',
        'डिप्रेशन, अत्यधिक चिंता या एडीएचडी (ADHD) की बीमारी होना',
        'परिवार में किसी को ईटिंग डिसऑर्डर, मोटापा या नशे की समस्या होना',
        'जल्दबाजी में फैसले लेना और भावनाओं पर काबू न रख पाना',
      ],
      gu: [
        'વારંવાર કડક ડાયટિંગ કરવી અને બાળપણમાં શરીરના દેખાવ અંગે મજાક ઉડાવાઈ હોવી',
        'બાળપણમાં ભાવનાત્મક આઘાત કે પારિવારિક અશાંતિ',
        'ડિપ્રેશન, ચિંતા કે એડીએચડી (ADHD) હોવું',
        'પરિવારમાં કોઈને વધુ વજન કે ઈટિંગ ડિસઓર્ડરનો ઇતિહાસ',
        'લાગણીઓ પર કાબૂ ન રાખી શકવો અને આવેગમાં નિર્ણયો લેવા',
      ],
    },
    psychiatricAssessment: {
      en: 'A comprehensive psychiatric evaluation establishes the timeline, frequency, and objective size of binge episodes, feelings of loss of control, and exclusion of purging. Screening instruments like the Binge Eating Scale (BES) or Eating Disorder Examination Questionnaire (EDE-Q) quantify severity. Essential medical evaluation includes fasting blood glucose, HbA1c, comprehensive lipid panel, liver function tests (AST/ALT to rule out NASH), thyroid panel, and clinical evaluation for obstructive sleep apnea.',
      hi: 'मनोचिकित्सक द्वारा बिंज के समय, खाने की मात्रा और खुद पर नियंत्रण खोने की स्थिति का पूरा ब्योरा लिया जाता है। यह पुष्टि की जाती है कि मरीज उल्टी या दवाइयों का उपयोग तो नहीं कर रहा। साथ ही ब्लड शुगर, HbA1c, लिपिड प्रोफाइल (कोलेस्ट्रॉल), लिवर फंक्शन (फैटी लिवर की जांच), थायरॉयड और रात में नींद में सांस रुकने (स्लीप एप्निया) की जांच की जाती है।',
      gu: 'મનોચિકિત્સક દ્વારા ખાવાના સમય, ખોરાકની માત્રા અને કાબૂ ગુમાવવાની સ્થિતિની સંપૂર્ણ તપાસ થાય છે. દર્દી ઊલટી જેવી કોઈ પ્રક્રિયા કરતો નથી તેની ખાતરી કરવામાં આવે છે. શારીરિક તપાસમાં બ્લડ સુગર, HbA1c, કોલેસ્ટ્રોલ, લિવર રિપોર્ટ (ફેટી લિવર માટે), થાઇરોઇડ અને ઊંઘમાં શ્વાસની તકલીફ (સ્લીપ એપ્નિયા) ની ચકાસણી કરવામાં આવે છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, Binge Eating Disorder requires: (1) Recurrent episodes of binge eating characterized by eating in a discrete period (e.g., within any 2-hour period) an amount of food definitely larger than what most individuals would eat in similar circumstances, accompanied by a sense of lack of control during the episode; (2) Episodes are associated with 3 or more of: eating much more rapidly than normal, eating until uncomfortably full, eating large amounts when not physically hungry, eating alone because of feeling embarrassed, and feeling disgusted with oneself/depressed/very guilty afterward; (3) Marked distress regarding binge eating is present; (4) Occurs on average at least once a week for 3 months; and (5) Is NOT associated with the recurrent use of inappropriate compensatory behaviors (as in Bulimia Nervosa) and does not occur exclusively during Bulimia or Anorexia Nervosa. Severity is graded by weekly binge frequency: Mild (1–3), Moderate (4–7), Severe (8–13), and Extreme (14 or more). In ICD-11, it is coded under 6B82.',
      hi: 'DSM-5-TR के अनुसार बिंज ईटिंग डिसऑर्डर के निदान के लिए आवश्यक है: (1) कम समय में (जैसे 2 घंटे में) सामान्य से बहुत अधिक मात्रा में भोजन करना और इस दौरान खाने पर नियंत्रण न होना; (2) इनमें से कम से कम 3 लक्षण मौजूद होना: बहुत तेजी से खाना, पेट में असहनीय भारीपन तक खाते रहना, भूख न होने पर भी बहुत खाना, अकेले में छुपकर खाना, और खाने के बाद खुद से घृणा या गहरा अपराधबोध होना; (3) इस आदत को लेकर गहरा मानसिक तनाव होना; (4) कम से कम 3 महीने तक हर हफ्ते औसतन 1 बार ऐसा होना; और (5) इसके बाद उल्टी करने या जुलाब लेने जैसी कोई क्रिया न होना। गंभीरता हफ्ते में होने वाले एपिसोड्स की संख्या से तय होती है (हल्की: 1-3, मध्यम: 4-7, गंभीर: 8-13, अत्यधिक गंभीर: 14 या अधिक प्रति सप्ताह)। ICD-11 में इसका कोड 6B82 है।',
      gu: 'DSM-5-TR મુજબ બિન્જ ઈટિંગ ડિસઓર્ડરના નિદાન માટેના નિયમો: (૧) ટૂંકા સમયમાં (જેમ કે ૨ કલાકમાં) અન્ય લોકો કરતાં ઘણો વધુ ખોરાક ખાઈ જવો અને ખાવા પરનો કાબૂ સાવ છૂટી જવો; (૨) નીચેનામાંથી ઓછામાં ઓછા ૩ લક્ષણો હોવા: અતિશય ઝડપથી ખાવું, પેટમાં ભારે દુખાવો ન થાય ત્યાં સુધી ખાવું, ભૂખ વગર ખાવું, શરમજનક લાગવાથી છૂપી રીતે ખાવું, અને ખાધા પછી ભારે પસ્તાવો કે નિરાશા થવી; (૩) આ ટેવના કારણે દર્દી ભારે માનસિક યાતના અનુભવતો હોવો જોઈએ; (૪) ઓછામાં ઓછા ૩ મહિના સુધી દર અઠવાડિયે સરેરાશ ૧ વાર આવું બનવું જોઈએ; અને (૫) બુલિમિયાની જેમ ઊલટી કરવી કે દવાઓ લેવી જેવી ક્રિયાઓ ન થતી હોવી જોઈએ. અઠવાડિયામાં કેટલી વાર બિન્જ થાય છે તેના આધારે બીમારીની ગંભીરતા નક્કી થાય છે. ICD-11 માં આનો કોડ 6B82 છે.',
    },
    differentialConsiderations: {
      en: 'Crucial differentials include: Bulimia Nervosa (distinguished by the presence of recurrent inappropriate compensatory purging, fasting, or excessive exercise); Anorexia Nervosa (distinguished by significantly low body weight and fear of weight gain); Major Depressive Disorder with atypical features (involves increased appetite and weight gain, but without discrete binge episodes or marked loss-of-control); Prader-Willi Syndrome (genetic condition with insatiable hyperphagia and cognitive delays); Borderline Personality Disorder (shares impulsivity, but displays widespread identity instability); and Non-pathological overeating (common during celebrations or holidays, but lacks the loss of control, marked distress, and secrecy of BED).',
      hi: 'इसे बुलिमिया नर्वोसा (जिसमें उल्टी या जुलाब का सहारा लिया जाता है); एनोरेक्सिया (जिसमें वजन खतरनाक रूप से कम होता है); डिप्रेशन (जिसमें भूख बढ़ सकती है पर नियंत्रण खोने वाले एपिसोड नहीं होते); प्राडर-विली सिंड्रोम (एक दुर्लभ आनुवंशिक रोग); और शादी-त्योहारों में सामान्य रूप से ज्यादा खाने (जिसमें अपराधबोध या बीमारी के लक्षण नहीं होते) से अलग पहचाना जाता है।',
      gu: 'આને બુલિમિયા (જેમાં ઊલટી કરવામાં આવે છે); એનોરેક્સિયા (જેમાં વજન અત્યંત ઓછું હોય છે); સામાન્ય ડિપ્રેશન; પ્રાડર-વિલી સિન્ડ્રોમ (વારસાગત રોગ); અને તહેવારો કે લગ્નમાં સામાન્ય રીતે વધુ ખવાઈ જવા વચ્ચેનો તફાવત સમજીને અલગ તારવવામાં આવે છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Breaking the shame spiral and explaining how restricting food paradoxically triggers powerful biological binge impulses.',
        hi: 'अपराधबोध दूर करना और यह समझाना कि अत्यधिक भूखे रहने से ही बिंज ईटिंग का चक्र शुरू होता है।',
        gu: 'દર્દીને સમજાવવું કે આ કોઈ ચરિત્રની ખામી નથી પણ મનોવૈજ્ઞાનિક બીમારી છે.',
      },
      lifestyleSupport: {
        en: 'Regularizing meal frequency, intuitive eating coaching, and gentle non-punitive physical activity.',
        hi: 'नियमित समय पर पौष्टिक भोजन लेना और अपनी भूख के संकेतों को पहचानना।',
        gu: 'નિયમિત સમયે પૌષ્ટિક આહાર લેવો અને હળવી કસરત કરવી.',
      },
      psychotherapy: {
        en: 'CBT-BED focuses on identifying emotional triggers, restructuring thoughts around food, and developing non-food emotional regulation skills.',
        hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT) द्वारा तनाव और भावनाओं को बिना खाने के संभालना सिखाया जाता है।',
        gu: 'CBT થેરાપી દ્વારા ખોરાક સિવાય અન્ય રીતે તણાવનું વ્યવસ્થાપન શીખવવામાં આવે છે.',
      },
      medications: {
        en: 'Certain SSRIs, Topiramate, or Lisdexamfetamine (where approved) may be prescribed by psychiatrists to assist impulse control alongside therapy.',
        hi: 'मनोचिकित्सक की देखरेख में कुछ दवाएं खाने की तीव्र तलब और आवेग को शांत करने में मदद कर सकती हैं।',
        gu: 'ડૉક્ટરની દેખરેખ હેઠળ યોગ્ય દવાઓ તીવ્ર તલપ ઘટાડવામાં મદદ કરી શકે છે.',
      },
      familySocialInterventions: {
        en: 'Fostering non-judgmental home environments free from moralizing comments about food or body weight.',
        hi: 'घर में भोजन या वजन को लेकर ताने मारने के बजाय सहयोगी माहौल बनाना।',
        gu: 'ઘરમાં વજન કે ખોરાક અંગે ટોણા મારવાને બદલે સહકારભર્યું વાતાવરણ ઊભું કરવું.',
      },
    },
    treatmentGoals: {
      en: 'Elimination of binge episodes, improved emotional coping, enhanced self-compassion, and metabolic health.',
      hi: 'बिंज ईटिंग को समाप्त करना, तनाव झेलने की क्षमता बढ़ाना और शारीरिक स्वास्थ्य सुधारना।',
      gu: 'અનિયંત્રિત ખાવાનું બંધ કરવું, આત્મસન્માન વધારવું અને શારીરિક સ્વાસ્થ્ય સુધારવું.',
    },
    recoveryOutlook: {
      en: 'The prognosis for Binge Eating Disorder is exceptionally encouraging when treated with modern evidence-based psychological and medical interventions. CBT adapted for binge-eating disorder and interpersonal psychotherapy can help reduce binge-eating symptoms. Some people may also benefit from medication after an individualized clinical assessment; response and recovery timelines vary. As patients dismantle rigid food rules, establish regular nourishing meals, and acquire distress tolerance skills, metabolic parameters—including glycemic control, blood pressure, and liver enzyme profiles—frequently show significant improvement. Long-term recovery empowers individuals to replace shame with radical self-acceptance, build enduring emotional resilience, and enjoy food as a source of health and connection rather than secretive distress.',
      hi: 'बिंज ईटिंग डिसऑर्डर का भविष्य बेहद आशाजनक होता है जब मरीज को सही समय पर मनोवैज्ञानिक और चिकित्सीय सहायता मिलती है। सीबीटी (CBT-BED) और आवश्यकतानुसार डॉक्टर द्वारा सुझाई गई दवाओं की मदद से CBT-BED और इंटरपर्सनल थेरेपी कई लोगों में बिंज ईटिंग के लक्षण कम करने में मदद कर सकती हैं। कुछ लोगों के लिए चिकित्सकीय मूल्यांकन के बाद दवा पर भी विचार किया जा सकता है; असर और सुधार का समय अलग-अलग होता है। जब मरीज दिन में भूखे रहने की आदत छोड़ता है और तनाव को संभालने के स्वस्थ तरीके सीखता है, तो उसका ब्लड शुगर, ब्लड प्रेशर और लिवर फंक्शन तेजी से सुधरने लगते हैं। इस बीमारी से उबरने के बाद व्यक्ति अपराधबोध और आत्मग्लानि के चक्रव्यूह से बाहर निकलकर खुद को सम्मान देना सीखता है और भोजन के साथ एक सामान्य व सुखद रिश्ता स्थापित करता है।',
      gu: 'આધુનિક મનોચિકિત્સા અને માર્ગદર્શનથી બિન્જ ઈટિંગ ડિસઓર્ડરમાંથી સાજા થવાનો દર ખૂબ સારો છે. યોગ્ય CBT થેરાપી અને જરૂર પડ્યે તબીબી સારવારથી CBT-BED અને ઇન્ટરપર્સનલ થેરાપી ઘણા લોકોમાં બિન્જ ઈટિંગના લક્ષણો ઘટાડવામાં મદદ કરી શકે છે. વ્યક્તિગત તબીબી મૂલ્યાંકન પછી કેટલાક લોકો માટે દવા અંગે પણ વિચાર થઈ શકે છે; પ્રતિભાવ અને સુધારાનો સમય અલગ હોઈ શકે છે. કડક ડાયટિંગ બંધ કરીને નિયમિત પૌષ્ટિક ભોજન લેવાથી અને તણાવનું સાચું સંચાલન શીખવાથી દર્દીનું ડાયાબિટીસ, બ્લડ પ્રેશર અને લિવરનું સ્વાસ્થ્ય ઝડપથી સુધરે છે. દર્દી પોતાની જાતને દોષ આપવાનું બંધ કરે છે, મનમાંથી હીનભાવના દૂર થાય છે અને તે શારીરિક તેમજ માનસિક રીતે ખુશહાલ અને સંતોષી જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Avoiding all-or-nothing dietary restriction, continuing emotional tracking, and early support during life distress.',
      hi: 'किसी भी तरह की क्रैश डाइटिंग से बचना और तनाव के समय तुरंत सहायता लेना।',
      gu: 'કોઈપણ પ્રકારની કડક ડાયટિંગ ટાળવી અને તણાવ સમયે મદદ મેળવવી.',
    },
    urgentWarningSigns: {
      en: 'Acute gastric rupture (medical rarity), severe depression with active suicidal ideation, or extreme metabolic derangements.',
      hi: 'अत्यधिक पेट दर्द, डिप्रेशन के कारण आत्महत्या के विचार आना।',
      gu: 'તીવ્ર પેટમાં દુખાવો કે અતિશય નિરાશા અને આત્મહત્યાના વિચારો.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Binge eating is just a lack of willpower, laziness, or greed.',
          hi: 'बिंज ईटिंग केवल इच्छाशक्ति की कमी, लालच या आलस है।',
          gu: 'બિન્જ ઈટિંગ એ માત્ર ઈચ્છાશક્તિનો અભાવ કે લોભ છે.',
        },
        fact: {
          en: 'It is a recognized psychiatric disorder involving altered neurobiological satiety and impulse circuitry; it cannot be cured by shame or simple advice.',
          hi: 'यह मस्तिष्क के आवेग और तृप्ति तंत्र से जुड़ी एक वास्तविक मानसिक बीमारी है, केवल इच्छाशक्ति का मामला नहीं।',
          gu: 'આ મગજની કાર્યપ્રણાલી સાથે જોડાયેલી સાચી બીમારી છે, જેને વૈજ્ઞાનિક સારવારની જરૂર હોય છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'How is Binge Eating Disorder different from everyday overeating?',
          hi: 'बिंज ईटिंग सामान्य अधिक खाने से कैसे अलग है?',
          gu: 'આ સામાન્ય વધુ ખાવાથી કેવી રીતે અલગ પડે છે?',
        },
        answer: {
          en: 'Everyone occasionally overeats. In BED, overeating is accompanied by a distressing sense of total loss of control, marked shame, secrecy, and occurs regularly for months.',
          hi: 'त्योहारों में ज्यादा खाना सामान्य है, लेकिन बिंज ईटिंग में व्यक्ति चाहकर भी खुद को रोक नहीं पाता और बाद में गहरा पछतावा और अवसाद महसूस करता है।',
          gu: 'સામાન્ય વધુ ખાવામાં આનંદ હોય છે, જ્યારે આમાં કાબૂ ગુમાવવાનો તીવ્ર અફસોસ અને છૂપી રીતે ખાવાની ટેવ હોય છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'Systematic reviews and meta-analyses establish Cognitive Behavioral Therapy for Binge Eating Disorder (CBT-BED) as the first-line gold standard, producing binge abstinence rates of 50–60% at completion.',
          hi: 'वैज्ञानिक शोधों से सिद्ध है कि सीबीटी (CBT-BED) बिंज ईटिंग डिसऑर्डर के इलाज का गोल्ड स्टैंडर्ड है, जिससे 50-60% मरीज अनियंत्रित खाने से पूरी तरह मुक्त हो जाते हैं।',
          gu: 'વૈજ્ઞાનિક પૃથ્થકરણ દર્શાવે છે કે CBT-BED થેરાપી પ્રથમ હરોળની સર્વોત્તમ સારવાર છે, જે ૫૦-૬૦% દર્દીઓને અતિશય ખાવાની આદતમાંથી સંપૂર્ણ મુક્ત કરે છે.',
        },
        citationRef: 'World Psychiatry Meta-Analysis',
      },
      {
        fact: {
          en: 'Randomized controlled trials confirm Interpersonal Psychotherapy (IPT) yields long-term binge-eating remission rates comparable to CBT by addressing relational stressors triggering episodes.',
          hi: 'क्लिनिकल अध्ययनों से प्रमाणित है कि इंटरपर्सनल साइकोथेरेपी (IPT) आपसी रिश्तों के तनाव को कम करके सीबीटी जितनी ही टिकाऊ रिकवरी प्रदान करती है।',
          gu: 'ક્લિનિકલ ટ્રાયલ્સ સાબિત કરે છે કે ઇન્ટરપર્સનલ થેરાપી (IPT) સંબંધોના તણાવને હળવો કરીને લાંબા ગાળે અતિશય ખાવા પર કાયમી નિયંત્રણ મેળવવામાં મદદરૂપ બને છે.',
        },
        citationRef: 'Archives of General Psychiatry Trial',
      },
      {
        fact: {
          en: 'Large double-blind placebo-controlled trials show Lisdexamfetamine significantly reduces weekly binge days and compulsive obsessive food cravings.',
          hi: 'डबल-ब्लाइंड अध्ययनों के अनुसार, लिस्डेक्साम्फेटामाइन दवा बिंज खाने के दिनों और खाने की अनियंत्रित तलब को काफी हद तक कम करती है।',
          gu: 'ડબલ-બ્લાઇન્ડ પરીક્ષણો દર્શાવે છે કે લિસ્ડેક્સામ્ફેટામાઇન દવા બિન્જ ખાવાના દિવસો અને ખોરાક માટેની અતિશય તલપમાં નોંધપાત્ર ઘટાડો કરે છે.',
        },
        citationRef: 'JAMA Psychiatry BED Trial',
      },
      {
        fact: {
          en: 'Clinical trials demonstrate that ending restrictive dieting and adopting structured meal regularity significantly reduces metabolic syndrome markers alongside psychological recovery.',
          hi: 'शोधों से स्पष्ट है कि सख्त डाइटिंग छोड़कर नियमित भोजन अपनाने से मानसिक सुधार के साथ-साथ ब्लड शुगर और लिवर का स्वास्थ्य तेजी से सुधरता है।',
          gu: 'સંશોધનો પુષ્ટિ કરે છે કે કડક ડાયટિંગ બંધ કરીને નિયમિત ભોજન લેવાથી માનસિક સ્વાસ્થ્ય સાથે બ્લડ સુગર અને લિવરના રોગોમાં નોંધપાત્ર સુધારો થાય છે.',
        },
        citationRef: 'APA Eating Disorder Guidelines',
      },
    ],
    references: [
      { citation: 'Hilbert A, Petroff D, Herpertz S, et al. Meta-analysis of the efficacy of psychological and medical treatments for binge-eating disorder. World Psychiatry. 2019;18(3):272-273.', source: 'World Psychiatry', year: '2019' },
      { citation: 'National Institute for Health and Care Excellence (NICE). Eating disorders: recognition and treatment: NICE guideline [NG69]. London: NICE, 2020.', source: 'NICE Guidelines', year: '2020' },
      { citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Eating Disorders, Fourth Edition. Washington, DC: APA, 2023.', source: 'APA Guidelines', year: '2023' },
      { citation: 'Wilfley DE, Welch RR, Stein RI, et al. A randomized comparison of group cognitive-behavioral therapy and group interpersonal psychotherapy for the treatment of overweight individuals with binge-eating disorder. Arch Gen Psychiatry. 2002;59(8):713-721.', source: 'Archives of General Psychiatry', year: '2002' },
      { citation: 'McElroy SL, Hudson JI, Mitchell JE, et al. Efficacy and safety of lisdexamfetamine dimesylate in adults with moderate to severe binge-eating disorder: a randomized clinical trial. JAMA Psychiatry. 2015;72(3):235-246.', source: 'JAMA Psychiatry', year: '2015' },
    ],
    lastReviewed: '2026-09',
    reviewStatus: { lastReviewed: '2026-08', reviewer: '[VERIFY: Gujarat Institute of Mental Health]' },
    relatedIds: ['bulimia-nervosa', 'depression', 'cbt'],
    relatedContent: {
      conditionSlugs: ['bulimia-nervosa', 'anorexia-nervosa', 'major-depressive-disorder'],
      medicationIds: ['stimulant-adhd-medications', 'antidepressants'],
      treatmentIds: ['cbt', 'dbt'],
    },
  },

  // 4. Neurodevelopmental: ADHD
  {
    id: 'adhd',
    slug: 'attention-deficit-hyperactivity-disorder-adhd',
    category: 'neurodevelopmental',
    conditionIcon: 'adhd',
    name: {
      en: 'Attention-Deficit / Hyperactivity Disorder (ADHD)',
      hi: 'एडीएचडी (अटेंशन-डेफिसिट / हाइपरएक्टिविटी डिसऑर्डर / ADHD)',
      gu: 'એડીએચડી (ધ્યાનનો અભાવ અને અતિસક્રિયતા / ADHD)',
    },
    medicalTerms: {
      en: 'Attention Deficit Hyperactivity Disorder (ICD-11: 6A05, DSM-5-TR)',
      hi: 'एडीएचडी (ADHD)',
      gu: 'એડીએચડી (ADHD)',
    },
    overview: {
      en: 'Attention-Deficit / Hyperactivity Disorder (ADHD, ICD-11: 6A05, DSM-5-TR) is a chronic, highly heritable neurodevelopmental condition characterized by developmentally inappropriate and impairing patterns of inattention, hyperactivity, and impulsivity. Far from being a childhood phase of simple restlessness, lack of discipline, or poor parenting, ADHD represents a biological deficit in executive functioning governed by fronto-striatal dopaminergic and noradrenergic neural circuits. Individuals struggle with sustained focus, task initiation, working memory, emotional regulation, and time perception ("time blindness"). Symptoms present in three primary forms: Combined Presentation, Predominantly Inattentive Presentation, and Predominantly Hyperactive/Impulsive Presentation. Originating in early childhood, symptoms persist into adolescence and adulthood in over 60% of individuals, frequently manifesting in adults as chronic procrastination, mental restlessness, disorganized daily routines, emotional volatility, and career underachievement.',
      hi: 'एडीएचडी (Attention-Deficit / Hyperactivity Disorder - ADHD) एक न्यूरोडेवलपमेंटल (मस्तिष्क के विकास से जुड़ी) स्थिति है, जिसमें व्यक्ति को ध्यान केंद्रित करने, लंबे समय तक स्थिर बैठने और अपने आवेगों (Impulses) को नियंत्रित करने में निरंतर कठिनाई होती है। यह कोई साधारण आलस, बदमाशी या खराब परवरिश का नतीजा नहीं है, बल्कि मस्तिष्क के फ्रंटल लोब में डोपामाइन और नोरेड्रेनालाईन जैसे न्यूरोट्रांसमीटर के असंतुलन के कारण होता है। इसके मरीज समय का सही अंदाजा नहीं लगा पाते ("टाइम ब्लाइंडनेस"), जरूरी कामों को लगातार टालते रहते हैं और छोटी-छोटी बातों से आसानी से भटक जाते हैं। यह तीन रूपों में पाया जाता है: मुख्य रूप से ध्यान की कमी (Inattentive), अत्यधिक सक्रियता व जल्दबाजी (Hyperactive/Impulsive), या दोनों का मिला-जुला रूप (Combined)। हालांकि यह बचपन में शुरू होता है, लेकिन 60% से अधिक लोगों में इसके लक्षण वयस्कता (Adulthood) में भी बने रहते हैं और नौकरी, पढ़ाई व वैवाहिक जीवन को गंभीर रूप से प्रभावित करते हैं।',
      gu: 'એડીએચડી (ADHD) એ મગજના વિકાસ અને કાર્યપ્રણાલી સાથે સંકળાયેલી એક જટિલ ન્યુરોડેવલપમેન્ટલ સ્થિતિ છે, જેમાં વ્યક્તિને એકાગ્રતા જાળવવામાં, લાંબો સમય શાંત બેસવામાં અને ઉતાવળા નિર્ણયો અટકાવવામાં ભારે મુશ્કેલી પડે છે. આ કોઈ આળસ, શિસ્તનો અભાવ કે ખરાબ ઉછેર નથી, પરંતુ મગજના આગળના ભાગમાં ડોપામાઇન જેવા રસાયણોની ગતિવિધિમાં રહેલા જૈવિક તફાવતનું પરિણામ છે. દર્દીઓ સમયનું સાચું અનુમાન લગાવી શકતા નથી, રોજિંદા કામો મુલતવી રાખે છે અને કોઈ એક કામ પર લાંબો સમય ધ્યાન કેન્દ્રિત કરી શકતા નથી. આના મુખ્ય ત્રણ પ્રકારો છે: ધ્યાનનો અભાવ, અતિસક્રિયતા-આવેગશીલતા, અથવા બંનેનું મિશ્રણ. બાળપણમાં શરૂ થતી આ સ્થિતિ ૬૦% થી વધુ લોકોમાં પુખ્તાવસ્થામાં પણ ચાલુ રહે છે અને કારકિર્દી તેમજ અંગત સંબંધોમાં ગંભીર પડકારો ઊભા કરે છે.',
    },
    illustrativeExamples: [
      {
        en: 'Rohan, a 28-year-old software quality analyst in Bengaluru, had been labeled "bright but unfocused, lazy, and careless" by teachers throughout school because he consistently forgot homework, misplaced textbooks, and gazed out of classroom windows. In adulthood, independent living and professional demands pushed him to the brink of collapse. Rohan experienced severe "time blindness"—habitually underestimating how long tasks took, arriving chronically late to team standups, and accumulating dozens of half-finished bug-testing tickets. His apartment was littered with unopened utility bills, misplaced car keys, and abandoned hobby equipment. While sitting at his desk, any email ping, passing colleague, or internal wandering thought instantly derailed his concentration for hours. Conversely, when faced with an urgent software crash or immersed in an online strategy game, Rohan would slip into "hyperfocus," forgetting meals, water, and sleep for twelve hours straight. Socially, he blurted out answers, interrupted supervisors mid-sentence, and experienced intense "rejection-sensitive dysphoria"—paralyzing emotional agony over perceived minor feedback. After missing a critical compliance deadline that resulted in a workplace disciplinary warning, Rohan entered a severe depressive spiral and consulted a psychiatrist. A comprehensive neurodevelopmental assessment, supported by childhood report cards and the Adult ADHD Self-Report Scale (ASRS), confirmed ADHD (Combined Presentation). Starting extended-release Methylphenidate alongside adult ADHD coaching—incorporating visual timers, Pomodoro sprints, and task-chunking workflows—transformed his life. Rohan restored his career stability, minimized careless coding errors, organized his finances, and regained self-worth.',
        hi: 'बेंगलुरु में 28 वर्षीय सॉफ्टवेयर एनालिस्ट रोहन को स्कूल के दिनों से ही शिक्षक "होशियार लेकिन लापरवाह और आलसी" कहते थे, क्योंकि वह अक्सर होमवर्क भूल जाता था, किताबें खो देता था और क्लास में ख्यालों में खोया रहता था। बड़े होकर जब नौकरी और अकेले रहने की जिम्मेदारियां आईं, तो उसकी जिंदगी बिखरने लगी। रोहन को समय का कोई अंदाजा नहीं रहता था—वह हमेशा ऑफिस की बैठकों में देर से पहुंचता था और दर्जनों अधूरे प्रोजेक्ट उसके कंप्यूटर पर लटके रहते थे। उसके कमरे में बिना खुले बिजली के बिल, खोई हुई चाबियां और आधा-अधूरा सामान बिखरा रहता था। काम करते समय जरा सा फोन बजने या साथी के बोलने पर उसका ध्यान घंटों के लिए भटक जाता था। इसके विपरीत, वीडियो गेम खेलते समय या किसी आखिरी रात के काम में वह ऐसा डूब जाता था ("हाइपरफोकस") कि 12 घंटे तक खाना-पीना और सोना भूल जाता। बातचीत में वह दूसरों की बात बीच में ही काट देता था और बॉस की हल्की सी डांट से भी कई दिनों तक रोने और गहरे डिप्रेशन में चला जाता था। ऑफिस में एक जरूरी डेडलाइन छूटने पर जब उसे चेतावनी मिली, तो वह मानसिक रूप से टूट गया और मनोचिकित्सक के पास पहुंचा। बचपन के स्कूल रिकॉर्ड और एएसआरएस (ASRS) टेस्ट के बाद डॉक्टर ने उसमें एडीएचडी (ADHD - Combined) का निदान किया। सही दवा (मिथाइलफेनिडेट) और टाइम-मैनेजमेंट कोचिंग की मदद से रोहन की जिंदगी बदल गई। उसने अपने काम को समय पर पूरा करना सीखा, गलतियां बंद कीं और खोया हुआ आत्मविश्वास दोबारा हासिल किया।',
        gu: 'બેંગલુરુમાં ૨૮ વર્ષીય સોફ્ટવેર એનાલિસ્ટ રોહનને શાળાના દિવસોથી જ શિક્ષકો "તેજસ્વી પણ આળસુ અને બેદરકાર" ગણાવતા હતા, કારણ કે તે હોમવર્ક ભૂલી જતો, પુસ્તકો ખોઈ નાખતો અને ક્લાસમાં બારી બહાર જોયા કરતો. મોટા થયા પછી નોકરી અને ઘરની જવાબદારીઓ સંભાળવી તેના માટે અશક્ય બની ગઈ. રોહનને સમયનું કોઈ ભાન રહેતું નહીં—ઓફિસની મીટિંગ્સમાં નિયમિત મોડા પહોંચવું અને અડધા રહી ગયેલા પ્રોજેક્ટ્સનો ઢગલો થવો રોજિંદી બાબત બની ગઈ. રૂમમાં બિલના કવરો, ખોવાયેલી ચાવીઓ અને અધૂરી વસ્તુઓ રઝળતી રહેતી. કમ્પ્યુટર પર કામ કરતી વખતે સહેજ નોટિફિકેશન આવે તો કલાકો સુધી તેનું ધ્યાન ભટકી જતું. બીજી તરફ, મનગમતી વીડિયો ગેમ રમતી વખતે તે ૧૨ કલાક સુધી ખાવા-પીવાનું કે ઊંઘવાનું પણ ભૂલી જતો ("હાઈપરફોકસ"). વાતચીતમાં તે અધીરાઈથી બીજાની વાત કાપી નાખતો અને કોઈ સહેજ ઠપકો આપે તો દિવસો સુધી ભારે હતાશામાં ડૂબી જતો. ઓફિસમાં એક મહત્ત્વનું કામ ચૂકી જવાથી નોકરી જોખમમાં આવી ત્યારે તે મનોચિકિત્સક પાસે પહોંચ્યો. શાળાના જૂના રિપોર્ટ્સ અને વિશિષ્ટ પ્રશ્નાવલી દ્વારા એડીએચડી (ADHD) નું ચોક્કસ નિદાન થયું. ડૉક્ટર દ્વારા યોગ્ય દવા અને સમય વ્યવસ્થાપનની તાલીમ શરૂ થતાં રોહનની સ્થિતિમાં અદ્ભુત સુધારો આવ્યો. તે કામ સમયસર પૂરું કરવા લાગ્યો, ભૂલો અટકી અને તેનો આત્મવિશ્વાસ ફરી પાછો આવ્યો.',
      },
      {
        en: 'Meera, a 16-year-old high school student in Ahmedabad, demonstrated high academic aptitude but struggled with quiet inattention that was long overlooked because she was quiet and well-behaved. She spent hours staring at open textbooks without retaining information, misplaced exam admit cards, and left exam answer sheets incomplete due to slow processing speed and wandering attention. Describing a sensation of "mental brain fog and static noise," Meera experienced crushing exhaustion and panic before tests. A thorough multidisciplinary evaluation identified Predominantly Inattentive ADHD. Starting non-stimulant Atomoxetine alongside study-skills counseling, structured visual planners, and school accommodations (extra time on exams) enabled Meera to organize her studies effectively and regain confidence.',
        hi: 'अहमदाबाद की 16 वर्षीय छात्रा मीरा बहुत होशियार थी, लेकिन शांत स्वभाव की होने के कारण उसका ध्यान न टिकना वर्षों तक किसी की नजर में नहीं आया। वह घंटों खुली किताब के सामने बैठी रहती पर कुछ याद नहीं रहता था, और परीक्षा में समय की कमी से उसके पर्चे छूट जाते थे। दिमाग में "लगातार धुंध और शोर" महसूस होने से वह परीक्षा से पहले घबराहट और थकावट से बेहाल हो जाती थी। बाल एवं किशोर मनोचिकित्सक ने जांच के बाद इनअटेंटिव एडीएचडी की पहचान की। एटोमोक्सेटिन दवा, विजुअल प्लानर और स्कूल में परीक्षा के लिए अतिरिक्त समय मिलने से मीरा की पढ़ाई में जबरदस्त सुधार आया।',
        gu: 'અમદાવાદની ૧૬ વર્ષીય વિદ્યાર્થિની મીરા ખૂબ બુદ્ધિશાળી હોવા છતાં તેનું ધ્યાન ન ચોંટવાની તકલીફ કોઈ પકડી શક્યું નહીં કારણ કે તે શાંત અને આજ્ઞાકારી હતી. તે કલાકો સુધી પુસ્તક સામે બેસી રહેતી પણ કશું યાદ ન રહેતું, અને પરીક્ષામાં પેપર પૂરું કરી શકતી નહીં. મગજમાં અવિરત વિચારો અને થાકના કારણે તે પરીક્ષા પહેલાં ગભરાઈ જતી. બાળ મનોચિકિત્સકે ઇનઅટેન્ટિવ ADHD નું નિદાન કર્યું. યોગ્ય દવા, દૈનિક આયોજન અને પરીક્ષામાં વધારાના સમયની છૂટ મળતાં મીરાએ ઉત્કૃષ્ટ પરિણામ મેળવ્યું અને તેનો ભય દૂર થયો.',
      },
      {
        en: 'Vikram, a 36-year-old civil site engineer in Jaipur, struggled with extreme restlessness, impulsive decision-making, and verbal interruptions. He could not sit through technical project reviews without pacing, frequently received speeding violations, and impulsively quit previous firms whenever frustration arose. At home, his impulsivity caused friction with his spouse over uncoordinated purchases. Following an evaluation that revealed adult ADHD (Hyperactive-Impulsive Presentation), Vikram began a multimodal plan with low-dose stimulant medication and behavioral coaching. He learned strategies for emotional impulse control and structured communication, bringing lasting stability to both his marriage and construction management career.',
        hi: 'जयपुर के 36 वर्षीय सिविल इंजीनियर विक्रम अत्यधिक बेचैनी और जल्दबाजी में फैसले लेने की आदत से परेशान थे। वे मीटिंग्स में शांति से नहीं बैठ पाते थे, अक्सर तेज गाड़ी चलाने पर चालान कटवाते थे और गुस्से में आकर नौकरियां छोड़ देते थे। घर पर भी बिना सोचे-समझे पैसे खर्च करने से पति-पत्नी में तनाव रहता था। मनोरोग विशेषज्ञ द्वारा एडल्ट एडीएचडी का निदान होने के बाद, दवा और बिहेवियरल कोचिंग से विक्रम ने अपने आवेगों पर काबू पाना सीखा, जिससे उनकी नौकरी और वैवाहिक जीवन दोनों में स्थिरता आ गई।',
        gu: 'જયપુરના ૩૬ વર્ષીય સિવિલ એન્જિનિયર વિક્રમ સતત અજંપો, અધીરાઈ અને ઉતાવળા નિર્ણયોથી પીડાતા હતા. તેઓ મીટિંગમાં બેસી શકતા નહીં, વારંવાર ટ્રાફિકના નિયમો તોડતા અને ગુસ્સામાં નોકરીઓ બદલી નાખતા. ઘરમાં પણ અવિચારી ખર્ચા કરવાથી પત્ની સાથે વિવાદ થતો. સાયકિયાટ્રિસ્ટ પાસે તપાસ કરાવતાં એડલ્ટ ADHD નું નિદાન થયું. યોગ્ય દવા અને કાઉન્સેલિંગની મદદથી વિક્રમે પોતાના આવેગો પર નિયંત્રણ મેળવ્યું અને તેમના પારિવારિક તેમજ વ્યાવસાયિક જીવનમાં સ્થિરતા આવી.',
      },
    ],
    commonSymptoms: {
      en: [
        'Difficulty sustaining attention in tasks, conversations, or reading; frequent careless mistakes',
        'Easily distracted by extraneous stimuli; frequently misplacing essential items (keys, phones, assignments)',
        'Executive dysfunction: chronic procrastination, difficulty organizing tasks, poor time estimation',
        'Restlessness: feeling internally driven by a motor, difficulty remaining seated, fidgeting',
        'Impulsivity: interrupting others, blurting out answers, difficulty waiting for one\'s turn',
      ],
      hi: [
        'पढ़ाई या काम में ध्यान न टिकना, आसानी से ध्यान भटक जाना और बार-बार छोटी गलतियां होना',
        'चीजें (चश्मा, चाबियां, किताबें) अक्सर भूलना या खो देना',
        'काम को लगातार टालना (Procrastination) और समय का सही अनुमान न लगा पाना',
        'एक जगह शांत बैठने में बेचैनी, हाथ-पैर हिलाते रहना',
        'बातचीत में दूसरों को बीच में टोकना और बिना सोचे जल्दबाजी में काम करना',
      ],
      gu: [
        'એકાગ્રતાનો અભાવ, સરળતાથી ધ્યાન ભટકી જવું અને ભૂલો થવી',
        'જરૂરી ચીજો વારંવાર ભૂલી જવી કે ખોઈ નાખવી',
        'કામ ટાળવાની આદત અને સમયનું આયોજન ન થઈ શકવું',
        'એક જગ્યાએ શાંતિથી ન બેસી શકવું, સતત અજંપો રહેવો',
        'બીજાની વાત વચ્ચે કાપી નાખવી અને અધીરાઈ બતાવવી',
      ],
    },
    dailyLifeImpact: {
      en: 'Untreated ADHD exerts a profound negative impact across the lifespan. It undermines academic achievement, vocational stability, income potential, and relationship harmony. Adults face higher risks of vehicular accidents due to inattention, impulsive financial debt, substance abuse (frequently self-medicating with nicotine, caffeine, or cannabis), chronic insomnia, and co-occurring major depression and generalized anxiety disorders.',
      hi: 'एडीएचडी का इलाज न होने पर जीवन के हर क्षेत्र में भारी नुकसान होता है। पढ़ाई में असफलता, बार-बार नौकरी बदलना, आर्थिक नुकसान और रिश्तों में तनाव आम बात हो जाती है। ध्यान भटकने के कारण सड़क दुर्घटनाओं का खतरा बढ़ जाता है। कई लोग अपनी बेचैनी को दबाने के लिए अत्यधिक सिगरेट, शराब या अन्य नशों की गिरफ्त में आ जाते हैं, और आगे चलकर गंभीर डिप्रेशन व एंग्जायटी का शिकार हो जाते हैं।',
      gu: 'ADHD ની સારવાર ન કરવામાં આવે તો વ્યક્તિના સમગ્ર જીવન પર નકારાત્મક અસર પડે છે. અભ્યાસમાં મુશ્કેલી, વારંવાર નોકરી બદલવી, પૈસાનું નુકસાન અને લગ્નજીવનમાં તિરાડ પડી શકે છે. અકસ્માતો થવાની શક્યતા વધે છે. અજંપો દૂર કરવા ઘણા લોકો વ્યસનનો સહારો લે છે અને લાંબા ગાળે તીવ્ર ડિપ્રેશન અને ચિંતાના રોગોનો ભોગ બને છે.',
    },
    causes: {
      en: 'ADHD is a neurodevelopmental condition with substantial genetic contributions; genes are not destiny, and developmental and environmental factors also shape how symptoms appear and affect daily life. Neuroimaging studies demonstrate structural delays in the maturation of the prefrontal cortex, basal ganglia, and cerebellum, alongside functional dysregulation in dopamine (DAT1, DRD4) and norepinephrine neurotransmitter systems governing executive control, response inhibition, and working memory. Environmental risk factors include premature birth, extreme low birth weight, prenatal exposure to nicotine or alcohol, and early developmental neurotoxins.',
      hi: 'ADHD में आनुवंशिक कारकों का महत्वपूर्ण योगदान होता है, लेकिन जीन किसी व्यक्ति का भविष्य तय नहीं करते। विकासात्मक और पर्यावरणीय कारक भी लक्षणों और दैनिक जीवन पर उनके प्रभाव को आकार देते हैं। मस्तिष्क के स्कैन बताते हैं कि सोचने, योजना बनाने और भावनाओं को नियंत्रित करने वाले प्रीफ्रंटल कॉर्टेक्स के विकास में देरी होती है। साथ ही मस्तिष्क में डोपामाइन और नोरेड्रेनालाईन जैसे रासायनिक संदेशवाहकों की कार्यप्रणाली में अंतर होता है। इसके अलावा समय से पहले जन्म, जन्म के समय बहुत कम वजन, और गर्भावस्था के दौरान तंबाकू या शराब का सेवन भी इसके जोखिम को बढ़ाते हैं।',
      gu: 'ADHDમાં આનુવંશિક પરિબળોનો મહત્વનો ફાળો હોય છે, પરંતુ જનીનો વ્યક્તિનું ભવિષ્ય નક્કી કરતા નથી. વિકાસાત્મક અને પર્યાવરણીય પરિબળો પણ લક્ષણો અને રોજિંદા જીવન પર તેમની અસરને આકાર આપે છે. મગજના સ્કેન દર્શાવે છે કે આયોજન અને નિયંત્રણ કરનારા મગજના આગળના ભાગનો વિકાસ ધીમો હોય છે અને ડોપામાઇન જેવા રસાયણોનું સંતુલન જુદું હોય છે. અધૂરા મહિને જન્મ, જન્મ સમયે ઓછું વજન અને ગર્ભાવસ્થા દરમિયાન માતા દ્વારા ધૂમ્રપાન આના મુખ્ય જોખમી પરિબળો છે.',
    },
    riskFactors: {
      en: [
        'First-degree biological relative with ADHD, autism spectrum disorder, or mood disorders',
        'Premature birth (gestation < 37 weeks) or very low birth weight (< 1500 grams)',
        'Maternal prenatal exposure to tobacco, alcohol, chronic stress, or lead neurotoxicity',
        'Early childhood traumatic brain injury or severe psychosocial neglect',
        'Male biological sex (males are diagnosed 2-3x more often, though females are frequently underdiagnosed due to inattentive presentation)',
      ],
      hi: [
        'परिवार में किसी को एडीएचडी, ऑटिज्म या मूड डिसऑर्डर होना',
        'समय से पहले जन्म या जन्म के समय बहुत कम वजन होना',
        'गर्भावस्था के दौरान माता द्वारा धूम्रपान या शराब का सेवन',
        'बचपन में सिर पर गंभीर चोट लगना',
        'लड़कियों में ध्यान की कमी वाले लक्षण ज्यादा होते हैं, जिससे उनका निदान अक्सर छूट जाता है',
      ],
      gu: [
        'પરિવારમાં ADHD કે ઓટિઝમનો ઇતિહાસ',
        'અધૂરા મહિને જન્મ કે જન્મ સમયે અતિશય ઓછું વજન',
        'ગર્ભાવસ્થા દરમિયાન તમાકુ કે દારૂનું સેવન',
        'બાળપણમાં મગજની ગંભીર ઈજા',
        'છોકરીઓમાં શાંત લક્ષણો હોવાથી ઘણીવાર નિદાન મોડું થાય છે',
      ],
    },
    psychiatricAssessment: {
      en: 'A comprehensive psychiatric assessment requires a longitudinal developmental history from early childhood to adulthood. Standardized, multi-informant rating scales across settings (e.g., Vanderbilt, Conners-3, ASRS v1.1, DIVA-5 clinical interview) quantify current and past executive dysfunction. Collateral reports from parents, spouses, or childhood school records are essential. The psychiatrist systematically screens for and rules out co-occurring learning disorders, depression, bipolar disorder, anxiety, sleep apnea, and substance use.',
      hi: 'मनोचिकित्सक द्वारा बचपन से लेकर वर्तमान तक का संपूर्ण विकासात्मक इतिहास लिया जाता है। मानकीकृत रेटिंग स्केल्स (जैसे ASRS, Conners) और DIVA-5 क्लिनिकल इंटरव्यू द्वारा लक्षणों की जांच होती है। स्कूल के पुराने रिजल्ट और माता-पिता या जीवनसाथी से जानकारी ली जाती है। साथ ही डिप्रेशन, एंग्जायटी, नींद की बीमारी और सीखने की कठिनाइयों (Dyslexia) की जांच कर उन्हें अलग किया जाता है।',
      gu: 'મનોચિકિત્સક દ્વારા બાળપણથી અત્યાર સુધીનો વિગતવાર ઇતિહાસ મેળવવામાં આવે છે. વિશિષ્ટ રેટિંગ સ્કેલ અને પ્રશ્નાવલી (ASRS, DIVA-5) નો ઉપયોગ થાય છે. શાળાના જૂના રિપોર્ટ્સ અને માતાપિતા કે જીવનસાથીની માહિતી લેવામાં આવે છે. ડિપ્રેશન, ચિંતા, ઊંઘની તકલીફ કે ભણવાની ખામીઓનું પરીક્ષણ કરીને સાચું નિદાન નક્કી કરાય છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, ADHD diagnosis mandates: (1) A persistent pattern of inattention and/or hyperactivity-impulsivity interfering with functioning or development, manifested by ≥6 symptoms in inattention and/or ≥6 symptoms in hyperactivity-impulsivity (≥5 symptoms for adolescents 17+ and adults) for at least 6 months; (2) Several inattentive or hyperactive-impulsive symptoms were present prior to age 12; (3) Several symptoms are present in two or more settings (e.g., at home, school, or work; with friends or relatives; in other activities); (4) Clear evidence that symptoms reduce quality of social, academic, or occupational functioning; and (5) Symptoms do not occur exclusively during schizophrenia or another psychotic disorder and are not better explained by another mental disorder. Presentations are categorized as: Combined, Predominantly Inattentive, or Predominantly Hyperactive/Impulsive. In ICD-11, it is coded as 6A05.',
      hi: 'DSM-5-TR के अनुसार एडीएचडी के निदान के लिए जरूरी शर्तें: (1) ध्यान की कमी या अतिसक्रियता/आवेगशीलता के कम से कम 6 लक्षण (17 वर्ष से अधिक और वयस्कों के लिए कम से कम 5 लक्षण) लगातार 6 महीने से मौजूद हों; (2) इनमें से कई लक्षण 12 वर्ष की आयु से पहले शुरू हुए हों; (3) लक्षण कम से कम दो अलग-अलग जगहों पर दिखते हों (जैसे घर, स्कूल, ऑफिस या दोस्तों के बीच); (4) इनसे पढ़ाई, नौकरी या रिश्तों में गंभीर रुकावट आ रही हो; और (5) ये लक्षण किसी अन्य मानसिक बीमारी के कारण न हों। इसे तीन श्रेणियों में बांटा जाता है: कंबाइंड (दोनों तरह के लक्षण), प्रिडॉमिनेन्टली इनअटेंटिव (केवल ध्यान की कमी), या हाइपरएक्टिव/इम्पल्सिव (केवल अतिसक्रियता)। ICD-11 में इसका कोड 6A05 है।',
      gu: 'DSM-5-TR મુજબ ADHD ના નિદાન માટેના નિયમો: (૧) એકાગ્રતાનો અભાવ અથવા અતિસક્રિયતાના ઓછામાં ઓછા ૬ લક્ષણો (પુખ્ત વયના લોકો માટે ૫ લક્ષણો) સતત ૬ મહિનાથી હોવા જોઈએ; (૨) કેટલાક લક્ષણો ૧૨ વર્ષની ઉંમર પહેલાં શરૂ થયેલા હોવા જોઈએ; (૩) લક્ષણો ઓછામાં ઓછી બે જુદી જુદી જગ્યાએ (જેમ કે ઘરમાં અને શાળા/ઓફિસમાં) જોવા મળવા જોઈએ; (૪) રોજિંદા જીવન, અભ્યાસ કે કામમાં નોંધપાત્ર નુકસાન થતું હોવું જોઈએ; અને (૫) અન્ય કોઈ માનસિક બીમારી આનું કારણ ન હોવી જોઈએ. આના ત્રણ પ્રકારો છે: કમ્બાઇન્ડ, ઇનઅટેન્ટિવ, અથવા હાઇપરએક્ટિવ. ICD-11 માં આનો કોડ 6A05 છે.',
    },
    differentialConsiderations: {
      en: 'Differential diagnosis requires careful distinction from: Generalized Anxiety Disorder (distractibility is driven by intrusive worries rather than executive dysfunction); Major Depressive Disorder (poor focus and cognitive slowing are episodic and coincide with depressed mood and anhedonia); Bipolar Disorder (manic episodes are episodic with grandiosity, decreased need for sleep, and elevated mood, unlike ADHD\'s chronic trait baseline); Specific Learning Disorders (impairment is confined strictly to academic domains like reading or math); Obstructive Sleep Apnea (causes daytime inattention and behavioral issues); and Borderline Personality Disorder (shares emotional impulsivity, but marked by intense fear of abandonment and identity disturbance).',
      hi: 'इसे एंग्जायटी (जिसमें चिंता के कारण ध्यान भटकता है); डिप्रेशन (जिसमें उदासी के कारण एकाग्रता घटती है); बायपोलर डिसऑर्डर (जिसमें उन्माद के निश्चित दौरे पड़ते हैं); डिस्लेक्सिया या पढ़ने की कमजोरी; स्लीप एप्निया (नींद में सांस रुकने से दिन में ध्यान न लगना); और पर्सनालिटी डिसऑर्डर से सावधानीपूर्वक अलग पहचाना जाता है।',
      gu: 'આને ચિંતાનો રોગ (જેમાં ચિંતાથી ધ્યાન ભટકે છે); ડિપ્રેશન; બાયપોલર ડિસઓર્ડર (જેમાં અતિઉત્સાહના ચોક્કસ તબક્કા આવે છે); ભણવાની ચોક્કસ નબળાઈ (ડિસ્લેક્સિયા); ઊંઘની બીમારીઓ; અને લાગણીઓની અસ્થિરતા વચ્ચેનો તફાવત સમજીને અલગ તારવવામાં આવે છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Framing ADHD as a neurodevelopmental executive function difference rather than moral failure or lack of effort.',
        hi: 'यह समझाना कि यह कोई आलस या बदमाशी नहीं, बल्कि मस्तिष्क की कार्यप्रणाली की भिन्नता है।',
        gu: 'સમજાવવું કે આ કોઈ આળસ કે બદમાશી નથી પણ મગજની કુદરતી કાર્યશૈલીનો ફેરફાર છે.',
      },
      lifestyleSupport: {
        en: 'Environmental scaffolding: visible timers, daily planners, breaking large tasks into micro-steps, minimizing sensory clutter.',
        hi: 'दिनचर्या की लिखित सूची बनाना, बड़े कामों को छोटे टुकड़ों में बांटना और शांत वातावरण में काम करना।',
        gu: 'રોજિંદા આયોજન માટે ડાયરી કે ટાઈમર વાપરવા અને મોટા કામોને નાના ભાગોમાં વહેંચવા.',
      },
      psychotherapy: {
        en: 'Behavioral parent training for children; ADHD-adapted Cognitive Behavioral Therapy (CBT) and executive function coaching for adults.',
        hi: 'बच्चों के लिए बिहेवियरल थेरेपी और वयस्कों के लिए टाइम-मैनेजमेंट व ऑर्गनाइजेशनल कोचिंग।',
        gu: 'બાળકો માટે બિહેવિયર થેરાપી અને પુખ્ત વયના લોકો માટે ટાઈમ મેનેજમેન્ટ કોચિંગ.',
      },
      medications: {
        en: 'Pharmacotherapy is highly effective and considered first-line for moderate-to-severe ADHD. Classes include stimulants (Methylphenidate) and non-stimulants (Atomoxetine, Clonidine) strictly under psychiatric supervision.',
        hi: 'मनोचिकित्सक की देखरेख में दी जाने वाली दवाएं (जैसे मिथाइलफेनिडेट या एटोमोक्सेटिन) एकाग्रता और आवेग नियंत्रण में चमत्कारी सुधार ला सकती हैं।',
        gu: 'ડૉક્ટરની દેખરેખ હેઠળ આપવામાં આવતી દવાઓ એકાગ્રતા વધારવામાં અને અજંપો ઘટાડવામાં ખૂબ અસરકારક નીવડે છે.',
      },
      familySocialInterventions: {
        en: 'Academic and workplace accommodations: extended testing time, quiet workspaces, and clear written instructions.',
        hi: 'स्कूल या कार्यस्थल पर अतिरिक्त समय और स्पष्ट निर्देश जैसी रियायतें दिलाना।',
        gu: 'શાળા કે ઓફિસમાં જરૂરી સમય અને અનુકૂળ વાતાવરણ પૂરું પાડવું.',
      },
    },
    treatmentGoals: {
      en: 'Enhance academic/occupational productivity, improve emotional regulation, reduce impulsivity-related accidents, and build self-esteem.',
      hi: 'पढ़ाई और काम में सुधार, आवेगों पर नियंत्रण और खोए हुए आत्मविश्वास को वापस पाना।',
      gu: 'અભ્યાસ અને કામમાં ક્ષમતા વધારવી, અકસ્માતો અટકાવવા અને આત્મવિશ્વાસ વધારવો.',
    },
    recoveryOutlook: {
      en: 'While ADHD is an enduring neurodevelopmental condition rather than an acute illness with a cure, the prognosis with comprehensive multimodal intervention is outstanding. First-line pharmacotherapy (stimulants such as Methylphenidate, or non-stimulants like Atomoxetine) can improve attention, impulse control, and everyday functioning for many people, although benefits and side effects vary and treatment should be reviewed over time. When paired with ADHD-adapted cognitive coaching, structured routine scaffolding, and supportive work environments, individuals with ADHD frequently thrive. Their divergent cognitive style—often characterized by boundless enthusiasm, hyperfocused creativity, exceptional lateral thinking, and crisis adaptability—enables them to achieve remarkable personal, artistic, and professional success.',
      hi: 'यद्यपि एडीएचडी एक आजीवन रहने वाली न्यूरोलॉजिकल बनावट है, लेकिन सही और समग्र इलाज से इसका भविष्य अत्यंत उज्ज्वल होता है। मनोचिकित्सक की देखरेख में दी जाने वाली दवाओं (जैसे मिथाइलफेनिडेट या एटोमोक्सेटिन) से कई लोगों में एकाग्रता और आवेग नियंत्रण में सुधार हो सकता है, लेकिन लाभ और दुष्प्रभाव व्यक्ति के अनुसार अलग होते हैं तथा उपचार की समय-समय पर समीक्षा जरूरी है। जब इसके साथ समय प्रबंधन की आदतें और उचित माहौल मिलता है, तो एडीएचडी से पीड़ित लोग जीवन में असाधारण सफलता प्राप्त करते हैं। उनकी रचनात्मक सोच, त्वरित निर्णय लेने की क्षमता और किसी विषय में डूबकर काम करने ("हाइपरफोकस") की खूबी उन्हें व्यापार, कला, विज्ञान और तकनीकी क्षेत्रों में अग्रणी बनाती है।',
      gu: 'જોકે ADHD એ મગજની આજીવન કુદરતી રચના છે, છતાં યોગ્ય સારવાર અને સહકારથી વ્યક્તિનું ભવિષ્ય ખૂબ જ સફળ અને ઉજ્જવળ બની શકે છે. ડૉક્ટર દ્વારા સૂચવાયેલી દવાઓથી ઘણા લોકોમાં એકાગ્રતા અને આવેગ નિયંત્રણમાં સુધારો થઈ શકે છે, પરંતુ લાભ અને આડઅસરો વ્યક્તિ પ્રમાણે બદલાય છે અને સારવારની સમયાંતરે સમીક્ષા જરૂરી છે. જ્યારે આની સાથે યોગ્ય ટેવો અને અનુકૂળ વાતાવરણ મળે છે, ત્યારે ADHD ધરાવતા લોકો અસાધારણ પ્રગતિ કરે છે. તેમની અનોખી કલ્પનાશક્તિ, નવીન વિચારો અને સંકટ સમયે ઝડપી નિર્ણયો લેવાની આવડત તેમને કલા, વિજ્ઞાન, વ્યવસાય અને ટેકનોલોજીના ક્ષેત્રમાં અગ્રેસર બનાવે છે.',
    },
    relapsePrevention: {
      en: 'Maintaining consistent routines, scheduled medication adherence, and proactive support during major life transitions.',
      hi: 'दवा का नियमित सेवन और जीवन में बदलाव (जैसे नई नौकरी या कॉलेज) के समय अतिरिक्त योजना बनाना।',
      gu: 'દવાઓ નિયમિત લેવી અને નવી જવાબદારીઓ વખતે યોગ્ય માર્ગદર્શન ચાલુ રાખવું.',
    },
    urgentWarningSigns: {
      en: 'Dangerous impulsive behavior (reckless driving, severe substance experimentation), severe emotional dysregulation, or comorbid depression with suicidal thoughts.',
      hi: 'लापरवाह ड्राइविंग, नशाखोरी, या डिप्रेशन के कारण आत्महत्या के विचार आना।',
      gu: 'જોખમી ડ્રાઇવિંગ, વ્યસન તરફ વળવું કે તીવ્ર નિરાશા અનુભવવી.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'ADHD is just bad parenting or too much screen time, and children simply outgrow it completely.',
          hi: 'एडीएचडी केवल खराब परवरिश या मोबाइल देखने का नतीजा है और यह उम्र के साथ अपने आप खत्म हो जाता है।',
          gu: 'ADHD એ માત્ર ખરાબ ઉછેર કે વધુ મોબાઈલ જોવાનું પરિણામ છે અને મોટા થતાં જાતે મટી જાય છે.',
        },
        fact: {
          en: 'ADHD is a valid biological neurodevelopmental condition. Over 60% of individuals continue to experience impairing symptoms into adulthood.',
          hi: 'यह एक जैविक न्यूरोडेवलपमेंटल स्थिति है। 60% से अधिक लोगों में इसके लक्षण बड़े होने पर भी बने रहते हैं।',
          gu: 'આ મગજની જૈવિક સ્થિતિ છે. ૬૦% થી વધુ લોકોમાં પુખ્ત વયે પણ આના લક્ષણો ચાલુ રહે છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can adults be diagnosed with ADHD for the first time?',
          hi: 'क्या वयस्कों में पहली बार एडीएचडी का निदान हो सकता है?',
          gu: 'શું મોટી ઉંમરે પહેલીવાર ADHD નું નિદાન થઈ શકે?',
        },
        answer: {
          en: 'Yes. Many individuals with high intelligence or supportive environments compensate during childhood, only seeking help when adult responsibilities overwhelm their coping systems.',
          hi: 'हाँ, कई होशियार बच्चे बचपन में इसे संभाल लेते हैं, लेकिन कॉलेज या नौकरी की जिम्मेदारियां बढ़ने पर वयस्कों में पहली बार इसकी पहचान होती है।',
          gu: 'હા, ઘણા લોકો બાળપણમાં પોતાની બુદ્ધિથી ગાડું ગબડાવી લે છે, પરંતુ પુખ્ત વયે જવાબદારીઓ વધતાં આ તકલીફ સામે આવે છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'A network meta-analysis of 133 randomized controlled trials published in The Lancet Psychiatry confirms that Methylphenidate (in children/adolescents) and Amphetamines/Methylphenidate (in adults) demonstrate superior efficacy in reducing core ADHD symptoms compared to placebo.',
          hi: 'द लांसेट साइकियाट्री के 133 क्लिनिकल ट्रायल्स के विश्लेषण से सिद्ध है कि मिथाइलफेनिडेट दवा बच्चों और वयस्कों में एडीएचडी के मूल लक्षणों को कम करने में अत्यधिक प्रभावशाली है।',
          gu: 'ધ લેન્સેટ સાયકિયાટ્રીના ૧૩૩ ક્લિનિકલ પરીક્ષણોના પૃથ્થકરણ મુજબ મિથાઈલફેનિડેટ દવા બાળકો અને પુખ્ત વયના લોકોમાં ADHD ના મૂળ લક્ષણો ઘટાડવામાં સર્વોત્તમ પરિણામ આપે છે.',
        },
        citationRef: 'The Lancet Psychiatry Network Meta-Analysis',
      },
      {
        fact: {
          en: 'Large genetic studies support a substantial inherited contribution to ADHD, alongside differences in brain development and function. These findings describe group-level patterns and do not determine an individual's abilities or future.',
          hi: 'बड़े आनुवंशिक अध्ययनों से पता चलता है कि ADHD में विरासत में मिलने वाले कारकों का महत्वपूर्ण योगदान होता है। ये निष्कर्ष समूहों के स्तर के पैटर्न बताते हैं; वे किसी व्यक्ति की क्षमता या भविष्य तय नहीं करते।',
          gu: 'મોટા આનુવંશિક અભ્યાસો દર્શાવે છે કે ADHDમાં વારસાગત પરિબળોનો મહત્વનો ફાળો છે. આ તારણો જૂથોના સ્તરે જોવા મળતા નમૂનાઓ દર્શાવે છે; તે કોઈ વ્યક્તિની ક્ષમતા કે ભવિષ્ય નક્કી કરતા નથી.',
        },
        citationRef: 'World Federation of ADHD Consensus Statement',
      },
      {
        fact: {
          en: 'The National Institute of Mental Health Multimodal Treatment Study (MTA) proved that systematic medication management combined with behavioral therapy yields the highest rate of functional and academic improvement.',
          hi: 'प्रतिष्ठित एमटीए (MTA) अध्ययन से साबित हुआ है कि दवा और बिहेवियरल थेरेपी का संयोजन अकेले किसी एक उपचार की तुलना में कहीं बेहतर परिणाम देता है।',
          gu: 'પ્રતિષ્ઠિત MTA સંશોધન સાબિત કરે છે કે દવાઓ અને વર્તણૂકીય થેરાપી (Behavioral Therapy) નું સંયોજન એકલા કાઉન્સેલિંગ કરતાં ઘણું ઉત્તમ પરિણામ આપે છે.',
        },
        citationRef: 'NIMH Multimodal Treatment Study (MTA)',
      },
      {
        fact: {
          en: 'Longitudinal studies demonstrate that adult ADHD treatment significantly decreases the incidence of motor vehicle collisions, substance use disorders, and occupational failures.',
          hi: 'दीर्घकालिक शोधों से स्पष्ट है कि समय पर उपचार मिलने से वयस्कों में सड़क दुर्घटनाओं, नशे की लत और नौकरी छूटने का जोखिम बहुत कम हो जाता है।',
          gu: 'લાંબા ગાળાના સંશોધનો દર્શાવે છે કે યોગ્ય સારવારથી પુખ્ત વયે માર્ગ અકસ્માતો, વ્યસનો અને નોકરી છૂટવાનું જોખમ ઘણું ઘટી જાય છે.',
        },
        citationRef: 'NICE Guideline NG87',
      },
    ],
    references: [
      { citation: 'Faraone SV, Banaschewski T, Coghill D, et al. The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder. Neurosci Biobehav Rev. 2021;128:789-818.', source: 'World Federation of ADHD', year: '2021' },
      { citation: 'Cortese S, Adamo N, Del Giovane C, et al. Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis. Lancet Psychiatry. 2018;5(9):727-738.', source: 'The Lancet Psychiatry', year: '2018' },
      { citation: 'National Institute for Health and Care Excellence (NICE). Attention deficit hyperactivity disorder: diagnosis and management: NICE guideline [NG87]. London: NICE, 2019.', source: 'NICE Guidelines', year: '2019' },
      { citation: 'The MTA Cooperative Group. A 14-month randomized clinical trial of treatment strategies for attention-deficit/hyperactivity disorder. Arch Gen Psychiatry. 1999;56(12):1073-1086.', source: 'Archives of General Psychiatry', year: '1999' },
      { citation: 'Posner J, Polanczyk GV, Sonuga-Barke E. Attention-deficit hyperactivity disorder. Lancet. 2020;395(10222):450-462.', source: 'The Lancet', year: '2020' },
    ],
    lastReviewed: '2026-09',
    reviewStatus: { lastReviewed: '2026-08', reviewer: '[VERIFY: Gujarat Institute of Mental Health]' },
    relatedIds: ['autism-spectrum-disorder', 'stimulant-adhd-medications', 'cbt'],
    relatedContent: {
      conditionSlugs: ['autism-spectrum-disorder-asd', 'generalized-anxiety-disorder', 'major-depressive-disorder'],
      medicationIds: ['stimulant-adhd-medications'],
      treatmentIds: ['family-therapy', 'cbt'],
    },
  },

  // 5. Neurodevelopmental: Autism Spectrum Disorder
  {
    id: 'autism-spectrum-disorder',
    slug: 'autism-spectrum-disorder-asd',
    category: 'neurodevelopmental',
    conditionIcon: 'autism-spectrum-disorder',
    name: {
      en: 'Autism Spectrum Disorder (ASD)',
      hi: 'ऑटिज्म स्पेक्ट्रम डिसऑर्डर (ASD)',
      gu: 'ઓટિઝમ સ્પેક્ટ્રમ ડિસઓર્ડર (ASD)',
    },
    medicalTerms: {
      en: 'Autism Spectrum Disorder (ICD-11: 6A02, DSM-5-TR)',
      hi: 'ऑटिज्म स्पेक्ट्रम डिसऑर्डर',
      gu: 'ઓટિઝમ સ્પેક્ટ્રમ ડિસઓર્ડર',
    },
    overview: {
      en: 'Autism Spectrum Disorder (ASD, ICD-11: 6A02, DSM-5-TR) is a lifelong neurodevelopmental condition characterized by persistent, qualitative differences in social communication and interaction, alongside restricted, repetitive patterns of behavior, interests, and sensory processing differences. The designation of a "spectrum" reflects the extraordinary heterogeneity among autistic individuals: clinical presentations range from persons requiring 24-hour daily support with non-verbal communication to highly articulate, intellectually gifted individuals whose subtle social differences and sensory fatigue may remain masked until adulthood. Rather than reflecting an inherent lack of emotion or empathy, autism represents a distinct neurological wiring characterized by unique perceptual processing, profound attention to detail, passionate specialized interests, and deep authenticity.',
      hi: 'ऑटिज्म स्पेक्ट्रम डिसऑर्डर (Autism Spectrum Disorder - ASD) एक आजीवन रहने वाली न्यूरोडेवलपमेंटल (मस्तिष्क के विकास से जुड़ी) स्थिति है। इसमें सामाजिक बातचीत, संवाद करने के तरीके, और व्यवहार में विशिष्ट अंतर पाए जाते हैं। इसके साथ ही व्यक्ति में एक ही क्रिया को बार-बार दोहराना, निश्चित दिनचर्या पर अड़े रहना, और रोशनी, आवाज या स्पर्श के प्रति असामान्य संवेदनशीलता देखी जाती है। "स्पेक्ट्रम" का अर्थ है कि हर व्यक्ति में यह अलग रूप में प्रकट होता है—कुछ बच्चों को दैनिक कार्यों में आजीवन सहारे की जरूरत होती है, जबकि कई वयस्क अत्यधिक बुद्धिमान, आत्मनिर्भर और अपने कार्यक्षेत्र में शीर्ष स्तर पर होते हैं। ऑटिज्म कोई बीमारी या मानसिक मंदता नहीं है, बल्कि दुनिया को महसूस करने और सोचने का एक अनोखा और विशिष्ट तंत्रिका तंत्र (Neurological) तरीका है।',
      gu: 'ઓટિઝમ સ્પેક્ટ્રમ ડિસઓર્ડર (ASD) એ મગજના વિકાસ સાથે સંકળાયેલી એક આજીવન સ્થિતિ છે, જેમાં સામાજિક વાતચીત, સંબંધો જાળવવાની રીત તેમજ વર્તનમાં વિશિષ્ટ ભિન્નતા જોવા મળે છે. દર્દીઓમાં એકની એક ક્રિયા વારંવાર કરવી, નિયમિત ક્રમમાં ફેરફાર સહન ન કરવો અને અવાજ કે પ્રકાશ પ્રત્યે અતિશય સંવેદનશીલતા જોવા મળે છે. "સ્પેક્ટ્રમ" શબ્દ દર્શાવે છે કે દરેક વ્યક્તિમાં આનું પ્રમાણ જુદું હોય છે—કેટલાકને સતત સંભાળની જરૂર પડે છે, જ્યારે ઘણા લોકો અસાધારણ બુદ્ધિપ્રતિભા ધરાવતા અને સંપૂર્ણ આત્મનિર્ભર હોય છે. ઓટિઝમ એ કોઈ રોગ નથી પણ મગજની એક વિશિષ્ટ કાર્યશૈલી છે જેમાં વિશ્વને જોવાનો અને સમજવાનો દ્રષ્ટિકોણ અલગ હોય છે.',
    },
    illustrativeExamples: [
      {
        en: 'Aarav, an 8-year-old boy in Ahmedabad, exhibited unique developmental characteristics from age two. While his peers engaged in imaginative pretend play, Aarav preferred meticulously arranging his miniature trains by model number and engine class. He rarely made sustained eye contact and spoke with sophisticated, formal vocabulary ("like a little professor"), delivering monologues on railway schedules while struggling to engage in back-and-forth conversational banter. In his third-grade classroom, the hum of fluorescent lighting, sudden school bell rings, and cafeteria chatter overwhelmed him, causing him to cover his ears and rock rhythmically to self-soothe. Aarav interpreted metaphors and humor literally, feeling confused and isolated when classmates teased him. When unexpected schedule disruptions occurred—such as a substitute teacher or an unscheduled sports period—Aarav experienced intense distress and emotional meltdowns. Relatives mistakenly counseled his parents to "enforce stricter discipline." Recognizing his genuine distress, his parents consulted a child psychiatrist. A multidisciplinary developmental assessment utilizing the Autism Diagnostic Observation Schedule (ADOS-2) confirmed Autism Spectrum Disorder (Level 1, requiring support). The team initiated a neurodiversity-affirming plan: his school provided noise-canceling headphones, visual schedule boards, and a designated quiet sensory corner. An occupational therapist introduced sensory integration strategies, while speech therapy supported pragmatic social communication. Within six months, Aarav\'s distress plummeted, his remarkable mathematical talents flourished, and he made close friends in an after-school robotics club.',
        hi: 'अहमदाबाद में 8 वर्षीय आरव दो साल की उम्र से ही अपने हमउम्र बच्चों से अलग व्यवहार करता था। जहां दूसरे बच्चे खिलौनों से खेलते थे, वहीं आरव अपनी टॉय ट्रेनों को उनके मॉडल नंबर और रंग के आधार पर घंटों तक एक सीधी लाइन में लगाता रहता था। वह लोगों की आंखों में देखकर बात करने से कतराता था, लेकिन ट्रेनों और रेलवे टाइम-टेबल पर बड़ों की तरह बहुत औपचारिक भाषा में धाराप्रवाह बोलता था ("जैसे कोई छोटा प्रोफेसर")। स्कूल में क्लास की तेज लाइट, अचानक बजने वाली घंटी और कैंटीन के शोर से वह बुरी तरह घबरा जाता था, अपने कान बंद कर लेता था और खुद को शांत करने के लिए आगे-पीछे झूलने लगता था। मुहावरों और मजाक को वह बिल्कुल शब्दशः समझता था, जिससे दोस्त उसका मजाक उड़ाते थे। जब टाइम-टेबल में अचानक कोई बदलाव होता, तो वह अत्यधिक घबराहट और गुस्से (Meltdown) से रोने लगता था। रिश्तेदारों का कहना था कि "बच्चे पर सख्ती करो," लेकिन माता-पिता उसे एक बाल मनोचिकित्सक के पास ले गए। विशेष जांच (ADOS-2) के बाद ऑटिज्म स्पेक्ट्रम डिसऑर्डर (Level 1) का निदान हुआ। डॉक्टर के सुझाव पर स्कूल ने आरव को शोर रोकने वाले हेडफोन दिए, तस्वीरों के जरिए दिनचर्या समझाई और शांत कोना उपलब्ध कराया। ऑक्यूपेशनल थेरेपी और स्पीच थेरेपी की मदद से आरव का तनाव काफी कम हो गया। गणित में उसकी असाधारण प्रतिभा निखर कर सामने आई और उसने रोबोटिक्स क्लब में अच्छे दोस्त बना लिए।',
        gu: 'અમદાવાદમાં ૮ વર્ષીય આરવ બે વર્ષની ઉંમરથી જ અન્ય બાળકો કરતાં જુદો પડતો હતો. રમકડાં સાથે રમવાને બદલે તે ટ્રેનના ડબ્બાઓને તેમના રંગ અને નંબર પ્રમાણે કલાકો સુધી લાઈનમાં ગોઠવતો રહેતો. તે આંખોમાં જોઈને વાત નહોતો કરતો, પરંતુ ટ્રેનોના સમયપત્રક વિશે કોઈ પ્રોફેસરની જેમ ખૂબ અઘરા શબ્દોમાં સતત બોલી શકતો હતો. શાળામાં ટ્યુબલાઇટનો અવાજ, તીવ્ર ઘંટડી અને બાળકોનો ઘોંઘાટ તેને અસહ્ય લાગતો, જેથી તે કાન દબાવીને આગળ-પાછળ હલવા લાગતો. વર્ગમાં શિક્ષક કે મિત્રોની મજાક તે શબ્દશઃ સાચી માની લેતો, જેથી અન્ય બાળકો તેને ચીડવતા. જો સમયપત્રકમાં સહેજ પણ અચાનક ફેરફાર થાય તો તે બેચેન થઈને જોરજોરથી રડવા લાગતો. સગાંવહાલાં તેને "હઠીલું અને જીદ્દી બાળક" કહેતાં હતાં. સાચી સ્થિતિ સમજવા માતાપિતા તેને બાળ મનોચિકિત્સક પાસે લઈ ગયા. વિશિષ્ટ તપાસ (ADOS-2) દ્વારા ઓટિઝમ સ્પેક્ટ્રમ ડિસઓર્ડર (લેવલ ૧) નું સાચું નિદાન થયું. શાળામાં તેને અવાજ રોકતા હેડફોન આપવામાં આવ્યા, ચિત્રો દ્વારા સમયપત્રક સમજાવવામાં આવ્યું અને શાંત વાતાવરણ પૂરું પાડવામાં આવ્યું. ઓક્યુપેશનલ અને સ્પીચ થેરાપીની મદદથી આરવનો ગભરાટ દૂર થયો, ગણિતમાં તેની અસાધારણ પ્રતિભા ચમકી ઊઠી અને તે રોબોટિક્સ ક્લબમાં પોતાના જેવા નવા મિત્રો બનાવવામાં સફળ થયો.',
      },
      {
        en: 'Divya, a 24-year-old biological data analyst in Hyderabad, had spent her life feeling like "an alien trying to imitate human behavior." To fit into school and university social circles, she meticulously observed peers, practicing facial expressions, vocal modulations, and social scripts—an exhausting process known as autistic masking. While brilliantly analytical and detail-oriented in bioinformatics, open-plan office noise, unpredictable small talk, and constant fluorescent lighting left her depleted with chronic migraines and evening shutdowns. Misdiagnosed for years with treatment-resistant social anxiety and recurrent depression, Divya underwent comprehensive adult autism assessment. Receiving her ASD diagnosis brought immense relief, validating a lifetime of invisible struggle. With ergonomic workplace accommodations—such as noise-canceling headsets, hybrid remote flexibility, and structured written expectations—Divya thrived professionally and founded an internal neurodiversity support network.',
        hi: 'हैदराबाद की 24 वर्षीय डेटा एनालिस्ट दिव्या पूरी जिंदगी खुद को "दूसरों से अलग और अजनबी" महसूस करती रही। समाज में घुलने-मिलने के लिए वह दूसरों के चेहरे के भाव और बोलने के अंदाज की नकल करती थी (ऑटिस्टिक मास्किंग), जिससे वह मानसिक रूप से बुरी तरह थक जाती थी। ऑफिस के खुले माहौल में लगातार शोर और गपशप से उसे तेज सिरदर्द और तनाव रहता था। वर्षों तक डिप्रेशन और सोशल एंग्जायटी का गलत इलाज चलने के बाद, वयस्क ऑटिज्म विशेषज्ञ ने उसमें ऑटिज्म स्पेक्ट्रम की पहचान की। इस सही पहचान से दिव्या को भारी राहत मिली। ऑफिस में हेडफोन के इस्तेमाल और वर्क-फ्रॉम-होम की सुविधा मिलने से उसका काम बेहतरीन हो गया और उसने अपने जैसे अन्य साथियों के लिए सपोर्ट ग्रुप बनाया।',
        gu: 'હૈદરાબાદની ૨૪ વર્ષીય ડેટા એનાલિસ્ટ દિવ્યા આખી જિંદગી અન્ય લોકો સાથે ભળવા માટે ભારે સંઘર્ષ કરતી હતી. મિત્રોમાં સ્વીકાર મેળવવા તે અન્યના હાવભાવ અને વાતચીતની નકલ કરતી (ઑટિસ્ટિક માસ્કિંગ), જેના લીધે તે અતિશય થાકી જતી. ઓફિસના ઘોંઘાટ અને તેજ અજવાળામાં તેને માથાનો અસહ્ય દુખાવો થતો. વર્ષો સુધી ડિપ્રેશન અને ફોબિયાની ખોટી સારવાર પછી, વિશિષ્ટ તપાસ દ્વારા એડલ્ટ ઑટિઝમનું નિદાન થયું. સાચી ઓળખ થતાં દિવ્યાએ માનસિક શાંતિ અનુભવી. ઓફિસમાં શાંત ખૂણો અને વર્ક-ફ્રોમ-હોમની સુવિધા મળતાં દિવ્યાનું કામ ખૂબ ઉત્કૃષ્ટ બન્યું અને તે આત્મવિશ્વાસથી જીવવા લાગી.',
      },
      {
        en: 'Dev, a 5-year-old boy in Vadodara, was non-speaking and communicated primarily through leading his parents by the hand or crying when distressed. He engaged in rhythmic hand-flapping and body-rocking when excited, had intense sensory reactions to clothing tags, and required strict mealtime routines. Early interdisciplinary intervention at age three introduced speech therapy with a high-tech tablet-based Augmentative and Alternative Communication (AAC) system alongside pediatric sensory occupational therapy. Learning to tap symbols on his tablet to express "more water," "outside," or "rest" drastically decreased Dev\'s frustration meltdowns, enabling joyful shared interactions with his family.',
        hi: 'वडोदरा का 5 वर्षीय देव बोल नहीं पाता था और अपनी जरूरतें केवल माता-पिता का हाथ खींचकर या रोकर बताता था। खुश होने पर वह तेजी से हाथ हिलाता और कपड़े के टैग से बहुत परेशान होता था। 3 साल की उम्र में बाल विशेषज्ञों द्वारा शुरू की गई स्पीच थेरेपी और ऑक्यूपेशनल थेरेपी में उसे टैबलेट पर चित्रों के जरिए बात करने (AAC) का प्रशिक्षण दिया गया। टैबलेट पर बटन दबाकर अपनी जरूरतें बताना सीखते ही देव का रोना-चीखना 80% कम हो गया और वह परिवार के साथ खुशी-खुशी जुड़ने लगा।',
        gu: 'વડોદરાનો ૫ વર્ષીય દેવ બોલી શકતો નહોતો અને માત્ર હાથ પકડીને કે રડીને પોતાની વાત કહેતો. ઉત્સાહમાં તે હાથ હલાવતો અને કપડાંના સ્પર્શથી ચીડાઈ જતો. ૩ વર્ષની ઉંમરે બાળ મનોચિકિત્સક અને સ્પીચ થેરાપિસ્ટની સલાહથી તેને ટેબ્લેટ આધારિત ચિત્ર ભાષા (AAC) શીખવવામાં આવી. ટેબ્લેટ પર ચિત્રો દબાવીને પાણી કે રમકડાં માંગતાં શીખ્યા પછી દેવનો ગુસ્સો અને રડવાનું સાવ બંધ થઈ ગયું અને તે પરિવાર સાથે આનંદથી હળીમળી ગયો.',
      },
    ],
    commonSymptoms: {
      en: [
        'Differences in social-emotional reciprocity (e.g., challenges with conversational flow, sharing interests)',
        'Differences in nonverbal communicative behaviors (eye contact, interpreting body language or vocal tone)',
        'Challenges in developing, maintaining, and understanding peer relationships',
        'Stereotyped or repetitive motor movements, use of objects, or speech (echolalia, hand flapping)',
        'Insistence on sameness, inflexible adherence to routines; distress at small transitions',
        'Hyper- or hypo-reactivity to sensory input (adverse reaction to loud sounds, textures, or bright lights)',
      ],
      hi: [
        'बातचीत शुरू करने या सामाजिक मेलजोल में स्वाभाविक कठिनाई होना',
        'आंखों से संपर्क (Eye contact) बनाने में असहजता और इशारों को समझने में परेशानी',
        'दोस्त बनाने या सामाजिक संकेतों (Social cues) को समझने में कठिनाई',
        'एक ही क्रिया को बार-बार दोहराना (जैसे हाथ हिलाना या शब्दों को दोहराना)',
        'दिनचर्या में बदलाव बर्दाश्त न होना; निश्चित नियमों पर अड़े रहना',
        'तेज आवाज, रोशनी, या कपड़ों के स्पर्श के प्रति अत्यधिक संवेदनशीलता',
      ],
      gu: [
        'સામાજિક વાતચીત શરૂ કરવામાં કે મિત્રતા જાળવવામાં મુશ્કેલી',
        'આંખોમાં આંખ મિલાવીને વાત ન કરી શકવી',
        'એકની એક ક્રિયા વારંવાર કરવી (જેમ કે હાથ હલાવવા કે એક જ વાતનું રટણ કરવું)',
        'રોજિંદા ક્રમમાં સહેજ પણ ફેરફાર થાય તો અતિશય અકળાઈ જવું',
        'મોટા અવાજો, તીવ્ર લાઈટ કે અમુક સ્પર્શ પ્રત્યે અતિશય સંવેદનશીલતા',
      ],
    },
    dailyLifeImpact: {
      en: 'Impact varies widely depending on sensory processing, communicative capacities, and environmental accommodations. Sufferers face potential sensory overload in mainstream environments, social exhaustion from "masking" autistic traits, and heightened vulnerability to bullying, executive dysfunction, and burnout. However, with neurodiversity-affirming environments, many achieve remarkable academic, artistic, and technical breakthroughs.',
      hi: 'ऑटिज्म का प्रभाव हर व्यक्ति में अलग होता है। बिना उचित सहयोग के तेज रोशनी और शोर वाले माहौल में मरीज बुरी तरह थक जाता है और मानसिक तनाव (Burnout) का शिकार हो जाता है। समाज में घुलने-मिलने के लिए अपनी स्वाभाविक आदतों को छुपाने (Masking) में भारी ऊर्जा खर्च होती है। लेकिन जब सही और अनुकूल माहौल मिलता है, तो ऑटिस्टिक व्यक्ति अपनी असाधारण तार्किक और रचनात्मक क्षमताओं से जीवन में बड़ी उपलब्धियां हासिल करते हैं।',
      gu: 'ઓટિઝમની અસર દરેક વ્યક્તિમાં અલગ હોય છે. યોગ્ય વાતાવરણ ન મળે તો વધુ પડતો ઘોંઘાટ અને પ્રકાશ દર્દીને થકવી નાખે છે. સામાન્ય દેખાવા માટે પોતાના કુદરતી લક્ષણો છુપાવવામાં દર્દી ખૂબ માનસિક તાણ અનુભવે છે. પરંતુ જો પ્રેમ અને અનુકૂળ વાતાવરણ પૂરું પાડવામાં આવે તો તેઓ કમ્પ્યુટર, વિજ્ઞાન, ગણિત અને કલાના ક્ષેત્રમાં અસાધારણ સિદ્ધિઓ હાંસલ કરી શકે છે.',
    },
    causes: {
      en: 'Autism has a substantial genetic contribution involving many genes, but no single gene or cause explains every autistic person's experience. Genomic investigations identify hundreds of rare de novo and common inherited genetic variants impacting synaptogenesis, synaptic scaffolding (SHANK3, NLGN3), neural pruning, and axonal growth. Functional connectivity studies demonstrate local hyper-connectivity coupled with long-range hypoconnectivity across cortical regions. Established environmental risk factors include advanced parental age, extreme prematurity, low birth weight, and fetal exposure to valproate. Large-scale global research conclusively proves vaccines have no causal role.',
      hi: 'ऑटिज्म में कई जीनों का योगदान हो सकता है, लेकिन कोई एक जीन या कारण हर ऑटिस्टिक व्यक्ति के अनुभव को नहीं समझाता। शोधों से पता चला है कि सैकड़ों जीन मस्तिष्क की कोशिकाओं के आपसी जुड़ाव (Synapses) और सूचनाओं के आदान-प्रदान को प्रभावित करते हैं। मस्तिष्क के स्थानीय हिस्से बहुत तेजी से जुड़ते हैं, जबकि दूर के हिस्सों में तालमेल अलग होता है। माता-पिता की अधिक उम्र, समय से बहुत पहले जन्म और गर्भावस्था में कुछ दवाओं का असर इसके जोखिम को बढ़ा सकते हैं। दशकों के वैज्ञानिक अध्ययनों ने साबित किया है कि टीकों (Vaccines) का ऑटिज्म से कोई संबंध नहीं है।',
      gu: 'ઓટિઝમમાં અનેક જનીનોનો ફાળો હોઈ શકે છે, પરંતુ કોઈ એક જનીન કે કારણ દરેક ઓટિસ્ટિક વ્યક્તિના અનુભવને સમજાવતું નથી. જનીનો મગજના જ્ઞાનતંતુઓના જોડાણ અને વિકાસ પર અસર કરે છે. માતાપિતાની વધુ ઉંમર અને અધૂરા મહિને જન્મ આના મુખ્ય જોખમી પરિબળો છે. વિશ્વભરના વૈજ્ઞાનિક સંશોધનોએ સાબિત કર્યું છે કે બાળપણની રસીઓથી ઓટિઝમ થતું નથી; આ જન્મજાત ન્યુરોલોજીકલ સ્થિતિ છે.',
    },
    riskFactors: {
      en: [
        'First-degree biological sibling or parent diagnosed with ASD or related neurodevelopmental differences',
        'Advanced maternal age (≥35 years) and advanced paternal age (≥40 years) at conception',
        'Extreme preterm birth (<28 weeks gestation) or very low birth weight (<1500g)',
        'Prenatal valproate exposure or maternal metabolic conditions during gestation',
        'Presence of specific genetic conditions (e.g., Fragile X syndrome, Tuberous Sclerosis, Rett syndrome)',
      ],
      hi: [
        'परिवार में किसी भाई-बहन या माता-पिता को ऑटिज्म होना',
        'गर्भधारण के समय माता (35 वर्ष से अधिक) या पिता (40 वर्ष से अधिक) की अधिक आयु',
        'समय से बहुत पहले जन्म (28 सप्ताह से पहले) या बहुत कम वजन',
        'गर्भावस्था के दौरान वालप्रोएट जैसी दवाओं का सेवन',
        'विशिष्ट आनुवंशिक सिंड्रोम (जैसे फ्रेजाइल एक्स सिंड्रोम, ट्यूबरस स्केलेरोसिस)',
      ],
      gu: [
        'પરિવારમાં ભાઈ-બહેનને ઓટિઝમ હોવું',
        'ગર્ભાવસ્થા વખતે માતા કે પિતાની વધુ ઉંમર',
        'ખૂબ જ અધૂરા મહિને જન્મ કે અતિશય ઓછું વજન',
        'ગર્ભાવસ્થા દરમિયાન અમુક દવાઓની અસર',
        'ચોક્કસ વારસાગત રોગો (જેમ કે ફ્રેજાઇલ એક્સ સિન્ડ્રોમ)',
      ],
    },
    psychiatricAssessment: {
      en: 'Comprehensive multidisciplinary evaluation led by child psychiatrists, developmental pediatricians, clinical psychologists, and speech-language pathologists. Core diagnostic protocols utilize gold-standard standardized observational instruments (ADOS-2) and comprehensive parent interviews (ADI-R). Comprehensive assessment assesses speech, language, pragmatics, motor skills, sensory processing profiles, cognitive levels, adaptive living skills (Vineland-3), and systematically rules out hearing impairment, vision deficits, and pediatric neurological conditions.',
      hi: 'मनोचिकित्सक, बाल रोग विशेषज्ञ, स्पीच थेरेपिस्ट और क्लीनिकल साइकोलॉजिस्ट की टीम द्वारा विस्तृत मूल्यांकन किया जाता है। इसमें अंतरराष्ट्रीय स्तर पर मान्य जांच तकनीकों (ADOS-2 और ADI-R) का उपयोग होता है। बच्चे के बोलने, सामाजिक समझ, शारीरिक संतुलन, संवेदी संवेदनशीलता और दैनिक जीवन के कौशलों (Vineland-3) की जांच की जाती है। साथ ही बच्चे के सुनने और देखने की क्षमता की भी जांच की जाती है।',
      gu: 'મનોચિકિત્સક, બાળરોગ નિષ્ણાત, સ્પીચ થેરાપિસ્ટ અને સાયકોલોજિસ્ટની ટીમ દ્વારા સંપૂર્ણ તપાસ થાય છે. આંતરરાષ્ટ્રીય પદ્ધતિઓ (ADOS-2, ADI-R) નો ઉપયોગ થાય છે. બાળકના બોલવા, સમજવા, સાંભળવા, અને રોજિંદા કાર્યો કરવાની ક્ષમતાની વિગતવાર ચકાસણી કરવામાં આવે છે જેથી યોગ્ય મદદ નક્કી કરી શકાય.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, diagnosis requires: (A) Persistent deficits in social communication and social interaction across multiple contexts, manifested across all 3 criteria: (1) Deficits in social-emotional reciprocity; (2) Deficits in nonverbal communicative behaviors; (3) Deficits in developing, maintaining, and understanding relationships. (B) Restricted, repetitive patterns of behavior, interests, or activities, manifested by at least 2 of: (1) Stereotyped or repetitive motor movements, use of objects, or speech; (2) Insistence on sameness, inflexible adherence to routines, or ritualized patterns; (3) Highly restricted, fixated interests abnormal in intensity or focus; (4) Hyper- or hypo-reactivity to sensory input. (C) Symptoms must be present in the early developmental period. (D) Symptoms cause clinically significant impairment. (E) Disturbances are not better explained by intellectual disability alone. Support levels are designated: Level 1 ("Requiring support"), Level 2 ("Requiring substantial support"), Level 3 ("Requiring very substantial support"). In ICD-11, it is coded as 6A02.',
      hi: 'DSM-5-TR के अनुसार ऑटिज्म के निदान के लिए आवश्यक है: (A) सामाजिक बातचीत और मेलजोल में निरंतर कठिनाइयां, जिसमें ये तीनों लक्षण शामिल हों: (1) भावनाओं और बातचीत के आदान-प्रदान में कमी; (2) आंखों का संपर्क और शारीरिक हाव-भाव समझने में कठिनाई; (3) दोस्त बनाने और रिश्ते निभाने में असमर्थता। (B) सीमित और दोहराव वाले व्यवहार के कम से कम 2 लक्षण: (1) एक ही क्रिया या शब्दों को दोहराना; (2) दिनचर्या में बदलाव का विरोध; (3) किसी एक विषय में अत्यधिक गहरी रुचि; (4) संवेदी उत्तेजनाओं (रोशनी, आवाज, स्पर्श) के प्रति असामान्य संवेदनशीलता। (C) लक्षण बचपन से मौजूद होने चाहिए; और (D) इनसे दैनिक जीवन में रुकावट आ रही हो। गंभीरता को तीन स्तरों में बांटा जाता है: लेवल 1 (सहारे की जरूरत), लेवल 2 (पर्याप्त सहारे की जरूरत), और लेवल 3 (अत्यधिक सहारे की जरूरत)। ICD-11 में इसका कोड 6A02 है।',
      gu: 'DSM-5-TR મુજબ ઓટિઝમના નિદાન માટેના નિયમો: (A) સામાજિક વાતચીત અને વ્યવહારમાં નીચેના ત્રણેય લક્ષણો હોવા જરૂરી છે: (૧) લાગણીઓ અને સંવાદની આપ-લેમાં મુશ્કેલી; (૨) આંખોનો સંપર્ક અને શારીરિક હાવભાવમાં ભિન્નતા; (૩) મિત્રતા કે સંબંધો બનાવવામાં તકલીફ. (B) પુનરાવર્તિત વર્તનના ઓછામાં ઓછા ૨ લક્ષણો: (૧) એકની એક ક્રિયા કે શબ્દોનું રટણ; (૨) રોજિંદા ક્રમમાં ફેરફાર ન સ્વીકારવો; (૩) કોઈ એક જ વિષયમાં અતિશય ઊંડો રસ; (૪) અવાજ કે પ્રકાશ પ્રત્યે અસામાન્ય સંવેદનશીલતા. (C) આ લક્ષણો બાળપણથી જ હોવા જોઈએ; અને (D) તેનાથી જીવનમાં નોંધપાત્ર અસર થતી હોવી જોઈએ. આના ત્રણ સ્તર છે: લેવલ ૧ (સહાયની જરૂર), લેવલ ૨ (વધુ સહાયની જરૂર), અને લેવલ ૩ (સતત સંપૂર્ણ સહાયની જરૂર). ICD-11 માં આનો કોડ 6A02 છે.',
    },
    differentialConsiderations: {
      en: 'Must be differentiated from: Social (Pragmatic) Communication Disorder (has social communication impairments but lacks restricted, repetitive behaviors or sensory sensitivities); Selective Mutism (normal, fluid communication at home, with situational silence restricted to school or public); Intellectual Developmental Disorder without autism (social skills generally commensurate with mental age); Specific Language Impairment / Developmental Language Disorder; Childhood Schizophrenia (features hallucinations and delusions, rare before age 12); Reactive Attachment Disorder; and Obsessive-Compulsive Disorder (intrusive, ego-dystonic obsessions rather than enjoyable autistic special interests).',
      hi: 'इसे सोशल प्रैग्मैटिक कम्युनिकेशन डिसऑर्डर (जिसमें दोहराव वाले व्यवहार नहीं होते); सिलेक्टिव म्यूटिज्म (घर में सामान्य बोलना लेकिन स्कूल में चुप रहना); सीखने की सामान्य देरी (Mental retardation); बचपन के सिजोफ्रेनिया; और ओसीडी (OCD - जिसमें विचार परेशान करने वाले होते हैं जबकि ऑटिज्म में व्यक्ति अपनी रुचियों का आनंद लेता है) से अलग समझा जाता है।',
      gu: 'આને બોલચાલની સામાન્ય ખામી; સિલેક્ટિવ મ્યુટિઝમ (ઘરમાં બોલવું પણ બહાર ચૂપ રહેવું); સામાન્ય બૌદ્ધિક વિલંબ; અને OCD (જેમાં વિચારો દર્દીને અણગમતા હોય છે, જ્યારે ઓટિઝમમાં દર્દી પોતાની રુચિમાં મગ્ન રહે છે) થી અલગ તારવવામાં આવે છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Embracing neurodiversity, affirming autistic identity, and identifying individual sensory strengths and triggers.',
        hi: 'ऑटिज्म को कोई बीमारी या कलंक न मानकर मस्तिष्क की एक विशिष्ट बनावट के रूप में स्वीकार करना।',
        gu: 'ઓટિઝમને કોઈ અભિશાપ ન ગણતાં બાળકને પ્રેમ અને સ્વીકાર આપવો.',
      },
      lifestyleSupport: {
        en: 'Sensory-friendly adjustments: noise-canceling headphones, scheduled quiet zones, visual schedules, and clear transitional cues.',
        hi: 'शोर कम करने वाले हेडफोन, तस्वीरों द्वारा दिनचर्या समझाना और शांत वातावरण देना।',
        gu: 'અવાજ રહિત હેડફોન, ચિત્રો દ્વારા સમયપત્રક અને શાંત વાતાવરણ પૂરું પાડવું.',
      },
      psychotherapy: {
        en: 'Speech and language therapy, Occupational Therapy with sensory integration, Social Skills coaching, and functional behavioral supports.',
        hi: 'स्पीच थेरेपी (Speech Therapy), ऑक्यूपेशनल थेरेपी, और सामाजिक कौशल सिखाना।',
        gu: 'સ્પીચ થેરાપી અને ઓક્યુપેશનલ થેરાપી દ્વારા રોજિંદા કૌશલ્યો શીખવવા.',
      },
      medications: {
        en: 'Medications do not treat core autism; approved agents (such as low-dose Risperidone or Aripiprazole) may be cautiously used for severe irritability, self-injury, or aggression.',
        hi: 'ऑटिज्म को ठीक करने की कोई दवा नहीं है; अत्यधिक चिड़चिड़ापन या खुद को चोट पहुंचाने पर ही डॉक्टर सीमित दवाएं देते हैं।',
        gu: 'ઓટિઝમ મટાડવાની કોઈ દવા નથી; વધુ પડતી ઉત્તેજના કે ગુસ્સો નિયંત્રિત કરવા ડૉક્ટર જરૂર મુજબ દવા આપી શકે છે.',
      },
      familySocialInterventions: {
        en: 'Parent-mediated interventions, school accommodations (Individualized Education Programs / IEP), and peer sensitization.',
        hi: 'माता-पिता को प्रशिक्षण देना और स्कूल में विशेष शिक्षा (IEP) की व्यवस्था कराना।',
        gu: 'વાલીઓને વિશેષ તાલીમ આપવી અને શાળામાં ખાસ સહાયની વ્યવસ્થા કરવી.',
      },
    },
    treatmentGoals: {
      en: 'Maximize functional independence, establish effective communication systems (verbal or AAC), and foster self-advocacy and quality of life.',
      hi: 'आत्मनिर्भरता बढ़ाना, बातचीत का माध्यम स्थापित करना और खुशहाल जीवन जीने में मदद करना।',
      gu: 'બાળક પોતાની જરૂરિયાતો વ્યક્ત કરી શકે અને આત્મનિર્ભર બને તેવો વિકાસ કરવો.',
    },
    recoveryOutlook: {
      en: 'Autism is an intrinsic lifelong neurodevelopmental configuration rather than an acute disease requiring a "cure." Long-term developmental trajectories are exceptionally promising when individuals receive early, neurodiversity-affirming interventions, accessible communication systems (whether spoken language, sign language, or augmentative and alternative communication / AAC), and appropriate sensory accommodations. Children supported through evidence-based speech-language therapy and occupational therapy develop robust functional independence, adaptive self-care skills, and academic competencies. Adults with autism, when empowered by inclusive workplace adaptations, understanding social networks, and self-advocacy training, thrive in diverse vocations—frequently excelling in analytical, artistic, engineering, and academic pursuits while maintaining meaningful relationships and leading self-determined lives.',
      hi: 'ऑटिज्म कोई ऐसी बीमारी नहीं है जिसे "जड़ से मिटाने" या ठीक करने की जरूरत हो; यह मस्तिष्क की एक आजीवन रहने वाली प्राकृतिक बनावट है। जब बच्चे को कम उम्र में ही पहचान कर सही सहायता, स्पीच थेरेपी, ऑक्यूपेशनल थेरेपी और संवाद के साधन दिए जाते हैं, तो उसका भविष्य अत्यंत उज्ज्वल होता है। समय पर मिले सहयोग से बच्चे आत्मनिर्भरता, पढ़ाई और सामाजिक कौशल में बहुत तेजी से प्रगति करते हैं। बड़े होने पर, जब उन्हें उनके काम और समाज में थोड़ा अनुकूल माहौल और समझ मिलती है, तो ऑटिस्टिक व्यक्ति तकनीक, विज्ञान, कला, संगीत और अन्य क्षेत्रों में अद्भुत योगदान देते हैं और एक स्वतंत्र और गरिमापूर्ण जीवन जीते हैं।',
      gu: 'ઓટિઝમ એ કોઈ એવી બીમારી નથી જેને "મૂળમાંથી મટાડવાની" જરૂર હોય; આ મગજની એક આજીવન કુદરતી રચના છે. જ્યારે બાળકને નાની ઉંમરથી જ સાચો સહકાર, સ્પીચ થેરાપી, ઓક્યુપેશનલ થેરાપી અને વાતચીત કરવાના સાધનો મળે છે, ત્યારે તેનું ભવિષ્ય અત્યંત ઉજ્જવળ બને છે. સમયસર મળેલી મદદથી બાળક પોતાની સંભાળ રાખતાં, ભણતાં અને નવા કૌશલ્યો શીખતાં ખૂબ ઝડપથી આગળ વધે છે. મોટા થયા પછી, જો તેમને અનુકૂળ વાતાવરણ અને માનસિક સહકાર મળે, તો તેઓ વિજ્ઞાન, ગણિત, કમ્પ્યુટર અને કલા જેવા ક્ષેત્રોમાં અદભુત પ્રગતિ કરી એક સુખી અને આત્મનિર્ભર જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Preventing sensory and psychological burnout through pacing, routine consistency, and respectful accommodations.',
      hi: 'संवेदी तनाव (Sensory overload) से बचाना और निश्चित दिनचर्या बनाए रखना।',
      gu: 'અતિશય ઘોંઘાટથી બચાવવું અને શાંતિપૂર્ણ વાતાવરણ જાળવવું.',
    },
    urgentWarningSigns: {
      en: 'Severe self-injurious behavior (head banging, eye gouging), acute catatonia, or sudden loss of established speech/milestones.',
      hi: 'खुद को गंभीर चोट पहुंचाना (सिर पटकना), अचानक बोलना बंद कर देना या कैटाटोनिया।',
      gu: 'પોતાને ગંભીર ઈજા પહોંચાડવી (માથું પછાડવું) કે અચાનક બોલવાનું બંધ કરી દેવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Childhood vaccines (like MMR) cause autism, and bad parenting is to blame.',
          hi: 'टीकों (Vaccines) से ऑटिज्म होता है, या माता-पिता का ठंडा व्यवहार इसके लिए जिम्मेदार है।',
          gu: 'રસીકરણથી ઓટિઝમ થાય છે અથવા માતા-પિતાના વ્યવહારથી આવું બને છે.',
        },
        fact: {
          en: 'Decades of massive global research conclusively prove vaccines do NOT cause autism. Autism is a prenatal neurodevelopmental wiring difference.',
          hi: 'वैज्ञानिक शोधों से यह पूरी तरह साबित हो चुका है कि टीकों का ऑटिज्म से कोई संबंध नहीं है। यह जन्मजात होता है।',
          gu: 'વિજ્ઞાને સાબિત કર્યું છે કે રસીથી ઓટિઝમ થતું નથી. આ જન્મજાત ન્યુરોલોજીકલ સ્થિતિ છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can people with autism feel emotions and desire friendships?',
          hi: 'क्या ऑटिज्म से पीड़ित लोग भावनाएं महसूस करते हैं और दोस्त बनाना चाहते हैं?',
          gu: 'શું ઓટિઝમ ધરાવતી વ્યક્તિઓ લાગણીઓ અનુભવી શકે છે?',
        },
        answer: {
          en: 'Yes, deeply. Autistic individuals feel rich emotions and frequently desire deep social connection, but may express feelings and read neurotypical social signals differently.',
          hi: 'बिल्कुल। वे बहुत गहरी भावनाएं महसूस करते हैं और दोस्ती चाहते हैं, बस उनके व्यक्त करने का तरीका अलग हो सकता है।',
          gu: 'ચોક્કસ. તેઓ ખૂબ ઊંડી લાગણીઓ અનુભવે છે, માત્ર તેને વ્યક્ત કરવાની તેમની રીત જુદી હોય છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'A randomized controlled trial published in The Lancet demonstrated that early parent-mediated social communication intervention (PACT) produces sustained, long-term reductions in autism symptom severity lasting at least 6 years.',
          hi: 'द लांसेट में प्रकाशित अध्ययन से सिद्ध है कि माता-पिता को संवाद की विशेष थेरेपी (PACT) सिखाने से बच्चों के विकास और बातचीत में 6 वर्षों तक लगातार सुधार बना रहता है।',
          gu: 'ધ લેન્સેટમાં પ્રકાશિત સંશોધન દર્શાવે છે કે માતાપિતા દ્વારા આપવામાં આવતી વિશિષ્ટ થેરાપી (PACT) થી બાળકોના વાતચીતના કૌશલ્યોમાં ૬ વર્ષ સુધી સતત સુધારો જળવાઈ રહે છે.',
        },
        citationRef: 'The Lancet PACT Trial',
      },
      {
        fact: {
          en: 'Large genetic studies support a substantial inherited contribution to autism, involving many genes rather than a single genetic cause.',
          hi: 'बड़े आनुवंशिक अध्ययनों से पता चलता है कि ऑटिज्म में कई जीनों का योगदान होता है; कोई एक जीन या बाहरी कारण इसका अकेला कारण नहीं है।',
          gu: 'મોટા આનુવંશિક અભ્યાસો દર્શાવે છે કે ઓટિઝમમાં અનેક જનીનોનો ફાળો હોય છે; કોઈ એક જનીન કે બાહ્ય પરિબળ તેનું એકમાત્ર કારણ નથી.',
        },
        citationRef: 'Nature Genetics Global ASD Study',
      },
      {
        fact: {
          en: 'ADOS-2 and ADI-R are structured tools that may support a comprehensive autism assessment. They do not diagnose autism on their own, and their accuracy varies by population, setting, and clinical context.',
          hi: 'ADOS-2 और ADI-R जैसी संरचित जाँचें ऑटिज्म के व्यापक मूल्यांकन में मदद कर सकती हैं। ये अपने आप निदान नहीं करतीं; इनकी सटीकता व्यक्ति और मूल्यांकन के संदर्भ के अनुसार बदल सकती है।',
          gu: 'ADOS-2 અને ADI-R જેવી રચિત તપાસો ઓટિઝમના વ્યાપક મૂલ્યાંકનમાં મદદ કરી શકે છે. તે પોતે નિદાન કરતી નથી; તેમની ચોકસાઈ વ્યક્તિ અને મૂલ્યાંકનના સંદર્ભ પ્રમાણે બદલાઈ શકે છે.',
        },
        citationRef: 'Nature Reviews Disease Primers',
      },
      {
        fact: {
          en: 'Rigorous nationwide cohort studies of over 650,000 children conclusively demonstrated no increased risk of autism following MMR vaccination.',
          hi: 'साढ़े छह लाख से अधिक बच्चों पर किए गए विस्तृत अध्ययनों से पूरी तरह सिद्ध हो चुका है कि एमएमआर (MMR) टीके से ऑटिज्म का कोई संबंध नहीं है।',
          gu: '૬.૫ લાખથી વધુ બાળકોના દેશવ્યાપી સંશોધનોએ સંપૂર્ણ સાબિત કર્યું છે કે MMR રસીથી ઓટિઝમ થવાનું કોઈ જોખમ નથી.',
        },
        citationRef: 'Annals of Internal Medicine Cohort Study',
      },
    ],
    references: [
      { citation: 'Lord C, Brugha TS, Charman T, et al. Autism spectrum disorder. Nat Rev Dis Primers. 2020;6(1):5.', source: 'Nature Reviews Disease Primers', year: '2020' },
      { citation: 'Pickles A, Le Couteur A, Leadbitter K, et al. Parent-mediated social communication therapy for young children with autism (PACT): long-term follow-up of a randomised controlled trial. Lancet. 2016;388(10059):2501-2509.', source: 'The Lancet', year: '2016' },
      { citation: 'Grove J, Ripke S, Als TD, et al. Identification of common genetic risk variants for autism spectrum disorder. Nat Genet. 2019;51(3):431-444.', source: 'Nature Genetics', year: '2019' },
      { citation: 'Hviid A, Hansen JV, Frisch M, Melbye M. Measles, Mumps, Rubella Vaccination and Autism: A Nationwide Cohort Study. Ann Intern Med. 2019;170(8):513-520.', source: 'Annals of Internal Medicine', year: '2019' },
      { citation: 'National Institute for Health and Care Excellence (NICE). Autism spectrum disorder in under 19s: recognition, referral and diagnosis: Clinical guideline [CG128]. London: NICE, 2017.', source: 'NICE Guidelines', year: '2017' },
    ],
    lastReviewed: '2026-09',
    reviewStatus: { lastReviewed: '2026-08', reviewer: '[VERIFY: Gujarat Institute of Mental Health]' },
    relatedIds: ['adhd', 'anxiety', 'cbt'],
    relatedContent: {
      conditionSlugs: ['attention-deficit-hyperactivity-disorder-adhd', 'social-anxiety-disorder', 'obsessive-compulsive-disorder'],
      medicationIds: ['stimulant-adhd-medications', 'antipsychotics'],
      treatmentIds: ['family-therapy', 'supportive'],
    },
  },
];


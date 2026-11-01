import { LocalizedString } from '../types';

export interface ScreenerQuestion {
  id: number;
  text: LocalizedString;
  isCrisisQuestion?: boolean;
}

export interface ScreenerTool {
  id: string;
  name: LocalizedString;
  purpose: LocalizedString;
  disclaimer: LocalizedString;
  frequencyOptions: {
    value: number;
    label: LocalizedString;
  }[];
  questions: ScreenerQuestion[];
  interpretations: {
    minScore: number;
    maxScore: number;
    level: LocalizedString;
    description: LocalizedString;
    recommendation: LocalizedString;
  }[];
}

export const screenersData: ScreenerTool[] = [
  {
    id: 'phq9',
    name: {
      en: 'Depression Symptom Reflection (PHQ-9 Educational Tool)',
      hi: 'डिप्रेशन लक्षण आत्म-अवलोकन (PHQ-9 शैक्षणिक टूल)',
      gu: 'ડિપ્રેશન લક્ષણોનું આત્મ-મૂલ્યાંકન (PHQ-9 શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Reflect on how often you have been bothered by common depressive symptoms over the past 2 weeks.',
      hi: 'पिछले 2 सप्ताह में आपने इनमें से किन लक्षणों को महसूस किया है, इसका निष्पक्ष अवलोकन करें।',
      gu: 'છેલ્લા ૨ અઠવાડિયામાં તમે આમાંથી કયા લક્ષણો અનુભવ્યા છે તેની નોંધ લો.',
    },
    disclaimer: {
      en: 'This tool is solely for educational self-reflection and mental health literacy. It is NOT a medical test and DOES NOT provide a psychiatric diagnosis. Many medical and emotional conditions cause these symptoms. Only a registered healthcare professional can diagnose psychiatric illnesses.',
      hi: 'यह टूल केवल शैक्षणिक समझ और आत्म-अवलोकन के लिए है। यह कोई मेडिकल जांच नहीं है और न ही कोई चिकित्सीय निदान प्रदान करता है। केवल एक पंजीकृत मनोचिकित्सक ही सही जांच कर सकते हैं।',
      gu: 'આ ટૂલ માત્ર શૈક્ષણિક સમજણ માટે છે. આ કોઈ તબીબી નિદાન નથી. સચોટ તપાસ માટે નિષ્ણાત ડૉક્ટરની મુલાકાત જરૂરી છે.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'Not at all (0 days)', hi: 'बिल्कुल नहीं (0 दिन)', gu: 'બિલકુલ નહીં (૦ દિવસ)' } },
      { value: 1, label: { en: 'Several days', hi: 'कुछ दिन', gu: 'થોડા દિવસો' } },
      { value: 2, label: { en: 'More than half the days', hi: 'आधे से अधिक दिन', gu: 'અડધાથી વધુ દિવસો' } },
      { value: 3, label: { en: 'Nearly every day', hi: 'लगभग हर दिन', gu: 'લગભગ રોજ' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Little interest or pleasure in doing things you normally enjoy',
          hi: 'काम करने या सामान्य गतिविधियों में कम रुचि या कोई खुशी न होना',
          gu: 'રોજિંદા કામો કે શોખમાં ઓછો રસ કે આનંદ ન મળવો',
        },
      },
      {
        id: 2,
        text: {
          en: 'Feeling down, depressed, hopeless, or empty',
          hi: 'उदास, निराश, लाचार या मन में भारीपन महसूस होना',
          gu: 'ઉદાસી, નિરાશા કે મન ખાલી-ખાલી લાગવું',
        },
      },
      {
        id: 3,
        text: {
          en: 'Trouble falling asleep, staying asleep, or sleeping too much',
          hi: 'नींद आने में कठिनाई, बार-बार आंख खुलना, या बहुत ज्यादा सोना',
          gu: 'ઊંઘ આવવામાં તકલીફ, વારંવાર ઊંઘ ઊડી જવી કે વધુ પડતું સૂઈ રહેવું',
        },
      },
      {
        id: 4,
        text: {
          en: 'Feeling tired, exhausted, or having very little energy',
          hi: 'थकान, ऊर्जा की भारी कमी या कमजोरी महसूस होना',
          gu: 'થાક, અશક્તિ કે બિલકુલ ઊર્જા ન હોવી',
        },
      },
      {
        id: 5,
        text: {
          en: 'Poor appetite, skipping meals, or noticeable overeating',
          hi: 'भूख में कमी, खाना न पचना, या जरूरत से ज्यादा खाना',
          gu: 'ભૂખ ન લાગવી કે જરૂર કરતાં વધુ ખાવું',
        },
      },
      {
        id: 6,
        text: {
          en: 'Feeling bad about yourself — or that you are a failure or have let yourself or family down',
          hi: 'खुद को बुरा या असफल समझना, या ऐसा लगना कि आपने अपनों को निराश किया है',
          gu: 'પોતાને નિષ્ફળ સમજવા કે પરિવારને નિરાશ કર્યાની અપરાધભાવના',
        },
      },
      {
        id: 7,
        text: {
          en: 'Trouble concentrating on things, such as reading news, office work, or watching television',
          hi: 'चीजों पर ध्यान केंद्रित करने में कठिनाई (जैसे पढ़ना, ऑफिस का काम या टीवी देखना)',
          gu: 'વાંચવામાં, કામમાં કે ટીવી જોવામાં ધ્યાન ન લાગવું',
        },
      },
      {
        id: 8,
        text: {
          en: 'Moving or speaking so slowly that other people have noticed; or being so fidgety or restless that you move a lot',
          hi: 'इतनी धीमी गति से चलना या बोलना कि लोग टोकें; या अत्यधिक बेचैन होकर यहां-वहां टहलना',
          gu: 'બહુ ધીમા પડી જવું અથવા વધુ પડતી બેચેનીમાં આમતેમ આંટા મારવા',
        },
      },
      {
        id: 9,
        isCrisisQuestion: true,
        text: {
          en: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way',
          hi: 'ऐसे विचार कि मर जाना बेहतर होगा, या खुद को किसी तरह चोट पहुंचाने के विचार',
          gu: 'મરી જવું સારું કે પોતાને કોઈ નુકસાન પહોંચાડવાના વિચારો',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 4,
        level: { en: 'Minimal / Low Symptoms', hi: 'न्यूनतम / सामान्य स्तर', gu: 'સામાન્ય / ઓછા લક્ષણો' },
        description: {
          en: 'Your responses indicate minimal symptoms in the past two weeks. It is normal to experience temporary fluctuations in mood.',
          hi: 'आपके उत्तर पिछले दो सप्ताह में न्यूनतम लक्षणों का संकेत देते हैं। कभी-कभार मूड में हल्का बदलाव सामान्य है।',
          gu: 'તમારા જવાબો સામાન્ય સ્થિતિ દર્શાવે છે. ક્યારેક થોડો મૂડ બદલાવો સામાન્ય બાબત છે.',
        },
        recommendation: {
          en: 'Continue healthy daily habits: consistent sleep routines, balanced nutrition, daily physical movement, and social connections.',
          hi: 'स्वस्थ दिनचर्या जारी रखें: समय पर सोएं, पौष्टिक भोजन लें और नियमित व्यायाम करें।',
          gu: 'સ્વસ્થ જીવનશૈલી જાળવી રાખો: નિયમિત ઊંઘ, પૌષ્ટિક આહાર અને હળવો વ્યાયામ.',
        },
      },
      {
        minScore: 5,
        maxScore: 9,
        level: { en: 'Mild Symptom Presence', hi: 'हल्के स्तर के लक्षण', gu: 'હળવા લક્ષણો' },
        description: {
          en: 'Your responses reflect some mild symptoms of low mood or fatigue that may be related to recent stress or lifestyle pressures.',
          hi: 'आपके उत्तर हल्के लक्षणों का संकेत देते हैं जो हालिया तनाव या थकान से जुड़े हो सकते हैं।',
          gu: 'આ જવાબો હળવા તણાવ કે થાકના સંકેત આપે છે જે તાજેતરના દબાણથી હોઈ શકે છે.',
        },
        recommendation: {
          en: 'Pay attention to self-care and stress reduction. If these feelings persist for more than 2 weeks or worsen, consider scheduling a clinical evaluation.',
          hi: 'अपने आराम और तनाव पर ध्यान दें। यदि यह स्थिति 2 सप्ताह से अधिक रहे तो डॉक्टर से परामर्श लें।',
          gu: 'આરામ અને તણાવ નિવારણ પર ધ્યાન આપો. જો આ તકલીફ વધે તો ડૉક્ટરની સલાહ લો.',
        },
      },
      {
        minScore: 10,
        maxScore: 14,
        level: { en: 'Moderate Symptom Presence', hi: 'मध्यम स्तर के लक्षण', gu: 'મધ્યમ સ્તરના લક્ષણો' },
        description: {
          en: 'Your responses suggest several noticeable symptoms commonly seen in depressive episodes. This is not a diagnosis, but suggests your daily quality of life may be impacted.',
          hi: 'आपके उत्तर उन लक्षणों का संकेत देते हैं जो आमतौर पर डिप्रेशन में देखे जाते हैं। यह कोई अंतिम निदान नहीं है, लेकिन आपकी दिनचर्या प्रभावित हो सकती है।',
          gu: 'આ જવાબો ડિપ્રેશન સાથે સંકળાયેલા સામાન્ય લક્ષણો દર્શાવે છે. આ કોઈ નિદાન નથી, પણ તમારી કાર્યક્ષમતા પર અસર થઈ શકે છે.',
        },
        recommendation: {
          en: 'We strongly recommend having a confidential discussion with a qualified psychiatrist or medical professional for an objective clinical assessment.',
          hi: 'हम सलाह देते हैं कि किसी योग्य मनोचिकित्सक से मिलकर अपनी स्थिति पर निष्पक्ष चर्चा करें।',
          gu: 'અમે ભલામણ કરીએ છીએ કે તમે કોઈ અનુભવી મનોચિકિત્સક સાથે ચર્ચા કરીને યોગ્ય સલાહ લો.',
        },
      },
      {
        minScore: 15,
        maxScore: 27,
        level: { en: 'Moderately Severe to Severe Symptoms', hi: 'गंभीर स्तर के लक्षण', gu: 'ગંભીર સ્તરના લક્ષણો' },
        description: {
          en: 'Your responses reflect substantial distress and multiple symptoms that strongly impact functioning. Effective, scientific treatments are widely available.',
          hi: 'आपके उत्तर काफी तनाव और कई गंभीर लक्षणों का संकेत देते हैं जो दैनिक जीवन को प्रभावित कर रहे हैं। इनके लिए प्रभावी और सुरक्षित चिकित्सा उपलब्ध है।',
          gu: 'તમારા જવાબો ગંભીર તણાવ દર્શાવે છે જે જીવનને અસ્તવ્યસ્ત કરી શકે છે. આના માટે અકસીર તબીબી સારવાર ઉપલબ્ધ છે.',
        },
        recommendation: {
          en: 'Please arrange a comprehensive psychiatric evaluation promptly. If you are struggling with safety or despair, contact Tele-MANAS at 14416 (24x7, free).',
          hi: 'कृपया बिना देरी किए मनोचिकित्सक से संपर्क करें। यदि मन में कोई आत्मघाती विचार आ रहे हैं, तो तुरंत 14416 पर कॉल करें।',
          gu: 'કૃપા કરીને તરત જ મનોચિકિત્સકનો સંપર્ક કરો. જો મનમાં જીવન ટૂંકાવવાના વિચારો આવતા હોય તો ૧૪૪૧૬ પર કૉલ કરો.',
        },
      },
    ],
  },
  {
    id: 'gad7',
    name: {
      en: 'Anxiety Symptom Reflection (GAD-7 Educational Tool)',
      hi: 'चिंता व घबराहट लक्षण अवलोकन (GAD-7 शैक्षणिक टूल)',
      gu: 'ચિંતા અને ગભરાટનું આત્મ-મૂલ્યાંકન (GAD-7 શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Reflect on anxiety, worry, and nervous physical symptoms over the past 2 weeks.',
      hi: 'पिछले 2 सप्ताह में चिंता, घबराहट और शारीरिक तनाव के लक्षणों का अवलोकन करें।',
      gu: 'છેલ્લા ૨ અઠવાડિયામાં ચિંતા, બેચેની અને ગભરાટના લક્ષણોનું મૂલ્યાંકન કરો.',
    },
    disclaimer: {
      en: 'This tool is purely educational and non-diagnostic. Anxiety symptoms frequently overlap with medical conditions (like thyroid disorders or cardiac issues). Consult a medical doctor for proper diagnosis.',
      hi: 'यह टूल केवल शैक्षणिक जानकारी के लिए है। चिंता के लक्षण कई शारीरिक बीमारियों (जैसे थायरॉयड) से भी हो सकते हैं। सही जांच के लिए डॉक्टर से मिलें।',
      gu: 'આ ટૂલ માત્ર શૈક્ષણિક માહિતી માટે છે. ચિંતાના લક્ષણો અન્ય શારીરિક બીમારીઓથી પણ હોઈ શકે છે. સાચા નિદાન માટે ડૉક્ટરને મળો.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'Not at all', hi: 'बिल्कुल नहीं', gu: 'બિલકુલ નહીં' } },
      { value: 1, label: { en: 'Several days', hi: 'कुछ दिन', gu: 'થોડા દિવસો' } },
      { value: 2, label: { en: 'More than half the days', hi: 'आधे से अधिक दिन', gu: 'અડધાથી વધુ દિવસો' } },
      { value: 3, label: { en: 'Nearly every day', hi: 'लगभग हर दिन', gu: 'લગભગ રોજ' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Feeling nervous, anxious, or on edge',
          hi: 'घबराहट, अत्यधिक चिंता या मन में बेचैनी महसूस होना',
          gu: 'ગભરાટ, અજંપો કે ચિંતાથી મન અસ્થિર રહેવું',
        },
      },
      {
        id: 2,
        text: {
          en: 'Not being able to stop or control worrying',
          hi: 'चिंताओं को रोकने या नियंत्रित करने में असमर्थ होना',
          gu: 'ચિંતાઓને રોકવામાં કે કાબૂમાં રાખવામાં અસમર્થતા',
        },
      },
      {
        id: 3,
        text: {
          en: 'Worrying too much about different things',
          hi: 'बहुत सी अलग-अलग बातों को लेकर बहुत ज्यादा सोचना',
          gu: 'વિવિધ બાબતો અંગે વધુ પડતી ચિંતા કરવી',
        },
      },
      {
        id: 4,
        text: {
          en: 'Trouble relaxing or sitting still',
          hi: 'शांत बैठने या आराम महसूस करने में परेशानी होना',
          gu: 'શાંતિથી બેસવામાં કે આરામ કરવામાં મુશ્કેલી',
        },
      },
      {
        id: 5,
        text: {
          en: 'Being so restless that it is hard to sit still',
          hi: 'इतनी बेचैनी होना कि एक जगह टिक कर बैठना मुश्किल हो',
          gu: 'એટલી બધી બેચેની કે એક જગ્યાએ બેસી ન શકાય',
        },
      },
      {
        id: 6,
        text: {
          en: 'Becoming easily annoyed or irritable',
          hi: 'छोटी-छोटी बातों पर बहुत जल्दी चिढ़ या गुस्सा आ जाना',
          gu: 'નાની બાબતોમાં તરત જ ચીડાઈ જવું કે ગુસ્સો આવવો',
        },
      },
      {
        id: 7,
        text: {
          en: 'Feeling afraid, as if something awful might happen',
          hi: 'ऐसा डर लगना जैसे कुछ बहुत बुरा या अनहोनी होने वाली है',
          gu: 'એવો ભય રહેવો કે કંઈક બહુ ખરાબ થવાનું છે',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 4,
        level: { en: 'Minimal Anxiety', hi: 'न्यूनतम चिंता', gu: 'સામાન્ય ચિંતા' },
        description: {
          en: 'Your responses suggest minimal or baseline anxiety symptoms.',
          hi: 'आपके उत्तर बहुत कम या सामान्य चिंता का संकेत देते हैं।',
          gu: 'તમારા જવાબો સામાન્ય સ્તરની ચિંતા દર્શાવે છે.',
        },
        recommendation: {
          en: 'Practice basic stress reduction: regular sleep, mindful breathing, and balanced workload.',
          hi: 'नियमित नींद और गहरी सांस लेने के अभ्यास से संतुलन बनाए रखें।',
          gu: 'ઊંડા શ્વાસ લેવાની કસરતો અને સંતુલિત દિનચર્યા રાખો.',
        },
      },
      {
        minScore: 5,
        maxScore: 9,
        level: { en: 'Mild Anxiety', hi: 'हल्की चिंता', gu: 'હળવી ચિંતા' },
        description: {
          en: 'Mild symptoms of anxiety noted, likely manageable with lifestyle pacing and relaxation.',
          hi: 'हल्की चिंता के लक्षण हैं, जो जीवनशैली और तनाव कम करने से ठीक हो सकते हैं।',
          gu: 'હળવા લક્ષણો છે, જે આરામ અને કસરતથી નિયંત્રિત થઈ શકે છે.',
        },
        recommendation: {
          en: 'Reduce caffeine intake and prioritize restorative sleep. If worry escalates, consider professional support.',
          hi: 'चाय-कॉफी कम करें और अच्छी नींद लें। चिंता बढ़े तो डॉक्टर की सलाह लें।',
          gu: 'ચા-કોફીનું પ્રમાણ ઘટાડો અને પૂરતી ઊંઘ લો.',
        },
      },
      {
        minScore: 10,
        maxScore: 14,
        level: { en: 'Moderate Anxiety', hi: 'मध्यम चिंता', gu: 'મધ્યમ ચિંતા' },
        description: {
          en: 'Noticeable symptoms of anxiety that may be disrupting your concentration, sleep, or peace of mind.',
          hi: 'चिंता के स्पष्ट लक्षण हैं जो नींद, एकाग्रता और काम को प्रभावित कर सकते हैं।',
          gu: 'ચિંતાના સ્પષ્ટ લક્ષણો જે ઊંઘ અને એકાગ્રતા પર અસર કરી રહ્યા છે.',
        },
        recommendation: {
          en: 'A clinical consultation is recommended to explore evidence-based therapies like CBT or medical guidance.',
          hi: 'मनोचिकित्सक से परामर्श लेकर CBT जैसी थेरेपी या मार्गदर्शन लेना उचित रहेगा।',
          gu: 'ડૉક્ટરની સલાહ લઈને યોગ્ય કાઉન્સેલિંગ મેળવવું હિતાવહ છે.',
        },
      },
      {
        minScore: 15,
        maxScore: 21,
        level: { en: 'Severe Anxiety', hi: 'गंभीर चिंता / घबराहट', gu: 'તીવ્ર ચિંતા / ગભરાટ' },
        description: {
          en: 'High level of anxiety symptoms. Remember that anxiety is highly treatable with modern medicine and structured therapy.',
          hi: 'तीव्र चिंता और घबराहट के लक्षण। याद रखें कि आधुनिक चिकित्सा और थेरेपी से चिंता पूरी तरह ठीक हो सकती है।',
          gu: 'તીવ્ર ચિંતા અને ગભરાટના લક્ષણો. યાદ રાખો કે આધુનિક સારવારથી આ સમસ્યા સંપૂર્ણ કાબૂમાં આવી શકે છે.',
        },
        recommendation: {
          en: 'Please schedule a medical evaluation with a psychiatrist for a full evaluation and personalized care plan.',
          hi: 'कृपया बिना झिझक मनोचिकित्सक से परामर्श लें ताकि वे उचित समाधान दे सकें।',
          gu: 'કૃપા કરીને યોગ્ય માર્ગદર્શન અને સારવાર માટે મનોચિકિત્સકનો સંપર્ક કરો.',
        },
      },
    ],
  },
  {
    id: 'mdq',
    name: {
      en: 'Mania / Hypomania Reflection (Mood Disorder Questionnaire - MDQ Concept)',
      hi: 'मेनिया व हाइपोमेनिया आत्म-अवलोकन (MDQ शैक्षणिक चेकलिस्ट)',
      gu: 'મેનિયા અને હાઈપોમેનિયા આત્મ-મૂલ્યાંકન (MDQ શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Educational reflection on whether you have experienced periods when you felt unusually high, irritable, hyper-energetic, or had racing thoughts distinctly different from your usual self.',
      hi: 'यह अवलोकन करें कि क्या आपने कभी ऐसे समय का अनुभव किया है जब आप अपने सामान्य स्वभाव से बिल्कुल अलग—अत्यधिक ऊर्जावान, तेज, कम सोने वाले या बिना सोचे-समझे बड़े फैसले लेने वाले बन गए थे।',
      gu: 'તપાસો કે શું ક્યારેય એવો સમય આવ્યો છે જ્યારે તમે તમારા સામાન્ય સ્વભાવથી તદ્દન અલગ—અતિશય ઉત્સાહિત, ઓછા ઊંઘનારા કે અતિ સક્રિય બની ગયા હતા.',
    },
    disclaimer: {
      en: 'This checklist is strictly for educational self-reflection and psychiatric literacy. A high score does NOT mean you have Bipolar Disorder. Only a registered psychiatrist can differentiate between unipolar depression, bipolar spectrum disorders, ADHD, and emotional changes.',
      hi: 'यह केवल शैक्षणिक समझ के लिए है, कोई चिकित्सीय निदान नहीं। अधिक अंक होने का मतलब यह नहीं कि आपको बायपोलर डिसऑर्डर है। केवल एक पंजीकृत मनोचिकित्सक ही सही जांच कर सकते हैं।',
      gu: 'આ માત્ર શૈક્ષણિક સમજણ માટે છે. આ કોઈ નિદાન નથી. સચોટ તબીબી તપાસ માટે મનોચિકિત્સકની મુલાકાત લેવી અનિવાર્ય છે.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'No', hi: 'नहीं', gu: 'ના' } },
      { value: 1, label: { en: 'Yes', hi: 'हाँ', gu: 'હા' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Felt so good, hyper, or so hyperactive that other people thought you were not your normal self',
          hi: 'इतना ज्यादा खुश, हाइपर या ऊर्जावान महसूस करना कि दूसरे लोग टोकें कि आप पहले जैसे नहीं लग रहे',
          gu: 'એટલા બધા ઉત્સાહી કે હાઈપર થઈ જવું કે બીજા લોકોને લાગે કે તમે બદલાઈ ગયા છો',
        },
      },
      {
        id: 2,
        text: {
          en: 'Felt so irritable that you shouted at people or started fights or arguments over minor matters',
          hi: 'इतना अधिक चिड़चिड़ा महसूस करना कि छोटी-छोटी बातों पर लोगों पर चिल्लाना या झगड़ा शुरू कर देना',
          gu: 'એટલો બધો ગુસ્સો આવવો કે નાની વાતમાં લોકો સાથે ઝઘડા કે બોલાચાલી શરૂ કરી દેવી',
        },
      },
      {
        id: 3,
        text: {
          en: 'Felt much more self-confident than usual or believed you had extraordinary powers or wealth',
          hi: 'सामान्य से कहीं अधिक आत्मविश्वास महसूस करना या लगना कि आपके पास कोई अनोखी शक्ति या योजना है',
          gu: 'સામાન્ય કરતાં ખૂબ વધુ આત્મવિશ્વાસ અનુભવવો અથવા કોઈ અસાધારણ શક્તિ હોવાનો વહેમ થવો',
        },
      },
      {
        id: 4,
        text: {
          en: 'Got much less sleep than usual (e.g. 2-3 hours) and found you didn’t even miss it or feel tired',
          hi: 'सामान्य से बहुत कम नींद (जैसे 2-3 घंटे) लेना और फिर भी दिन भर बिना थके अत्यधिक ऊर्जा महसूस करना',
          gu: 'ખૂબ ઓછી ઊંઘ (માત્ર ૨-૩ કલાક) લેવા છતાં આખો દિવસ થાક ન લાગવો અને અતિશય સ્ફૂર્તિ રહેવી',
        },
      },
      {
        id: 5,
        text: {
          en: 'Were much more talkative or spoke much faster than usual, barely letting others speak',
          hi: 'सामान्य से बहुत ज्यादा या बहुत तेजी से बातें करना कि दूसरे अपनी बात न कह पाएं',
          gu: 'ખૂબ ઝડપથી અને સતત વાતો કરવી કે બીજા કોઈને બોલવાનો મોકો જ ન મળવો',
        },
      },
      {
        id: 6,
        text: {
          en: 'Thoughts raced through your head so fast that you couldn’t keep track of them',
          hi: 'दिमाग में विचार इतनी तेजी से दौड़ना कि आप खुद उन्हें संभाल न पा रहे हों (Racing thoughts)',
          gu: 'મગજમાં વિચારો એટલી ઝડપે દોડવા કે તેના પર કાબૂ ન રહેવો',
        },
      },
      {
        id: 7,
        text: {
          en: 'Were so easily distracted by things around you that you had trouble concentrating or staying on track',
          hi: 'आसपास की चीजों से इतनी जल्दी ध्यान भटकना कि किसी एक काम पर टिक न पाना',
          gu: 'આસપાસની બાબતોથી ધ્યાન એટલું ભટકવું કે એકપણ કામ પૂરું ન થઈ શકવું',
        },
      },
      {
        id: 8,
        text: {
          en: 'Had much more energy and were active with multiple new grand projects simultaneously',
          hi: 'अत्यधिक ऊर्जा महसूस करना और एक साथ कई नए-नए बड़े प्रोजेक्ट या काम शुरू कर देना',
          gu: 'અતિશય ઊર્જા અનુભવવી અને એકસાથે અનેક મોટા મોટા કામો હાથમાં લેવા',
        },
      },
      {
        id: 9,
        text: {
          en: 'Did things that were unusual for you and that other people might have thought were risky, reckless, or unwise (e.g., reckless spending, rash driving, impulsive business schemes)',
          hi: 'ऐसे जोखिम भरे काम करना जो आप आमतौर पर नहीं करते (जैसे फिजूलखर्ची, खतरनाक ड्राइविंग, बिना सोचे समझे पैसे लगाना)',
          gu: 'અતિશય જોખમી નિર્ણયો લેવા (જેમ કે અવિચારી ખર્ચ, બેફામ ડ્રાઇવિંગ કે ઉતાવળા નિર્ણયો)',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 3,
        level: { en: 'Low Likelihood of Hypomanic Episodes', hi: 'हाइपोमेनिया के निम्न संकेत', gu: 'હાઈપોમેનિયાની ઓછી શક્યતા' },
        description: {
          en: 'You reported few or no episodes of sustained elevated energy or grandiosity.',
          hi: 'आपने असामान्य ऊर्जा या उत्तेजना के बहुत कम लक्षण बताए हैं।',
          gu: 'અસામાન્ય ઉત્સાહ કે અતિસક્રિયતાના ખૂબ ઓછા કે નહિવત લક્ષણો નોંધાયા છે.',
        },
        recommendation: {
          en: 'If you are seeking help for depression or anxiety, discuss your overall mood changes with a doctor.',
          hi: 'यदि आप डिप्रेशन या चिंता से जूझ रहे हैं, तो डॉक्टर से अपने लक्षणों पर खुलकर चर्चा करें।',
          gu: 'જો તમે ઉદાસી કે ચિંતા અનુભવતા હોવ તો ડૉક્ટરની સલાહ લઈ શકો છો.',
        },
      },
      {
        minScore: 4,
        maxScore: 6,
        level: { en: 'Moderate Mood Elevation Features', hi: 'मध्यम स्तर के मूड में उछाल के लक्षण', gu: 'મધ્યમ મૂડ એલિવેશન' },
        description: {
          en: 'Several features of elevated mood or energy were reported. This may reflect periods of intense focus, high stress response, or hypomanic vulnerability.',
          hi: 'कुछ ऐसे लक्षण हैं जो दर्शाते हैं कि मूड में कभी-कभी असामान्य तेजी आई है।',
          gu: 'મૂડમાં અસામાન્ય તેજીના કેટલાક લક્ષણો જોવા મળે છે.',
        },
        recommendation: {
          en: 'Share these experiences with a psychiatrist, especially if starting an antidepressant, to ensure accurate diagnostic monitoring.',
          hi: 'मनोचिकित्सक से परामर्श लें ताकि वे यह जांच सकें कि क्या यह किसी मूड विकार का हिस्सा है।',
          gu: 'મનોચિકિત્સકની મુલાકાત લઈ આ અનુભવોની વિગતવાર ચર્ચા કરવી હિતાવહ છે.',
        },
      },
      {
        minScore: 7,
        maxScore: 9,
        level: { en: 'High Endorsement of Manic / Hypomanic Features', hi: 'मेनिया/हाइपोमेनिया के उल्लेखनीय लक्षण', gu: 'મેનિયા/હાઈપોમેનિયાના નોંધપાત્ર લક્ષણો' },
        description: {
          en: 'You endorsed multiple hallmark features of hypomania/mania occurring concurrently. In psychiatric evaluation, this pattern strongly warrants a formal assessment for Bipolar Spectrum conditions.',
          hi: 'आपने अत्यधिक ऊर्जा, कम नींद और तेजी के कई प्रमुख लक्षण बताए हैं। यह पैटर्न बायपोलर स्पेक्ट्रम की संभावना की ओर संकेत करता है।',
          gu: 'તમે અતિશય ઊર્જા, ઓછી ઊંઘ અને અતિસક્રિયતાના ઘણા લક્ષણો નોંધ્યા છે. આ બાયપોલર વિકારની શક્યતા દર્શાવે છે.',
        },
        recommendation: {
          en: 'A comprehensive evaluation with a psychiatrist is strongly advised. Bringing a family member who has observed your behavior during high and low phases is exceptionally helpful.',
          hi: 'कृपया किसी मनोचिकित्सक से विस्तृत जांच करवाएं। अपने किसी परिजन को साथ ले जाएं जिन्होंने आपके मूड के उतार-चढ़ाव को देखा हो।',
          gu: 'કૃપા કરીને નિષ્ણાત મનોચિકિત્સકનો સંપર્ક કરો અને પરિવારના સભ્યને સાથે રાખો જેમણે તમારો સ્વભાવ જોયો હોય.',
        },
      },
    ],
  },
  {
    id: 'audit-c',
    name: {
      en: 'Alcohol Use Reflection (AUDIT-C Educational Tool)',
      hi: 'शराब सेवन आत्म-अवलोकन (AUDIT-C शैक्षणिक चेकलिस्ट)',
      gu: 'દારૂના સેવનનું આત્મ-મૂલ્યાંકન (AUDIT-C શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Reflect confidentially on drinking patterns and identify whether alcohol consumption may be placing health or safety at elevated risk.',
      hi: 'यह निष्पक्ष रूप से समझें कि क्या आपके शराब पीने का तरीका आपके स्वास्थ्य या जीवन के लिए जोखिम पैदा कर रहा है।',
      gu: 'દારૂ પીવાની ટેવ સ્વાસ્થ્ય માટે કેટલી જોખમી બની રહી છે તેનું ગોપનીય રીતે મૂલ્યાંકન કરો.',
    },
    disclaimer: {
      en: 'This tool is exclusively educational. It does not replace a medical consultation. If you consume alcohol heavily, NEVER stop abruptly without medical supervision, as alcohol withdrawal can cause dangerous seizures and delirium.',
      hi: 'यह टूल केवल शैक्षणिक समझ के लिए है। यदि आप नियमित रूप से भारी मात्रा में शराब पीते हैं, तो कभी भी अचानक बंद न करें क्योंकि इसका विड्रॉल जानलेवा हो सकता है। डॉक्टर की मदद लें।',
      gu: 'આ ટૂલ માત્ર શૈક્ષણિક માહિતી માટે છે. જો તમે નિયમિત દારૂ પીતા હોવ તો ડૉક્ટરની દેખરેખ વગર ક્યારેય અચાનક બંધ ન કરવો.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'Never (0)', hi: 'कभी नहीं (0)', gu: 'ક્યારેય નહીં (૦)' } },
      { value: 1, label: { en: 'Monthly or less (1)', hi: 'महीने में एक बार या कम (1)', gu: 'મહિને એકાદ વાર કે ઓછું (૧)' } },
      { value: 2, label: { en: '2-4 times a month (2)', hi: 'महीने में 2-4 बार (2)', gu: 'મહિનામાં ૨-૪ વાર (૨)' } },
      { value: 3, label: { en: '2-3 times a week (3)', hi: 'हफ्ते में 2-3 बार (3)', gu: 'અઠવાડિયામાં ૨-૩ વાર (૩)' } },
      { value: 4, label: { en: '4 or more times a week (4)', hi: 'हफ्ते में 4 या अधिक बार (4)', gu: 'અઠવાડિયામાં ૪ કે વધુ વાર (૪)' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'How often do you have a drink containing alcohol?',
          hi: 'आप कितनी बार शराब का सेवन करते हैं?',
          gu: 'તમે કેટલી વાર દારૂનું સેવન કરો છો?',
        },
      },
      {
        id: 2,
        text: {
          en: 'How many standard drinks containing alcohol do you have on a typical day when you are drinking? (0 = 1-2 drinks, 1 = 3-4 drinks, 2 = 5-6 drinks, 3 = 7-9 drinks, 4 = 10+ drinks)',
          hi: 'जिस दिन आप पीते हैं, उस दिन आमतौर पर कितने पैग या ड्रिंक्स लेते हैं?',
          gu: 'પીવાના દિવસે સામાન્ય રીતે કેટલા પેગ કે ડ્રિંક્સ પીવો છો?',
        },
      },
      {
        id: 3,
        text: {
          en: 'How often do you have six or more standard drinks on one occasion (binge drinking)?',
          hi: 'आप कितनी बार एक ही अवसर पर 6 या उससे अधिक ड्रिंक्स (भारी मात्रा में) पी लेते हैं?',
          gu: 'એકસાથે ૬ કે તેથી વધુ પેગ કેટલી વાર પી જાઓ છો?',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 3,
        level: { en: 'Low-Risk Consumption', hi: 'कम जोखिम वाला स्तर', gu: 'ઓછું જોખમ' },
        description: {
          en: 'Your responses indicate low or zero consumption patterns according to standard public health benchmarks.',
          hi: 'आपके उत्तर दर्शाते हैं कि आपका शराब का सेवन बहुत कम या न के बराबर है।',
          gu: 'તમારા જવાબો દર્શાવે છે કે દારૂનું પ્રમાણ ખૂબ ઓછું અથવા શૂન્ય છે.',
        },
        recommendation: {
          en: 'Continue maintaining healthy habits and be mindful of any future changes in drinking triggers.',
          hi: 'स्वस्थ आदतें बनाए रखें और कभी भी तनाव मिटाने के लिए शराब का सहारा न लें।',
          gu: 'તંદુરસ્ત જીવનશૈલી જાળવી રાખો અને તણાવમાં દારૂનો સહારો ન લો.',
        },
      },
      {
        minScore: 4,
        maxScore: 7,
        level: { en: 'At-Risk / Hazardous Drinking', hi: 'जोखिमपूर्ण सेवन स्तर (Hazardous Drinking)', gu: 'જોખમી વપરાશ' },
        description: {
          en: 'Your score falls into the range associated with elevated risks of liver strain, high blood pressure, sleep disruption, and developing alcohol dependence.',
          hi: 'यह स्कोर दर्शाता है कि शराब का सेवन आपके स्वास्थ्य, नींद, ब्लड प्रेशर और लिवर पर बुरा असर डालने लगा है।',
          gu: 'આ સ્કોર દર્શાવે છે કે દારૂ તમારા બ્લડ પ્રેશર, ઊંઘ અને લિવર માટે જોખમ ઊભું કરી રહ્યો છે.',
        },
        recommendation: {
          en: 'Consider cutting down or establishing alcohol-free days. Discussing your health markers with a physician can provide objective clarity.',
          hi: 'शराब कम करने या पूरी तरह छोड़ने पर विचार करें और डॉक्टर से लिवर व स्वास्थ्य की जांच कराएं।',
          gu: 'દારૂનું પ્રમાણ ઘટાડવું કે બંધ કરવું જરૂરી છે અને ડૉક્ટરની સલાહ લેવી હિતાવહ છે.',
        },
      },
      {
        minScore: 8,
        maxScore: 12,
        level: { en: 'High-Risk / Probable Alcohol Use Disorder', hi: 'अत्यधिक जोखिम / संभावित शराब निर्भरता', gu: 'તીવ્ર જોખમ / સંભવિત વ્યસન' },
        description: {
          en: 'Score indicates heavy, frequent alcohol intake with substantial risk of alcohol use disorder, severe withdrawal complications, and organ damage.',
          hi: 'यह स्कोर भारी और नियमित शराब सेवन दर्शाता है। इसमें लत पड़ने और न पीने पर गंभीर विड्रॉल का भारी खतरा है।',
          gu: 'આ સ્કોર દર્શાવે છે કે દારૂનું ભારે વ્યસન થઈ ચૂક્યું છે અને સ્વાસ્થ્યને ગંભીર નુકસાન થઈ રહ્યું છે.',
        },
        recommendation: {
          en: 'DO NOT stop drinking abruptly on your own if you experience morning shakes or nausea. Consult a psychiatrist or de-addiction medical specialist for safe, medically supervised detoxification.',
          hi: 'हाथ कांपने या घबराहट होने पर खुद से अचानक शराब बंद न करें। सुरक्षित डिटॉक्स और इलाज के लिए तुरंत मनोचिकित्सक या नशा मुक्ति विशेषज्ञ से मिलें।',
          gu: 'હાથ ધ્રૂજતા હોય ત્યારે જાતે અચાનક દારૂ બંધ ન કરવો. સુરક્ષિત સારવાર માટે તાત્કાલિક વ્યસનમુક્તિ નિષ્ણાત કે મનોચિકિત્સકનો સંપર્ક કરો.',
        },
      },
    ],
  },
  {
    id: 'asrs',
    name: {
      en: 'Adult ADHD Reflection (ASRS-v1.1 Part A)',
      hi: 'वयस्क एडीएचडी आत्म-अवलोकन (ASRS-v1.1 भाग-ए)',
      gu: 'પુખ્ત વયનું ADHD આત્મ-મૂલ્યાંકન (ASRS-v1.1)',
    },
    purpose: {
      en: 'Educational reflection on common signs of attention deficits, disorganization, hyperactivity, and executive function difficulties in adulthood over the past 6 months.',
      hi: 'पिछले 6 महीनों में ध्यान भटकने, काम टालने, भूलने और बेचैनी जैसे लक्षणों का शैक्षणिक अवलोकन।',
      gu: 'છેલ્લા ૬ મહિનામાં એકાગ્રતાનો અભાવ, કામ પૂર્ણ કરવામાં અસમર્થતા અને બેચેનીનું શૈક્ષણિક મૂલ્યાંકન.',
    },
    disclaimer: {
      en: 'This tool is for educational self-reflection only. ADHD requires a detailed developmental and clinical psychiatric history spanning childhood and adulthood. Only a qualified psychiatrist can evaluate ADHD.',
      hi: 'यह केवल शैक्षणिक समझ के लिए है। एडीएचडी का निदान केवल बचपन से लेकर अब तक के पूरे विकासक्रम की चिकित्सीय जांच के बाद ही मनोचिकित्सक द्वारा किया जा सकता है।',
      gu: 'આ માત્ર શૈક્ષણિક આત્મ-ચિંતન માટે છે. સચોટ નિદાન માટે નિષ્ણાત મનોચિકિત્સકની મુલાકાત અનિવાર્ય છે.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'Never', hi: 'कभी नहीं', gu: 'ક્યારેય નહીં' } },
      { value: 1, label: { en: 'Rarely', hi: 'शायद ही कभी', gu: 'ભાગ્યે જ' } },
      { value: 2, label: { en: 'Sometimes', hi: 'कभी-कभी', gu: 'ક્યારેક' } },
      { value: 3, label: { en: 'Often', hi: 'अक्सर', gu: 'વારંવાર' } },
      { value: 4, label: { en: 'Very Often', hi: 'बहुत अक्सर', gu: 'ખૂબ જ વારંવાર' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
          hi: 'जब किसी प्रोजेक्ट का कठिन हिस्सा पूरा हो जाता है, तो उसके बाद अंतिम ब्यौरे निपटाने में कितनी परेशानी होती है?',
          gu: 'કોઈ પ્રોજેક્ટનું મુખ્ય કામ પૂરું થયા પછી તેના આખરી બારીક કામો પૂરા કરવામાં કેટલી મુશ્કેલી પડે છે?',
        },
      },
      {
        id: 2,
        text: {
          en: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
          hi: 'जब आपको कोई ऐसा काम करना हो जिसमें योजना और व्यवस्था की जरूरत हो, तो चीजें व्यवस्थित करने में कितनी कठिनाई होती है?',
          gu: 'આયોજન માંગી લે તેવું કોઈ કામ કરવાનું હોય ત્યારે બધું વ્યવસ્થિત ગોઠવવામાં કેટલી તકલીફ થાય છે?',
        },
      },
      {
        id: 3,
        text: {
          en: 'How often do you have problems remembering appointments or obligations?',
          hi: 'आपको अपनी मुलाकातों, मीटिंग्स या जरूरी जिम्मेदारियों को याद रखने में कितनी बार परेशानी होती है?',
          gu: 'મીટિંગ્સ, એપોઇન્ટમેન્ટ્સ કે મહત્વની જવાબદારીઓ ભૂલી જવાની તકલીફ કેટલી વાર થાય છે?',
        },
      },
      {
        id: 4,
        text: {
          en: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
          hi: 'जब किसी काम में बहुत ज्यादा मानसिक सोच की जरूरत होती है, तो आप उसे शुरू करने से बचने या टालने की कितनी कोशिश करते हैं?',
          gu: 'જે કામમાં ખૂબ વિચારવાની જરૂર હોય તેને શરૂ કરવાનું ટાળવાની કે મોડું કરવાની ટેવ કેટલી વાર પડે છે?',
        },
      },
      {
        id: 5,
        text: {
          en: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
          hi: 'जब आपको लंबे समय तक बैठना पड़ता है, तो आप अपने हाथ-पैर हिलाने या बेचैन होने का कितना अनुभव करते हैं?',
          gu: 'લાંબા સમય સુધી બેસવાનું થાય ત્યારે હાથ-પગ હલાવવા કે બેચેન રહેવાની તકલીફ કેટલી વાર થાય છે?',
        },
      },
      {
        id: 6,
        text: {
          en: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
          hi: 'आप कितनी बार खुद को अत्यधिक सक्रिय और लगातार कुछ न कुछ करते रहने के लिए मजबूर महसूस करते हैं, जैसे आपके भीतर कोई मोटर चल रही हो?',
          gu: 'તમે કેટલી વાર જાતને અતિશય સક્રિય અનુભવો છો, જાણે તમારામાં કોઈ મોટર ફિટ કરેલી હોય?',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 9,
        level: { en: 'Low Likelihood of Adult ADHD', hi: 'एडीएचडी की कम संभावना', gu: 'પુખ્ત ADHD ની ઓછી શક્યતા' },
        description: {
          en: 'Your responses fall into the range typical of general population variations in attention and organizational focus.',
          hi: 'आपके उत्तर सामान्य स्तर की ध्यान और एकाग्रता दर्शाते हैं।',
          gu: 'તમારા જવાબો સામાન્ય સ્તરની એકાગ્રતા દર્શાવે છે.',
        },
        recommendation: {
          en: 'Standard time-management strategies, sleep optimization, and structured daily routines are generally adequate.',
          hi: 'स्वस्थ दिनचर्या, अच्छी नींद और समय प्रबंधन के सामान्य नियमों का पालन करें।',
          gu: 'સ્વસ્થ દિનચર્યા અને ટાઇમ મેનેજમેન્ટ પૂરતું છે.',
        },
      },
      {
        minScore: 10,
        maxScore: 13,
        level: { en: 'Moderate / Subthreshold Attention Symptoms', hi: 'मध्यम स्तर के ध्यान लक्षण', gu: 'મધ્યમ સ્તરના લક્ષણો' },
        description: {
          en: 'You report noticeable friction with organization, focus, or restlessness that could stem from adult ADHD traits, chronic anxiety, burnout, or sleep disruption.',
          hi: 'काम टालने या ध्यान भटकने के स्पष्ट लक्षण हैं। यह तनाव, चिंता या अव्यक्त एडीएचडी के लक्षण हो सकते हैं।',
          gu: 'કામ ટાળવા કે એકાગ્રતા તૂટવાના સ્પષ્ટ લક્ષણો છે જે તણાવ કે ADHD ના હોઈ શકે.',
        },
        recommendation: {
          en: 'Consider keeping an executive function log and discussing these patterns with a mental health professional.',
          hi: 'अपनी दिनचर्या की कमियों को नोट करें और आवश्यकतानुसार विशेषज्ञ से परामर्श लें।',
          gu: 'તમારી મુશ્કેલીઓની નોંધ રાખો અને જરૂર પડ્યે નિષ્ણાતની સલાહ લો.',
        },
      },
      {
        minScore: 14,
        maxScore: 24,
        level: { en: 'High Likelihood of Significant Adult ADHD Traits', hi: 'वयस्क एडीएचडी की उच्च संभावना (परामर्श योग्य)', gu: 'પુખ્ત ADHD ના પ્રબળ લક્ષણો' },
        description: {
          en: 'Your symptom pattern is highly consistent with adult ADHD. Executive dysfunction, procrastination, and restlessness are likely creating significant distress in career or relationships.',
          hi: 'यह स्कोर वयस्क एडीएचडी के बहुत अनुकूल है। काम पूरा न कर पाना, समय प्रबंधन की कमी और बेचैनी आपके जीवन को प्रभावित कर रही है।',
          gu: 'આ સ્કોર પુખ્ત ADHD ના પ્રબળ લક્ષણો દર્શાવે છે, જે કારકિર્દી કે અંગત જીવનમાં અડચણરૂપ બની શકે છે.',
        },
        recommendation: {
          en: 'A comprehensive psychiatric clinical evaluation is strongly recommended. Evidence-based behavioral strategies and modern pharmacotherapy offer excellent outcomes.',
          hi: 'मनोचिकित्सक से मिलकर पूर्ण जांच कराएं। उचित थेरेपी और दवाओं से इसमें अत्यधिक सुधार संभव है।',
          gu: 'મનોચિકિત્સક પાસે જઈને વિગતવાર તપાસ કરાવવી ખૂબ હિતાવહ છે. યોગ્ય સારવારથી જીવન બદલાઈ શકે છે.',
        },
      },
    ],
  },
  {
    id: 'isi',
    name: {
      en: 'Insomnia Severity Index (ISI Educational Screener)',
      hi: 'अनिद्रा गंभीरता सूचकांक (ISI शैक्षणिक टूल)',
      gu: 'અનિદ્રા તીવ્રતા સૂચકાંક (ISI શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Educational reflection assessing the nature, severity, and daytime impact of insomnia symptoms over the past 2 weeks.',
      hi: 'पिछले 2 हफ्तों में नींद न आने की समस्या, रात में बार-बार जागने और दिन में थकावट की गंभीरता का शैक्षणिक अवलोकन।',
      gu: 'છેલ્લા ૨ અઠવાડિયામાં ઊંઘ ન આવવી, વચ્ચે જાગી જવું અને દિવસના થાકનું શૈક્ષણિક મૂલ્યાંકન.',
    },
    disclaimer: {
      en: 'This tool is for educational self-reflection only and is not a clinical sleep study or medical diagnosis. Sleep disruption can stem from sleep apnea, depression, anxiety, or endocrine disorders. Consult a physician.',
      hi: 'यह केवल शैक्षणिक समझ के लिए है। नींद में रुकावट स्लीप एपनिया, थायरॉयड या डिप्रेशन के कारण भी हो सकती है। डॉक्टर से संपर्क करें।',
      gu: 'આ માત્ર શૈક્ષણિક સમજણ માટે છે. ઊંઘની તકલીફ ડિપ્રેશન, ચિંતા કે સ્લીપ એપનિયાના કારણે પણ હોઈ શકે છે.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'None', hi: 'बिल्कुल नहीं', gu: 'જરાય નહીં' } },
      { value: 1, label: { en: 'Mild', hi: 'हल्का', gu: 'હળવું' } },
      { value: 2, label: { en: 'Moderate', hi: 'मध्यम', gu: 'મધ્યમ' } },
      { value: 3, label: { en: 'Severe', hi: 'गंभीर', gu: 'તીવ્ર' } },
      { value: 4, label: { en: 'Very Severe', hi: 'अत्यंत गंभीर', gu: 'ખૂબ જ તીવ્ર' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Difficulty falling asleep (sleep onset latency > 30 minutes)',
          hi: 'बिस्तर पर जाने के बाद सोने में कठिनाई (30 मिनट से अधिक समय लगना)',
          gu: 'પથારીમાં ગયા પછી ઊંઘ આવવામાં મુશ્કેલી (૩૦ મિનિટથી વધુ સમય લાગવો)',
        },
      },
      {
        id: 2,
        text: {
          en: 'Difficulty staying asleep (waking up repeatedly during the night)',
          hi: 'रात के दौरान बार-बार नींद खुलना और दोबारा सोने में परेशानी होना',
          gu: 'રાત્રે વારંવાર ઊંઘ ઊડી જવી અને ફરી ઊંઘવામાં મુશ્કેલી થવી',
        },
      },
      {
        id: 3,
        text: {
          en: 'Problems waking up too early in the morning (inability to fall back asleep)',
          hi: 'सुबह बहुत जल्दी आंख खुल जाना और फिर बिल्कुल नींद न आना',
          gu: 'સવારે બહુ વહેલા ઊંઘ ઊડી જવી અને ફરી ઊંઘ ન આવવી',
        },
      },
      {
        id: 4,
        text: {
          en: 'How SATISFIED/DISSATISFIED are you with your CURRENT sleep pattern?',
          hi: 'आप अपने वर्तमान नींद के पैटर्न से कितने असंतुष्ट हैं?',
          gu: 'તમે તમારી વર્તમાન ઊંઘની ગુણવત્તાથી કેટલા અસંતુષ્ટ છો?',
        },
      },
      {
        id: 5,
        text: {
          en: 'How NOTICEABLE to others do you think your sleep problem is in terms of impairing your quality of life?',
          hi: 'दूसरों को आपकी नींद की समस्या और उससे होने वाली थकान कितनी स्पष्ट दिखाई देती है?',
          gu: 'તમારી ઊંઘની તકલીફ અને તેનાથી થતો થાક બીજા લોકો માટે કેટલો સ્પષ્ટ દેખાય છે?',
        },
      },
      {
        id: 6,
        text: {
          en: 'How WORRIED/DISTRESSED are you about your current sleep problem?',
          hi: 'आप अपनी नींद की इस समस्या को लेकर कितने चिंतित या परेशान हैं?',
          gu: 'તમે તમારી ઊંઘ ન આવવાની સમસ્યા અંગે કેટલા ચિંતિત છો?',
        },
      },
      {
        id: 7,
        text: {
          en: 'To what extent does sleep trouble INTERFERE with daily functioning (fatigue, concentration, memory, mood)?',
          hi: 'नींद की कमी आपके दैनिक कामकाज (थकान, एकाग्रता, मूड) में कितना खलल डालती है?',
          gu: 'ઊંઘનો અભાવ તમારા રોજિંદા કામકાજ (થાક, એકાગ્રતા, સ્વભાવ) માં કેટલો ખલેલ પહોંચાડે છે?',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 7,
        level: { en: 'No Clinically Significant Insomnia', hi: 'सामान्य नींद (कोई अनिद्रा नहीं)', gu: 'સામાન્ય ઊંઘ (અનિદ્રા નથી)' },
        description: {
          en: 'Your sleep quality is within normal parameters.',
          hi: 'आपकी नींद का पैटर्न सामान्य और स्वस्थ है।',
          gu: 'તમારી ઊંઘની ગુણવત્તા સામાન્ય અને સ્વસ્થ છે.',
        },
        recommendation: {
          en: 'Maintain regular wake times, limit late-night screens, and avoid late caffeine.',
          hi: 'नियमित सोने-जागने का समय रखें और रात को स्क्रीन से दूर रहें।',
          gu: 'નિયમિત સમયે સૂવા-જાગવાની ટેવ જાળવી રાખો.',
        },
      },
      {
        minScore: 8,
        maxScore: 14,
        level: { en: 'Subthreshold / Mild Insomnia', hi: 'हल्की अनिद्रा (Subthreshold)', gu: 'હળવી અનિદ્રા' },
        description: {
          en: 'Mild sleep friction that is beginning to cause daytime fatigue or bedtime apprehension.',
          hi: 'हल्की नींद की समस्या जो दिन के समय थकान या तनाव पैदा कर रही है।',
          gu: 'હળવી તકલીફ જે દિવસ દરમિયાન થાક પેદા કરી રહી છે.',
        },
        recommendation: {
          en: 'Practice sleep hygiene: fix wake-up time, reserve the bed for sleep only, and get 20 minutes of morning sunlight.',
          hi: 'स्लीप हाइजीन अपनाएं: सुबह धूप लें, दिन में न सोएं, और बेड पर केवल सोने जाएं।',
          gu: 'સ્લીપ હાઈજીનનું પાલન કરો: સવારે તડકો લો અને દિવસ દરમિયાન સૂવાનું ટાળો.',
        },
      },
      {
        minScore: 15,
        maxScore: 21,
        level: { en: 'Clinical Insomnia (Moderate Severity)', hi: 'मध्यम नैदानिक अनिद्रा', gu: 'મધ્યમ અનિદ્રા (સારવાર યોગ્ય)' },
        description: {
          en: 'Significant insomnia actively impairing your mood, alertness, and daytime executive functioning.',
          hi: 'स्पष्ट अनिद्रा जो आपकी कार्यक्षमता, ऊर्जा और मूड को प्रभावित कर रही है।',
          gu: 'સ્પષ્ટ અનિદ્રા જે તમારી કાર્યક્ષમતા અને સ્વાસ્થ્યને નબળું પાડી રહી છે.',
        },
        recommendation: {
          en: 'Cognitive Behavioural Therapy for Insomnia (CBT-I) is the gold standard medical treatment. Consult a physician.',
          hi: 'CBT-I (अनिद्रा की थेरेपी) और डॉक्टर की सलाह से इसका समाधान कराएं। बिना पर्ची नींद की गोलियां न लें।',
          gu: 'CBT-I થેરાપી અને ડૉક્ટરની સલાહ લેવી. જાતે ઊંઘની ગોળીઓ ક્યારેય ન લેવી.',
        },
      },
      {
        minScore: 22,
        maxScore: 28,
        level: { en: 'Clinical Insomnia (Severe)', hi: 'गंभीर नैदानिक अनिद्रा', gu: 'ગંભીર અનિદ્રા' },
        description: {
          en: 'Severe sleep deprivation causing severe exhaustion, distress, and elevated risks of physical and mental illness.',
          hi: 'नींद की भारी कमी जो शारीरिक और मानसिक स्वास्थ्य के लिए गंभीर खतरा बन सकती है।',
          gu: 'ઊંઘની ભારે તંગી જે શારીરિક અને માનસિક સ્વાસ્થ્ય માટે જોખમી બની શકે છે.',
        },
        recommendation: {
          en: 'A comprehensive medical and psychiatric sleep assessment is recommended to identify underlying triggers and restore sleep safely.',
          hi: 'तुरंत मनोचिकित्सक या स्लीप स्पेशलिस्ट से मिलें। सुरक्षित और वैज्ञानिक इलाज से यह पूरी तरह ठीक हो सकता है।',
          gu: 'તાત્કાલિક મનોચિકિત્સક કે સ્લીપ સ્પેશિયાલિસ્ટની સલાહ લો. યોગ્ય સારવારથી સંપૂર્ણ રાહત શક્ય છે.',
        },
      },
    ],
  },
  {
    id: 'dast10',
    name: {
      en: 'Substance Use Reflection (DAST-10 Educational Screener)',
      hi: 'नशीली दवाओं के उपयोग का अवलोकन (DAST-10 शैक्षणिक टूल)',
      gu: 'નશીલા પદાર્થોના વપરાશનું મૂલ્યાંકન (DAST-10 શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Educational reflection examining non-medical drug or prescription medicine misuse over the past 12 months (excluding alcohol and tobacco).',
      hi: 'शराब और तंबाकू को छोड़कर अन्य नशीले पदार्थों या बिना डॉक्टरी सलाह के दवाओं के सेवन का शैक्षणिक अवलोकन।',
      gu: 'દારૂ અને તમાકુ સિવાય અન્ય નશીલા પદાર્થો કે પ્રિસ્ક્રિપ્શન દવાઓના અનધિકૃત ઉપયોગનું શૈક્ષણિક મૂલ્યાંકન.',
    },
    disclaimer: {
      en: 'This tool is for educational self-reflection only. It does NOT constitute a medical or forensic diagnosis. Consult a qualified de-addiction professional.',
      hi: 'यह केवल शैक्षणिक समझ के लिए है। किसी भी प्रकार के नशीले पदार्थ की समस्या के लिए मनोचिकित्सक या नशा मुक्ति केंद्र से संपर्क करें।',
      gu: 'આ માત્ર શૈક્ષણિક મૂલ્યાંકન છે. કોઈપણ વ્યસનની સમસ્યા માટે નિષ્ણાત ડૉક્ટરની મદદ લેવી.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'No', hi: 'नहीं', gu: 'ના' } },
      { value: 1, label: { en: 'Yes', hi: 'हाँ', gu: 'હા' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Have you used drugs other than those required for medical reasons?',
          hi: 'क्या आपने डॉक्टरी सलाह के बिना नशीली दवाओं या गोलियों का इस्तेमाल किया है?',
          gu: 'શું તમે ડૉક્ટરની સલાહ વિના કોઈ નશીલી દવાઓ કે પદાર્થોનો ઉપયોગ કર્યો છે?',
        },
      },
      {
        id: 2,
        text: {
          en: 'Do you abuse more than one drug at a time (polysubstance misuse)?',
          hi: 'क्या आप एक समय में एक से अधिक नशीले पदार्थों का एक साथ सेवन करते हैं?',
          gu: 'શું તમે એકસાથે એકથી વધુ નશીલા પદાર્થોનું સેવન કરો છો?',
        },
      },
      {
        id: 3,
        text: {
          en: 'Are you always able to stop using drugs when you want to? (Score 0 if Yes, 1 if No)',
          hi: 'क्या आप जब चाहें तब नशा लेना बंद कर पाते हैं? (हाँ = 0, नहीं = 1)',
          gu: 'શું તમે જ્યારે ઇચ્છો ત્યારે નશો બંધ કરી શકો છો? (હા = ૦, ના = ૧)',
        },
      },
      {
        id: 4,
        text: {
          en: 'Have you had "blackouts" or "flashbacks" as a result of drug use?',
          hi: 'क्या नशे के बाद आपको बातें भूलने (Blackouts) की समस्या हुई है?',
          gu: 'શું નશાના કારણે ક્યારેય બેભાન થવું કે યાદશક્તિ જતી રહેવાની ઘટના બની છે?',
        },
      },
      {
        id: 5,
        text: {
          en: 'Do you ever feel bad or guilty about your drug use?',
          hi: 'क्या आपको कभी अपने नशा करने पर बुरा या अपराधबोध (Guilt) महसूस होता है?',
          gu: 'શું તમને તમારા વ્યસનને લઈને ક્યારેય પસ્તાવો કે શરમ અનુભવાય છે?',
        },
      },
      {
        id: 6,
        text: {
          en: 'Does your spouse (or parents) ever complain about your involvement with drugs?',
          hi: 'क्या आपके परिवार या जीवनसाथी ने कभी आपके नशे पर ऐतराज जताया है?',
          gu: 'શું તમારા પરિવારજનોએ ક્યારેય તમારા વ્યસન અંગે ચિંતા કે વિરોધ વ્યક્ત કર્યો છે?',
        },
      },
      {
        id: 7,
        text: {
          en: 'Have you neglected your family or work obligations because of your drug use?',
          hi: 'क्या नशे के चक्कर में आपने अपनी पारिवारिक जिम्मेदारियों या नौकरी को नजरअंदाज किया है?',
          gu: 'શું નશાના કારણે તમારા કુટુંબ કે નોકરી-ધંધામાં નુકસાન થયું છે?',
        },
      },
      {
        id: 8,
        text: {
          en: 'Have you engaged in illegal activities to obtain drugs?',
          hi: 'क्या नशा हासिल करने के लिए आपने कभी कोई अनुचित या अवैध रास्ता अपनाया है?',
          gu: 'શું નશો મેળવવા માટે ક્યારેય કોઈ ખોટું કે અયોગ્ય પગલું ભરવું પડ્યું છે?',
        },
      },
      {
        id: 9,
        text: {
          en: 'Have you experienced withdrawal symptoms (felt sick) when you stopped taking drugs?',
          hi: 'क्या नशा छोड़ने या न मिलने पर आपको बेचैनी, कंपकंपी या शारीरिक दर्द (Withdrawal) हुआ है?',
          gu: 'શું નશો બંધ કરવાથી હાથ ધ્રૂજવા, બેચેની કે શરીરમાં કળતર (વિડ્રોલ) થાય છે?',
        },
      },
      {
        id: 10,
        text: {
          en: 'Have you had medical problems as a result of your drug use (e.g. memory loss, hepatitis, convulsions)?',
          hi: 'क्या नशे के कारण आपको कोई शारीरिक या मानसिक बीमारी (दौरे, लिवर समस्या, याददाश्त हानि) हुई है?',
          gu: 'શું નશાના કારણે કોઈ શારીરિક બીમારી, ખેંચ કે યાદશક્તિની તકલીફ થઈ છે?',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 0,
        level: { en: 'No Problems Reported', hi: 'कोई समस्या नहीं', gu: 'કોઈ સમસ્યા નથી' },
        description: {
          en: 'No illicit substance misuse reported in the past year.',
          hi: 'पिछले वर्ष में किसी नशीले पदार्थ के दुरुपयोग की रिपोर्ट नहीं है।',
          gu: 'કોઈ નશીલા પદાર્થોના ઉપયોગની વિગત નથી.',
        },
        recommendation: {
          en: 'Continue healthy habits.',
          hi: 'स्वस्थ और नशामुक्त जीवनशैली बनाए रखें।',
          gu: 'સ્વસ્થ જીવનશૈલી જાળવી રાખો.',
        },
      },
      {
        minScore: 1,
        maxScore: 2,
        level: { en: 'Low Level of Misuse', hi: 'कम जोखिम स्तर', gu: 'ઓછું જોખમ' },
        description: {
          en: 'Subthreshold drug misuse with emerging risk of tolerance or escalating habituation.',
          hi: 'शुरुआती या कभी-कभार का इस्तेमाल, जिससे आगे चलकर लत का जोखिम हो सकता है।',
          gu: 'પ્રારંભિક વપરાશ જે ભવિષ્યમાં વ્યસનમાં ફેરવાઈ શકે છે.',
        },
        recommendation: {
          en: 'Consider brief motivational intervention and explore healthier coping mechanisms.',
          hi: 'सचेत हो जाएं और तनाव से निपटने के लिए स्वस्थ रास्ते अपनाएं।',
          gu: 'સાવચેત રહો અને તણાવ સામે લડવા સ્વસ્થ ટેવો અપનાવો.',
        },
      },
      {
        minScore: 3,
        maxScore: 5,
        level: { en: 'Moderate Substance Misuse', hi: 'मध्यम स्तर का नशा (परामर्श आवश्यक)', gu: 'મધ્યમ સ્તરનું વ્યસન' },
        description: {
          en: 'Substantial friction in daily functioning, family relations, or health due to substance use.',
          hi: 'नशे का स्पष्ट असर स्वास्थ्य, परिवार और कामकाज पर पड़ना शुरू हो चुका है।',
          gu: 'વ્યસનની સ્પષ્ટ અસર સ્વાસ્થ્ય અને પરિવાર પર દેખાઈ રહી છે.',
        },
        recommendation: {
          en: 'A clinical evaluation by an addiction medicine specialist or psychiatrist is recommended.',
          hi: 'नशा मुक्ति विशेषज्ञ या मनोचिकित्सक से परामर्श लें।',
          gu: 'વ્યસનમુક્તિ નિષ્ણાત કે મનોચિકિત્સકની તાત્કાલિક સલાહ લો.',
        },
      },
      {
        minScore: 6,
        maxScore: 10,
        level: { en: 'Substantial / Severe Substance Use Disorder', hi: 'गंभीर नशा निर्भरता (तत्काल इलाज योग्य)', gu: 'ગંભીર વ્યસન (તાત્કાલિક સારવાર)' },
        description: {
          en: 'Score indicates high severity dependence with dangerous physiological or social consequences.',
          hi: 'गंभीर स्तर की निर्भरता जिसमें शारीरिक व मानसिक नुकसान का बहुत अधिक खतरा है।',
          gu: 'ગંભીર સ્તરનું વ્યસન જે શરીર અને મગજ માટે જીવલેણ બની શકે છે.',
        },
        recommendation: {
          en: 'Comprehensive psychiatric and addiction assessment with medically supervised detoxification is urgently advised.',
          hi: 'बिना देर किए अस्पताल या मनोचिकित्सक से संपर्क करें। सुरक्षित मेडिकल डिटॉक्स जरूरी है।',
          gu: 'તબીબી દેખરેખ હેઠળ સુરક્ષિત ડિટોક્સ અને સારવાર તાત્કાલિક જરૂરી છે.',
        },
      },
    ],
  },
  {
    id: 'pcl5',
    name: {
      en: 'PTSD Reflection (PC-PTSD-5 Primary Care Screener)',
      hi: 'पीटीएसडी आत्म-अवलोकन (PC-PTSD-5 शैक्षणिक टूल)',
      gu: 'PTSD આત્મ-મૂલ્યાંકન (PC-PTSD-5 શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Educational reflection evaluating whether past severe traumatic events continue to cause intrusive memories, hyperarousal, or emotional numbness.',
      hi: 'किसी पुरानी दर्दनाक दुर्घटना, हिंसा या सदमे के बाद बुरे सपने, अचानक डर और चौंकने जैसे लक्षणों का शैक्षणिक अवलोकन।',
      gu: 'ભૂતકાળના કોઈ ગંભીર અકસ્માત કે આઘાત પછી ખરાબ સપના અને ડર જેવા લક્ષણોનું શૈક્ષણિક મૂલ્યાંકન.',
    },
    disclaimer: {
      en: 'This tool is for educational self-reflection only and cannot diagnose PTSD. PTSD evaluation requires a trauma-informed clinical psychiatric interview.',
      hi: 'यह केवल शैक्षणिक समझ के लिए है। पीटीएसडी की सही जांच केवल अनुभवी मनोचिकित्सक द्वारा ही संभव है।',
      gu: 'આ માત્ર શૈક્ષણિક સમજણ માટે છે. PTSD ની સાચી તપાસ માટે મનોચિકિત્સકની મુલાકાત જરૂરી છે.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'No', hi: 'नहीं', gu: 'ના' } },
      { value: 1, label: { en: 'Yes', hi: 'हाँ', gu: 'હા' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Had nightmares about the traumatic event or thought about it when you did not want to?',
          hi: 'उस दर्दनाक घटना के बारे में बुरे सपने आना या न चाहते हुए भी उसके दृश्य आंखों के सामने घूमना?',
          gu: 'તે દુર્ઘટના અંગે ખરાબ સપના આવવા કે ન ઇચ્છવા છતાં તેના વિચારો મગજમાં ઘૂમરાવા?',
        },
      },
      {
        id: 2,
        text: {
          en: 'Tried hard not to think about the event or went out of your way to avoid situations that reminded you of it?',
          hi: 'उस घटना के बारे में सोचने से बचने की पूरी कोशिश करना या उन जगहों व लोगों से दूर भागना जो उसकी याद दिलाते हैं?',
          gu: 'તે ઘટનાની યાદ અપાવે તેવી જગ્યાઓ કે પરિસ્થિતિઓથી દૂર ભાગવાનો સતત પ્રયાસ કરવો?',
        },
      },
      {
        id: 3,
        text: {
          en: 'Were constantly on guard, watchful, or easily startled by sudden noises or movements?',
          hi: 'हमेशा सतर्क, चौकन्ने रहना या हल्की सी आवाज पर भी बुरी तरह चौंक जाना?',
          gu: 'સતત સાવધ રહેવું કે સહેજ અવાજમાં પણ ખૂબ ચમકી જવું?',
        },
      },
      {
        id: 4,
        text: {
          en: 'Felt numb or detached from people, activities, or your surroundings?',
          hi: 'भावनात्मक रूप से सुन्न महसूस करना या अपने प्रियजनों और सामान्य गतिविधियों से कटा हुआ महसूस करना?',
          gu: 'લાગણીહીન કે સુન્ન અનુભવવું અથવા પરિવાર અને મિત્રોથી અળગા થઈ જવું?',
        },
      },
      {
        id: 5,
        text: {
          en: 'Felt guilty or unable to stop blaming yourself or others for the event or any problems the event may have caused?',
          hi: 'उस घटना के लिए खुद को या दूसरों को लगातार कोसना या गहरा अपराधबोध महसूस करना?',
          gu: 'તે ઘટના માટે સતત પોતાની જાતને કે બીજાને દોષિત માન્યા કરવું?',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 2,
        level: { en: 'Unlikely PTSD Screen', hi: 'पीटीएसडी की कम संभावना', gu: 'PTSD ની ઓછી શક્યતા' },
        description: {
          en: 'Your responses do not indicate high acute levels of post-traumatic stress symptomatology.',
          hi: 'आपके उत्तर गंभीर पीटीएसडी के लक्षण नहीं दर्शाते हैं।',
          gu: 'તમારા જવાબો ગંભીર ટ્રોમાના લક્ષણો દર્શાવતા નથી.',
        },
        recommendation: {
          en: 'Practice grounding techniques, gentle physical activity, and maintain social connectedness.',
          hi: 'स्वस्थ जीवनशैली बनाए रखें और परिजनों से बातचीत जारी रखें।',
          gu: 'પરિવાર અને મિત્રો સાથે સંવાદ જાળવી રાખો.',
        },
      },
      {
        minScore: 3,
        maxScore: 5,
        level: { en: 'Positive PTSD Screen (Evaluation Recommended)', hi: 'पीटीएसडी के संभावित लक्षण (जांच योग्य)', gu: 'PTSD ના પ્રબળ લક્ષણો (તપાસ જરૂરી)' },
        description: {
          en: 'Your score suggests significant post-traumatic stress symptoms that warrant a supportive clinical evaluation.',
          hi: 'यह स्कोर पुराने सदमे के गहरे असर को दर्शाता है। बुरे सपने और डर आपके सामान्य जीवन में रुकावट बन रहे हैं।',
          gu: 'આ સ્કોર દર્શાવે છે કે ભૂતકાળનો આઘાત તમારા વર્તમાન જીવન પર હજુ પણ પ્રતિકૂળ અસર કરી રહ્યો છે.',
        },
        recommendation: {
          en: 'A consultation with a psychiatrist or trauma-focused psychotherapist (EMDR, Trauma-Focused CBT) is strongly advised.',
          hi: 'मनोचिकित्सक या ट्रॉमा थेरेपिस्ट (जैसे EMDR या CBT) से परामर्श लें। विज्ञान आधारित थेरेपी से इसमें पूरा सुधार संभव है।',
          gu: 'મનોચિકિત્સક કે ટ્રોમા થેરાપિસ્ટની મુલાકાત લો. યોગ્ય સારવારથી મન શાંત થઈ શકે છે.',
        },
      },
    ],
  },
  {
    id: 'scoff',
    name: {
      en: 'Eating Habits Reflection (SCOFF Educational Questionnaire)',
      hi: 'खानपान की आदतों का अवलोकन (SCOFF शैक्षणिक चेकलिस्ट)',
      gu: 'આહારની ટેવોનું આત્મ-મૂલ્યાંકન (SCOFF શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Educational reflection screening for signs of eating disorders (such as Anorexia, Bulimia, or Binge Eating).',
      hi: 'खाने की आदतों, उल्टी करने की प्रवृत्ति, वजन के डर और भोजन पर नियंत्रण खोने का शैक्षणिक अवलोकन।',
      gu: 'ખોરાકની ટેવો, વજન વધવાના સતત ભય અને ખાવા પર નિયંત્રણ ગુમાવવાનું શૈક્ષણિક મૂલ્યાંકન.',
    },
    disclaimer: {
      en: 'This tool is for educational self-reflection only. Eating disorders require a comprehensive medical, psychiatric, and nutritional assessment.',
      hi: 'यह केवल शैक्षणिक समझ के लिए है। खानपान से जुड़े विकारों के लिए मनोचिकित्सक और फिजिशियन से परामर्श जरूरी है।',
      gu: 'આ માત્ર શૈક્ષણિક સમજણ માટે છે. સચોટ નિદાન માટે ડૉક્ટરની મુલાકાત લેવી.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'No', hi: 'नहीं', gu: 'ના' } },
      { value: 1, label: { en: 'Yes', hi: 'हाँ', gu: 'હા' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'Do you make yourself Sick because you feel uncomfortably full?',
          hi: 'क्या आप पेट ज्यादा भर जाने पर उल्टी करके खाना बाहर निकालने की कोशिश करते हैं?',
          gu: 'શું તમે વધુ પડતું ખાઈ લીધા પછી જાતે ઊલટી કરીને પેટ ખાલી કરવાનો પ્રયાસ કરો છો?',
        },
      },
      {
        id: 2,
        text: {
          en: 'Do you worry you have lost Control over how much you eat?',
          hi: 'क्या आपको चिंता रहती है कि खाने की मात्रा पर आपका नियंत्रण खत्म हो चुका है?',
          gu: 'શું તમને ચિંતા રહે છે કે તમે કેટલું ખાવ છો તેના પર તમારો કાબૂ નથી રહ્યો?',
        },
      },
      {
        id: 3,
        text: {
          en: 'Have you recently lost more than One stone (approx. 6 kg or 14 lbs) in a 3-month period?',
          hi: 'क्या आपने पिछले 3 महीनों में अचानक 6 किलोग्राम या उससे अधिक वजन घटाया है?',
          gu: 'શું તમે છેલ્લા ૩ મહિનામાં અચાનક ૬ કિલોથી વધુ વજન ગુમાવ્યું છે?',
        },
      },
      {
        id: 4,
        text: {
          en: 'Do you believe yourself to be Fat when others say you are too thin?',
          hi: 'क्या आप खुद को मोटा समझते हैं, भले ही दूसरे लोग कहें कि आप बहुत दुबले हैं?',
          gu: 'બીજા લોકો તમને પાતળા કહેતા હોવા છતાં શું તમે પોતાની જાતને જાડા માનો છો?',
        },
      },
      {
        id: 5,
        text: {
          en: 'Would you say that Food dominates your life and thoughts?',
          hi: 'क्या खाना, कैलोरी और वजन के विचार पूरे दिन आपके दिमाग पर हावी रहते हैं?',
          gu: 'શું ખોરાક, કેલરી અને વજનના વિચારો આખો દિવસ તમારા મગજ પર સવાર રહે છે?',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 1,
        level: { en: 'Low Likelihood of Eating Disorder', hi: 'खानपान विकार की कम संभावना', gu: 'ઈટિંગ ડિસઓર્ડરની ઓછી શક્યતા' },
        description: {
          en: 'Your responses do not indicate significant eating pathology on this screening measure.',
          hi: 'आपके उत्तर भोजन विकार के गंभीर लक्षण नहीं दर्शाते।',
          gu: 'તમારા જવાબો ખોરાકની ગંભીર વિકૃતિ દર્શાવતા નથી.',
        },
        recommendation: {
          en: 'Continue balanced nutrition and a positive body-image mindset.',
          hi: 'संतुलित आहार लें और अपने शरीर के प्रति सकारात्मक नजरिया रखें।',
          gu: 'સંતુલિત આહાર અને સકારાત્મક વિચારસરણી જાળવી રાખો.',
        },
      },
      {
        minScore: 2,
        maxScore: 5,
        level: { en: 'Possible Eating Disorder (Clinical Evaluation Warranted)', hi: 'संभावित खानपान विकार (परामर्श आवश्यक)', gu: 'સંભવિત ઈટિંગ ડિસઓર્ડર (તપાસ જરૂરી)' },
        description: {
          en: 'A score of 2 or higher indicates possible anorexia nervosa, bulimia nervosa, or binge eating patterns that warrant medical review.',
          hi: 'यह स्कोर एनोरेक्सिया, बुलिमिया या बिंज ईटिंग जैसे खानपान विकारों का गहरा संकेत हो सकता है।',
          gu: 'આ સ્કોર એનોરેક્સિયા કે બુલિમિયા જેવી ખોરાકની ગંભીર સમસ્યા તરફ નિર્દેશ કરે છે.',
        },
        recommendation: {
          en: 'Please consult a psychiatrist and physician for a compassionate evaluation and nutritional health assessment.',
          hi: 'कृपया मनोचिकित्सक और फिजिशियन से मिलकर जांच कराएं ताकि शारीरिक और मानसिक स्वास्थ्य सुरक्षित रहे।',
          gu: 'કૃપા કરીને મનોચિકિત્સક અને ડૉક્ટરનો સંપર્ક કરો જેથી યોગ્ય સારવાર શરૂ થઈ શકે.',
        },
      },
    ],
  },
  {
    id: 'epds',
    name: {
      en: 'Postpartum Mood Reflection (EPDS Educational Tool)',
      hi: 'प्रसवोत्तर मनोदशा अवलोकन (EPDS शैक्षणिक टूल)',
      gu: 'પ્રસૂતિ પછીના મૂડનું મૂલ્યાંકન (EPDS શૈક્ષણિક ટૂલ)',
    },
    purpose: {
      en: 'Educational reflection for mothers within the first year after childbirth on mood, anxiety, and bonding difficulties.',
      hi: 'प्रसव के बाद पहले वर्ष में माताओं के मन, चिंता और जुड़ाव की कठिनाइयों का शैक्षणिक अवलोकन।',
      gu: 'ડિલિવરી પછીના પ્રથમ વર્ષમાં માતાના મન, ચિંતા અને જોડાણની તકલીફોનું શૈક્ષણિક મૂલ્યાંકન.',
    },
    disclaimer: {
      en: 'This tool is for education only and is NOT a diagnosis. Postpartum depression is a medical emergency when self-harm thoughts occur — contact Tele-MANAS 14416 or 112 immediately.',
      hi: 'यह केवल शिक्षा के लिए है, निदान नहीं। खुद को नुकसान के विचार आएं तो तुरंत टेली-मानस 14416 या 112 पर संपर्क करें।',
      gu: 'આ માત્ર શિક્ષણ માટે છે, નિદાન નથી. પોતાને નુકસાનના વિચારો આવે તો તરત ટેલી-માનસ 14416 કે 112 નો સંપર્ક કરો.',
    },
    frequencyOptions: [
      { value: 0, label: { en: 'Never', hi: 'कभी नहीं', gu: 'ક્યારેય નહીં' } },
      { value: 1, label: { en: 'Sometimes', hi: 'कभी-कभी', gu: 'ક્યારેક' } },
      { value: 2, label: { en: 'Often', hi: 'अक्सर', gu: 'ઘણીવાર' } },
      { value: 3, label: { en: 'Almost always', hi: 'लगभग हमेशा', gu: 'લગભગ હંમેશા' } },
    ],
    questions: [
      {
        id: 1,
        text: {
          en: 'I have felt sad, miserable, or unable to feel joy after delivery',
          hi: 'प्रसव के बाद मैं उदास रही या खुशी महसूस नहीं कर पाई',
          gu: 'ડિલિવરી પછી હું ઉદાસ રહી કે આનંદ અનુભવી શકી નહીં',
        },
      },
      {
        id: 2,
        text: {
          en: 'I have felt anxious, panicky, or unable to sleep even when the baby sleeps',
          hi: 'बच्चे के सोने पर भी मुझे घबराहट रही या नींद नहीं आई',
          gu: 'બાળક સૂતું હોય ત્યારે પણ મને ગભરાટ રહ્યો કે ઊંઘ ન આવી',
        },
      },
      {
        id: 3,
        text: {
          en: 'I have felt disconnected from my baby or felt I am a bad mother',
          hi: 'मुझे बच्चे से जुड़ाव महसूस नहीं हुआ या लगा मैं खराब माँ हूँ',
          gu: 'મને બાળક સાથે જોડાણ ન લાગ્યું કે હું ખરાબ માતા છું એવું લાગ્યું',
        },
      },
      {
        id: 4,
        text: {
          en: 'I have had upsetting intrusive thoughts about harm coming to the baby',
          hi: 'मुझे बच्चे को नुकसान होने के परेशान करने वाले विचार आए',
          gu: 'મને બાળકને નુકસાન થશે તેવા હેરાન કરતા વિચારો આવ્યા',
        },
      },
      {
        id: 5,
        isCrisisQuestion: true,
        text: {
          en: 'I have had thoughts of harming myself',
          hi: 'मुझे खुद को नुकसान पहुंचाने के विचार आए',
          gu: 'મને પોતાને નુકસાન પહોંચાડવાના વિચારો આવ્યા',
        },
      },
    ],
    interpretations: [
      {
        minScore: 0,
        maxScore: 4,
        level: { en: 'Low Concern', hi: 'कम चिंता', gu: 'ઓછી ચિંતા' },
        description: {
          en: 'Your responses suggest low current distress. Continue family support and rest.',
          hi: 'आपके उत्तर कम परेशानी दर्शाते हैं। पारिवारिक सहयोग व आराम जारी रखें।',
          gu: 'તમારા જવાબો ઓછી તકલીફ દર્શાવે છે. પારિવારિક સાથ ચાલુ રાખો.',
        },
        recommendation: {
          en: 'Protect 4-5 hours of sleep with family help and discuss mood at routine postnatal visits.',
          hi: 'परिवार की मदद से 4-5 घंटे नींद सुरक्षित करें और नियमित जांच में मन की बात बताएं।',
          gu: 'પરિવારની મદદથી ૪-૫ કલાક ઊંઘ સુરક્ષિત કરો અને તપાસમાં મનની વાત જણાવો.',
        },
      },
      {
        minScore: 5,
        maxScore: 15,
        level: { en: 'Clinical Review Advised', hi: 'चिकित्सकीय परामर्श आवश्यक', gu: 'તબીબી સલાહ જરૂરી' },
        description: {
          en: 'Your responses suggest significant postpartum distress warranting prompt evaluation.',
          hi: 'आपके उत्तर उल्लेखनीय प्रसवोत्तर परेशानी दर्शाते हैं, तुरंत मूल्यांकन कराएं।',
          gu: 'તમારા જવાબો નોંધપાત્ર પ્રસૂતિ પછીની તકલીફ દર્શાવે છે, તરત તપાસ કરાવો.',
        },
        recommendation: {
          en: 'Please consult a psychiatrist or obstetrician promptly. If self-harm thoughts occur, call Tele-MANAS 14416 or 112 immediately.',
          hi: 'कृपया तुरंत मनोचिकित्सक या प्रसूति चिकित्सक से मिलें। खुद को नुकसान के विचार पर 14416 या 112 पर कॉल करें।',
          gu: 'કૃપા કરીને તરત મનોચિકિત્સકને મળો. પોતાને નુકસાનના વિચારો પર 14416 કે 112 પર કૉલ કરો.',
        },
      },
    ],
  },
];

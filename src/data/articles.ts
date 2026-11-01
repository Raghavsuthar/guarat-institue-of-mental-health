import { HealthArticle } from '../types';

export const articlesData: HealthArticle[] = [
  {
    id: 'workplace-and-student-stress',
    slug: 'workplace-and-student-stress-burnout',
    title: {
      en: 'Workplace & Student Stress: Understanding Burnout and Cognitive Fatigue',
      hi: 'कार्यस्थल और छात्रों में मानसिक तनाव: बर्नआउट (Burnout) और मानसिक थकान को समझें',
      gu: 'કાર્યસ્થળ અને વિદ્યાર્થીઓનો માનસિક તણાવ: બર્નઆઉટ અને માનસિક થાકને સમજો',
    },
    subtitle: {
      en: 'Recognizing chronic overload, distinguishing normal pressure from clinical distress, and evidence-based boundaries.',
      hi: 'लगातार अत्यधिक दबाव के प्रभाव, सामान्य तनाव बनाम चिकित्सीय परेशानी में अंतर, और संतुलन बनाने के वैज्ञानिक उपाय।',
      gu: 'સતત કામના બોજની અસરો, સામાન્ય દબાણ અને બીમારી વચ્ચેનો તફાવત તથા સ્વસ્થ સંતુલન જાળવવાના ઉપાયો.',
    },
    category: 'stress',
    summary: {
      en: 'Modern academic and professional environments frequently normalize extreme exhaustion. Understanding how chronic cortisol exposure impairs concentration, sleep, and emotional regulation helps individuals implement proactive psychological boundaries before irreversible burnout or clinical depressive episodes develop.',
      hi: 'प्रतियोगी परीक्षाओं और आधुनिक कॉर्पोरेट नौकरियों में अत्यधिक थकान को सामान्य मान लिया जाता है। लगातार तनाव शरीर के हार्मोन और मस्तिष्क की एकाग्रता को प्रभावित करता है। इसे समय पर पहचानकर बर्नआउट और डिप्रेशन से बचा जा सकता है।',
      gu: 'આજના સ્પર્ધાત્મક યુગમાં અતિશય થાકને સામાન્ય ગણવામાં આવે છે. સતત તણાવ મગજની એકાગ્રતા, ઊંઘ અને લાગણીઓ પર ગંભીર અસર કરે છે. યોગ્ય સમયે તેને ઓળખવાથી ડિપ્રેશનથી બચી શકાય છે.',
    },
    content: {
      en: `
### Normal Academic/Work Pressure vs. Pathological Burnout

Everyone experiences temporary bursts of stress before an exam or project deadline. Healthy stress (eustress) is time-limited: once the exam concludes or the deadline passes, the neuroendocrine system returns to baseline, sleep normalizes, and energy is restored.

In contrast, **Burnout**—recognized in ICD-11 as an occupational phenomenon—develops when chronic demands continually exceed coping resources without adequate recovery periods.

#### Key Warning Signs of Burnout:
1. **Energy Depletion or Exhaustion**: Waking up unrefreshed, constant physical heaviness, tension headaches, or digestive unrest.
2. **Mental Distance & Cynicism**: Developing negative, detached, or resentful attitudes toward studies, colleagues, or previously meaningful career aspirations.
3. **Reduced Cognitive Efficacy**: Noticeable decline in memory retention, inability to complete tasks in normal timeframes, brain fog, and indecisiveness.

### When Does Stress Become a Clinical Disorder?
Stress itself is not a psychiatric illness, but persistent chronic stress is a major trigger for:
- **Major Depressive Disorder**: When exhaustion transforms into feelings of worthlessness, hopelessness, intense self-blame, or persistent sadness.
- **Generalized Anxiety Disorder**: When worry extends beyond work/exams to every aspect of life, accompanied by physical restlessness, chest tightness, and severe insomnia.
- **Substance Misuse**: Relying on excessive alcohol, sleeping pills, or stimulants to cope or sleep.

### Practical, Evidence-Based Strategies
- **Non-Negotiable Sleep Architecture**: Sacrificing sleep to study or work past midnight directly damages memory consolidation in the hippocampus and elevates emotional reactivity. Aim for 7-8 hours of consistent sleep.
- **Digital Boundaries**: Establish clear boundaries: turn off work chat/email notifications during designated recovery windows in the evening.
- **Micro-Restorative Breaks**: Follow the Pomodoro approach (e.g., 25-50 minutes of focused effort followed by 5-10 minutes of away-from-screen movement).
- **Early Professional Consultation**: If anxiety impairs academic examinations or professional attendance for more than two consecutive weeks, seek a formal evaluation from a psychiatrist or licensed clinical psychologist.
      `,
      hi: `
### सामान्य दबाव बनाम बर्नआउट (Burnout)

परीक्षा या प्रोजेक्ट की डेडलाइन से पहले थोड़ा तनाव होना स्वाभाविक है। सामान्य तनाव सीमित समय के लिए होता है: जैसे ही काम पूरा होता है, शरीर और दिमाग फिर से शांत हो जाते हैं और ऊर्जा लौट आती है।

इसके विपरीत, **बर्नआउट** तब होता है जब महीनों तक बिना किसी आराम के लगातार अत्यधिक काम का दबाव बना रहता है।

#### बर्नआउट के मुख्य लक्षण:
1. **गंभीर शारीरिक व मानसिक थकान**: 8 घंटे सोने के बाद भी उठने पर ताजगी महसूस न होना, बदन में भारीपन या सिरदर्द।
2. **चिड़चिड़ापन और अलगाव**: पढ़ाई, ऑफिस या सहकर्मियों के प्रति नकारात्मकता या खीझ महसूस होना।
3. **एकाग्रता और याददाश्त में कमी**: किसी भी काम पर ध्यान केंद्रित न कर पाना और सरल काम करने में भी घंटों लग जाना।

### तनाव कब मानसिक विकार बन जाता है?
तनाव अपने आप में कोई बीमारी नहीं है, लेकिन लंबे समय तक अनसुलझा तनाव डिप्रेशन या एंग्जायटी डिसऑर्डर को जन्म दे सकता है। यदि चिंता इतनी बढ़ जाए कि नींद पूरी तरह उड़ जाए, घबराहट के दौरे पड़ें या जीवन व्यर्थ लगने लगे, तो इसे केवल तनाव न समझें।

### राहत के वैज्ञानिक उपाय:
- **पर्याप्त नींद से कोई समझौता नहीं**: देर रात तक जागने से दिमाग की याददाश्त और भावनात्मक संतुलन कमजोर होता है। 7-8 घंटे की नियमित नींद जरूरी है।
- **मोबाइल और स्क्रीन से दूरी**: काम के घंटों के बाद ऑफिस के मैसेज या ई-मेल से कुछ समय का डिजिटल डिटॉक्स रखें।
- **समय पर डॉक्टरी सलाह**: यदि घबराहट या उदासी 2 हफ्तों से अधिक बनी रहे, तो मनोचिकित्सक से परामर्श लेने में संकोच न करें।
      `,
      gu: `
### સામાન્ય તણાવ અને બર્નઆઉટ (Burnout) વચ્ચેનો તફાવત

પરીક્ષા કે કામના ડેડલાઇન સમયે હળવો તણાવ થવો સ્વાભાવિક છે. પરંતુ જ્યારે આ તણાવ મહિનાઓ સુધી સતત ચાલુ રહે અને આરામ કરવાની કોઈ તક ન મળે, ત્યારે તેને **બર્નઆઉટ** કહેવામાં આવે છે.

#### બર્નઆઉટના મુખ્ય લક્ષણો:
1. **કાયમી થાક**: પૂરતી ઊંઘ લીધા છતાં સવારે તાજગી ન લાગવી અને આખો દિવસ શરીર ભારે રહેવું.
2. **ચીડિયાપણું અને અણગમો**: અભ્યાસ કે કામ પ્રત્યે નકારાત્મકતા આવવી અને લોકોથી દૂર ભાગવાનું મન થવું.
3. **એકાગ્રતામાં ઘટાડો**: સામાન્ય બાબતો ભૂલી જવી અને કામમાં મન ન લાગવું.

### ક્યારે ડૉક્ટરની સલાહ લેવી?
જો તણાવને કારણે ઊંઘ સાવ ગાયબ થઈ જાય, છાતીમાં ધડકારા વધે કે અતિશય નિરાશા અનુભવાય, તો તે ડિપ્રેશન કે એન્ઝાયટી હોઈ શકે છે. આવા સમયે યોગ્ય મનોચિકિત્સકની સલાહ લેવી હિતાવહ છે.

### વ્યવહારુ ઉપાયો:
- **૭-૮ કલાકની નિયમિત ઊંઘ**: ઊંઘ સાથે ક્યારેય સમાધાન ન કરો. તે મગજ માટે અમૃત સમાન છે.
- **સ્ક્રીનથી દૂરી**: કામ પત્યા પછી મોબાઈલ કે લેપટોપથી થોડો સમય દૂર રહો.
- **હળવી કસરત અને શ્વાસોશ્વાસ**: દિવસમાં ૧૫-૨૦ મિનિટ હળવું ચાલવું અને ઊંડા શ્વાસ લેવા.
      `,
    },
    readingTimeMinutes: 4,
    tags: ['Stress', 'Burnout', 'Workplace', 'Students', 'Sleep'],
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
];


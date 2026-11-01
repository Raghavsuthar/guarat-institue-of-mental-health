import { ChildAdolescentTopic } from '../../types';

export const adhdChildData: ChildAdolescentTopic = {
  id: 'adhd-child',
  slug: 'adhd-child',
  name: {
    en: 'ADHD (Child & Adolescent Presentation)',
    hi: 'एडीएचडी (बाल एवं किशोर प्रस्तुति)',
    gu: 'એડીએચડી (બાળ અને કિશોર વર્તણૂક)',
  },
  medicalTerms: {
    en: 'Attention-Deficit / Hyperactivity Disorder (ICD-11: 6A05 | DSM-5-TR: 314.0x)',
    hi: 'अटेंशन-डेफिसिट / हाइपरएक्टिविटी विकार (ICD-11: 6A05)',
    gu: 'અટેન્શન-ડેફિસિટ / હાઇપરએક્ટિવિટી ડિસઓર્ડર (ICD-11: 6A05)',
  },
  tagline: {
    en: 'A neurodevelopmental pattern affecting executive functioning, impulse control, and sustained attention across multiple life settings.',
    hi: 'एक न्यूरोडेवलपमेंटल स्थिति जो एकाग्रता, आवेग नियंत्रण और कार्य योजना को एक से अधिक परिवेशों में प्रभावित करती है।',
    gu: 'એક ન્યુરોડેવલપમેન્ટલ સ્થિતિ જે એકાગ્રતા, આવેગ નિયંત્રણ અને કાર્ય આયોજનને શાળા અને ઘર બંને જગ્યાએ અસર કરે છે.',
  },
  overview: {
    en: 'Attention-Deficit / Hyperactivity Disorder (ADHD) in children and adolescents is a neurodevelopmental condition characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with daily functioning or development. ADHD is not a result of bad parenting, lack of willpower, or intellectual deficiency; it reflects neurobiological differences in the brain circuits responsible for executive functioning (prefrontal cortex and dopaminergic pathways). Crucially, a clinical diagnosis requires symptoms to be pervasive across at least two settings (both school and home) and cause demonstrable developmental or academic distress.',
    hi: 'बाल एवं किशोर एडीएचडी (ADHD) एक न्यूरोडेवलपमेंटल स्थिति है, जिसमें असावधानी (inattention), अतिसक्रियता (hyperactivity) और आवेगशीलता (impulsivity) का ऐसा निरंतर स्वरूप देखा जाता है जो बच्चे के दैनिक विकास और सीखने को प्रभावित करता है। एडीएचडी खराब परवरिश, अनुशासन की कमी या बुद्धि की दुर्बलता का परिणाम नहीं है। यह मस्तिष्क के उन तंत्रिका तंत्रों (प्रीफ्रंटल कॉर्टेक्स और डोपामाइन पाथवे) में अंतर से संबंधित है जो एकाग्रता और आत्म-नियंत्रण संभालते हैं। चिकित्सीय निदान के लिए आवश्यक है कि ये लक्षण कम से कम दो परिवेशों (स्कूल और घर दोनों) में लगातार मौजूद हों।',
    gu: 'બાળ અને કિશોર એડીએચડી (ADHD) એ એક ન્યુરોડેવલપમેન્ટલ સ્થિતિ છે જેમાં બેધ્યાનપણું, અતિસક્રિયતા અને આવેગશીલતાનો એવો સતત ગાળો જોવા મળે છે જે બાળકના સામાન્ય વિકાસ અને અભ્યાસમાં અવરોધ ઊભો કરે છે. આ કોઈ ખરાબ પરવરિશ, શિસ્તના અભાવ કે બૌદ્ધિક ખામીનું પરિણામ નથી, પરંતુ મગજના એક્ઝિક્યુટિવ ફંક્શનિંગ માટે જવાબદાર ન્યુરોલોજીકલ પ્રક્રિયાઓ સાથે જોડાયેલું છે. ક્લિનિકલ મૂલ્યાંકન માટે જરૂરી છે કે આ લક્ષણો ઘર અને શાળા બંને જગ્યાએ ઓછામાં ઓછા 6 મહિનાથી જોવા મળતા હોય.',
  },
  typicalDevelopmentVsRedFlags: [
    {
      ageRange: {
        en: 'Preschool & Early Childhood (3–5 years)',
        hi: 'प्री-स्कूल व आरंभिक बचपन (3–5 वर्ष)',
        gu: 'પ્રારંભિક બાળપણ (3–5 વર્ષ)',
      },
      typicalDevelopment: {
        en: 'Energetic play, short attention span for adult-directed tasks (5–15 minutes), occasional difficulty taking turns, and bursts of excitement or tantrums when tired or overwhelmed.',
        hi: 'ऊर्जावान खेल, बड़ों द्वारा दिए गए कार्यों पर कम समय (5–15 मिनट) ध्यान टिकना, कभी-कभार बारी का इंतजार न कर पाना, और थकान में नखरे दिखाना सामान्य विकास का हिस्सा है।',
        gu: 'રમતમાં વધુ ઉત્સાહ, વડીલોની સૂચના પર થોડો સમય (5-15 મિનિટ) જ ધ્યાન ટકવું, વારો આવવાની રાહ ન જોવી અને થાક લાગે ત્યારે ગુસ્સો કરવો સામાન્ય વિકાસ છે.',
      },
      redFlagsClinicalConcern: {
        en: 'Pervasive, unquenchable motor activity ("driven by a motor"), inability to settle even for 2–3 minutes with high-interest activities, repeated physical danger due to total lack of risk awareness, and severe peer exclusion in preschool settings.',
        hi: 'निरंतर और अत्यधिक भागदौड़ ("मानो मोटर लगी हो"), अपनी पसंद की गतिविधियों में भी 2-3 मिनट शांत न बैठ पाना, खतरे की बिल्कुल समझ न होने से बार-बार चोट लगना, और प्ले-स्कूल में साथी बच्चों के साथ बिल्कुल तालमेल न बैठ पाना।',
        gu: 'સતત અને બેકાબૂ દોડધામ ("જાણે મોટર ચાલુ હોય"), મનપસંદ પ્રવૃત્તિમાં પણ 2 મિનિટ શાંત ન બેસવું, જોખમનો સહેજ પણ ખ્યાલ ન હોવાથી અકસ્માત થવો અને પ્લેસ્કૂલમાં સાથી બાળકો સાથે ગંભીર મુશ્કેલી.',
      },
    },
    {
      ageRange: {
        en: 'Primary School Years (6–11 years)',
        hi: 'प्राथमिक विद्यालय (6–11 वर्ष)',
        gu: 'પ્રાથમિક શાળા (6–11 વર્ષ)',
      },
      typicalDevelopment: {
        en: 'Daydreaming during tedious lectures, occasionally losing a pencil or eraser, needing gentle reminders to finish homework, and becoming restless during long sitting periods.',
        hi: 'उबाऊ कक्षा में कभी-कभार खो जाना, पेंसिल या रबर कभी-कभी खो देना, गृहकार्य के लिए याद दिलाना पड़ना, और बहुत देर बैठने पर बेचैन होना सामान्य है।',
        gu: 'ક્યારેક કંટાળાજનક તાસમાં ધ્યાન ભટકવું, ક્યારેક પેન્સિલ-રબર ભૂલી જવું, હોમવર્ક માટે યાદ કરાવવું પડવું અને લાંબો સમય બેસવામાં અકળામણ થવી સામાન્ય છે.',
      },
      redFlagsClinicalConcern: {
        en: 'Chronic inability to complete classroom work despite understanding concepts, losing essential school materials almost daily, blurting out answers continuously, physically leaving the desk repeatedly, and chronic disciplinary actions across multiple teachers.',
        hi: 'संकल्पना समझने के बावजूद कक्षा का काम कभी पूरा न कर पाना, रोजाना कॉपी-किताबें या पेंसिल बॉक्स खोना, बिना पूछे लगातार बीच में बोलना, बार-बार सीट छोड़कर घूमना, और सभी शिक्षकों से लगातार शिकायतें मिलना।',
        gu: 'ખ્યાલ હોવા છતાં વર્ગકાર્ય પૂરું ન કરી શકવું, દરરોજ શાળાની જરૂરી વસ્તુઓ ગુમાવી દેવી, પૂછ્યા વિના વચ્ચે બોલી પડવું, વારંવાર બેઠક છોડીને ભાગવું અને શિક્ષકો તરફથી સતત ગંભીર ફરિયાદો.',
      },
    },
    {
      ageRange: {
        en: 'Adolescence (12–18 years)',
        hi: 'किशोरावस्था (12–18 वर्ष)',
        gu: 'કિશોરાવસ્થા (12–18 વર્ષ)',
      },
      typicalDevelopment: {
        en: 'Procrastinating on uninteresting subjects, mood fluctuations, seeking independence from parental supervision, and occasional disorganization with multi-subject binders.',
        hi: 'नापसंद विषयों में टालमटोल, मनोदशा में उतार-चढ़ाव, स्वायत्तता की चाहत, और कई विषयों की कॉपियों को व्यवस्थित रखने में कभी-कभार की उलझन।',
        gu: 'નાપસંદ વિષયોમાં આળસ, મૂડમાં બદલાવ, પોતાની રીતે નિર્ણયો લેવાની ઈચ્છા અને અભ્યાસના આયોજનમાં ક્યારેક થતી મુશ્કેલી.',
      },
      redFlagsClinicalConcern: {
        en: 'Severe internal restlessness, chronic failure in multi-step assignments, pervasive time-blindness leading to academic crisis, high-risk impulsive behaviors (reckless driving, substance experimentation), and profound demoralization or secondary anxiety.',
        hi: 'तीव्र आंतरिक बेचैनी, बहु-चरणीय प्रोजेक्ट्स या परीक्षा की तैयारी में भारी विफलता, समय का बिल्कुल अंदाजा न होना, अत्यधिक जोखिम भरे या आवेगी व्यवहार, और लगातार नाकामी से उत्पन्न आत्म-ग्लानि व अवसाद।',
        gu: 'તીવ્ર આંતરિક બેચેની, પ્રોજેક્ટ કે પરીક્ષાનું આયોજન કરવામાં સતત નિષ્ફળતા, સમયનું કોઈ ભાન ન રહેવું, જોખમી આવેગી નિર્ણયો અને સતત નિષ્ફળતાથી ઊભો થતો આત્મવિશ્વાસનો અભાવ કે ચિંતા.',
      },
    },
  ],
  commonSigns: [
    {
      category: {
        en: 'Inattention & Executive Functioning',
        hi: 'असावधानी एवं कार्य संचालन',
        gu: 'બેધ્યાનપણું અને આયોજન શક્તિ',
      },
      signs: {
        en: [
          'Frequent careless errors in schoolwork despite knowing the answers',
          'Difficulty sustaining attention in tasks or play activities',
          'Appears not to listen even when spoken to directly',
          'Struggles to organize multi-step assignments, backpacks, and study materials',
          'Reluctance or avoidance of tasks requiring sustained mental effort (e.g., long homework)',
          'Frequently misplacing books, stationery, spectacles, or assignments',
        ],
        hi: [
          'उत्तर जानने के बावजूद स्कूल के काम में छोटी-मोटी असावधानी की गलतियां करना',
          'पढ़ाई या खेल में ध्यान बनाए रखने में भारी कठिनाई',
          'सीधे बात करने पर भी ऐसा लगना जैसे बच्चा सुन नहीं रहा है',
          'किताबें, बैग और गृहकार्य व्यवस्थित करने में लगातार उलझन',
          'जिन कार्यों में लंबे मानसिक श्रम की जरूरत हो (जैसे लंबा होमवर्क), उनसे बचना',
          'किताबें, पेंसिल, चश्मा या स्कूल की जरूरी चीजें बार-बार खो देना',
        ],
        gu: [
          'જવાબ આવડતો હોવા છતાં લખાણમાં બેધ્યાનપણાને કારણે ભૂલો થવી',
          'અભ્યાસ કે રમતમાં લાંબો સમય એકાગ્રતા ટકાવી રાખવામાં તકલીફ',
          'સીધી વાત કરવા છતાં બાળક સાંભળતું ન હોય તેવું લાગવું',
          'દફતર, પુસ્તકો અને હોમવર્કનું આયોજન કરવામાં સતત મૂંઝવણ',
          'વધુ માનસિક પરિશ્રમ વાળા કામથી દૂર ભાગવું',
          'પેન્સિલ, પુસ્તક, ચશ્મા જેવી રોજિંદી ચીજો વારંવાર ગુમાવી દેવી',
        ],
      },
    },
    {
      category: {
        en: 'Hyperactivity & Physical Restlessness',
        hi: 'अतिसक्रियता एवं शारीरिक बेचैनी',
        gu: 'અતિસક્રિયતા અને શારીરિક બેચેની',
      },
      signs: {
        en: [
          'Fidgets with hands or feet, or squirming in seat continuously',
          'Leaves seat in classroom or dining table when remaining seated is expected',
          'Running or climbing excessively in inappropriate situations',
          'Unable to play or engage in leisure activities quietly',
          'Talking excessively; acting as if driven by an internal motor',
        ],
        hi: [
          'हाथ-पैर हिलाते रहना या कुर्सी पर लगातार छटपटाना',
          'कक्षा में या खाने की मेज पर जहां बैठना जरूरी हो, वहां बार-बार खड़े हो जाना',
          'अनुचित समय या स्थानों पर अत्यधिक कूद-फांद करना',
          'शांतिपूर्ण या शांत खेलों में भाग लेने में असमर्थ होना',
          'अत्यधिक बातें करना; ऐसा महसूस होना कि वह लगातार किसी आंतरिक मोटर से संचालित है',
        ],
        gu: [
          'હાથ-પગ સતત હલાવવા અથવા બેઠક પર અકળાયા કરવું',
          'વર્ગખંડ કે જમવાના ટેબલ પર શાંતિથી બેસવાની અપેક્ષા હોય ત્યારે ઊભા થઈ જવું',
          'અયોગ્ય સ્થળોએ વધુ પડતી દોડાદોડ કે કૂદાકૂદ કરવી',
          'શાંતિપૂર્ણ રમતોમાં રમવામાં મુશ્કેલી અનુભવવી',
          'અતિશય બોલવું અને સતત અંદરથી કોઈ દબાણ હોય તેમ ઉતાવળમાં રહેવું',
        ],
      },
    },
    {
      category: {
        en: 'Impulsivity & Social Interaction',
        hi: 'आवेगशीलता एवं सामाजिक संपर्क',
        gu: 'આવેગશીલતા અને સામાજિક વ્યવહાર',
      },
      signs: {
        en: [
          'Blurting out answers before questions have been completed',
          'Severe difficulty waiting for one\'s turn in games, queues, or conversations',
          'Interrupting or intruding on others\' discussions, games, or activities',
          'Acting without considering obvious safety risks (e.g., darting into traffic)',
          'Frequent social conflicts due to emotional impulsivity and difficulty reading peer cues',
        ],
        hi: [
          'शिक्षक द्वारा प्रश्न पूरा करने से पहले ही उत्तर बोल देना',
          'खेलों, कतारों या बातचीत में अपनी बारी की प्रतीक्षा करने में भारी कठिनाई',
          'दूसरों की बातचीत या खेल में लगातार टोकना या बिना अनुमति शामिल होना',
          'सुरक्षा जोखिम सोचे बिना अचानक कदम उठाना (जैसे सड़क पर अचानक दौड़ पड़ना)',
          'आवेगी प्रतिक्रियाओं के कारण साथियों के साथ बार-बार तकरार होना',
        ],
        gu: [
          'શિક્ષક પ્રશ્ન પૂરો કરે તે પહેલાં જ જવાબ બોલી ઊઠવું',
          'રમતમાં કે લાઈનમાં વારો આવે ત્યાં સુધી ધીરજ ન રાખી શકવી',
          'બીજાની વાત કે રમતમાં વચ્ચે કૂદી પડવું',
          'જોખમનો વિચાર કર્યા વિના અચાનક પગલું ભરવું (જેમ કે રોડ પર દોડી જવું)',
          'આવેગી પ્રતિક્રિયાઓના કારણે સાથી મિત્રો સાથે વારંવાર ઝઘડા થવા',
        ],
      },
    },
  ],
  whenToSeekHelp: {
    en: 'Consult a qualified child & adolescent psychiatrist or developmental pediatrician when inattention, hyperactivity, or impulsivity have persisted for at least 6 months, are significantly greater than expected for the child\'s developmental age, and cause clear impairment in at least two separate settings (such as academic struggles at school and constant behavioral strain at home). Early evaluation prevents secondary complications such as severe academic demoralization, low self-worth, and peer rejection.',
    hi: 'बाल एवं किशोर मनोचिकित्सक (Child Psychiatrist) या विकासात्मक बाल रोग विशेषज्ञ से तब परामर्श लें जब असावधानी, अतिसक्रियता या आवेगशीलता के लक्षण कम से कम 6 महीने से बने हों, बच्चे की उम्र के सामान्य स्तर से काफी अधिक हों, और कम से कम दो परिवेशों (जैसे स्कूल में पढ़ाई का संकट और घर में तनाव) में स्पष्ट रुकावट पैदा कर रहे हों। समय पर मूल्यांकन से बच्चे के आत्मसम्मान और भविष्य की शिक्षा की रक्षा होती है।',
    gu: 'જ્યારે બેધ્યાનપણું, અતિસક્રિયતા કે આવેગશીલતાના લક્ષણો ઓછામાં ઓછા 6 મહિનાથી ચાલુ હોય, બાળકની ઉંમરની સરખામણીમાં ઘણી વધારે હોય અને ઓછામાં ઓછી બે અલગ જગ્યાએ (શાળા અને ઘર) દૈનિક જીવનમાં નોંધપાત્ર અડચણ ઊભી કરતી હોય ત્યારે બાળ મનોચિકિત્સકની સલાહ લેવી જોઈએ. સમયસર તપાસથી બાળકનો આત્મવિશ્વાસ તૂટતો બચે છે.',
  },
  causesAndRiskFactors: {
    en: 'ADHD is a polygenic, highly heritable neurodevelopmental condition (~70–80% heritability). Neuroimaging demonstrates subtle maturational delays in fronto-striatal brain circuits and differences in dopamine and norepinephrine neurotransmission. Non-genetic contributors include preterm birth, very low birth weight, maternal smoking or alcohol exposure during pregnancy, and early lead exposure. ADHD is definitively NOT caused by dietary sugar, excessive screen time alone, poor moral discipline, or "lazy" parenting—though chaotic environments can exacerbate symptom expression.',
    hi: 'एडीएचडी एक अत्यधिक आनुवंशिक (लगभग 70-80% हेरिटेबिलिटी) और न्यूरोबायोलॉजिकल स्थिति है। मस्तिष्क के स्कैन में फ्रंटो-स्ट्रायटल सर्किट के विकास में देरी और डोपामाइन व नॉर-एपिनेफ्रिन रसायनों के संतुलन में अंतर दिखता है। अन्य जोखिम कारकों में समय से पहले जन्म (प्रिमेच्योरिटी), जन्म के समय बहुत कम वजन और गर्भावस्था में विषाक्त पदार्थों का संपर्क शामिल हैं। एडीएचडी ज्यादा चीनी खाने, केवल स्क्रीन देखने या खराब अनुशासन से उत्पन्न नहीं होता, हालांकि तनावपूर्ण वातावरण लक्षणों को बढ़ा सकता है।',
    gu: 'એડીએચડી એ જનીનિક અને ન્યુરોબાયોલોજીકલ સ્થિતિ છે જેની વારસાગત શક્યતા 70-80% જેટલી ઊંચી હોય છે. મગજના સ્કેનમાં ફ્રન્ટલ સર્કિટ્સના વિકાસમાં વિલંબ અને ડોપામાઇન જેવા ન્યુરોટ્રાન્સમીટરની ભૂમિકા સ્પષ્ટ થઈ છે. પ્રિમેચ્યોર જન્મ કે જન્મ સમયે ઓછું વજન પણ જોખમ વધારે છે. એડીએચડી ખોરાકમાં ખાંડ, સામાન્ય સ્ક્રીન ટાઈમ કે શિસ્તના અભાવથી થતો નથી.',
  },
  schoolAndHomeImpact: {
    en: 'At school, children with ADHD often receive frequent negative feedback, struggle with timed examinations, lose marks due to incomplete worksheets, and may be unfairly labeled "disobedient" or "careless." At home, routine daily activities—waking up, brushing, getting dressed, completing homework, and bedtime—frequently become intense battlegrounds, exhausting parents and straining sibling relationships.',
    hi: 'स्कूल में, एडीएचडी से प्रभावित बच्चों को अक्सर डांट या नकारात्मक टिप्पणियां मिलती हैं। वे समय पर परीक्षा पूरी नहीं कर पाते और उन्हें अक्सर "लापरवाह" या "जिद्दी" समझ लिया जाता है। घर में, सुबह उठने से लेकर ब्रश करने, तैयार होने और होमवर्क करने जैसी सामान्य दिनचर्याएं दैनिक कलह का कारण बन जाती हैं, जिससे पूरे परिवार में तनाव उत्पन्न होता है।',
    gu: 'શાળામાં આવા બાળકોને સતત ઠપકો સાંભળવો પડે છે અને અધૂરા લખાણને લીધે માર્ક્સ કપાય છે. શિક્ષકો ઘણીવાર તેમને "આળસુ" કે "તોફાની" માની લે છે. ઘરમાં રોજિંદા કાર્યો—જેમ કે સવારે તૈયાર થવું, હોમવર્ક કરવું અને સૂવું—માથાકૂટનું કારણ બને છે, જેનાથી વાલીઓ માનસિક થાક અનુભવે છે.',
  },
  assessmentOverview: {
    en: 'A comprehensive child psychiatric evaluation is thorough and multi-source. It includes a clinical interview with parents covering developmental history, direct observation of the child, standardized multi-informant rating scales completed independently by parents and teachers (e.g., Vanderbilt ADHD Diagnostic Rating Scales or Conners-3), review of school notebooks and report cards, and screening to rule out visual, auditory, thyroid, sleep-disordered breathing, or specific learning disorders.',
    hi: 'एक व्यापक बाल मनोरोग मूल्यांकन में कई स्रोत शामिल होते हैं: माता-पिता के साथ विकासात्मक इतिहास पर विस्तृत साक्षात्कार, बच्चे का प्रत्यक्ष अवलोकन, माता-पिता और शिक्षकों द्वारा स्वतंत्र रूप से भरे जाने वाले मानकीकृत रेटिंग स्केल (जैसे वैंडरबिल्ट या कॉनर्स स्केल), स्कूल की कॉपियों का विश्लेषण, और दृष्टि, श्रवण, थायराइड, नींद की समस्याएं या लर्निंग डिसऑर्डर को खारिज करने के लिए मेडिकल जांच।',
    gu: 'સંપૂર્ણ તપાસમાં બાળકના બાળપણથી અત્યાર સુધીના વિકાસનો ઇતિહાસ, બાળક સાથે સીધી વાતચીત, વાલીઓ અને શિક્ષકો દ્વારા ભરાતા પ્રમાણિત રેટિંગ સ્કેલ (જેમ કે વાન્ડરબિલ્ટ સ્કેલ), શાળાની નોટબુક્સનું નિરીક્ષણ અને આંખ, કાન, થાઇરોઇડ કે ઊંઘની તકલીફો તપાસવાનો સમાવેશ થાય છે.',
  },
  treatmentApproach: {
    parentTrainingAndBehavioral: {
      en: 'Behavioral Parent Training (BPT / PMT) is the foundational first-line psychosocial intervention. It equips parents with structured techniques: immediate positive reinforcement, chunking commands into single steps, token economies, visual schedules, and calm, predictable consequences rather than harsh punishment.',
      hi: 'बिहेवियरल पेरेंट ट्रेनिंग (BPT / PMT) प्राथमिक मनोवैज्ञानिक उपचार है। इसमें माता-पिता को सकारात्मक प्रोत्साहन, कार्यों को छोटे चरणों में बांटना, विजुअल चार्ट बनाना और डांट-फटकार के स्थान पर शांत, सुसंगत परिणाम तय करने का प्रशिक्षण दिया जाता है।',
      gu: 'બિહેવિયરલ પેરન્ટ ટ્રેનિંગ (BPT) એ પાયાની સારવાર છે. આમાં વાલીઓને બાળકના સારા વર્તનને તરત બિરદાવવા, સૂચનાઓને નાના પગલાંમાં વહેંચવા, વિઝ્યુઅલ ચાર્ટ વાપરવા અને સજા કરવાને બદલે શાંત નિયમો બનાવવાની પદ્ધતિઓ શીખવવામાં આવે છે.',
    },
    psychotherapy: {
      en: 'For older children and adolescents, Cognitive Behavioral Therapy (CBT) focused on organizational skills, time management, emotional regulation, and social problem-solving helps build lifelong executive functioning strategies.',
      hi: 'बड़े बच्चों और किशोरों के लिए संज्ञानात्मक व्यवहार थेरेपी (CBT) कार्य-संगठन, समय प्रबंधन, भावनाओं के नियंत्रण और साथियों के साथ सकारात्मक बातचीत की रणनीतियां सिखाती है।',
      gu: 'મોટા બાળકો અને કિશોરો માટે કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) સમય વ્યવસ્થાપન, વસ્તુઓનું આયોજન અને આવેગો પર કાબૂ રાખવાની કુશળતા વિકસાવવામાં મદદ કરે છે.',
    },
    schoolSupportAndAccommodations: {
      en: 'Classroom accommodations include preferential front-row seating away from windows/doors, breaking long tests into timed chunks, permission for movement breaks, simplified written instructions, and official board examination concessions under the Rights of Persons with Disabilities (RPwD) Act 2016 (such as extra compensatory time).',
      hi: 'स्कूल में सहायता: बच्चे को आगे बैठाना, खिड़कियों/दरवाजों से दूर रखना, लंबे प्रश्नों को छोटे हिस्सों में बांटना, बीच में संक्षिप्त मूवमेंट ब्रेक देना, और दिव्यांगजन अधिकार अधिनियम (RPwD Act 2016) के तहत बोर्ड परीक्षाओं में अतिरिक्त समय जैसी आधिकारिक रियायतें दिलाना।',
      gu: 'શાળા સહાય: બાળકને આગળની બેઠક આપવી, બારી-બારણાંથી દૂર રાખવું, પરીક્ષામાં નાના બ્રેક્સ આપવા અને RPwD એકટ 2016 હેઠળ બોર્ડ પરીક્ષાઓમાં વધારાનો સમય જેવી સવલતો અપાવવી.',
    },
    medicationGuidance: {
      en: 'When moderate-to-severe functional impairment persists, approved medications (stimulants like Methylphenidate or non-stimulants like Atomoxetine) may be prescribed by a child psychiatrist. Medications act by optimizing prefrontal dopamine and norepinephrine transmission. They are conservative, carefully titrated, monitored regularly for appetite and growth, and combined with behavioral interventions—never used as a substitute for environmental support.',
      hi: 'जब मध्यम से गंभीर स्तर की कठिनाई बनी रहे, तो बाल मनोचिकित्सक द्वारा मिथाइलफेनिडेट (Methylphenidate) या एटोमॉक्सेटिन (Atomoxetine) जैसी स्वीकृत दवाएं सुझाई जा सकती हैं। ये दवाएं मस्तिष्क में डोपामाइन और नॉर-एपिनेफ्रिन के स्तर को संतुलित करती हैं। इनका उपयोग बच्चे की भूख, नींद और विकास की नियमित निगरानी के साथ बहुत सावधानी से किया जाता है।',
      gu: 'જ્યારે દૈનિક જીવનમાં નોંધપાત્ર અડચણ ચાલુ રહે ત્યારે મનોચિકિત્સકની સલાહ મુજબ મિથાઈલફેનિડેટ કે એટોમોક્સેટિન જેવી દવાઓ આપવામાં આવે છે. આ દવાઓ મગજના રસાયણોનું સંતુલન સુધારે છે. બાળકના વજન અને ઊંઘની નિયમિત તપાસ સાથે આ દવાઓ ખૂબ જ સાવચેતીથી આપવામાં આવે છે.',
    },
  },
  parentCaregiverGuidance: [
    {
      en: 'Give one clear instruction at a time. Make eye contact before speaking, and ask the child to gently repeat what was requested.',
      hi: 'एक समय में केवल एक स्पष्ट निर्देश दें। बोलने से पहले बच्चे से नजरें मिलाएं और सुनिश्चित करें कि उसने बात समझ ली है।',
      gu: 'એક સમયે એક જ સ્પષ્ટ સૂચના આપો. વાત કરતી વખતે બાળકની આંખમાં જુઓ અને ખાતરી કરો કે તેણે સાંભળ્યું છે.',
    },
    {
      en: 'Use visual daily schedules and timers. A large wall calendar or a visual countdown timer helps make abstract time concrete.',
      hi: 'दीवार पर विजुअल शेड्यूल और टाइमर लगाएं। समय का विजुअल प्रदर्शन बच्चे को कार्यों को समय पर पूरा करने में मदद करता है।',
      gu: 'ઘરમાં દિનચર્યા માટે વિઝ્યુઅલ ટાઇમટેબલ અને ટાઈમર વાપરો. આનાથી બાળકને સમયની મર્યાદા સમજવામાં સરળતા રહે છે.',
    },
    {
      en: 'Praise specific positive behaviors immediately. Say "I loved how neatly you packed your math book just now" rather than generic praise.',
      hi: 'सकारात्मक व्यवहार की तुरंत और स्पष्ट शब्दों में प्रशंसा करें। जैसे कहें, "मुझे बहुत अच्छा लगा कि तुमने गणित की कॉपी तुरंत बैग में रख ली।"',
      gu: 'સારા વર્તનની તરત જ ચોક્કસ શબ્દોમાં પ્રશંસા કરો. સામાન્ય વખાણ કરવાને બદલે જે સારું કર્યું હોય તે સ્પષ્ટ કહો.',
    },
    {
      en: 'Protect designated physical movement time. Daily active sports, swimming, or outdoor play burn physical restlessness and improve cognitive focus.',
      hi: 'शारीरिक गतिविधि और खेलकूद का समय निश्चित रखें। शाम को दौड़-भाग, साइकिल चलाना या आउटडोर खेल आंतरिक बेचैनी को शांत करते हैं।',
      gu: 'શારીરિક રમતો અને કસરત માટે નિયમિત સમય ફાળવો. સાયકલ ચલાવવી કે આઉટડોર રમતો બાળકની વધારાની ઊર્જાને યોગ્ય દિશા આપે છે.',
    },
  ],
  illustrativeExamples: [
    {
      en: 'Kabir, an 8-year-old boy in Delhi, was described by his teachers as bright and affectionate but "incapable of sitting still or completing even three sentences in his English notebook." At home, every morning was a battle of tears over finding socks, packing the bag, and eating breakfast. His mother felt exhausted and guilty, assuming she was failing as a parent. A structured child psychiatric evaluation using teacher Vanderbilt scales confirmed ADHD combined presentation. With a combination of behavioral parent training, classroom accommodations (chunked assignments and movement breaks), and low-dose monitored medication, Kabir\'s grades stabilized, and morning conflict reduced dramatically.',
      hi: 'दिल्ली के 8 वर्षीय कबीर को उसके शिक्षक होशियार मानते थे लेकिन वह कक्षा में 5 मिनट भी शांत नहीं बैठ पाता था और कॉपी में अधूरा काम छोड़ता था। घर में रोज सुबह जुराबें ढूंढने, बस्ता लगाने और नाश्ते को लेकर भारी कलह होती थी। उसकी मां खुद को दोषी मानती थी। जब बाल मनोचिकित्सक ने शिक्षक और अभिभावक के वैंडरबिल्ट फॉर्म के जरिए मूल्यांकन किया, तो एडीएचडी की पुष्टि हुई। पेरेंट ट्रेनिंग, स्कूल में छोटे ब्रेक्स और डॉक्टर की निगरानी में दवा शुरू करने से कबीर की पढ़ाई में सुधार हुआ और घर का तनाव शांत हुआ।',
      gu: 'અમદાવાદના 8 વર્ષના કબીરને તેના શિક્ષકો બુદ્ધિશાળી ગણાવતા પણ તે વર્ગમાં એક ઘડી શાંત બેસી શકતો નહોતો અને નોટબુકમાં કામ પૂરું કરતો નહોતો. ઘરમાં રોજ સવારે દફતર ભરવા અને તૈયાર થવા બાબતે ઝઘડા થતા. વાલીઓએ તપાસ કરાવી ત્યારે એડીએચડીનું નિદાન થયું. બિહેવિયરલ પેરન્ટિંગ, શાળામાં નાના બ્રેક્સ અને યોગ્ય સારવારથી કબીરના અભ્યાસમાં મોટો સુધારો આવ્યો અને ઘરનું વાતાવરણ શાંત બન્યું.',
    },
    {
      en: 'Ananya, a 14-year-old student in Bengaluru, was never physically disruptive, so her struggles went unnoticed for years. However, entering high school, the volume of coursework overwhelmed her. She spent 5 hours every evening at her desk but produced barely a page of homework, constantly distracted by background thoughts, losing track of deadlines, and crying from exhaustion. Her parents suspected depression or laziness. A psychiatric consultation recognized the inattentive presentation of ADHD. Learning executive-functioning strategies, utilizing visual organizers, and receiving targeted medical support restored her academic confidence and lifted her secondary anxiety.',
      hi: 'बेंगलुरु की 14 वर्षीया अनन्या कभी कक्षा में शोर नहीं मचाती थी, इसलिए उसकी परेशानी वर्षों तक अनदेखी रही। 9वीं कक्षा में आने पर पढ़ाई का बोझ बढ़ते ही वह शाम को 5 घंटे मेज पर बैठकर भी एक पन्ना नहीं लिख पाती थी। उसका ध्यान लगातार भटकता था और वह रोने लगती थी। माता-पिता को लगा कि वह आलसी या उदास है। मनोचिकित्सकीय परामर्श में एडीएचडी (इनअटेंटिव प्रकार) की पहचान हुई। कार्य-प्रबंधन की तकनीकें सीखने और लक्षित मार्गदर्शन से उसका आत्मविश्वास वापस लौट आया।',
      gu: 'સુરતની 14 વર્ષની અનન્યા વર્ગમાં ક્યારેય તોફાન કરતી નહોતી, તેથી કોઈનું ધ્યાન ગયું નહીં. પરંતુ હાઈસ્કૂલમાં આવતાં તે સાંજે કલાકો સુધી બેસવા છતાં હોમવર્ક પૂરું કરી શકતી નહોતી અને સતત તણાવમાં રડવા લાગતી. વાલીઓને તે આળસુ લાગતી હતી. મનોચિકિત્સા તપાસમાં એડીએચડી (બેધ્યાનપણું) જણાયું. યોગ્ય આયોજન પદ્ધતિઓ અને સારવારથી તેનો આત્મવિશ્વાસ પાછો આવ્યો.',
    },
  ],
  evidenceHighlights: [
    {
      statistic: '~5–8%',
      context: {
        en: 'Estimated prevalence of ADHD among school-age children in Indian epidemiologic studies and Indian Academy of Pediatrics (IAP) clinical consensus.',
        hi: 'भारतीय महामारी विज्ञान अध्ययनों और इंडियन एकेडमी ऑफ पीडियाट्रिक्स (IAP) के अनुसार स्कूली बच्चों में एडीएचडी का अनुमानित प्रसार।',
        gu: 'ભારતીય અભ્યાસો અને ઇન્ડિયન એકેડેમી ઓફ પીડિયાટ્રિક્સ (IAP) અનુસાર શાળાના બાળકોમાં એડીએચડીનું અંદાજિત પ્રમાણ.',
      },
      source: 'Indian Academy of Pediatrics (IAP) Guidelines & Indian Journal of Psychiatry',
    },
    {
      statistic: '70–80%',
      context: {
        en: 'High genetic heritability rate of ADHD, demonstrating its biological neurodevelopmental nature rather than environmental causation.',
        hi: 'एडीएचडी की उच्च आनुवंशिक दर, जो यह सिद्ध करती है कि यह एक जैविक न्यूरोडेवलपमेंटल स्थिति है, न कि खराब परवरिश का परिणाम।',
        gu: 'એડીએચડીની આનુવંશિકતા દર, જે સાબિત કરે છે કે આ એક જૈવિક ન્યુરોડેવલપમેન્ટલ સ્થિતિ છે.',
      },
      source: 'Faraone et al., World Federation of ADHD International Consensus Statement',
    },
  ],
  mythsVsFacts: [
    {
      myth: {
        en: 'Myth: ADHD is just bad parenting and an excuse for lack of discipline.',
        hi: 'भ्रांति: एडीएचडी केवल खराब परवरिश और अनुशासन की कमी का बहाना है।',
        gu: 'માન્યતા: એડીએચડી એ માત્ર ખરાબ ઉછેર અને શિસ્તના અભાવનું બહાનું છે.',
      },
      fact: {
        en: 'Fact: ADHD is a scientifically verified neurodevelopmental disorder with clear differences in brain structure, dopamine pathways, and executive functioning circuits confirmed by neuroimaging worldwide.',
        hi: 'तथ्य: एडीएचडी एक वैज्ञानिक रूप से प्रमाणित न्यूरोडेवलपमेंटल स्थिति है जिसमें मस्तिष्क के डोपामाइन पाथवे और कार्य-संचालन तंत्र में स्पष्ट जैविक अंतर पाए जाते हैं।',
        gu: 'હકીકત: એડીએચડી એ વિશ્વભરમાં સાયન્ટિફિક સ્કેન દ્વારા સાબિત થયેલી મગજના રસાયણો અને વિકાસની સ્થિતિ છે, કોઈ બહાનું નથી.',
      },
    },
    {
      myth: {
        en: 'Myth: Children with ADHD will simply "outgrow it" by adolescence, so no intervention is needed.',
        hi: 'भ्रांति: बच्चे बड़े होकर एडीएचडी से अपने आप बाहर आ जाएंगे, इसलिए किसी इलाज की जरूरत नहीं है।',
        gu: 'માન્યતા: મોટા થતાં બાળક આપોઆપ એડીએચડીમાંથી બહાર આવી જશે, એટલે કોઈ સારવારની જરૂર નથી.',
      },
      fact: {
        en: 'Fact: While motor hyperactivity often moderates into internal restlessness in adolescence, executive dysfunction and inattention persist into adulthood in over 60% of cases without structured intervention.',
        hi: 'तथ्य: यद्यपि शारीरिक अतिसक्रियता किशोरावस्था में आंतरिक बेचैनी में बदल सकती है, लेकिन 60% से अधिक मामलों में कार्य-प्रबंधन और असावधानी की समस्याएं उचित सहयोग के बिना वयस्कता तक बनी रहती हैं।',
        gu: 'હકીકત: 60% થી વધુ કિસ્સાઓમાં આ લક્ષણો પુખ્તાવસ્થા સુધી ચાલુ રહે છે. યોગ્ય માર્ગદર્શન વિના ભવિષ્યમાં શિક્ષણ અને નોકરીમાં મુશ્કેલી પડી શકે છે.',
      },
    },
  ],
  faqs: [
    {
      question: {
        en: 'How can my child have ADHD if they can focus on video games for three hours?',
        hi: 'यदि मेरा बच्चा 3 घंटे तक वीडियो गेम पर ध्यान लगा सकता है, तो उसे एडीएचडी कैसे हो सकता है?',
        gu: 'જો મારું બાળક વિડીયો ગેમમાં ૩ કલાક ધ્યાન આપી શકતું હોય તો તેને એડીએચડી કેવી રીતે હોઈ શકે?',
      },
      answer: {
        en: 'This is known as "hyperfocus." Video games provide continuous, instant dopamine rewards and high sensory stimulation, which artificially engages the brain\'s reward circuits. ADHD is not an absolute inability to pay attention; it is a neurological difficulty in regulating and directing attention toward tasks that do not offer immediate intrinsic stimulation (such as schoolwork or chores).',
        hi: 'इसे "हाइपरफोकस" कहा जाता है। वीडियो गेम मस्तिष्क को तुरंत डोपामाइन और तीव्र उत्तेजना प्रदान करते हैं। एडीएचडी ध्यान की पूर्ण कमी नहीं है, बल्कि ध्यान को नियंत्रित करने और उन कार्यों पर लगाने की कठिनाई है जो तुरंत रोमांच या पुरस्कार नहीं देते (जैसे होमवर्क या घरेलू काम)।',
        gu: 'આને "હાયપરફોકસ" કહેવાય છે. વિડીયો ગેમ્સ મગજને સતત અને તાત્કાલિક ડોપામાઇન રિવોર્ડ આપે છે. એડીએચડી એ ધ્યાનનો અભાવ નથી, પરંતુ જ્યાં ત્વરિત મનોરંજન ન મળતું હોય (જેમ કે અભ્યાસ) ત્યાં ધ્યાન ટકાવી રાખવાની મગજની મુશ્કેલી છે.',
      },
    },
    {
      question: {
        en: 'Will ADHD medications make my child a "zombie" or lead to addiction?',
        hi: 'क्या एडीएचडी की दवाएं मेरे बच्चे को सुस्त ("जॉम्बी") बना देंगी या इसकी लत लग जाएगी?',
        gu: 'શું એડીએચડીની દવાઓથી બાળક સુસ્ત થઈ જશે કે તેને દવાની આદત પડી જશે?',
      },
      answer: {
        en: 'No. When prescribed and monitored by a qualified child psychiatrist at appropriate doses, medications normalize attention and impulse control without changing the child\'s personality. If a child feels dull or lethargic, the dose is too high and must be adjusted. Comprehensive research also demonstrates that treating ADHD effectively in childhood actually lowers the risk of future substance abuse.',
        hi: 'नहीं। जब एक योग्य बाल मनोचिकित्सक द्वारा सही मात्रा में दवा दी जाती है, तो वह बच्चे के व्यक्तित्व को बदले बिना उसकी एकाग्रता में सुधार करती है। यदि बच्चा सुस्त महसूस करे, तो डॉक्टर खुराक समायोजित करते हैं। शोध यह भी दर्शाता है कि एडीएचडी का सही उपचार भविष्य में नशे के जोखिम को कम करता है।',
        gu: 'ના. જ્યારે લાયકાત ધરાવતા બાળ મનોચિકિત્સક યોગ્ય માત્રામાં દવા આપે છે ત્યારે બાળકના સ્વભાવમાં કોઈ નકારાત્મક ફેરફાર થતો નથી. સંશોધનો દર્શાવે છે કે યોગ્ય સારવારથી ભવિષ્યમાં વ્યસન થવાનું જોખમ ઘટે છે.',
      },
    },
  ],
  references: [
    {
      title: 'Indian Academy of Pediatrics (IAP) Guidelines on Diagnosis and Management of Attention Deficit Hyperactivity Disorder',
      source: 'Indian Pediatrics Journal',
      year: 2021,
    },
    {
      title: 'Indian Psychiatric Society: Clinical Practice Guidelines for Assessment and Management of ADHD in Children and Adolescents',
      source: 'Indian Journal of Psychiatry',
      year: 2019,
    },
    {
      title: 'The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder',
      source: 'Neuroscience & Biobehavioral Reviews',
      year: 2021,
    },
  ],
  relatedIds: ['adhd'],
  lastReviewed: '2026-03-15',
  reviewStatus: 'peer_reviewed',
};

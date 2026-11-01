import { GlossaryTerm } from '../types';

export const glossaryData: GlossaryTerm[] = [
  {
    id: 'affect',
    term: {
      en: 'Affect',
      hi: 'अफेक्ट (भाव अभिव्यक्ति / Affect)',
      gu: 'અફેક્ટ (ભાવ અભિવ્યક્તિ / Affect)',
    },
    pronunciationOrAlt: {
      en: 'Immediate observable expression of emotion',
      hi: 'चेहरे और व्यवहार से दिखने वाली तात्कालिक भाव-दशा',
      gu: 'ચહેરા અને વર્તનમાં દેખાતી ત્વરિત લાગણીની અભિવ્યક્તિ',
    },
    definition: {
      en: 'The outward, observable manifestation of a person\'s emotional state at a specific moment, reflected in facial expressions, tone of voice, gestures, and body language (distinct from mood, which is sustained over time).',
      hi: 'किसी व्यक्ति के चेहरे, आवाज और शारीरिक हाव-भाव में किसी क्षण विशेष पर दिखने वाले भावनात्मक बदलाव। यह मूड (जो लंबे समय तक रहता है) से अलग तात्कालिक अभिव्यक्ति है।',
      gu: 'કોઈ ચોક્કસ ક્ષણે વ્યક્તિના ચહેરા, અવાજના લહેકા અને શારીરિક હલનચલન દ્વારા વ્યક્ત થતી લાગણીઓની સ્થિતિ.',
    },
    clinicalContext: {
      en: 'Clinicians describe affect as blunted, restricted, labile (rapidly fluctuating), or congruent with thoughts.',
      hi: 'डॉक्टर इसे सपाट (blunted), अस्थिर (labile), या विचारों के अनुरूप (congruent) के रूप में दर्ज करते हैं।',
      gu: 'ક્લિનિકલ તપાસમાં લાગણીઓ વિચારોને અનુરૂપ છે કે નહીં તેની નોંધ લેવામાં આવે છે.',
    },
    relatedType: 'condition',
    relatedId: 'depression',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'akathisia',
    term: {
      en: 'Akathisia',
      hi: 'अकाथीसिया (भीतरी बेचैनी / Akathisia)',
      gu: 'અકાથીસિયા (અંદરથી થતી અતિશય બેચેની)',
    },
    pronunciationOrAlt: {
      en: 'Subjective motor restlessness',
      hi: 'शारीरिक और मानसिक रूप से शांत न बैठ पाने की बेचैनी',
      gu: 'શાંતિથી બેસી ન શકવાની તીવ્ર આંતરિક બેચેની',
    },
    definition: {
      en: 'A distressing neuropsychiatric sensation of inner motor restlessness, driving an intense urge to move one\'s legs, pace, rock, or shift weight constantly. It can occur as an adverse effect of certain medications (such as some antipsychotics or antiemetics).',
      hi: 'अंदरूनी बेचैनी की एक कष्टदायक स्थिति जिसमें व्यक्ति को लगातार पैर हिलाने, कमरे में टहलने या एक जगह शांत न बैठ पाने की तीव्र इच्छा होती है। यह अक्सर कुछ दवाओं (जैसे एंटीसाइकोटिक्स) का साइड इफेक्ट हो सकता है।',
      gu: 'અંદરથી થતી એક તીવ્ર બેચેની જેમાં વ્યક્તિ શાંતિથી બેસી શકતી નથી અને સતત પગ હલાવવાની કે આમતેમ આંટા મારવાની ફરજ પડે છે. આ કેટલીક દવાઓની આડઅસર હોઈ શકે છે.',
    },
    clinicalContext: {
      en: 'Importantly distinguished from anxiety; it is responsive to medication dosage adjustment or specific counter-medications.',
      hi: 'इसे सामान्य घबराहट से अलग पहचाना जाना जरूरी है ताकि डॉक्टर दवा की खुराक में उचित बदलाव कर सकें।',
      gu: 'તેને સામાન્ય ચિંતા કે ગભરાટથી અલગ ઓળખવી ખૂબ મહત્વપૂર્ણ છે જેથી ડૉક્ટર દવા વ્યવસ્થિત કરી શકે.',
    },
    relatedType: 'medication',
    relatedId: 'antipsychotics',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'anhedonia',
    term: {
      en: 'Anhedonia',
      hi: 'एन्हेडोनिया (आनंदहीनता / Anhedonia)',
      gu: 'એનહેડોનિયા (આનંદનો અભાવ / રસ ઉડી જવો)',
    },
    pronunciationOrAlt: {
      en: 'Inability to feel pleasure',
      hi: 'मनपसंद चीजों में भी आनंद या खुशी न मिलना',
      gu: 'મનગમતી બાબતોમાં પણ આનંદ ન અનુભવવો',
    },
    definition: {
      en: 'The diminished capacity to experience pleasure from normally enjoyable activities, such as hobbies, food, music, social interaction, or intimacy. It is a core diagnostic feature of Major Depressive Disorder and negative symptoms of schizophrenia.',
      hi: 'पसंदीदा शौक, भोजन, संगीत, बातचीत या सामाजिक मेलजोल जैसी सामान्य गतिविधियों से खुशी या संतुष्टि महसूस करने की क्षमता का पूरी तरह घट जाना। यह डिप्रेशन का एक मुख्य लक्षण है।',
      gu: 'પહેલાં જે બાબતોમાં આનંદ આવતો હતો (જેમ કે શોખ, ભોજન, મિત્રો સાથે વાતચીત) તેમાં સાવ રસ કે ખુશી ન અનુભવવી. આ ડિપ્રેશનનું મુખ્ય લક્ષણ છે.',
    },
    clinicalContext: {
      en: 'Biologically linked with alterations in mesolimbic dopamine reward circuits and prefrontal regulation.',
      hi: 'यह मस्तिष्क के रिवॉर्ड सिस्टम और डोपामाइन रासायनिक मार्गों में बदलाव से जुड़ा होता है।',
      gu: 'આ મગજના ડોપામાઇન રિવોર્ડ સર્કિટમાં આવતા ફેરફારો સાથે સંકળાયેલું છે.',
    },
    relatedType: 'symptom',
    relatedId: 'sadness-anhedonia',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'catatonia',
    term: {
      en: 'Catatonia',
      hi: 'कैटाटोनिया (Catatonia)',
      gu: 'કેટાટોનિયા (Catatonia)',
    },
    pronunciationOrAlt: {
      en: 'Neuropsychiatric motor dysregulation syndrome',
      hi: 'शारीरिक गति और चेतना से जुड़ा सिंड्रोम',
      gu: 'શારીરિક હલનચલન અને ચેતના સંબંધી ગંભીર સિન્ડ્રોમ',
    },
    definition: {
      en: 'A complex neuropsychiatric syndrome characterized by abnormalities in movement and behavior, such as immobility (stupor), mutism, waxy flexibility, posturing, negativism, or purposeless extreme agitation. It can occur in mood disorders, schizophrenia, and general medical illnesses.',
      hi: 'एक गंभीर न्यूरोसाइकियाट्रिक सिंड्रोम जिसमें व्यक्ति बिना हिले-डुले एक ही मुद्रा में घंटों बैठा रह सकता है (Stupor), बोलना बंद कर सकता है (Mutism), या अत्यधिक उत्तेजित हो सकता है। यह तुरंत मेडिकल ध्यान देने योग्य स्थिति है।',
      gu: 'એક ગંભીર સ્થિતિ જેમાં દર્દી કલાકો સુધી એક જ સ્થિતિમાં સ્થિર પડી રહે છે (Stupor), બોલવાનું સાવ બંધ કરી દે છે, અથવા અકારણ ભારે ઉત્તેજના બતાવે છે.',
    },
    clinicalContext: {
      en: 'Prompt medical evaluation is critical to prevent complications like dehydration, thrombosis, and autonomic instability.',
      hi: 'डिहाइड्रेशन और शारीरिक जटिलताओं से बचने के लिए तुरंत अस्पताल में भर्ती और उपचार जरूरी होता है।',
      gu: 'શારીરિક જટિલતાઓથી બચવા માટે તાત્કાલિક તબીબી સારવાર અનિવાર્ય છે.',
    },
    relatedType: 'condition',
    relatedId: 'schizophrenia',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'comorbidity',
    term: {
      en: 'Comorbidity',
      hi: 'कोमॉर्बिडिटी (सह-रुग्णता / Comorbidity)',
      gu: 'કોમોર્બિડિટી (સહ-અસ્તિત્વ ધરાવતી બીમારીઓ)',
    },
    pronunciationOrAlt: {
      en: 'Co-occurrence of two or more disorders',
      hi: 'एक ही समय में एक से अधिक बीमारियों की उपस्थिति',
      gu: 'એક જ સમયે એક કરતાં વધુ બીમારીઓનું હોવું',
    },
    definition: {
      en: 'The simultaneous presence of two or more medical or psychiatric conditions in a single individual (for example, depression co-occurring with alcohol use disorder or diabetes). Comorbidities often interact and require coordinated care.',
      hi: 'एक ही व्यक्ति में एक साथ दो या अधिक बीमारियों का पाया जाना (जैसे डिप्रेशन के साथ शुगर की बीमारी या शराब की लत)। इसके लिए व्यापक उपचार की जरूरत होती है।',
      gu: 'એક જ દર્દીમાં એકસાથે બે કે તેથી વધુ શારીરિક કે માનસિક બીમારીઓ હોવી (જેમ કે ડિપ્રેશનની સાથે ડાયાબિટીસ કે વ્યસન).',
    },
    clinicalContext: {
      en: 'Comorbid presentations require comprehensive clinical formulation rather than treating each illness in isolation.',
      hi: 'सभी बीमारियों को अलग-अलग देखने के बजाय समग्र रूप से इलाज करने से बेहतर नतीजे मिलते हैं।',
      gu: 'બંને બીમારીઓને સમજીને સંકલિત સારવાર કરવી જરૂરી બને છે.',
    },
    relatedType: 'condition',
    relatedId: 'depression',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'delusion',
    term: {
      en: 'Delusion',
      hi: 'डिल्यूजन (दृढ़ अवास्तविक वहम / Delusion)',
      gu: 'ડિલ્યુઝન (ખોટો દ્રઢ વહેમ / ભ્રમણા)',
    },
    pronunciationOrAlt: {
      en: 'Fixed, false belief resistant to evidence',
      hi: 'तथ्यों के विपरीत ऐसा अटूट विश्वास जो वास्तविकता से मेल न खाए',
      gu: 'હકીકતોથી વિપરીત એવો અડગ વિશ્વાસ જેને પુરાવાઓથી બદલી શકાતો નથી',
    },
    definition: {
      en: 'A firmly held, idiosyncratic false belief based on incorrect inferences about external reality that is firmly sustained despite what almost everybody else believes and despite obvious contradictory proof. Common types include persecutory (paranoid), grandiose, reference, and somatic delusions.',
      hi: 'एक ऐसा अटल और गलत विश्वास जो वास्तविकता और ठोस प्रमाणों के विपरीत होने के बावजूद व्यक्ति के मन में पूरी तरह बैठा रहता है (जैसे किसी का पीछा करना, नुकसान पहुंचाने की साजिश, या खुद को कोई अलौकिक व्यक्ति समझना)।',
      gu: 'એવી અડગ અને ખોટી માન્યતા જે વાસ્તવિકતા અને પુરાવાઓથી વિરુદ્ધ હોવા છતાં મનમાં દ્રઢ થઈ ગઈ હોય (જેમ કે કોઈ મારા વિરુદ્ધ ષડયંત્ર રચી રહ્યું છે કે મને નુકસાન પહોંચાડવા માંગે છે).',
    },
    clinicalContext: {
      en: 'Crucially differentiated from cultural or religious beliefs shared by a patient\'s community.',
      hi: 'इसे सामाजिक या धार्मिक सांस्कृतिक मान्यताओं से अलग समझना चिकित्सकीय दृष्टि से अनिवार्य है।',
      gu: 'તેને સામાન્ય ધાર્મિક કે સામાજિક માન્યતાઓથી તબીબી રીતે અલગ પાડવું જરૂરી છે.',
    },
    relatedType: 'condition',
    relatedId: 'schizophrenia',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'dissociation',
    term: {
      en: 'Dissociation',
      hi: 'डिसोसिएशन (विखंडन / Dissociation)',
      gu: 'ડિસોસિયેશન (ચેતના કે અનુભૂતિથી અળગાપણું)',
    },
    pronunciationOrAlt: {
      en: 'Disconnection in consciousness, memory, or identity',
      hi: 'चेतना, याददाश्त या स्वयं की पहचान में अलगाव',
      gu: 'પોતાના શરીર, વાતાવરણ કે સ્મૃતિથી કપાઈ જવાની લાગણી',
    },
    definition: {
      en: 'A disruption in the usually integrated functions of consciousness, memory, identity, emotion, perception, body representation, motor control, or behavior. Common manifestations include depersonalization (feeling detached from one\'s body) and derealization (feeling the world is unreal or dreamlike).',
      hi: 'चेतना, याददाश्त, भावनाओं या शरीर के सामान्य तालमेल में रुकावट आना। इसमें ऐसा लग सकता है कि आप अपने शरीर को बाहर से देख रहे हैं (Depersonalization) या आसपास की दुनिया एक सपने या फिल्म जैसी लग रही है (Derealization)।',
      gu: 'ચેતના, સ્મૃતિ કે શરીરની સામાન્ય ઓળખમાં ભંગાણ પડવું. વ્યક્તિને એવું લાગે કે તેનું શરીર તેનું નથી અથવા આખી દુનિયા જાણે સપનું કે નાટક છે.',
    },
    clinicalContext: {
      en: 'Frequently develops as an involuntary protective psychological response to acute emotional trauma or extreme terror.',
      hi: 'यह अक्सर किसी भीषण मानसिक आघात (Trauma) या अत्यधिक भय के समय मस्तिष्क की स्वाभाविक रक्षात्मक प्रतिक्रिया के रूप में होता है।',
      gu: 'ભારે માનસિક આઘાત કે તીવ્ર ડર વખતે મનની સ્વયંસંચાલિત સુરક્ષા પ્રક્રિયા તરીકે આ બની શકે છે.',
    },
    relatedType: 'symptom',
    relatedId: 'dissociation',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'dysthymia',
    term: {
      en: 'Dysthymia (Persistent Depressive Disorder)',
      hi: 'डिस्टीमिया (दीर्घकालिक मंद अवसाद / Dysthymia)',
      gu: 'ડિસ્થીમિયા (લાંબા ગાળાની હળવી-મધ્યમ ઉદાસીનતા)',
    },
    pronunciationOrAlt: {
      en: 'Chronic low-grade depressive mood',
      hi: 'वर्षों तक चलने वाली लगातार उदासी',
      gu: 'વર્ષો સુધી સતત ચાલતી ઉદાસી',
    },
    definition: {
      en: 'A chronic form of depression lasting for at least 2 years in adults (1 year in children), where depressive symptoms are present on most days, even if they are less acutely severe than a full-blown major depressive episode.',
      hi: 'अवसाद का एक दीर्घकालिक रूप जो कम से कम 2 वर्षों तक लगातार बना रहता है। इसमें लक्षण रोजमर्रा के जीवन में एक सामान्य आदत की तरह महसूस हो सकते हैं ("मैं हमेशा से ऐसा ही हूं")।',
      gu: 'ડિપ્રેશનનું લાંબા ગાળાનું સ્વરૂપ જે ઓછામાં ઓછા ૨ વર્ષ સુધી ચાલુ રહે છે. દર્દીને લાગે છે કે આ જ તેનો મૂળ સ્વભાવ છે.',
    },
    clinicalContext: {
      en: 'Often underdiagnosed because individuals perceive chronic gloominess as part of their fundamental personality.',
      hi: 'मरीज इसे अपनी मूल पर्सनालिटी समझ लेते हैं, जबकि यह एक उपचार योग्य चिकित्सीय स्थिति है।',
      gu: 'ઘણા લોકો તેને પોતાનો સ્વભાવ માનીને સહન કરે છે, પરંતુ યોગ્ય સારવારથી તેમાં સંપૂર્ણ સુધારો શક્ય છે.',
    },
    relatedType: 'condition',
    relatedId: 'persistent-depressive-disorder',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'hallucination',
    term: {
      en: 'Hallucination',
      hi: 'हलुसिनेशन (मतिभ्रम / मतिभ्रांति / Hallucination)',
      gu: 'હેલ્યુસિનેશન (અવાસ્તવિક સંવેદન / અવાજો સંભળાવવા)',
    },
    pronunciationOrAlt: {
      en: 'Perception without external sensory stimulus',
      hi: 'बाहरी उद्दीपक के बिना होने वाला संवेदी अनुभव',
      gu: 'વાસ્તવિક ઉત્તેજના વિના થતો સંવેદનાત્મક અનુભવ',
    },
    definition: {
      en: 'A perception-like experience that occurs without an external stimulus, having the vividness and impact of real perceptions and not under voluntary control. Auditory hallucinations (hearing voices when nobody is speaking) are the most common in psychiatric illnesses.',
      hi: 'वास्तविक संवेदी अनुभव जैसा अहसास होना जबकि वास्तव में बाहर कोई आवाज, दृश्य या स्पर्श मौजूद न हो (जैसे कमरे में किसी के न होने पर भी स्पष्ट आवाजें सुनाई देना)।',
      gu: 'કોઈપણ બાહ્ય અવાજ કે વસ્તુ વગર સ્પષ્ટ અનુભૂતિ થવી (જેમ કે કોઈ બોલતું ન હોવા છતાં કાનમાં અવાજો સંભળાવવા કે કોઈ ન હોવા છતાં આકૃતિઓ દેખાવી).',
    },
    clinicalContext: {
      en: 'Can also be caused by sensory deprivation, neurological disorders, delirium, severe sleep loss, or substance toxicity/withdrawal.',
      hi: 'यह मानसिक बीमारियों के अलावा मस्तिष्क के संक्रमण, डेलिरियम, शराब या नशा छोड़ने के समय भी हो सकता है।',
      gu: 'માનસિક બીમારી ઉપરાંત નશો છોડતી વખતે, તાવ કે મગજની શારીરિક બીમારીમાં પણ આ થઈ શકે છે.',
    },
    relatedType: 'symptom',
    relatedId: 'hallucinations-delusions',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'neurodiversity',
    term: {
      en: 'Neurodiversity',
      hi: 'न्यूरोडाइवर्सिटी (तंत्रिका संबंधी विविधता / Neurodiversity)',
      gu: 'ન્યુરોડાઇવર્સિટી (મગજની કાર્યપદ્ધતિની કુદરતી વિવિધતા)',
    },
    pronunciationOrAlt: {
      en: 'Natural biological variation in brain function',
      hi: 'मानव मस्तिष्क के सोचने और सीखने के तरीकों की स्वाभाविक विविधता',
      gu: 'માનવ મગજના વિચારવાની અને શીખવાની રીતોની કુદરતી ભિન્નતા',
    },
    definition: {
      en: 'The framework recognizing that neurodevelopmental differences (such as Autism Spectrum Disorder and ADHD) are natural variations in human brain wiring and cognitive styles, rather than solely deficits that must be erased.',
      hi: 'यह अवधारणा मानती है कि ऑटिज्म या एडीएचडी (ADHD) जैसी स्थितियां मानव मस्तिष्क की बनावट और सोचने-समझने के तरीकों की स्वाभाविक विविधताएं हैं, केवल कोई कमी या खराबी नहीं।',
      gu: 'એવો વૈજ્ઞાનિક દ્રષ્ટિકોણ જે સ્વીકારે છે કે ઓટિઝમ કે ADHD જેવી સ્થિતિઓ માનવ મગજની કામગીરીની કુદરતી વિવિધતા છે, માત્ર કોઈ ખામી નથી.',
    },
    clinicalContext: {
      en: 'Combines medical/developmental support with accommodations in education, sensory environment, and workplace flexibility.',
      hi: 'यह दृष्टिकोण चिकित्सा सहायता के साथ-साथ स्कूल और कार्यस्थल पर बच्चों और वयस्कों को आवश्यक अनुकूलता देने पर जोर देता है।',
      gu: 'આ અભિગમ જરૂરી તબીબી મદદ સાથે શાળા અને કાર્યસ્થળે અનુકૂળ વાતાવરણ પૂરું પાડવા પર ભાર મૂકે છે.',
    },
    relatedType: 'condition',
    relatedId: 'adhd',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'psychosis',
    term: {
      en: 'Psychosis',
      hi: 'साइकोसिस (तीव्र मनोविकृति / Psychosis)',
      gu: 'સાયકોસિસ (વાસ્તવિકતા સાથેનો સંપર્ક તૂટવો)',
    },
    pronunciationOrAlt: {
      en: 'Loss of contact with shared reality',
      hi: 'साझा वास्तविकता से संपर्क टूट जाना',
      gu: 'સામાન્ય વાસ્તવિકતા સાથેનો સંપર્ક ગુમાવવો',
    },
    definition: {
      en: 'A medical syndrome characterized by a loss of contact with reality, typically involving hallucinations (perceptions without stimuli), delusions (fixed false beliefs), severely disorganized thought processes, and impaired insight into one\'s condition.',
      hi: 'एक गंभीर चिकित्सीय सिंड्रोम जिसमें व्यक्ति का वास्तविकता से संपर्क कमजोर हो जाता है। इसमें मुख्य रूप से आवाजें सुनाई देना (Hallucinations), दृढ़ वहम (Delusions) और बातचीत में असंबद्धता शामिल होती है।',
      gu: 'એક તબીબી સિન્ડ્રોમ જેમાં વ્યક્તિનો વાસ્તવિકતા સાથેનો સંબંધ ખોરવાઈ જાય છે. તેમાં અવાજો સંભળાવવા, વહેમ થવા અને વિચારો અસંબદ્ધ બની જવા મુખ્ય છે.',
    },
    clinicalContext: {
      en: 'Psychosis is a syndrome, not a single disease, and can arise from schizophrenia, bipolar mania, severe depression, brain infections, or substance use.',
      hi: 'साइकोसिस केवल एक बीमारी नहीं बल्कि एक लक्षण-समूह है जो कई कारणों (सिज़ोफ्रेनिया, बायपोलर, थायरॉयड विकार, या नशा) से हो सकता है।',
      gu: 'સાયકોસિસ એ કોઈ એક બીમારી નથી પણ લક્ષણોનો સમૂહ છે જે સિઝોફ્રેનિયા, બાયપોલર કે શારીરિક તકલીફોથી થઈ શકે છે.',
    },
    relatedType: 'condition',
    relatedId: 'schizophrenia',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'relapse',
    term: {
      en: 'Relapse',
      hi: 'रिलैप्स (लक्षणों की वापसी / Relapse)',
      gu: 'રિલેપ્સ (બીમારીના લક્ષણો ફરી ઉથલો મારવો)',
    },
    pronunciationOrAlt: {
      en: 'Recurrence of symptoms after improvement',
      hi: 'सुधार के बाद पुनः बीमारी के लक्षणों का उभरना',
      gu: 'સુધારા પછી ફરીથી બીમારીના લક્ષણો દેખાવા',
    },
    definition: {
      en: 'The return of symptoms of a disease or disorder after a period of improvement or remission. In psychiatric care, understanding early warning signs of relapse allows timely intervention before full functional disruption occurs.',
      hi: 'किसी बीमारी में सुधार या स्थिरता आने के बाद लक्षणों का फिर से लौट आना। प्रारंभिक चेतावनी संकेतों (जैसे नींद में अचानक कमी या चिड़चिड़ापन) को पहचानकर इसे समय पर रोका जा सकता है।',
      gu: 'સારવારથી સ્થિતિ સુધર્યા પછી બીમારીના લક્ષણો ફરીથી દેખાવા. શરૂઆતના ચેતવણીરૂપ સંકેતો ઓળખીને સમયસર પગલાં લેવાથી મોટું નુકસાન અટકાવી શકાય છે.',
    },
    clinicalContext: {
      en: 'Often precipitated by abrupt medication discontinuation, severe psychosocial stressors, or disrupted sleep-wake cycles.',
      hi: 'अचानक दवा बंद करना, अत्यधिक तनाव या नींद की भारी कमी रिलैप्स के प्रमुख कारण होते हैं।',
      gu: 'અચાનક દવા બંધ કરવી, ભારે તણાવ કે ઊંઘમાં ખલેલ એ ઉથલો મારવાના મુખ્ય કારણો છે.',
    },
    relatedType: 'condition',
    relatedId: 'bipolar',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'remission',
    term: {
      en: 'Remission',
      hi: 'रेमिशन (रोग-मुक्ति / लक्षणों का शांत होना / Remission)',
      gu: 'રેમિશન (લક્ષણો સાવ ઘટી જવા કે દૂર થવા)',
    },
    pronunciationOrAlt: {
      en: 'Disappearance or substantial reduction of active symptoms',
      hi: 'सक्रिय लक्षणों का लगभग समाप्त हो जाना',
      gu: 'બીમારીના સક્રિય લક્ષણો સાવ શાંત થઈ જવા',
    },
    definition: {
      en: 'A period during which the symptoms of a disorder have subsided substantially or entirely. Full remission implies that the individual no longer meets diagnostic criteria for the active condition and has restored functional capacity.',
      hi: 'वह अवधि जब बीमारी के लक्षण पूरी तरह या काफी हद तक समाप्त हो जाते हैं और व्यक्ति अपनी सामान्य दिनचर्या में लौट आता है।',
      gu: 'એવો તબક્કો જેમાં બીમારીના લક્ષણો લગભગ સંપૂર્ણપણે શાંત થઈ જાય છે અને દર્દી ફરી સામાન્ય જીવન જીવી શકે છે.',
    },
    clinicalContext: {
      en: 'Maintenance treatment is frequently indicated during remission to prevent recurrence.',
      hi: 'रेमिशन के दौरान भी बीमारी को दोबारा लौटने से रोकने के लिए कुछ समय तक दवा या थेरेपी जारी रखी जाती है।',
      gu: 'લક્ષણો શાંત થયા પછી પણ બીમારી પાછી ન આવે તે માટે ડૉક્ટરની સલાહ મુજબ અમુક સમય દવા ચાલુ રાખવી જરૂરી છે.',
    },
    relatedType: 'treatment',
    relatedId: 'cbt',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'somatization',
    term: {
      en: 'Somatization',
      hi: 'सोमेटाइजेशन (शारीरिक लक्षणों में मानसिक तनाव प्रकट होना / Somatization)',
      gu: 'સોમેટોઇઝેશન (માનસિક તાણ શારીરિક દર્દ રૂપે દેખાવું)',
    },
    pronunciationOrAlt: {
      en: 'Physical manifestation of psychological distress',
      hi: 'मानसिक परेशानी का सिरदर्द, बदन दर्द या पेट की तकलीफ में बदलना',
      gu: 'માનસિક તણાવ માથાનો દુખાવો, પેટમાં ગરબડ કે અંગોમાં કળતર રૂપે બહાર આવવો',
    },
    definition: {
      en: 'The expression of psychological or emotional distress through bodily physical symptoms (such as chronic unexplained headaches, gastrointestinal upset, fatigue, or muscle tension) for which no sufficient medical explanation is found after thorough medical evaluation.',
      hi: 'मानसिक तनाव, चिंता या अवसाद का शारीरिक लक्षणों (जैसे सिरदर्द, गैस, पेट में मरोड़, सीने में भारीपन या बदन दर्द) के रूप में सामने आना। ये लक्षण वास्तविक होते हैं, कोई नाटक या काल्पनिक नहीं।',
      gu: 'માનસિક તણાવ કે ચિંતાનું શારીરિક લક્ષણો (જેમ કે માથાનો દુખાવો, ગેસ, છાતીમાં દબાણ કે કાયમી થાક) તરીકે પ્રગટ થવું. આ દર્દ સાચું જ હોય છે, માત્ર નાટક નથી.',
    },
    clinicalContext: {
      en: 'Extremely common in primary care and culturally prominent in South Asia; validating the patient\'s genuine physical suffering is paramount before exploring emotional correlates.',
      hi: 'भारतीय परिवेश में यह बहुत सामान्य है। मरीज के दर्द को नजरअंदाज किए बिना मस्तिष्क और शरीर के संबंध को समझाना जरूरी होता है।',
      gu: 'ભારતીય સમાજમાં આ ખૂબ જોવા મળે છે. દર્દીના દર્દને સાચું માનીને મગજ અને શરીરના જોડાણને સમજાવવું જરૂરી છે.',
    },
    relatedType: 'condition',
    relatedId: 'somatic-symptom-disorder',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'tolerance',
    term: {
      en: 'Tolerance',
      hi: 'टॉलरेंस (सहनशीलता / प्रभाव में कमी / Tolerance)',
      gu: 'ટોલરન્સ (દવા કે નશાની અસર ઓછી થવી)',
    },
    pronunciationOrAlt: {
      en: 'Needing progressively higher amounts for the same effect',
      hi: 'समान प्रभाव के लिए लगातार अधिक मात्रा की आवश्यकता',
      gu: 'તે જ અસર મેળવવા માટે ઉત્તરોત્તર વધુ પ્રમાણની જરૂર પડવી',
    },
    definition: {
      en: 'A physiological state where repeated exposure to a drug or substance leads to a diminished biological response, requiring increasingly larger amounts of the substance to produce the effect originally achieved by smaller doses.',
      hi: 'शरीर का एक अनुकूलन जिसमें किसी दवा या नशीले पदार्थ का बार-बार सेवन करने से उसका असर कम हो जाता है, जिससे उसी प्रभाव के लिए लगातार मात्रा बढ़ानी पड़ती है।',
      gu: 'એવી શારીરિક સ્થિતિ જેમાં વારંવાર લેવાતી દવા કે નશાની અસર ઘટવા લાગે છે, પરિણામે એ જ અસર માટે માત્રા વધારવી પડે છે.',
    },
    clinicalContext: {
      en: 'Tolerance can develop to both therapeutic medications (e.g., benzodiazepine sedation) and illicit substances.',
      hi: 'यह दवाओं (जैसे नींद की गोलियां) और नशीले पदार्थों दोनों में हो सकता है।',
      gu: 'આ ઊંઘની દવાઓ તેમજ વ્યસનકારક પદાર્થો બંનેમાં જોવા મળે છે.',
    },
    relatedType: 'substance',
    relatedId: 'alcohol',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'withdrawal',
    term: {
      en: 'Withdrawal',
      hi: 'विड्रॉल (नशा छूटने के शारीरिक व मानसिक लक्षण / Withdrawal)',
      gu: 'વિડ્રોઅલ (નશો બંધ કરવાથી થતી શારીરિક-માનસિક તકલીફો)',
    },
    pronunciationOrAlt: {
      en: 'Syndrome occurring upon cessation of a dependent substance',
      hi: 'निर्भरता वाले पदार्थ को अचानक रोकने पर होने वाली गंभीर प्रतिक्रिया',
      gu: 'વ્યસનવાળો પદાર્થ અચાનક બંધ કરવાથી થતી અસરો',
    },
    definition: {
      en: 'A predictable, substance-specific cluster of physical and psychological signs and symptoms that develops when the intake of a substance is abruptly stopped or significantly reduced after heavy, prolonged use.',
      hi: 'लंबे समय तक नशा या कुछ खास दवाएं लेने के बाद जब उन्हें अचानक बंद या कम किया जाता है, तो शरीर और मन में होने वाली बेचैनी, कंपकंपी, पसीना या घबराहट जैसी तकलीफें।',
      gu: 'લાંબા સમયથી ચાલતા નશા કે દવાને અચાનક બંધ કરવાથી થતી શારીરિક ધ્રુજારી, પસીનો, ગભરાટ કે આંચકી જેવી તકલીફો.',
    },
    clinicalContext: {
      en: 'Severe withdrawal from substances like alcohol or sedatives can be life-threatening and demands medically supervised inpatient care.',
      hi: 'शराब और नींद की दवाओं का अचानक बंद होना जानलेવા हो सकता है, इसलिए हमेशा डॉक्टर की देखरेख में डीટોક્સिफिकेशन जरूरी है।',
      gu: 'દારૂ અને ઊંઘની દવાઓ અચાનક બંધ કરવી જીવલેણ બની શકે છે, તેથી હંમેશા ડૉક્ટરની દેખરેખમાં સારવાર લેવી.',
    },
    relatedType: 'substance',
    relatedId: 'alcohol',
    reviewStatus: {
      lastReviewed: '2026-08',
      reviewer: '[VERIFY: Gujarat Institute of Mental Health]',
    },
  },
  {
    id: 'antipsychotic',
    term: {
      en: 'Antipsychotic Medication',
      hi: 'एंटीसाइकोटिक दवा (Antipsychotic)',
      gu: 'એન્ટિસાયકોટિક દવા (Antipsychotic)',
    },
    pronunciationOrAlt: {
      en: 'Neuroleptic agents regulating dopamine pathways',
      hi: 'मस्तिष्क में डोपामिन को संतुलित करने वाली दवाएं',
      gu: 'મગજમાં ડોપામિન સંતુલિત કરતી દવાઓ',
    },
    definition: {
      en: 'A class of psychotropic medications primarily used to manage psychosis, delusions, hallucinations, schizophrenia, and acute mania. They work predominantly by modulating dopamine receptors in key cerebral pathways.',
      hi: 'मनोरोग की दवाओं का वह वर्ग जो मतिभ्रम (वहम), भ्रम और सिज़ोफ्रेनिया जैसी मानसिक स्थितियों को ठीक करने के लिए डोपामिन को संतुलित करता है।',
      gu: 'આભાસ, વહેમ અને સિઝોફ્રેનિયા જેવી ગંભીર માનસિક બીમારીઓમાં મગજના ડોપામિનને સામાન્ય કરતી મહત્વપૂર્ણ દવાઓ.',
    },
    clinicalContext: {
      en: 'Divided into first-generation (typical) and second-generation (atypical) agents, with atypicals having lower extrapyramidal movement risk.',
      hi: 'प्रथम और द्वितीय पीढ़ी की दवाएं; नई पीढ़ी की दवाओं में मांसपेशियों में अकड़न की संभावना कम होती है।',
      gu: 'નવી પેઢીની દવાઓમાં શરીર અકડાઈ જવાની આડઅસર ઘણી ઓછી હોય છે.',
    },
    relatedType: 'medication',
    relatedId: 'antipsychotics',
  },
  {
    id: 'benzodiazepine',
    term: {
      en: 'Benzodiazepine',
      hi: 'बेंजोडायजेपाइन (Benzodiazepine / शामक दवाएं)',
      gu: 'બેન્ઝોડાયઝેપાઇન (ગભરાટ અને ઊંઘની દવા)',
    },
    pronunciationOrAlt: {
      en: 'GABA-enhancing anxiolytic and sedative class',
      hi: 'गाबा (GABA) रिसेप्टर को बढ़ाकर बेचैनी कम करने वाली दवाएं',
      gu: 'ગભરાટ અને ચિંતા તાત્કાલિક ઘટાડતી શામક દવાઓ',
    },
    definition: {
      en: 'A class of fast-acting medications that enhance the inhibitory neurotransmitter GABA, providing rapid relief from severe acute panic, muscle spasm, seizures, and insomnia.',
      hi: 'तीव्र घबराहट, पैनिक अटैक और गंभीर अनिद्रा में तुरंत राहत देने वाली दवाएं जो मस्तिष्क के शांत करने वाले रसायन गाबा (GABA) को सक्रिय करती हैं।',
      gu: 'તીવ્ર ગભરાટ અને પેનિક અટેકમાં તાત્કાલિક રાહત આપતી દવાઓ જે મગજને ઝડપથી શાંત કરે છે.',
    },
    clinicalContext: {
      en: 'Intended strictly for short-term (2-4 weeks) or episodic use due to potential for tolerance and physiological dependence.',
      hi: 'लत और सहनशीलता के जोखिम के कारण इन्हें केवल कम समय (2-4 सप्ताह) के लिए डॉक्टर की सख्त निगरानी में दिया जाता है।',
      gu: 'આદત પડવાના જોખમને કારણે આ દવાઓ ફક્ત ટૂંકા ગાળા માટે જ ડૉક્ટરની સલાહ મુજબ લેવી જોઈએ.',
    },
    relatedType: 'medication',
    relatedId: 'anxiolytics',
  },
  {
    id: 'cbt',
    term: {
      en: 'Cognitive Behavioral Therapy (CBT)',
      hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT / संज्ञानात्मक व्यवहार चिकित्सा)',
      gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT / બોધાત્મક વર્તન સારવાર)',
    },
    pronunciationOrAlt: {
      en: 'Evidence-based structured psychotherapy',
      hi: 'सोच और व्यवहार में सकारात्मक बदलाव लाने वाली मनोवैज्ञानिक थेरेपी',
      gu: 'વિચારો અને વર્તન સુધારતી પુરાવા આધારિત સાયકોથેરાપી',
    },
    definition: {
      en: 'A highly researched, structured form of psychological treatment focused on identifying, challenging, and restructuring unhelpful cognitive patterns and maladaptive behaviors.',
      hi: 'वैज्ञानिक रूप से सिद्ध मनोचिकित्सा पद्धति जो व्यक्ति के नकारात्मक विचारों की पहचान कर उन्हें तर्कसंगत और स्वस्थ विचारों में बदलने का काम करती है।',
      gu: 'નકારાત્મક વિચારો અને હાનિકારક ટેવોને ઓળખીને તેમાં હકારાત્મક પરિવર્તન લાવતી આધુનિક મનોચિકિત્સા પદ્ધતિ.',
    },
    clinicalContext: {
      en: 'Gold-standard frontline psychotherapy for depression, generalized anxiety, panic disorder, OCD, and PTSD.',
      hi: 'डिप्रेशन, एंग्जायटी, ओसीडी और पीटीएसडी में अत्यंत प्रभावी और स्थायी राहत देने वाली थेरेपी।',
      gu: 'ડિપ્રેશન, ચિંતા અને OCD માટે વિશ્વભરમાં સૌથી વધુ સ્વીકૃત અને અસરકારક થેરાપી.',
    },
    relatedType: 'treatment',
    relatedId: 'cbt',
  },
  {
    id: 'cognitive-distortion',
    term: {
      en: 'Cognitive Distortion',
      hi: 'संज्ञानात्मक विकृति (Cognitive Distortion / सोचने की गलत आदतें)',
      gu: 'વિચારવાની ભૂલો (કોગ્નિટિવ ડિસ્ટોર્શન)',
    },
    pronunciationOrAlt: {
      en: 'Biased irrational thought patterns',
      hi: 'तथ्यों के विपरीत नकारात्मक और पक्षपाती विचार',
      gu: 'વાસ્તવિકતાથી વિપરીત નકારાત્મક માન્યતાઓ',
    },
    definition: {
      en: 'Habitual, exaggerated, and irrational thought patterns that reinforce negative emotions and reinforce depressive or anxious states (e.g., catastrophic thinking, black-and-white thinking, mind reading).',
      hi: 'सोचने के वे गलत और नकारात्मक तरीके जो वास्तविकता से दूर होते हैं (जैसे हर बात का बुरा नतीजा सोचना, सब कुछ या कुछ नहीं वाली सोच) और तनाव बढ़ाते हैं।',
      gu: 'સતત ખરાબ પરિણામ જ વિચારવું, અતિશયોક્તિ કરવી કે મનમાં ખોટી ધારણાઓ બાંધીને દુઃખી થવાની માનસિક ટેવ.',
    },
    clinicalContext: {
      en: 'A central target for cognitive restructuring in CBT sessions.',
      hi: 'सीबीटी (CBT) थेरेपी में इन विकृत विचारों को तर्क और प्रमाण से सुधारा जाता है।',
      gu: 'થેરાપી દરમિયાન દર્દીને આ ખોટા વિચારો ઓળખીને બદલવાની તાલીમ અપાય છે.',
    },
    relatedType: 'treatment',
    relatedId: 'cbt',
  },
  {
    id: 'dbt',
    term: {
      en: 'Dialectical Behavior Therapy (DBT)',
      hi: 'डायलेक्टिकल बिहेवियर थेरेपी (DBT)',
      gu: 'ડાયલેક્ટિકલ બિહેવિયર થેરાપી (DBT)',
    },
    pronunciationOrAlt: {
      en: 'Therapy focusing on emotion regulation and distress tolerance',
      hi: 'तीव्र भावनाओं को संभालने और सहन करने की विशेष थेरेपी',
      gu: 'તીવ્ર લાગણીઓને નિયંત્રિત કરતી અને સહનશક્તિ વધારતી થેરાપી',
    },
    definition: {
      en: 'A comprehensive cognitive-behavioral treatment designed to help individuals balance acceptance and change, emphasizing mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.',
      hi: 'मनोवैज्ञानिक चिकित्सा जो अत्यधिक तीव्र भावनाओं को नियंत्रित करने, आत्म-नुकसान को रोकने और तनाव सहने की व्यावहारिक क्षमता सिखाती है।',
      gu: 'લાગણીઓના આવેગને નિયંત્રિત કરવા, સંબંધો સુધારવા અને મુશ્કેલ પરિસ્થિતિઓમાં મન શાંત રાખવાની અદ્યતન થેરાપી.',
    },
    clinicalContext: {
      en: 'First-line evidence-based therapy for Borderline Personality Disorder and chronic suicidal ideation.',
      hi: 'बॉर्डरलाइन पर्सनालिटी डिसऑर्डर और बार-बार खुद को नुकसान पहुंचाने वाले मरीजों के लिए सबसे असरदार इलाज।',
      gu: 'બોર્ડરલાઇન પર્સનાલિટી ડિસઓર્ડર અને આત્મહત્યાના વિચારો ધરાવતા દર્દીઓ માટે જીવનરક્ષક સાયકોથેરાપી.',
    },
    relatedType: 'treatment',
    relatedId: 'dbt',
  },
  {
    id: 'dependence',
    term: {
      en: 'Dependence (Physiological vs Psychological)',
      hi: 'निर्भरता (Dependence / शारीरिक व मानसिक निर्भरता)',
      gu: 'નિર્ભરતા (ડિપેન્ડન્સ / શારીરિક અને માનસિક આદત)',
    },
    pronunciationOrAlt: {
      en: 'State where body or mind requires a substance to function',
      hi: 'वह स्थिति जब शरीर या मन किसी पदार्थ के बिना सामान्य न रह पाए',
      gu: 'શરીર કે મનને સામાન્ય રીતે ચાલવા માટે કોઈ પદાર્થની અનિવાર્ય જરૂર પડે તેવી સ્થિતિ',
    },
    definition: {
      en: 'A condition where repeated use of a substance or medication leads to neuroadaptation. Physiological dependence involves tolerance and withdrawal; psychological dependence involves compulsive cravings and preoccupation.',
      hi: 'शारीरिक या मानसिक रूप से किसी पदार्थ पर इस हद तक आश्रित हो जाना कि उसका सेवन न करने पर असहनीय बेचैनी या विड्रॉल लक्षण पैदा होने लगें।',
      gu: 'કોઈ નશાકારક પદાર્થ કે દવા વગર શરીર કે મન ચાલી ન શકે અને તેના વિના તીવ્ર તલપ કે તકલીફ થાય તે સ્થિતિ.',
    },
    clinicalContext: {
      en: 'Physical dependence is a normal neurobiological response to certain medications and does not inherently equal addiction (substance use disorder).',
      hi: 'शारीरिक निर्भरता जैविक होती है, जबकि एडिक्शन में व्यक्ति नुकसान जानते हुए भी अनियंत्रित सेवन करता है।',
      gu: 'શારીરિક નિર્ભરતા કુદરતી જૈવિક પ્રક્રિયા છે જે યોગ્ય દાક્તરી સારવારથી ધીમે ધીમે દૂર થઈ શકે છે.',
    },
    relatedType: 'substance',
    relatedId: 'alcohol',
  },
  {
    id: 'depersonalization',
    term: {
      en: 'Depersonalization',
      hi: 'डिपर्सनलाइजेशन (खुद से परायापन महसूस होना)',
      gu: 'ડિપર્સનલાઇઝેશન (પોતાના શરીર કે અસ્તિત્વથી અળગાપણું લાગવું)',
    },
    pronunciationOrAlt: {
      en: 'Feeling disconnected or detached from one\'s body or mental processes',
      hi: 'ऐसा लगना जैसे आप खुद अपने शरीर से बाहर खड़े होकर खुद को देख रहे हैं',
      gu: 'પોતાના શરીર કે વિચારોથી અલગ થઈ ગયા હોવાનો અને બહારથી જોતા હોવાનો ભાસ',
    },
    definition: {
      en: 'A dissociative experience where a person feels detached from their own mind, body, or self, often feeling like an outside observer of their own thoughts, speech, or actions.',
      hi: 'मन का एक रक्षात्मक लक्षण जिसमें इंसान को लगता है कि उसका शरीर उसका नहीं है, या वह किसी रोबोट की तरह खुद को बाहर से देख रहा है।',
      gu: 'અતિશય તણાવ કે ચિંતામાં થતો અનુભવ જેમાં વ્યક્તિને લાગે છે કે તે પોતાના શરીરની બહાર છે અથવા કોઈ ફિલ્મ જોઈ રહ્યો છે.',
    },
    clinicalContext: {
      en: 'Frequently triggered by severe anxiety, panic attacks, trauma, or substance use.',
      hi: 'पैनिक अटैक, गंभीर तनाव या सदमे के समय यह मस्तिष्क का एक सुरक्षा तंत्र हो सकता है।',
      gu: 'ગંભીર ગભરાટ કે આઘાત સમયે મગજ વધુ પડતી પીડાથી બચવા આવો અનુભવ કરાવે છે.',
    },
    relatedType: 'symptom',
    relatedId: 'dissociation',
  },
  {
    id: 'derealization',
    term: {
      en: 'Derealization',
      hi: 'डिरियलाइजेशन (आसपास की दुनिया का नकली या अवास्तविक लगना)',
      gu: 'ડિરિયલાઇઝેશન (આસપાસનું વાતાવરણ કૃત્રિમ કે સપના જેવું લાગવું)',
    },
    pronunciationOrAlt: {
      en: 'Perception of the external world as dreamlike, artificial, or foggy',
      hi: 'दुनिया का ऐसा लगना जैसे सब कुछ कांच के पीछे या किसी नाटक जैसा है',
      gu: 'દુનિયા અવાસ્તવિક, ઝાંખી અથવા કાચની પેલે પાર હોય તેવો અહેસાસ',
    },
    definition: {
      en: 'A dissociative experience characterized by feeling that the surrounding environment is unreal, strange, artificial, two-dimensional, or dreamlike.',
      hi: 'एक ऐसा मानसिक अनुभव जिसमें परिचित परिवेश, लोग और वस्तुएं बेजान, अवास्तविक, धुंधली या किसी सपने की तरह प्रतीत होती हैं।',
      gu: 'એક એવી માનસિક સ્થિતિ જેમાં પોતાની આસપાસની જાણીતી દુનિયા સાવ પરાઈ, અવાસ્તવિક કે સ્વપ્ન જેવી ભાસે છે.',
    },
    clinicalContext: {
      en: 'Often co-occurs with depersonalization during extreme stress or panic states; not a sign of losing touch with reality.',
      hi: 'अक्सर पैनिक अटैक या अत्यधिक चिंता में होता है; यह पागलपन नहीं बल्कि अत्यधिक तनाव का संकेत है।',
      gu: 'પેનિક અટેક કે માનસિક થાકમાં સામાન્ય રીતે જોવા મળે છે; આ કોઈ ગાંડપણ નથી પણ ચિંતાનું લક્ષણ છે.',
    },
    relatedType: 'symptom',
    relatedId: 'dissociation',
  },
  {
    id: 'dopamine',
    term: {
      en: 'Dopamine',
      hi: 'डोपामिन (Dopamine / प्रेरणा व आनंद का न्यूरोट्रांसमीटर)',
      gu: 'ડોપામિન (Dopamine / પ્રેરણા અને આનંદનું ન્યુરોટ્રાન્સમીટર)',
    },
    pronunciationOrAlt: {
      en: 'Catecholamine neurotransmitter regulating reward and motivation',
      hi: 'इनाम, सीखने और प्रेरणा को नियंत्रित करने वाला मस्तिष्क रसायन',
      gu: 'પ્રેરણા, એકાગ્રતા અને સંતોષની લાગણી જગાડતું રસાયણ',
    },
    definition: {
      en: 'A vital chemical messenger in the brain involved in reward reinforcement, motivation, motor control, executive functioning, and attention.',
      hi: 'मस्तिष्क का एक प्रमुख न्यूरोकेमिकल जो हमें लक्ष्य की ओर बढ़ने की प्रेरणा, खुशी, ध्यान और मांसपेशियों के सही संचालन में मदद करता है।',
      gu: 'મગજનું મહત્વનું કેમિકલ જે જીવનમાં ઉત્સાહ, ઈનામની ભાવના, શારીરિક હલનચલન અને એકાગ્રતા નિયંત્રિત કરે છે.',
    },
    clinicalContext: {
      en: 'Excessive dopamine signaling in mesolimbic circuits is implicated in psychosis; deficiency in frontostriatal circuits plays a role in ADHD and Parkinson\'s disease.',
      hi: 'इसकी अधिकता से वहम और भ्रम (साइकोसिस) हो सकता है, जबकि कमी से एडीएचडी और पार्किंसन रोग होता है।',
      gu: 'તેનું અસંતુલન વહેમ (સાયકોસિસ) અથવા ધ્યાન કેન્દ્રિત કરવામાં મુશ્કેલી (ADHD) લાવી શકે છે.',
    },
    relatedType: 'medication',
    relatedId: 'antipsychotics',
  },
  {
    id: 'dysphoria',
    term: {
      en: 'Dysphoria',
      hi: 'डिस्फोरिया (गहन उदासी, बेचैनी व असंतोष की मनःस्थिति)',
      gu: 'ડિસ્ફોરિયા (તીવ્ર અસંતોષ, ઉદાસી અને અશાંતિની સ્થિતિ)',
    },
    pronunciationOrAlt: {
      en: 'Profound state of unease, dissatisfaction, or gloom',
      hi: 'भीतरी बेचैनी और गहरी अप्रसन्नता की अवस्था',
      gu: 'અંદરથી થતી અસહ્ય અશાંતિ અને ગમગીની',
    },
    definition: {
      en: 'A profound emotional state of unease, unhappiness, pervasive discontent, or emotional agitation; the clinical opposite of euphoria.',
      hi: 'मन की एक अत्यंत असहज, दुखी और अशांत अवस्था जिसमें व्यक्ति को किसी भी चीज में अच्छा महसूस नहीं होता; यह उत्साह (यूफोरिया) का विपरीत है।',
      gu: 'મનની અત્યંત દુઃખી, અસંતુષ્ટ અને વ્યાકુળ અવસ્થા જેમાં ક્યાંય ચેન ન પડે.',
    },
    clinicalContext: {
      en: 'Seen across major depressive episodes, premenstrual dysphoric disorder (PMDD), mixed bipolar states, and substance withdrawal.',
      hi: 'डिप्रेशन, बाइपोलर मिक्स्ड स्टेट और विड्रॉल के दौरान यह अवस्था प्रमुखता से दिखाई देती है।',
      gu: 'ડિપ્રેશન અને વ્યસન છોડતી વખતે આ પ્રકારની બેચેની ખાસ જોવા મળે છે.',
    },
    relatedType: 'symptom',
    relatedId: 'depressed-mood',
  },
  {
    id: 'ect',
    term: {
      en: 'Electroconvulsive Therapy (ECT)',
      hi: 'इलेक्ट्रोकनवल्सिव थेरेपी (ECT / आधुनिक ईसीटी)',
      gu: 'ઇલેક્ટ્રોકન્વલ્સિવ થેરાપી (ECT / આધુનિક મનોચિકિત્સા પદ્ધતિ)',
    },
    pronunciationOrAlt: {
      en: 'Modified neuromodulatory seizure therapy under anesthesia',
      hi: 'बेहोशी में दी जाने वाली अत्यंत सुरक्षित और जीवनरक्षक न्यूरोमॉड्यूलेशन थेरेपी',
      gu: 'સંપૂર્ણ એનેસ્થેસિયા હેઠળ અપાતી અતિ સુરક્ષિત મગજની સારવાર',
    },
    definition: {
      en: 'A modern medical procedure where brief, controlled electrical stimulation is applied to the brain under general anesthesia and muscle relaxation, producing a generalized therapeutic seizure to reset dysregulated brain circuits.',
      hi: 'गंभीर मानसिक रोगों में जीवन बचाने वाली एक चिकित्सकीय प्रक्रिया, जिसमें मरीज को पूरी बेहोशी में सुरक्षित रूप से हल्का विद्युत उद्दीपन देकर मस्तिष्क के न्यूरोट्रांसमीटर को रीसेट किया जाता है।',
      gu: 'સંપૂર્ણ બેભાન કરીને અપાતી એક આધુનિક તબીબી પ્રક્રિયા, જે ગંભીર ડિપ્રેશન કે જીવલેણ સ્થિતિમાં મગજના સર્કિટ્સને ફરીથી સંતુલિત કરે છે.',
    },
    clinicalContext: {
      en: 'Rapidly effective and lifesaving for severe catatonia, acute suicidality, and treatment-resistant psychotic depression.',
      hi: 'जब दवाएं काम न कर रही हों या मरीज खाना-पीना बंद कर दे, तब यह 80%+ सफलता दर वाला सबसे तेज इलाज है।',
      gu: 'જ્યારે દવાઓ કામ ન કરે ત્યારે ૮૦% થી વધુ સફળતા સાથે દર્દીનો જીવ બચાવનારો અકસીર ઈલાજ.',
    },
    relatedType: 'treatment',
    relatedId: 'ect',
  },
  {
    id: 'euphoria',
    term: {
      en: 'Euphoria',
      hi: 'यूफोरिया (अत्यधिक उत्साह व परमानंद की अस्वाभाविक अवस्था)',
      gu: 'યુફોરિયા (અતિશય ઉત્સાહ અને અસ્વાભાવિક પરમાનંદની સ્થિતિ)',
    },
    pronunciationOrAlt: {
      en: 'Pathological or elevated sense of intense wellbeing and elation',
      hi: 'अत्यधिक ऊर्जा और खुशी का अस्वाभाविक उछाल',
      gu: 'વાસ્તવિકતા વગરનો અતિશય આનંદ અને ઉમંગનો અતિરેક',
    },
    definition: {
      en: 'An exaggerated or abnormally elevated feeling of intense physical and psychological wellbeing, elation, and boundless optimism, out of proportion to real-life circumstances.',
      hi: 'अत्यधिक खुशी, ऊर्जा और अजेय होने की वह अस्वाभाविक भावना जो वास्तविक परिस्थितियों से कहीं परे होती है।',
      gu: 'વાસ્તવિક પરિસ્થિતિ કરતાં ક્યાંય વધુ પડતી ખુશી, ઊર્જા અને પોતાની જાતને સર્વોપરી માનવાની મનની ઉત્તેજિત સ્થિતિ.',
    },
    clinicalContext: {
      en: 'Hallmark feature of manic or hypomanic episodes in bipolar disorder; also induced by stimulant drugs.',
      hi: 'बाइपोलर डिसऑर्डर के मेनिया (Mania) एपिसोड और उत्तेजक नशीले पदार्थों के सेवन में प्रमुखता से दिखाई देती है।',
      gu: 'બાયપોલર ડિસઓર્ડરના મેનિયા તબક્કામાં દર્દી ખૂબ ઝડપથી વાતો કરે છે અને ઊંઘ વગર પણ અતિશય સક્રિય રહે છે.',
    },
    relatedType: 'condition',
    relatedId: 'bipolar-disorder',
  },
  {
    id: 'exposure',
    term: {
      en: 'Exposure & Response Prevention (ERP)',
      hi: 'एक्सपोजर एंड रिस्पॉन्स प्रिवेंशन (ERP थेरेपी)',
      gu: 'એક્સપોઝર એન્ડ રિસ્પોન્સ પ્રિવેન્શન (ERP થેરાપી)',
    },
    pronunciationOrAlt: {
      en: 'Gold-standard behavioral technique for anxiety and OCD',
      hi: 'डर का सामना करने और गलत आदतों को रोकने की मनोवैज्ञानिक तकनीक',
      gu: 'ડરનો સામનો કરી માનસિક મજબૂતી કેળવતી વર્તન પદ્ધતિ',
    },
    definition: {
      en: 'A behavioral therapy method where an individual is gradually, safely exposed to anxiety-provoking triggers or obsessions while systematically refraining from carrying out compulsive rituals or safety behaviors.',
      hi: 'मनोवैज्ञानिक थेरेपी जिसमें मरीज को उसके डर वाली स्थिति का सुरक्षित रूप से धीरे-धीरे सामना कराया जाता है और बार-बार हाथ धोने या ताला चेक करने जैसी मजबूरियों को रोकने का अभ्यास कराया जाता है।',
      gu: 'દર્દીને જે બાબતનો ડર હોય તેનો ધીમે ધીમે સામનો કરાવીને વહેમ દૂર કરવાની અને વારંવાર ચકાસણીની ટેવ છોડાવવાની થેરાપી.',
    },
    clinicalContext: {
      en: 'The definitive evidence-based behavioral intervention for Obsessive-Compulsive Disorder and specific phobias.',
      hi: 'ओसीडी (OCD) और तरह-तरह के फोबिया को जड़ से ठीक करने का सबसे असरदार वैज्ञानिक तरीका।',
      gu: 'OCD અને વિવિધ પ્રકારના ફોબિયામાંથી કાયમી મુક્તિ મેળવવાની શ્રેષ્ઠ પદ્ધતિ.',
    },
    relatedType: 'treatment',
    relatedId: 'cbt',
  },
  {
    id: 'gaba',
    term: {
      en: 'GABA (Gamma-Aminobutyric Acid)',
      hi: 'गाबा (GABA / मस्तिष्क को शांत करने वाला न्यूरोट्रांसमीटर)',
      gu: 'ગાબા (GABA / મગજને શાંત કરનાર મુખ્ય રસાયણ)',
    },
    pronunciationOrAlt: {
      en: 'Primary inhibitory neurotransmitter in the central nervous system',
      hi: 'मस्तिष्क की अति-सक्रियता को शांत करने वाला मुख्य रासायनिक संदेशवाहक',
      gu: 'ચેતાતંત્રની અતિશય ઉત્તેજનાને શાંત પાડતું મુખ્ય ન્યુરોકેમિકલ',
    },
    definition: {
      en: 'The primary inhibitory neurotransmitter in the brain, responsible for reducing neuronal excitability throughout the central nervous system, promoting calm, muscle relaxation, and sleep.',
      hi: 'मस्तिष्क का प्राथमिक शांत करने वाला रसायन, जो तंत्रिका तंत्र की अत्यधिक उत्तेजना को धीमा करके शांति, मांसपेशियों को आराम और अच्छी नींद प्रदान करता है।',
      gu: 'મગજનું મુખ્ય શામક રસાયણ જે વધુ પડતી ચિંતા, ઉત્તેજના અને ખેંચને કાબૂમાં રાખીને શાંતિ અને ઊંઘ લાવે છે.',
    },
    clinicalContext: {
      en: 'Target of medications including benzodiazepines, pregabalin, and certain anticonvulsants/mood stabilizers.',
      hi: 'चिंता-निवारक दवाएं और शराब इसी रसायन के रिसेप्टर्स पर काम करके मन को शांत करती हैं।',
      gu: 'ગભરાટ શમાવતી દવાઓ ગાબા રિસેપ્ટર્સને ઉત્તેજીત કરીને તાત્કાલિક રાહત આપે છે.',
    },
    relatedType: 'medication',
    relatedId: 'anxiolytics',
  },
  {
    id: 'grounding',
    term: {
      en: 'Grounding Techniques',
      hi: 'ग्राउंडिंग तकनीक (Grounding / वर्तमान में लौटने के अभ्यास)',
      gu: 'ગ્રાઉન્ડિંગ તકનીક (વર્તમાન ક્ષણમાં પાછા ફરવાની કસરતો)',
    },
    pronunciationOrAlt: {
      en: 'Sensory-based strategies to reconnect with present reality',
      hi: 'इंद्रियों के जरिए पैनिक और आघात से निकलकर वर्तमान में आने के तरीके',
      gu: 'ઇન્દ્રિયો દ્વારા ગભરાટમાંથી બહાર નીકળી વર્તમાનમાં સ્થિર થવાની પદ્ધતિ',
    },
    definition: {
      en: 'Practical somatic and sensory exercises (such as the 5-4-3-2-1 technique, holding ice, or diaphragmatic breathing) that anchor a person in the physical present moment during acute panic, flashbacks, or dissociation.',
      hi: 'सरल शारीरिक और संवेदी अभ्यास (जैसे 5 चीजें देखना, 4 छूना, गहरी सांस लेना) जो पैनिक अटैक या पुराने सदमे के अचानक याद आने पर व्यक्ति को वर्तमान में वापस लाते हैं।',
      gu: 'પંચેન્દ્રિય આધારિત સરળ કસરતો (જેમ કે 5-4-3-2-1 પદ્ધતિ) જે પેનિક અટેક કે ડર વખતે મનને તાત્કાલિક વર્તમાનમાં સ્થિર કરે છે.',
    },
    clinicalContext: {
      en: 'Essential first-aid tool taught in trauma therapy and panic disorder management.',
      hi: 'पीटीएसडी और पैनिक अटैक के मरीजों के लिए तुरंत राहत देने वाला पहला सुरक्षा कवच।',
      gu: 'અચાનક ગભરાટ ચડી જાય ત્યારે શાંત પડવા માટેની શ્રેષ્ઠ તાત્કાલિક તકનીક.',
    },
    relatedType: 'treatment',
    relatedId: 'cbt',
  },
  {
    id: 'mindfulness',
    term: {
      en: 'Mindfulness',
      hi: 'माइंडफुलनेस (सचेतनता / पूर्ण जागरूकता)',
      gu: 'માઇન્ડફુલનેસ (સભાનતા / વર્તમાનમાં જાગરૂક રહેવાની કળા)',
    },
    pronunciationOrAlt: {
      en: 'Non-judgmental present-moment awareness',
      hi: 'बिना किसी मूल्यांकन के वर्तमान क्षण में पूरी तरह उपस्थित रहना',
      gu: 'કોઈપણ પૂર્વગ્રહ વિના અત્યારની પળમાં સંપૂર્ણ જાગ્રત રહેવું',
    },
    definition: {
      en: 'The practice of maintaining a moment-by-moment, non-judgmental awareness of our thoughts, feelings, bodily sensations, and surrounding environment, rather than ruminating on the past or worrying about the future.',
      hi: 'बिना किसी आलोचना या तनाव के अपने विचारों, शारीरिक संवेदनाओं और वर्तमान क्षण के प्रति पूर्ण रूप से सजग रहने की मानसिक अवस्था।',
      gu: 'ભૂતકાળના અફસોસ કે ભવિષ્યની ચિંતા છોડીને આ ક્ષણમાં મનને શાંતિથી સ્થિર રાખવાની માનસિક સાધના.',
    },
    clinicalContext: {
      en: 'Integrated into MBCT, ACT, and DBT to prevent depression relapse and alleviate chronic distress.',
      hi: 'डिप्रेशन को दोबारा लौटने से रोकने और तनाव कम करने के लिए वैज्ञानिक थेरेपीज में इसका प्रयोग किया जाता है।',
      gu: 'ડિપ્રેશનના ફરીથી હુમલા રોકવા માટે આ પદ્ધતિ ખૂબ જ ઉપયોગી સાબિત થઈ છે.',
    },
    relatedType: 'treatment',
    relatedId: 'act',
  },
  {
    id: 'mood-stabilizer',
    term: {
      en: 'Mood Stabilizer',
      hi: 'मूड स्टेबलाइजर (मनोदशा स्थिर रखने वाली दवाएं)',
      gu: 'મૂડ સ્ટેબિલાઇઝર (મનની અસ્થિરતા રોકતી દવાઓ)',
    },
    pronunciationOrAlt: {
      en: 'Medications preventing depressive and manic swings',
      hi: 'मनोदशा के अत्यधिक उतार-चढ़ाव (मेनिया और डिप्रेशन) को थामने वाली दवाएं',
      gu: 'અતિશય ખુશી કે અતિશય ઉદાસીના ઝોલા રોકીને મન સ્થિર રાખતી દવાઓ',
    },
    definition: {
      en: 'A category of psychiatric medications used to treat bipolar disorder and prevent cyclothymic shifts, stabilizing emotional extremes without triggering opposite poles.',
      hi: 'दवाओं का समूह (जैसे लिथियम, वालप्रोएट) जो मन की अत्यधिक तेजी (मेनिया) और भारी उदासी (डिप्रेशन) को रोककर मूड को सामान्य बनाए रखता है।',
      gu: 'બાયપોલર ડિસઓર્ડરમાં મગજના રસાયણોને બેલેન્સ કરીને દર્દીને સામાન્ય સ્થિતિમાં રાખતી દવાઓ.',
    },
    clinicalContext: {
      en: 'Lithium is the prototype mood stabilizer with proven anti-suicidal properties.',
      hi: 'लिथियम सबसे प्रमुख मूड स्टेबलाइजर है, जो आत्महत्या के जोखिम को काफी हद तक कम करता है।',
      gu: 'લિથિયમ આ વર્ગની સૌથી જાણીતી દવા છે જે દર્દીને સંપૂર્ણ સ્વસ્થ રાખવામાં મદદરૂપ છે.',
    },
    relatedType: 'medication',
    relatedId: 'mood-stabilizers',
  },
  {
    id: 'neurosis',
    term: {
      en: 'Neurosis / Neurotic Disorder',
      hi: 'न्यूरोसिस (Neurosis / तंत्रिकाजन्य विकार / गैर-मनोरोग चिंता)',
      gu: 'ન્યુરોસિસ (ચિંતા, ભય અને માનસિક તાણ સંબંધિત તકલીફો)',
    },
    pronunciationOrAlt: {
      en: 'Historically used term for anxiety, mood, and stress disorders without loss of reality testing',
      hi: 'ऐसी मानसिक समस्याएं जिनमें इंसान का वास्तविकता से संपर्क नहीं टूटता (जैसे चिंता, घबराहट)',
      gu: 'એવા માનસિક રોગો જેમાં વાસ્તવિકતાની સમજ જળવાઈ રહે છે (જેમ કે ચિંતા, ફોબિયા)',
    },
    definition: {
      en: 'A traditional psychiatric umbrella term for conditions involving distressing emotional suffering (such as anxiety, depression, phobias, or OCD) where the person remains in full touch with reality and recognizes their symptoms as irrational.',
      hi: 'एक पारम्परिक मनोरोग शब्द जो ऐसी मानसिक परेशानियों (जैसे घबराहट, अवसाद, फोबिया) को दर्शाता है जिनमें मरीज पूरी तरह होश में होता है और जानता है कि उसे परेशानी हो रही है।',
      gu: 'માનસિક તણાવ, ગભરાટ અને ફોબિયા જેવી સમસ્યાઓ જેમાં દર્દીને પોતાની મુશ્કેલીની પૂરેપૂરી ખબર હોય છે.',
    },
    clinicalContext: {
      en: 'Contrasted clinically with psychosis (where reality testing is impaired).',
      hi: 'साइकोसिस (जिसमें वहम और भ्रम होता है) की तुलना में न्यूरोसिस में व्यक्ति वास्तविकता को पूरी तरह समझता है।',
      gu: 'સાયકોસિસથી વિપરીત, આમાં દર્દી ભાન ગુમાવતો નથી અને સલાહ-સૂચન ઝડપથી સ્વીકારી શકે છે.',
    },
    relatedType: 'condition',
    relatedId: 'generalized-anxiety',
  },
  {
    id: 'neurotransmitter',
    term: {
      en: 'Neurotransmitter',
      hi: 'न्यूरोट्रांसमीटर (मस्तिष्क के रासायनिक संदेशवाहक)',
      gu: 'ન્યુરોટ્રાન્સમીટર (મગજના રાસાયણિક સંદેશવાહકો)',
    },
    pronunciationOrAlt: {
      en: 'Endogenous chemical signaling molecules in synaptic junctions',
      hi: 'मस्तिष्क की तंत्रिका कोशिकाओं (Neurons) के बीच संदेश पहुंचाने वाले रसायन',
      gu: 'મગજના જ્ઞાનતંતુઓ વચ્ચે સંદેશાઓનું આદાન-પ્રદાન કરતા કેમિકલ્સ',
    },
    definition: {
      en: 'Endogenous chemical messengers released by neurons that cross synaptic gaps to transmit, boost, and balance signals between nerve cells and target tissues throughout the body.',
      hi: 'मस्तिष्क में मौजूद वे सूक्ष्म रसायन (जैसे सेरोटोनिन, डोपामिन, नॉरएड्रेनालिन) जो हमारी सोच, भावनाएं, नींद, भूख और व्यवहार को नियंत्रित करते हैं।',
      gu: 'મગજના કોષો વચ્ચે વાતચીત કરાવતા વિશેષ રસાયણો જે આપણા મૂડ, ઊંઘ અને વિચારોનું સંચાલન કરે છે.',
    },
    clinicalContext: {
      en: 'Most modern psychiatric medications achieve their therapeutic benefits by regulating neurotransmitter levels or receptor sensitivity.',
      hi: 'अधिकांश आधुनिक मनोरोग दवाएं इन्हीं रसायनों के स्तर को संतुलित करके काम करती हैं।',
      gu: 'મનોચિકિત્સાની મોટાભાગની દવાઓ આ રસાયણોનું બેલેન્સ સુધારીને રોગ મટાડે છે.',
    },
    relatedType: 'medication',
    relatedId: 'antidepressants',
  },
  {
    id: 'norepinephrine',
    term: {
      en: 'Norepinephrine (Noradrenaline)',
      hi: 'नॉरएड्रेनालिन (Norepinephrine / सतर्कता व ऊर्जा का रसायन)',
      gu: 'નોરેડ્રેનાલિન (Norepinephrine / સતર્કતા અને ઊર્જા વધારતું રસાયણ)',
    },
    pronunciationOrAlt: {
      en: 'Adrenergic neurotransmitter modulating alertness and executive arousal',
      hi: 'तनाव से लड़ने, सतर्कता और मानसिक ऊर्जा को बढ़ाने वाला हार्मोन व रसायन',
      gu: 'સાવધાની, માનસિક સ્ફૂર્તિ અને બ્લડપ્રેશર નિયંત્રિત કરતું રસાયણ',
    },
    definition: {
      en: 'A monoamine neurotransmitter and hormone that mobilizes the brain and body for action, regulating alertness, energy, focus, fight-or-flight reactions, and cardiovascular tone.',
      hi: 'मस्तिष्क और शरीर का वह रसायन जो हमें सजग रखता है, एकाग्रता प्रदान करता है और मुश्किल वक्त में ऊर्जा का संचार करता है।',
      gu: 'મગજને સજાગ રાખતું અને કાર્ય કરવાની ઊર્જા આપતું રસાયણ જે તણાવ સામે લડવામાં મદદ કરે છે.',
    },
    clinicalContext: {
      en: 'Targeted by SNRIs for depression and pain syndromes; dysregulation is seen in panic disorder and ADHD.',
      hi: 'एसएनआरआई (SNRI) दवाएं डिप्रेशन और बदन दर्द के इलाज में इसे संतुलित करती हैं।',
      gu: 'ડિપ્રેશન અને ક્રોનિક દુખાવામાં ઉપયોગી દવાઓ આ રસાયણના સ્તરને સુધારે છે.',
    },
    relatedType: 'medication',
    relatedId: 'antidepressants',
  },
  {
    id: 'psychoeducation',
    term: {
      en: 'Psychoeducation',
      hi: 'साइकोएजुकेशन (मनोशिक्षा / मानसिक स्वास्थ्य की वैज्ञानिक समझ)',
      gu: 'સાયકોએજ્યુકેશન (માનસિક સ્વાસ્થ્ય વિશે વૈજ્ઞાનિક માર્ગદર્શન)',
    },
    pronunciationOrAlt: {
      en: 'Structured clinical education about illness and treatment',
      hi: 'मरीज और परिवार को बीमारी, दवा और बचाव की सही जानकारी देना',
      gu: 'દર્દી અને પરિવારને રોગ, સારવાર અને કાળજી અંગે સાચી માહિતી આપવી',
    },
    definition: {
      en: 'The evidence-based process of providing comprehensive, empowering information to patients and families about the biological basis, symptoms, treatment options, prognosis, and self-care strategies for a psychiatric condition.',
      hi: 'मरीज और उसके परिजनों को बीमारी के कारणों, दवाओं के असर, साइड इफेक्ट्स और भविष्य की सावधानियों के बारे में सरल और वैज्ञानिक तरीके से प्रशिक्षित करना।',
      gu: 'દર્દી અને પરિવારને માનસિક બીમારીના લક્ષણો, દવાઓ અને સાજા થવાના ઉપાયો વિશે સચોટ માહિતી આપીને સક્ષમ બનાવવાની પ્રક્રિયા.',
    },
    clinicalContext: {
      en: 'Substantially reduces relapse rates, builds treatment adherence, and dispels self-stigma.',
      hi: 'यह दवा के नियमित सेवन को बढ़ावा देता है और बीमारी के दोबारा लौटने की संभावना को 50% तक कम कर देता है।',
      gu: 'આનાથી દવાઓ નિયમિત લેવાય છે અને રોગ ફરીથી ઊથલો મારતો નથી.',
    },
    relatedType: 'treatment',
    relatedId: 'cbt',
  },
  {
    id: 'rtms',
    term: {
      en: 'Repetitive Transcranial Magnetic Stimulation (rTMS)',
      hi: 'रिपीटिटिव ट्रांसक्रैनियल मैग्नेटिक स्टिमुलेशन (rTMS)',
      gu: 'રિપિટીટિવ ટ્રાન્સક્રેનિયલ મેગ્નેટિક સ્ટીમ્યુલેશન (rTMS)',
    },
    pronunciationOrAlt: {
      en: 'Non-invasive pulsed magnetic brain stimulation',
      hi: 'बिना बेहोशी और बिना दर्द के चुंबकीय तरंगों से मस्तिष्क का इलाज',
      gu: 'કોઈપણ દુખાવા કે બેભાન કર્યા વગર ચુંબકીય તરંગોથી મગજની સારવાર',
    },
    definition: {
      en: 'A non-invasive neuromodulation technique using focused magnetic field pulses over the scalp to stimulate or inhibit specific cortical areas (such as the dorsolateral prefrontal cortex) involved in mood regulation.',
      hi: 'एक अत्याधुनिक तकनीक जिसमें सिर के ऊपर चुंबकीय क्वाइल रखकर दिमाग के सुस्त पड़े हिस्सों को जाग्रत किया जाता है; इसमें न बेहोशी लगती है और न ही कोई दर्द होता है।',
      gu: 'એક અદ્યતન તબીબી પદ્ધતિ જેમાં માથા પર ચુંબકીય તરંગો આપીને ડિપ્રેશન માટે જવાબદાર મગજના ભાગોને સક્રિય કરવામાં આવે છે.',
    },
    clinicalContext: {
      en: 'FDA-approved for treatment-resistant major depression, OCD, and migraine; patient remains awake throughout 20-30 minute outpatient sessions.',
      hi: 'गंभीर डिप्रेशन और ओसीडी के इलाज के लिए विश्व स्तर पर प्रमाणित; मरीज पूरी तरह जागता रहता है और तुरंत काम पर जा सकता है।',
      gu: 'ડિપ્રેશન અને OCD માં અકસીર સાબિત થયેલ પદ્ધતિ જેમાં દર્દી તરત જ સામાન્ય દિનચર્યા શરૂ કરી શકે છે.',
    },
    relatedType: 'treatment',
    relatedId: 'rtms',
  },
  {
    id: 'serotonin',
    term: {
      en: 'Serotonin (5-HT)',
      hi: 'सेरोटोनिन (Serotonin / मन को शांत व स्थिर रखने वाला रसायन)',
      gu: 'સેરોટોનિન (Serotonin / મૂડ અને શાંતિ આપતું મુખ્ય રસાયણ)',
    },
    pronunciationOrAlt: {
      en: 'Indoleamine neurotransmitter modulating mood, sleep, and appetite',
      hi: 'मस्तिष्क में खुशी, शांति, नींद और भूख को नियंत्रित करने वाला मुख्य रसायन',
      gu: 'મગજમાં શાંતિ, ખુશી, ઊંઘ અને પાચન નિયંત્રિત કરતું ન્યુરોકેમિકલ',
    },
    definition: {
      en: 'A primary neurotransmitter found extensively in the central nervous system and gastrointestinal tract, playing a foundational role in stabilizing mood, emotional resilience, sleep architecture, appetite, and gut motility.',
      hi: 'मस्तिष्क और पेट का एक प्रमुख रसायन जो हमारी मनःस्थिति को शांत, सकारात्मक और संतुलित बनाए रखने में केंद्रीय भूमिका निभाता है।',
      gu: 'મગજ અને પાચનતંત્રનું અત્યંત મહત્વનું કેમિકલ જે મૂડ સ્થિર રાખવા, ગાઢ ઊંઘ લાવવા અને ચિંતા મુક્ત રહેવામાં મદદ કરે છે.',
    },
    clinicalContext: {
      en: 'Underactivity in serotonergic networks is strongly linked to depressive episodes, anxiety disorders, and OCD; primarily boosted by SSRIs.',
      hi: 'इसकी कमी से अवसाद, अत्यधिक चिंता और ओसीडी के लक्षण उत्पन्न होते हैं; एसएसआरआई दवाएं इसे बढ़ाती हैं।',
      gu: 'આની અછતથી ડિપ્રેશન અને ચિંતા થાય છે; એન્ટીડિપ્રેશન દવાઓ આ રસાયણને સામાન્ય કરે છે.',
    },
    relatedType: 'medication',
    relatedId: 'antidepressants',
  },
  {
    id: 'snri',
    term: {
      en: 'SNRI (Serotonin-Norepinephrine Reuptake Inhibitor)',
      hi: 'एसएनआरआई (SNRI / दोहरे असर वाली एंटीडिप्रेसेंट दवाएं)',
      gu: 'SNRI (સેરોટોનિન-નોરેડ્રેનાલિન બેવડી અસરવાળી દવા)',
    },
    pronunciationOrAlt: {
      en: 'Dual-action antidepressant class (e.g., Venlafaxine, Duloxetine)',
      hi: 'सेरोटोनिन और नॉरएड्रेनालिन दोनों को संतुलित करने वाली दवाएं',
      gu: 'સેરોટોનિન અને નોરેડ્રેનાલિન બંનેનું પ્રમાણ વધારતી આધુનિક દવા',
    },
    definition: {
      en: 'A modern class of antidepressants that simultaneously block the reabsorption of both serotonin and norepinephrine, effectively treating major depression, anxiety, and neuropathic pain syndromes.',
      hi: 'एंटीडिप्रेसेंट दवाओं का वह वर्ग जो मस्तिष्क में एक साथ दो महत्वपूर्ण रसायनों (सेरोटोनिन और नॉरएड्रेनालिन) को बढ़ाकर मानसिक शक्ति और ऊर्जा लौटाता है।',
      gu: 'ડિપ્રેશન, તીવ્ર ચિંતા અને શરીરના જૂના દુખાવા (નર્વ પેઇન) માં ખૂબ જ ઉપયોગી આધુનિક દવાઓ.',
    },
    clinicalContext: {
      en: 'Particularly valuable when depression is accompanied by chronic physical pain, lethargy, or cognitive sluggishness.',
      hi: 'जब डिप्रेशन के साथ अत्यधिक कमजोरी, थकान या बदन दर्द भी हो, तब यह वर्ग विशेष रूप से लाभकारी होता है।',
      gu: 'જ્યારે ડિપ્રેશનની સાથે શરીર તૂટતું હોય અને થાક લાગતો હોય ત્યારે આ દવા ખૂબ રાહત આપે છે.',
    },
    relatedType: 'medication',
    relatedId: 'antidepressants',
  },
  {
    id: 'ssri',
    term: {
      en: 'SSRI (Selective Serotonin Reuptake Inhibitor)',
      hi: 'एसएसआरआई (SSRI / सबसे आम व सुरक्षित एंटीडिप्रेसेंट दवाएं)',
      gu: 'SSRI (સૌથી સુરક્ષિત અને સામાન્ય એન્ટીડિપ્રેશન દવાઓ)',
    },
    pronunciationOrAlt: {
      en: 'First-line antidepressant class (e.g., Escitalopram, Sertraline)',
      hi: 'एस्किटालोप्राम, सेरट्रालीन जैसी पहली पसंद की डिप्रेशन-रोधी दवाएं',
      gu: 'એસિટાલોપ્રામ કે સર્ટ્રાલાઇન જેવી બિન-નશાકારક સુરક્ષિત દવાઓ',
    },
    definition: {
      en: 'The most widely prescribed first-line class of psychotropic medications, selectively preventing the reabsorption of serotonin to enhance synaptic signaling with minimal anticholinergic side effects.',
      hi: 'डिप्रेशन और चिंता विकारों के लिए दुनिया में सबसे अधिक इस्तेमाल की जाने वाली सुरक्षित दवाएं, जो मस्तिष्क में सेरोटोनिन को सामान्य करती हैं और जिनकी कोई लत नहीं लगती।',
      gu: 'ડિપ્રેશન અને ગભરાટ માટે દુનિયાભરમાં સૌથી વધુ લખાતી સુરક્ષિત દવાઓ, જેની કોઈ આદત કે નશો થતો નથી.',
    },
    clinicalContext: {
      en: 'Standard initial pharmacotherapy for major depression, generalized anxiety, panic disorder, and OCD.',
      hi: 'डिप्रेशन, पैनिक अटैक और ओसीडी के उपचार में डॉक्टरों की पहली पसंद। पूर्ण लाभ 2 से 4 सप्ताह में दिखता है।',
      gu: 'ડિપ્રેશન અને પેનિક અટેકમાં પ્રથમ પસંદગી; સંપૂર્ણ અસર જોવા માટે ૨ થી ૪ અઠવાડિયા લાગે છે.',
    },
    relatedType: 'medication',
    relatedId: 'antidepressants',
  },
  {
    id: 'stigma',
    term: {
      en: 'Mental Health Stigma (Social & Self-Stigma)',
      hi: 'सामाजिक कलंक (Stigma / मानसिक रोगों से जुड़ा अंधविश्वास व भय)',
      gu: 'સામાજિક કલંક અને ક્ષોભ (સ્ટીગ્મા / માનસિક રોગ પ્રત્યેનો અણગમો)',
    },
    pronunciationOrAlt: {
      en: 'Negative stereotypes and prejudice against mental health conditions',
      hi: 'मानसिक बीमारी को चरित्र की कमी या पागलपन मानकर किया जाने वाला भेदभाव',
      gu: 'માનસિક બીમારીવાળી વ્યક્તિ સાથે કરાતો ભેદભાવ કે શરમ',
    },
    definition: {
      en: 'Prejudicial attitudes, discriminatory stereotypes, and social exclusion directed against individuals experiencing mental health disorders, often leading to internalized self-shame and hesitation to seek lifesaving psychiatric care.',
      hi: 'समाज में मानसिक बीमारी को लेकर फैला हुआ वह अज्ञान और डर जिसके कारण लोग डॉक्टर के पास जाने से कतराते हैं और चुपचाप पीड़ा सहते रहते हैं।',
      gu: 'માનસિક રોગને ગાંડપણ કે નબળાઈ ગણીને સમાજમાં કરવામાં આવતો અન્યાય, જેને કારણે દર્દી ડૉક્ટર પાસે જતાં અચકાય છે.',
    },
    clinicalContext: {
      en: 'The single greatest global barrier preventing timely diagnosis and recovery in psychiatry.',
      hi: 'समय पर इलाज न मिलने का सबसे बड़ा कारण यह सामाजिक डर ही है। समझदारी और संवाद से ही इसे मिटाया जा सकता है।',
      gu: 'સમયસર સારવાર ન લેવા પાછળ આ લોકલાજ અને ડર મુખ્ય કારણ છે; માનસિક રોગ અન્ય શારીરિક રોગો જેવા જ છે.',
    },
    relatedType: 'condition',
    relatedId: 'depression',
  },
  {
    id: 'tapering',
    term: {
      en: 'Medication Tapering',
      hi: 'दवा की खुराक धीरे-धीरे घटाना (Medication Tapering)',
      gu: 'દવા ધીમે ધીમે ઘટાડીને બંધ કરવી (ટેપરિંગ)',
    },
    pronunciationOrAlt: {
      en: 'Gradual, medically supervised dose reduction',
      hi: 'डॉक्टर की निगरानी में खुराक को चरणबद्ध तरीके से कम करना',
      gu: 'ડૉક્ટરની સલાહ મુજબ દવાનો ડોઝ સ્ટેપ બાય સ્ટેપ ઘટાડવો',
    },
    definition: {
      en: 'The deliberate, systematic, and gradual reduction of a medication dose over weeks to months to safely allow neurobiological systems to recalibrate and prevent discontinuation or rebound syndromes.',
      hi: 'बीमारी ठीक होने के बाद डॉक्टर की देखरेख में दवा को एक साथ बंद करने के बजाय धीरे-धीरे कम करने की सुरक्षित वैज्ञानिक प्रक्रिया।',
      gu: 'દર્દી સાજો થઈ ગયા પછી દવા અચાનક બંધ ન કરતાં, મગજને અનુકૂળ રહે તે રીતે ધીમે ધીમે માત્રા ઘટાડવાની દાક્તરી પ્રક્રિયા.',
    },
    clinicalContext: {
      en: 'Crucial for antidepressants, antipsychotics, and sedatives to prevent rebound insomnia or withdrawal agitation; never attempt cold-turkey cessation.',
      hi: 'अपनी मर्जी से दवा कभी बंद न करें; हमेशा मनोचिकित्सक की सलाह से ही धीरे-धीरे खुराक कम करवाएं।',
      gu: 'પોતાની મેળે દવા ક્યારેય અચાનક બંધ કરવી નહીં; હંમેશા મનોચિકિત્સકની દેખરેખ હેઠળ જ બંધ કરવી.',
    },
    relatedType: 'medication',
    relatedId: 'antidepressants',
  },
];


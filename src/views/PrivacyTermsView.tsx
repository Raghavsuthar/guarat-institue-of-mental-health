import React from 'react';
import { Language } from '../types';

type LegalPage = 'privacy' | 'terms';

interface PrivacyTermsViewProps {
  currentLang: Language;
  page: LegalPage;
}

const copy = {
  en: {
    privacyTitle: 'Privacy notice',
    termsTitle: 'Terms of use',
    updated: 'Last updated: 24 October 2026',
    draft: 'This notice describes the current intended behaviour of the website. Some hosting, AI-provider, retention, and legal details still require owner verification and legal review; do not treat this as legal advice.',
    privacy: [
      ['What this site is', 'Mindcare is a public mental-health education website. It is not an emergency service, clinical record system, or a substitute for care from a qualified professional.'],
      ['Information stored on your device', 'The site stores your language preference and a local analytics mirror in browser local storage. You can clear site data in your browser settings. Private browsing, browser extensions, and device sharing may affect how this information behaves.'],
      ['Aggregate analytics', 'When analytics are enabled and your browser does not send Do Not Track, the site may send aggregate events to its server. Event payloads can include a page path, language, referring domain, broad device class, event type, and timestamp. They are intended for aggregate counting, not identification. Production storage configuration and retention should be confirmed by the site owner; do not assume analytics are disabled or that data is never processed.'],
      ['Educational Q&A', 'If you use the Q&A assistant, your message is sent to the site API for processing and may be sent to an AI provider configured by the site owner. Do not submit your name, address, phone number, medical-record details, passwords, or information that identifies you or another person. Avoid sharing sensitive personal health information.'],
      ['Crisis detection limitations', 'The assistant attempts to recognize some crisis-related phrases and show support information, but automated detection can miss a crisis or misunderstand a message. Do not rely on it for emergency assessment or response. In India, call Tele-MANAS at 14416 for mental-health support or 112 for an immediate emergency.'],
      ['External services and links', 'Embedded videos and external reference links are provided by third parties. Those services may collect information under their own policies, especially after you open or play their content. Review their policies separately.'],
      ['Questions and requests', 'A contact channel for privacy requests has not yet been verified on this site. Until one is published, avoid sending sensitive information through public comments or unrelated channels.'],
      ['Changes and review', 'This notice is a plain-language draft and must be reviewed by the site owner and a qualified legal/privacy adviser before it is relied on as a formal policy. Data-flow, retention, processor, and contact details should be updated when verified.']
    ],
    terms: [
      ['Educational use only', 'Content is general information for public education. It does not provide a diagnosis, personalized treatment plan, prescription, emergency consultation, or guarantee of clinical accuracy for every individual.'],
      ['Do not delay care', 'Do not delay, stop, or change medical care or prescribed treatment because of something on this site. Discuss personal symptoms and treatment decisions with a qualified clinician. For an immediate emergency in India, call 112; for mental-health support, call Tele-MANAS at 14416.'],
      ['Screeners and self-help tools', 'Screening questionnaires and interactive exercises, where available, are educational aids and are not a diagnosis. A score cannot replace a clinical assessment. Stop an exercise if it makes you feel unsafe or significantly worse and seek appropriate support.'],
      ['AI assistant', 'AI-generated responses may be incomplete, outdated, or incorrect. The assistant is not a clinician and must not be used for medication dosing, diagnosis, or crisis management. Do not submit identifying or sensitive information.'],
      ['Third-party content', 'External links, videos, and services are controlled by their respective providers. Mindcare does not guarantee their ongoing availability, accessibility, accuracy, or privacy practices.'],
      ['Responsible use', 'Do not misuse the website, attempt to access protected areas without authorization, disrupt service, or submit another person’s private information.'],
      ['Intellectual property and licensing', 'The site owner has not yet published a definitive code/content licence for all site materials. Do not assume that all text, graphics, code, or third-party media may be copied or redistributed. Respect each source’s attribution and licence terms.'],
      ['No professional relationship', 'Using this website or its assistant does not establish a doctor–patient relationship or create a clinical service obligation.'],
      ['Status of these terms', 'These plain-language terms are a draft pending owner and legal review. Applicable law, jurisdiction, complaint/contact details, and formal liability language have not been confirmed here.']
    ],
    privacyLink: 'Privacy notice',
    termsLink: 'Terms of use',
    home: 'Back to home',
  },
  hi: {
    privacyTitle: 'गोपनीयता सूचना',
    termsTitle: 'उपयोग की शर्तें',
    updated: 'अंतिम अपडेट: 24 अक्टूबर 2026',
    draft: 'यह सूचना वेबसाइट के वर्तमान अभिप्रेत व्यवहार का वर्णन करती है। होस्टिंग, AI प्रदाता, डेटा-संग्रह अवधि और कानूनी विवरणों की पुष्टि तथा कानूनी समीक्षा अभी बाकी है; इसे कानूनी सलाह न मानें।',
    privacy: [
      ['यह वेबसाइट क्या है', 'Mindcare मानसिक स्वास्थ्य से जुड़ी सार्वजनिक शैक्षणिक वेबसाइट है। यह आपातकालीन सेवा, क्लिनिकल रिकॉर्ड प्रणाली या योग्य पेशेवर की देखभाल का विकल्प नहीं है।'],
      ['आपके डिवाइस पर जानकारी', 'वेबसाइट आपकी भाषा-पसंद और स्थानीय विश्लेषण की एक प्रति ब्राउज़र के local storage में रखती है। आप ब्राउज़र सेटिंग्स में वेबसाइट का डेटा मिटा सकते हैं। निजी ब्राउज़िंग, एक्सटेंशन और साझा डिवाइस से व्यवहार बदल सकता है।'],
      ['समेकित विश्लेषण', 'जब विश्लेषण सक्षम हो और आपका ब्राउज़र Do Not Track न भेजे, तो वेबसाइट सर्वर को समेकित इवेंट भेज सकती है। इनमें पेज-पथ, भाषा, रेफ़र करने वाला डोमेन, डिवाइस की सामान्य श्रेणी, इवेंट प्रकार और समय शामिल हो सकते हैं। इनका उद्देश्य समेकित गणना है, पहचान करना नहीं। उत्पादन में डेटा कहाँ और कितने समय तक रखा जाता है, इसकी पुष्टि साइट-मालिक को करनी है; यह न मानें कि विश्लेषण हमेशा बंद है या डेटा कभी संसाधित नहीं होता।'],
      ['शैक्षणिक प्रश्नोत्तर', 'प्रश्नोत्तर सहायक इस्तेमाल करने पर आपका संदेश वेबसाइट API को भेजा जाता है और साइट-मालिक द्वारा कॉन्फ़िगर AI प्रदाता को भी भेजा जा सकता है। अपना नाम, पता, फ़ोन, मेडिकल रिकॉर्ड, पासवर्ड या अपनी अथवा किसी अन्य व्यक्ति की पहचान बताने वाली जानकारी न दें। संवेदनशील व्यक्तिगत स्वास्थ्य जानकारी साझा करने से बचें।'],
      ['संकट पहचान की सीमाएँ', 'सहायक कुछ संकट-संबंधी वाक्य पहचानकर सहायता दिखाने का प्रयास करता है, लेकिन स्वचालित पहचान संकट को छोड़ सकती है या संदेश को गलत समझ सकती है। आपातकालीन आकलन या प्रतिक्रिया के लिए इस पर निर्भर न रहें। भारत में मानसिक स्वास्थ्य सहायता के लिए Tele-MANAS 14416 और तत्काल आपात स्थिति में 112 पर कॉल करें।'],
      ['बाहरी सेवाएँ और लिंक', 'वीडियो और बाहरी संदर्भ लिंक तीसरे पक्ष द्वारा दिए जाते हैं। उनकी सामग्री खोलने या चलाने पर वे अपनी नीतियों के अनुसार जानकारी एकत्र कर सकते हैं। उनकी नीतियाँ अलग से देखें।'],
      ['प्रश्न और अनुरोध', 'इस वेबसाइट पर गोपनीयता अनुरोधों के लिए संपर्क माध्यम अभी सत्यापित नहीं है। जब तक इसे प्रकाशित नहीं किया जाता, सार्वजनिक टिप्पणियों या असंबंधित माध्यमों में संवेदनशील जानकारी न भेजें।'],
      ['बदलाव और समीक्षा', 'यह सरल भाषा में तैयार मसौदा है। औपचारिक नीति के रूप में उपयोग से पहले साइट-मालिक और योग्य कानूनी/गोपनीयता सलाहकार इसकी समीक्षा करें। डेटा-प्रवाह, अवधि, सेवा प्रदाता और संपर्क विवरण सत्यापित होने पर अपडेट किए जाने चाहिए।']
    ],
    terms: [
      ['केवल शैक्षणिक उपयोग', 'सामग्री सामान्य जन-शिक्षा के लिए है। यह निदान, व्यक्तिगत उपचार योजना, दवा का पर्चा, आपातकालीन परामर्श या हर व्यक्ति के लिए नैदानिक सटीकता की गारंटी नहीं देती।'],
      ['देखभाल में देरी न करें', 'इस वेबसाइट की जानकारी के कारण चिकित्सा देखभाल या निर्धारित उपचार में देरी न करें, उसे बंद न करें और न बदलें। व्यक्तिगत लक्षणों और उपचार के निर्णयों पर योग्य चिकित्सक से चर्चा करें। भारत में तत्काल आपात स्थिति में 112 और मानसिक स्वास्थ्य सहायता के लिए Tele-MANAS 14416 पर कॉल करें।'],
      ['स्क्रीनिंग और स्व-सहायता उपकरण', 'जहाँ उपलब्ध हों, प्रश्नावलियाँ और इंटरैक्टिव अभ्यास शैक्षणिक साधन हैं, निदान नहीं। कोई स्कोर क्लिनिकल मूल्यांकन का विकल्प नहीं है। यदि कोई अभ्यास असुरक्षित महसूस कराए या परेशानी बढ़ाए, तो उसे रोकें और उचित सहायता लें।'],
      ['AI सहायक', 'AI से बने उत्तर अधूरे, पुराने या गलत हो सकते हैं। सहायक चिकित्सक नहीं है; इसका उपयोग दवा की खुराक, निदान या संकट प्रबंधन के लिए न करें। पहचान बताने वाली या संवेदनशील जानकारी न दें।'],
      ['तीसरे पक्ष की सामग्री', 'बाहरी लिंक, वीडियो और सेवाएँ उनके प्रदाताओं के नियंत्रण में हैं। Mindcare उनकी निरंतर उपलब्धता, पहुँच, सटीकता या गोपनीयता व्यवहार की गारंटी नहीं देता।'],
      ['जिम्मेदार उपयोग', 'वेबसाइट का दुरुपयोग न करें, बिना अनुमति सुरक्षित क्षेत्रों तक पहुँचने का प्रयास न करें, सेवा बाधित न करें और किसी अन्य व्यक्ति की निजी जानकारी न भेजें।'],
      ['बौद्धिक संपदा और लाइसेंस', 'साइट-मालिक ने अभी वेबसाइट की सभी सामग्री और कोड के लिए अंतिम लाइसेंस प्रकाशित नहीं किया है। यह न मानें कि सभी लेख, चित्र, कोड या तृतीय-पक्ष मीडिया की प्रतिलिपि या पुनर्वितरण की अनुमति है। स्रोतों के श्रेय और लाइसेंस का सम्मान करें।'],
      ['पेशेवर संबंध नहीं', 'इस वेबसाइट या सहायक का उपयोग करने से डॉक्टर–मरीज संबंध स्थापित नहीं होता और न ही क्लिनिकल सेवा का दायित्व बनता है।'],
      ['इन शर्तों की स्थिति', 'ये सरल भाषा की शर्तें मसौदा हैं और मालिक तथा कानूनी समीक्षा लंबित है। लागू कानून, क्षेत्राधिकार, शिकायत/संपर्क विवरण और औपचारिक दायित्व भाषा की यहाँ पुष्टि नहीं हुई है।']
    ],
    privacyLink: 'गोपनीयता सूचना',
    termsLink: 'उपयोग की शर्तें',
    home: 'मुखपृष्ठ पर वापस जाएँ',
  },
  gu: {
    privacyTitle: 'ગોપનીયતા સૂચના',
    termsTitle: 'ઉપયોગની શરતો',
    updated: 'છેલ્લે અપડેટ: 24 ઑક્ટોબર 2026',
    draft: 'આ સૂચના વેબસાઇટના હાલના ઇરાદિત વર્તનનું વર્ણન કરે છે. હોસ્ટિંગ, AI પ્રદાતા, ડેટા જાળવણી અને કાનૂની વિગતોની પુષ્ટિ તથા કાનૂની સમીક્ષા બાકી છે; આ કાનૂની સલાહ નથી.',
    privacy: [
      ['આ વેબસાઇટ શું છે', 'Mindcare માનસિક આરોગ્ય અંગેની જાહેર શૈક્ષણિક વેબસાઇટ છે. તે કટોકટી સેવા, ક્લિનિકલ રેકોર્ડ સિસ્ટમ અથવા યોગ્ય વ્યાવસાયિકની સંભાળનો વિકલ્પ નથી.'],
      ['તમારા ઉપકરણ પરની માહિતી', 'વેબસાઇટ તમારી ભાષાની પસંદગી અને સ્થાનિક એનાલિટિક્સની નકલ બ્રાઉઝરના local storage માં રાખે છે. તમે બ્રાઉઝર સેટિંગ્સમાં સાઇટ ડેટા સાફ કરી શકો છો. ખાનગી બ્રાઉઝિંગ, એક્સ્ટેન્શન અને શેર કરેલા ઉપકરણથી વર્તન બદલાઈ શકે છે.'],
      ['એકત્રિત એનાલિટિક્સ', 'એનાલિટિક્સ સક્ષમ હોય અને તમારું બ્રાઉઝર Do Not Track ન મોકલે ત્યારે વેબસાઇટ સર્વરને એકત્રિત ઇવેન્ટ મોકલી શકે છે. તેમાં પેજ પાથ, ભાષા, રેફર કરતો ડોમેન, ઉપકરણની સામાન્ય શ્રેણી, ઇવેન્ટનો પ્રકાર અને સમય હોઈ શકે છે. તેનો હેતુ એકત્રિત ગણતરી છે, વ્યક્તિની ઓળખ કરવી નહીં. ઉત્પાદન પર ડેટા ક્યાં અને કેટલો સમય રહે છે તેની સાઇટ માલિકે પુષ્ટિ કરવી જરૂરી છે; એનાલિટિક્સ હંમેશાં બંધ છે અથવા ડેટા ક્યારેય પ્રક્રિયા થતો નથી એવું માનશો નહીં.'],
      ['શૈક્ષણિક પ્રશ્નોત્તરી', 'પ્રશ્નોત્તરી સહાયક વાપરો ત્યારે તમારો સંદેશ સાઇટ API ને મોકલાય છે અને સાઇટ માલિકે ગોઠવેલા AI પ્રદાતાને પણ મોકલાઈ શકે છે. તમારું નામ, સરનામું, ફોન, મેડિકલ રેકોર્ડ, પાસવર્ડ અથવા તમારી કે અન્ય વ્યક્તિની ઓળખ જણાવતી માહિતી ન આપો. સંવેદનશીલ વ્યક્તિગત આરોગ્ય માહિતી શેર કરવાનું ટાળો.'],
      ['કટોકટી ઓળખની મર્યાદાઓ', 'સહાયક કેટલીક કટોકટી સંબંધિત ભાષા ઓળખીને સહાય બતાવવાનો પ્રયાસ કરે છે, પરંતુ સ્વચાલિત ઓળખ કટોકટી ચૂકી શકે અથવા સંદેશ ખોટો સમજી શકે છે. કટોકટીના મૂલ્યાંકન કે પ્રતિભાવ માટે તેના પર આધાર ન રાખો. ભારતમાં માનસિક આરોગ્ય સહાય માટે Tele-MANAS 14416 અને તાત્કાલિક કટોકટીમાં 112 પર કૉલ કરો.'],
      ['બાહ્ય સેવાઓ અને લિંક્સ', 'વિડિયો અને બાહ્ય સંદર્ભ લિંક્સ તૃતીય પક્ષ દ્વારા આપવામાં આવે છે. તેમની સામગ્રી ખોલતાં અથવા ચલાવતાં તેઓ પોતાની નીતિ મુજબ માહિતી એકત્રિત કરી શકે છે. તેમની નીતિઓ અલગથી વાંચો.'],
      ['પ્રશ્નો અને વિનંતીઓ', 'આ વેબસાઇટ પર ગોપનીયતા વિનંતીઓ માટેનું સંપર્ક માધ્યમ હજી ચકાસાયેલું નથી. તે પ્રકાશિત થાય ત્યાં સુધી જાહેર ટિપ્પણીઓ અથવા અસંબંધિત માધ્યમોમાં સંવેદનશીલ માહિતી મોકલશો નહીં.'],
      ['ફેરફારો અને સમીક્ષા', 'આ સરળ ભાષાનો મુસદ્દો છે. ઔપચારિક નીતિ તરીકે ઉપયોગ કરતાં પહેલાં સાઇટ માલિક અને યોગ્ય કાનૂની/ગોપનીયતા સલાહકાર તેની સમીક્ષા કરે. ડેટા પ્રવાહ, જાળવણી સમય, સેવા પ્રદાતા અને સંપર્ક વિગતોની પુષ્ટિ થયા પછી અપડેટ કરવી જોઈએ.']
    ],
    terms: [
      ['માત્ર શૈક્ષણિક ઉપયોગ', 'સામગ્રી સામાન્ય જાહેર શિક્ષણ માટે છે. તે નિદાન, વ્યક્તિગત સારવાર યોજના, દવાનું પ્રિસ્ક્રિપ્શન, કટોકટી પરામર્શ અથવા દરેક વ્યક્તિ માટે ક્લિનિકલ ચોકસાઈની ખાતરી આપતી નથી.'],
      ['સંભાળમાં વિલંબ ન કરો', 'આ વેબસાઇટની માહિતીના કારણે તબીબી સંભાળ અથવા નિર્ધારિત સારવારમાં વિલંબ ન કરો, તેને બંધ ન કરો કે બદલો નહીં. વ્યક્તિગત લક્ષણો અને સારવારના નિર્ણય માટે યોગ્ય તબીબ સાથે ચર્ચા કરો. ભારતમાં તાત્કાલિક કટોકટી માટે 112 અને માનસિક આરોગ્ય સહાય માટે Tele-MANAS 14416 પર કૉલ કરો.'],
      ['સ્ક્રીનર્સ અને સ્વ-સહાય સાધનો', 'જ્યાં ઉપલબ્ધ હોય ત્યાં પ્રશ્નાવલીઓ અને ઇન્ટરેક્ટિવ કસરતો શૈક્ષણિક સાધનો છે, નિદાન નથી. કોઈ સ્કોર ક્લિનિકલ મૂલ્યાંકનનો વિકલ્પ નથી. કોઈ કસરત અસુરક્ષિત લાગે અથવા તકલીફ વધારે તો તેને રોકો અને યોગ્ય સહાય મેળવો.'],
      ['AI સહાયક', 'AI દ્વારા બનાવેલા જવાબ અધૂરા, જૂના અથવા ખોટા હોઈ શકે છે. સહાયક તબીબ નથી; દવાની માત્રા, નિદાન અથવા કટોકટી સંભાળ માટે તેનો ઉપયોગ ન કરો. ઓળખ દર્શાવતી અથવા સંવેદનશીલ માહિતી ન આપો.'],
      ['તૃતીય પક્ષની સામગ્રી', 'બાહ્ય લિંક્સ, વિડિયો અને સેવાઓ તેમના પ્રદાતાઓના નિયંત્રણમાં છે. Mindcare તેમની સતત ઉપલબ્ધતા, સુલભતા, ચોકસાઈ અથવા ગોપનીયતા પદ્ધતિની ખાતરી આપતું નથી.'],
      ['જવાબદાર ઉપયોગ', 'વેબસાઇટનો દુરુપયોગ ન કરો, મંજૂરી વિના સુરક્ષિત વિભાગોમાં પ્રવેશવાનો પ્રયાસ ન કરો, સેવા ખોરવશો નહીં અને અન્ય વ્યક્તિની ખાનગી માહિતી મોકલશો નહીં.'],
      ['બૌદ્ધિક સંપત્તિ અને લાઇસન્સ', 'સાઇટ માલિકે હજી તમામ સાઇટ સામગ્રી અને કોડ માટે અંતિમ લાઇસન્સ જાહેર કર્યું નથી. બધા લખાણ, ચિત્રો, કોડ અથવા તૃતીય પક્ષની મીડિયા સામગ્રી નકલ કે ફરી વહેંચી શકાય છે એવું માનશો નહીં. સ્રોતનું શ્રેય અને લાઇસન્સ નિયમોનું પાલન કરો.'],
      ['વ્યાવસાયિક સંબંધ નથી', 'આ વેબસાઇટ અથવા સહાયકનો ઉપયોગ કરવાથી ડૉક્ટર–દર્દી સંબંધ સ્થાપિત થતો નથી અને ક્લિનિકલ સેવા આપવાની ફરજ ઊભી થતી નથી.'],
      ['આ શરતોની સ્થિતિ', 'આ સરળ ભાષાની શરતો મુસદ્દો છે અને માલિક તથા કાનૂની સમીક્ષા બાકી છે. લાગુ કાયદો, અધિકારક્ષેત્ર, ફરિયાદ/સંપર્ક વિગતો અને ઔપચારિક જવાબદારીની ભાષાની અહીં પુષ્ટિ થઈ નથી.']
    ],
    privacyLink: 'ગોપનીયતા સૂચના',
    termsLink: 'ઉપયોગની શરતો',
    home: 'મુખ્ય પૃષ્ઠ પર પાછા જાઓ',
  },
} satisfies Record<Language, {
  privacyTitle: string;
  termsTitle: string;
  updated: string;
  draft: string;
  privacy: [string, string][];
  terms: [string, string][];
  privacyLink: string;
  termsLink: string;
  home: string;
}>;

export const PrivacyTermsView: React.FC<PrivacyTermsViewProps> = ({ currentLang, page }) => {
  const t = copy[currentLang];
  const title = page === 'privacy' ? t.privacyTitle : t.termsTitle;
  const sections = page === 'privacy' ? t.privacy : t.terms;

  return (
    <article className="aurora-detail-shell mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-8 lg:p-10">
      <a href={`/${currentLang}`} className="text-sm font-semibold text-teal-800 underline-offset-4 hover:underline">
        ← {t.home}
      </a>
      <header className="mt-6 border-b border-slate-200 pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">Mindcare</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">{t.updated}</p>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950">{t.draft}</p>
      </header>
      <nav aria-label={currentLang === 'en' ? 'Legal pages' : currentLang === 'hi' ? 'कानूनी पृष्ठ' : 'કાનૂની પૃષ્ઠો'} className="flex flex-wrap gap-3 py-5">
        <a className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-900 hover:bg-teal-50" href={`/${currentLang}/privacy`}>{t.privacyLink}</a>
        <a className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-900 hover:bg-teal-50" href={`/${currentLang}/terms`}>{t.termsLink}</a>
      </nav>
      <div className="space-y-7">
        {sections.map(([heading, body]) => (
          <section key={heading} className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">{heading}</h2>
            <p className="text-sm leading-7 text-slate-700 sm:text-base">{body}</p>
          </section>
        ))}
      </div>
    </article>
  );
};

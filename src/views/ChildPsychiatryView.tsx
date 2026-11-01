import React, { useState, useEffect, useMemo } from 'react';
import { Shield, BookOpen, AlertCircle, ArrowRight, Search, Phone, School, Heart, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';
import { Language, ChildAdolescentTopic } from '../types';
import { childAdolescentTopics } from '../data/childAdolescent';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { NeurodevelopmentalIllustration } from '../components/visuals';

interface ChildPsychiatryViewProps {
  currentLang: Language;
  onSelectTopic: (topic: ChildAdolescentTopic) => void;
  onOpenCrisis: () => void;
}

export const ChildPsychiatryView: React.FC<ChildPsychiatryViewProps> = ({
  currentLang,
  onSelectTopic,
  onOpenCrisis,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'neuro' | 'emotional' | 'behavioral' | 'lifestyle'>('all');
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en'
        ? 'Child & Adolescent Mental Health | Pediatric Psychiatry Guide'
        : currentLang === 'hi'
        ? 'बाल एवं किशोर मानसिक स्वास्थ्य | बाल मनोचिकित्सा मार्गदर्शिका'
        : 'બાળ અને કિશોર માનસિક સ્વાસ્થ્ય | માર્ગદર્શન',
      description: currentLang === 'en'
        ? 'Evidence-based pediatric psychiatry education for parents, caregivers, and teachers: ADHD, Autism, anxiety, depression, dyslexia, behavioral challenges, and developmental guidance.'
        : currentLang === 'hi'
        ? 'माता-पिता, शिक्षकों और देखभालकर्ताओं के लिए बाल मनोचिकित्सा: एडीएचडी, ऑटिज्म, चिंता, अवसाद, डिस्लेक्सिया और विकास संबंधी वैज्ञानिक जानकारी।'
        : 'વાલીઓ અને શિક્ષકો માટે બાળ અને કિશોર માનસિક સ્વાસ્થ્ય માર્ગદર્શન: એડીએચડી, ઓટિઝમ, ચિંતા અને ડિપ્રેશન.',
      path: 'child-psychiatry',
      lang: currentLang,
    });
  }, [currentLang]);

  // Topic classification filter
  const filteredTopics = useMemo(() => {
    return childAdolescentTopics.filter((topic) => {
      const name = topic.name[currentLang].toLowerCase();
      const med = topic.medicalTerms[currentLang].toLowerCase();
      const tagline = topic.tagline[currentLang].toLowerCase();
      const query = searchQuery.toLowerCase().trim();

      const matchesSearch = !query || name.includes(query) || med.includes(query) || tagline.includes(query);
      if (!matchesSearch) return false;

      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'neuro') {
        return ['child-adhd', 'autism-spectrum-disorder', 'child-learning-disorders', 'child-ocd-and-tics'].includes(topic.id);
      }
      if (selectedCategory === 'emotional') {
        return ['child-anxiety-disorders', 'child-depression'].includes(topic.id);
      }
      if (selectedCategory === 'behavioral') {
        return ['child-behavior-odd', 'child-trauma-and-stress'].includes(topic.id);
      }
      if (selectedCategory === 'lifestyle') {
        return ['child-eating-disorders', 'adolescent-substance-and-tech'].includes(topic.id);
      }
      return true;
    });
  }, [currentLang, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
            {currentLang === 'en' ? 'Pediatric & Adolescent Psychiatry' : currentLang === 'hi' ? 'बाल एवं किशोर मनोचिकित्सा' : 'બાળ અને કિશોર મનોચિકિત્સા'}
          </span>
          <span className="text-xs text-stone-500 font-medium">
            {currentLang === 'en' ? 'Educate — Do Not Diagnose' : currentLang === 'hi' ? 'समझें — खुद बीमारी का ठप्पा न लगाएं' : 'સમજો — નિદાન ન કરો'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {currentLang === 'en'
            ? 'Child & Adolescent Mental Health'
            : currentLang === 'hi'
            ? 'बाल एवं किशोर मानसिक स्वास्थ्य'
            : 'બાળ અને કિશોર માનસિક સ્વાસ્થ્ય'}
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Written specifically for parents, caregivers, teachers, and school counselors to recognize early signs, differentiate typical developmental milestones from clinical concerns, and connect with qualified child psychiatrists.'
            : currentLang === 'hi'
            ? 'माता-पिता, अभिभावकों, शिक्षकों और स्कूल काउंसलरों के लिए तैयार की गई वैज्ञानिक मार्गदर्शिका: सामान्य बचपन के व्यवहार और चिकित्सकीय चिंताओं में अंतर समझें और समय पर सही विशेषज्ञ से परामर्श लें।'
            : 'વાલીઓ, શિક્ષકો અને કાઉન્સિલરો માટે વૈજ્ઞાનિક માર્ગદર્શિકા: બાળકના સામાન્ય વર્તન અને માનસિક મુશ્કેલીઓ વચ્ચેનો ભેદ સમજો અને યોગ્ય માર્ગદર્શન મેળવો.'}
        </p>
      </div>

      {/* Visual Header Banner */}
      <div className="w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs bg-white">
        <NeurodevelopmentalIllustration className="w-full h-36 sm:h-44" />
      </div>

      {/* AUDIENCE FRAMING & CLINICAL DISCLAIMER BANNER */}
      <div className="p-5 sm:p-6 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-3">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h2 className="font-semibold text-sm sm:text-base text-emerald-950">
              {currentLang === 'en'
                ? 'Clinical Compass: Understanding Developing Minds Without Stigma or Hasty Labels'
                : currentLang === 'hi'
                ? 'महत्वपूर्ण सिद्धांत: बच्चों को समझे बिना किसी बीमारी का ठप्पा न लगाएं'
                : 'મહત્વપૂર્ણ સિદ્ધાંત: બાળકના વર્તનને સમજો, લેબલ ન લગાવો'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
              {currentLang === 'en'
                ? 'Children\'s brains and behaviors are in constant, dynamic development. High energy, emotional outbursts, and intense passions are frequent, normal parts of growing up. This educational resource is designed to help families recognize when challenges cross into clinical distress or functional impairment. It is never a substitute for a comprehensive, in-person clinical evaluation by a licensed Child & Adolescent Psychiatrist.'
                : currentLang === 'hi'
                ? 'बच्चों का मस्तिष्क निरंतर विकसित हो रहा होता है। अत्यधिक ऊर्जा, गुस्सा या कभी-कभार शरारतें बचपन का स्वाभाविक हिस्सा हैं। इस मार्गदर्शिका का उद्देश्य केवल यह समझना है कि कब ये कठिनाइयां बच्चे की पढ़ाई, दोस्ती या विकास में स्थायी रुकावट बन रही हैं। यह किसी योग्य बाल मनोचिकित्सक द्वारा व्यक्तिगत जांच का विकल्प नहीं है।'
                : 'બાળકોનું મગજ સતત ઘડાઈ રહ્યું છે. તોફાન-મસ્તી એ બાળપણનો સહજ ભાગ છે. આ માહિતી માત્ર એ સમજવા માટે છે કે ક્યારે મુશ્કેલીઓ બાળકના વિકાસમાં અવરોધરૂપ બને છે. આ કોઈ નિષ્ણાત ડૉક્ટરની રૂબરૂ તપાસનો વિકલ્પ નથી.'}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-emerald-200/70 flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-900">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{currentLang === 'en' ? 'Evidence-based guidance aligned with IAP & Indian Psychiatric Society' : currentLang === 'hi' ? 'IAP एवं इंडियन साइकियाट्रिक सोसाइटी के मानकों पर आधारित' : 'IAP અને IPS માર્ગદર્શિકા મુજબ'}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{currentLang === 'en' ? 'Peer reviewed by medical specialists' : currentLang === 'hi' ? 'मनोचिकित्सकों द्वारा समीक्षित' : 'તબીબી નિષ્ણાતો દ્વારા પ્રમાણિત'}</span>
          </div>
        </div>
      </div>

      {/* NATIONAL CHILD & ADOLESCENT CRISIS HELPLINES */}
      <div className="p-5 sm:p-6 bg-[#fef2f2] border border-[#fecaca] rounded-xl flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#991b1b] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-semibold text-sm sm:text-base text-[#991b1b]">
              {currentLang === 'en'
                ? 'Immediate Child Protection, Severe Crisis & Abuse Helplines'
                : currentLang === 'hi'
                ? 'आपातकालीन बाल सुरक्षा, संकट एवं हेल्पलाइन नंबर'
                : 'તાત્કાલિક બાળ સુરક્ષા અને હેલ્પલાઇન નંબરો'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-2xl">
              {currentLang === 'en'
                ? 'For child safety emergencies, abuse disclosures, or urgent distress, free confidential 24x7 national support is available. All adults have a legal duty to report suspected child sexual offenses under the POCSO Act 2012.'
                : currentLang === 'hi'
                ? 'बाल सुरक्षा संकट, बाल उत्पीड़न के खुलासे या गंभीर मानसिक तनाव की स्थिति में 24 घंटे निःशुल्क सरकारी हेल्पलाइन उपलब्ध हैं। पोक्सो एक्ट 2012 के तहत बाल शोषण की सूचना देना अनिवार्य है।'
                : 'બાળ સુરક્ષા કે ગંભીર માનસિક કટોકટીમાં સરકારી હેલ્પલાઇન ૨૪ કલાક કાર્યરત છે. POCSO એકટ મુજબ બાળ શોષણની જાણ કરવી ફરજિયાત છે.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="bg-white px-2.5 py-1 rounded border border-rose-200 text-rose-900">
                Childline: 1098 (24x7 Free)
              </span>
              <span className="bg-white px-2.5 py-1 rounded border border-rose-200 text-rose-900">
                Tele-MANAS: 14416 (Govt. Mental Health)
              </span>
              <span className="bg-white px-2.5 py-1 rounded border border-rose-200 text-rose-900">
                Emergency Dispatch: 112
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:1098"
            className="px-4 py-2.5 rounded-md bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold text-xs transition flex items-center gap-1.5 min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Childline 1098</span>
          </a>
          <button
            onClick={onOpenCrisis}
            className="px-3.5 py-2.5 rounded-md bg-white border border-rose-300 text-rose-900 font-semibold text-xs hover:bg-rose-50 transition min-h-[44px]"
          >
            {currentLang === 'en' ? 'All Helplines' : currentLang === 'hi' ? 'सभी हेल्पलाइन' : 'તમામ હેલ્પલાઇન'}
          </button>
        </div>
      </div>

      {/* EDUCATIONAL RIGHTS & TEACHER COLLABORATION CARD */}
      <div className="p-5 sm:p-6 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
        <div className="flex items-start gap-3">
          <School className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h3 className="font-semibold text-sm sm:text-base text-[#1c2430]">
              {currentLang === 'en'
                ? 'For Educators & School Counselors: Academic Accommodations & Classroom Support'
                : currentLang === 'hi'
                ? 'शिक्षकों एवं स्कूल काउंसलरों के लिए: कक्षा में सहयोग एवं कानूनी अधिकार'
                : 'શિક્ષકો અને કાઉન્સિલરો માટે: શાળામાં સહાય અને અધિકારો'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
              {currentLang === 'en'
                ? 'Under India\'s RPwD Act 2016 and CBSE/State Board provisions, students diagnosed with Autism, Dyslexia/Dysgraphia, ADHD, and other neurodevelopmental conditions are legally protected against discrimination and entitled to exam accommodations (such as 20 minutes extra time per hour, writers/scribes, alternate questions for geometry, and exemption from 2nd/3rd languages). Classroom modifications—like preferential seating near the teacher, sensory break passes, and positive behavioral reinforcement—transform a child\'s academic confidence.'
                : currentLang === 'hi'
                ? 'भारत के दिव्यांगजन अधिकार अधिनियम 2016 और सीबीएसई/राज्य बोर्ड नियमों के तहत ऑटिज्म, डिस्लेक्सिया, एडीएचडी वाले छात्रों को परीक्षाओं में अतिरिक्त समय (20 मिनट प्रति घंटा), लेखक की सुविधा, और द्वितीय भाषा से छूट जैसे कानूनी अधिकार प्राप्त हैं। कक्षा में शिक्षक के पास बैठाना और प्रोत्साहन देना बच्चे के आत्मविश्वास को नई ऊंचाई देता है।'
                : 'RPwD એકટ 2016 અને બોર્ડના નિયમો હેઠળ ન્યુરોડાઇવર્સ વિદ્યાર્થીઓને વધારાનો સમય અને સ્ક્રાઇબ જેવી કાનૂની સુવિધાઓ મળે છે. વર્ગખંડમાં હૂંફાળું વાતાવરણ બાળકના આત્મવિશ્વાસને વધારે છે.'}
            </p>
          </div>
        </div>
      </div>

      {/* SEARCH AND FILTER BAR */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLang === 'en'
                  ? 'Search ADHD, Autism, anxiety, school signs...'
                  : currentLang === 'hi'
                  ? 'एडीएचडी, ऑटिज्म, चिंता या स्कूल के लक्षण खोजें...'
                  : 'એડીએચડી, ઓટિઝમ, ચિંતા કે લક્ષણો શોધો...'
              }
              className="w-full pl-9 pr-3 py-2 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#0f766e] transition min-h-[44px]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'all'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'All 10 Topics' : currentLang === 'hi' ? 'सभी 10 विषय' : 'તમામ ૧૦ વિષયો'}
            </button>
            <button
              onClick={() => setSelectedCategory('neuro')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'neuro'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'Neurodevelopmental' : currentLang === 'hi' ? 'न्यूरोडेवलपमेंटल' : 'ન્યુરોડેવલપમેન્ટલ'}
            </button>
            <button
              onClick={() => setSelectedCategory('emotional')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'emotional'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'Emotional & Mood' : currentLang === 'hi' ? 'भावनात्मक व मूड' : 'લાગણી અને મૂડ'}
            </button>
            <button
              onClick={() => setSelectedCategory('behavioral')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'behavioral'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'Behavior & Trauma' : currentLang === 'hi' ? 'व्यवहार एवं आघात' : 'વર્તન અને આઘાત'}
            </button>
            <button
              onClick={() => setSelectedCategory('lifestyle')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'lifestyle'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'Eating & Digital Habits' : currentLang === 'hi' ? 'आहार एवं डिजिटल' : 'આહાર અને ડિજિટલ'}
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-stone-500 font-medium">
          {currentLang === 'en'
            ? `Showing ${filteredTopics.length} clinical guidance topics`
            : currentLang === 'hi'
            ? `${filteredTopics.length} मार्गदर्शिका विषय प्रदर्शित`
            : `${filteredTopics.length} વિષયો દર્શાવેલ`}
        </div>
      </div>

      {/* TOPICS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTopics.map((topic, index) => {
          const isSpotlight = index === 0;

          if (isSpotlight) {
            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="col-span-1 md:col-span-2 p-6 sm:p-7 rounded-2xl border-2 border-emerald-600/30 bg-gradient-to-br from-white via-emerald-50/30 to-stone-50/70 hover:border-emerald-700 transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                    <div className="space-y-2.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-800 text-white shadow-2xs">
                          <Sparkles className="w-3 h-3 text-emerald-200" />
                          <span>
                            {currentLang === 'en'
                              ? 'Featured Pediatric Guide'
                              : currentLang === 'hi'
                              ? 'विशिष्ट बाल चिकित्सा मार्गदर्शिका'
                              : 'મુખ્ય બાળ મનોચિકિત્સા માર્ગદર્શન'}
                          </span>
                        </span>
                        <span className="font-semibold uppercase tracking-wider text-emerald-800 text-[11px] bg-emerald-100/70 px-2 py-0.5 rounded">
                          PEDIATRIC GUIDE
                        </span>
                        <span className="font-mono text-xs text-stone-500">
                          {topic.medicalTerms[currentLang]}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-[#1c2430] group-hover:text-emerald-800 transition-colors">
                        {topic.name[currentLang]}
                      </h2>

                      <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
                        {topic.tagline[currentLang]}
                      </p>

                      {/* Surfaced Research / Evidence Highlight */}
                      {topic.evidenceHighlights && topic.evidenceHighlights[0] && (
                        <div className="mt-3 p-3.5 rounded-xl bg-emerald-50/90 border border-emerald-200/80 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                          <div className="px-2.5 py-1 bg-white rounded-lg border border-emerald-200 font-mono font-bold text-emerald-900 text-sm shrink-0 shadow-2xs">
                            {topic.evidenceHighlights[0].statistic}
                          </div>
                          <div className="space-y-0.5 flex-1">
                            <span className="font-semibold text-emerald-950 block">
                              {topic.evidenceHighlights[0].context[currentLang]}
                            </span>
                            <span className="text-[10.5px] text-stone-500 block">
                              Source: {topic.evidenceHighlights[0].source}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Spotlight Visual Accent Banner */}
                    <div className="w-full sm:w-64 md:w-72 h-36 sm:h-40 shrink-0 rounded-xl overflow-hidden border border-emerald-200/80 bg-white shadow-2xs self-center lg:self-start">
                      <NeurodevelopmentalIllustration className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Typical vs Red Flag Comparative Layout */}
                  {topic.typicalDevelopmentVsRedFlags[0] && (
                    <div className="mt-2 pt-3 border-t border-emerald-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>
                            {currentLang === 'en' ? 'Normal / Typical Milestone:' : currentLang === 'hi' ? 'सामान्य विकासात्मक व्यवहार:' : 'સામાન્ય વર્તન:'}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {topic.typicalDevelopmentVsRedFlags[0].typicalDevelopment[currentLang]}
                        </p>
                      </div>

                      <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/80 shadow-2xs space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
                          <span className="w-2 h-2 rounded-full bg-amber-600" />
                          <span>
                            {currentLang === 'en' ? 'Clinical Red Flag / Seek Advice:' : currentLang === 'hi' ? 'चेतावनी संकेत (डॉक्टर से मिलें):' : 'ચેતવણી સંકેત:'}
                          </span>
                        </div>
                        <p className="text-xs text-stone-700 font-medium leading-relaxed">
                          {topic.typicalDevelopmentVsRedFlags[0].redFlagsClinicalConcern[currentLang]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3.5 border-t border-stone-200/80 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-950 min-h-[44px]">
                  <span>
                    {currentLang === 'en'
                      ? 'Open Complete Educational & Clinical Guide'
                      : currentLang === 'hi'
                      ? 'संपूर्ण शैक्षणिक एवं क्लिनिकल मार्गदर्शिका पढ़ें'
                      : 'સંપૂર્ણ શૈક્ષણિક અને ક્લિનિકલ માર્ગદર્શિકા વાંચો'}
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          }

          return (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="p-6 rounded-xl border border-stone-200 bg-white hover:border-emerald-700 transition cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-sm group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="font-semibold uppercase tracking-wider text-emerald-800 text-[11px] bg-emerald-50 px-2 py-0.5 rounded">
                    PEDIATRIC GUIDE
                  </span>
                  <span className="font-mono text-[11px] text-stone-400 truncate max-w-[200px]">
                    {topic.medicalTerms[currentLang]}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430] group-hover:text-emerald-800 transition-colors">
                  {topic.name[currentLang]}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {topic.tagline[currentLang]}
                </p>

                {/* Typical vs Red Flag Snapshot */}
                <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-700">
                  <div>
                    <strong className="text-emerald-900 font-semibold">
                      {currentLang === 'en' ? 'Normal / Typical:' : currentLang === 'hi' ? 'सामान्य व्यवहार:' : 'સામાન્ય:'}
                    </strong>{' '}
                    <span className="text-stone-600">
                      {topic.typicalDevelopmentVsRedFlags[0]?.typicalDevelopment[currentLang].slice(0, 95)}...
                    </span>
                  </div>
                  <div>
                    <strong className="text-amber-900 font-semibold">
                      {currentLang === 'en' ? 'Clinical Red Flag:' : currentLang === 'hi' ? 'चेतावनी संकेत:' : 'ચેતવણી:'}
                    </strong>{' '}
                    <span className="text-stone-700 font-medium">
                      {topic.typicalDevelopmentVsRedFlags[0]?.redFlagsClinicalConcern[currentLang].slice(0, 95)}...
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0f766e] min-h-[44px]">
                <span>
                  {currentLang === 'en'
                    ? 'Open Educational & Clinical Guide'
                    : currentLang === 'hi'
                    ? 'संपूर्ण मार्गदर्शिका पढ़ें'
                    : 'સંપૂર્ણ માર્ગદર્શિકા વાંચો'}
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {filteredTopics.length === 0 && (
        <div className="p-8 text-center bg-white rounded-xl border border-stone-200 space-y-2">
          <p className="text-sm text-stone-600">
            {currentLang === 'en'
              ? 'No child psychiatry topics matched your search query.'
              : currentLang === 'hi'
              ? 'आपकी खोज के लिए कोई विषय नहीं मिला।'
              : 'તમારી શોધ માટે કોઈ વિષય મળ્યો નથી.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-semibold text-emerald-800 hover:underline min-h-[44px] inline-flex items-center"
          >
            {currentLang === 'en' ? 'Clear filter and view all topics' : currentLang === 'hi' ? 'फ़िल्टर हटाएं और सभी विषय देखें' : 'ફિલ્ટર હટાવી બધા વિષયો જુઓ'}
          </button>
        </div>
      )}
    </div>
  );
};

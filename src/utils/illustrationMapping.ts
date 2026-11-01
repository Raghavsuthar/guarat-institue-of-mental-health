import { ConditionCategory } from '../types';

export type VisualCategory = ConditionCategory | 'treatments';

/**
 * Maps a myth item to a relevant visual category illustration.
 */
export function mapMythToCategory(item: { id: string; category?: string }): VisualCategory {
  if (item.category === 'treatments' || item.id.includes('therapy') || item.id.includes('counseling') || item.id.includes('ect')) {
    return 'treatments';
  }
  if (item.id.includes('schizo') || item.id.includes('psych')) {
    return 'psychotic';
  }
  if (item.id.includes('anxiety') || item.id.includes('panic') || item.id.includes('fear') || item.id.includes('worry')) {
    return 'anxiety';
  }
  if (item.id.includes('ocd') || item.id.includes('ritual') || item.id.includes('clean')) {
    return 'ocd';
  }
  if (item.id.includes('sleep') || item.id.includes('insomnia')) {
    return 'sleep';
  }
  if (item.id.includes('trauma') || item.id.includes('ptsd')) {
    return 'trauma';
  }
  if (item.id.includes('child') || item.id.includes('adhd') || item.id.includes('autism')) {
    return 'neurodevelopmental';
  }
  if (item.id.includes('eating') || item.id.includes('food') || item.id.includes('appetite')) {
    return 'eating';
  }
  if (item.id.includes('body') || item.id.includes('pain') || item.id.includes('somatic')) {
    return 'somatic';
  }
  if (item.id.includes('elder') || item.id.includes('dementia') || item.id.includes('memory')) {
    return 'geriatric';
  }
  if (item.id.includes('preg') || item.id.includes('postpartum') || item.id.includes('perinatal')) {
    return 'perinatal';
  }
  return 'mood';
}

/**
 * Maps a psychiatric glossary term to a clean category illustration accent if clean match exists, or null.
 */
export function mapGlossaryToCategory(term: {
  id: string;
  relatedType?: string;
  relatedId?: string;
}): VisualCategory | null {
  if (term.relatedType === 'treatment') return 'treatments';

  const targetId = `${term.relatedId || ''} ${term.id}`.toLowerCase();
  if (targetId.includes('depress') || targetId.includes('bipolar') || targetId.includes('mood') || targetId.includes('anhedonia') || targetId.includes('affect')) {
    return 'mood';
  }
  if (targetId.includes('anxiet') || targetId.includes('panic') || targetId.includes('phobia') || targetId.includes('worry')) {
    return 'anxiety';
  }
  if (targetId.includes('ocd') || targetId.includes('obsess') || targetId.includes('compuls')) {
    return 'ocd';
  }
  if (targetId.includes('schizo') || targetId.includes('psychos') || targetId.includes('hallucin') || targetId.includes('delus')) {
    return 'psychotic';
  }
  if (targetId.includes('trauma') || targetId.includes('ptsd')) {
    return 'trauma';
  }
  if (targetId.includes('adhd') || targetId.includes('autism') || targetId.includes('neuro')) {
    return 'neurodevelopmental';
  }
  if (targetId.includes('sleep') || targetId.includes('insomnia')) {
    return 'sleep';
  }
  if (targetId.includes('eating') || targetId.includes('anorexia') || targetId.includes('bulimia')) {
    return 'eating';
  }
  if (targetId.includes('somat') || targetId.includes('pain') || targetId.includes('akathisia')) {
    return 'somatic';
  }
  if (targetId.includes('dement') || targetId.includes('delir') || targetId.includes('geriatr') || targetId.includes('alzheimer')) {
    return 'geriatric';
  }
  if (targetId.includes('personali') || targetId.includes('borderline')) {
    return 'personality';
  }
  if (targetId.includes('perinat') || targetId.includes('postpart')) {
    return 'perinatal';
  }

  return null;
}

/**
 * Maps an educational symptom card to a matching category illustration.
 */
export function mapSymptomToCategory(symptomId: string): VisualCategory {
  const id = symptomId.toLowerCase();
  if (id.includes('sadness') || id.includes('anhedonia') || id.includes('irritability')) {
    return 'mood';
  }
  if (id.includes('worry') || id.includes('panic') || id.includes('anxiety')) {
    return 'anxiety';
  }
  if (id.includes('hallucination') || id.includes('delusion') || id.includes('suspicious') || id.includes('paranoia')) {
    return 'psychotic';
  }
  if (id.includes('intrusive') || id.includes('ritual') || id.includes('ocd')) {
    return 'ocd';
  }
  if (id.includes('sleep') || id.includes('insomnia')) {
    return 'sleep';
  }
  if (id.includes('memory') || id.includes('concentration') || id.includes('fog')) {
    return 'neurodevelopmental';
  }
  if (id.includes('trauma')) {
    return 'trauma';
  }
  if (id.includes('somatic') || id.includes('pain')) {
    return 'somatic';
  }
  return 'mood';
}

/**
 * Maps an FAQ item to a matching category illustration.
 */
export function mapFAQToCategory(faq: { id: string; category: string }): VisualCategory {
  if (faq.category === 'therapy') return 'treatments';
  if (faq.category === 'legal') return 'treatments';
  if (faq.category === 'addiction') return 'somatic';
  return 'mood';
}

/**
 * Maps an educational health article to a featured category illustration.
 */
export function mapArticleToCategory(article: { id: string; category: string; tags?: string[] }): VisualCategory {
  const cat = article.category.toLowerCase();
  if (cat.includes('stress') || cat.includes('burnout') || cat.includes('anxiety')) return 'anxiety';
  if (cat.includes('depress') || cat.includes('mood')) return 'mood';
  if (cat.includes('sleep') || cat.includes('insomnia')) return 'sleep';
  if (cat.includes('therapy')) return 'treatments';
  return 'anxiety';
}

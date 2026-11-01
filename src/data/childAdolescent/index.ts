import { ChildAdolescentTopic } from '../../types';
import { adhdChildData } from './adhd';
import { autismChildData } from './autism';
import { anxietyChildData } from './anxiety';
import { depressionChildData } from './depression';
import { behaviorChildData } from './behavior';
import { learningDisordersChildData } from './learningDisorders';
import { ocdTicsChildData } from './ocdTics';
import { traumaChildData } from './trauma';
import { eatingDisordersChildData } from './eatingDisorders';
import { substanceTechChildData } from './substanceTech';

export const childAdolescentTopics: ChildAdolescentTopic[] = [
  adhdChildData,
  autismChildData,
  anxietyChildData,
  depressionChildData,
  behaviorChildData,
  learningDisordersChildData,
  ocdTicsChildData,
  traumaChildData,
  eatingDisordersChildData,
  substanceTechChildData,
];

export const getChildAdolescentTopicBySlug = (slug: string): ChildAdolescentTopic | undefined => {
  return childAdolescentTopics.find((t) => t.slug === slug || t.id === slug);
};

export {
  adhdChildData,
  autismChildData,
  anxietyChildData,
  depressionChildData,
  behaviorChildData,
  learningDisordersChildData,
  ocdTicsChildData,
  traumaChildData,
  eatingDisordersChildData,
  substanceTechChildData,
};

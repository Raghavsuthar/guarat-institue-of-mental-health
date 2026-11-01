import { WomensMentalHealthTopic } from '../../types';
import { pmddData } from './pmdd';
import { antenatalDepressionAnxietyData } from './antenatalDepressionAnxiety';
import { postpartumPsychosisData } from './postpartumPsychosis';
import { perimenopauseMoodData } from './perimenopauseMood';
import { infertilityPregnancyLossData } from './infertilityPregnancyLoss';
import { pcosMentalHealthData } from './pcosMentalHealth';
import { intimatePartnerViolenceData } from './intimatePartnerViolence';
import { bodyImageEatingDisordersData } from './bodyImageEatingDisorders';
import { caregiverBurdenData } from './caregiverBurden';
import { stigmaBarriersIndiaData } from './stigmaBarriersIndia';

export const womensMentalHealthTopics: WomensMentalHealthTopic[] = [
  pmddData,
  antenatalDepressionAnxietyData,
  postpartumPsychosisData,
  perimenopauseMoodData,
  infertilityPregnancyLossData,
  pcosMentalHealthData,
  intimatePartnerViolenceData,
  bodyImageEatingDisordersData,
  caregiverBurdenData,
  stigmaBarriersIndiaData,
];

export const getWomensTopicById = (id: string): WomensMentalHealthTopic | undefined => {
  return womensMentalHealthTopics.find(
    (topic) => topic.id === id || topic.slug === id
  );
};

export const getWomensTopicsByCategory = (
  category: WomensMentalHealthTopic['category']
): WomensMentalHealthTopic[] => {
  return womensMentalHealthTopics.filter((topic) => topic.category === category);
};

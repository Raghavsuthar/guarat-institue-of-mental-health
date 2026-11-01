import { TherapyModality } from '../types';
import { cbtErpDbtData } from './treatments/cbt_erp_dbt';
import { supportiveFamilyMiData } from './treatments/supportive_family_mi';
import { ectRtmsActData } from './treatments/ect_rtms_act';
import { baIptData } from './treatments/ba_ipt';

export const treatmentsData: TherapyModality[] = [
  ...cbtErpDbtData,
  ...supportiveFamilyMiData,
  ...ectRtmsActData,
  ...baIptData,
];

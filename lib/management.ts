import type { Locale } from './i18n/config';
import { managementEn, type ManagementContent } from './management.en';
import { managementPt } from './management.pt';

export type { ManagementContent };

const content: Record<Locale, ManagementContent> = {
  en: managementEn,
  pt: managementPt,
};

export function getManagementContent(lang: Locale): ManagementContent {
  return content[lang];
}

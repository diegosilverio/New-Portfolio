import type { Locale } from './config';
import { en } from './en';
import { pt } from './pt';

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

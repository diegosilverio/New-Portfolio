export const locales = ['en', 'pt'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const htmlLang: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-BR',
};

export const ogLocale: Record<Locale, string> = {
  en: 'en_US',
  pt: 'pt_BR',
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

// hreflang alternates for a path without the locale prefix (e.g. '/management')
export function localeAlternates(lang: Locale, path = '') {
  return {
    canonical: `/${lang}${path}`,
    languages: {
      en: `/en${path}`,
      'pt-BR': `/pt${path}`,
      'x-default': `/${defaultLocale}${path}`,
    },
  };
}

'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from '@/lib/i18n/config';
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries';

interface LocaleContextValue {
  lang: Locale;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ lang, t: getDictionary(lang) }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used inside <LocaleProvider>');
  }
  return ctx;
}

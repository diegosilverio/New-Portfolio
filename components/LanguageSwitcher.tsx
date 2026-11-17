'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALE_COOKIE, locales, type Locale } from '@/lib/i18n/config';
import { useLocale } from './LocaleProvider';

export function LanguageSwitcher() {
  const { lang, t } = useLocale();
  const pathname = usePathname();

  // Same page, other locale: swap the leading /en or /pt segment
  function hrefFor(locale: Locale) {
    const rest = pathname.split('/').slice(2).join('/');
    return rest ? `/${locale}/${rest}` : `/${locale}`;
  }

  // Remember the choice so the proxy stops following the browser language
  function remember(locale: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <ul aria-label={t.header.languageLabel} className="flex items-center gap-2">
      {locales.map((locale, i) => (
        <li key={locale} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className="text-[15px] text-border-soft">
              /
            </span>
          )}
          <Link
            href={hrefFor(locale)}
            hrefLang={locale}
            lang={locale}
            onClick={() => remember(locale)}
            aria-current={locale === lang ? 'true' : undefined}
            aria-label={t.header.languages[locale]}
            className={`text-[15px] uppercase transition-colors duration-250 ${
              locale === lang
                ? 'font-medium text-ink'
                : 'text-muted hover:text-accent'
            }`}
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
}

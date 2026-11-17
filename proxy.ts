import { NextResponse, type NextRequest } from 'next/server';
import {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  type Locale,
} from '@/lib/i18n/config';

// Picks the best supported locale from the browser's Accept-Language header,
// which by default mirrors the OS language (e.g. "pt-BR,pt;q=0.9,en;q=0.8").
function fromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      const weight = q ? Number(q.trim().slice(2)) : 1;
      return { tag: tag.toLowerCase(), weight: Number.isNaN(weight) ? 0 : weight };
    })
    .filter((entry) => entry.weight > 0)
    .sort((a, b) => b.weight - a.weight);

  for (const { tag } of ranked) {
    const primary = tag.split('-')[0];
    if (isLocale(primary)) return primary;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // URLs that already carry a locale are respected as-is
  if (isLocale(pathname.split('/')[1])) return;

  // An explicit choice made in the language switcher wins over the browser language
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved)
    ? saved
    : fromAcceptLanguage(request.headers.get('accept-language'));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and static files (anything with an extension)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};

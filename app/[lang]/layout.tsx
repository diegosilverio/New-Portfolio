import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import '../globals.css';
import { ProjectsAuthProvider } from '@/components/ProjectsAuthProvider';
import { LocaleProvider } from '@/components/LocaleProvider';
import {
  htmlLang,
  isLocale,
  localeAlternates,
  locales,
  ogLocale,
} from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const geist = GeistMono;

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: Pick<LayoutProps, 'params'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: localeAlternates(lang),
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      type: 'website',
      locale: ogLocale[lang],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={htmlLang[lang]}
      className={`${dmSerif.variable} ${dmSans.variable} ${geist.variable}`}
    >
      <body>
        <LocaleProvider lang={lang}>
          <ProjectsAuthProvider>{children}</ProjectsAuthProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}

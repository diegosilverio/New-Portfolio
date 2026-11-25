import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { ManagementCaseStudy } from '@/components/ManagementCaseStudy';
import { isLocale, localeAlternates, ogLocale } from '@/lib/i18n/config';
import {
  getManagementCase,
  getManagementCaseLabels,
  getNextManagementCase,
  managementCases,
} from '@/lib/management-cases';

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  return managementCases.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const item = getManagementCase(slug, lang);
  if (!item) return {};
  const title = `${item.title} — Diego Silverio`;
  return {
    title,
    description: item.tagline,
    alternates: localeAlternates(lang, `/management/${slug}`),
    openGraph: {
      title,
      description: item.tagline,
      type: 'article',
      locale: ogLocale[lang],
    },
  };
}

export default async function ManagementCasePage({ params }: PageProps) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const item = getManagementCase(slug, lang);
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <ManagementCaseStudy
        item={item}
        next={getNextManagementCase(slug, lang)}
        labels={getManagementCaseLabels(lang)}
      />
    </main>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { ManagementExperience } from '@/components/ManagementExperience';
import { isLocale, localeAlternates, ogLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getManagementContent } from '@/lib/management';
import { getManagementCaseLabels, getManagementCases } from '@/lib/management-cases';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.managementTitle,
    description: meta.managementDescription,
    alternates: localeAlternates(lang, '/management'),
    openGraph: {
      title: meta.managementTitle,
      description: meta.managementOgDescription,
      type: 'article',
      locale: ogLocale[lang],
    },
  };
}

export default async function ManagementPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <ManagementExperience
        content={getManagementContent(lang)}
        cases={getManagementCases(lang)}
        caseLabels={getManagementCaseLabels(lang)}
      />
    </main>
  );
}

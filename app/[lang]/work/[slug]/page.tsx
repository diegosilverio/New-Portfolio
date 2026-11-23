import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { CaseStudy } from '@/components/CaseStudy';
import { isLocale, localeAlternates, ogLocale } from '@/lib/i18n/config';
import { getNextProject, getProjectBySlug, projects } from '@/lib/projects';

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = getProjectBySlug(slug, lang);
  if (!project) return {};
  const title = `${project.title} — Diego Silverio`;
  return {
    title,
    description: project.tagline,
    alternates: localeAlternates(lang, `/work/${slug}`),
    openGraph: {
      title,
      description: project.tagline,
      type: 'article',
      locale: ogLocale[lang],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const project = getProjectBySlug(slug, lang);
  if (!project) notFound();
  const nextProject = getNextProject(slug, lang);

  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <CaseStudy project={project} nextProject={nextProject} />
    </main>
  );
}

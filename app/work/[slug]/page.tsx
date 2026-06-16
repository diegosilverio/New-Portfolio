import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { CaseStudy } from '@/components/CaseStudy';
import { getNextProject, getProjectBySlug, projects } from '@/lib/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const title = `${project.title} — Diego Silverio`;
  return {
    title,
    description: project.tagline,
    openGraph: {
      title,
      description: project.tagline,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const nextProject = getNextProject(slug);

  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <CaseStudy project={project} nextProject={nextProject} />
    </main>
  );
}

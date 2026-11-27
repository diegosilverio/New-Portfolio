import type { Locale } from '@/lib/i18n/config';
import { getProjects } from '@/lib/projects';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

interface WorksProps {
  lang: Locale;
  id: string;
  title: string;
  eyebrow?: string;
  // Case ids, in display order
  ids: string[];
  // Only the block at the top of the page preloads its images
  priority?: boolean;
  className?: string;
}

export function Works({
  lang,
  id,
  title,
  eyebrow,
  ids,
  priority = false,
  className = 'py-24 md:py-section',
}: WorksProps) {
  const all = getProjects(lang);
  const projects = ids.flatMap((caseId) => all.find((p) => p.id === caseId) ?? []);

  return (
    <section id={id} className={`container-x ${className}`} aria-label={title}>
      <SectionHeader eyebrow={eyebrow} title={title} />

      <div className="mt-16 grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            priority={priority && index < 2}
          />
        ))}
      </div>
    </section>
  );
}

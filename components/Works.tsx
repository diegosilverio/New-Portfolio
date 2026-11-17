import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getProjects } from '@/lib/projects';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

export function Works({ lang }: { lang: Locale }) {
  const { works } = getDictionary(lang);

  return (
    <section
      id="work"
      className="container-x py-24 md:py-section"
      aria-labelledby="work-title"
    >
      <SectionHeader eyebrow={works.eyebrow} title={works.title} />

      <div
        id="work-title"
        className="mt-16 grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-10"
      >
        {getProjects(lang).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

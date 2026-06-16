import { projects } from '@/lib/projects';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

export function Works() {
  return (
    <section
      id="work"
      className="container-x py-24 md:py-section"
      aria-labelledby="work-title"
    >
      <SectionHeader eyebrow="Portfolio" title="Selected Works" />

      <div
        id="work-title"
        className="mt-16 grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-10"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

interface CaseStudyProps {
  project: Project;
  nextProject: Project;
}

export function CaseStudy({ project, nextProject }: CaseStudyProps) {
  return (
    <article>
      <section className="container-x pt-40 pb-10 md:pt-40 md:pb-section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="label-eyebrow">Case Study</span>
          <h1 className="font-serif text-hero text-ink">{project.title}</h1>
          <p className="max-w-[840px] text-xl md:text-2xl leading-relaxed text-muted">
            {project.tagline}
          </p>
        </motion.div>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border-soft py-8 md:flex md:items-start md:justify-between">
          <MetaItem label="Role" value={project.role} />
          <MetaItem label="Year" value={String(project.year)} />
          <MetaItem label="Company" value={project.company} />
          <MetaItem label="Scope" value={project.scope} />
        </dl>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-card bg-border md:aspect-auto md:h-[720px]"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">Overview</span>
          <div className="flex max-w-[840px] flex-col gap-12">
            <p className="text-xl md:text-2xl leading-relaxed text-muted">
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-12 md:gap-20">
              {project.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <span className="font-serif text-[40px] md:text-[48px] leading-none text-accent">
                    {s.value}
                  </span>
                  <span className="label-eyebrow !text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-20 border-t border-border-soft md:mt-24" />
      </section>

      <section className="container-x pb-20 md:pb-section">
        <div className="flex flex-col gap-8">
          <span className="label-eyebrow">Challenge</span>
          <h2 className="max-w-[1060px] font-serif text-section text-ink">
            {project.challengeTitle}
          </h2>
          <p className="max-w-[1060px] text-lg md:text-xl leading-relaxed text-muted">
            {project.challengeBody}
          </p>
        </div>
      </section>

      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x flex flex-col gap-12 md:gap-16">
          <span className="label-eyebrow">Process</span>
          <ol className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {project.process.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-6">
                <span className="text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[510px_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">Outcome</span>
            <h2 className="font-serif text-section text-ink">
              {project.outcomeTitle}
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              {project.outcomeBody}
            </p>
            <ul className="mt-2 flex flex-col gap-4">
              {project.outcomeBullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="block h-2 w-2 shrink-0 rounded-sm bg-accent" />
                  <span className="text-base font-medium text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-border md:aspect-auto md:h-[540px]">
            <Image
              src={project.outcomeImage ?? project.image}
              alt={`${project.title} outcome`}
              fill
              sizes="(min-width: 1024px) 730px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-x pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="flex flex-col gap-6">
          <span className="label-eyebrow">Next</span>
          <Link
            href={`/work/${nextProject.id}`}
            className="group flex flex-wrap items-center gap-3 font-serif text-footer text-ink"
          >
            <span>{nextProject.title}</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
          <Link
            href="/#work"
            className="text-base text-muted underline underline-offset-[6px] decoration-1 hover:text-accent transition-colors duration-250"
          >
            Back to all work
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border-soft pt-6 text-xs md:text-sm text-muted">
          <span>© 2026 Diego Silverio</span>
          <span className="font-serif text-base md:text-xl text-ink">D.S</span>
        </div>
      </section>
    </article>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <dt className="label-eyebrow !text-muted">{label}</dt>
      <dd className="text-sm md:text-base font-medium text-ink">{value}</dd>
    </div>
  );
}

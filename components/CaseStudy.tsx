'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

interface CaseStudyProps {
  project: Project;
  nextProject: Project;
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

export function CaseStudy({ project, nextProject }: CaseStudyProps) {
  return (
    <article>
      {/* Hero */}
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
          <MetaItem label="Year" value={project.year} />
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

      {/* Overview + Highlights + Stats */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">Overview</span>
          <div className="flex max-w-[840px] flex-col gap-12">
            <p className="text-xl md:text-2xl leading-relaxed text-muted">
              {project.overview}
            </p>

            {project.highlights.length > 0 && (
              <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-[10px] block h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" />
                    <span className="text-base leading-relaxed text-ink">{h}</span>
                  </li>
                ))}
              </ul>
            )}

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

      {/* Challenge */}
      <section className="container-x pb-20 md:pb-section">
        <motion.div {...reveal} className="flex flex-col gap-8">
          <span className="label-eyebrow">Challenge</span>
          <h2 className="max-w-[1060px] font-serif text-section text-ink">
            {project.challengeTitle}
          </h2>
          <p className="max-w-[1060px] text-lg md:text-xl leading-relaxed text-muted">
            {project.challengeBody}
          </p>
        </motion.div>
      </section>

      {/* Decision points (optional) */}
      {project.decision && (
        <section className="container-x pb-20 md:pb-section">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
            <span className="label-eyebrow">Decision Points</span>
            <div className="flex max-w-[840px] flex-col gap-8">
              {project.decision.body && (
                <p className="text-lg md:text-xl leading-relaxed text-muted">
                  {project.decision.body}
                </p>
              )}
              <ul className="flex flex-col gap-4">
                {project.decision.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-[10px] block h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" />
                    <span className="text-base md:text-lg leading-relaxed text-ink">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Goals */}
      <section className="container-x pb-20 md:pb-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">Goals</span>
          <ol className="flex max-w-[840px] flex-col divide-y divide-border-soft border-t border-border-soft">
            {project.goals.map((g, i) => (
              <li key={g} className="flex items-baseline gap-6 py-6">
                <span className="font-serif text-2xl text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg md:text-xl leading-relaxed text-ink">
                  {g}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[400px_1fr] md:gap-10">
            <span className="label-eyebrow">Process</span>
            <div className="flex max-w-[840px] flex-col gap-6">
              <p className="text-lg md:text-xl leading-relaxed text-muted">
                {project.processIntro}
              </p>
              {project.processFlow && (
                <p className="text-sm md:text-base font-medium leading-relaxed text-ink">
                  {project.processFlow}
                </p>
              )}
            </div>
          </div>

          <ol className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {project.process.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-6">
                <span className="text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Execution */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">Execution</span>
          <div className="flex max-w-[840px] flex-col gap-8">
            <h2 className="font-serif text-section text-ink">
              {project.execution.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted">
              {project.execution.body}
            </p>
            {project.execution.bullets && (
              <ul className="flex flex-col gap-4 border-t border-border-soft pt-8">
                {project.execution.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-[10px] block h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" />
                    <span className="text-base md:text-lg leading-relaxed text-ink">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Guidelines (optional) */}
      {project.guidelines && (
        <section className="bg-[#f2f1ed] py-20 md:py-section">
          <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
            <span className="label-eyebrow">Guidelines</span>
            <div className="flex max-w-[840px] flex-col gap-10">
              <h2 className="font-serif text-section text-ink">
                {project.guidelines.title}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-muted">
                {project.guidelines.body}
              </p>
              <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {project.guidelines.items.map((item, i) => (
                  <li key={item.title} className="flex flex-col gap-3">
                    <span className="text-sm font-bold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="text-base leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
              {project.guidelines.closingBody && (
                <div className="flex flex-col gap-3 border-t border-border-soft pt-8">
                  {project.guidelines.closingTitle && (
                    <h3 className="font-serif text-2xl text-ink">
                      {project.guidelines.closingTitle}
                    </h3>
                  )}
                  <p className="text-base md:text-lg leading-relaxed text-muted">
                    {project.guidelines.closingBody}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[510px_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">Results</span>
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

      {/* Learnings */}
      <section className="container-x pb-20 md:pb-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">Learnings</span>
          <ol className="flex max-w-[840px] flex-col divide-y divide-border-soft border-t border-border-soft">
            {project.learnings.map((l, i) => (
              <li key={l.title} className="flex flex-col gap-3 py-8 md:flex-row md:gap-8">
                <span className="font-serif text-2xl text-accent md:w-12 md:shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-ink">
                    {l.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-muted">
                    {l.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {project.link && (
          <div className="mt-12 md:ml-[440px]">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-accent underline underline-offset-[6px] decoration-1 transition-colors duration-250 hover:text-ink"
            >
              {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </section>

      {/* Next */}
      <section className="container-x pb-20 pt-12 md:pb-24 md:pt-20">
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

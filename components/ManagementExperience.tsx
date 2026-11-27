'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ManagementContent } from '@/lib/management';
import type { ManagementCase, ManagementCaseLabels } from '@/lib/management-cases';
import { ManagementCaseCard } from './ManagementCaseCard';
import { useLocale } from './LocaleProvider';

interface ManagementExperienceProps {
  content: ManagementContent;
  cases: ManagementCase[];
  caseLabels: ManagementCaseLabels;
}

export function ManagementExperience({
  content,
  cases,
  caseLabels,
}: ManagementExperienceProps) {
  const { lang } = useLocale();
  const {
    labels,
    career,
    roles,
    principles,
    designLeadership,
    peopleLeadership,
    feedback,
    work,
  } = content;

  return (
    <article>
      {/* Hero */}
      <section className="container-x pt-40 pb-10 md:pt-40 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="label-eyebrow">{labels.eyebrow}</span>
          <h1 className="font-serif text-hero text-ink">
            {labels.title}
          </h1>
          <p className="max-w-[840px] text-xl md:text-2xl leading-relaxed text-muted">
            {labels.intro}
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-12 border-y border-border-soft py-8 md:gap-20">
          <div className="flex flex-col gap-2">
            <span className="font-display text-[40px] md:text-[48px] leading-none text-accent">
              16+
            </span>
            <span className="label-eyebrow !text-muted">
              {labels.yearsDesign}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-[40px] md:text-[48px] leading-none text-accent">
              8+
            </span>
            <span className="label-eyebrow !text-muted">
              {labels.yearsManager}
            </span>
          </div>
        </div>
      </section>

      {/* Leadership cases */}
      <section className="container-x pb-20 md:pb-section">
        <div className="flex flex-col gap-8">
          <span className="label-eyebrow">{caseLabels.cases}</span>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {cases.map((item) => (
              <li key={item.id}>
                <ManagementCaseCard item={item} readLabel={caseLabels.readCase} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Everything else stays on the page, collapsed by default */}
      <div className="border-b border-border-soft">
        {/* Career */}
        <Collapsible title={labels.career}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
            <p className="max-w-[320px] text-lg leading-relaxed text-muted">
              {labels.careerIntro}
            </p>
            <ol className="flex max-w-[840px] flex-col divide-y divide-border-soft border-t border-border-soft">
              {career.map((item) => (
                <li
                  key={item.company}
                  className="flex flex-col gap-3 py-8 md:flex-row md:items-start md:justify-between md:gap-10"
                >
                  <div className="flex flex-col gap-2 md:max-w-[520px]">
                    <h3 className="text-lg md:text-xl font-semibold text-ink">
                      {item.role}{' '}
                      <span className="text-accent">@ {item.company}</span>
                    </h3>
                    <p className="text-base leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                  <span className="label-eyebrow !text-muted shrink-0">
                    {item.period}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Collapsible>

        {/* Roles in detail */}
        <Collapsible title={labels.roles}>
          <div className="flex flex-col gap-12 md:gap-16">
            <p className="max-w-[840px] text-lg md:text-xl leading-relaxed text-muted md:ml-[440px]">
              {labels.rolesIntro}
            </p>

            <div className="flex flex-col gap-16 md:gap-20">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="grid grid-cols-1 gap-8 md:grid-cols-[400px_1fr] md:gap-10"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight text-ink">
                      {role.title}
                    </h3>
                    <span className="label-eyebrow !text-muted">
                      {role.period}
                    </span>
                  </div>
                  <div className="flex max-w-[840px] flex-col gap-6">
                    {role.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-lg md:text-xl leading-relaxed text-muted"
                      >
                        {p}
                      </p>
                    ))}
                    {role.stats.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-10 border-t border-border-soft pt-8 md:gap-16">
                        {role.stats.map((s) => (
                          <div key={s.label} className="flex flex-col gap-2">
                            <span className="font-serif text-[32px] md:text-[40px] leading-none text-accent">
                              {s.value}
                            </span>
                            <span className="label-eyebrow !text-muted max-w-[180px]">
                              {s.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Collapsible>

        {/* Principles */}
        <Collapsible title={labels.principles}>
          <div className="flex flex-col gap-8">
            <h3 className="max-w-[840px] font-serif text-xl md:text-2xl leading-snug text-muted">
              {labels.principlesTitle}
            </h3>
            <NumberedGrid items={principles} />
          </div>
        </Collapsible>

        {/* Design leadership */}
        <Collapsible title={labels.designLeadership}>
          <NumberedGrid items={designLeadership} />
        </Collapsible>

        {/* People leadership */}
        <Collapsible title={labels.peopleLeadership}>
          <NumberedGrid items={peopleLeadership} />
        </Collapsible>

        {/* Feedback */}
        <Collapsible title={labels.feedback}>
          <div className="flex flex-col gap-8">
            <h3 className="max-w-[840px] font-serif text-xl md:text-2xl leading-snug text-muted">
              {labels.feedbackTitle}
            </h3>
            <div className="columns-1 gap-8 md:columns-2 [&>*]:mb-8 [&>*]:break-inside-avoid">
              {feedback.map((item, i) => (
                <figure
                  key={i}
                  className="flex flex-col gap-5 rounded-card border border-border bg-card p-8 md:p-10"
                >
                  <blockquote className="font-display font-light text-lg md:text-xl leading-[1.6] text-ink">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="label-eyebrow !text-muted">
                    — {item.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Collapsible>

        {/* My work */}
        <Collapsible title={labels.work}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
            <p className="max-w-[320px] text-lg leading-relaxed text-muted">
              {labels.workIntro}
            </p>
            <dl className="flex max-w-[840px] flex-col divide-y divide-border-soft border-t border-border-soft">
              {work.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 py-6 md:flex-row md:gap-10"
                >
                  <dt className="label-eyebrow !text-muted md:w-[200px] md:shrink-0">
                    {item.label}
                  </dt>
                  <dd className="text-base md:text-lg leading-relaxed text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Collapsible>
      </div>

      {/* Back */}
      <section className="container-x pb-20 pt-20 md:pb-24 md:pt-28">
        <div className="flex flex-col gap-6">
          <span className="label-eyebrow">{labels.thanks}</span>
          <a
            href="mailto:diegosilverio@gmail.com"
            className="group flex flex-wrap items-center gap-3 font-serif text-footer text-ink"
          >
            <span>{labels.talk}</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
          <Link
            href={`/${lang}#about`}
            className="text-base text-muted underline underline-offset-[6px] decoration-1 hover:text-accent transition-colors duration-250"
          >
            {labels.back}
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

// Native <details>: closed by default, keyboard-accessible, content stays in the DOM
function Collapsible({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="group container-x border-t border-border-soft">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-8 md:py-10 [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        <h2 className="font-serif text-3xl md:text-[40px] leading-tight text-ink">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="font-serif text-4xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pb-16 md:pb-20">{children}</div>
    </details>
  );
}

function NumberedGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="grid max-w-[840px] grid-cols-1 gap-8 sm:grid-cols-2 md:ml-[440px]">
      {items.map((item, i) => (
        <li key={item.title} className="flex flex-col gap-3">
          <span className="text-sm font-bold text-accent">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
          <p className="text-base leading-relaxed text-muted">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

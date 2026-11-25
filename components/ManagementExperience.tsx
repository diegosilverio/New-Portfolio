'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ManagementContent } from '@/lib/management';
import type { ManagementCase, ManagementCaseLabels } from '@/lib/management-cases';
import { useLocale } from './LocaleProvider';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

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
      <section className="container-x pt-40 pb-10 md:pt-40 md:pb-section">
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

      {/* Career */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">{labels.career}</span>
            <p className="max-w-[320px] text-lg leading-relaxed text-muted">
              {labels.careerIntro}
            </p>
          </div>
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
      </section>

      {/* Roles in detail */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[400px_1fr] md:gap-10">
            <span className="label-eyebrow">{labels.roles}</span>
            <p className="max-w-[840px] text-lg md:text-xl leading-relaxed text-muted">
              {labels.rolesIntro}
            </p>
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {roles.map((role) => (
              <motion.div
                key={role.title}
                {...reveal}
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
                  {'caseIds' in role && role.caseIds && (
                    <div className="mt-4 flex flex-col gap-4">
                      <span className="label-eyebrow">{caseLabels.cases}</span>
                      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {role.caseIds.map((id) => {
                          const c = cases.find((x) => x.id === id);
                          if (!c) return null;
                          return (
                            <li key={id}>
                              <Link
                                href={`/${lang}/management/${id}`}
                                className="group flex h-full flex-col justify-between gap-6 rounded-card border border-border bg-card p-6 transition-colors duration-250 hover:border-accent"
                              >
                                <div className="flex flex-col gap-3">
                                  <h4 className="font-serif text-xl md:text-2xl leading-snug text-ink">
                                    {c.title}
                                  </h4>
                                  <p className="text-sm leading-relaxed text-muted">
                                    {c.tagline}
                                  </p>
                                </div>
                                <span className="flex items-center gap-2 text-sm text-accent">
                                  {caseLabels.readCase}
                                  <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                  >
                                    →
                                  </span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">{labels.principles}</span>
            <h2 className="font-serif text-section text-ink">
              {labels.principlesTitle}
            </h2>
          </div>
          <ol className="flex max-w-[840px] flex-col divide-y divide-border-soft border-t border-border-soft">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="flex flex-col gap-3 py-8 md:flex-row md:gap-8"
              >
                <span className="font-serif text-2xl text-accent md:w-12 md:shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Design leadership */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">{labels.designLeadership}</span>
          <div className="flex max-w-[840px] flex-col gap-10">
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {designLeadership.map((item, i) => (
                <li key={item.title} className="flex flex-col gap-3">
                  <span className="text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* People leadership */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">{labels.peopleLeadership}</span>
          <div className="flex max-w-[840px] flex-col gap-10">
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {peopleLeadership.map((item, i) => (
                <li key={item.title} className="flex flex-col gap-3">
                  <span className="text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[400px_1fr] md:gap-10">
            <span className="label-eyebrow">{labels.feedback}</span>
            <h2 className="max-w-[840px] font-serif text-section text-ink">
              {labels.feedbackTitle}
            </h2>
          </div>

          <div className="columns-1 gap-8 md:columns-2 [&>*]:mb-8 [&>*]:break-inside-avoid">
            {feedback.map((item, i) => (
              <motion.figure
                key={i}
                {...reveal}
                className="flex flex-col gap-5 rounded-card border border-border bg-card p-8 md:p-10"
              >
                <blockquote className="font-serif text-xl md:text-2xl leading-[1.5] text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="label-eyebrow !text-muted">
                  — {item.author}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* My work */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">{labels.work}</span>
            <p className="max-w-[320px] text-lg leading-relaxed text-muted">
              {labels.workIntro}
            </p>
          </div>
          <div className="flex max-w-[840px] flex-col gap-10">
            <dl className="flex flex-col divide-y divide-border-soft border-t border-border-soft">
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
        </div>
      </section>

      {/* Back */}
      <section className="container-x pb-20 pt-12 md:pb-24 md:pt-20">
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

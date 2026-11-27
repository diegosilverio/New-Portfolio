'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ManagementCase, ManagementCaseLabels } from '@/lib/management-cases';
import { useLocale } from './LocaleProvider';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

interface Props {
  item: ManagementCase;
  next: ManagementCase;
  labels: ManagementCaseLabels;
}

export function ManagementCaseStudy({ item, next, labels }: Props) {
  const { lang } = useLocale();
  const { overview, challenge, mandate, approach, practices, outcomes, learnings } = item;

  return (
    <article>
      {/* Hero */}
      <section className="container-x pt-40 pb-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="label-eyebrow">
            {labels.eyebrow} · {item.company}
          </span>
          <h1 className="max-w-[1100px] font-serif text-section text-ink">{item.title}</h1>
          <p className="max-w-[840px] text-xl md:text-2xl leading-relaxed text-muted">
            {item.tagline}
          </p>
        </motion.div>

        <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-border-soft pt-8 sm:grid-cols-2">
          {item.meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-2">
              <dt className="label-eyebrow !text-muted">{m.label}</dt>
              <dd className="text-sm md:text-base font-medium leading-relaxed text-ink">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid grid-cols-1 border-y border-border-soft sm:grid-cols-3 sm:divide-x sm:divide-border-soft">
          {item.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-3 py-8 sm:px-8 sm:first:pl-0">
              <span className="font-serif text-[40px] md:text-[56px] leading-none text-accent">
                {s.value}
              </span>
              <span className="label-eyebrow !text-muted max-w-[240px]">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Context */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr]">
          <span className="label-eyebrow">{labels.context}</span>
          <div className="flex max-w-[840px] flex-col gap-6">
            <h2 className="font-serif text-3xl md:text-[40px] leading-tight text-ink">
              {overview.title}
            </h2>
            {overview.paragraphs.map((p, i) => (
              <p key={i} className="text-lg md:text-xl leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr]">
          <span className="label-eyebrow">{labels.challenge}</span>
          <motion.div {...reveal} className="flex max-w-[840px] flex-col gap-6">
            <h2 className="font-serif text-section text-ink">{challenge.title}</h2>
            {challenge.paragraphs.map((p, i) => (
              <p key={i} className="text-lg md:text-xl leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <div className="mt-4 flex flex-col gap-3 rounded-card border-l-2 border-accent bg-card p-6 md:p-8">
              <span className="label-eyebrow">{labels.tradeoff}</span>
              <p className="text-base md:text-lg leading-relaxed text-ink">
                {challenge.tradeoff}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mandate */}
      <section className="container-x py-20 md:py-section">
        <div className="flex flex-col gap-10 md:gap-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[400px_1fr]">
            <span className="label-eyebrow">{labels.mandate}</span>
            <h2 className="max-w-[840px] font-serif text-3xl md:text-[40px] leading-tight text-ink">
              {mandate.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <MandateCard label={labels.asked} body={mandate.asked} />
            <MandateCard label={labels.pursued} body={mandate.pursued} accent />
            <MandateCard label={labels.notDone} body={mandate.notDone} muted />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="container-x pb-20 md:pb-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr]">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">{labels.approach}</span>
            <h2 className="font-serif text-3xl md:text-[40px] leading-tight text-ink">
              {approach.title}
            </h2>
          </div>
          <div className="flex max-w-[840px] flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-ink">{labels.diagnosis}</h3>
              <p className="text-lg leading-relaxed text-muted">{approach.diagnosis}</p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-ink">{labels.decisions}</h3>
              <ol className="relative flex flex-col gap-8 border-l border-border-soft pl-8">
                {approach.steps.map((step, i) => (
                  <li key={step.title} className="relative flex flex-col gap-2">
                    <span className="absolute -left-[45px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-card">
                      {i + 1}
                    </span>
                    <h4 className="text-base md:text-lg font-semibold text-ink">{step.title}</h4>
                    <p className="text-base leading-relaxed text-muted">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-1 gap-8 border-t border-border-soft pt-8 sm:grid-cols-2">
              {approach.notes.map((n) => (
                <div key={n.title} className="flex flex-col gap-2">
                  <h3 className="label-eyebrow">{n.title}</h3>
                  <p className="text-base leading-relaxed text-muted">{n.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practices & Artifacts */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[400px_1fr]">
            <span className="label-eyebrow">{labels.practices}</span>
            <div className="flex max-w-[840px] flex-col gap-6">
              <h2 className="font-serif text-3xl md:text-[40px] leading-tight text-ink">
                {practices.title}
              </h2>
              {practices.intro && (
                <p className="text-lg leading-relaxed text-muted">{practices.intro}</p>
              )}
            </div>
          </div>

          {practices.groups.map((group) => (
            <div key={group.title} className="grid grid-cols-1 gap-6 md:grid-cols-[400px_1fr]">
              <h3 className="font-serif text-2xl text-ink">{group.title}</h3>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.items.map((it) => (
                  <li
                    key={it.title}
                    className="flex flex-col gap-2 rounded-card border border-border bg-card p-6"
                  >
                    <span className="text-base font-semibold text-ink">{it.title}</span>
                    <span className="text-sm md:text-base leading-relaxed text-muted">
                      {it.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-10">
            {practices.images.map((im, i) => (
              <Figure key={im.src} src={im.src} caption={im.caption} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="container-x py-20 md:py-section">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[400px_1fr]">
            <span className="label-eyebrow">{labels.outcomes}</span>
            <h2 className="max-w-[840px] font-serif text-section text-ink">{outcomes.title}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-[400px_1fr]">
            <h3 className="font-serif text-2xl text-ink">{labels.operational}</h3>
            <div className="flex flex-col">
              <div className="hidden grid-cols-[160px_1fr_32px_1fr] gap-4 border-b border-border-soft pb-3 md:grid">
                <span />
                <span className="label-eyebrow !text-muted">{labels.before}</span>
                <span />
                <span className="label-eyebrow">{labels.after}</span>
              </div>
              {outcomes.changes.map((c) => (
                <div
                  key={c.area}
                  className="grid grid-cols-1 gap-2 border-b border-border-soft py-5 md:grid-cols-[160px_1fr_32px_1fr] md:items-baseline md:gap-4"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {c.area}
                  </span>
                  <span className="text-base leading-relaxed text-muted">{c.before ?? '—'}</span>
                  <span aria-hidden="true" className="hidden text-accent md:block">
                    →
                  </span>
                  <span className="text-base font-medium leading-relaxed text-ink">
                    <span className="mr-2 text-accent md:hidden" aria-hidden="true">
                      →
                    </span>
                    {c.after}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-[400px_1fr]">
            <span />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <BulletGroup title={labels.people} items={outcomes.people} />
              {outcomes.perception.length > 0 && (
                <BulletGroup title={labels.perception} items={outcomes.perception} />
              )}
            </div>
          </div>

          {outcomes.quote && (
            <motion.figure
              {...reveal}
              className="flex flex-col gap-5 rounded-card border border-border bg-card p-8 md:ml-[440px] md:p-12"
            >
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-ink">
                &ldquo;{outcomes.quote.text}&rdquo;
              </blockquote>
              <figcaption className="label-eyebrow !text-muted">— {outcomes.quote.author}</figcaption>
            </motion.figure>
          )}

          {outcomes.limitation && (
            <div className="flex flex-col gap-2 border-l-2 border-border-soft pl-6 md:ml-[440px]">
              <span className="label-eyebrow !text-muted">{labels.limitation}</span>
              <p className="max-w-[760px] text-base leading-relaxed text-muted">
                {outcomes.limitation}
              </p>
            </div>
          )}

          {outcomes.image && <Figure src={outcomes.image.src} caption={outcomes.image.caption} />}
        </div>
      </section>

      {/* Learnings */}
      <section className="container-x pb-20 md:pb-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr]">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">{labels.learnings}</span>
            <h2 className="font-serif text-3xl md:text-[40px] leading-tight text-ink">
              {learnings.title}
            </h2>
          </div>
          <ol className="flex max-w-[840px] flex-col divide-y divide-border-soft border-t border-border-soft">
            {learnings.items.map((l, i) => (
              <li key={l.title} className="flex flex-col gap-3 py-8 md:flex-row md:gap-8">
                <span className="font-serif text-2xl text-accent md:w-12 md:shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-ink">{l.title}</h3>
                  <p className="text-base md:text-lg leading-relaxed text-muted">{l.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Next */}
      <section className="container-x pb-20 pt-12 md:pb-24 md:pt-20">
        <div className="flex flex-col gap-6">
          <span className="label-eyebrow">{labels.next}</span>
          <Link
            href={`/${lang}/management/${next.id}`}
            className="group flex flex-wrap items-center gap-3 font-serif text-[clamp(32px,5vw,56px)] leading-tight text-ink"
          >
            <span>{next.title}</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
          <Link
            href={`/${lang}/management`}
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

function MandateCard({
  label,
  body,
  accent,
  muted,
}: {
  label: string;
  body: string;
  accent?: boolean;
  muted?: boolean;
}) {
  return (
    <motion.div
      {...reveal}
      className={`flex flex-col gap-4 rounded-card p-8 ${
        muted
          ? 'border border-dashed border-border-soft'
          : accent
            ? 'border border-accent bg-card'
            : 'border border-border bg-card'
      }`}
    >
      <span className={`label-eyebrow ${muted || !accent ? '!text-muted' : ''}`}>{label}</span>
      <p className={`text-lg leading-relaxed ${muted ? 'text-muted' : 'text-ink'}`}>{body}</p>
    </motion.div>
  );
}

function BulletGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <span className="mt-[10px] block h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" />
            <span className="text-base leading-relaxed text-ink">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Figure({ src, caption, delay = 0 }: { src: string; caption: string; delay?: number }) {
  return (
    <motion.figure
      {...reveal}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex flex-col gap-3"
    >
      <div className="relative w-full overflow-hidden rounded-card bg-border">
        <Image
          src={src}
          alt={caption}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="h-auto w-full object-cover"
        />
      </div>
      <figcaption className="text-sm leading-relaxed text-muted">{caption}</figcaption>
    </motion.figure>
  );
}

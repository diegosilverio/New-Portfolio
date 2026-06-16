'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const stats = [
  { value: '16+', label: 'Years in product design' },
  { value: '8+', label: 'Years leading teams' },
  { value: 'LATAM & US', label: 'Markets shipped across' },
  { value: 'EdTech & AI', label: 'Current focus — SuperSummary' },
];

export function About() {
  return (
    <section
      id="about"
      className="container-x py-24 md:py-section"
      aria-labelledby="about-title"
    >
      <SectionHeader eyebrow="Background" title="About" />

      <div
        id="about-title"
        className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[520px_1fr] lg:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[294px] w-full overflow-hidden rounded-card border border-border bg-card lg:h-[294px] lg:w-[520px]"
        >
          <Image
            src="/about/diego.svg"
            alt="Diego Silverio portrait"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="font-serif text-2xl md:text-[28px] leading-[1.5] text-ink">
            My name is Diego — I&apos;m a product designer with over 16 years
            of experience in software development for marketplaces, fintech,
            and, currently, EdTech.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted">
            Based in Brazil, I&apos;ve led teams of various sizes and
            configurations, working at large companies, small businesses, and
            startups to transform complex problems into efficient and impactful
            product experiences.
          </p>
        </motion.div>
      </div>

      <StatsGrid />
    </section>
  );
}

function StatsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 grid grid-cols-1 divide-y divide-border-soft rounded-card border border-border bg-card sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0"
    >
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className={`flex flex-col gap-3 p-8 md:p-10 ${
            idx < 2 ? 'sm:border-b sm:border-border-soft lg:border-b-0' : ''
          } ${idx % 2 === 1 ? 'sm:border-l sm:border-border-soft' : ''}`}
        >
          <span className="font-display text-[clamp(32px,5vw,44px)] font-medium leading-none text-accent">
            {stat.value}
          </span>
          <span className="text-xs font-light uppercase tracking-[0.16em] text-muted">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

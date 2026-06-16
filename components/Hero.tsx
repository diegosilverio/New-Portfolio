'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="top"
      className="container-x relative flex min-h-[calc(100vh-120px)] flex-col justify-center pb-24 pt-20 md:pb-32 md:pt-28"
    >
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="font-serif text-hero max-w-[14ch] text-ink"
      >
        Crafting digital{' '}
        <span className="text-accent">experiences</span>{' '}
        people love
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className="mt-10 max-w-[58ch] text-lg md:text-xl leading-relaxed text-muted"
      >
        16+ years across LATAM &amp; US shipping work for fintechs, marketplaces
        and platforms. Currently leading product design at SuperSummary —
        focused on EdTech and AI.
      </motion.p>

      <ScrollIndicator />
    </section>
  );
}

function ScrollIndicator() {
  return (
    <motion.a
      href="#work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.8 }}
      className="group mt-20 flex items-center gap-3 self-start text-accent"
      aria-label="Jump to selected work"
    >
      <span className="label-eyebrow !text-accent">Selected work</span>
      <motion.svg
        width="40"
        height="14"
        viewBox="0 0 40 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ x: [0, 6, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1.6,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      >
        <path
          d="M0 7H37M37 7L31 1M37 7L31 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.a>
  );
}

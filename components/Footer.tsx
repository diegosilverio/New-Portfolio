'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="container-x pb-12 pt-24 md:pt-section">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-footer max-w-[18ch] leading-[1.05] text-ink"
      >
        Let&apos;s make something{' '}
        <span className="text-accent">worth</span> using.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-base md:text-lg text-ink"
      >
        <a
          href="mailto:design@liftventures.com"
          className="underline underline-offset-[6px] decoration-1 hover:text-accent transition-colors duration-250"
        >
          design@liftventures.com
        </a>
        <a
          href="https://www.linkedin.com/in/diegosilverio/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-[6px] decoration-1 hover:text-accent transition-colors duration-250"
        >
          LinkedIn
        </a>
      </motion.div>

      <div className="mt-20 flex flex-col gap-3 border-t border-border-soft pt-6 text-xs md:text-sm text-muted md:flex-row md:items-center md:justify-between">
        <span>&copy; 2026 Diego Silverio</span>
        <span>Figma + Claude Code</span>
        <span className="font-serif text-base md:text-xl text-ink">D.S</span>
      </div>
    </footer>
  );
}

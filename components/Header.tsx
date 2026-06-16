'use client';

import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="container-x flex items-start justify-between pt-10 md:pt-12"
    >
      <div className="flex flex-col gap-1">
        <a
          href="/"
          className="font-serif text-2xl md:text-[32px] leading-none text-ink"
        >
          Diego Silverio
        </a>
        <span className="label-eyebrow !text-muted">
          Lead Product Designer
        </span>
      </div>

      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] text-ink/80 hover:text-accent transition-colors duration-250"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

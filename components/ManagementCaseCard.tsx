'use client';

import Link from 'next/link';
import type { ManagementCase } from '@/lib/management-cases';
import { useLocale } from './LocaleProvider';

interface ManagementCaseCardProps {
  item: ManagementCase;
  readLabel: string;
}

// Text card linking to a leadership case; used on the homepage and on /management
export function ManagementCaseCard({ item, readLabel }: ManagementCaseCardProps) {
  const { lang } = useLocale();

  return (
    <Link
      href={`/${lang}/management/${item.id}`}
      className="group flex h-full flex-col justify-between gap-6 rounded-card border border-border bg-card p-6 transition-colors duration-250 hover:border-accent"
    >
      <div className="flex flex-col gap-3">
        <h3 className="font-serif text-xl md:text-2xl leading-snug text-ink">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{item.tagline}</p>
      </div>
      <span className="flex items-center gap-2 text-sm text-accent">
        {readLabel}
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}

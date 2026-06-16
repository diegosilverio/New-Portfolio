'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

interface ProjectLightboxProps {
  projects: Project[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function ProjectLightbox({
  projects,
  activeIndex,
  onClose,
  onChange,
}: ProjectLightboxProps) {
  const isOpen = activeIndex !== null;
  const project = activeIndex !== null ? projects[activeIndex] : null;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onChange((activeIndex - 1 + projects.length) % projects.length);
  }, [activeIndex, onChange, projects.length]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onChange((activeIndex + 1) % projects.length);
  }, [activeIndex, onChange, projects.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative my-8 max-h-[92vh] w-[min(1100px,92vw)] overflow-y-auto rounded-card bg-bg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/90 text-card transition hover:bg-accent"
              aria-label="Close project details"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="relative aspect-[16/10] w-full bg-border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 1100px, 92vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-[2fr_1fr] md:p-12">
              <div className="flex flex-col gap-5">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-serif text-4xl md:text-5xl text-ink">
                    {project.title}
                  </h3>
                  <span className="text-accent">{project.year}</span>
                </div>
                <p className="text-lg leading-relaxed text-muted">
                  {project.longDescription ?? project.description}
                </p>

                {project.challenges && (
                  <div className="mt-2">
                    <span className="label-eyebrow !text-ink/70">Challenges</span>
                    <ul className="mt-3 space-y-2 text-base text-muted">
                      {project.challenges.map((c) => (
                        <li key={c} className="flex gap-3">
                          <span className="mt-2 inline-block h-1 w-3 shrink-0 bg-accent" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.results && (
                  <div className="mt-2">
                    <span className="label-eyebrow !text-ink/70">Results</span>
                    <ul className="mt-3 space-y-2 text-base text-muted">
                      {project.results.map((r) => (
                        <li key={r} className="flex gap-3">
                          <span className="mt-2 inline-block h-1 w-3 shrink-0 bg-accent" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <aside className="flex flex-col gap-6 border-t border-border-soft pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <div>
                  <span className="label-eyebrow !text-ink/70">Discipline</span>
                  <ul className="mt-3 space-y-1 text-sm text-ink/80">
                    {project.technologies.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="flex items-center gap-2 text-sm text-muted transition hover:text-accent"
                    aria-label="Previous project"
                  >
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                      <path d="M20 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="flex items-center gap-2 text-sm text-muted transition hover:text-accent"
                    aria-label="Next project"
                  >
                    Next
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                      <path d="M0 5H19M19 5L15 1M19 5L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

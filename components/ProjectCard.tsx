'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (index: number) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 2) * 0.1,
      }}
      className="group flex flex-col gap-5 text-left"
      aria-label={`Open ${project.title} project details`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-border md:aspect-auto md:h-[540px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={index < 2}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-card opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="label-eyebrow !text-card">View case study</span>
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden="true">
            <path
              d="M0 7H22M22 7L16 1M22 7L16 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-end justify-between gap-6">
        <h3 className="font-serif text-2xl md:text-[28px] leading-tight text-ink">
          {project.title}
        </h3>
        <span className="text-sm md:text-base text-accent shrink-0">
          {project.year}
        </span>
      </div>
      <p className="text-sm text-muted -mt-3">{project.description}</p>
    </motion.button>
  );
}

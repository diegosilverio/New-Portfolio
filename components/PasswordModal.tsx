'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PasswordModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (password: string) => boolean;
  projectTitle?: string;
  cancelLabel?: string;
}

export function PasswordModal({
  open,
  onClose,
  onSubmit,
  projectTitle,
  cancelLabel = 'Cancel',
}: PasswordModalProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setValue('');
      setError(false);
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = onSubmit(value);
    if (!ok) setError(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="password-modal-title"
        >
          <button
            type="button"
            aria-label="Close password prompt"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-ink/55 backdrop-blur-sm"
          />
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md rounded-card bg-card p-8 shadow-2xl"
          >
            <span className="label-eyebrow">Protected work</span>
            <h2
              id="password-modal-title"
              className="mt-3 font-serif text-2xl md:text-[28px] leading-tight text-ink"
            >
              Enter the password
            </h2>
            <p className="mt-3 text-sm text-muted">
              {projectTitle
                ? `Unlock ${projectTitle} and the other case studies.`
                : 'Unlock the case studies on this site.'}
            </p>

            <label htmlFor="projects-password" className="sr-only">
              Password
            </label>
            <input
              id="projects-password"
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Password"
              autoComplete="off"
              className={`mt-6 w-full rounded-card border bg-bg px-4 py-3 text-base text-ink outline-none transition-colors ${
                error
                  ? 'border-accent focus:border-accent'
                  : 'border-border focus:border-ink'
              }`}
            />
            {error && (
              <p className="mt-2 text-sm text-accent">
                Incorrect password. Try again.
              </p>
            )}

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-card px-4 py-2 text-sm text-muted transition-colors hover:text-ink"
              >
                {cancelLabel}
              </button>
              <button
                type="submit"
                className="rounded-card bg-ink px-5 py-2 text-sm font-medium text-card transition-opacity hover:opacity-90"
              >
                Unlock
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

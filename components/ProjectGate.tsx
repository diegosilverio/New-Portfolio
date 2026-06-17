'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useProjectsAuth } from './ProjectsAuthProvider';
import { PasswordModal } from './PasswordModal';

interface ProjectGateProps {
  projectTitle: string;
  children: ReactNode;
}

export function ProjectGate({ projectTitle, children }: ProjectGateProps) {
  const { isUnlocked, hasHydrated, unlock } = useProjectsAuth();
  const router = useRouter();

  if (!hasHydrated) {
    return <div aria-hidden="true" className="min-h-screen bg-bg" />;
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-bg">
        <PasswordModal
          open
          onClose={() => router.push('/')}
          onSubmit={unlock}
          projectTitle={projectTitle}
          cancelLabel="Back to home"
        />
      </div>
    );
  }

  return <>{children}</>;
}

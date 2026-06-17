'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  PROJECTS_PASSWORD,
  PROJECTS_AUTH_STORAGE_KEY,
} from '@/lib/auth-config';

interface ProjectsAuthContextValue {
  isUnlocked: boolean;
  hasHydrated: boolean;
  unlock: (password: string) => boolean;
}

const ProjectsAuthContext = createContext<ProjectsAuthContextValue | null>(
  null,
);

export function ProjectsAuthProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(PROJECTS_AUTH_STORAGE_KEY) === '1') {
        setIsUnlocked(true);
      }
    } catch {
      // sessionStorage may be unavailable (private mode, etc.) — fall back to locked
    }
    setHasHydrated(true);
  }, []);

  const unlock = useCallback((password: string) => {
    if (password === PROJECTS_PASSWORD) {
      try {
        sessionStorage.setItem(PROJECTS_AUTH_STORAGE_KEY, '1');
      } catch {
        // ignore — state still updates in-memory
      }
      setIsUnlocked(true);
      return true;
    }
    return false;
  }, []);

  return (
    <ProjectsAuthContext.Provider value={{ isUnlocked, hasHydrated, unlock }}>
      {children}
    </ProjectsAuthContext.Provider>
  );
}

export function useProjectsAuth() {
  const ctx = useContext(ProjectsAuthContext);
  if (!ctx) {
    throw new Error(
      'useProjectsAuth must be used inside <ProjectsAuthProvider>',
    );
  }
  return ctx;
}

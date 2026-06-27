import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { ManagementExperience } from '@/components/ManagementExperience';

export const metadata: Metadata = {
  title: 'Managing Design Teams — Diego Silverio',
  description:
    'My experience leading and growing design teams — the roles, the principles that guide me, how I approach design leadership, and the feedback I’ve received along the way.',
  openGraph: {
    title: 'Managing Design Teams — Diego Silverio',
    description:
      'My experience leading and growing design teams across edtech, e-commerce, steel, and banking.',
    type: 'article',
  },
};

export default function ManagementPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <ManagementExperience />
    </main>
  );
}

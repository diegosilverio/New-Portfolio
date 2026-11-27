import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Works } from '@/components/Works';
import { SystemsAI } from '@/components/SystemsAI';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { isLocale } from '@/lib/i18n/config';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <Hero />
      <Works lang={lang} />
      <SystemsAI lang={lang} />
      <About />
      <Footer />
    </main>
  );
}

import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Works } from '@/components/Works';
import { SystemsAI } from '@/components/SystemsAI';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { works, earlier } = getDictionary(lang);

  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <Hero />
      <Works
        lang={lang}
        id="work"
        eyebrow={works.eyebrow}
        title={works.title}
        ids={['legacy-subscriber-migration', 'visual-language', 'plus-plan']}
        priority
      />
      <SystemsAI lang={lang} />
      <Works
        lang={lang}
        id="earlier"
        title={earlier.title}
        ids={['nimbus-design-system', 'nuvemshop-partners', 'itaucard']}
        className="pb-24 md:pb-section"
      />
      <About />
      <Footer />
    </main>
  );
}

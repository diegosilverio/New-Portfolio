import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Works } from '@/components/Works';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <Hero />
      <Works />
      <About />
      <Footer />
    </main>
  );
}

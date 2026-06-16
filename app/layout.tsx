import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const geist = GeistMono;

export const metadata: Metadata = {
  title: 'Diego Silverio — Lead Product Designer',
  description:
    '16+ years across LATAM & US crafting digital experiences people love. Currently leading product design at SuperSummary.',
  openGraph: {
    title: 'Diego Silverio — Lead Product Designer',
    description:
      '16+ years across LATAM & US crafting digital experiences people love.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} ${geist.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

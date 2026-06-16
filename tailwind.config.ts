import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f8f7f4',
        ink: '#111111',
        muted: '#6b6b66',
        accent: '#e8547a',
        border: '#e5e5e1',
        'border-soft': '#dcdcdc',
        card: '#ffffff',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(56px, 10vw, 120px)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'section': ['clamp(40px, 6vw, 64px)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'footer': ['clamp(48px, 7vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'stat': ['44px', { lineHeight: '1.1' }],
      },
      spacing: {
        section: '120px',
        gutter: '80px',
      },
      borderRadius: {
        card: '4px',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
};

export default config;

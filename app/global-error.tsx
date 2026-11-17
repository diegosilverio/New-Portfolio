'use client';

import { useEffect, useState } from 'react';
import { defaultLocale, htmlLang, isLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Rendered outside the [lang] layout, so the locale comes from the URL
  const [lang, setLang] = useState<Locale>(defaultLocale);
  useEffect(() => {
    const segment = window.location.pathname.split('/')[1];
    if (isLocale(segment)) setLang(segment);
  }, []);
  const t = getDictionary(lang).error;

  return (
    <html lang={htmlLang[lang]}>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f7f4',
          color: '#111111',
          fontFamily: 'ui-monospace, monospace',
          padding: '24px',
        }}
      >
        <div style={{ maxWidth: 520, textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 48,
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {t.titleBefore}{' '}
            <span style={{ color: '#e8547a' }}>{t.titleAccent}</span>.
          </h1>
          <p style={{ color: '#6b6b66', marginTop: 16 }}>
            {t.body}
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              padding: '10px 20px',
              border: '1px solid #111111',
              borderRadius: 4,
              background: 'transparent',
              color: '#111111',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 14,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {t.retry}
          </button>
        </div>
      </body>
    </html>
  );
}

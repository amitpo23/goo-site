import type { Metadata } from 'next';
import '@fontsource-variable/frank-ruhl-libre';
import '@fontsource/ibm-plex-sans-hebrew/400.css';
import '@fontsource/ibm-plex-sans-hebrew/500.css';
import '@fontsource/ibm-plex-sans-hebrew/600.css';
import './globals.css';

const title = 'GOO | לוקחים עסקים לגובה חדש';
const description =
  'GOO היא חברת השבחה לעסקים קטנים: נכנסים לעסקים בקשיים או עם פוטנציאל גדול ומובילים אותם, יחד עם ההנהלה, אל היעדים.';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4173')
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'he_IL',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  // להסיר את השורה הבאה כשמאשרים לגוגל לסרוק את האתר
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

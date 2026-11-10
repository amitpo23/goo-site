import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4173')),
  title: 'GOO — עמית ויובל | רעיון טוב. ביצוע שעובד.',
  description: 'אנחנו, עמית פורת ויובל רפאל. מחברים פיתוח מוצר, סוכני AI וחשיבה עסקית כדי להפוך את הצעד הבא שלכם למשהו שעובד.',
  openGraph: { title: 'GOO — רעיון טוב. ביצוע שעובד.', description: 'אנחנו מחברים אנשים, טכנולוגיה ועסקים.', locale: 'he_IL', type: 'website', images: [{url: '/og.png', width: 1200, height:630}] },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  robots: {index: false, follow: false},
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="he" dir="rtl"><head><link rel="preload" href="/fonts/heebo-bold.woff" as="font" type="font/woff" crossOrigin="anonymous"/><link rel="preload" href="/fonts/heebo-regular.woff" as="font" type="font/woff" crossOrigin="anonymous"/></head><body>{children}</body></html>; }

import type { Metadata } from 'next';
import { DM_Serif_Display, Nunito } from 'next/font/google';
import './globals.css';

const display = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-display' });
const body = Nunito({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL('https://frbakers.example.com'),
  title: { default: 'FrBakers — Artisan cakes & pastries', template: '%s | FrBakers' },
  description: 'Handcrafted cakes, pastries and little bites of happiness, baked fresh every day.',
  openGraph: { title: 'FrBakers', description: 'Little bites of happiness, baked fresh every day.', type: 'website', images: [{ url: '/assets/images/hero.jpg', width: 1400, height: 1030, alt: 'FrBakers strawberry celebration cake' }] },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}

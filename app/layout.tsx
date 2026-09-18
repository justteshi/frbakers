import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import './globals.css';

const roboto = Roboto({subsets: ['latin'], variable: '--font-roboto'});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.frbakers.site'),
    title: {default: 'FrBakers — Artisan cakes & pastries', template: '%s | FrBakers'},
    description: 'Handcrafted cakes, pastries and little bites of happiness, baked fresh every day.',
    openGraph: {
        title: 'FrBakers',
        description: 'Little bites of happiness, baked fresh every day.',
        type: 'website',
        images: [{
            url: '/assets/images/hero.jpg',
            width: 1400,
            height: 1030,
            alt: 'FrBakers strawberry celebration cake'
        }]
    },
    alternates: {canonical: '/'},
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return <html lang="en">
    <body className={roboto.variable}>{children}</body>
    </html>;
}

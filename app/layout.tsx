import type {Metadata, Viewport} from 'next';
import {DynaPuff} from 'next/font/google';
import './globals.css';

const dynaPuff = DynaPuff({subsets: ['latin']});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.frbakers.site'),
    applicationName: 'FrBakers',
    title: {default: 'FrBakers — Artisan cakes & pastries', template: '%s | FrBakers'},
    description: 'Handcrafted cakes, pastries and little bites of happiness, baked fresh every day.',
    keywords: ['artisan bakery', 'custom cakes', 'fresh pastries', 'cupcakes', 'cookies', 'macarons'],
    authors: [{name: 'FrBakers'}],
    creator: 'FrBakers',
    publisher: 'FrBakers',
    category: 'food',
    referrer: 'origin-when-cross-origin',
    formatDetection: {email: false, address: false, telephone: false},
    alternates: {canonical: '/'},
    icons: {icon: '/favicon.svg'},
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    openGraph: {
        title: 'FrBakers — Artisan cakes & pastries',
        description: 'Handcrafted cakes, pastries and little bites of happiness, baked fresh every day.',
        url: '/',
        siteName: 'FrBakers',
        locale: 'en_US',
        type: 'website',
        images: [{
            url: '/opengraph-image.png',
            width: 1200,
            height: 630,
            alt: 'FrBakers — artisan cakes and pastries'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FrBakers — Artisan cakes & pastries',
        description: 'Handcrafted cakes, pastries and little bites of happiness, baked fresh every day.',
        images: [{url: '/opengraph-image.png', alt: 'FrBakers — artisan cakes and pastries'}],
    },
};

export const viewport: Viewport = {
    themeColor: '#fff8ef',
    colorScheme: 'light',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return <html lang="en">
    <body className={dynaPuff.className}>{children}</body>
    </html>;
}

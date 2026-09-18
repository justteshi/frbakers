import type {Metadata} from 'next';
import {ArrowRight, Croissant, HeartHandshake, Leaf, Palette, Quote, Sparkles} from 'lucide-react';
import {Newsletter, SiteShell} from './SiteShell';
import {products, gallery} from './data';

export const metadata: Metadata = {
    title: 'Artisan cakes, pastries & happy little treats',
    description: 'Meet FrBakers: joyful artisan cakes, flaky pastries and handcrafted desserts, baked fresh every day.',
    openGraph: {
        title: 'FrBakers — Sweet moments start here',
        description: 'Artisan cakes and little bites of happiness.'
    }
};
const img = (name: string) => `/assets/images/${name}`;
export default function Home() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Bakery",
        name: "FrBakers",
        description: "Warm, modern artisan bakery specializing in cakes, pastries and handcrafted desserts.",
        url: "https://www.frbakers.site",
        telephone: "+1-212-555-0148",
        email: "hello@frbakers.example",
        address: {
            "@type": "PostalAddress",
            streetAddress: "18 Rosewood Lane",
            addressLocality: "Maplewood",
            addressRegion: "NY",
            postalCode: "10001",
            addressCountry: "US"
        },
        openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00"
        }, {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "17:00"
        }, {"@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "14:00"}]
    };
    return <SiteShell active="Home" announcement>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
        <main id="main">
            <section className="hero">
                <div className="hero-copy"><p className="eyebrow"><Sparkles/> Hello, sweet thing</p><h1>Sweet moments
                    start at <em>FrBakers</em></h1><p className="lede">Handcrafted cakes, flaky pastries and joyful
                    little treats made in small batches, right here in the neighborhood.</p>
                    <div className="button-row"><a className="button" href="/menu.html">Explore Our
                        Menu <ArrowRight/></a><a className="button secondary" href="/contact.html#order-form">Order a
                        Custom Cake</a></div>
                    <div className="mini-note"><span>★ 4.9</span> Loved by 300+ local sweet tooths</div>
                </div>
                <div className="hero-visual">
                    <div className="hero-main"><img src={img('hero.jpg')} width="1400" height="1030"
                                                    alt="Strawberry layer cake topped with fresh berries"/><span
                        className="fresh-badge">Baked<br/><strong>fresh daily</strong></span></div>
                    <div className="floating-card card-one"><img src={img('macarons.jpg')} width="200" height="200"
                                                                 alt="Colorful French macarons"/><span>Little luxuries</span>
                    </div>
                    <div className="floating-card card-two"><img src={img('croissant-close.jpg')} width="200"
                                                                 height="200" alt="Golden flaky croissant"/><span>Morning magic</span>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="section-heading">
                    <div><p className="eyebrow">The pastry case</p><h2>Meet your new favorites</h2></div>
                    <a className="text-link" href="/menu.html">See the full menu <ArrowRight/></a></div>
                <div className="product-grid">{products.slice(0, 6).map(p => <article className="product-card"
                                                                                      key={p.name}>
                    <div className="product-img"><img loading="lazy" width="600" height="480" src={img(p.img)}
                                                      alt={p.name}/><span>{p.cat}</span></div>
                    <div className="product-info">
                        <div><h3>{p.name}</h3><p>{p.desc}</p></div>
                        <strong>{p.price}</strong></div>
                </article>)}</div>
            </section>
            <section className="love-section">
                <div className="section-heading centered">
                    <div><p className="eyebrow">Made with intention</p><h2>A little more love in every bite</h2></div>
                </div>
                <div
                    className="benefit-grid">{[[Croissant, 'Fresh every day', 'Our ovens are warm before sunrise.'], [Leaf, 'Thoughtful ingredients', 'Local fruit, cultured butter, real vanilla.'], [HeartHandshake, 'Made by hand', 'Small batches and a human touch.'], [Palette, 'Your celebration, your way', 'Custom colors, flavors and finishing.']].map(([Icon, title, copy]: any) =>
                    <article key={title}><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div>
            </section>
            <section className="seasonal">
                <div className="seasonal-image"><img loading="lazy" src={img('cake-berry.jpg')} width="1400"
                                                     height="2099" alt="Strawberry cake with berries and cream"/></div>
                <div className="seasonal-copy"><p className="eyebrow">Now in bloom</p><h2>The Strawberry Season
                    Collection</h2><p>Sun-ripened berries, feather-light sponge and just enough cream. Our limited
                    collection tastes like the first picnic of summer.</p><a className="button" href="/menu.html">Taste
                    the season <ArrowRight/></a></div>
            </section>
            <section className="story-preview section">
                <div className="story-images"><img loading="lazy" src={img('baker.jpg')} width="900" height="1200"
                                                   alt="Baker carefully decorating a cake"/>
                    <div className="story-stamp">Made<br/>with care</div>
                </div>
                <div><p className="eyebrow">Our little bakery</p><h2>Good things take time — and plenty of butter</h2>
                    <p>FrBakers began with a borrowed mixer, a tiny apartment oven and a belief that the best
                        celebrations happen around something delicious. Today, we still bake the slow way: by hand, in
                        small batches, with familiar ingredients and an eye for every last detail.</p><a
                        className="text-link" href="/about.html">Read our story <ArrowRight/></a></div>
            </section>
            <section className="testimonials section">
                <div className="section-heading centered">
                    <div><p className="eyebrow">Kind words</p><h2>Love at first bite</h2></div>
                </div>
                <div
                    className="testimonial-grid">{[['Maya R.', 'The birthday cake was somehow even prettier than the sketch — and the strawberry filling disappeared in minutes.'], ['Theo & Sam', 'Our wedding dessert table felt completely us. Warm, colorful, unfussy, and every single thing was delicious.'], ['Nina P.', 'I stop in for a croissant every Friday. It is flaky, buttery, and honestly the best part of my morning.']].map(([name, text]) =>
                    <blockquote key={name}><Quote/>
                        <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p>“{text}”</p><cite>{name}</cite></blockquote>)}</div>
            </section>
            <section className="gallery-preview">
                <div className="section-heading">
                    <div><p className="eyebrow">Fresh from our kitchen</p><h2>A peek behind the sprinkles</h2></div>
                    <a className="text-link" href="/gallery.html">Visit the gallery <ArrowRight/></a></div>
                <div className="insta-grid">{gallery.slice(0, 6).map(([src, alt]) => <a key={src}
                                                                                        href="/gallery.html"><img
                    loading="lazy" width="500" height="500" src={img(src)} alt={alt}/></a>)}</div>
            </section>
            <section className="newsletter"><p className="eyebrow">A treat for your inbox</p><h2>Join the sweet
                list</h2><p>Be first to meet seasonal bakes, celebration inspiration and the occasional delicious
                surprise.</p><Newsletter/></section>
        </main>
    </SiteShell>
}

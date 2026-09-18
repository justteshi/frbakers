import type {MetadataRoute} from 'next';

const routes = ['', '/menu.html', '/about.html', '/gallery.html', '/contact.html', '/accessibility.html', '/privacy.html'];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route, index) => ({
        url: `https://www.frbakers.site${route}`,
        lastModified: new Date(),
        changeFrequency: index === 0 ? 'weekly' : 'monthly',
        priority: index === 0 ? 1 : index < 5 ? 0.8 : 0.4,
    }));
}

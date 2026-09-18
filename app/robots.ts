import type {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {userAgent: '*', allow: '/'},
        sitemap: 'https://www.frbakers.site/sitemap.xml',
        host: 'https://www.frbakers.site',
    };
}

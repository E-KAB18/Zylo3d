import { MetadataRoute } from 'next';

const productSlugs = ['zylodent', 'microdent', 'dentcure'];

const indicationSlugs = [
    'digital-dentures',
    'waxups-implant-provisionals',
    'surgical-guides',
    'sports-guards',
    'provisional-all-on-x',
    'pediatric-crown',
    'occlusal-splints',
    'night-guard',
    'all-on-x',
    'crown',
    'model',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zylo3d.com';

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: baseUrl,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
        { url: `${baseUrl}/about`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/contact`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/indications`,     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
        { url: `${baseUrl}/blog`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
        { url: `${baseUrl}/learning`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/privacy`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
        { url: `${baseUrl}/terms`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    ];

    const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
        url: `${baseUrl}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
    }));

    const indicationRoutes: MetadataRoute.Sitemap = indicationSlugs.map((slug) => ({
        url: `${baseUrl}/indications/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...staticRoutes, ...productRoutes, ...indicationRoutes];
}

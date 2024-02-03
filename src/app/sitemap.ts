
import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';


const locales = ['en', 'es']; // Example locales your site supports

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      path: '/',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      path: '/summit-2024',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      path: '/about-us',
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      path: '/sponsorship',
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const sitemapEntries = [];

  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}${locale === 'en' ? '' : `/${locale}`}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    });
  });

  return sitemapEntries;
}

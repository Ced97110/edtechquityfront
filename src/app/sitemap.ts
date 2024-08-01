import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  

  return [
    {
      url: 'https://edtechquity.net',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://edtechquity.net',
          es: 'https://edtechquity.net/es',
        },
      },
    },
    {
      url: 'https://edtechquity.net/summit-2024',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://edtechquity.net/summit-2024',
          es: 'https://edtechquity.net/es/summit-2024',
        },
      },
    },
    {
      url: 'https://edtechquity.net/about-us',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          en: 'https://edtechquity.net/about-us',
          es: 'https://edtechquity.net/es/about-us',
        },
      },
    },
    {
      url: 'https://edtechquity.net/faq',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          en: 'https://edtechquity.net/faq',
          es: 'https://edtechquity.net/es/faq',
        },
      },
    },
    {
      url: 'https://edtechquity.net/sponsorship',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          en: 'https://edtechquity.net/sponsorship',
          es: 'https://edtechquity.net/es/sponsorship',
        },
      },
    },
  ];
}
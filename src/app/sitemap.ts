
import { MetadataRoute } from 'next'


export default function sitemap() {
  const domain = 'https://edtechquity.net';

  return [
    {
      url: domain,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: domain,
          es: `${domain}/es`,
        },
      },
    },
     {
      url: `${domain}/summit-2024`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${domain}/summit-2024`,
          es: `${domain}/es/summit-2024`,
        },
      },
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${domain}/about-us`,
          es: `${domain}/es/about-us`,
        },
      },
    },
    {
      url: `${domain}/faq`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${domain}/faq`,
          es: `${domain}/es/faq`,
        },
      },
    },
     {
      url: `${domain}/sponsorship`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${domain}/sponsorship`,
          es: `${domain}/es/sponsorship`,
        },
      },
    },
  ];
}

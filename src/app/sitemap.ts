import { MetadataRoute } from 'next';


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.edtechquity.net';
  const locales = ['en', 'es'];
  const paths = ['/', 'about-us', 'application', 'faq', 'sponsorship', 'summit-2024'];

  const generateSitemapEntries = () => {
    const entries = [];

    paths.forEach(path => {
      const alternates = locales.reduce((acc, locale) => {
        acc[locale] = `${baseUrl}/${locale}${path === '/' ? '' : `/${path}`}`;
        return acc;
      }, {});

     
      locales.forEach(locale => {
        const localeUrl = `${baseUrl}/${locale}${path === '/' ? '' : `/${path}`}`;
        const localeAlternates = { ...alternates, [locale]: localeUrl };

        entries.push({
          url: localeUrl,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: path === '/' ? 1 : 0.5,
          alternates: { languages: localeAlternates },
        });
      });
    });

    return entries;
  };

  return generateSitemapEntries();
}
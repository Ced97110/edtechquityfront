import React from 'react'
import Faq from './accordionfaq'
import initTranslations from '@components/app/i18n';
import TranslationsProvider from '@components/utils/translationProvider';
import { Metadata } from 'next';
import Layout from '../layout';


const i18nNamespaces = ['faq'];




export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = 'https://www.edtechquity.net';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/faq` : `${baseUrl}/${locale}/faq`;

  return {
    title: 'FAQs - Young Lady Latina Empowerment Summit',
    description: 'Find answers to frequently asked questions about the Young Lady Latina Empowerment Summit, including participation details, application process, event schedule, and how you can get involved or support the cause.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/faq`,
        es: `${baseUrl}/es/faq`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}




const FaqPage = async ({ params: { locale } }) => {

   const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
     
     <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
         
            <main className='min-h-screen  w-full max-w-[2000px] bg-white'>
              <Faq/>
            </main>
         </TranslationsProvider>
  )
}

export default FaqPage
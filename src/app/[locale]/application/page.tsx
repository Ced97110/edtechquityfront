
import React  from 'react';
import Sponsor from '@components/components/sections/sacramento-page/sponsor';
import TranslationsProvider from '@components/utils/translationProvider';
import initTranslations from '@components/app/i18n';
import { Metadata } from 'next';
import { auth } from '@clerk/nextjs';
import ApplicationForm from './form';

const i18nNamespaces = ['application-form'];



export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = 'https://www.edtechquity.net';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/application` : `${baseUrl}/${locale}/application`;

  return {
    title: 'Application',
    description: 'Apply now to participate in the Young Lady Latina Empowerment Summit on May 4, 2024, in the Sacramento Valley. This event is a unique opportunity for young Latina women aged 16-23 to engage in educational workshops, networking, and mentorship programs. Your participation will empower you to pursue your educational and career goals with the support of micro scholarships. Do not miss the chance to be part of a transformative experience that promises personal growth and community engagement.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/application`,
        es: `${baseUrl}/es/application`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}



async function ApplicationPage({ params: { locale } }) {


  const { t, resources } = await initTranslations(locale, i18nNamespaces);

 

  return (


     <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <main className='w-full  max-w-[1900px] min-h-screen'>
         <ApplicationForm/>
        </main>
      </TranslationsProvider>
    
  );
}

export default ApplicationPage;




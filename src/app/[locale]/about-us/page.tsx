
import React from 'react'
import type { Metadata } from 'next'
import { SectionAboutUs } from './section'
import TranslationsProvider from '@components/utils/translationProvider'
import initTranslations from '@components/app/i18n';

 



export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = 'https://www.edtechquity.net';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/about-us` : `${baseUrl}/${locale}/about-us`;

  return {
    title: 'About-us',
    description: 'EdTechQuity was founded with a unique vision in mind...',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/about-us`,
        es: `${baseUrl}/es/about-us`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}


const i18nNamespaces = ['about-us'];

 const AboutPage = async ({ params: { locale } }) => {

  const { i18n, resources } = await initTranslations(locale, i18nNamespaces);

  return (


     <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>

      <main className='min-h-screen  w-full max-w-[2000px] bg-white'>
        <section className='flex w-full pt-[90px]'>
          <div className='mx-auto'>
            <video
                key={i18n.language}
                src={i18n.language === 'en' ? 'Education.mp4' :'/Education-es.mp4'}
                autoPlay={true}
                loop
                muted
                playsInline={true}
                controls={false}
                className='max-w-[1190px]'
                style={{width:'100%'}}
                />
            </div>
        </section>

        <SectionAboutUs/>

      </main>
    </TranslationsProvider>
  )
}

export default AboutPage
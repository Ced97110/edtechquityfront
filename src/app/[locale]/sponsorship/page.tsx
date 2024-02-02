'use client'


import React from 'react';
import TranslationsProvider from '@components/utils/translationProvider';
import initTranslations from '@components/app/i18n';
import { Packages } from './packages';


interface packages {
  name: string;
  price: string;
  passes: string;
  promotions: string[];
  bgColor: string;
}

interface SectionProps {
  title: string;
  key: keyof packages; // Use keyof to ensure we are indexing by a valid key

}




const i18nNamespaces = ['sponsorship'];


const SponsorshipPage = async ({ params: { locale } }) => {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (

     <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <main className='min-h-screen  w-full max-w-[2000px]'>
        <Packages/>
        </main>
    </TranslationsProvider>

  )
};


export default SponsorshipPage;

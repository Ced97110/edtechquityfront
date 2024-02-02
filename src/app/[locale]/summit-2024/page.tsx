'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import WrapperTypeForm from '@components/components/wrapperTypeform/wrapperTypeform';
import CounterSection from '@components/app/[locale]/jsummit-2024/countersection';
import clsx from 'clsx';
import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image';
import Sponsor from '@components/components/sections/sacramento-page/sponsor';
import { useTranslation } from 'react-i18next';
import TranslationsProvider from '@components/utils/translationProvider';
import initTranslations from '@components/app/i18n';
import { EventFeature } from './eventpage';

const i18nNamespaces = ['summit-2024'];


async function EventPage({ params: { locale } }) {




  const { t, resources } = await initTranslations(locale, i18nNamespaces);

 



   const sections = {
        'target-audience': 'Details about the target audience...',
        'application-process': 'Details about the application process...',
        'support-for-applicants': 'Details about support for applicants...',
        'community-empowerment': 'Details about community and empowerment...'
    };





  const CardDescription = [
   {
     imageSrc:"/latinas.jpg",
     altText:"Image description" ,
     title:"Target Audience",
     description:"If you're a Latina aged 16-23, an ESL learner in the Sacramento Valley facing educational challenges, and feel like you at risk or discouraged from school, this summit is for you.",
   },
   {
     imageSrc:"/latinas.jpg",
     altText:"Image description" ,
     title:"Target Audience",
     description:"If you're a Latina aged 16-23, an ESL learner in the Sacramento Valley facing educational challenges, and feel like you at risk or discouraged from school, this summit is for you.",
   },
   {
     imageSrc:"/latinas.jpg",
     altText:"Image description" ,
     title:"Target Audience",
     description:"If you're a Latina aged 16-23, an ESL learner in the Sacramento Valley facing educational challenges, and feel like you at risk or discouraged from school, this summit is for you.",
   },

  ]



  return (


     <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <main className='w-full  max-w-[1900px] min-h-screen'>
         <EventFeature/>
          <Sponsor colorText='text-fuch' title={t('summit-sponsor')}  />
        </main>
      </TranslationsProvider>
    
  );
}

export default EventPage;





import React  from 'react';
import Sponsor from '@components/components/sections/sacramento-page/sponsor';
import TranslationsProvider from '@components/utils/translationProvider';
import initTranslations from '@components/app/i18n';
import { EventFeature } from './eventpage';
import { Metadata } from 'next';
import { auth } from '@clerk/nextjs';

const i18nNamespaces = ['summit-2024'];


export const metadata: Metadata = {
  title:'ETQ Summit-2024',
  description: 'Join a transformative summit dedicated to empowering young Latina women in the Sacramento Valley, aged 16-23. A collaboration between EdTechQuity and Inspirame, this event is a day of inspiration, learning, and networking, offering young Latinas and their supporters the opportunity to engage in growth and success.'
}


async function EventPage({ params: { locale } }) {


  const { t, resources } = await initTranslations(locale, i18nNamespaces);

 

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




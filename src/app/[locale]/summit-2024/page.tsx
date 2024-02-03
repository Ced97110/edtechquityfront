
import React  from 'react';
import Sponsor from '@components/components/sections/sacramento-page/sponsor';
import TranslationsProvider from '@components/utils/translationProvider';
import initTranslations from '@components/app/i18n';
import { EventFeature } from './eventpage';

const i18nNamespaces = ['summit-2024'];


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




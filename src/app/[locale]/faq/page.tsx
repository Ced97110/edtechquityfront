import React from 'react'
import Faq from './accordionfaq'
import initTranslations from '@components/app/i18n';
import TranslationsProvider from '@components/utils/translationProvider';


const i18nNamespaces = ['faq'];

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
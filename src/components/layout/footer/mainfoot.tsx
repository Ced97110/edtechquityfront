import React from 'react'
import Footer from './footer'
import TranslationsProvider from '@components/utils/translationProvider'
import initTranslations from '@components/app/i18n';

const i18nNamespaces = ['menu'];

interface footerProps {
  active?:string;
}

export const MainFoot = async ({ locale, active }) => {

    const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (

     <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <footer>
            <Footer active={active}/>
        </footer>
    </TranslationsProvider>
  )
}

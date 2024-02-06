

import React from 'react'
import initTranslations from '@components/app/i18n';
import TranslationsProvider from '@components/utils/translationProvider';
import WrapperNavbar from './wrappernavbar';




const i18nNamespaces = ['menu'];


async function Header ({ locale }) {

    const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <header>
          <WrapperNavbar/>
        </header>
     </TranslationsProvider>
  )
}

export default Header;
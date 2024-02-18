import React from 'react'
import MissionAndObjective from '@components/components/sections/homePage/mission-objective/mission';
import IntroEdTech from '@components/components/sections/homePage/introduction-edtech/introduction-edtech';
import YoungLatinaSection from '@components/components/sections/homePage/young-latina.tsx/young-latina';
import Hero from '@components/components/sections/homePage/hero/video-wrapper';
import ProblemStatement from '@components/components/sections/homePage/problem/problem-statement';
import Sponsor from '@components/components/sections/sacramento-page/sponsor';
import initTranslations from '../i18n';
import TranslationsProvider from '@components/utils/translationProvider';
import { cookies } from 'next/headers';
import { Metadata } from 'next';
import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image';



const i18nNamespaces = ['Home'];

export const metadata: Metadata = {
  title:'EdTechQuity',
  description: 'Discover how EdTechQuity supports Inspirame, a 501(c)(3) nonprofit, in its mission to empower low-income students to achieve higher education. Together, we aim to increase the graduation rates of Latinas from community college within 2 years, providing the tools and motivation to break the cycles of poverty.'
}



async function HomePage({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  let value = cookies().get("NEXT_LOCALE")
  
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <main className='min-h-screen bg-neutral-100 w-full max-w-[2000px]'>
          <Hero/>
          <IntroEdTech value={value}/>
          <Sponsor colorText='text-ciel' title={t('title-sponsor')} />
          <ProblemStatement/>
          <MissionAndObjective/>
          <YoungLatinaSection/>
        </main>
    </TranslationsProvider>
  )
}

export default HomePage;
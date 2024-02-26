
import React from 'react'
import type { Metadata } from 'next'
import { SectionAboutUs } from './section'
import TranslationsProvider from '@components/utils/translationProvider'
import initTranslations from '@components/app/i18n';

 


export const metadata: Metadata = {
  title: 'About-us',
  description: 'EdTechQuity was founded with a unique vision in mind, intertwining the concepts of Education, Technology, and Equity. As a 501(c)(3) nonprofit organization, our mission is to eradicate generational poverty through educational achievement. Dedicated to enhancing the completion rates of low-income students in trade certificate or college degree programs, with a special focus on Latina students, we aim to create equitable opportunities for those who need them most. Join a transformative summit dedicated to empowering young Latina women in the Sacramento Valley, aged 16-23. A collaboration between EdTechQuity and Inspirame, this event is a day of inspiration, learning, and networking, offering young Latinas and their supporters the opportunity to engage in growth and success.'
};

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
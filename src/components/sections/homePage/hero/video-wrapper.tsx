
import initTranslations from '@components/app/i18n';
import TranslationsProvider from '@components/utils/translationProvider';
import React, { useRef, useState } from 'react';
import VideoHero from './video';




const i18nNamespaces = ['home'];


async function Hero() {

      

 


  return (

       
          <section className='w-full min-w-screen'> 
            <VideoHero/>
          </section>

  )   
}

export default Hero
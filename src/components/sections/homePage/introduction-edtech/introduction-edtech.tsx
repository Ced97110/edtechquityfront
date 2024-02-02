'use client'


import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import LanguageChanger from '@components/utils/LanguageChanger';

 const IntroEdTech = ({value}:any) => {

  const videoRef = useRef(null);

  const { t,i18n } = useTranslation();

  useEffect(() => {
    // Attempt to play the video whenever the component mounts or the language changes
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      // In browsers that don’t allow video to play without user interaction, catch and handle the rejection.
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Automatic playback started!
        }).catch(error => {
          // Auto-play was prevented
          console.log('Video playback was prevented:', error);
        });
      }
    }
  }, [i18n.language]); // Depend o
   

  return (
   
       
      <section className='px-5 bg-white pt-[50px]'>

        <LanguageChanger/>

        <div className='container mx-auto'>

            <div className='grid grid-cols-2 gap-x-10 '>
                <div className='lg:col-span-2 col-span-3 pb-6 h-full'>
                     <video
                        key={i18n.language}
                        src={i18n.language === 'en' ? 'Education.mp4' : '/Education-es.mp4'}
                        autoPlay={true}
                        loop
                        muted
                        playsInline={true}
                        controls={false}
                        ref={videoRef}
                        style={{width:'100%',objectFit:'cover'}}
                        />
                    <h2 className='text-lg text-center font-bold text-neutral-500 font-display  pb-4'>{t('intro-subtitle')}</h2>
                </div>
                <div className='lg:col-span-2 col-span-3 mx-auto'>
                  <div className='max-w-[570px]'>
                    <p className='font-normal md:text-lg pb-4 leading-6 tracking-wide'>{t('intro-paragraph-1')}</p>
                    <p className='font-normal md:text-lg pb-4 leading-6 tracking-wide'>{t('intro-paragraph-2')}</p>
                  </div>
                </div>

            </div>
          </div>

      </section>


  )
}

export default IntroEdTech
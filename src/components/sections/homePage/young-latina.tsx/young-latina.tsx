'use client'

import React, { useRef } from 'react'
import ResponsiveImage from '../hero/responsive-image'
import { defaultRevealOptions } from '@components/utils/config';
import Link from 'next/link';
import { useTranslation } from "react-i18next";







const YoungLatinaSection = () => {

   const { t } = useTranslation();

   const paragraph = t('Young-latina-para-1')

   const word = 'Inspirame'

   const parts = paragraph.split(word);

   const highlightedParagraph = `${parts[0]}<a href='https://inspirame.com' target="_blank" rel="noopener noreferrer"  class='text-jaune'>${word}</a>${parts[1]}`;




  return (
     
   
      <section className='min-h-screen'>

        <div className='relative min-h-screen flex flex-col justify-center text-white p-6'>
          
        
            <div className='absolute inset-0 z-0'>
               <ResponsiveImage alt='young-latina-lady' 
                src='https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/latina-grandma'
                className=' absolute inset-0 z-0 aspect-square brightness-[0.35]' fill={true}  priority={false}/>
            </div>

            <div className='relative bg-transparent max-w-[650px] md:left-12'>
               <div className='flex-col relative'>
                  <h1 className="text-4xl lg:text-5xl  mb-4 font-bold text-white font-display">{t('Young-latina-title-1')} <span className='text-jaune'>{t('Young-latina-title-2')}</span></h1>
                  <p className="md:text-xl mb-6 font-bold text-neutral-100 text-start">{t('Young-latina-subtitle')}</p>
                  <div className="font-display flex items-center">
                    <p className="pr-2 font-bold text-white">{t('Young-latina-date')}</p>
                    <div className="border-r border-white h-5"></div>
                    <p className="pl-2 text-white font-bold">Sacramento, CA</p>
                  </div>
                  <div className='mt-6'>
                    <div className='font-normal md:text-lg pb-4 leading-6 tracking-wide' dangerouslySetInnerHTML={{ __html: highlightedParagraph }}></div>
                    <p className='font-normal md:text-lg pb-4 leading-6 tracking-wide'>{t('Young-latina-para-2')}</p>
                  </div>
                  <div>
                    <button className='lg:mt-8 max-w-max font-medium rounded-full box px-4 py-2 mt-4 font-display inline-block border-jaune border-2 border-solid shadow-md hover:shadow-xl text-white transition duration-300'>
                       <Link href='/summit-2024'>{t('Young-latina-button')}</Link>
                     </button>
                  </div>
               </div>
            </div>
         

         </div>
      </section>

  )
}

export default YoungLatinaSection


'use client'

import { defaultRevealOptions } from '@components/utils/config';
import React, { useEffect, useRef, useState } from 'react'
import ResponsiveImage from '../hero/responsive-image';
import { RevealList } from  'next-reveal'
import { RevealWrapper } from  'next-reveal'
import { useTranslation } from 'react-i18next';



 const ProblemStatement = () => {


    const { t } = useTranslation();

    const revealContainer = useRef<HTMLDivElement | null>(null);


            
        const stats = [
            {
                number:'83',
                text: t('problem-1-card'),
                
            },
            {
                number:'91',
                text:t('problem-2-card'),
               
            },

            
            {
                number:'82',
                text:t('problem-3-card'),
               
            },

            
            {
                number:'60',
                text:t('problem-4-card'),
                
            },


        ]



    

  return (
        <section className='relative min-w-screen bg-ciel min-h-screen pb-[150px]'>

            <div className='relative mx-auto bg-ciel rounded-lg  md:w-[670px] lg:w-[1200px]'> 

                <RevealWrapper {...defaultRevealOptions} className='mb-4'>
                    <div className='w-full pt-3'>
                        <div className='flex justify-center'>
                            <div className='h-full p-4  w-full  lg:max-w-[1050px] mt-14'>
                                <h3 className='text-4xl lg:text-5xl font-display w-full font-extrabold text-white text-center'> <span className='underline decoration-wavy decoration-jaune decoration-2'>{t('problem-title-word')}</span>{t('problem-title')}</h3>
                                <p className='text-white font-normal md:text-lg pb-4 leading-6 tracking-wide mt-6'>{t('problem-1-paragraph')} </p>
                                <p className='text-white font-normal md:text-lg pb-4 leading-6 tracking-wide'>{t('problem-2-paragraph')} </p>
                              </div>
                          </div>
                    </div> 
                </RevealWrapper>
            

                <div className='flex relative lg:top-12'>
                        <RevealList {...defaultRevealOptions} interval={200} className='grid grid-cols-4 gap-4 justify-items-center lg:[&>*:nth-child(even)]:justify-self-start   lg:[&>*:nth-child(odd)]:justify-self-end  md:px-8  w-full'>
                            {stats && stats.map(({number, text}, i) => (
                               <li key={i} className={`relative col-span-4 md:col-span-2 w-[300px] border-[1px] border-jaune shadow-2xl lg:w-[280px] h-[260px] rounded-lg lg:h-[310px] p-8 list-none ${
                                    i === 0 ? 'rounded-bl-lg' : ''} ${
                                    i === stats.length - 1 ? 'rounded-br-lg' : ''}`}>
                                    <div className='relative inset-0 z-10 flex flex-col'>
                                        <div className='lg:text-5xl text-4xl text-white  font-display font-bold text-center  py-6 '>{number}%</div>
                                        <div className='text-md text-white lg:text-lg'>{text}</div>
                                    </div>
                                   
                                </li>
                            ))}
                        </RevealList>
                </div>
            </div>

        
        </section>
          
  )
}

export default ProblemStatement



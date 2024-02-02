'use client'

import { defaultRevealOptions } from '@components/utils/config';
import React, { useEffect, useRef, useState } from 'react'
import ResponsiveImage from '../hero/responsive-image';
import { RevealList } from  'next-reveal'
import { RevealWrapper } from  'next-reveal'
import { useTranslation } from 'react-i18next';



 const ProblemStatement = () => {


      const { t } = useTranslation();



            
        const stats = [
            {
                number:'83',
                text: t('problem-1-card'),
                src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/the%20stats/latinas-done'
            },
            {
                number:'91',
                text:t('problem-2-card'),
                src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/the%20stats/thinking'
            },

            
            {
                number:'82',
                text:t('problem-3-card'),
                src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/the%20stats/latin-male'
            },

            
            {
                number:'60',
                text:t('problem-4-card'),
                src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/the%20stats/black-girl'
            },


        ]








 
    const revealContainer = useRef<HTMLDivElement | null>(null);

    

  return (
        <section className='relative min-w-screen bg-ciel min-h-screen py-[50px]'>

            <div className='relative mx-auto bg-ciel rounded-lg pb-[55px] w-[370px] lg:w-[1200px]'> 

                <RevealWrapper {...defaultRevealOptions} className='mb-4'>
                    <div className='w-full pt-3'>
                        <div className='flex justify-center'>
                            <div className='h-full p-3  w-full  lg:max-w-[850px] mt-14'>
                                <h3 className='text-4xl lg:text-5xl font-display w-full font-extrabold text-white text-center'> <span className='underline decoration-wavy decoration-jaune decoration-2'>{t('problem-title-word')}</span>{t('problem-title')}</h3>
                                <p className='mt-4 font-display text-white  text-md lg:text-lg text-center'>{t('problem-1-paragraph')} </p>
                                <p className='mt-4 font-display text-md  text-white lg:text-lg text-center'>{t('problem-2-paragraph')} </p>
                              </div>
                          </div>
                    </div> 
                </RevealWrapper>
            

                <div className='flex relative lg:top-12'>
                        <RevealList {...defaultRevealOptions} interval={200} className='grid grid-cols-4 gap-4 justify-items-center w-full'>
                            {stats && stats.map(({number, text, src}, i) => (
                               <li key={i} className={`relative col-span-4 md:col-span-1 w-[300px] shadow-2xl lg:w-[280px] h-[260px] rounded-lg lg:h-[310px] p-8 list-none ${
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



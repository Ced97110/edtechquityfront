'use client'


import React, { useState } from 'react'
import CounterSection from '../jsummit-2024/countersection'
import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Tab from './tab';
import Faq from '../faq/accordionfaq';
import Link from 'next/link';
import { auth } from '@clerk/nextjs';



export const EventFeature = () => {


   const { t } = useTranslation();

    

   let href = '/application' 
  

   
   const paragraph = t('summit-intro-para-1')

   const word = 'Inspirame'

   const parts = paragraph.split(word);

   const highlightedParagraph = `${parts[0]}<a href='https://inspirame.com' target="_blank" rel="noopener noreferrer"  class='text-jaune'>${word}</a>${parts[1]}`;


   
            
  return (

    <>
         <section>

                <div className="relative max-h-[700px] h-[600px] flex flex-col items-center justify-center text-white p-6">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                      <ResponsiveImage 
                        src='https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/silouhette-latinas'
                        alt='silouhette-latinas' fill={true}  priority={true}/>
                  </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-fuch to-transparent  opacity-100"></div>

                  {/* Content */}
                  <div className="z-10 flex flex-col relative top-[65px]">
                      <h1 className="md:text-5xl text-3xl  mb-4 font-extrabold  font-display">{t('summit-title-1')} <span className='text-jaune'>{t('summit-title-2')}</span></h1>
                      <p className="md:text-xl mb-6 font-bold text-start">{t('summit-subtitle')}</p>
                      <div className="font-display text-white flex items-center">
                        <p className="pr-2 font-bold">{t('summit-date')}</p>
                        <div className="border-r border-white h-5"></div>
                        <p className="pl-2 font-bold">Sacramento, CA</p>
                      </div>
                     <div>
                       <button className="mt-8 inline-block bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full shadow-md font-semibold text-lg cursor-pointer  transition duration-300 font-display ">
                          <Link href='/application'>{t('button-join')}</Link> 
                        </button>
                     </div>
                  </div>
              </div>
          

          </section>

          <section className='bg-fuch py-[50px]'>
              <div className='container mx-auto'>
                

                <div className='grid grid-cols-3 justify-items-center'>
                    <div className='col-span-3 pb-6 h-full bg-fuch row-span-2 p-6 rounded-lg'>
                        <div className='flex flex-col items-center'>
                          <h2 className='text-3xl lg:text-4xl text-white font-bold font-display text-center'>{t('summit-title-intro')}</h2>
                          <h2 className='text-md text-jaune text-center font-normal font-display pt-4 pb-4'>{t('summit-subtitle-intro')}</h2>
                    
                          <div className='max-w-[700px]'>
                               <div className='text-white md:text-lg pb-4 leading-6 font-display tracking-wide' dangerouslySetInnerHTML={{ __html: highlightedParagraph }}></div>
                               <p className='text-white md:text-lg pb-4 leading-6 font-display tracking-wide'>{t('summit-intro-para-2')}</p>
                          </div>
                        </div>
                    
                  </div>
                </div>

            </div>
          </section>

            <section className="bg-pink-600 px-5 py-[50px]"> 

                  <div className='container mx-auto'>

                      <div className='mb-12'>
                          <div className='w-full border-t border-inherit border-solid border-blue-900 pt-3'>
                            <div className='flex columns-1'>
                              <div>
                                <h3 className="text-white text-start text-2xl lg:text-4xl font-bold font-display relative">
                                  {t('summit-why-attend-title')}
                                </h3>
                                <p className='font-display text-md text-jaune pt-4 leading-6 tracking-wide'>{t('summit-why-attend-subtitle')}</p>
                                <p className='text-white mt-4 font-normal md:text-lg pb-4 leading-6 tracking-wide'>{t('summit-why-attend-para')}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 <Tab/>   
                    
            </section>
          
        
            <section className='bg-fuch px-5 min-h-screen py-[50px]'>
                
                  <div className='container mx-auto'>
                  
                    <div className='mb-8'>
                        <div className='w-full border-t border-inherit border-solid border-blue-700 pt-3'>
                          <div className='flex columns-1'>
                            <div>
                              <h3 className="text-white text-start text-2xl lg:text-4xl font-bold font-display relative">
                               {t('summit-eligibility-title')}
                              </h3>
                              <p className='font-display text-md text-jaune pt-4'> {t('summit-eligibility-subtitle')}</p>
                            </div>
                          </div>
                      </div>
                  </div>

            
                    
                    <div className="mb-6 rounded-lg grid grid-cols-1 gap-y-6">
                      <h3 className="text-xl font-normal text-white bg-pink-600 w-full p-2 rounded-md pl-2"> {t('summit-eligibility-target')}</h3>
                      <p className='text-white p-3 font-normal md:text-lg  leading-6 tracking-wide'>{t('summit-eligibility-target-para')}</p>
                    </div>

                  
                    <div className="mb-6">
                      <h3 className="text-xl font-normal text-white mb-2 bg-pink-600 w-full p-2 rounded-md">{t('summit-eligibility-app-title')}</h3>
                      <p className='text-white p-3  font-normal md:text-lg pb-4 leading-6 tracking-wide'>{t('summit-eligibility-app-para-1')}</p>
                      <p className='text-white p-3  font-normal md:text-lg pb-4 leading-6 tracking-wide'>{t('summit-eligibility-app-para-2')}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-normal text-white mb-2 font-display bg-pink-600 w-full p-2 rounded-md">{t('summit-eligibility-support-title')}</h3>
                      <p className='text-white font-normal p-3  md:text-lg pb-4 leading-6 tracking-wide'>{t('summit-eligibility-support-para-1')}</p>
                      <p className='text-white font-normal p-3  md:text-lg pb-4 leading-6 tracking-wide'>{t('summit-eligibility-support-para-2')}</p>
                    </div>

                    
                    <div>
                      <h3 className="text-xl font-normal text-white mb-2 font-display  bg-pink-600 w-full p-2 rounded-md pl-2">{t('summit-eligibility-commu-title')}</h3>
                      <p className='text-white font-normal md:text-lg p-3  leading-6 tracking-wide'>{t('summit-eligibility-commu-para-1')}</p>
                    </div>

                     <div className='mt-5 flex justify-center'>
                       <Link href={href}> 
                         <button className='mt-8 inline-block bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full shadow-md font-semibold text-lg cursor-pointer  transition duration-300 font-display'>
                          {t('button-join')}
                         </button>
                       </Link>
                    </div>
                </div>  
                 

          </section>

          
          <section className='bg-pink-600 max-h-screen py-[100px] lg:px-36'>
              <div className='mb-4 lg:mb-14'>
                <h2 className='text-2xl lg:text-4xl text-center font-bold font-display text-white'>
                 {t('summit-get-ready-title')}
                </h2>
              </div>
              <div>
                <CounterSection/>
              </div>
          </section>
    </>
  )
}

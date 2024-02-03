'use client'


import React, { useState } from 'react'
import CounterSection from '../jsummit-2024/countersection'
import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';



export const EventFeature = () => {



  const [activeTabId, setActiveTabId] = useState(0);
  

   const { t } = useTranslation();



const eventFeatures = [
     {
        title: t('event-feat-1-title'),
        subtitle:t('event-feat-1-subtitle'),
        src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/inspirational-woman',
        paragraphs: [t('event-feat-1-para')]
    },
    {
        title: t('event-feat-2-title'),
        subtitle:t('event-feat-2-subtitle'),
         src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/networking-fingers',
        paragraphs: [t('event-feat-2-para')]
    },
    {
        title: t('event-feat-3-title'),
        subtitle:t('event-feat-3-subtitle'),
         src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/workshop',
        paragraphs:[t('event-feat-3-para')]
    }, 
    {
        title: t('event-feat-4-title'),
        subtitle: t('event-feat-4-subtitle'),
        src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/frida-carlo',
        paragraphs: [t('event-feat-4-para')]
    },
    {
        title: t('event-feat-5-title'),
        subtitle:t('event-feat-5-subtitle'),
        src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/latina-diploma',
        paragraphs:[t('event-feat-5-para')]
    },
    {
       title: t('event-feat-6-title'),
       subtitle: t('event-feat-6-subtitle'),
       src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/supportive-parent',
       paragraphs: [t('event-feat-6-para')]
}

];


            
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
                       <button
                           onClick={() => window.open("https://docs.google.com/forms/d/1xwNc8N-Lb8lGoP-JNDg_u-yfRyrizFD7P5CPHqaQ9Ck/viewform?ts=65bb3617&edit_requested=true", "_blank")}
                            className="mt-8 inline-block bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full shadow-md font-semibold text-lg cursor-pointer  transition duration-300 font-display "
                         >
                           {t('button-join')}
                        </button>
                     </div>
                  </div>
              </div>
          

          </section>

          <section className='bg-fuch  py-[50px]'>
              <div className='container mx-auto'>
                

                <div className='grid grid-cols-3 justify-items-center'>
                    <div className='col-span-3 pb-6 h-full bg-fuch row-span-2 p-6 rounded-lg'>
                        <div className='flex flex-col items-center'>
                          <h2 className='text-3xl lg:text-4xl text-white font-bold font-display text-center'>{t('summit-title-intro')}</h2>
                          <h2 className='text-md text-jaune text-center font-normal font-display pt-4 pb-4'>{t('summit-subtitle-intro')}</h2>
                    
                          <div className='max-w-[700px]'>
                              <p className='text-white md:text-lg pb-4 leading-6 font-display tracking-wide'>{t('summit-intro-para-1')}</p>
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
                              <p className='text-md text-white pt-4 leading-6 font-display tracking-wide'>{t('summit-why-attend-para')}</p>
                            </div>
                          </div>
                      </div>
                  </div>

                      <div className="block shadow-2xl lg:max-h-full max-w-[750px] mx-auto rounded-lg">
                        <div role='tablist' aria-label='mission tabs' className="relative shadow-2xl  overflow-y-auto flex overflow-x-auto">
                            {eventFeatures &&
                                eventFeatures.map(({title}, i) => (
                                <button
                                    key={i}
                                    className={clsx(
                                    "flex items-center md:text-lg justify-center min-w-[200px] w-full lg:max-h-[200px] h-[70px] p-2 lg:justify-start transition-all duration-600 ease-in-out text-center bg-opacity-90 backdrop-blur-md rounded-t-lg ",
                                    {
                                        'text-white': activeTabId === i,
                                        'bg-fuch focus:bg-fuch text-white ': activeTabId === i,
                                    }
                                    )}
                                    onClick={() => setActiveTabId(i)}
                                    id={`tab-${i}`}
                                    role="tab"
                                    tabIndex={activeTabId === i ? 0 : -1}
                                    aria-selected={activeTabId === i}
                                    aria-controls={`panel-${i}`}
                                >
                                    <span className='text-center text-white font-display'>{title}</span>
                                </button>
                                ))}
                            </div>
                            <div className="relative w-full lg:col-span-2 shadow-2xl">
                            {eventFeatures &&
                                eventFeatures.map(({paragraphs,src,subtitle}, i) => (
                                <div
                                    id={`panel-${i}`}
                                    key={i}
                                    className={`${
                                    activeTabId === i ? 'block' : 'hidden'
                                    } md:w-full transition-transform delay-100 ease-in-out duration-600`}
                                    
                                >
                                    <div className='max-h-[650px] lg:max-h-[800px] h-[370px] relative w-full'>
                                      <Image src={src} className={clsx(
                                        'inset-0 brightness-[0.3] transition-all duration-300 ease-in-out aspect-square',
                                        {
                                          'absolute rounded-b-xl' :  activeTabId === i,
                                          'hidden' : activeTabId !== i
                                        }
                                      )} fill={true} style={{objectFit:'cover'}} alt='latinas'/>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-fuch to-transparent opacity-90 rounded-lg">
                                      {paragraphs && paragraphs.map((item, i) => (
                                          <div className='flex items-start justify-center' key={i}>
                                              <p className="text-md absolute left-0 right-0 lg:bottom-1/2 bottom-20 p-3 text-white z-10 leading-6 font-display tracking-wide ">
                                                  {item}
                                              </p>
                                          </div>
                                      ))}
                                  </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div> 
                    
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
                      <h3 className="text-xl font-normal text-white mb-2 bg-pink-600 w-full p-2 rounded-md pl-2"> {t('summit-eligibility-target')}</h3>
                      <p className="text-white mb-2 pl-2 leading-6 font-display tracking-wide">{t('summit-eligibility-target-para')}</p>
                    </div>

                  
                    <div className="mb-6">
                      <h3 className="text-xl font-normal text-white mb-2 bg-pink-600 w-full p-2 rounded-md">{t('summit-eligibility-app-title')}</h3>
                      <p className="text-white mb-2  pt-2 pl-2 leading-6 font-display tracking-wide">{t('summit-eligibility-app-para-1')}</p>
                      <p className="text-white font-display pl-2">{t('summit-eligibility-app-para-2')}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-normal text-white mb-2 font-display bg-pink-600 w-full p-2 rounded-md">{t('summit-eligibility-support-title')}</h3>
                      <p className="text-white mb-2  pt-2 pl-2 leading-6 font-display tracking-wide">{t('summit-eligibility-support-para-1')}</p>
                      <p className="text-white  pl-2 leading-6 font-display tracking-wide">{t('summit-eligibility-support-para-2')}</p>
                    </div>

                    
                    <div>
                      <h3 className="text-xl font-normal text-white mb-2 font-display  bg-pink-600 w-full p-2 rounded-md pl-2">{t('summit-eligibility-commu-title')}</h3>
                      <p className="text-white  pt-2 pl-2 leading-6 font-display tracking-wide">{t('summit-eligibility-commu-para-1')}</p>
                    </div>

                     <div className='mt-5 flex justify-center'>
                        <button
                           onClick={() => window.open("https://docs.google.com/forms/d/1xwNc8N-Lb8lGoP-JNDg_u-yfRyrizFD7P5CPHqaQ9Ck/viewform?ts=65bb3617&edit_requested=true", "_blank")}
                            className="mt-8 inline-block bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full shadow-md font-semibold text-lg cursor-pointer  transition duration-300 font-display "
                         >
                            {t('button-join')}
                        </button>

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

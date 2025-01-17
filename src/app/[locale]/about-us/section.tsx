'use client'


import IconLinkedin from '@components/components/icons/linkedin'
import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { RevealList } from  'next-reveal'
import { RevealWrapper } from  'next-reveal'
import { defaultRevealOptions } from '@components/utils/config'
import CredlyBadge from '@components/components/credly/logo'

export const SectionAboutUs = () => {


  const emailMaria ='maria.medrano@inspirame.com'

  const emailMagda ='magdalena.gonzalez@inspirame.com'

  const { t } = useTranslation();


  return (
    <>

       <section className=' bg-white bg-opacity-90 pt-[5px] pb-[50px]'>
        <div className='p-8 mx-auto container' >
          <div className='flex-col flex items-center gap-3'>
            <h2 className='text-5xl lg:text-5xl text-ciel font-extrabold font-display text-center pb-6'>{t('about-title')}</h2>
            <p className='first-letter:text-7xl first-letter:font-medium first-letter:text-ciel
                first-letter:mr-3  first-letter:float-left  max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide py-4'> 
             {t('about-para-1')}
            </p>
            <RevealWrapper {...defaultRevealOptions} className='mb-4'>
              <ResponsiveImage src='https://res.cloudinary.com/dqr6k0yey/image/upload/v1708921451/aboutpage/photo-1.jpg' height={500} width={600} priority={false} alt='maria-mendrano as a child with her parents' className='rounded-lg shadow-2xl' />
            </RevealWrapper>
            <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide py-8'>
              {t('about-para-2')}
            </p>
            <RevealWrapper {...defaultRevealOptions} className='mb-4'>
              <ResponsiveImage src='https://res.cloudinary.com/dqr6k0yey/image/upload/v1708921451/aboutpage/photo-2.jpg' height={800} width={850} priority={false} alt='Maria Mendrano with her family' className='rounded-lg shadow-2xl' />
            </RevealWrapper>

            <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide py-8'>
               {t('about-para-3')}
            </p>
             <RevealWrapper {...defaultRevealOptions} className='mb-4'>
              <ResponsiveImage src='https://res.cloudinary.com/dqr6k0yey/image/upload/v1708921451/aboutpage/photo-3.jpg' height={800} width={850} priority={false} alt='Maria Mendrano with her family' className='rounded-lg shadow-2xl' />
            </RevealWrapper>
             <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide py-8'>
               {t('about-para-4')}
            </p>
             <RevealWrapper {...defaultRevealOptions} className='mb-4'>
               <ResponsiveImage src='https://res.cloudinary.com/dqr6k0yey/image/upload/v1708921451/aboutpage/photo-4.jpg' height={800} width={850} priority={false} alt='Maria Mendrano with her family' className='rounded-lg shadow-2xl' />
            </RevealWrapper>
             <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide pt-8'>
               {t('about-para-5')}
            </p>
             <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide py-8'>
               {t('about-para-6')}
            </p>
             <RevealWrapper {...defaultRevealOptions} className='mb-4'>
               <ResponsiveImage src='https://res.cloudinary.com/dqr6k0yey/image/upload/v1708921451/aboutpage/photo-5.jpg' height={850} width={850} priority={false} alt='Maria Mendrano with her family' className='rounded-lg shadow-2xl' />
             </RevealWrapper>
             <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide pt-8'>
               {t('about-para-7')}
            </p>

          </div>
        </div>
       </section>

      <RevealWrapper {...defaultRevealOptions} className='mb-4'>
      <section className='min-h-screen w-screen pb-[50px] px-[20px]'> 
        <div className='container mx-auto shadow-2xl shadow-ciel-500/100 p-4 lg:p-8 border-[0.5px] ring-[10px] ring-offset-2 ring-offset-neutral-300 bg-white rounded-xl'>
          <div className='lg:mb-8 p-3 lg:max-w-3xl mx-auto flex flex-col'>
              <h2 className='text-center text-ciel font-normal text-3xl lg:text-5xl tracking-[0.7em] mb-10'>{t('memorial-thank-you')}</h2>
              <p className='text-center lg:text-lg font-light'>{t('memorial-para')}</p>
          </div>
          <div className='grid grid-cols-2 lg:gap-5 -mt-4 '>
            <div className='col-span-2 relative h-[450px] justify-evenly items-center flex'>
              <ResponsiveImage src='/M.png' height={200} width={200} priority={true} alt='maria-mendrano' className='' />
              <ResponsiveImage src='/mom.jpg' height={320} width={320} priority={true} alt='maria-mendrano' className='rounded-full shadow-2xl' />
              <ResponsiveImage src='/M.png' height={200} width={200} priority={true} alt='maria-mendrano' className='' />
            </div>
            <div className='col-span-2 -mt-8  md:mt-5 lg:mt-0'>
              <p className='text-center text-ciel font-normal text-xl lg:text-4xl tracking-[0.7em] uppercase'>Maria Elena Medrano</p>
            </div>
          </div>
        </div>
       </section>
      </RevealWrapper>


       <section className='py-[100px] min-h-screen'>
         <div className='mb-14'>
           <h2 className='text-center text-4xl text-ciel font-bold font-display'> {t('about-team')}</h2>
         </div>
         <div className='container mx-auto'>
           <div className='grid grid-cols-2 lg:h-[340px] gap-8'>
             <div className='flex col-span-2 md:col-span-1 justify-center items-center'>
              <div className='flex-col rounded-lg  shadow-xl'>
                <div className='rounded-full ring-offset-2 ring-offset-neutral-300  ring-8 bg-ciel w-[210px] h-[210px]'>
                 <ResponsiveImage src='/maria.png' height={180} width={190} priority={false} alt='maria-mendrano' className='relative left-2 top-1 aspect-square overflow-hidden'/>
               </div>
               <div>
                 <p className='text-center py-6 font-bold'>Maria Medrano</p>
                 <p className='text-center pb-4'>{t('about-maria')}</p>
                 <div className='flex justify-evenly'>
                    <a href="https://www.linkedin.com/in/mariamedrano/" target="_blank" rel="noopener noreferrer">
                     <IconLinkedin />
                    </a>
                    <a className="email-link" href={`mailto:${emailMaria}`}>
                       <EnvelopeIcon className="h-5 w-5 text-ciel mb-2"/>
                     </a>
                 </div>
                 <div className="flex justify-center py-4">
                  <CredlyBadge />
                 </div>
               </div>
              </div>
             </div>
             <div className='flex col-span-2 md:col-span-1 bg-white justify-center items-center'>
               <div className='flex-col rounded-lg shadow-2xl'>
                <div className='rounded-full ring-offset-2 ring-offset-neutral-300 ring-8 bg-ciel w-[210px] h-[210px] shadow-xl'>
                 <ResponsiveImage src='/fille.png' height={300} width={300} priority={true} alt='maria-mendrano' className='relative  object-cover aspect-square'/>
               </div>
               <div>
                 <p className='text-center py-6 font-bold'>Magdalena Gonzalez</p>
                 <p className='text-center pb-4'>{t('about-magda')}</p>
                 <div className='flex justify-evenly'>
                    <a href="https://www.linkedin.com/in/magdalenagon/" target="_blank" rel="noopener noreferrer">
                     <IconLinkedin />
                    </a>

                     <a className="email-link" href={`mailto:${emailMagda}`}>
                       <EnvelopeIcon className="h-5 w-5 text-ciel mb-2"/>
                     </a>
                 </div>
               </div>
              </div>
             </div>
           </div>
         </div>
       </section>

    </>
  )
}

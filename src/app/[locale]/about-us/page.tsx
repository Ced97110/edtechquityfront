
import initTranslations from '@components/app/i18n'
import IconLinkedin from '@components/components/icons/linkedin'
import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import React from 'react'

 const AboutPage = async ({ params: { locale } }) => {

  const { t,i18n } = await initTranslations(locale, ['about-us']);

  return (

    <main className='min-h-screen  w-full max-w-[2000px] bg-white'>
      <section className='flex w-full pt-[90px]'>
        <div className='mx-auto'>
           <video
              key={i18n.language}
              src={i18n.language === 'es' ? 'Education-es.mp4' :'Education.mp4'}
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
       <section className=' bg-white bg-opacity-90 py-[50px]'>
        <div className='p-8 mx-auto container' >
          <div className='flex-col flex items-center gap-3'>
            <h2 className='text-5xl lg:text-6xl text-ciel font-extrabold font-display text-center pb-4'>{t('about-team')}</h2>
            <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide'> 
             {t('about-para-1')}
            </p>
            <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide'>
              {t('about-para-2')}
            </p>
            <p className='max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide'>
               {t('about-para-3')}
            </p>

          </div>
        </div>
       </section>
       <section className='py-[50px] min-h-screen'>
         <div className='mb-14'>
           <h2 className='text-center text-3xl text-ciel font-bold font-display'> {t('about-team')}</h2>
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
                    <IconLinkedin />
                    <EnvelopeIcon className="h-5 w-5 text-ciel mb-2" />
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
                    <IconLinkedin />
                    <EnvelopeIcon className="h-5 w-5 text-ciel mb-2"/>
                 </div>
               </div>
              </div>
             </div>
           </div>
         </div>
       </section>
    </main>
  )
}

export default AboutPage
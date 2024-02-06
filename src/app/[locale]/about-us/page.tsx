
import initTranslations from '@components/app/i18n'
import IconLinkedin from '@components/components/icons/linkedin'
import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import type { Metadata } from 'next'
 


export const metadata: Metadata = {
  title: 'About-us',
  description: 'EdTechQuity was founded with a unique vision in mind, intertwining the concepts of Education, Technology, and Equity. As a 501(c)(3) nonprofit organization, our mission is to eradicate generational poverty through educational achievement. Dedicated to enhancing the completion rates of low-income students in trade certificate or college degree programs, with a special focus on Latina students, we aim to create equitable opportunities for those who need them most. Join a transformative summit dedicated to empowering young Latina women in the Sacramento Valley, aged 16-23. A collaboration between EdTechQuity and Inspirame, this event is a day of inspiration, learning, and networking, offering young Latinas and their supporters the opportunity to engage in growth and success.'
};


 const AboutPage = async ({ params: { locale } }) => {

  const { t,i18n } = await initTranslations(locale, ['about-us']);

  const emailMaria ='maria.medrano@inspirame.com'

  const emailMagda ='magdalena.gonzalez@inspirame.com'

  return (

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
       <section className=' bg-white bg-opacity-90 pt-[5px] pb-[50px]'>
        <div className='p-8 mx-auto container' >
          <div className='flex-col flex items-center gap-3'>
            <h2 className='text-5xl lg:text-5xl text-ciel font-extrabold font-display text-center pb-6'>{t('about-title')}</h2>
            <p className='first-letter:text-7xl first-letter:font-medium first-letter:text-ciel
                first-letter:mr-3  first-letter:float-left  max-w-[850px] lg:text-lg  leading-6 font-display tracking-wide'> 
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
                    <a href="https://www.linkedin.com/in/mariamedrano/" target="_blank" rel="noopener noreferrer">
                     <IconLinkedin />
                    </a>
                    <a className="email-link" href={`mailto:${emailMaria}`}>
                       <EnvelopeIcon className="h-5 w-5 text-ciel mb-2"/>
                     </a>
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
    </main>
  )
}

export default AboutPage
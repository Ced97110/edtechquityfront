import initTranslations from '@components/app/i18n';
import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image'
import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react'
import Link from 'next/link';


export  const Partner = async ({locale}) => {

   const { t,i18n } = await initTranslations(locale, ['sponsorship']);

  return (
    <>
       
       <section className='py-[50px]'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 justify-items-center'>
                <div className='col-span-3 pb-6 h-full row-span-2 p-6 rounded-lg'>
                    <div className='flex flex-col items-center'>
                      <h2 className='text-4xl lg:text-4xl text-ciel font-extrabold font-display text-center mb-4'>{t('partner-title')}</h2>
                      <div className='lg:max-w-[700px]'>
                        <p className='md:text-lg pb-4 leading-6 font-display tracking-wide'> 
                         {t('partner-para')}
                        </p>
                        <div className='flex justify-center mt-4'>
                          <a href={`mailto:medranom@edtechquity.net; banuelosd@edtechquity.net`} className='bg-jaune rounded-full px-4 py-2 text-white'>
                             {t('partner-button')}
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

import ResponsiveImage from '@components/components/sections/homePage/hero/responsive-image'
import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useTranslation } from 'react-i18next';



export const Packages = () => {

  const { t } = useTranslation();
   
const packages = [
  {
    name: t('sponsor-card-1-name'),
    price: '$10K',
    passes: t('sponsor-card-1-passes'),
    promotions: [t('sponsor-card-1-promo-1'),t('sponsor-card-1-promo-2'),t('sponsor-card-1-promo-3')],
    bgColor: 'bg-pink-600',
  },
  {
    name: t('sponsor-card-2-name'),
    price: '$5K',
    passes: t('sponsor-card-2-passes'),
    promotions: [t('sponsor-card-2-promo-promo-1'), t('sponsor-card-2-promo-promo-2'),t('sponsor-card-2-promo-promo-3')],
    bgColor: 'bg-teal-300',
  },
  {
    name: t('sponsor-card-3-promo-name'),
    price: '$4K',
    passes: t('sponsor-card-3-promo-passes'),
    promotions: [t('sponsor-card-3-promo-promo-1'),t('sponsor-card-3-promo-promo-2')],
    bgColor: 'bg-yellow-400',
  },
  {
    name: t('sponsor-card-4-promo-name'),
    price: '$2K',
    passes: t('sponsor-card-4-passes'),
    promotions: [t('sponsor-card-4-promo-promo-1')],
    bgColor: 'bg-gray-300',
  }
];



  return (
    <>
       <section className='relative'>

        <div className=" max-h-[800px] h-[600px] flex flex-col items-center justify-center p-6 overflow-hidden" >
             <ResponsiveImage src='https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/sponsorship-page'
                alt='silouhette-latinas' className='brightness-50' fill={true}  priority={false}/>

              <div className="z-10 flex flex-col relative top-[65px]">
                  <h1 className="text-4xl lg:text-5xl text-white font-extrabold font-display text-center">{t('sponsor-title')}</h1>
                  <p className="md:text-xl mb-6 font-bold text-white text-start">{t('sponsor-subtitle')}</p>
                  <div className="font-display text-white flex items-center">
                    <div className="border-r border-white h-5"></div>
                  </div>
              </div>
          </div>
       
      
      </section>


      <section className='py-[50px]'>
         

        <div className='container mx-auto'>

            <div className='grid grid-cols-3 justify-items-center'>
                <div className='col-span-3 pb-6 h-full row-span-2 p-6 rounded-lg'>
                    <div className='flex flex-col items-center'>
                      <h2 className='text-4xl lg:text-5xl text-ciel font-extrabold font-display text-center'>{t('sponsor-title-intro')}</h2>
                      <h2 className='text-[13px] text-center  font-normal font-display pt-4 pb-4'>test tes test test new tagline ?</h2>
                
                      <div className='lg:max-w-[700px]'>
                        <p className='md:text-lg pb-4 leading-6 font-display tracking-wide'> 
                         {t('sponsor-para-1')}
                        </p>
                        <p className='md:text-lg pb-4 leading-6 font-display tracking-wide'>
                          {t('sponsor-para-2')}
                        </p>
                      </div>
                    </div>
                
              </div>
            </div>

        </div>
      </section>

      <section className='py-[50px] bg-white'>

        <div className='container mx-auto'> 

            <div className='mb-8'>
                  <div className='w-full border-t border-inherit border-solid border-blue-900 pt-3'>
                    <div className='flex'>
                      <div className='h-full p-4'>
                        <h3 className="text-4xl lg:text-5xl text-ciel font-extrabold font-display text-center">
                           {t('sponsor-pack-title')}
                        </h3>
                        <p className='text-md text-neutral-400  font-medium font-display pt-4'> {t('sponsor-pack-subtitle')}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-2 justify-items-center px-[200px]'>

              {packages && packages.map((item,index) =>  (

                <div key={index} className={`col-span-2 lg:col-span-1 lg:row-span-1 rounded-lg`}>
                  <div className={`p-5 w-[350px] h-[450px] lg:w-[500px] lg:h-[400px] rounded-lg ${item.bgColor}`}>
                   <div className='flex-col text-white items-center'>
                    <h4 className='text-3xl text-white font-bold text-center pb-4'>{item.name}</h4>
                    <p className='text-4xl text-center pb-2'>{item.price}</p>
                    <div className='grid grid-cols-2 gap-2 mt-5'>
                      <div className='col-span-2 lg:col-span-1 p-3'>
                        <div className='flex-col'>
                          <p className='text-lg font-bold pb-2'>
                           {t('sponsor-access')}
                          </p>
                          <div className='flex'>
                           <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                           <p>{item.passes}</p>  
                          </div>
                        </div>
                      </div>
                      <div className='col-span-2 lg:col-span-1'>
                        <div className='flex-col'>
                          <p className='text-lg font-bold pb-2'>
                            {t('sponsor-visibility')}
                          </p>
                          <ul>
                            {item.promotions && item.promotions.map((item, i) => (
                              <li key={i} className="flex items-center p-2">
                                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                                 {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
              ))}
            </div>

        
      </section>
    </>
  )
}

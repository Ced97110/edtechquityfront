'use client'

import { useTranslation } from "react-i18next";
import { AcademicCapIcon, BookOpenIcon, GlobeAltIcon } from "@heroicons/react/24/solid";




const MissionAndObjective = () => {

  const { t } = useTranslation();


   const missionDetails = [
    {
        title: t('Help-1-card-title'),
        intro: t('Help-1-card-paragraph'),
        description:[ t('Help-1-card-des-1'),t('Help-1-card-des-2'),t('Help-1-card-des-3')],
        icon: <GlobeAltIcon className="h-10 w-10 text-ciel mb-2" />,
         src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/mission/bridge'
    },
    {
        title: t('Help-2-card-title'),
        intro: t('Help-2-card-paragraph'),
        description: [ t('Help-2-card-des-1'),t('Help-2-card-des-2'),t('Help-2-card-des-3'),t('Help-2-card-des-4')],
        icon: <BookOpenIcon className="h-10 w-10 text-ciel mb-2" />,
         src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/mission/curation'
    },
    {
        title: t('Help-3-card-title'),
        intro: t('Help-3-card-paragraph'),
        description: [t('Help-3-card-des-1'),t('Help-3-card-des-2'),t('Help-3-card-des-3'),t('Help-3-card-des-4')],
        icon: <AcademicCapIcon className="h-10 w-10 text-ciel mb-2" />,
        src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/mission/scholarship'
    },

  ];



  
  return (

    <section className='bg-white px-5 lg:min-h-[700px] py-[50px]'>

        <div className='container mx-auto'> 

           <div className='mb-8'>
                <div className='w-full border-t border-inherit border-solid border-white pt-3'>
                  <div className='flex'>
                    <div className='h-full p-4'>
                      <h3 className="text-ciel text-4xl font-extrabold lg:text-5xl font-display relative">
                          {t('Help-title')}
                      </h3>
                      <p className='text-md text-neutral-500  font-medium font-display pt-4'> {t('Help-subtitle')}</p>
                    </div>
                  </div>
               </div>
            </div>
          

           <div className='grid grid-cols-3 min-h-[400px] gap-y-4 lg:gap-x-1 justify-items-center'>
              {missionDetails.map((item, index) => (
                  <div key={index} className='group max-h-[300px] hover:max-h-[550px] max-w-[350px] shadow-2xl bg-white col-span-3 lg:col-span-1 rounded-lg transition-height-width duration-600 hover:shadow-2xl relative p-10'>
                      {item.icon}
                      <h3 className="text-lg text-black font-semibold mb-2">{item.title}</h3>
                      <p className='text-black text-md mb-10 leading-6 font-display tracking-wide'>{item.intro}</p>
                      <ul className='hidden group-hover:block text-black transition-all duration-600 ease-in-out'>
                          {item.description.map((desc, descIndex) => (
                              <li key={descIndex} className="text-md before:absolute leading-6 tracking-wide text-black before:pl-6 before:left-0 before:content-['▹'] before:text-jaune pb-2 ">{desc}</li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>

        </div>
          
      </section>
   
  )
}

export default MissionAndObjective
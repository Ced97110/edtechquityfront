'use client'

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import clsx from 'clsx';

const Tab = () => {

  const [activeTabId, setActiveTabId] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const { t } = useTranslation();

  const eventFeatures = [
    {
      title: t('event-feat-1-title'),
      subtitle: t('event-feat-1-subtitle'),
      src: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/inspirational-woman',
      paragraphs: [t('event-feat-1-para')],
    },
    {
      title: t('event-feat-5-title'),
      subtitle: t('event-feat-5-subtitle'),
      src: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/latina-diploma',
      paragraphs: [t('event-feat-5-para')],
    },
    {
      title: t('event-feat-2-title'),
      subtitle: t('event-feat-2-subtitle'),
      src: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/networking-fingers',
      paragraphs: [t('event-feat-2-para')],
    },
    {
      title: t('event-feat-3-title'),
      subtitle: t('event-feat-3-subtitle'),
      src: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/workshop',
      paragraphs: [t('event-feat-3-para')],
    },
    {
      title: t('event-feat-4-title'),
      subtitle: t('event-feat-4-subtitle'),
      src: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/frida-carlo',
      paragraphs: [t('event-feat-4-para')],
    },
    {
      title: t('event-feat-6-title'),
      subtitle: t('event-feat-6-subtitle'),
      src: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/sacramento-2024/supportive-parent',
      paragraphs: [t('event-feat-6-para')],
    },
  ];

   const transformStyle = isMobile
    ? { transform: `translateX(${activeTabId * 160}px)` }
    : { transform: `translateY(${activeTabId * 70}px)` };


  return (
    <>
      <div className="grid md:grid-cols-3 max-w-[1000px] mx-auto gap-4">
        <div role="tablist" aria-label="mission tabs" className="col-span-2  relative  md:col-span-1 z-{3}  overflow-y-auto flex md:flex-col overflow-x-auto">
          {eventFeatures.map(({ title }, i) => (
            <button
              key={i}
              className={clsx(
                "flex items-center md:text-lg justify-center border-b-[2px] min-w-[160px] w-full md:border-b-0  md:border-l-[2px] border-lightnavy lg:max-h-[200px] text-neutral-200 h-[70px] p-2 lg:justify-start hover:bg-pink-800 transition-all duration-600 ease-in-out text-center bg-opacity-90 backdrop-blur-md ",
                {
                  'bg-transparent focus:bg-pink-800 focus-visible:bg-pink-800': activeTabId === i,
                  ' border-jaune ': activeTabId === i,
        
                }
              )}
              onClick={() => setActiveTabId(i)}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
            >
              <span className={clsx(
                'text-center font-display',
                {
                  "text-jaune" : activeTabId === i,
                }
              )}>{title}</span>
            </button>
          ))}
         <div 
            className="absolute w-[160px] h-[2px] bottom-0 md:top-0 left-0 z-{20} md:w-[2px] md:h-[70px] rounded-lg bg-jaune transition-all duration-600 ease-in-out delay-75"
            style={transformStyle}
            />

        </div>
        <div className="relative w-full col-span-2 md:col-span-2  shadow-2xl">
          {eventFeatures.map(({ paragraphs, src, subtitle }, i) => (
            <div
              id={`panel-${i}`}
              key={i}
              className={`${activeTabId === i ? 'block' : 'hidden'} md:w-full transition-transform delay-100 ease-in-out duration-600`}
            >
              <div className='max-h-[650px] lg:max-h-[800px] h-[420px] relative w-full'>
                <Image src={src} className={clsx('inset-0 brightness-[0.3] transition-all duration-300 ease-in-out aspect-square', {'absolute rounded-lg': activeTabId === i, 'hidden': activeTabId !== i})} fill={true} style={{ objectFit: 'cover' }} alt='latinas'/>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-fuch to-transparent opacity-90 rounded-lg">
                {paragraphs.map((item, index) => (
                   <div className='p-10 text-white z-10 leading-6 font-display tracking-wide' key={index}>
                     {item}
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tab;

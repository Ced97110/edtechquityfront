'use client'


import { AcademicCapIcon, GlobeAltIcon,BookOpenIcon} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import React, { useState, useEffect, useRef } from 'react';





const Jobs = () => {



  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const [isActive, setIsActive] = useState(activeTabId)




    
const missionDetails = [
    {
        title: 'Bridge the Digital Divide',
        description: [
        'Create an equitable educational landscape.',
        'Seamlessly connect non-profits, schools, and workplaces.',
        'Ensure every student has access to tools and resources for success.',
        ],
        icon: <GlobeAltIcon className="h-10 w-10 text-white mb-2" />
    },
    {
        title: 'Curate and Distribute Content',
        description: [
        'Recognize regional workforce shortages.',
        'Actively curate and distribute content tailored to address these gaps.',
        'Align education with the needs of the workforce.',
        'Empower students with knowledge and skills for success.',
        ],
        icon: <BookOpenIcon className="h-10 w-10 text-white mb-2" />
    },
    {
        title: 'Micro Scholarships',
        description: [
        'Address financial barriers faced by students.',
        'Provide immediate micro scholarships.',
        'Strategically designed to increase access to higher education.',
        'Enable students to pursue academic and professional aspirations.',
        ],
        icon: <AcademicCapIcon className="h-10 w-10 text-white mb-2" />
    },
];




  return (
          <section className="bg-blue-700 lg:px-[320px] px-[50px] max-h-screen py-[100px] mx-auto">

                <div className='mb-4 lg:mb-14 pb-6'>
                   <h3 className="text-white text-2xl lg:text-4xl font-normal font-display relative">
                    Our Mission and Objectives
                   </h3>
                   <p className='font-display text-md text-white text-center pt-4'>Empowering Futures, Bridging Divides: Innovating Education with Technology</p>
                </div>

                  <div className="block md:max-h-screen md:flex lg:divide-x-[1px]">
                    <div role='tablist' aria-label='mission tabs' className="relative md:block z-{3} flex overflow-x-auto">
                        {missionDetails &&
                            missionDetails.map(({title}, i) => (
                            <button
                                key={i}
                                className={clsx(
                                "flex items-center md:text-lg justify-center lg:min-w-full min-w-[250px] md:w-full px-2 py-[15px] hover:bg-pink-600 focus:bg-pink-600 lg:justify-start lg:pl-2 transition-all duration-600 ease-in bg-opacity-90 backdrop-blur-md",
                                {
                                    'text-blue-950': activeTabId === i,
                                    'bg-pink-600 ': activeTabId === i,
                                }
                                )}
                                onClick={() => setActiveTabId(i)}
                                id={`tab-${i}`}
                                role="tab"
                                tabIndex={activeTabId === i ? 0 : -1}
                                aria-selected={activeTabId === i}
                                aria-controls={`panel-${i}`}
                            >
                                <span className='text-white text-start'>{title}</span>
                            </button>
                            ))}
                        </div>
                        <div className="relative w-full ml-5 md:ml-0">
                        {missionDetails &&
                            missionDetails.map(({description }, i) => (
                            <div
                                id={`panel-${i}`}
                                key={i}
                                className={`${
                                activeTabId === i ? 'block' : 'hidden'
                                } md:w-full md:ml-12 transition-transform delay-100 ease-in-out duration-500 `}
                                
                            >
                                <h3 className="mb-2 text-xxl font-medium">
                                <span className="company">
                                    
                                </span>
                                </h3>
                            
                                <ul className="p-0 m-0 list-none">
                                {description && description.map((item,i) => (
                                    <li key={i} className="md:text-lg relative pl-[30px] mb-[10px] text-white before:absolute before:left-0 before:content-['▹'] before:text-pink-600 ">
                                    {item}
                                </li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                   </div>
                
         </section>

  );
};

export default Jobs;

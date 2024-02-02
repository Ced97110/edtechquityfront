'use client'

import { CarouselInterface } from 'flowbite/lib/esm/components/carousel/interface';
import { CarouselItem, CarouselOptions } from 'flowbite/lib/esm/components/carousel/types';
import { InstanceOptions } from 'flowbite/lib/esm/dom/types';
import { Carousel } from 'flowbite';
import React, { useEffect, useRef } from 'react'

import Link from 'next/link';



function CarouselHero() {
    
        const carouselRef = useRef(null);
        const prevButtonRef = useRef(null);
        const nextButtonRef = useRef(null);

       useEffect(() => {

               
            const carousellElement = carouselRef.current;
            const $previousButton = prevButtonRef.current;
            const $nexttButton = nextButtonRef.current;

            const carouselElement: HTMLElement | null = document.getElementById('carousel-example');

            const items: CarouselItem[] = [
                {
                    position: 0,
                    el: document.getElementById('carousel-item-1')!,
                },
               
            ];

            // object options with default values
            const options: CarouselOptions = {
                defaultPosition: 0,
                interval: 30000,

                indicators: {
                    activeClasses: 'bg-white dark:bg-gray-800',
                    inactiveClasses:
                        'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                    items: [
                        {
                            position: 0,
                            el: document.getElementById('carousel-indicator-1')!,
                        },
                           {
                            position: 1,
                            el: document.getElementById('carousel-indicator-2')!,
                        },
                    ],
                },

                // callback functions
                onNext: () => {
                    console.log('next slider item is shown');
                },
                onPrev: () => {
                    console.log('previous slider item is shown');
                },
                onChange: () => {
                    console.log('new slider item has been shown');
                },
            };

            // instance options object
            const instanceOptions: InstanceOptions = {
            id: 'carousel-example',
            override: true
            };

            const carousel: CarouselInterface = new Carousel(carouselElement, items, options, instanceOptions);

            carousel.cycle();

            // set event listeners for prev and next buttons
            const $prevButton = document.getElementById('data-carousel-prev');
            const $nextButton = document.getElementById('data-carousel-next');

            $prevButton?.addEventListener('click', () => {
                carousel.prev();
            });

            $nextButton?.addEventListener('click', () => {
                carousel.next();
            });

           
            return () => {
                // Cleanup event listeners or any resources if needed
                $prevButton?.removeEventListener('click', carousel.prev);
                $nextButton?.removeEventListener('click', carousel.next);
            };

       },[])

       return (
    
            <div ref={carouselRef} id="carousel-example" className="relative w-full">
            
                <div className="relative z-0 h-screen max-h-[1000px] w-full transition-transform duration-700 ease-in-out">
                
                
                    <div id="carousel-item-1" className="hidden transition-transform duration-700 ease-linear">
                       
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center p-4 right-[10%] top-[280px] w-4/5 transition-all'>
                            <h2 className='font-display text-start md:text-6xl text-3xl font-normal text-white '>Young Lady Latina Empowerment Summit, +1</h2>
                            <h3 className='font-display text-lg md:text-3xl text-white mt-4'>Empowering the Next Generation of Latina</h3>
                            <h3 className='font-display text-lg md:text-3xl text-white mt-4'>Join us on Saturday, May 4, 2024, for a transformative experience.</h3>
                            <button className='text-center lg:mt-8 font-medium rounded-lg box px-4 py-2 mt-4 font-display inline-block bg-pink-600 hover:bg-pink-700 text-white transition duration-300'>
                                <Link href='/sacramento-2024'>Learn More</Link>
                            </button>
                        </div> 
                        
                    </div>

                   
                
            
                    
                </div>
            
                <div
                    className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse"
                >
                    <button
                        id="carousel-indicator-1"
                        type="button"
                        className="h-3 w-3 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        id="carousel-indicator-2"
                        type="button"
                        className="h-3 w-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                    ></button>
                </div>
            
                <button
                     ref={prevButtonRef}
                    id="data-carousel-prev"
                    type="button"
                    className="group absolute left-0 top-0 z-10 flex h-full  cursor-pointer items-center justify-center px-4 focus:outline-none"
                >
                    <span
                        className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
                    >
                        <svg
                            className="h-2 w-2 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button
                    ref={nextButtonRef}
                    id="data-carousel-next"
                    type="button"
                    className="group absolute right-0 top-0 z-10  flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                >
                    <span
                        className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
                    >
                        <svg
                            className="h-2 w-2 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>

  )
}

export default CarouselHero;
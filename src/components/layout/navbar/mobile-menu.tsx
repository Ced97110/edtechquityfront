'use client'

import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link';
import clsx from 'clsx';
import LanguageChanger from '@components/utils/LanguageChanger';



interface MobileMenuProps {
  active?: string;
}

function MobileMenu ({active = ''}: MobileMenuProps) {

   const navLinks = [
    {
      name: 'Summit 2024',
      url: '/summit-2024',
    },
    {
      name: 'About us',
      url: '/about-us',
    },
    {
      name: 'Sponsorship',
      url: '/sponsorship',
      sprite:'button'
    },
    
  ]



    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false)
    

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[isOpen])

    
   const HamburgerClasses = clsx(
    'flex h-11 w-11 items-center justify-center rounded-lg border border-white text-white transition-colors lg:hidden',
    {
      'bg-white': active === 'active', // Apply 'bg-white' when active === 'active'
    }
  );


  return (
    <>
        <button
            onClick={openMobileMenu}
            aria-label="Open mobile menu"
            className={HamburgerClasses}
        >
          <Bars3Icon className="h-4"/>
        </button>
        
        <Transition show={isOpen}>
          <Dialog onClose={closeMobileMenu} className="relative z-50" >
            <Transition.Child
             as={Fragment}
             enter='transiion-all ease-in-out duration-300'
             enterFrom="opacity-0 backdrop-blur-none"
             enterTo="opacity-100 backdrop-blur-[.5px]"
             leave="transition-all ease-in-out duration-200"
             leaveFrom="opacity-100 backdrop-blur-[.5px]"
             leaveTo="opacity-0 backdrop-blur-none"
             >
               <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            </Transition.Child>
            <Transition.Child
                as={Fragment}
                enter="transition-all ease-in-out duration-300"
                enterFrom="translate-x-[100%]"
                enterTo="translate-x-0"
                leave="transition-all ease-in-out duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[100%]"
            >
             <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6">
               <div className='p-4'>
                 <button
                   className='mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-ciel text-ciel  transition-colors'
                   onClick={closeMobileMenu}
                   aria-label="Close mobile menu"

                 >
                   <XMarkIcon className='h-6'/>
                 </button>
                   {navLinks.length ? (
                    <ul className="flex w-full flex-col  divide-y-2">
                      {navLinks.map((item, i) => (
                        <li
                          className="py-2 text-lg text-black transition-colors dark:text-white"
                          key={i}
                        >
                           {item.sprite === 'button' ? (
                      // Render a button or any other specific component for the "Sponsorship" link
                           <Link href={item.url}  onClick={closeMobileMenu}>
                              <button className='rounded-full px-4 py-2 font-display  bg-ciel text-white hover:text-pink-white'>{item.name}</button>
                            </Link>
                          ) : (
                            // Render a regular link for other links
                            <Link href={item.url} onClick={closeMobileMenu} passHref>
                              <p className='p-2  hover:uderline focus:text-white text-ciel'> {item.name}</p>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
               </div>
               <div>
                  <LanguageChanger/>
                </div>
             </Dialog.Panel>   

          </Transition.Child>

          </Dialog>
        </Transition>

    </>
   
  )
}

export default MobileMenu


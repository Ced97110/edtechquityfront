'use client'

import React from 'react'
import Link from 'next/link'
import { navLinks } from '@components/components/layout/navbar/menu';
import MobileMenu from '@components/components/layout/navbar/mobile-menu';
import Image from 'next/image';




function NavbarAbout() {

  return ( 
       <div className='absolute p-4 h-[90px] w-full z-40 flex items-center justify-between bg-transparent'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex w-full md:w-1/2'>
             <Link href='/' className="mr-2 flex w-full font-extrabold text-white items-center text-2xl font-display justify-start md:w-auto lg:mr-6">
               <Image src='/logo.png' priority={true} className='aspect-square' width={53} height={53} alt='logo' />
                EdTechQuity
             </Link>
          </div>
           <div className='block flex-none md:hidden'>
             <MobileMenu  />
          </div>
          <div className='sm:flex items-center hidden'>
           
              <ol className='p-0 m-0 list-none flex justify-between items-center'>
                {navLinks && navLinks.map(({ url, name, sprite }, i) => (
                  <li
                    key={i}
                    className={`m-0 mr-2 relative underline-offset-4 hover:underline ${
                      i !== navLinks.length - 1 ? 'border-0 pr-2 border-white' : ''
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {sprite === 'button' ? (
                      // Render a button or any other specific component for the "Sponsorship" link
                      <button className='rounded-full px-4 py-2 font-display  bg-pink-600 text-white hover:text-pink-white '>
                        <Link href={url}>{name}</Link>
                      </button>
                    ) : (
                      // Render a regular link for other links
                      <Link href={url} passHref>
                        <p className='p-2 text-white hover:underline'>{name}</p>
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
          </div>
        </div>
    </div>
  )
}

export default NavbarAbout;
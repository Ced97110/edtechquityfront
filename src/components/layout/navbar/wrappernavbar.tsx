'use client'

import useScrollDirection from '@components/hooks/useScrollDirection';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import './style.css'
import { usePathname, useRouter } from 'next/navigation';
import LanguageChanger from '@components/utils/LanguageChanger';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

 function WrapperNavbar(){ 



   const [scrollToTop, setScrollToTop] = useState(true);
   const scrollDirection = useScrollDirection('down');



   const router = useRouter();
  const pathname = usePathname()

  const isNotLandingPage = pathname !== '/'

   const { t, i18n } = useTranslation();

   const slugify = text => text.toLowerCase().replace(/\s+/g, '-');
   const urlSlug = slugify(t('about-us-url'));

   const navLinks = [
    {
      name: t('home'),
      url:'/',
    },
    {
      name: t('summit-2024'),
      url: `/summit-2024`,
    },
    {
      name: t('about-us'),
      url: '/about-us'
    },
     {
      name: t('faq'),
      url: '/faq',
    },
     {
      name: t('sponsorship'),
      url: '/sponsorship',
    },
    {
      name: t('donate'),
      url:'https://www.paypal.com/donate/?hosted_button_id=5Q5WHKYGMPRW2',
      sprite:'button'
    },
     {
      name: t('contact'),
      url:'https://www.paypal.com/donate/?hosted_button_id=5Q5WHKYGMPRW2',
      sprite:'button-contact'
    },
  ]



    
    const headerClasses = clsx(
    'fixed top-0 z-40 p-0 flex bg-ciel items-center text-white p-4 w-full h-[90px] transition-transform duration-500 ease-in-out bg-opacity-90 pointer-events-auto user-select-auto',
    {
        'bg-transparent text-white': scrollToTop && (pathname === '/es/summit-2024'  || pathname === '/summit-2024' || pathname === '/sponsorship' || pathname === '/es/sponsorship'|| pathname === '/es/application' || pathname === '/application' || pathname === '/es/thank-you' || pathname === '/thank-you' ),
        'bg-ciel text-white': scrollToTop && (pathname === '/' || pathname === '/es'),
        'bg-fuch text-white' : !scrollToTop && (pathname === '/es/summit-2024' || pathname === '/summit-2024' ||  pathname === '/es/application' ||   pathname === '/application' || pathname === '/es/thank-you' ||   pathname === '/thank-you'),
        'bg-ciel': !scrollToTop,
        '-translate-y-[90px]': !scrollToTop && scrollDirection === 'down'
    }
);



    const handleScroll = () => {
      setScrollToTop(window.scrollY < 50);
  };

    useEffect(() => {
   
       window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    
  },[pathname])



  return (

        <nav  className={headerClasses}>
             <div className='relative w-full z-30 flex items-center justify-evenly'>

              <div className='flex w-full items-center justify-between'>

                <div className='flex w-full md:w-[160px]'>
                  <Link href='/' className="mr-2 flex w-full h-full font-extrabold text-inherit items-center text-2xl font-display justify-start md:w-auto lg:mr-6">
                    <Image src='/edtech.png' priority={true}  className='object-cover' width={153} height={153} alt='logo' />
                    </Link>
                </div>

                <div className='block flex-none lg:hidden'>
                 <MobileMenu/>
                </div>
                 
               
                <div className='sm:hidden items-center hidden lg:flex'>

                    <ol className='p-0 m-0 list-none flex justify-between items-center'>
                      {navLinks && navLinks.map(({ url, name, sprite }, i) => (
                        <li
                          key={i}
                          className={`m-0 mr-2 relative underline-offset-4 text-inherit hover:underline ${
                            i !== navLinks.length - 1 ? 'border-0 pr-2 border-inherit' : ''
                          }`}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        >
                          {sprite === 'button' ? (
                            <Link href={url} rel="noopener noreferrer">
                              <button className='border-jaune border-2 border-solid rounded-full px-4 py-2 text-white'>{name}</button>
                            </Link>
                          ) : sprite === 'button-contact' ? (
                            <Link href={url} passHref>
                              <button className='bg-jaune rounded-full px-4 py-2 text-white'>{name}</button>
                            </Link>
                          ) : (
                            <Link href={url} passHref>
                              <p className='p-2'>{name}</p>
                            </Link>
                          )}
                          
                        </li>
                      ))}
                    </ol>

                </div>

                <div className='hidden items-center md:hidden lg:flex'>
                 
                
                  <div className='ml-4'>
                    <LanguageChanger/>
                  </div> 
                </div>
                
               
              </div>
          </div>
        </nav>

  )
}

export default WrapperNavbar;
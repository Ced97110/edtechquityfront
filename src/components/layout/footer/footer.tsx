'use client'

import Link from 'next/link';



import { Suspense, useEffect } from 'react';
import Image from 'next/image';
import FooterMenu from './footer-menu';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const { COMPANY_NAME,  SITE_NAME } = process.env;

interface footerProps {
  active?:string;
}

export default function Footer({active}:footerProps) {

  const pathname = usePathname()


  useEffect(() => {
    
  },[pathname])



  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const copyrightDate = `2024-${nextYear}`   

  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';

  const copyrightName =  COMPANY_NAME ||  SITE_NAME || '';

  return (
    <div className={clsx({
      'bg-ciel': pathname !== '/summit-2024' && pathname !== '/es/summit-2024' && pathname !== '/es/application' && pathname !== '/application' && pathname !== '/thank-you'  && pathname !== '/es/thank-you',
      'bg-fuch': pathname === '/summit-2024' || pathname === '/es/summit-2024' || pathname === '/es/application' ||  pathname === '/application' || pathname === '/thank-you'  || pathname === '/es/thank-you',
     
     })}>
      <div className="mx-auto relative flex w-full max-w-7xl flex-col gap-6  px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center text-black dark:text-white md:pt-1" href="/">
            <Image src='/edtech.png' className='object-cover' width={255} height={255} alt='logo' />
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu />
        </Suspense>
       
      </div>
      <div className="border-t bg-gray-100 border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>EdTechQuity</p>
          <p className="md:ml-auto">
            <a href="https://edtechquity.net" className="text-black dark:text-white"></a>
          </p>
        </div>
      </div>
    </div>
  );
}

'use client'

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '../navbar/menu';
import { useTranslation } from 'react-i18next';

export const FooterMenuItem = ({ item }: { item:any }) => {
  const pathname = usePathname();

  const [active, setActive] = useState(pathname === item.url);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.url]);

  return (
    <li className='block p-1 text-lg underline-offset-4 hover:text-blue-900 hover:underline'>
       {item.sprite === 'button' ? (
          <Link href={item.url}>
              <button className='rounded-full px-4 py-2 font-display  border-2 border-jaune text-white hover:text-white  shadow-md hover:shadow-xl font-semibold text-lg cursor-pointer  transition duration-300 '>{item.name}</button>
            </Link>
              ) : ( 
        <Link href={item.url} passHref>
            <p className='p-2 text-white hover:underline md:inline-block md:text-sm'>{item.name}</p>
        </Link>
      )}
   </li>
  );
};
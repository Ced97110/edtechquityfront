'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const FooterMenuItem = ({ item }: { item: any }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.url);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.url]);

  return (
    <li className='m-0 mr-2 relative underline-offset-4 text-inherit hover:underline'>
      {item.sprite === 'button' ? (
        <Link href={item.url} rel="noopener noreferrer">
          <button className='border-jaune border-[1px] border-solid rounded-full px-4 py-2 text-white'>{item.name}</button>
        </Link>
      ) : item.sprite === 'button-contact' ? (
        <Link href={item.url} passHref>
          <button className='bg-jaune rounded-full px-4 py-2 text-white'>{item.name}</button>
        </Link>
      ) : (
        <Link href={item.url} passHref>
          <p className='p-2'>{item.name}</p>
        </Link>
      )}
    </li>
  );
};

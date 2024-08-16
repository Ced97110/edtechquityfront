'use client'

import React from "react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";
import { BsTiktok } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { MaxWidthWrapper } from "@components/components/maxwidth";
import NavLogo from "../logo";
import clsx from "clsx";
import { usePathname } from "next/navigation";


export const Footer = () => {

  const pathname = usePathname()
  return (
    <footer className={clsx('relative  overflow-hidden py-12' ,{
      'bg-ciel': pathname !== '/summit-2024' && pathname !== '/es/summit-2024' && pathname !== '/es/application' && pathname !== '/application' && pathname !== '/thank-you'  && pathname !== '/es/thank-you',
      'bg-fuch': pathname === '/summit-2024' || pathname === '/es/summit-2024' || pathname === '/es/application' ||  pathname === '/application' || pathname === '/thank-you'  || pathname === '/es/thank-you',
     })} >

      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title="Quick Links"
          links={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Summit 2025",
              href: "/summit-2025",
            },
            {
              title: "About Us",
              href: "/about-us",
            },
            {
              title: "Contact-Us",
              href: "mailto:medranom@edtechquity.net, banuelosd@edtechquity.net",
              button: 'button'
            },
          ]}
        />
     
       
        <GenericColumn
          title="Socials"
          links={[
            {
              title: "TikTok",
              href: "/https://www.tiktok.com/",
              Icon: BsTiktok,
            },
            {
              title: "Instagram",
              href: "https://www.instagram.com/",
              Icon: SiInstagram,
            },
            {
              title: "Youtube",
              href: "https://www.youtube.com/",
              Icon: SiYoutube,
            },
            {
              title: "Linkedin",
              href: "https://www.linkedin.com/",
              Icon: LuLinkedin,
            },
          ]}
          
        />
      </MaxWidthWrapper>
   
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <NavLogo height={200} width={299}  />
      <span className="mt-3 inline-block text-xs text-zinc-400">
        © Edtechquity - All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({
  title,
  links,
  classname,
  button
}: {
  title: string;
  links: { title: string; href: string; Icon?: IconType; button?:string; }[];
  classname?: string
  button?: boolean

}) => {
  return (
  
    <div className={`col-span-6 space-y-2 text-sm md:col-span-2 ${classname}`}>
      <span className="block text-zinc-50 font-bold">{title}</span>
      {links.map((l,i) => (
              l.button === 'button' ? ( 
                   <div key={l.title} className="flex ">
                      <a href='mailto:medranom@edtechquity.net, banuelosd@edtechquity.net' target="_blank" rel="noopener noreferrer" className="bg-jaune rounded-full px-4 py-2   flex items-center gap-1.5 text-white transition-colors hover:text-zinc-200 hover:underline">{l.title}</a>
                    </div> ) : (
              <Link
                key={l.title}
                href={l.href}
                className="flex items-center gap-1.5 text-white transition-colors hover:text-zinc-200 hover:underline"
              >
                {l.Icon && <l.Icon />}
                {l.title}
              </Link>
            )))}
    </div>
  );
};

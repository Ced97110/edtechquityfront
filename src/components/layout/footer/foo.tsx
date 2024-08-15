import React from "react";


import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";
import { BsTiktok } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { MaxWidthWrapper } from "@components/components/maxwidth";
import NavLogo from "../logo";


export const Footer = () => {
  return (
    <footer className="relative bg-ciel overflow-hidden py-12">
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
          classname=""
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
  classname
}: {
  title: string;
  links: { title: string; href: string; Icon?: IconType }[];
  classname?: string

}) => {
  return (
    <div className={`col-span-6 space-y-2 text-sm md:col-span-2 ${classname}`}>
      <span className="block text-zinc-50">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};

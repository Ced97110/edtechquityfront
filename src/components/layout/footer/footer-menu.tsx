import { useTranslation } from "react-i18next";
import { FooterMenuItem } from "./foot";
import SocialMediaIcons from "@components/components/side/social";
import { SocialMedia } from "@components/components/side/socialmedia";
import Icon from "@components/components/icons/icon";


export default function FooterMenu() {
 
  
   const { t,i18n } = useTranslation();

   const slugify = text => text.toLowerCase().replace(/\s+/g, '-');
   const urlSlug = slugify(t('about-us-url'));

   const navLinks = [
    {
      name: t('home'),
      url:'/',
    },
    {
      name: t('summit-2024'),
      url: '/summit-2024',
    },
    {
      name: t('about-us'),
      url: '/about-us'
    },
    {
      name: t('sponsorship'),
      url: '/sponsorship',
      sprite:'button'
    },
    
  ]


  return (
    <nav className="flex w-full justify-between">
      <ul>
        {navLinks.map((item,i) => {
          return <FooterMenuItem key={i} item={item} />;
        })}
      </ul>
      <ul className='flex lg:hidden flex-col items-center mt-4 p-0 list-none'>
        {SocialMedia && SocialMedia.map(({url,name},i) => (
          <li key={i} className='mb-5'>
            <a href={url} target="_blank" rel="noreferrer" className="inline-block hover:translate-y-[-4px] text-decoration-none text-jaune relative transition-all  hover:text-white focus:text-white focus:outline-none focus: ring-white cursor-pointer">
              <Icon name={name}/>
            </a>
          </li> 
          ))} 
        </ul>
    </nav>
  );
}



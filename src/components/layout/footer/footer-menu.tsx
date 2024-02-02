import { useTranslation } from "react-i18next";
import { FooterMenuItem } from "./foot";


export default function FooterMenu() {
 
  
   const { t,i18n } = useTranslation();

   const slugify = text => text.toLowerCase().replace(/\s+/g, '-');
   const urlSlug = slugify(t('about-us-url'));

   const navLinks = [
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
    <nav>
      <ul>
        {navLinks.map((item,i) => {
          return <FooterMenuItem key={i} item={item} />;
        })}
      </ul>
    </nav>
  );
}




import React from 'react';
import { Packages } from './packages';
import type { Metadata } from 'next'


interface packages {
  name: string;
  price: string;
  passes: string;
  promotions: string[];
  bgColor: string;
}

interface SectionProps {
  title: string;
  key: keyof packages; // Use keyof to ensure we are indexing by a valid key

}


const i18nNamespaces = ['sponsorship'];



export const metadata: Metadata = {
  metadataBase: new URL('https://edtechquity.net'),
 title: 'Sponsorship',
  description: 'Support the empowerment of young Latina women in the Sacramento Valley by sponsoring the Young Lady Latina Empowerment Summit on May 4, 2024. This event promises a transformative experience with education, networking, and mentorship for young women aged 16-23. Your sponsorship will fund micro scholarships, aiding their educational and career aspirations. Join us in shaping a brighter future and elevating your brand with meaningful community engagement.',
  alternates: {
    canonical: '/sponsorship',
    languages: {
      'en': '/sponsorship',
      'es': '/es/sponsorship',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
};




const SponsorshipPage = async ({ params: { locale } }) => {

  
  return (

        <main className='min-h-screen  w-full max-w-[2000px]'>
           <Packages locale={locale}/>
        </main>
    
  )
};


export default SponsorshipPage;

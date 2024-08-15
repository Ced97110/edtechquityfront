import { Raleway } from 'next/font/google'
import '../globals.css'
import SocialMediaIcons from '@components/components/side/social';
import Header from '@components/components/layout/navbar/header';
import { i18nConfig } from '../../../i18nConfig';
import { dir } from 'i18next';
import { MainFoot } from '@components/components/layout/footer/mainfoot';
import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'
import HomePage from '@components/components/lenis-wrapper';
import LenisWraper from '@components/components/lenis-wrapper';





const raleway = Raleway({
  variable: "--display-font",
   subsets: ['latin']
});

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;


type MainPageLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string; // Assuming locale is a string, adjust the type as needed
  };
};


export const metadata: Metadata = {
  metadataBase: new URL('https://edtechquity.net'),
  description: "Discover how EdTechQuity supports Inspirame, a 501(c)(3) nonprofit, in its mission to empower low-income students to achieve higher education. Together, we aim to increase the graduation rates of Latinas from community college within 2 years, providing the tools and motivation to break the cycles of poverty",
  generator: 'Next.js',
  keywords: ['edtechquity', 'bridge the gap', 'poverty', 'inclusion', 'young latina', 'technology', 'scholarship', 'non-profit', 'san francisco', 'education', 'college'],
  referrer: 'origin-when-cross-origin',
  title: {
    default: 'Edtechquity',
    template: '%s | Edtechquity'
  },
  robots: {
    follow: true,
    index: true
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      es: '/es'
    }
  }
};
 

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function MainPageLayout({
  children,params:{locale},
}: MainPageLayoutProps) {

  const lang = locale === 'es' ? 'es' : 'en';
  
  return (
      
     
          <html lang={lang} dir={dir(locale)} className={`${raleway.variable} scroll-smooth font-antialiased font-smooth box-border w-full`}>
            <body className='m-0 w-full min-h-screen overflow-x-hidden font-display leading-5 mx-auto antialiased'>
            <GoogleAnalytics gaId="G-J55WZHFZ3C" />
                <div className='min-h-screen grid grid-cols-1 grid-rows-[1fr,auto]'>
                  <div className='flex relative flex-col min-h-screen'>
                    <Header locale={locale}/>
                    <LenisWraper>
                    <SocialMediaIcons/>
                    {children}
                    </LenisWraper>
                    <MainFoot locale={locale}  active='active'/>
                    </div>
                  </div>
              </body>
           </html>
        
      
      
  )
}

 
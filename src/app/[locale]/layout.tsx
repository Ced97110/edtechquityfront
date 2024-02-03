import { Raleway } from 'next/font/google'
import '../globals.css'
import SocialMediaIcons from '@components/components/side/social';
import Header from '@components/components/layout/navbar/header';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { i18nConfig } from '../../../i18nConfig';
import { dir } from 'i18next';
import { MainFoot } from '@components/components/layout/footer/mainfoot';
import { ensureStartsWith } from '@components/utils/util';



const raleway = Raleway({
  variable: "--display-font",
   subsets: ['latin']
});


const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME, ORGANISATION_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;


type MainPageLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string; // Assuming locale is a string, adjust the type as needed
  };
};


export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: ORGANISATION_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};


export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function MainPageLayout({
  children,params:{locale},
}: MainPageLayoutProps) {
  
  return (
    
        <html lang={locale} dir={dir(locale)}className={`${raleway.variable} scroll-smooth font-antialiased font-smooth box-border w-full`}>
          <body className='m-0 w-full min-h-screen overflow-x-hidden font-display leading-5 mx-auto antialiased'>
              <div className='min-h-screen grid grid-cols-1 grid-rows-[1fr,auto]'>
                <div className='flex flex-col min-h-screen'>
                  <Header locale={locale}/>
                  <SocialMediaIcons/>
                  {children}
                  <MainFoot locale={locale}  active='active'/>
                  </div>
              </div>
          </body>
        </html>
      
  )
}

 
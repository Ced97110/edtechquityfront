import { Raleway } from 'next/font/google'
import '../globals.css'
import SocialMediaIcons from '@components/components/side/social';
import Header from '@components/components/layout/navbar/header';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { dir } from 'i18next';
import { MainFoot } from '@components/components/layout/footer/mainfoot';
import { ClerkProvider } from '@clerk/nextjs'



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


export const metadata = {
  title: {
    default:'Edtechquity!',
    template: `%s | Edtechquity`
  },
  robots: {
    follow: true,
    index: true
  },
};
 


export default function DashboardLayout({
  children,params:{locale},
}: MainPageLayoutProps) {
  
  return (
      
        
          <html lang={locale} dir={dir(locale)}className={`${raleway.variable} scroll-smooth font-antialiased font-smooth box-border w-full`}>
            <div className='m-0 w-full min-h-screen overflow-x-hidden font-display leading-5 mx-auto antialiased'>
                <div className='min-h-screen grid grid-cols-1 grid-rows-[1fr,auto]'>
                  <div className='flex relative flex-col min-h-screen'>
                     {children}
                    </div>
                  </div>
              </div>
           </html>
          
  )
}

 
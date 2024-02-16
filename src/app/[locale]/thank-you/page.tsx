import initTranslations from "@components/app/i18n";
import Link from "next/link";


export default async function ThankYouPage({ params: { locale } }) {
    
     const { t,i18n } = await initTranslations(locale, ['application-form']);

  return (
      <div className="min-h-screen p-8 bg-fuch flex flex-col justify-center items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl text-white text-center font-display font-extrabold">
             {t('thank-you-page-title')}
          </h2>
          <p className="text-white mt-6 text-lg text-center">
             {t('thank-you-page-para')}
          </p>
           <p className="text-white mt-6 text-lg text-center">{t('thank-you-page-last')}</p>
           <div className="flex lg:hidden items-center justify-center mt-6">
             <button className='bg-transparent border-jaune border-2 rounded-full px-4 py-2 text-white'>
                <Link href='/'>{t('button-thank-you')}</Link>
            </button>
           </div>
        </div> 
      </div>
  );
}

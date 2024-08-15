'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { i18nConfig } from '../../i18nConfig';


export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = e => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select
      className="appearance-none bg-transparent border-2 border-jaune rounded-lg  py-2 px-4 text-white leading-tight focus:outline-none focus:bg-white focus:border-jaune hover:border-jaune transition-colors duration-200 ease-in-out cursor-pointer"
      onChange={handleChange}
      value={currentLocale}
    >
      <option className="text-sm text-white" value="en" aria-label="USA Flag">
        <>
          🇺🇸
        </>
        En 
      </option>
      <option className="text-sm text-white" value="es" aria-label="Mexican Flag">
        <>
          🇲🇽
        </>
        Es
      </option>
    </select>
  );
}
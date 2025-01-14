'use client'

import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { useTranslation } from 'react-i18next';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

const Faq = () => {


  

  const { t } = useTranslation();

  const dataFaq = [
     {
      question: t('faq-q-3'),
      response: t('faq-r-3'),
    },
    {
      question: t('faq-q-1'),
      response: t('faq-r-1'),
    },
     {
      question: t('faq-q-2'),
      response: t('faq-r-2'),
    },
    
  ]




  const itemClasses = {
    base: "p-4 w-full ",
    title: "font-normal text-medium font-display",
    heading:'flex justify-between',
    trigger: "px-2 py-2 rounded-lg h-16 flex items-center justify-between ",
    indicator: "text-medium ",
    content: "text-small p-6 bg-neutral-100",
  };

  return (
    <section className="bg-white min-h-screen md:min-h-screen pt-[120px] pb-[90px] px-5">
      <div className="container mx-auto">
        <div className="mb-8">
            <div className="flex columns-1">
              <div>
                <h3 className="text-ciel text-start text-2xl lg:text-4xl font-bold font-display relative">
                  {t('faq-title')}
                </h3>
                <p className="font-display text-md text-neutral-400 pt-4">
                  {t('faq-subtitle')}
                </p>
              </div>
          </div>
        </div>
        </div>
        <div className="pt-16 flex justify-center md:px-16">
        <div className="p-2 w-full max-w-full border-2 border-neutral-200 rounded-lg shadow-2xl">
          {dataFaq.map(({ question, response }, i) => (
            <Disclosure key={i} > 
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full h-[90px] md:h-[70px] justify-between mb-2 items-center rounded-lg bg-ciel p-4 text-left text-md font-medium text-white hover:bg-ciel focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>{question}</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-white shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 leading-6 font-display tracking-wide text-sm text-black">
                    {i == 2 ? (
                      <>
                        {response} <Link className='text-ciel' href="/application">{t('faq-link')}. </Link> {t('faq-r-2-span')}
                      </>
                    ) : response}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;



'use client'

import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { useTranslation } from 'react-i18next';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/16/solid';

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

  console.log(dataFaq)


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
        <div className="pt-16 flex justify-center">
        <div className="p-2 w-full max-w-3xl border-2 border-neutral-200 rounded-lg">
          {dataFaq.map(({ question, response }, i) => (
            <Disclosure key={i} > 
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full h-[70px] justify-between mb-2 items-center rounded-lg bg-ciel px-4 py-2 text-left text-md font-medium text-white hover:bg-ciel focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>{question}</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 leading-6 font-display tracking-wide text-md text-black">
                    {i == 2 ? (
                      <>
                        {response} <a className='text-ciel' href="https://docs.google.com/forms/d/1xwNc8N-Lb8lGoP-JNDg_u-yfRyrizFD7P5CPHqaQ9Ck/viewform?ts=65bb3617&edit_requested=true" target="_blank" rel="noopener noreferrer" >here.</a>
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



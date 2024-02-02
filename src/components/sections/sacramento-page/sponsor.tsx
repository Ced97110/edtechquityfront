'use client'


import { urlPhoto } from '../../../../data/data-sponsorship/data-sponsorship'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import { defaultRevealOptions } from '@components/utils/config'
import ResponsiveImage from '../homePage/hero/responsive-image'
import { useTranslation } from 'react-i18next'

interface SponsorProps {
    colorText:string,
    title:string
}

const Sponsor = ({colorText,title}: SponsorProps ) => {

   const { t } = useTranslation();


  return (
    <section className='bg-white px-[50px] lg:px-36  py-[50px]'>
            <h2 className={`text-2xl lg:text-3xl font-extrabold text-center ${colorText} font-display`}>
              {title}
            </h2>
          <div className='flex flex-col mt-8  items-center justify-around lg:flex-row'>
            {urlPhoto && urlPhoto.map(({src,alt,url},i) => (
              <div key={i} className='flex justify-center items-center'>
                <a href={url} target="_blank" rel="noreferrer" className='pb-4' >
                  <ResponsiveImage src={src} height={170} width={170} alt={alt} priority={false}  />
                </a>
              </div>
            ))}
          </div>
      </section>

  )
}

export default Sponsor
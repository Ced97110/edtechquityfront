'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link';
import cld from '@components/utils/cloudinary';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { streamingProfile } from '@cloudinary/url-gen/actions/transcode';
import { useTranslation } from 'react-i18next';


const VideoHero = () => {

     
    const [isPlaying, setIsPlaying] = useState(false);
    const videoElement = useRef<HTMLVideoElement | null>(null);

     const { t } = useTranslation();
   

    const hello = cld.video("montage-edtechquity")

      .transcode(streamingProfile('auto')).toURL();

    const togglePlayPause = () => {
        const videoElementref = videoElement.current;
        if (videoElementref) {
            if (videoElementref.paused) {
                videoElementref.play();
                 setIsPlaying(true);
            } else {
                videoElementref.pause();
                 setIsPlaying(false);
            }
        }
    };
  
     const renderPlayPauseIcon = () => {
        
        return isPlaying
            ? <> <PauseIcon className="h-5 w-5 text-white" />  </>
            : <><PlayIcon className="h-5 w-5 text-white " /> </>
    };

  return (
    <>
       <div className="relative z-0 transition-transform duration-700 ease-in-out min-h-screen overflow-hidden "> 
          

              <div className='relative w-full h-full'>
                <video
                    src='https://res.cloudinary.com/dqr6k0yey/video/upload/f_auto:video,q_auto/montage-edtechquity'
                    autoPlay={true}
                    loop
                    muted
                    playsInline={true}
                    controls={false}
                    ref={videoElement}
                    className='absolute inset-0 brightness-[0.75]'
                    style={{width:'100%', height:'100vh',objectFit:'cover'}}
                />
            
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent  opacity-100"></div>

              <div className='absolute  flex flex-col justify-center p-4 b bottom-0 lg:left-24 lg:bottom-[10px] w-5/5  lg:w-4/5 transition-all md:mx-auto'>
            
                <h2 className='font-display text-start md:text-6xl text-4xl font-extrabold text-white'>{t('Hero-title')}</h2>
                <h3 className='font-display font-medium text-lg md:text-xl text-white mt-4'>{t('Hero-subtitle-1')}</h3>
                <h3 className='font-display font-medium text-lg md:text-xl text-white mt-4'>{t('Hero-subtitle-2')}</h3>
                <div className='flex justify-between w-full items-center mt-4'>
                  <div >
                    <button className='bg-transparent border-jaune border-2 rounded-full px-4 py-2 text-white'>
                      <Link href='/summit-2024'>{t('button-hero')}</Link>
                    </button>
                  </div>
                  <div>
                    <button 
                      className="bg-ciel px-4 py-2 rounded-full flex text-white"
                      onClick={togglePlayPause}
                  >
                      {renderPlayPauseIcon()}
                    </button>
                  </div>
                </div>
              </div> 
            
            </div>
        


    </>
  )

}

export default VideoHero
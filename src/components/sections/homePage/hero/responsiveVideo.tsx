'use client'

import React, { useRef,useCallback, MutableRefObject, useState, useEffect } from 'react';
import {AdvancedVideo} from '@cloudinary/react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import cld from '@components/utils/cloudinary';
import PlayPauseButton from './play-pause';



const ResponsiveVideo = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoElement = useRef<HTMLVideoElement | null>(null);


    const hello = cld.video("montage-edtechquity")
        .format('auto').quality('auto').toURL();

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
            ? <PauseIcon className="h-6 w-6 text-white"/>
            : <PlayIcon className="h-6 w-6 text-white"/>;
    };

    return (
        <div className='relative w-full h-full'>
            <video
                src={hello}
                autoPlay={true}
                loop
                muted
                playsInline={true}
                controls={false}
                ref={videoElement}
                className='absolute inset-0 brightness-[0.75]'
                style={{width:'100%', height:'100vh',objectFit:'cover'}}
            />
           <button 
                className="absolute top-14 bg-ciel m-4 z-50 px-4 py-2 rounded-full shadow-2xl"
                onClick={togglePlayPause}
            >
                {renderPlayPauseIcon()}
            </button>
        </div>
    );
};

export default ResponsiveVideo;

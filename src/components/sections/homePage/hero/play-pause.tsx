// PlayPauseButton.js
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import React from 'react';
// Import icons and other dependencies



const PlayPauseButton = ({ videoElement, togglePlayPause }:any) => {
    const renderPlayPauseIcon = () => {
        return videoElement.current && !videoElement.current.paused 
            ? <PauseIcon className="h-6 w-6 text-white" />
            : <PlayIcon className="h-6 w-6 text-white" />;
    };

    return (
        <button 
            className="absolute top-14 bg-ciel  m-4 z-50 px-4 py-2 rounded-full"
            onClick={togglePlayPause}
        >
            {renderPlayPauseIcon()}
        </button>
    );
};

export default PlayPauseButton;

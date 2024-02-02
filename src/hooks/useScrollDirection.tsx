'use client'

import React, { useEffect, useState } from 'react'

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';



const useScrollDirection = (initialDirection: string) => {
 
    const [scrollDir, setScrollDir] = useState(initialDirection)

    useEffect(() => {
        const threshold = 0
        let lastScrollY = window.scrollY
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY
             if (Math.abs(scrollY - lastScrollY) < threshold) {
                // We haven't exceeded the threshold
                ticking = false;
                return;
            }

            setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP );
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;

        };

        const onScroll = () => {

            if(!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        }

       window.addEventListener("scroll", onScroll) 

       return () => window.removeEventListener('scroll', onScroll);

    },[initialDirection]);


  return scrollDir;
};

export default useScrollDirection
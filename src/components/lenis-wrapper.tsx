'use client'

import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'



function LenisWraper({ children }) {


  useEffect( () => {
    const lenis = new Lenis({
      // Valeur entre 0 et 1
      // Valeur par défaut : 0,1
      // Plus la valeur est faible, plus le scroll sera fluide
      lerp: 0.04, 
      
      // Valeur par défaut : 1
      // Plus la valeur est haute, plus le défilement sera rapide 
      wheelMultiplier: 1, 
    });

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
      
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy();
    };
  }, [])
  

  return (
        <>
         {children}
        </>
     
  
  )
}

export default LenisWraper;
import React from 'react'
import { SocialMedia } from './socialmedia';
import Icon from '../icons/icon';
import Link from 'next/link';
import SocialMediaAside from './aside';



function SocialMediaIcons(){

  
  return (

        
            <SocialMediaAside active='active'>
                <ul className='flex flex-col items-center m-0 p-0 list-none'>
                  {SocialMedia && SocialMedia.map(({url,name},i) => (
                    <li key={i} className='mb-5'>
                      <a href={url} target="_blank" rel="noreferrer" className="inline-block hover:translate-y-[-4px] text-decoration-none text-jaune relative transition-all hover:text-white focus:text-white focus:outline-none focus: ring-white cursor-pointer">
                        <Icon name={name}/>
                      </a>
                    </li> 
                  ))} 
                </ul>
            </SocialMediaAside>
        
       
  );
};

export default SocialMediaIcons;
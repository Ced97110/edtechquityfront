import React from 'react';
import IconInstagram from './instagram';
import IconLinkedin from './linkedin';
import IconTwitter from './twitter';
import IconTikTok from './tiktok';


const Icon = ({ name }:any) => {
  switch (name) {
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    case 'TikTok':
      return <IconTikTok />;
  }
};



export default Icon;

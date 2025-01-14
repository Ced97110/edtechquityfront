import React from 'react';
import IconInstagram from './instagram';
import IconLinkedin from './linkedin';
import IconTikTok from './tiktok';


const Icon = ({ name }:any) => {
  switch (name) {
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'TikTok':
      return <IconTikTok />;
  }
};



export default Icon;

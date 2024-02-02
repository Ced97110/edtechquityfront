import Image from 'next/image';
import React from 'react';

// Define the props for the Card component
interface CardProps {
  imageSrc: string; // The source URL for the image
  title: string; // The title to be displayed
  description: string; // The description to be displayed
  altText: string; // Alt text for the image for accessibility
}

// Define the Card component with typed props
function Card ({ imageSrc, title, description, altText }: CardProps) {
  return (
    <div className='max-h-[550px] h-[300px] relative w-[250px] group rounded-xl cursor-pointer  transition-transform duration-300 ease-in-out'>
      <Image 
        className='absolute top-0 w-full h-full hover:scale-105 object-cover' 
        src={imageSrc} 
        layout='fill' 
        alt={altText}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 p-2 flex flex-col justify-end group-hover:justify-center transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-normal text-white text-center mb-2 font-display w-full">{title}</h3>
        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">{description}</p>
      </div>
      <div className="absolute bottom-2 left-2 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <p className="text-xs text-center w-full">Hover for details</p>
      </div>
    </div>
  );
};

export default Card;
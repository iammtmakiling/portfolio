import React from 'react';

const Work = () => {
  return (
    <div className="flex flex-col justify-center items-start w-[80%] h-auto">
        <div className="flex flex-row justify-between w-full">
            <p className='text-lg text-color font-bold'>
                Mayon Innovations Lab, Inc.
            </p>
            <p className='text-base text-color'>
                Remote
            </p>
        </div>
        <div className="flex flex-row justify-between w-full">
            <p className='text-base text-white italic font-thin'>
                Front End Developer Intern
            </p>
            <p className='text-base text-white font-thin'>
                July 2023 - November 2023
            </p>
        </div>
        <div className="flex flex-row justify-start w-full mt-3 pl-20 text-justify">
            <ul className='list-disc'>
                <li className="text-white text-sm font-base">Created and implemented responsive design principles for optimal user experiences, utilizing Figma for wireframing 
                and prototyping.</li>
            </ul>  
        </div>
    </div>
  );
};

export default Work;

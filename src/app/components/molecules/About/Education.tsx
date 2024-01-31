import React from 'react';
import Image from 'next/image'
const Education = () => {
  return (
    <div className="flex flex-row justify-center items-start w-[80%] h-auto">
        <div className='flex w-[30%] justify-center items-center'>
            <Image
              src="/assets/uplb.png"
              alt="portrait"
              width={200}
              height={200}
            />
        </div>
        <div className='flex flex-col w-[70%] justify-start items-center h-full'>
            <div className="flex flex-row justify-between w-full">
                <p className='text-lg text-color font-bold'>
                    University of the Philippines, Los Baños
                </p>
                <p className='text-base text-color'>
                    Los Baños, Laguna
                </p>
            </div>
            <div className="flex flex-row justify-between w-full">
                <p className='text-base text-white italic font-thin'>
                    Bachelor of Science in Computer Science
                </p>
                <p className='text-base text-white font-thin'>
                    2020 - Present
                </p>
            </div>
            <div className="flex flex-row justify-start w-full mt-3 pl-5 text-justify">
                <ul className='list-disc'>
                    <li className="text-white text-sm font-base">Current Cumulative GPA: 1.41</li>
                </ul>  
            </div>
        </div>
    </div>
  );
};

export default Education;

'use client'

import React from 'react';
import './main.scss';
import Image from 'next/image'

const Main = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full min-h-[80vh] lg:gap-5 xl:gap-0 pl-20 pr-20">
      <div className='flex w-full lg:w-[70%] xl:w-[65%] flex-col gap-3 w-full justify-center items-center text-white text-center h-full'>
        <p className='text-base font-base'>Hello I&#39;m</p>
        <p className='text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-color'>Michael Jay Makiling</p>
        <p className='text-lg font-thin'>Software Developer</p>
        <button className={`button-color font-bold text-white px-4 py-2 rounded-full focus:outline-none glow-button mt-5`}
         
        >Download CV</button>
      </div>
      <div className='lg:flex lg:[30%] xl:w-[35%] justify-start items-center  text-center h-full hidden'>
        <div className='w-[350px] h-[350px] rounded-full bg-white overflow-hidden relative'></div>
          {/* <Image
              src="/assets/self.png"
              alt="portrait"
              // sizes='100vw'
              width={350}
              height={350}
            /> */}
        </div>
    </div>
  );
};

export default Main;

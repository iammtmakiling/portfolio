import React from 'react';
import "./footer.scss";
const Footer = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-[90%] sm:w-[80%] pb-10 pt-10 z-50 footer-bg-color">
        <div className='flex flex-col text-center sm:text-left'>
          <p className='text-color text-xl font-bold'>Michael Jay Makiling</p>
          <p className='text-white text-sm font-thin'>09302733741</p>
          <p className='text-white text-sm font-thin'>mjaymakiling@gmail.com</p>
        </div>
        <div className='flex pt-5 sm:pt-0'>
          <p className='text-white text-sm font-thin'>Copyright 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

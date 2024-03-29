'use client'

import React from 'react';
import "./navbar.scss";
import { usePageState } from '../../states/pageStates';
const NavBar = () => {
  const { setPage, page } = usePageState();
  const pageState = (state : String) => {
    setPage(state); // Set the page to "about" when the div is clicked
  };
  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="w-screen flex justify-between items-center p-20 pt-5 pb-5 sticky top-0 z-50 bg-blur backdrop-blur-xl">
        <div className="flex items-center">
            <span className="text-3xl font-bold text-white"><a href="/" className='glowText'>M</a></span>
        </div>
        <div className="flex space-x-4">
            <div className="text-white flex items-center scroll-smooth">
              <p className='glowText' onClick={() => scrollToSection('main')}>Home</p>
            </div>
            <div className="text-white flex items-center">
              <p className='glowText' onClick={() => scrollToSection('about')}>About</p>
            </div>
            <div className="text-white flex items-center">
              <p className='glowText' onClick={() => scrollToSection('projects')}>Projects</p>
            </div>
            <div className={`button-color font-bold text-white px-4 py-2 rounded-full focus:outline-none glow-button`}
            >Contact</div>
        </div>
    </div>
  );
};

export default NavBar;

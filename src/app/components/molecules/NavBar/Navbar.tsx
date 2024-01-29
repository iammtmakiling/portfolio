'use client'

import React from 'react';
import "./navbar.scss";
import { usePageState } from '../../states/pageStates';
const NavBar = () => {
  const { setPage, page } = usePageState();
  const pageState = (state : String) => {
    setPage(state); // Set the page to "about" when the div is clicked
  };
  return (
    <div className="flex justify-between items-center p-20 pt-10">
        <div className="flex items-center">
            <span className="text-3xl font-bold text-white"><a href="/" className='glowText'>M</a></span>
        </div>
        <div className="flex space-x-4">
            <div className={`text-white flex items-center ${
              page === "home" ? "text-color" : ""
            }`
            }
            onClick={() => pageState("home")}
            ><p className='glowText'>Home</p></div>
            <div className={`text-white flex items-center ${
              page === "about" ? "text-color" : ""
            }`} 
            onClick={() => pageState("about")}
            ><p className='glowText'>About</p></div>
            <div className={`text-white flex items-center ${
              page === "projects" ? "text-color" : ""
            }`}
            onClick={() => pageState("projects")}
            ><p className='glowText'>Projects</p></div>
            <div className={`button-color font-bold text-white px-4 py-2 rounded-full focus:outline-none glow-button`}
            onClick={() => pageState("contact")}
            >Contact</div>
        </div>
    </div>
  );
};

export default NavBar;

'use client'

import React from 'react';
import "./buttonNav.scss";
import { usePageState } from '../../states/pageStates';
const ButtonNav = () => {
  const { setPage, page } = usePageState();
  const pageState = (state : String) => {
    setPage(state); // Set the page to "about" when the div is clicked
  };
  return (
    <div className="flex justify-center items-center w-screen pb-20 pt-10">
      <div className="flex">
        <div
          className={`w-3 h-3 bg-white rounded-full mx-2 glowCircle ${
            page === "home" ? "glowCircleActive" : ""
          }`}
          onClick={() => pageState("home")}
        ></div>
        <div
          className={`w-3 h-3 bg-white rounded-full mx-2 glowCircle ${
            page === "about" ? "glowCircleActive" : ""
          }`}
          onClick={() => pageState("about")}
        ></div>
        <div
          className={`w-3 h-3 bg-white rounded-full mx-2 glowCircle ${
            page === "projects" ? "glowCircleActive" : ""
          }`}
          onClick={() => pageState("projects")}
        ></div>
        <div
          className={`w-3 h-3 bg-white rounded-full mx-2 glowCircle ${
            page === "contact" ? "glowCircleActive" : ""
          }`}
          onClick={() => pageState("contact")}
        ></div>
      </div>
    </div>
  );
};


export default ButtonNav;

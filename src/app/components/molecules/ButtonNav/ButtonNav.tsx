import React from 'react';
import "./buttonNav.scss";
const ButtonNav = () => {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="flex">
        <div className="w-3 h-3 bg-white rounded-full mx-2 transition duration-300 transform shadow-yellow-lg glow"></div>
        <div className="w-3 h-3 bg-white rounded-full mx-2 transition duration-300 transform shadow-yellow-lg glow"></div>
        <div className="w-3 h-3 bg-white rounded-full mx-2 transition duration-300 transform shadow-yellow-lg glow"></div>
        <div className="w-3 h-3 bg-white rounded-full mx-2 transition duration-300 transform shadow-yellow-lg glow"></div>
      </div>
    </div>
  );
};

export default ButtonNav;

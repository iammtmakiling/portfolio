import React from 'react';
import "./navbar.scss";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-20 pt-10">
        <div className="flex items-center">
            <span className="text-3xl font-bold text-white">M</span>
        </div>
        <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 flex items-center">Home</a>
            <a href="#" className="text-white hover:text-gray-300 flex items-center">About</a>
            <a href="#" className="text-white hover:text-gray-300 flex items-center">Projects</a>
            <button className="button-color font-bold text-white px-4 py-2 rounded-full focus:outline-none">Contact</button>

        </div>
    </div>
  );
};

export default NavBar;

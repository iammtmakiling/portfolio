import React from 'react';
import './background.scss';
const Background = () => {
  return (
    <div className='relative'>
        <div className="faded-circle fixed block top-[40%] left-[48%] lg:top-[2%] lg:left-[80%] h-90 z-10 floating-1"/>
        <div className="faded-circle fixed block top-[-200px] left-[50px] h-100 z-10 floating-2"/>
        <div className="faded-circle fixed block top-[480px] left-[180px] h-100 z-10 floating-3"/>
    </div>
  );
};

export default Background;

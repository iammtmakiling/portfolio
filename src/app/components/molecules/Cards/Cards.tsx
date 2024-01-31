import React from 'react';
import './cards.scss';

interface CardsProps {
  title: string;
  subtitle: string;
  description: string;
}

const Cards: React.FC<CardsProps> = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border-2 border-yellow-500 w-[32%] min-h-[450px]">
      <div className='w-full min-h-[225px] bg-white rounded-t-lg'>
        
      </div>
      <div className='w-full h-[50%] flex flex-col justify-start items-start p-3'>
        <p className="text-white text-lg font-bold">{title}</p>
        <p className="text-white text-regular italic">{subtitle}</p>
        <p className="text-white text-regular font-thin mt-3">{description}</p>
        <a href="/" className={`mt-3 mb-3 button-color font-bold text-white px-4 py-2 rounded-full focus:outline-none glow-button`}
        >View Code</a>
      </div>
    </div>
  );
};

export default Cards;

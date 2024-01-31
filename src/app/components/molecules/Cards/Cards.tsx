import React from 'react';
import './cards.scss';
import Image from 'next/image'

interface CardsProps {
  title: string;
  subtitle: string;
  description: string;
  photo: string;
}

const Cards: React.FC<CardsProps> = ({ title, subtitle, description, photo }) => {
  return (
    <div className="flex flex-col items-center rounded-lg w-[660px] min-h-[450px] gap-5">
      <div className='w-full min-h-[300px] rounded-3xl overflow-hidden relative'>
        <Image
            src="/assets/pface.png"
            alt={title}
            sizes='100vw'
            fill
            objectFit='cover'
          />
      </div>
      <div className='w-full flex-grow flex min-h-[200px] flex-col border border-gray-100 rounded-xl justify-start items-start p-3'>
        <div className='flex flex-col flex-grow'>
          <p className="text-white text-lg font-bold">{title}</p>
          <p className="text-white text-base italic">{subtitle}</p>
          <p className="text-white text-sm font-thin mt-3">{description}</p>
        </div>
        <div className='flex flex-shrink-0 items-end'>
          <a href="/" className={`mt-3 mb-3 button-color font-bold text-white px-4 py-2 rounded-full focus:outline-none glow-button`}
          >View Code</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;

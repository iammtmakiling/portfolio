import React from 'react';
import Image from 'next/image'

interface EducationData {
    university: string;
    place: string;
    photo: string;
    degree: string;
    timeline: string;
    achievements: string[];
  }
  
const Education: React.FC<EducationData> = ({
    university,
    place,
    photo,
    degree,
    timeline,
    achievements,
  }) => {
  return (
    <div className="flex flex-row justify-center items-start w-[60%] h-auto">
        <div className='flex w-[30%] justify-center items-center'>
            <Image
              src={photo}
              alt={university}
              width={200}
              height={200}
            />
        </div>
        <div className='flex flex-col w-[70%] justify-start items-center h-full'>
            <div className="flex flex-row justify-between w-full">
                <p className='text-lg text-color font-bold'>
                    {university}
                </p>
                <p className='text-base text-color'>
                    {place}
                </p>
            </div>
            <div className="flex flex-row justify-between w-full">
                <p className='text-base text-white italic'>
                    {degree}
                </p>
                <p className='text-base text-white'>
                    {timeline}
                </p>
            </div>
            <div className="flex flex-row justify-start w-full mt-3 pl-5 text-justify font-thin">
                <ul className='list-disc'>
                    {achievements.map((achievement, index) => (
                    <li key={index} className="text-white text-base">
                        {achievement}
                    </li>
                    ))}
                </ul>  
            </div>
        </div>
    </div>
  );
};

export default Education;

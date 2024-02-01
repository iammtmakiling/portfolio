import React from 'react';

interface WorkData {
    company: string;
    place: string;
    job: string;
    timeline: string;
    achievements: string[];
  }
  
const Work: React.FC<WorkData> = ({
    company,
    place,
    job,
    timeline,
    achievements,
  }) => {
  return (
    <div className="flex flex-col justify-center items-start w-[60%] h-auto">
        <div className="flex flex-row justify-between w-full">
            <p className='text-lg text-color font-bold'>
                {company}
            </p>
            <p className='text-base text-color'>
                {place}
            </p>
        </div>
        <div className="flex flex-row justify-between w-full">
            <p className='text-base text-white italic'>
                {job}
            </p>
            <p className='text-base text-white'>
                {timeline}
            </p>
        </div>
        <div className="flex flex-row justify-start w-full mt-3 pl-20 text-justify font-thin">
            <ul className='list-disc'>
                {achievements.map((achievement, index) => (
                <li key={index} className="text-white text-base">
                    {achievement}
                </li>
                ))}
            </ul>  
        </div>
    </div>
  );
};

export default Work;

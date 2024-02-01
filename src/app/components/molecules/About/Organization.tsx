import React from 'react';
interface WorkData {
  organization: string;
  position: string;
  timeline: string;
  achievement: string;
}

const Organization: React.FC<WorkData> = ({
  organization,
  position,
  timeline,
  achievement,
}) => {
  return (
    <div className="flex flex-col justify-center items-start w-[60%] h-auto">
        <div className="flex flex-row justify-start w-full">
            <p className='text-lg text-color font-bold'>
                {organization}
            </p>
        </div>
        <div className="flex flex-row justify-between w-full">
            <p className='text-base text-white italic'>
                {position}
            </p>
            <p className='text-base text-white'>
                {timeline}
            </p>
        </div>
        <div className="flex flex-row justify-start w-full mt-3 text-justify">         
          <p className="text-white text-base font-thin">
              {achievement}
          </p>
        </div>
    </div>
  );
};

export default Organization;

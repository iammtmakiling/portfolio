import React from 'react';
import './about.scss';
import { Gradientline} from "../../atoms";
import { Education, Work, Organization} from "../../molecules";
import {create} from 'zustand';
import educationData from './educationData';
import organizationData from './organizationData';
import workData from './workData';
interface PageState {
    page : String
    setPage : (page: String) => void
}

export const usePageState = create <PageState>()((set) => ({
    page: "1",
    setPage: (page: String) => set({page})
}))
const About = () => {
  const { setPage, page } = usePageState();
  const pageState = (state : String) => {
    setPage(state); // Set the page to "about" when the div is clicked
  };

  
  let contentComponent;

  switch (page) {
    case '2':
      contentComponent = 
      <div className='flex flex-col gap-10 justify-start items-center flex-grow h-full w-screen'>
        {educationData.map((data, index) => (
          <div  className='flex justify-center w-screen' key={index}>
            <Education
              university={data.university}
              place={data.place}
              photo={data.photo}
              degree={data.degree}
              timeline={data.timeline}
              achievements={data.achievements}
            />
          </div>
        ))}
      </div>
      break;
    case '3':
      contentComponent = 
      <div className='flex flex-col gap-10 justify-start items-center flex-grow h-full w-screen'>
        {organizationData.map((data, index) => (
          <div className='flex justify-center w-screen'  key={index}>
            <Organization
              organization={data.organization}
              position={data.position}
              timeline={data.timeline}
              achievement={data.achievements}
            />
          </div>
        ))}
      </div>
      break;
    default:
      contentComponent = 
      <div className='flex flex-col gap-10 justify-start items-center flex-grow h-full w-screen'>
        {workData.map((data, index) => (
          <div className='flex justify-center w-screen' key={index}>
            <Work
              company={data.company}
              place={data.place}
              job={data.job}
              timeline={data.timeline}
              achievements={data.achievements}
            />
          </div>
        ))}
      </div>
      break;
  }


  return (
    <div className="flex flex-col justify-center gap-10 items-center w-screen h-full pb-20">
      <div className='flex flex-row justify-center items-center gap-10 h-[50px]'>
        <div className='flex flex-col gap-2 justify-start items-center h-full'>
          <p
            className={`text-white glowText text-lg font-base ${
              page === "1" ? "text-color font-base" : ""
            }`}
            onClick={() => pageState("1")}
          >
            Work Experience
          </p>
          {page === "1" && <Gradientline />}
        </div>

        <div className='flex flex-col gap-2 justify-start items-center h-full'>
          <p
            className={`text-white glowText text-lg font-base ${
              page === "2" ? "text-color font-base" : ""
            }`}
            onClick={() => pageState("2")}
          >
            Education
          </p>
          {page === "2" && <Gradientline />}
        </div>

        <div className='flex flex-col gap-2 justify-start items-center h-full'>
          <p
            className={`text-white glowText text-lg font-base ${
              page === "3" ? "text-color font-base" : ""
            }`}
            onClick={() => pageState("3")}
          >
            Leadership Experience
          </p>
          {page === "3" && <Gradientline />}
        </div>
      </div>
      {contentComponent}
    </div>
  );
};

export default About;

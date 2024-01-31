import React from 'react';
import './about.scss';
import { Gradientline} from "../../atoms";

import {create} from 'zustand';

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

  return (
    <div className="flex justify-center items-center w-screen h-full">
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
    </div>
  );
};

export default About;

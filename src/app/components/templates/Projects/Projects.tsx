'use client'

import React from 'react';
import './project.scss';
import { Cards, ButtonNav } from '../../molecules';
import {create} from 'zustand';
import listOfProjects from "./listOfProjects";
interface ProjectState {
  page: number;
  setPage: (page: number) => void;
}

export const useProjectState = create<ProjectState>()((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}));
const Project = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-screen max-h-full'>
      <p className='text-6xl text-white font-bold'>Projects</p>
      <div className="flex flex-wrap justify-center items-center w-screen max-h-full pb-20 pl-20 pr-20">  
      <div className="flex gap-5 flex-wrap justify-center items-center w-[90%] min-h-full">
          {listOfProjects.map((project, index) => (
            <div key={index}>
              <Cards
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                photo={project.photo}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-2 justify-center items-center w-screen pb-20 pt-10">
        <div className="flex">
          <div
            className={`w-3 h-3 bg-white rounded-full mx-2 glowCircle ${
              page === 1 ? "glowCircleActive" : ""
            }`}
            onClick={() => pageState(1)}
          ></div>
          <div
            className={`w-3 h-3 bg-white rounded-full mx-2 glowCircle ${
              page === 2 ? "glowCircleActive" : ""
            }`}
            onClick={() => pageState(2)}
          ></div>
          <div
            className={`w-3 h-3 bg-white rounded-full mx-2 glowCircle ${
              page === 3 ? "glowCircleActive" : ""
            }`}
            onClick={() => pageState(3)}
          ></div>
          <div
            className={`w-3 h-3 bg-white rounded-full mx-2 glowCircle ${
              page === 4 ? "glowCircleActive" : ""
            }`}
            onClick={() => pageState(4)}
          ></div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Project;

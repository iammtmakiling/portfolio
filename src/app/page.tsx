'use client'

import {Main, About, Projects, ContactMe, Background} from "./components/templates";
import { NavBar, Footer } from "./components/molecules";
import './index.scss';
export default function Home() {
  return (
    <div className="w-screen h-auto overflow-x-hidden overflow-y-visible">
      <div className="relative z-10">
        <div id="main" className="flex flex-col h-screen">
          <div className="flex flex-col justify-center items-center">
            <NavBar />
            <div className="flex flex-col top-0 gap-20">
              <Main/>
              <About/>
              <Projects/>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
    </div>
  );
}
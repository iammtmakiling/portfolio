'use client'

import {Main, About, Projects, ContactMe, Background} from "./components/templates";
import { NavBar, ButtonNav } from "./components/molecules";
import './index.scss';
import { usePageState } from "./components/states/pageStates";
export default function Home() {
  const { page } = usePageState();

  let contentComponent;

  switch (page) {
    case 'about':
      contentComponent = <About />;
      break;
    case 'projects':
      contentComponent = <Projects />;
      break;
    case 'contact':
      contentComponent = <ContactMe />;
      break;
    default:
      contentComponent = <Main />;
      break;
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-visible">
      <div className="relative z-10">
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1 justify-center">
          {contentComponent}
        </div>
        {/* <div className="flex flex-2">
          <ButtonNav />
        </div> */}
      </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
    </div>
  );
}
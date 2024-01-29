import {Main, Background} from "./components/templates";
import { NavBar, ButtonNav } from "./components/molecules";
import './index.scss';
export default function Home() {

  return (
    <div className="w-screen h-screen bg-color">
      <div className="relative z-10">
        <NavBar />
        <ButtonNav/>
      </div>
      <div className="absolute inset-0 z-0">
        <Background/>
      </div>
    </div>
  );
}

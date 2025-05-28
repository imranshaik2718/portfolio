import React from "react";
import NavBar from "./NavBar";
// import Hero from "./components/hero";
import Works from './Works';

import VantaBackground from "./VantaBackground";
import Contact from "./Contact";

// import { color } from 'three/tsl';

function HomePage() {
  return (
    <>
    <div className="body flex flex-col justify-between h-screen">
      <div className=" text-white">
        <NavBar />
        {/* <Hero /> */}
        <VantaBackground />
      </div>
    </div>
    <Works/>
    <Contact/>
    </>
  );
}
export default HomePage;

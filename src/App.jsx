import React, { useState } from "react";
import NavBar from "./components/NavBar";
// import Hero from "./components/hero";
import Works from './components/Works';
import "./App.css";
import VantaBackground from "./components/VantaBackground";
// import { color } from 'three/tsl';

function App() {
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
    </>
  );
}
export default App;

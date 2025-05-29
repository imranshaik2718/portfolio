import React from "react";
import image1 from "../assets/images/latestwork1 1.png";
import image2 from "../assets/images/project2.png";
import image3 from "../assets/images/p3.png";

import Reactjs from "../assets/Logo/React.svg";
import Bootstrap from "../assets/Logo/Bootstrap.svg";
import css from "../assets/Logo/css.svg";
import html from "../assets/Logo/html.svg";
import js from "../assets/Logo/js.svg";
import Node from "../assets/Logo/Node.svg";
import Tcss from "../assets/Logo/Tcss.svg";
import Frame from "../assets/Logo/Frame.svg";
import app from "../assets/Logo/app.svg";
import Typescript from "../assets/Logo/Typescript.svg";
import  Figma from "../assets/Logo/Figma.svg";

export default function Works() {
  return (
    <div className="from-gray-900 to-black">
      <div className="text-center border-t-2 border-white">
        <button
          className="text-white mt-0 mb-5 border p-2 rounded-b-xl"
          id="Latest "
        >
          Latest works
        </button>
      </div>

      <div className="relative  py-20">
        {/* Vertical line */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 h-full sm:h-[1240px] w-[3px] bg-[#E0E0E0]" />


        {/* Projects */}
        <div className="relative z-10 flex flex-col items-center gap-30">
          {/*1st */}
          <div className="flex justify-center items-center w-full max-w-6xl relative ">
            {/* Image */}
            <div className="w-1/2 flex justify-start">
              <a
                href="https://todo-app-2718.netlify.app/"
                className="z-10"
                target="_blank"
              >
                <img
                  src={image1}
                  alt="Harigurus"
                  className="w-[400px] hover:scale-110  duration-500 shadow-2xl "
                />
              </a>
            </div>

            {/* Connector Line */}
            <div className="absolute left-1/3.2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 overflow-hidden h-[3px] w-[calc(50%-300px)] bg-[#0d6efd]" />
            <div class="w-4 h-4 bg-blue-600 rounded-full inline-block hover:scale-110 transition-transform duration-300 shadow-lg"></div>

            {/* Content */}
            <div className="w-1/2 pl-20 ">
              <h3 className="text-3xl font-bold text-[#0d6efd]">TaskMate</h3>
              <p className="text-[#0d6efd] italic mt-1 flex">
                (React To-Do App Live){" "}
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] ml-40 text-white/40 mr-2"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                  <a
                  href="https://github.com/imranshaik2718/Taskmate-project"
                  target="blank"
                  className="text-white/40 text-[15px]  font-bold font-mono"
                > - github.com</a>
                  
                 
                
              </p>
              <p className="mt-4 text-gray-400">
                TaskMate is a responsive task management web application built
                using React.js. It allows users to add, edit, delete, and mark
                tasks as completed. Tasks are stored using localStorage
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
              
                <img src={Reactjs} alt="logo1" />
                <img src={js} alt="logo1" />
                <img src={Bootstrap} alt="logo1" />
                <img src={css} alt="logo1" />
                <img src={html} alt="logo1" />
                <img src={app} alt="logo1" />
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="flex justify-center items-center w-full max-w-6xl relative">
            {/* Content */}
            <div className="w-1/2 pr-20 text-right">
              <h3 className="text-3xl font-bold text-[#912046]">
                sksplumbingworks.in
              </h3>
              <span className="text-[#912046] italic mt-1 flex">
                
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px]  text-white/40 mr-2"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                  <a
                  href="https://github.com/imranshaik2718/Sksplumbingworks"
                  target="blank"
                  className="text-white/40 text-[15px] mr-39 font-bold font-mono"
                > -github.com</a>

                (Plumbing Services Web App)
              </span>
              <p className="mt-4 text-gray-400">
                PlumbEasy is a fully responsive, user-friendly web application
                designed for a local plumbing business. The site provides
                detailed pages for various services including repair,
                installation, leakage detection, and cleaning/maintenance.
                Website offers a clean layout, smooth navigation, and
                professional branding tailored to the real-world needs of a
                small service business.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-end">
               
                <img src={app} alt="logo" />
                <img src={Figma} alt="logo" />
                <img src={css} alt="logo" />
                <img src={html} alt="logo" />
                <img src={Tcss} alt="logo" />
                <img src={js} alt="logo" />
                <img src={Reactjs} alt="logo" />
              </div>
            </div>

            {/* Connector Line */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[3px] w-[calc(50%-300px)] bg-[#912046]" />
            <div class="w-4 h-4 bg-[#912046] rounded-full inline-block hover:scale-110 transition-transform duration-300 shadow-lg"></div>

            {/* Image */}
            <div className="w-1/2 flex justify-end">
              <a
                href="https://sksplumbingworks.netlify.app/"
                className="z-10"
                target="_blank"
              >
                <img
                  src={image2}
                  alt="EazyGrad"
                  className="w-[400px]  hover:scale-110  duration-500"
                />
              </a>
            </div>
          </div>

          {/* 3rd */}

          <div className="flex justify-center items-center w-full max-w-6xl relative mb-20">
            {/* Image */}
            <div className="w-1/2 flex justify-start">
              <a
                href="https://deepranjansachan-drs.netlify.app/"
                className="z-10"
                target="_blank"
              >
                <img
                  src={image3}
                  alt="Harigurus"
                  className="w-[400px] hover:scale-110 z-10 duration-500 shadow-2xl"
                />
              </a>
            </div>

            {/* Connector Line */}
            <div className="absolute left-1/3.2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 overflow-hidden h-[3px] w-[calc(50%-300px)] bg-[#2d7e3f]" />
            <div class="w-4 h-4 bg-[#2d7e3f] rounded-full inline-block hover:scale-110 transition-transform duration-300 shadow-lg"></div>
            {/* Content */}
            <div className="w-1/2 pl-20 ">
              <h3 className="text-3xl font-bold text-[#2d7e3f]">
                 Personal Blog
              </h3>
              <p className="text-[#2d7e3f] italic mt-1 flex">
                (Deep Ranjan Sachan)

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] ml-40 text-white/40 mr-2"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                  <a
                  href="https://github.com/imranshaik2718/DRS"
                  target="blank"
                  className="text-white/40 text-[15px]  font-bold font-mono"
                > - github.com</a>
              </p>
              <p className="mt-4 text-gray-400">
                Developed a fully responsive and animated personal brand website
                for YouTuber and content creator Deep Ranjan Sachan. The site
                showcases his travel vlogs, featured work, journey map, and more
                with engaging UI/UX design, interactive elements, and smooth
                animations.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                
                <img src={Reactjs} alt="logo" />
                <img src={Typescript} alt="logo" />
                <img src={Tcss} alt="logo" />
                <img src={css} alt="logo" />
                <img src={Node} alt="logo" />
                <img src={Frame} alt="logo" />
                <img src={app} alt="logo" />
                <img src={Figma} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 h-[3px] w-[10px] bg-[#E0E0E0] mx-auto" />
      </div>
        <div className=" left-1/2  h-[3px] w-[100px] bg-[#E0E0E0] mx-auto" />
      
    </div>
  );
}

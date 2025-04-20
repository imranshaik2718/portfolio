import React from "react";
import image1 from "../assets/images/LW1.svg";

export default function Works() {
  return (
    <div className="h-screen">
      <div className="text-center border-t border-white">
        <h1 className="text-white mt-2 mb-5">Latest works</h1>
      </div>
      <div className="text-white flex justify-center items-center flex-wrap mt-20 ">
        <div className="group">
          {/* <span className="text-white absolute translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
            ToDo app
          </span> */}
          <a href="https://todo-app-2718.netlify.app/" target="_blank">
          <img
            src={image1}
            width={450}
            className=" hover:scale-105 transition-all duration-300"
            alt="laptop image group"
          />
          </a>
        </div>
        <div className=" overflow-hidden w-1/2 ml-10">
          <h2 className="Heroh1 text-2xl text-blue-600">
            TaskMate – React To-Do App Live{" "}
          </h2>
          <br />
          <p className="Herop text">
            Description: TaskMate is a responsive task management web
            application built using React.js. It allows users to add, edit,
            delete, and mark tasks as completed. Tasks are stored using
            localStorage, ensuring persistence across browser sessions. The app
            also includes a light/dark theme toggle for enhanced user
            experience. Key Features: Add, edit, delete, and complete tasks
            Persistent data storage with localStorage Theme switcher (light/dark
            mode) Fully responsive UI Clean and intuitive design
          </p>
          <h2 className="Heroh1">Tech Stack:</h2>
          <div className="flex flex-wrap gap-2">
            <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
              #React.js
            </span>
            <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
              #JavaScript
            </span>
            <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
              #bootstrap
            </span>
            <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
              #HTML
            </span>
            <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
              #CSS
            </span>
            <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
              #LocalStorage
            </span>
            <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
              #Netlify (Deployment)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

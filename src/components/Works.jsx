import React from "react";
import image1 from "../assets/images/LW1.svg";
import image2 from "../assets/images/project2.png";

export default function Works() {
  return (
    <div className="from-gray-900 to-black">
      <div className="text-center border-t-2 border-white">
        <button className="text-white mt-0 mb-5 border p-2 rounded-b-xl" id="#Latest ">Latest works</button>
      </div>

<div className="relative  py-20">
     

      {/* Vertical line */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#E0E0E0] z-0" />

      {/* Projects */}
      <div className="relative z-10 flex flex-col items-center gap-40">
        {/* Top Project (Left) */}
        <div className="flex justify-center items-center w-full max-w-6xl relative ">
          {/* Image */}
          <div className="w-1/2 flex justify-start">
            <img src={image1} alt="Harigurus" className="w-[450px] hover:scale-105 z-10  duration-300 shadow-2xl" />
          </div>

          {/* Connector Line */}
          <div className="absolute left-1/3.2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 overflow-hidden h-[3px] w-[calc(50%-400px)] bg-[#6C2BD9]" />

          {/* Content */}
          <div className="w-1/2 pl-20 ">
            <h3 className="text-3xl font-bold text-[#6C2BD9]">TaskMate</h3>
            <p className="text-[#6C2BD9] italic mt-1">(React To-Do App Live)</p>
            <p className="mt-4 text-gray-400">
             TaskMate is a responsive task management web
            application built using React.js. It allows users to add, edit,
            delete, and mark tasks as completed. Tasks are stored using
            localStorage
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['#react.js', '#JavaScript', '#html', '#css', '#LocalStorage', '#LocalStorage' , '#Netlify (Deployment)'].map(tag => (
                <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Project (Right) */}
        <div className="flex justify-center items-center w-full max-w-6xl relative">
          {/* Content */}
          <div className="w-1/2 pr-20 text-right">
            <h3 className="text-3xl font-bold text-[#912046]">sksplumbingworks.in</h3>
            <p className="text-[#912046] italic mt-1">(Plumbing Services Web App)</p>
            <p className="mt-4 text-gray-400">
              PlumbEasy is a fully responsive, user-friendly web application designed for a local plumbing business. The site provides detailed pages for various services including repair, installation, leakage detection, and cleaning/maintenance. Website offers a clean layout, smooth navigation, and professional branding tailored to the real-world needs of a small service business.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-end">
              {['#react.js', '#JavaScript', '#html', '#css', '#LocalStorage', '#LocalStorage' , '#Netlify (Deployment)'].map(tag => (
                <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>

          {/* Connector Line */}
         <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[3px] w-[calc(50%-400px)] bg-[#912046]" />


          {/* Image */}
          <div className="w-1/2 flex justify-end">
            <img src={image2} alt="EazyGrad" className="w-[450px] shadow-2xl hover:scale-105 z-10  duration-300" />
          </div>
        </div>
      </div>
    </div>



    </div>
  );
}

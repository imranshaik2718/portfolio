import React from "react";
import Coder from "../assets/images/coder.svg";
import Close from "../assets/images/close-cancel.svg";

const PopModel = ({Onclose}) => {
  return (
    <div className=" border-2 md:flex-row duration-100 ease-out flex items-start mt-10 rounded-2xl max-w-screen-xl mx-auto mb-10 fixed inset-0 z-50 justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="p-20  ml-4 md:w-1/2 w-full md:pr-8 flex-wrap-reverse">
        <h1 className="Abouth1 mb-8 font-bold text-5xl text-blue-500 relative">About me</h1>
        <p className=" Aboutp mb-5">
          I’m Shaik Imran Ali from Hyderabad. I recently completed my studies
          and have been actively working on improving my frontend development
          skills. I have hands-on experience with HTML, CSS, JavaScript,
          Reactjs, Java, and SQL, and I’m currently enhancing my expertise in
          Reactjs. I have built multiple projects, including a portfolio website
          that showcases my work with interactive features. I enjoy solving
          problems and learning new technologies to improve user experience. I
          am looking for an opportunity where I can apply my skills, grow as a
          developer, and contribute effectively to a dynamic team. I am
          passionate about frontend development. I would love to be part of a
          company where I can continue to grow and make an impact. Thank you for
          your time!"
        </p>
        <div class="flex flex-wrap gap-2">
        <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #html
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #css
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #javascript
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #react.js
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #redux
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #bootstrap
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #tailwind
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #git
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #github
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #node.js
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #mongoDB
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #SQL
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #AI fundamentals
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #java
          </span>
          
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #Azure
          </span>
          
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #data structures
          </span>
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #terminal
          </span>
        
          <span class="border border-gray-400 text-sm px-2 py-1 rounded-md">
            #figma
          </span>
        </div>
      </div> 
      <button onClick={Onclose} className="text-white absolute right-0 hover:scale-130"><img src={Close} width={50} alt="close button" /></button>
      <div className="flex justify-center md:w-1/2 w-full translate-y-1/2" >
        <img src={Coder} width={800}  alt="coderimg" />
      </div>
    </div>
  );
};

export default PopModel;

import React, { useState } from "react";
import Ali from "../assets/images/ALLLLi.png";
import Whatsapp from "../assets/images/whatsapp.svg";
import Login from "../assets/images/icons8-login-96.png";
import PopModel from "./PopModel";
const NavBar = ({ lightBtn }) => {
  const [showModal, setshowModel] = useState(false);
  return (
    <>  
      {showModal && <PopModel Onclose={() => setshowModel(false)} />}
      <section className="flex flex-col justify-between h-screen">
        <div className=" text-white">
          <header className="flex items-center justify-between gap-4 mt-4 mx-10">
            {/* Logo */}
            <svg
              width="70"
              height="70"
              viewBox="0 0 406 368"
              fill="full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M314.516 203.174L314.516 349.104L162.117 208.727M314.516 203.174L282.653 203.26M314.516 203.174L337.498 203.26L380.617 170.782L314.516 170.782M162.117 208.727L117.661 170.634L157.117 170.782M162.117 208.727L65.1165 301.139L20.176 301.139L137.099 188.83M200.117 170.782L282.653 96.1739L282.653 170.782M200.117 170.782L282.653 170.782M200.117 170.782L157.117 170.782M282.653 203.26L210.462 202.796L282.653 270.76L282.653 203.26ZM282.653 170.782L314.516 170.782M157.117 170.782L315.751 20.1061L314.516 170.782"
                stroke="white"
                stroke-width="10"
              />
            </svg>
            {/* NavBar */}
            <div className="flex gap-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="full"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-sun cursor-pointer"
                onClick={lightBtn}
               
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="full"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-moon cursor-pointer"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              <a href="/Login"><img src={Login} className="w-6 " fill="full" alt="loginicon" /></a>
              <a href=" https://wa.me/qr/AGMRN46C6JIBM1">
                <img
                  src={Whatsapp}
                  className="feature"
                  fill="full"
                  alt="whatsapp logo"
                />
              </a>
            </div>
          </header>

          {/* Hero */}
          <div className="flex  mt-40 relative">
            <div className="w-full max-w-screen-xl mx-auto ">
              <div className="ml-12">
                <h1
                  className="text-[30px] md:text-[80px] Heroh1 text-7xl mb-5 font-mono font-bold"
                  
                >
                  Shaik Imran
                </h1>
                <p
                  className=" Herop text-2xl mb-5"
                  
                >
                  Frontend Developer
                </p>
                <button
                  onClick={() => setshowModel(true)}
                  className=" bg-blue-800 border-2 rounded-lg border-blue-900 py-2 px-2 hover:bg-blue-500 hover:scale-110 duration-100 ease-in-out"
                >
                  About me
                </button>
              </div>
              <img
                src={Ali}
                className="absolute top-0 -translate-y-1/5 translate-x-1/2 md:w-[740px] w-[250px]"
                width="674"
                height="587"
                alt="Ali Logo"
              />
            </div>
            {/* Hero side */}
            <ul className="ml-auto  gap-5 space-y-4 text-[#b0b2c3] absolute right-8">
              <li className=" w-8 hover:text-white">
                <a
                  href="https://www.linkedin.com/in/shaik-imran-ali-69813a289/"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="currentColor"
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                    />
                  </svg>
                </a>
              </li>
              <li className="w-8  hover:text-white">
                <a
                  href="https://www.instagram.com/_imran_.18/?igsh=b3VnbGdkYmdocXp4#"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
              </li>
              <li className=" hover:text-white">
                <a
                  href="https://mail.google.com/mail/u/0/#search/imranshaik1145%40gmail.com?compose=new"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-at-sign"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                  </svg>
                </a>
              </li>
              <li className="w-8  hover:text-white">
                <a href="https://github.com/imranshaik2718" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>
              </li>
              <div className="flex flex-col group ">
                <li className="w-8 icon hover:text-white ">
                  <a
                    href="https://drive.google.com/file/d/1oDAXN2pyc8FKeDGD93XSrpMmgbRZguoX/view?usp=sharing"
                    target="_blank"
                  >
                    <svg
                      fill="#000000"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 480 480"
                      xml:space="preserve"
                    >
                      <g>
                        <g>
                          <path
                            fill="currentcolor"
                            d="M413.648,74.336L341.664,2.352C340.216,0.896,338.216,0,336,0H104C81.944,0,64,17.944,64,40v344c0,22.056,17.944,40,40,40
			h88v56h16v-56h120c4.416,0,8-3.576,8-8v-40c0-14.88,10.216-27.432,24-30.984V416v64h16v-56c22.056,0,40-17.944,40-40V80
			C416,77.784,415.104,75.784,413.648,74.336z M344,27.312L388.688,72H344V27.312z M400,384c0,13.232-10.768,24-24,24v-72
			c0-4.424-3.584-8-8-8c-26.472,0-48,21.528-48,48v32H104c-13.232,0-24-10.768-24-24V40c0-13.232,10.768-24,24-24h224v64
			c0,4.424,3.584,8,8,8h64V384z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            fill="currentcolor"
                            d="M224,48H112c-4.416,0-8,3.576-8,8v112c0,4.424,3.584,8,8,8h32h48h32c4.416,0,8-3.576,8-8V56C232,51.576,228.416,48,224,48
			z M184,160h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V160z M160,104c0-4.416,3.592-8,8-8s8,3.584,8,8s-3.592,8-8,8
			S160,108.416,160,104z M216,160h-16v-16c0-10.488-5.136-19.72-12.952-25.56c3.064-4.032,4.952-9,4.952-14.44
			c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44C141.136,124.28,136,133.512,136,144v16h-16V64h96
			V160z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="248"
                            y="72"
                            width="40"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="248"
                            y="104"
                            width="48"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="312"
                            y="104"
                            width="40"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="248"
                            y="136"
                            width="104"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="144"
                            y="200"
                            width="64"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="224"
                            y="200"
                            width="48"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="288"
                            y="200"
                            width="80"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="112"
                            y="232"
                            width="64"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="192"
                            y="232"
                            width="128"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="336"
                            y="232"
                            width="32"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="112"
                            y="264"
                            width="32"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="160"
                            y="264"
                            width="96"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="272"
                            y="264"
                            width="96"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="112"
                            y="296"
                            width="32"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="160"
                            y="296"
                            width="96"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="272"
                            y="296"
                            width="96"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="112"
                            y="328"
                            width="72"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="200"
                            y="328"
                            width="112"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="112"
                            y="360"
                            width="32"
                            height="16"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            fill="currentcolor"
                            x="160"
                            y="360"
                            width="136"
                            height="16"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <div className="flex justify-center opacity-0 group-hover:opacity-100">
                  <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 text-sm text-white bg-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 pointer-events-none z-10">
                    Resume
                  </span>
                </div>  
              </div>
            </ul>
          </div>
        </div>
        <button className=" bg-blue-800 border-2 rounded-lg border-blue-900 py-2 px-4 hover:bg-blue-500 hover:scale-110 duration-100 ease-in-out self-center mb-12 group">
         <a href="/Latest">Latest works</a> 
          <svg
            fill="currentColor"
            stroke="currentColor"
            height="70px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 190 330 330"
            xml:space="preserve"
            className="absolute translate-x-2/2 group-hover:-bottom-18"
          >
            <path
              id="XMLID_24_"
              d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15
	c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5
	C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"
            />
          </svg>
        </button>
      </section>
    </>
  );
};

export default NavBar;

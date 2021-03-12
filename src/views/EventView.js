import React from "react";
//import {Link} from "react-router-dom";
//import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Fade from "react-reveal/Fade";

export default function EventView(){
    return (
        <>
          <IndexNavbar fixed />
          <section className="mt-48 md:mt-40 pb-40 relative bg-gray -200">
        <div className="container mx-auto overflow-hidden pb-20">
          <Fade right>
            <div className="flex  flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto ">
                <h3 className="titlelightmode text-3xl mb-2 text-blue-600 font-semibold leading-normal">
                  Welcome to Event Management 
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  We aim to help HR cabinets & headhunters to have the best
                  recruitment experience.
                </p>
                <br />

              </div>

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-0 mt-9  md:mt-0">
                  <img
                    alt="..."
                    src={require("assets/img//hr_service/data.svg")}
                    className="w-full align-middle rounded-lg absolute shadow-lg -top-200-px left-260-px max-w-210-px"
                  />
                  <img
                    alt="..."
                    src={require("assets/img//hr_service/cv.svg")}
                    className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px left-260-px  top-25-px"
                  />

                  <img
                    alt="..."
                    src={require("assets/img/hr_service/grades.svg")}
                    className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-20-px -top-160-px  z-2"
                  />

                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
          <section className="header relative  items-center flex h-screen max-h-860-px">
            <div
              className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
    
            <div className=" container mx-auto">
              <div className=" bannerdarkmode flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
                <div className="w-full text-center lg:w-8/12">
                 
                  <div className="text-center mt-16"></div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      );
}
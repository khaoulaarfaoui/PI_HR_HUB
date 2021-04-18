import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { PieChart, Tooltip, Pie, ResponsiveContainer } from "recharts";
import "../../../../src/assets/styles/job.css";
import "../../../../src/assets/styles/recommended.scss";

// components

export default function Chart() {
  const data = [
    { name: "Accepted", value: 30, fill: "#90cdf4" },
    { name: "Not accepted", value: 70, fill: "#3182ce" },
  ];

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
        <h5 className="text-gray-800 py-4 px-10 text-center text-2xl font-bold left-100-px ">
          Job matching
        </h5>{" "}
        <div className="px-10">
          <PieChart width={400} height={200}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            />

            <Tooltip />
          </PieChart>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
        <h5 className="text-gray-800 py-4 px-10 text-center text-2xl font-bold left-100-px ">
          Similar Jobs{" "}
        </h5>{" "}
      </div>
      <Scrollbars autoHide style={{ width: 400, height: 600 }}>
        <article className="blog-card">
          <img
            className="post-image"
            src={require("assets/img/team-3-800x800.jpg")}
          />
          <div class="article-details">
            <h4 class="post-category">category </h4>
            <h3 class="post-title"> name</h3>
            <p class="post-description">
              {" "}
              descd escde scdesc desc desc desc desc desc desc{" "}
            </p>
            <div className="flex">
              <button
                className="bg-green-500 px-4 text-white active:bg-blue-600 font-bold uppercase 
                  text-xs  py-0 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Apply now{" "}
              </button>
              <button
                className="bg-gray-200 text-black active:bg-gray-600 font-bold uppercase 
              text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Details{" "}
              </button>
            </div>
          </div>
        </article>
        <article className="blog-card">
          <img
            className="post-image"
            src={require("assets/img/team-3-800x800.jpg")}
          />
          <div class="article-details">
            <h4 class="post-category">category </h4>
            <h3 class="post-title"> name</h3>
            <p class="post-description">
              {" "}
              descd escde scdesc desc desc desc desc desc desc{" "}
            </p>
            <div className="flex">
              <button
                className="bg-green-500 px-4 text-white active:bg-blue-600 font-bold uppercase 
                  text-xs  py-0 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Apply now{" "}
              </button>
              <button
                className="bg-gray-200 text-black active:bg-gray-600 font-bold uppercase 
              text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Details{" "}
              </button>
            </div>
          </div>
        </article>{" "}
        <article className="blog-card">
          <img
            className="post-image"
            src={require("assets/img/team-3-800x800.jpg")}
          />
          <div class="article-details">
            <h4 class="post-category">category </h4>
            <h3 class="post-title"> name</h3>
            <p class="post-description">
              {" "}
              descd escde scdesc desc desc desc desc desc desc{" "}
            </p>
            <div className="flex">
              <button
                className="bg-green-500 px-4 text-white active:bg-blue-600 font-bold uppercase 
                  text-xs  py-0 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Apply now{" "}
              </button>
              <button
                className="bg-gray-200 text-black active:bg-gray-600 font-bold uppercase 
              text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Details{" "}
              </button>
            </div>
          </div>
        </article>{" "}
        <article className="blog-card">
          <img
            className="post-image"
            src={require("assets/img/team-3-800x800.jpg")}
          />
          <div class="article-details">
            <h4 class="post-category">category </h4>
            <h3 class="post-title"> name</h3>
            <p class="post-description">
              {" "}
              descd escde scdesc desc desc desc desc desc desc{" "}
            </p>
            <div className="flex">
              <button
                className="bg-green-500 px-4 text-white active:bg-blue-600 font-bold uppercase 
                  text-xs  py-0 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Apply now{" "}
              </button>
              <button
                className="bg-gray-200 text-black active:bg-gray-600 font-bold uppercase 
              text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Details{" "}
              </button>
            </div>
          </div>
        </article>
      </Scrollbars>
    </>
  );
}

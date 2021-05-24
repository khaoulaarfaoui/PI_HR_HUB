import React from "react";
import { Link } from "react-router-dom";
import CardSettings from "components/Cards/CardsCandidate/CardSettings.js";
import CardProfile from "components/Cards/CardsCandidate/CardProfile.js";

export default function LinkedinProfile() {
  const Jumbotron = ({ className, children }) => (
    <div
      className={`${className} shadow-lg border font-light border-solid rounded-sm py-1 px-4 mb-0
      `}
    >
      {children}
    </div>
  );
  const user = JSON.parse(localStorage.getItem("CandidateLinkedin"));

  return (
    <>
      <div className="container">
        <Jumbotron className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          <p className="mb-0">
            HR HUB provide for you our online CV builder tool. Try it, it's for
            Simple, Straight-forward and Free!
          </p>

          <Link
            className="text-sm px-6 py-1 mt-4 text-white active:bg-yellow-500 focus:outline-none border-solid border"
            to="/resume"
          >
            CV online builder
          </Link>
        </Jumbotron>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="rounded-t  py-6"></div>
          <div className="flex-auto px-2 lg:px-2 py-10 pt-0">
            <form>
              {" "}
              <div>
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        firstName
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        value={user.firstName}
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        LastName
                      </label>
                      <input
                        type="email"
                        disabled={true}
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        defaultValue={user.LastName}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="mt-16 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <img
                    alt="..."
                    className="pt-4 w-32 h-32 p-1  mt-8 bg-white  rounded-full"
                    src={user.pictureURL}
                  />
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {user.firstName} {user.LastName}
                </h3>
                {/*  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  {candidate.region}, {candidate.location}
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  {candidate.title}
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  {candidate.education}
                </div>
                <span className="mb-2 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-700 bg-blue-300 uppercase last:mr-0 mr-1">
                  {candidate.skills}
                </span>
  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

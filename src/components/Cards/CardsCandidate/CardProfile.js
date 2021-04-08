import React from "react";
import { useSelector } from "react-redux";

// components

export default function CardProfile() {
  const candidate = useSelector(
    (state) => state.candidateReducer.candidate.state.candidate
  );

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <img
                alt="..."
                className="pt-4 w-32 h-32 p-1  mt-8 bg-white  rounded-full"
                src={candidate.data.profilePhoto}
              />
            </div>
            <div className="w-full px-4 text-center mt-4">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    22
                  </span>
                  <span className="text-sm text-gray-500">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    10
                  </span>
                  <span className="text-sm text-gray-500">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    89
                  </span>
                  <span className="text-sm text-gray-500">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
              {candidate.data.fullName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
              {candidate.data.region}, {candidate.data.location}
            </div>
            <div className="mb-2 text-gray-700 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-gray-700">
              <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
              {candidate.data.education}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

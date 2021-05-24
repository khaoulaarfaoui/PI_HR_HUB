import React from "react";

// components
const CardProfile = (props) => {
  const hr = JSON.parse(localStorage.getItem("hr"));

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  className="w-28 mx-auto mb-3"
                  alt="..."
                  src={`http://localhost:8082/file/${hr.profilePhoto}`}
                  height="80"
                  width="50"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            {hr.fullName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
             {hr.location}
            </div>
            <div className="mb-2 text-gray-700 mt-10">
              <img
                  className="w-28 mx-auto mb-3"
                  alt="..."
                  src={`http://localhost:8082/file/${hr.companyLogo}`}
                  height="80"
                  width="50"
                />
              
            </div>
            <div className="mb-2 text-gray-700">
              <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
              {hr.company}
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default CardProfile;

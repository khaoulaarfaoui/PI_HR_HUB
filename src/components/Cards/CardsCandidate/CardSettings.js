import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButterToast, { Cinnamon } from "butter-toast";

import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import { updateCandidate } from "../../../Redux/actions/candidate/candidate";
// components

export default function CardSettings(props) {
  const checkBtn = useRef();
  const candidate = useSelector((state) => state.userReducer.auth.candidate);
  const user = useSelector((state) => state.userReducer.auth.user);

  const candidate_update = useSelector(
    (state) => state.candidateReducer.candidateCRUD.state.candidate_update
  );
  const dispatch = useDispatch();

  const [successful, setSuccessful] = useState(false);
  const [fullName, setFullName] = useState(candidate.fullName);
  const [location, setLocation] = useState(candidate.location);
  const [phoneNumber, setPhoneNumber] = useState(candidate.phoneNumber);
  const [education, setEducation] = useState(candidate.education);
  const [region, setRegion] = useState(candidate.region);
  const [aboutMe, setAboutme] = useState(candidate.aboutMe);
  const [background, setBackground] = useState(candidate.background);

  const onChangeRegion = (e) => {
    const Region = e.target.value;
    setRegion(Region);
  };
  const onChangeBackground = (e) => {
    const Background = e.target.value;
    setBackground(Background);
  };

  const onChangeAboutme = (e) => {
    const AboutMe = e.target.value;
    setAboutme(AboutMe);
  };
  const onChangeEducation = (e) => {
    const Education = e.target.value;

    setEducation(Education);
  };

  const onChangephoneNumber = (e) => {
    const PhoneNumber = e.target.value;
    setPhoneNumber(PhoneNumber);
  };
  const onChangeLocation = (e) => {
    const Location = e.target.value;
    setLocation(Location);
  };

  const onChangefullName = (e) => {
    const FullName = e.target.value;
    setFullName(FullName);
  };

  var res = candidate.fullName.split(" ");
  const updateContent = () => {
    console.log(fullName);
    dispatch(
      updateCandidate(candidate.data._id, {
        fullName,
        location,
        region,
        phoneNumber,
        education,
        aboutMe,
        background,
      })
    )
      .then((response) => {
        console.log("lennan", response);
      })
      .catch((e) => {
        ButterToast.raise({
          content: (
            <Cinnamon.Crisp
              title="Candidate Notification"
              content="Updated successfully"
              scheme={Cinnamon.Crisp.SCHEME_PURPLE}
              //icon={<AssignmentTurnedIn />}
            />
          ),
        });
        console.log(e);
      });
  };

  return (
    <>
      <main>
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">My Profile</h6>

            <button
              type="submit"
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              onClick={updateContent}
            >
              Update
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            {" "}
            {!successful && (
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
                        Username
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        value={user.username}
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
                        Email address
                      </label>
                      <input
                        type="email"
                        disabled={true}
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        defaultValue={user.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      onChange={onChangefullName}
                      value={fullName}
                    />
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        onChange={onChangephoneNumber}
                        value={phoneNumber}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        City
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        onChange={onChangeRegion}
                        value={region}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        onChange={onChangeLocation}
                        value={location}
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                  Education
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        University
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        onChange={onChangeEducation}
                        value={education}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Speciality
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        onChange={onChangeBackground}
                        value={background}
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                  Experience
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        JOB TITLE
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        COMPANY
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      DESCRIPTION
                    </label>
                    <textarea
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        About me
                      </label>
                      <textarea
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                        rows="4"
                        onChange={onChangeAboutme}
                        value={aboutMe}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>
    </>
  );
}

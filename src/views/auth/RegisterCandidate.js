import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../service/candidateService/authservice";
import Select from "react-select";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

export default function CandidateRegister() {
  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(`http://universities.hipolabs.com/search`, {})
        .then((response) => setEducation(parseStations(response.data)));
      /*console.log("alooooo", response.data);
      response.data.map((data) => {
        const test = { value: data.name, label: data.name };
        setEducation(test);
        
        
      });*/
    }
    fetchData();
  }, []);
  function parseStations(stations) {
    return stations.slice(0, 1000).map((station) => {
      return { label: station.name, value: station.name };
    });
  }
  const skill = [
    { value: "reactjs", label: "React JS" },
    { value: "nodejs", label: "Node JS" },
  ];
  console.log(skill);
  const background = [
    { value: "Infromation Technology", label: "Infromation Technology" },
    { value: "Business Intelligence", label: "Business Intelligence" },
    { value: "Web Dev", label: "Web Dev" },
    { value: "Finance", label: "Finance" },
    { value: "English", label: "English" },
  ];

  const history = useHistory();
  const checkBtn = useRef();
  const { user: currentUser } = useSelector((state) => state.userReducer.auth);
  const [fullName, setFullName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [birthday, setBirthday] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState();
  const [skills, setSkills] = useState("");
  const [region, setRegion] = useState("");
  const [user, setUser] = useState(currentUser.id);
  const [successful, setSuccessful] = useState(false);
  const [aboutMe, setAboutme] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const onChangeRegion = (e) => {
    const Region = e;
    setRegion(Region);
  };

  const onChangeAboutme = (e) => {
    const AboutMe = e.target.value;
    setAboutme(AboutMe);
  };
  const onChangeEducation = (e) => {
    const Education = e;
    setEducation(Education);
  };
  const onChangeExperience = (e) => {
    const experience = e.target.value;
    setExperience(experience);
  };
  const onChangeSkills = (e) => {
    const skills = e;
    setSkills(skills);
  };

  const onChangefullName = (e) => {
    const FullName = e.target.value;
    setFullName(FullName);
  };
  const onChangeUser = (e) => {
    const user = e.target.value;
    setUser(user);
  };
  const onChangeProfilePhoto = (e) => {
    const profilePhoto = e.target.files[0];
    const File = URL.createObjectURL(e.target.files[0]);
    setProfilePhoto(profilePhoto);
    setFile(File);
  };
  const onChangeBirthday = (e) => {
    const Birthday = e.target.value;
    setBirthday(Birthday);
  };
  const onChangephoneNumber = (e) => {
    const PhoneNumber = e.target.value;
    setPhoneNumber(PhoneNumber);
  };
  const onChangeLocation = (e) => {
    const Location = e;
    setLocation(Location);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);
    const form = new FormData();
    form.append("user", user);
    form.append("fullName", fullName);
    form.append("profilePhoto", profilePhoto);
    form.append("birthday", birthday);
    form.append("phoneNumber", phoneNumber);
    form.append("location", location);
    form.append("location", location);
    form.append("education", education);
    form.append("skills", skills);
    form.append("aboutMe", aboutMe);

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(form).then(
        (response) => {
          setMessage(response.data);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log("errreur react", error);
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
      history.push("/candidate");
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <Form onSubmit={handleRegister}>
                  {" "}
                  {!successful && (
                    <div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          User
                        </label>
                        <Input
                          type="text"
                          name="user"
                          disabled={true}
                          value={user}
                          onChange={onChangeUser}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <Input
                          type="text"
                          name="fullName"
                          value={fullName}
                          onChange={onChangefullName}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          profilePhoto
                        </label>
                        <Input
                          type="file"
                          name="profilePhoto"
                          //value={profilePhoto}
                          onChange={onChangeProfilePhoto}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="profilePhoto"
                        />
                        <img src={file} />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          birthday
                        </label>
                        <input
                          type="date"
                          value={birthday}
                          onChange={onChangeBirthday}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="birthday"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          phoneNumber
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={onChangephoneNumber}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="phoneNumber"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          About Me
                        </label>
                        <textarea
                          type="textarea"
                          name="aboutMe"
                          value={aboutMe}
                          onChange={onChangeAboutme}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="About Me"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Experience
                        </label>
                        <input
                          type="text"
                          name="experience"
                          value={experience}
                          onChange={onChangeExperience}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="experience"
                        />
                      </div>

                      {/* <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          location
                        </label>
                        <input
                          type="text"
                          value={location}
                          onChange={onChangeLocation}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="location"
                        />
                      </div> */}

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Education
                        </label>
                        <Select
                          options={education}
                          onChange={onChangeEducation}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                          Skills
                        </label>
                        <Select
                          isMulti
                          options={skill}
                          onChange={onChangeSkills}
                        />
                      </div>
                      <div>
                        <CountryDropdown
                          value={location}
                          onChange={onChangeLocation}
                        />
                        <RegionDropdown
                          country={location}
                          value={region}
                          onChange={onChangeRegion}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              className="text-blue-500"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                          Create Account
                        </button>
                      </div>
                    </div>
                  )}
                  {message && (
                    <div className="form-group">
                      <div
                        className={
                          successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {message}
                      </div>
                    </div>
                  )}
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

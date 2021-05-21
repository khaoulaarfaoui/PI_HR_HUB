import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { register, uploadFile } from "../../Redux/actions/hr/hr";
import PhoneInput from "react-phone-number-input";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

/* FORM VALIDATORS */
const required = (value) => {
  if (!value) {
    return (
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">REQUIRED!</strong>
        <span className="block sm:inline">This field is required.</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  }
};
export default function HR() {
  const form = useRef();
  const history = useHistory();

  const checkBtn = useRef();
  //const { user: currentUser } = useSelector((state) => state.userReducer.auth);
  const [fullName, setFullName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [birthday, setBirthday] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyPhotos, setCompanyPhotos] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")).id);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const [image, setImage] = useState("");

  const [imageCompany, setImageCompany] = useState("");

  const [imageLogo, setLogo] = useState("");

  const onChangefullName = (e) => {
    const FullName = e.target.value;
    setFullName(FullName);
  };
  const onChangeUser = (e) => {
    const user = e.target.value;
    //setUser(user);
  };
  const onChangeProfilePhoto = (e) => {
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setProfilePhoto(file);
    dispatch(uploadFile(file))
      .then((file) => {
        console.log("file 1", file.data.filename);
        setImage(file.data.filename);
      })
      .catch(() => {
        //setSuccessful(false);
      });
  };
  const onChangeBirthday = (e) => {
    const Birthday = e.target.value;
    setBirthday(Birthday);
  };
  const onChangephoneNumber = (e) => {
    const PhoneNumber = e;
    setPhoneNumber(PhoneNumber);
  };
  const onChangeLocation = (e) => {
    const Location = e;
    setLocation(Location);
  };

  const onChangeComapny = (e) => {
    const company = e.target.value;
    setCompany(company);
  };

  const dispatch = useDispatch();

  const onChangeCampanyLogo = (e) => {
    const file = e.target.files[0]; // accesing file
    setCompanyLogo(file);
    dispatch(uploadFile(file))
      .then((file) => {
        setImageCompany(file.data.filename);
      })
      .catch(() => {
        //setSuccessful(false);
      });
  };
  const onChangeCompanyPhotos = (e) => {
    const file = e.target.files[0]; // accesing file
    setCompanyPhotos(file);
    dispatch(uploadFile(file))
      .then((file) => {
        setLogo(file.data.filename);
      })
      .catch(() => {
        //setSuccessful(false);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      console.log("image ssssss", image);
      console.log("image ssssss", imageLogo);
      console.log("image ssssss", imageLogo);

      localStorage.setItem("photo", image);
      dispatch(
        register(
          fullName,
          image,
          birthday,
          phoneNumber,
          location,
          company,
          imageLogo,
          imageCompany,
          JSON.parse(localStorage.getItem("user")).id
        )
      ).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          setSuccessful(false);
        }
      );

      history.push("/auth/login");
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
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
                <Form onSubmit={handleRegister} ref={form}>
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
                          type="name"
                          name="username"
                          value={fullName}
                          onChange={onChangefullName}
                          validations={[required]}
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
                          name="profilephoto"
                          onChange={onChangeProfilePhoto}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="profilePhoto"
                        />
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
                          validations={[required]}
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
                        <PhoneInput
                          international
                          countryCallingCodeEditable={false}
                          defaultCountry="TN"
                          value={phoneNumber}
                          onChange={onChangephoneNumber}
                          validations={[required]}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="phoneNumber"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          location
                        </label>
                        <CountryDropdown
                          type="text"
                          value={location}
                          onChange={onChangeLocation}
                          validations={[required]}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="location"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          company
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={onChangeComapny}
                          validations={[required]}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="company"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          CompanyLogo
                        </label>
                        <input
                          type="file"
                          onChange={onChangeCampanyLogo}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="companyLogo"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          companyPhotos
                        </label>
                        <input
                          type="file"
                          onChange={onChangeCompanyPhotos}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="companyPhotos"
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

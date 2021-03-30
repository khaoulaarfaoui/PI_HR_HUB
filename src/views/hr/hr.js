import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { register,uploadFile } from "../../Redux/actions/hr/hr";
import { useHistory, Link } from "react-router-dom";

const HR = (props) => {

  const required = (value) => {
    if (!value) {
      return <div>This field is required!</div>;
    }
  };
  const history = useHistory();

  const form = useRef();
  const photofile = useRef();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [companyPhotos, setCompanyPhotos] = useState("");
  const [companyLogo, setCampanyLogo] = useState("");
  const [birthday, setBirthday] = useState("");
  const [file, setFile] = useState('');



  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();


  const onChangeName = (e) => {
    const Name = e.target.value;
    setName(Name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeProfilePhoto = (e) => {
    const profilePhoto = e.target.value;
    setProfilePhoto(profilePhoto);
  };
  const onChangeBirthday = (e) => {
    const birthday = e.target.value;
    setBirthday(birthday);
  };
  const onChangePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };
  const onChangeLocation = (e) => {
    const location = e.target.value;
    setLocation(location);
  };
  const onChangeCampany = (e) => {
    const campany = e.target.value;
    setCompany(campany);
  };

  const onChangeCampanyLogo = (e) => {
    const file = e.target.files[0]; // accesing file
    setCampanyLogo(file);
    
  };
  const onChangeCompanyPhotos = (e) => {
    const file = e.target.files[0]; // accesing file
    setCompanyPhotos(file);
  };
  const handleChangefile = (e) => {
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
}

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(uploadFile(file)).then(()=> {
      
    }).catch(() => {
      //setSuccessful(false);
    });


    
    dispatch(uploadFile(companyLogo)).then(()=> {
      
    }).catch(() => {
      //setSuccessful(false);
    }); 


    dispatch(uploadFile(companyPhotos)).then(()=> {
      
    }).catch(() => {
      //setSuccessful(false);
    });
    
    
    

    console.log("okkkkkkkk is register HR",email,password)
    dispatch(register(name, name, password, file.name,birthday,email,phoneNumber,
      location,company,companyLogo.name,companyPhotos.name))
    .then(() => {
      //setSuccessful(true);
      console.log("okkkkkkkkk register ")
      history.push("/hr");
    })
    .catch(() => {
      //setSuccessful(false);
    });
  }
   
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
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/github.svg")}
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg")}
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <Form onSubmit={handleRegister} ref={form}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={onChangeName}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Name"

                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <Input
                      type="text"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Password"
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
                      onChange={handleChangefile}
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
                    <Input
                      type="date"
                      name="birthday"
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
                    <Input
                      type="number"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={onChangePhoneNumber}
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
                    <Input
                      type="text"
                      name="location"
                      value={location}
                      onChange={onChangeLocation}
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
                    <Input
                      type="text"
                      name="company"
                      value={company}
                      onChange={onChangeCampany}
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="company"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      companyLogo
                    </label>
                    <Input
                      type="file"
                      name="companyLogo"
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
                      Company Photo
                    </label>
                    <Input
                      type="file"
                      name="companyPhotos"
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
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      
                    >
                      Create Account
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HR


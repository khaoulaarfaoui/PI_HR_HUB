import axios from "axios";

const API_URL = "http://localhost:3001/hr/";
const API_URL_UPLOAD = "http://localhost:3001/uploadfile";

const register = (fullName, username, password, profilePhoto,birthday,email,phoneNumber,
  location,company,companyLogo,companyPhotos) => {

    console.log(fullName, username, password, profilePhoto,birthday,email,phoneNumber,
      location,company,companyLogo,companyPhotos)
  return axios
    .post(API_URL, {
      fullName: fullName,
      username: username,
      password: password,
      profilePhoto: profilePhoto,
      birthday: birthday,
      email: email,
      phoneNumber: phoneNumber,
      location: location,
      company: company,
      companyLogo: companyLogo,
      companyPhotos: companyPhotos
}
      )
    .then((response) => {
      if (response.data) {

        window.location.href="/"
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
    });
};

const update = (id,fullName, username, password, profilePhoto,birthday,email,phoneNumber,
  location,company,companyLogo,companyPhotos) => {
  return axios
    .put(API_URL+id, {
      fullName: fullName,
      username: username,
      password: password,
      profilePhoto: profilePhoto,
      birthday: birthday,
      email: email,
      phoneNumber: phoneNumber,
      location: location,
      company: company,
      companyLogo: companyLogo,
      companyPhotos: companyPhotos
}
      )
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
    });
};


const deleteHr =(id) => {
  return axios
    .delete(API_URL+id)
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
    });
};

const findallHr =() => {
  return axios
    .get(API_URL)
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
    });
};


const uploadFile =(file) => {
  const formData = new FormData();       
   formData.append('file', file);
  return axios
    .post(API_URL_UPLOAD,formData)
    .then((response) => {
      if (response.data) {
     ///   localStorage.setItem("user", JSON.stringify(response.data));
      }
    });
};

export default {
  register,
  update,
  deleteHr,
  findallHr,
  uploadFile,
};

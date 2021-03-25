import axios from "axios";

const API_URL = "http://localhost:8080/api/hr/";

const register = (fullName, username, password, profilePhoto,birthday,email,phoneNumber,
  location,company,companyLogo,companyPhotos) => {
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
        localStorage.setItem("user", JSON.stringify(response.data));
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
        localStorage.setItem("user", JSON.stringify(response.data));
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

export default {
  register,
  update,
  deleteHr,
  findallHr,
};

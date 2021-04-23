import axios from "axios";

const API_URL = "http://localhost:8082/hr/";

const register = (
  fullName,
  profilePhoto,
  birthday,
  phoneNumber,
  location,
  company,
  companyLogo,
  companyPhotos,
  user
) => {
  return axios
    .post(API_URL + "/addHR", {
      fullName: fullName,
      profilePhoto: profilePhoto,
      birthday: birthday,
      phoneNumber: phoneNumber,
      location: location,
      company: company,
      companyLogo: companyLogo,
      companyPhotos: companyPhotos,
      user: user,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("hr", JSON.stringify(response.data));
        localStorage.setItem("candidate", JSON.stringify(null));
      }
    });
};

export default {
  register,
};

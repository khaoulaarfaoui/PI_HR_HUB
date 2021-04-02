import axios from "axios";

const API_URL = "http://localhost:8082/candidate/";

const register = (
  fullName,
  profilePhoto,
  birthday,
  phoneNumber,
  location,
  cv,
  education,
  experience,
  skills,
  user
) => {
  return axios
    .post(API_URL + "/addCandidate", {
      fullName: fullName,
      profilePhoto: profilePhoto,
      birthday: birthday,
      phoneNumber: phoneNumber,
      location: location,
      cv: cv,
      education: education,
      experience: experience,
      skills: skills,
      user: user,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem(
          "candidate",
          JSON.stringify(response.data, response.email)
        );
      }
    });
};

export default {
  register,
};

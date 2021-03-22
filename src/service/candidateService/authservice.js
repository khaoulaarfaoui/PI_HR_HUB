import axios from "axios";

const API_URL = "http://localhost:8082/candidate/";

const register = (fullName, phoneNumber, user) => {
  return axios.post(API_URL + "addCandidate", {
    fullName,
    phoneNumber,
    user,
  });
};

export default {
  register,
};

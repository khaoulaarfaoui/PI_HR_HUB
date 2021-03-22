import axios from "axios";

const API_URL = "http://localhost:8082/hr/";

const register = (fullName, phoneNumber, user) => {
  return axios.post(API_URL + "addHR", {
    fullName,
    phoneNumber,
    user,
  });
};

export default {
  register,
};

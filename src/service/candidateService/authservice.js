import axios from "axios";

const API_URL = "http://localhost:8082/candidate";

const register = (form) => {
  return axios({
    method: "post",
    url: "http://localhost:8082/candidate/addCandidate",
    data: form,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((response) => {
    if (response.data) {
      localStorage.setItem(
        "candidate",
        JSON.stringify(response.data, response.email, response.username)
      );
    }
  });
};

export default {
  register,
};

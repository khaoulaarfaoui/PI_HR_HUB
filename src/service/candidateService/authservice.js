import axios from "axios";

const API_URL = "http://localhost:8082/candidate";

const register = (form) => {
  return axios({
    method: "post",
    url: "http://localhost:8082/candidate/addCandidate",
    data: form,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((response) => {
    console.log("response", response);
    if (response.data) {
      console.log("herrre from react");
      localStorage.setItem(
        "candidate",
        JSON.stringify(response.data, response.email, response.username)
      );
      localStorage.setItem("hr", JSON.stringify(null));
    }
  });
};

export default {
  register,
};

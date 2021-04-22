import axios from "axios";

const API_URL = "http://localhost:8082/candidate/updateCandidate/";

const update = (id, data) => {
  console.log("dataaaaaaa", data);
  return axios
    .put(`http://localhost:8082/candidate/updateCandidate/${id}`, {
      location: data.location,
      region: data.region,
      phoneNumber: data.phoneNumber,
      education: data.education,
      aboutMe: data.aboutMe,
      background: data.background,
      fullName: data.fullName,
    })
    .then((response) => {
      if (response.data) {
        console.log("yooo", response.data.data);
        localStorage.setItem("candidate", JSON.stringify(response.data.data));
      }
      return response.data;
    });
};
const get = (id) => {
  return axios.get(`http://localhost:8082/candidate/fetch/${id}`);
};

export default {
  update,
  get,
};

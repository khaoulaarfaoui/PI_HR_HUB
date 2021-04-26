import axios from "axios";

const API_URL = "http://localhost:8082/candidate/";

const searching = (search) => {
  return axios.get(API_URL + `/fetchtext/${search}`).then((response) => {
    if (response) {
      console.log("responseeeeee", response);
      return response;
    }
  });
};

export default {
  searching,
};

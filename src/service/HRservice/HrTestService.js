import axios from "axios";

const API_URL = "http://localhost:8082/hrTest/";

const addHrTest = (
  title,
  description,
  tags,
  result,
  companyName,
  color,
  startDate,
  endDate,
  user
) => {
  console.log("object ", {
    title: title,
    description: description,
    tags: tags,
    result: result,
    companyName: companyName,
    color: color,
    startDate: startDate,
    endDate: endDate,
    user: user,
  });
  return axios
    .post(API_URL + "addHrTest", {
      title: title,
      description: description,
      tags: tags,
      result: result,
      companyName: companyName,
      color: color,
      startDate: startDate,
      endDate: endDate,
      user: user,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("HrTest", JSON.stringify(response.data));
      }
    });
};

const updateHrTest = (
  id,
  title,
  description,
  tags,
  result,
  companyName,
  color,
  startDate,
  endDate,
) => {
  return axios
    .put(API_URL + "updateHR", {
      _id: id,
      title: title,
      description: description,
      tags: tags,
      result: result,
      companyName: companyName,
      color: color,
      startDate: startDate,
      endDate: endDate,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("HrTest", JSON.stringify(response.data.data));
      }
    });
};

const deleteHrTest = (id) => {
  return axios.delete(API_URL+ "deleteTest/" + id).then((response) => {
    if (response.data) {
      localStorage.setItem("HrTest", JSON.stringify(response.data));
    }
  });
};

const findallHrTest = () => {
  return axios.get(API_URL);
};


const updateHRQuestion = (
  id,
  title,
  description,
  tags,
  result,
  companyName,
  color,
  startDate,
  endDate,
) => {
  return axios
    .put(API_URL + "updateHRQuuestion", {
      _id: id,
      title: title,
      description: description,
      tags: tags,
      result: result,
      companyName: companyName,
      color: color,
      startDate: startDate,
      endDate: endDate,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("HrTest", JSON.stringify(response.data.data));
      }
    });
};

const findallHrTestQuestion = (id) => {
  return axios.get(API_URL+"questions/"+ id);
};

const deleteHrTestQuestion = (id) => {
  return axios.delete(API_URL+ "/deleteTest/" + id).then((response) => {
    if (response.data) {
      localStorage.setItem("HrTestQuestion", JSON.stringify(response.data));
    }
  });
};


export default {
  addHrTest,
  updateHrTest,
  deleteHrTest,
  findallHrTest,
  updateHRQuestion,
  findallHrTestQuestion,
  deleteHrTestQuestion,

};

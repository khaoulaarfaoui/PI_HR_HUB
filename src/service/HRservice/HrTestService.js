import axios from "axios";

const API_URL = "http://localhost:8082/hrTest/";
const API_URL1 = "http://localhost:8082/response/";

const addHrTest = (
  title,
  description,
  tags,
  result,
  companyName,
  color,
  startDate,
  endDate,
  type,
  user
) => {
  console.log("addHrTest ", {
    title: title,
    description: description,
    tags: tags,
    result: result,
    companyName: companyName,
    color: color,
    startDate: startDate,
    endDate: endDate,
    type: type,
    hr: JSON.parse(localStorage.getItem("user"))._id,
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
      type: type,
      hr: JSON.parse(localStorage.getItem("user"))._id,
    })
    .then((response) => {
      console.log("response : ", response);
      if (response.data) {
        ///localStorage.setItem("HrTest", JSON.stringify(response.data));
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
  hr
) => {
  console.log("object update ", {
    _id: id,
    title: title,
    description: description,
    tags: tags,
    result: result,
    companyName: companyName,
    color: color,
    startDate: startDate,
    endDate: endDate,
    hr: hr,
  });
  return axios
    .put(API_URL + "updateHrTest", {
      _id: id,
      title: title,
      description: description,
      tags: tags,
      result: result,
      companyName: companyName,
      color: color,
      startDate: startDate,
      endDate: endDate,
      hr: hr,
    })
    .then((response) => {
      if (response.data) {
        //  localStorage.setItem("HrTest", JSON.stringify(response.data.data));
      }
    });
};

const deleteHrTest = (id) => {
  return axios.delete(API_URL + "deleteTest/" + id).then((response) => {
    if (response.data) {
      localStorage.setItem("HrTest", JSON.stringify(response.data));
    }
  });
};

const findallHrTest = () => {
  return axios.get(API_URL);
};

const updateHRQuestion = (id, titre, response) => {
  return axios
    .put(API_URL + "updateHRQuuestion", {
      _id: id,
      question: {
        titre: titre,
        response: response,
      },
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("HrTest", JSON.stringify(response.data.data));
      }
    });
};

const findallHrTestQuestion = (id) => {
  return axios.get(API_URL + "questions/" + id);
};

const findallResponse = () => {
  return axios.get(API_URL + "response/");
};

const deleteHrTestQuestion = (id) => {
  console.log(
    "test ",
    API_URL + "deleteQuestion/" + localStorage.getItem("idTest") + "/" + id
  );
  return axios
    .delete(
      API_URL + "deleteQuestion/" + localStorage.getItem("idTest") + "/" + id
    )
    .then((response) => {
      if (response.data) {
        //  localStorage.setItem("HrTestQuestion", JSON.stringify(response.data));
      }
    })
    .catch((err) => {
      console.log("okkkkkk err", err);
    });
};

const testResponse = (response, candidat, hrTest) => {
  console.log("object ", {
    response: response,
    candidat: candidat,
    hrTest: hrTest,
  });
  return axios
    .post(API_URL1 + "addResponseTest", {
      response: response,
      candidat: candidat,
      hrTest: hrTest,
    })
    .then((response) => {
      console.log("response : ", response);
      if (response.data) {
        ///localStorage.setItem("HrTest", JSON.stringify(response.data));
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
  testResponse,
};

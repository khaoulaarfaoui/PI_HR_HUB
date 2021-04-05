import {
  ADD_TEST_SUCCESS,
  FETCH_TEST_SUCCESS,
  EDIT_TEST_SUCCESS,
  DELETE_TEST_SUCCESS,
} from "./types";

import axios from "axios";

const URL = "http://localhost:8082/test/";
export const FetchTests = () => axios.get(URL + "allTests");
export const AddTests = () => axios.post(URL + "addTest");
export const UpdateTests = (id, updatedTest) =>
  axios.put(URL + "updateTest/" + id, updatedTest);
export const DeleteTests = (id) => axios.delete(URL + "deleteTest/" + id);

//FETCH-------------------
export const AllTests = () => (dispatch) => {
    FetchTests()
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_TEST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//ADD------------------
export const createTestSuccess = (data) => {
  return {
    type: ADD_TEST_SUCCESS,
    payload: data,
  };
};

export const CreateTest = (test) => {
  const data = {
      title: test.title,
      description: test.description,
      type: test.type,
      tags: test.tags,
      result: test.result,
      startDate: test.startDate,
      endDate: test.endDate,

  };

  return (dispatch) => {
    return axios
      .post(URL + "addTest", data)
      .then((response) => {
        const data = response.data;

        const normalizedData = {
            title: data.title,
            description: data.description,
            type: data.type,
            tags: data.tags,
            result: data.result,
            startDate: data.startDate,
            endDate: data.endDate,
        };

        dispatch(createTestSuccess(normalizedData));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

//UPDATE-----------------
export const UpdateTest = (id, data, onSuccess) => (dispatch) => {
    UpdateTests(id, data)
    .then((res) => {
      dispatch({
        type: EDIT_TEST_SUCCESS,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((error) => console.log(error));
};

//DELETE-----------------
export const DeleteTest = (id, onSuccess) => (dispatch) => {
    DeleteTests(id)
    .then((res) => {
      dispatch({
        type: DELETE_TEST_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((error) => console.log(error));
};

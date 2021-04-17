import {
  REGISTER_SUCCESS_HR_TEST,
  REGISTER_FAIL_HR_TEST,
  SET_MESSAGE_HR_TEST,
  REGISTER_SUCCESS_HR_TEST_QUESTION
} from "./types";

import HrTestService from "../../../service/HRservice/HrTestService";

export const findallHrTest = () => (dispatch) => {
  return HrTestService.findallHrTest().then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS_HR_TEST,
        payload: response.data.data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL_HR_TEST,
      });

      dispatch({
        type: SET_MESSAGE_HR_TEST,
        payload: message,
      });

      return Promise.reject();
    }
  );
};


export const findallHrTestQuestion = (id) => (dispatch) => {
  return HrTestService.findallHrTestQuestion(id).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS_HR_TEST_QUESTION,
        payload: response.data.data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL_HR_TEST,
      });

      dispatch({
        type: SET_MESSAGE_HR_TEST,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

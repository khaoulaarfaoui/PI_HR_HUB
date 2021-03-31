import {
  REGISTER_SUCCESS_CANDIDATE,
  REGISTER_FAIL_CANDIDATE,
  SET_MESSAGE_CANDIDATE,
} from "./types";

import CandidateService from "../../../service/candidateService/authservice";

export const register = (
  fullName,
  profilePhoto,
  birthday,
  phoneNumber,
  location,
  cv,
  education,
  experience,
  skills,
  user
) => (dispatch) => {
  return CandidateService.register(
    fullName,
    profilePhoto,
    birthday,
    phoneNumber,
    location,
    cv,
    education,
    experience,
    skills,
    user
  ).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS_CANDIDATE,
      });

      dispatch({
        type: SET_MESSAGE_CANDIDATE,
        payload: response.data,
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
        type: REGISTER_FAIL_CANDIDATE,
      });

      dispatch({
        type: SET_MESSAGE_CANDIDATE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

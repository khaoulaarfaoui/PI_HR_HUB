import {
  REGISTER_SUCCESS_CANDIDATE,
  REGISTER_FAIL_CANDIDATE,
  SET_MESSAGE_CANDIDATE,
  SET_CANDIDATE,
  REMOVE_CANDIDATE,
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
        payload: Promise.all([response.data, response.email]),
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
export function setCandidate(candidate) {
  return {
    type: SET_CANDIDATE,
    candiate: candidate,
  };
}

export function removeCandidate(_id) {
  return {
    type: REMOVE_CANDIDATE,
    _id: _id,
  };
}

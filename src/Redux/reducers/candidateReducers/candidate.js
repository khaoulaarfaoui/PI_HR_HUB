import {
  REGISTER_SUCCESS_CANDIDATE,
  REGISTER_FAIL_CANDIDATE,
} from "../../actions/candidate/types";

const candidate = JSON.parse(localStorage.getItem("candidate"));
console.log(candidate);

const initialState = {
  state: candidate
    ? { isLoggedIn: true, candidate }
    : { isLoggedIn: false, candidate: null },
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS_CANDIDATE:
      return {
        ...state,
        isLoggedIn: true,
        candidate: payload.candidate,
      };
    case REGISTER_FAIL_CANDIDATE:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}

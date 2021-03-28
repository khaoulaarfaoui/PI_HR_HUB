import { REGISTER_SUCCESS_HR, REGISTER_FAIL_HR } from "../../actions/hr/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS_HR:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case REGISTER_FAIL_HR:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

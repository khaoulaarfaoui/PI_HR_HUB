import {
  UPDATE_CANDIDATE,
  RETRIEVE_CANDIDATE,
} from "../../actions/candidate/types";
const candidate_update = JSON.parse(localStorage.getItem("candidate_update"));
const candidate = JSON.parse(localStorage.getItem("candidate"));
const initialState = candidate_update;
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CANDIDATE:
      if (candidate.id === payload.id) {
        return { ...state, payload };
      } else {
        return candidate;
      }
    case RETRIEVE_CANDIDATE:
      return payload;

    default:
      return state;
  }
}

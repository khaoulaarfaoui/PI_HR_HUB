import { combineReducers } from "redux";
import candidate from "./candidate";
import candidateCRUD from "./candidateCRUD";
import message from "./messages";

export default combineReducers({
  candidateCRUD,
  candidate,
  message,
});

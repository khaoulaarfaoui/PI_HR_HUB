import { combineReducers } from "redux";
import auth from "./auth";
import message from "./messages";

export default combineReducers({
  auth,
  message,
});

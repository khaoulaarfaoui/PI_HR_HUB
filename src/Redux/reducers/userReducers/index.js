import { combineReducers } from "redux";
import auth from "./auth";
import message from "./messages";
import events from "../eventReducers/EventReducer"

export default combineReducers({
  auth,
  message,
  events,
});

import { combineReducers } from "redux";
import auth from "./auth";
import message from "./messages";
import jobs from "../../jobReducers/job.reducer";

export default combineReducers({
  auth,
  message,
  jobData: jobs,
});

import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fetchJobs } from "../actions/job.actions";
import userReducer from "../reducers/userReducers";
import hrReducer from "../reducers/hrReducers";
import candidateReducer from "../reducers/candidateReducers";
import { AllEvents } from "../actions/event/EventAction";
import { AllTests } from "../actions/CandidateTest/CandidateAction";
import eventsReducer from "../reducers/eventReducers/EventReducer";
import TestReducers from "../reducers/TestReducer/TestReducer";
import jobs from "../reducers/jobReducers/job.reducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  userReducer,
  hrReducer,
  candidateReducer,
  TestReducers,
  eventsReducer,
  jobData: jobs,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
store.dispatch(AllTests());
store.dispatch(AllEvents());
//store.dispatch(fetchJobs());
export default store;

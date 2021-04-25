import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fetchJobs } from "../actions/job.actions";
import userReducer from "../reducers/userReducers";
import hrReducer from "../reducers/hrReducers";
import candidateReducer from "../reducers/candidateReducers";
import { AllEvents } from "../actions/event/EventAction";
import eventsReducer from "../reducers/eventReducers/EventReducer";
import jobs from "../reducers/jobReducers/job.reducer";
import teamsReducer from "../reducers/teamReducers/TeamReducer";
import candidate from "../reducers/candidateReducers/candidate";

const middleware = [thunk];

const rootReducer = combineReducers({
  testReducers,
  userReducer,
  hrReducer,
  candidateReducer,
  eventsReducer,
  jobData: jobs,
  teamsReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
store.dispatch(findallHrTest());
store.dispatch(fetchJobs());

export default store;

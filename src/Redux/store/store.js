import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fetchJobs } from "../actions/job.actions";
import userReducer from "../reducers/userReducers";
import hrReducer from "../reducers/hrReducers";
import candidateReducer from "../reducers/candidateReducers";
//import { AllEvents } from "../actions/event/EventAction";
//import { AllTeams } from "../actions/team/TeamAction";
import eventsReducer from "../reducers/eventReducers/EventReducer";
import teamsReducer from "../reducers/teamReducers/TeamReducer";
import jobs from "../jobReducers/job.reducer";

const middleware = [thunk];

const rootReducer = combineReducers({
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

//store.dispatch(AllTeams());
store.dispatch(fetchJobs());
export default store;

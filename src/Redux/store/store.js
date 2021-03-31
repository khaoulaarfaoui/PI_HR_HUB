import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fetchJobs } from "../actions/job.actions";
import userReducer from "../reducers/userReducers";
import hrReducer from "../reducers/hrReducers";
import candidateReducer from "../reducers/candidateReducers";
import { AllEvents } from "../actions/event/EventAction";
import eventsReducer from "../reducers/eventReducers/EventReducer";
import jobs from "../jobReducers/job.reducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  userReducer,
  hrReducer,
  candidateReducer,
  eventsReducer,
  jobData: jobs,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.dispatch(AllEvents());
store.dispatch(fetchJobs());
export default store;

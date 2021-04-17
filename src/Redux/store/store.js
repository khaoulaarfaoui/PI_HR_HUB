import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fetchJobs } from "../actions/job.actions";
import userReducer from "../reducers/userReducers";
import hrReducer from "../reducers/hrReducers";
import candidateReducer from "../reducers/candidateReducers";
import { AllEvents } from "../actions/event/EventAction";
import { findallHrTest } from "../actions/hrtest/hrtest";

import eventsReducer from "../reducers/eventReducers/EventReducer";
import jobs from "../reducers/jobReducers/job.reducer";
import testReducers from "../reducers/testReducers";

const middleware = [thunk];

const rootReducer = combineReducers({
  testReducers,
  userReducer,
  hrReducer,
  candidateReducer,
  eventsReducer
 
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
store.dispatch(findallHrTest());
store.dispatch(AllEvents());
store.dispatch(fetchJobs());

export default store;

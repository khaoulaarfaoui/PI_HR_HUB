import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducers";
import hrReducer from "../reducers/hrReducers";
import candidateReducer from "../reducers/candidateReducers";
const middleware = [thunk];

const rootReducer = combineReducers({
  userReducer,
  hrReducer,
  candidateReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

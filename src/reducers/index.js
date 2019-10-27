import { combineReducers } from "redux";
import loggedIn from "./login_reducer";

const rootReducer = combineReducers({
  loggedIn
});

export default rootReducer;

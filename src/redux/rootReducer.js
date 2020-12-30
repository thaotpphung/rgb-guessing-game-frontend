import { combineReducers } from "redux";
import authReducer from "./user/user.reducers";
import errorReducer from "./user/error.reducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
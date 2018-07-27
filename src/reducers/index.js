import { combineReducers } from "redux";
import courses from "./courseReducer";

// rootReducer file
const rootReducer = combineReducers({ courses });

export default rootReducer;

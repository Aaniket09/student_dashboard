import { combineReducers } from "redux";
import courses from "./courses";
import auth from "./auth";
import profile from "./profile"


export default combineReducers({ courses, auth, profile });
import { combineReducers } from "redux";
import authReducer from "./auth";
import filterReducer from "./filters.js";
import locationReducer from "./location.js";

export default combineReducers({
	auth: authReducer,
	filters: filterReducer,
	location: locationReducer,
});

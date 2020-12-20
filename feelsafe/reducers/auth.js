import {
	AUTH_SIGN_UP,
	AUTH_ERROR,
	AUTH_SIGN_OUT,
	AUTH_SIGN_IN,
} from "../actions/types.js";
import AsyncStorage from "@react-native-community/async-storage";

const DEFAULT_STATE = {
	user: {},
	isAuthenticated: false,
	token: null,
	errorMessage: null,
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case AUTH_SIGN_UP:
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true,
				errorMessage: null,
			};

		case AUTH_SIGN_IN:
			console.log(action.payload);
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true,
				errorMessage: null,
			};

		case AUTH_ERROR:
			return {
				...state,
				user: {},
				isAuthenticated: false,
				errorMessage: action.payload,
			};

		case AUTH_SIGN_OUT:
			return {
				...state,
				user: {},
				token: null,
				isAuthenticated: false,
			};

		default:
			return state;
	}
};

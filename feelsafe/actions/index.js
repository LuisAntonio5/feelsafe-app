import {
	AUTH_SIGN_UP,
	AUTH_ERROR,
	AUTH_SIGN_OUT,
	AUTH_SIGN_IN,
	UPDATE_LOCATION,
} from "./types.js";

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import API from "../helpers/API.js";

export const signUp = (data) => {
	return async (dispatch) => {
		try {
			const { firstName, lastName, password, email } = data;

			const res = await axios.post(API + "/users/signup", {
				firstName,
				lastName,
				password,
				email,
			});

			dispatch({
				type: AUTH_SIGN_UP,
				payload: { token: res.data.token },
			});
			try {
				await AsyncStorage.setItem("@token", res.data.token);
				await AsyncStorage.setItem(
					"@user",
					JSON.stringify(res.data.user)
				);
				axios.defaults.headers.common["token"] = res.data.token;
			} catch (err) {
				console.log("error", err);
			}
		} catch (err) {
			console.log("err", err.message);
			dispatch({
				type: AUTH_ERROR,
				payload:
					"Couldn't sign you up. Check connection and try again.",
			});
		}
	};
};

export const signIn = (data) => {
	return async (dispatch) => {
		try {
			console.log(API);
			const res = await axios.post(API + "/users/signin", {
				email: data.email,
				password: data.password,
			});
			console.log(res);

			dispatch({
				type: AUTH_SIGN_IN,
				payload: { token: res.data.token },
			});
			try {
				console.log(res.data);
				await AsyncStorage.setItem("@token", res.data.token);
				await AsyncStorage.setItem(
					"@user",
					JSON.stringify(res.data.user)
				);
				axios.defaults.headers.common["token"] = res.data.token;
			} catch (err) {
				console.log("error", err);
			}
		} catch (err) {
			console.log(err);
			dispatch({
				type: AUTH_ERROR,
				payload: "Error",
			});
		}
	};
};

export const signOut = () => {
	return async (dispatch) => {
		try {
			await AsyncStorage.removeItem("@token");
			axios.defaults.headers.common["token"] = null;
		} catch (err) {
			console.log("err", err);
		}

		dispatch({
			type: AUTH_SIGN_OUT,
		});
	};
};

export const updateLocation = (data) => {
	return (dispatch) => {
		dispatch({
			type: UPDATE_LOCATION,
			payload: data,
		});
	};
};

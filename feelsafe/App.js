import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import {
	useFonts,
	Lato_400Regular,
	Lato_900Black,
} from "@expo-google-fonts/lato";
import {
	Raleway_400Regular,
	Raleway_700Bold,
} from "@expo-google-fonts/raleway";

import HomeScreen from "./pages/Home.js";
import FilterScreen from "./pages/Filters.js";
import Onboarding from "./pages/Onboarding.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import SearchLocation from "./pages/SearchLocation.js";
import SettingsScreen from "./pages/Settings.js";
import ChangePasswordScreen from "./pages/ChangePassword.js";
import PlaceScreen from "./pages/Place.js";
import ReviewScreen from "./pages/Review.js";

import reducers from "./reducers/";

const Stack = createStackNavigator();

export default function App() {
	const [token, setToken] = useState(null);
	const [authLoaded, setAuthLoaded] = useState(false);
	const [initialRoute, setInitialRoute] = useState(null);
	const screenOptions = {
		headerLeft: null,
		title: "",
		headerStyle: { height: 0 },
	};

	useEffect(() => {
		// KEEP SPLASHSCREEN
		const keepSplashScreen = async () => {
			try {
				await SplashScreen.preventAutoHideAsync();
			} catch (err) {
				console.warn(err);
			}
		};
		keepSplashScreen();

		const getToken = async () => {
			try {
				const token = await AsyncStorage.getItem("@token");
				if (token) {
					setToken(token);
					axios.defaults.headers.common["token"] = token;
					setInitialRoute("Home");
				} else {
					console.log("asd");
					setInitialRoute("Onboarding");
				}
			} catch (err) {
				console.log(err);
				setInitialRoute("Onboarding");
				setAuthLoaded(true);
			}
		};
		getToken();
	}, []);

	let [fontsLoaded] = useFonts({
		Lato_400Regular,
		Lato_900Black,
		Raleway_400Regular,
		Raleway_700Bold,
	});

	useEffect(() => {
		console.log(initialRoute);
		setAuthLoaded(true);
	}, [initialRoute]);

	useEffect(() => {
		const hideSplashScreen = async () => {
			if (fontsLoaded && authLoaded) {
				try {
					await SplashScreen.hideAsync();
				} catch (err) {
					console.log(err);
				}
			}
		};
		hideSplashScreen();
	}, [fontsLoaded, authLoaded]);

	if (!fontsLoaded || !authLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Provider
				store={createStore(
					reducers,
					{ auth: { token, isAuthenticated: token ? true : false } },
					applyMiddleware(reduxThunk)
				)}
			>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName={initialRoute}
						screenOptions={screenOptions}
					>
						<Stack.Screen
							name="Onboarding"
							component={Onboarding}
						/>
						<Stack.Screen name="Login" component={Login} />
						<Stack.Screen name="Signup" component={Signup} />
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Filters" component={FilterScreen} />
						<Stack.Screen
							name="SearchLocation"
							component={SearchLocation}
						/>
						<Stack.Screen
							name="Settings"
							component={SettingsScreen}
						/>
						<Stack.Screen
							name="ChangePassword"
							component={ChangePasswordScreen}
						/>
						<Stack.Screen name="Place" component={PlaceScreen} />
						<Stack.Screen name="Review" component={ReviewScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}

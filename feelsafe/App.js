import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from "expo";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
	useFonts,
	Lato_400Regular,
	Lato_900Black,
} from "@expo-google-fonts/lato";
import {
	Raleway_400Regular,
	Raleway_700Bold
} from "@expo-google-fonts/raleway";

import HomeScreen from "./pages/Home.js";
import FilterScreen from "./pages/Filters.js";

const Stack = createStackNavigator();

const initialState = {
	filters: {
		categories: [],
		rating: 0,
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_CATEGORY':
			return { ...state, ...action.payload }
		case 'UPDATE_RATING':
			return { ...state, ...action.payload }
	}
	return state
}

let store = createStore(reducer);

export default function App() {
	let [fontsLoaded] = useFonts({
		Lato_400Regular,
		Lato_900Black,
		Raleway_400Regular,
		Raleway_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	else {
		return (
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">

						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Filters" component={FilterScreen} />

					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}
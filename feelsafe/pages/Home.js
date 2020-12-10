import { StatusBar } from "expo-status-bar";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import {
	useFonts,
	Lato_400Regular,
	Lato_900Black,
} from "@expo-google-fonts/lato";
import {
	Raleway_400Regular,
	Raleway_700Bold,
} from "@expo-google-fonts/raleway";

import MainHeader from "../components/MainHeader";
import BottomBar from "../components/BottomBar.js";

const defaultCenter = {
	latitude: 40.2115,
	longitude: -8.4292,
};

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.mainView}>
			<MapView
				provider={PROVIDER_GOOGLE} // remove if not using Google Maps
				style={styles.map}
				region={{
					...defaultCenter,
					latitudeDelta: 0.1,
					longitudeDelta: 0.06,
				}}
				showsUserLocation={true}
			></MapView>
			<MainHeader />
			<BottomBar navigation={navigation} />
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		height: "100%",
		width: "100%",
	},

	map: {
		flex: 1,
	},

	upperView: {
		position: "absolute",
		top: 50,
		width: "100%",
		alignItems: "center",
	},
});

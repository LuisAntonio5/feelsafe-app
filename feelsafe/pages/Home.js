import { StatusBar } from "expo-status-bar";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	TouchableWithoutFeedback,
} from "react-native";
import * as Location from "expo-location";
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
import { useSelector } from "react-redux";

import MainHeader from "../components/MainHeader";
import SliderCard from "../components/SliderCard";
import BottomBar from "../components/BottomBar.js";

import jsonPlaces from "../places.json";

const defaultCenter = {
	latitude: 40.2115,
	longitude: -8.4292,
	latitudeDelta: 0.1,
	longitudeDelta: 0.06,
};

const SliderCardContainer = ({ navigation, places }) => {
	return places.map((item) => {
		return (
			<SliderCard
				name={item.name}
				type={item.types[0] + "-" + item.types[1]}
				numStars={3}
				nReviews={10}
				key={item.place_id}
				place={item}
				navigation={navigation}
			/>
		);
	});
};

export default function HomeScreen(props) {
	const { navigation } = props;
	const [region, setRegion] = useState({
		latitude: 40.2115,
		longitude: -8.4292,
		latitudeDelta: 0.1,
		longitudeDelta: 0.06,
	});
	const [mapRegion, setMapRegion] = useState({
		latitude: 40.2115,
		longitude: -8.4292,
		latitudeDelta: 0.1,
		longitudeDelta: 0.06,
	});
	const [currentLocation, setCurrentLocation] = useState(null);
	const [places, setPlaces] = useState(jsonPlaces.results);
	const [bottomBarIsActive, setBottomBarIsActive] = useState(true);
	const locationState = useSelector((store) => store.location);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== "granted") {
				return;
			}
			if (props.location) {
				setRegion({
					latitude: props.location.lat,
					longitude: props.location.lng,
					latitudeDelta: 0.1,
					longitudeDelta: 0.06,
				});
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			setCurrentLocation(location);
			if (location) {
				const newRegion = {
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					latitudeDelta: 0.1,
					longitudeDelta: 0.06,
				};
				setRegion(newRegion);
			}
		})();
	}, []);

	const onRegionChange = (region) => {
		setBottomBarIsActive(true);
	};

	const onPressSearchHere = () => {
		setBottomBarIsActive(false);
	};

	const onPressSearch = () => {
		navigation.navigate("SearchLocation");
	};

	const onPressLocation = () => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== "granted") {
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setCurrentLocation(location);
			if (location) {
				const newRegion = {
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					latitudeDelta: 0.1,
					longitudeDelta: 0.06,
				};
				setRegion(newRegion);
			}
		})();
	};

	const onPressMap = () => {
		setBottomBarIsActive(true);
	};

	return (
		<View style={styles.mainView}>
			<TouchableWithoutFeedback onPress={onPressMap}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={styles.map}
					region={region}
					showsUserLocation={true}
					onRegionChange={onRegionChange}
				></MapView>
			</TouchableWithoutFeedback>
			<MainHeader onPress={onPressSearch} />
			{!bottomBarIsActive && (
				<ScrollView horizontal={true} style={styles.cardsContainer}>
					<SliderCardContainer
						places={places}
						navigation={props.navigation}
					/>
				</ScrollView>
			)}
			{bottomBarIsActive && (
				<BottomBar
					navigation={navigation}
					onPressLocation={onPressLocation}
					onPressSearch={onPressSearchHere}
				/>
			)}
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

	cardsContainer: {
		position: "absolute",
		bottom: RFValue(50, 898),
		paddingLeft: RFValue(20, 898),
	},
});

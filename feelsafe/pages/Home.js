import { StatusBar } from "expo-status-bar";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import React, { useState, useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import {
	TouchableWithoutFeedback,
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	ScrollView,
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

import MainHeader from "../components/MainHeader";
import BottomBar from "../components/BottomBar.js";
import { connect } from "react-redux";
import * as actions from "../actions";
import SliderCard from "../components/SliderCard.js";

import API from "../helpers/API.js";
import axios from "axios";
import typeTranslator from "../helpers/typeTranslator.js";

const SliderCardContainer = ({ navigation, places }) => {
	return places.map((item) => {
		console.log(item.photos ? item.photos[0].photo_reference : null);
		return (
			<SliderCard
				name={item.name}
				type={typeTranslator[item.types[0]]}
				numStars={item.ratingFeelsafe ?? 0}
				nReviews={item.nReviews ?? 0}
				key={item.place_id}
				place={item}
				navigation={navigation}
				photoReference={
					item.photos ? item.photos[0].photo_reference : null
				}
			/>
		);
	});
};

function HomeScreen(props) {
	const { navigation } = props;
	const ref = useRef(null);
	const [bottomBarIsActive, setBottomBarIsActive] = useState(true);
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== "granted") {
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			if (location) {
				const newRegion = {
					lat: location.coords.latitude,
					lng: location.coords.longitude,
					latitudeDelta: 0.1,
					longitudeDelta: 0.06,
				};
				props.updateLocation(newRegion);
			}
		})();
	}, []);

	useEffect(() => {
		ref.current.animateToRegion(props.location, 500);
	}, [props.location]);

	const onRegionChange = (region) => {
		setBottomBarIsActive(true);
	};

	const onPressSearchHere = async () => {
		const camera = await ref.current.getCamera();
		try {
			const result = await axios.post(API + `/places/`, {
				lat: camera.center.latitude,
				long: camera.center.longitude,
			});
			setPlaces(result.data.places);
			setBottomBarIsActive(false);
		} catch (err) {
			console.log(err);
		}
	};

	const onPressMap = () => {
		setBottomBarIsActive(true);
	};

	const onPressLocation = () => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== "granted") {
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			if (location) {
				const newRegion = {
					lat: location.coords.latitude,
					lng: location.coords.longitude,
					latitudeDelta: 0.1,
					longitudeDelta: 0.06,
				};
				console.log(newRegion);
				props.updateLocation(newRegion);
			}
		})();
	};

	const onPressSearch = () => {
		navigation.navigate("SearchLocation");
	};

	return (
		<View style={styles.mainView}>
			<TouchableWithoutFeedback onPress={onPressMap}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={styles.map}
					showsUserLocation={true}
					onRegionChange={onRegionChange}
					ref={ref}
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

function mapStateToProps(state) {
	return {
		location: state.location,
	};
}

export default connect(mapStateToProps, actions)(HomeScreen);

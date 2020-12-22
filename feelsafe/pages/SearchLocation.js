import React from "react";
import {
	TouchableOpacity,
	TouchableWithoutFeedback,
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	Keyboard,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { connect } from "react-redux";

import FeelsafeLogo from "../assets/feelsafe-lettering";

import colors from "../helpers/Colors.js";
import * as actions from "../actions";

function SearchLocation(props) {
	const goBack = () => {
		props.navigation.goBack();
	};

	const handleKeyboardDismiss = () => {
		Keyboard.dismiss();
	};
	return (
		<TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
			<View style={styles.mainView}>
				<View style={styles.logo}>
					<TouchableOpacity onPress={goBack}>
						<Icon
							name="arrowleft"
							size={RFValue(32, 898)}
							color={colors.lightGreen}
						/>
					</TouchableOpacity>
					<FeelsafeLogo
						height={RFValue(80, 898)}
						width={RFValue(240, 898)}
					/>
					<Icon
						name="arrowleft"
						size={RFValue(32, 898)}
						color="white"
					/>
				</View>
				<GooglePlacesAutocomplete
					placeholder="Procurar"
					autoFocus={true}
					fetchDetails={true}
					onPress={(data, details = null) => {
						console.log(details.geometry.location)
						props.updateLocation(details.geometry.location);
						props.navigation.navigate("Home");
					}}
					query={{
						key: "AIzaSyBd0ccupXZYb4NY3RB2V_qaMZTT7NQROwE",
						language: "pt",
						components: "country:pt",
					}}
					styles={{
						textInputContainer: {
							marginTop: RFValue(30, 898),
							width: "85%",
							alignSelf: "center",
							backgroundColor: "rgba(0,0,0,0)",
							borderBottomWidth: 1,
							borderBottomColor: colors.lightGreen,
							borderTopWidth: 0,
						},
						textInput: {
							// TEXT INPUT STYLE
							color: "black",
							fontSize: RFValue(18, 812),
							fontFamily: "Lato_900Black",
							padding: 0,
						},
						description: {
							color: colors.grey,
							fontSize: RFValue(16, 812),
							fontFamily: "Lato_900Black",
							justifyContent: "center",
						},
						predefinedPlacesDescription: {
							// TEXTO COR DE CURRENT LOCATION
							color: colors.grey,
							fontFamily: "Lato_900Black",
						},
						listView: {
							width: "83%",
							alignSelf: "center",
						},
						separator: {
							backgroundColor: colors.lightGreen,
						},
						row: {
							height: RFValue(60, 812),
							paddingLeft: 0,
						},
						poweredContainer: {
							height: "100%",
						},
					}}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps, actions)(SearchLocation);

const styles = StyleSheet.create({
	mainView: {
		backgroundColor: "white",
		height: "100%",
		width: "100%",
	},

	logo: {
		width: "80%",
		flexDirection: "row",
		marginTop: RFValue(84, 898),
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

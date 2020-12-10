import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import LocationButton from "../assets/location-button";
import FeelSafeLettering from "../assets/feelsafe-lettering";
import Icon from "react-native-vector-icons/AntDesign";

import MainButton from "../components/MainButton.js";
import colors from "../helpers/Colors";

function Onboarding(props) {
	const onPressLogin = () => {
		props.navigation.navigate("Login");
	};

	const onPressSignup = () => {
		props.navigation.navigate("Singup");
	};

	const onPressSkip = () => {
		props.navigation.navigate("Home");
	};
	return (
		<View style={styles.mainView}>
			<View style={styles.header}>
				<LocationButton
					height={RFValue(100, 812)}
					width={RFValue(100, 812)}
				/>
				<FeelSafeLettering
					height={RFValue(120, 812)}
					width={RFValue(260, 812)}
				/>
			</View>
			<Text style={styles.text}>Olá!</Text>
			<View>
				<MainButton
					backgroundGreen={true}
					text="Login"
					onPress={onPressLogin}
					textStyle={{ fontSize: RFValue(20, 898) }}
				/>
				<View style={{ marginVertical: RFValue(36, 898) }}>
					<MainButton
						backgroundGreen={true}
						text="Signup"
						onPress={onPressLogin}
						textStyle={{ fontSize: RFValue(20, 898) }}
					/>
				</View>
				<TouchableOpacity
					style={styles.skipbutton}
					onPress={onPressSkip}
				>
					<Text style={styles.guestText}>
						Continuar como convidado
					</Text>
					<Icon
						color={colors.grey}
						name="arrowright"
						size={RFValue(16, 898)}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		height: "100%",
		width: "100%",
		backgroundColor: "white",
		alignItems: "center",
		paddingVertical: RFValue(80, 812),
		justifyContent: "space-between",
	},

	header: {
		alignItems: "center",
	},

	container: {
		height: RFValue(100, 898),
		backgroundColor: colors.secGreen,
		borderRadius: RFValue(20, 898),
		width: "90%",
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		textAlign: "center",
		fontFamily: "Lato_900Black",
		fontSize: RFValue(78, 898),
		width: "80%",
		color: colors.lightGreen,
	},

	skipbutton: {
		flexDirection: "row",
		alignItems: "center",
	},

	guestText: {
		fontFamily: "Raleway_700Bold",
		fontSize: RFValue(16, 898),
		color: colors.grey,
		marginRight: RFValue(16, 898),
	},
});

export default Onboarding;

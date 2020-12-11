import React, { useState } from "react";
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

import CustomInput from "../components/CustomInput.js";
import colors from "../helpers/Colors";

const regex = {
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

	password: /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
};

function Login(props) {
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		email: null,
		password: null,
	});

	const handleChangeText = (text, fieldName) => {
		setFormValues((prev) => ({ ...prev, [fieldName]: text }));
		if (!text.match(regex[fieldName])) {
			setErrors((prev) => ({ ...prev, [fieldName]: "Invalid Field" }));
			setButtonDisabled(true);
		} else {
			setErrors((prev) => ({ ...prev, [fieldName]: null }));
			setButtonDisabled(checkDisabled());
		}
	};

	const handleKeyboardDismiss = () => {
		Keyboard.dismiss();
	};

	const checkDisabled = () => {
		var keys = Object.keys(errors);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (errors[key]) {
				return true;
			}
		}
		return false;
	};

	const validateForm = (field) => { };

	const onPressSignup = () => {
		props.navigation.navigate("Signup");
	};

	const onPressLogin = () => { };

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
			<View style={styles.form}>
				<CustomInput
					labelText="Email"
					fieldName="email"
					autoCompleteType="name"
					onChangeText={handleChangeText}
					errors={errors}
					validateForm={validateForm}
				/>
				<CustomInput
					labelText="Password"
					fieldName="password"
					secure={true}
					onChangeText={handleChangeText}
					errors={errors}
					validateForm={validateForm}
				/>
			</View>
			<MainButton
				backgroundGreen={true}
				text="Login"
				onPress={onPressLogin}
				buttonStyle={styles.button}
			/>
			<View style={styles.signupView}>
				<Text style={styles.signupSimpleText}>
					Ainda não tens conta?
				</Text>
				<TouchableOpacity onPress={onPressSignup}>
					<Text style={styles.signupBoldText}>Regista-te Aqui</Text>
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
		paddingHorizontal: "10%",
	},

	header: {
		alignItems: "center",
	},

	skipbutton: {
		flexDirection: "row",
		alignItems: "center",
	},

	guestText: {
		fontFamily: "Raleway_700Bold",
		fontSize: RFValue(16, 898),
		color: colors.secGreen,
		marginRight: RFValue(16, 898),
	},

	form: {
		marginTop: RFValue(20, 898),
		width: "85%",
	},

	button: {
		marginTop: RFValue(32, 898),
		width: "45%",
	},

	signupView: {
		flexDirection: "row",
		marginTop: RFValue(100, 898),
	},

	signupSimpleText: {
		fontSize: RFValue(16, 898),
		fontFamily: "Lato_400Regular",
		color: colors.grey,
		marginRight: RFValue(10, 898),
	},

	signupBoldText: {
		fontSize: RFValue(16, 898),
		fontFamily: "Lato_900Black",
		color: "black",
	},
});

export default Login;
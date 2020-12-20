import React, { useState, useEffect } from "react";
import { CommonActions } from "@react-navigation/native";
import {
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

import LocationButton from "../assets/location-button";
import FeelSafeLettering from "../assets/feelsafe-lettering";
import MainButton from "../components/MainButton.js";
import CustomInput from "../components/CustomInput.js";
import Loading from "../components/Loading.js";

import ResetAndNavigate from "../helpers/resetAndNavigate.js";
import colors from "../helpers/Colors";
import * as actions from "../actions";

const regex = {
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

	password: /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
	firstName: /.*/,
	lastName: /.*/,
};

function Signup(props) {
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
		lastName: "",
		firstName: "",
		confirmPassword: "",
	});
	const [errors, setErrors] = useState({
		email: null,
		password: null,
		lastName: null,
		firstName: null,
		confirmPassword: null,
	});
	const authState = useSelector((store) => store.auth);
	const [loading, setLoading] = useState(false);

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

	const onPressSignup = async () => {
		if (formValues["password"] != formValues["confirmPassword"]) {
			Alert.alert(
				"Passwords Must Match",
				"Please confirm your password.",
				[{ text: "Ok" }]
			);
			return;
		}

		setLoading(true);
		await props.signUp(formValues);
		setLoading(false);
	};

	const onPressBack = () => {
		props.navigation.goBack();
	};

	useEffect(() => {
		setLoading(false);
		if (authState.isAuthenticated) {
			ResetAndNavigate(props.navigation, "Home");
		} else {
			//Alert.alert(
			//"Error",
			//"Por favor tente novamente.",
			//[{ text: "Ok" }],
			//{
			//cancelable: false,
			//}
			//);
		}
	}, [authState.isAuthenticated]);

	return (
		<TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
			<View style={styles.mainView}>
				<View style={styles.header}>
					{loading && <Loading />}
					{!loading && (
						<LocationButton
							height={RFValue(100, 812)}
							width={RFValue(100, 812)}
						/>
					)}
					<FeelSafeLettering
						height={RFValue(120, 812)}
						width={RFValue(260, 812)}
					/>
				</View>
				<View style={styles.form}>
					<CustomInput
						labelText="Primeiro Nome"
						fieldName="firstName"
						autoCompleteType="name"
						onChangeText={handleChangeText}
						errors={errors}
					/>
					<CustomInput
						labelText="Último Nome"
						fieldName="lastName"
						autoCompleteType="name"
						onChangeText={handleChangeText}
						errors={errors}
					/>
					<CustomInput
						labelText="Email"
						fieldName="email"
						autoCompleteType="name"
						onChangeText={handleChangeText}
						errors={errors}
					/>
					<CustomInput
						labelText="Password"
						fieldName="password"
						secure={true}
						onChangeText={handleChangeText}
						errors={errors}
					/>
					<CustomInput
						labelText="Confirm Password"
						fieldName="confirmPassword"
						secure={true}
						onChangeText={handleChangeText}
						errors={errors}
					/>
				</View>
				<View style={styles.buttonView}>
					<MainButton
						backgroundGreen={false}
						text="Voltar"
						onPress={onPressBack}
						buttonStyle={styles.button}
					/>

					<MainButton
						backgroundGreen={true}
						text="Registar"
						onPress={onPressSignup}
						buttonStyle={styles.button}
						disabled={buttonDisabled}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	mainView: {
		height: "100%",
		width: "100%",
		backgroundColor: "white",
		alignItems: "center",
		paddingVertical: RFValue(60, 812),
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
		marginTop: RFValue(12, 898),
		width: "85%",
	},

	button: {
		marginTop: RFValue(16, 898),
		width: "45%",
	},

	buttonView: {
		width: "100%",
		paddingHorizontal: "10%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default connect(() => ({}), actions)(Signup);

import React, { useState, useEffect } from "react";
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

	const validateForm = (field) => {};

	const onPressSignup = () => {
		props.navigation.navigate("Signup");
	};

	const onPress = async () => {
		setLoading(true);
		await props.signIn(formValues);
		//Alert.alert(
		//"Error",
		//"Não foi possível concluir o registo. Por favor, tente outra vez.",
		//[{ text: "Ok" }]
		//);

		setLoading(false);
	};

	useEffect(() => {
		setLoading(false);
		if (authState.isAuthenticated) {
			ResetAndNavigate(props.navigation, "Home");
		} else {
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
						labelText="Email"
						fieldName="email"
						autoCompleteType="name"
						onChangeText={handleChangeText}
						errors={{}}
						validateForm={validateForm}
					/>
					<CustomInput
						labelText="Password"
						fieldName="password"
						secure={true}
						onChangeText={handleChangeText}
						errors={{}}
						validateForm={validateForm}
					/>
				</View>
				<MainButton
					backgroundGreen={true}
					text="Login"
					onPress={onPress}
					buttonStyle={styles.button}
					disabled={buttonDisabled}
				/>
				<View style={styles.signupView}>
					<Text style={styles.signupSimpleText}>
						Ainda não tens conta?
					</Text>
					<TouchableOpacity onPress={onPressSignup}>
						<Text style={styles.signupBoldText}>
							Regista-te Aqui
						</Text>
					</TouchableOpacity>
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
		paddingVertical: RFValue(80, 812),
		paddingHorizontal: "10%",
	},

	header: {
		alignItems: "center",
	},
	form: {
		marginTop: RFValue(20, 898),
		width: "85%",
	},

	button: {
		marginTop: RFValue(16, 898),
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

export default connect(() => ({}), actions)(Login);

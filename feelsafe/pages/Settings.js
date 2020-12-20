import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

import LocationButton from "../assets/location-button";
import FeelSafeLettering from "../assets/feelsafe-lettering";
import Icon from "react-native-vector-icons/AntDesign";
import MainButton from "../components/MainButton.js";
import ResetAndNavigate from "../helpers/resetAndNavigate.js";

import CustomInput from "../components/CustomInput.js";
import colors from "../helpers/Colors";
import * as actions from "../actions";

const regex = {
    //to validate against characters we don't want to allow
    firstName: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/,
    lastName: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/,

    //email
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

function SettingsScreen(props) {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formValues, setFormValues] = useState({
        email: "",
        firstName: "",
        lastName: "",
    });
    const [errors, setErrors] = useState({
        email: null,
        firstName: null,
        ultimoNome: null,
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

    const validateForm = (field) => {};

    const onPressChangePassword = () => {
        props.navigation.navigate("ChangePassword");
    };

    const onPressHome = () => {
        props.navigation.navigate("Home");
    };

    const onPressSignout = () => {
        props.signOut();
        ResetAndNavigate(props.navigation, "Onboarding");
    };

    return (
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
            <View style={styles.mainView}>
                <View style={styles.header}>
                    <Text style={styles.title}>Definições</Text>
                </View>
                <View style={styles.form}>
                    <CustomInput
                        labelText="Primeiro nome"
                        fieldName="firstName"
                        autoCompleteType="name"
                        onChangeText={handleChangeText}
                        errors={errors}
                        validateForm={validateForm}
                    />
                    <CustomInput
                        labelText="Último nome"
                        fieldName="lastName"
                        autoCompleteType="name"
                        onChangeText={handleChangeText}
                        errors={errors}
                        validateForm={validateForm}
                    />
                </View>
                <MainButton
                    backgroundGreen={true}
                    text="Alterar palavra passe"
                    onPress={onPressChangePassword}
                    buttonStyle={styles.button}
                />
                <View style={styles.subcontainerRow}>
                    <MainButton
                        backgroundGreen={false}
                        text="Cancelar"
                        onPress={onPressHome}
                        buttonStyle={styles.buttonRow}
                    />
                    <MainButton
                        backgroundGreen={true}
                        text="Guardar"
                        onPress={onPressHome}
                        buttonStyle={styles.buttonRow}
                    />
                </View>
                <MainButton
                    backgroundGreen={false}
                    text="Sign Out"
                    onPress={onPressSignout}
                    buttonStyle={{ marginTop: RFValue(16, 898) }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    subcontainerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: RFValue(280, 898),
    },
    buttonRow: {
        width: "40%",
        marginRight: RFValue(10, 898),
        marginLeft: RFValue(10, 898),
    },
    title: {
        fontWeight: "900",
        fontSize: 40,
        lineHeight: 48,
        display: "flex",
        alignItems: "center",
        color: "#46EBD0",
        fontFamily: "Lato_900Black",
        fontStyle: "normal",
        marginBottom: RFValue(40, 898),
    },
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
        width: "85%",
    },

    button: {
        marginTop: RFValue(32, 898),
        width: "85%",
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

export default connect(() => ({}), actions)(SettingsScreen);

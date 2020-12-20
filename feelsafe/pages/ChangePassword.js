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
import MainButton from "../components/MainButton.js";

import CustomInput from "../components/CustomInput.js";
import colors from "../helpers/Colors";

const regex = {
    password: /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
};

function ChangePasswordScreen(props) {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formValues, setFormValues] = useState({
        password: "",
        newPassword: "",
        repeatNewPassword: "",
    });
    const [errors, setErrors] = useState({
        password: null,
        newPassword: null,
        repeatNewPassword: null,
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

    const onPressHome = () => {
        props.navigation.navigate("Home");
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.header}>
                <Text style={styles.title}>Alterar password</Text>
            </View>
            <View style={styles.form}>
                <CustomInput
                    labelText="Password atual"
                    fieldName="password"
                    secure={true}
                    onChangeText={handleChangeText}
                    errors={errors}
                    validateForm={validateForm}
                />
                <CustomInput
                    labelText="Nova password"
                    fieldName="newPassword"
                    secure={true}
                    onChangeText={handleChangeText}
                    errors={errors}
                    validateForm={validateForm}
                />
                <CustomInput
                    labelText="Repetir nova password"
                    fieldName="repeatNewPassword"
                    secure={true}
                    onChangeText={handleChangeText}
                    errors={errors}
                    validateForm={validateForm}
                />
            </View>
            <View style={styles.subcontainerRow}>
                <MainButton
                    backgroundGreen={false}
                    text="Cancelar"
                    onPress={onPressHome}
                    buttonStyle={styles.buttonRow}
                />
                <MainButton
                    backgroundGreen={true}
                    text="Confirmar"
                    onPress={onPressHome}
                    buttonStyle={styles.buttonRow}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    subcontainerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: RFValue(270, 898),
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
        textAlign: "center",
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
        marginTop: RFValue(20, 898),
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

export default ChangePasswordScreen;

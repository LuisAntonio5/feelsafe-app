import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import colors from "../helpers/Colors.js";

export default function MainButton(props) {
    const { backgroundGreen, text, onPress, disabled } = props;

    const styles = StyleSheet.create({
        button: {
            backgroundColor: backgroundGreen ? colors.secGreen : "white",
            borderRadius: RFValue(5, 898),
            borderWidth: 3,
            borderColor: colors.secGreen,

            opacity: disabled ? 0.3 : 1,

            paddingVertical: RFValue(10, 898),
            paddingHorizontal: RFValue(20, 898),
            borderRadius: RFValue(200, 898),

            alignItems: "center",

            ...props.buttonStyle,
        },

        text: {
            color: backgroundGreen ? "white" : colors.secGreen,
            fontSize: RFValue(18, 898),
            fontFamily: "Raleway_700Bold",
            ...props.textStyle,
        },
    });

    return (
        <TouchableOpacity
            disabled={disabled}
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

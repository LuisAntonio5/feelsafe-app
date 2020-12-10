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
    const { backgroundGreen, text, onPress } = props;

    const styles = StyleSheet.create({
        button: {
            backgroundColor: backgroundGreen ? colors.secGreen : "white",
            borderRadius: RFValue(5, 898),
            borderWidth: 2,
            borderColor: colors.secGreen,

            paddingVertical: RFValue(10, 898),
            paddingHorizontal: RFValue(20, 898),
            borderRadius: RFValue(200, 898),

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,

            alignItems: "center",

            ...props.buttonStyle,
        },

        text: {
            color: backgroundGreen ? "white" : colors.secGreen,
            fontSize: RFValue(16, 898),
            fontFamily: "Lato_400Regular",
            ...props.textStyle,
        },
    });

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

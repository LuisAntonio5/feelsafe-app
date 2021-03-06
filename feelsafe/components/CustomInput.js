import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import colors from "../helpers/Colors";

const CustomInput = (props) => {
    const red = "#cd5e41";

    if (props.errors) {
        var borderColor = props.errors[props.fieldName] ? red : colors.secGreen;
        var color = props.errors[props.fieldName] ? red : colors.secGreen;
    } else {
        var borderColor = "#edc2a0";
        var color = colors.secGreen;
    }

    return (
        <View style={{ width: "100%" }}>
            {props.labelText && (
                <Text style={{ ...styles.textLabel, color }}>
                    {props.labelText}
                </Text>
            )}
            <TextInput
                style={{ ...styles.textInput, borderColor }}
                textAlign="left"
                secureTextEntry={props.secure}
                placeholder={props.placeholder}
                placeholderTextColor={colors.grey}
                keyboardType="default"
                onChangeText={(text) => {
                    props.onChangeText(text, props.fieldName);
                }}
            />
            {props.errors && (
                <Text style={styles.errorText}>
                    {props.errors[props.fieldName]}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textLabel: {
        fontFamily: "Lato_400Regular",
        fontSize: RFValue(16, 812),
        paddingLeft: RFValue(30, 898),
        marginBottom: RFValue(15, 898),
    },

    textInput: {
        fontSize: RFValue(14, 812),
        color: colors.grey,
        fontFamily: "Lato_400Regular",
        borderWidth: 1,
        paddingVertical: RFValue(10, 898),
        paddingHorizontal: RFValue(30, 898),
        borderRadius: RFValue(200, 898),
    },

    errorText: {
        fontSize: RFValue(14, 812),
        fontFamily: "Lato_900Black",
        color: "#cd5e41",
        paddingLeft: RFValue(30, 898),
        marginBottom: RFValue(10, 898),
    },
});

export default CustomInput;

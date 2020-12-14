import React from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";

import colors from "../helpers/Colors.js";

const StarsContainer = (props) => {
    const { size, num, color1, color2 } = props;
    const styles = StyleSheet.create({
        mainView: {
            flexDirection: "row",
            marginBottom: RFValue(5, 898),
        },
    });
    return (
        <View style={styles.mainView}>
            <Icon
                color={1 <= num ? color1 : color2}
                size={size ?? RFValue(22, 898)}
                name="star"
                style={props.style}
            />
            <Icon
                color={2 <= num ? color1 : color2}
                size={size ?? RFValue(22, 898)}
                name="star"
                style={props.style}
            />
            <Icon
                color={3 <= num ? color1 : color2}
                size={size ?? RFValue(22, 898)}
                name="star"
                style={props.style}
            />
            <Icon
                color={4 <= num ? color1 : color2}
                size={size ?? RFValue(22, 898)}
                style={props.style}
                name="star"
            />
            <Icon
                color={5 <= num ? color1 : color2}
                size={size ?? RFValue(22, 898)}
                name="star"
            />
        </View>
    );
};

export default StarsContainer;

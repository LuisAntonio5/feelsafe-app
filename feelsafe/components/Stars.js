import React from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";

import colors from "../helpers/Colors.js";

const StarsContainer = (props) => {
    const { size, num, color1, color2 } = props;
    const mainColor1 = color1 ?? colors.secGreen;
    const mainColor2 = color2 ?? colors.grey;
    const styles = StyleSheet.create({
        mainView: {
            flexDirection: "row",
            marginBottom: RFValue(5, 898),
        },
    });
    return (
        <View style={styles.mainView}>
            <Icon
                color={1 <= num ? mainColor1 : mainColor2}
                size={size ?? RFValue(22, 898)}
                name="star"
                style={props.style}
            />
            <Icon
                color={2 <= num ? mainColor1 : mainColor2}
                size={size ?? RFValue(22, 898)}
                name="star"
                style={props.style}
            />
            <Icon
                color={3 <= num ? mainColor1 : mainColor2}
                size={size ?? RFValue(22, 898)}
                name="star"
                style={props.style}
            />
            <Icon
                color={4 <= num ? mainColor1 : mainColor2}
                size={size ?? RFValue(22, 898)}
                style={props.style}
                name="star"
            />
            <Icon
                color={5 <= num ? mainColor1 : mainColor2}
                size={size ?? RFValue(22, 898)}
                name="star"
            />
        </View>
    );
};

export default StarsContainer;

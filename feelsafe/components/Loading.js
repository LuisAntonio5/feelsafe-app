import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    ActivityIndicator,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import colors from "../helpers/Colors.js";

export default function Loading(props) {
    return (
        <View style={{ paddingVertical: RFValue(22, 812) }}>
            <ActivityIndicator size="large" color={colors.secGreen} />
        </View>
    );
}

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

import Icon from "react-native-vector-icons/AntDesign";
import FeelSafeLettering from "../assets/feelsafe-lettering";

import colors from "../helpers/Colors.js";

export default function MainHeader(props) {
    return (
        <View
            style={{
                position: "absolute",
                top: RFValue(64, 989),
                width: "100%",
                alignItems: "center",
            }}
        >
            <FeelSafeLettering width={140} height={30} />
            <TouchableOpacity onPress={props.onPress} style={styles.searchBar}>
                <Text style={styles.searchText}>e.g. moelas</Text>
                <Icon
                    name="search1"
                    size={RFValue(18, 898)}
                    color={colors.lightGreen}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: RFValue(32, 898),

        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        width: "90%",
        borderRadius: RFValue(200, 898),

        paddingVertical: RFValue(16, 898),
        paddingHorizontal: RFValue(24, 898),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    searchText: {
        fontFamily: "Raleway_400Regular",
        fontSize: RFValue(16, 898),
        color: colors.grey,
    },
});

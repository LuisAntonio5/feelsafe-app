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

import Icon from "react-native-vector-icons/Feather";
import LocationButton from "../assets/location-button";

import colors from "../helpers/Colors.js";

const BottomBarButton = (props) => {
    const styles = StyleSheet.create({
        button: {
            alignItems: "center",
        },
        text: {
            fontFamily: "Raleway_400Regular",
            fontSize: RFValue(14, 898),
            color: colors.grey,
            marginTop: RFValue(2, 898),
        },
    });
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Icon
                name={props.icon}
                size={RFValue(26, 898)}
                color={colors.lightGreen}
            />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default function BottomBar(props) {
    const onPressSettings = () => {
        props.navigation.navigate("Settings");
    };
    const onPressFilters = () => {
        props.navigation.navigate("Filters");
    };
    return (
        <View
            style={{
                position: "absolute",
                bottom: RFValue(90, 989),
                width: "100%",
                alignItems: "center",
            }}
        >
            <View style={styles.whiteBar}>
                <BottomBarButton
                    text="Definições"
                    icon="settings"
                    onPress={onPressSettings}
                />
                <BottomBarButton
                    text="Filtros"
                    icon="filter"
                    onPress={onPressFilters}
                />
            </View>
            <View style={styles.mainButton}>
                <LocationButton
                    height={RFValue(110, 898)}
                    width={RFValue(110, 898)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    whiteBar: {
        position: "absolute",
        top: RFValue(110, 989) / 2,

        width: "80%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: RFValue(14, 898),
        paddingHorizontal: RFValue(40, 898),
        borderRadius: RFValue(200, 898),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    mainButton: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
});

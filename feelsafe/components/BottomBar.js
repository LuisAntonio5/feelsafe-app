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
            fontFamily: "Raleway_700Bold",
            fontSize: RFValue(15, 898),
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
                bottom: RFValue(50, 989),
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
            <TouchableOpacity
                onPress={props.onPressLocation}
                style={styles.mainButton}
            >
                <LocationButton
                    height={RFValue(110, 898)}
                    width={RFValue(110, 898)}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={props.onPressSearch}
                style={styles.searchHere}
            >
                <Text style={styles.searchHereText}>Procurar Aqui</Text>
            </TouchableOpacity>
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
    searchHere: {
        backgroundColor: colors.secGreen,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: RFValue(14, 898),
        paddingHorizontal: RFValue(20, 898),
        borderRadius: RFValue(20, 898),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 5,

        marginTop: RFValue(110, 989) / 6,
    },

    searchHereText: {
        fontFamily: "Lato_900Black",
        color: "white",
    },
});

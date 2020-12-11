import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MainButton from "../components/MainButton.js";
import Rating from "../components/Rating.js";
import colors from "../helpers/Colors";

function PlaceScreen(props) {
    const placeState = {
        name: "O Moelas",
        type: "Café/Bar"
    };

    const onPressHome = () => {
        props.navigation.navigate("Home");
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.header}>
                <View>
                    <Image style={styles.image} source={require('../assets/moelas.png')} />
                </View>
                <View>
                    <Text style={styles.title}>{placeState.name}</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>{placeState.type}</Text>
                </View>
            </View>
            <MainButton
                backgroundGreen={true}
                text="Avaliar"
                onPress={onPressHome}
                buttonStyle={styles.button}
            />
            <View style={styles.container}>
                <View style={(styles.subcontainerRow)}>
                    <Text style={styles.subtitleRow}>Condições sanitárias</Text>
                    <Rating />
                </View>
                <View style={(styles.subcontainerRow)}>
                    <Text style={styles.subtitleRow}>Imposição das regras</Text>
                    <Rating />
                </View>
                <View style={(styles.subcontainerRow)}>
                    <Text style={styles.subtitleRow}>Distância Social</Text>
                    <Rating />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFValue(70, 898),
    },
    subcontainerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        color: "#000",
        fontFamily: "Raleway_700Bold",
        fontStyle: "normal",
        marginTop: RFValue(20, 898),
    },
    subtitle: {
        fontWeight: "500",
        fontSize: 30,
        lineHeight: 48,
        display: "flex",
        alignItems: "center",
        color: colors.grey,
        fontFamily: "Raleway_400Regular",
        fontStyle: "normal",
        marginBottom: RFValue(40, 898),
    },
    subtitleRow: {
        fontWeight: "500",
        fontSize: 25,
        lineHeight: 30,
        display: "flex",
        alignItems: "center",
        color: colors.darkGrey,
        fontFamily: "Raleway_700Bold",
        fontStyle: "normal",
        textAlign: "left",
        width: "50%",
        marginRight: RFValue(15, 898),
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

    button: {
        width: "85%",
        marginTop: RFValue(20, 898),
    },

    image: {
        width: RFValue(120, 898),
        height: RFValue(120, 898),
    },
});

export default PlaceScreen;

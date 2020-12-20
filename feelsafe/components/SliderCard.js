import React from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";
import StarsContainer from "../components/Stars.js";

import colors from "../helpers/Colors.js";

export default function SliderCard(props) {
    const { navigation } = props;
    const imageURL =
        "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg";
    const { nReviews, name, type, numStars } = props;

    const onPress = () => {
        navigation.navigate("Place", { place: props.place });
    };

    return (
        <TouchableOpacity onPress={onPress} style={styles.mainView}>
            <View style={styles.textView}>
                <View>
                    <Text numOfLines={1} style={styles.nameText}>
                        {name}
                    </Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
                <View>
                    <StarsContainer num={numStars} />
                    <Text style={styles.reviewText}>
                        [{nReviews} avaliações]
                    </Text>
                </View>
            </View>

            <Image
                style={styles.image}
                source={{
                    uri: imageURL,
                }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainView: {
        borderRadius: RFValue(10, 898),
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: RFValue(24, 898),
        paddingHorizontal: RFValue(24, 898),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 5,
        marginRight: RFValue(20, 898),
    },

    textView: {
        justifyContent: "space-between",
    },

    image: {
        width: 74,
        height: 102,
        borderRadius: RFValue(10, 898),
        marginLeft: RFValue(24, 898),
    },

    nameText: {
        fontFamily: "Raleway_700Bold",
        fontSize: RFValue(24, 898),
        color: "black",
        marginBottom: RFValue(3, 898),
        width: RFValue(100, 898),
        height: RFValue(26, 898),
    },

    typeText: {
        fontFamily: "Raleway_700Bold",
        fontSize: RFValue(18, 898),
        color: colors.grey,
    },

    reviewText: {
        fontSize: RFValue(16, 898),
        fontFamily: "Raleway_700Bold",
        color: colors.secGreen,
    },
});

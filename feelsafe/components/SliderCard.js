import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";
import StarsContainer from "../components/Stars.js";

import colors from "../helpers/Colors.js";

export default function SliderCard(props) {
    const { navigation } = props;
    const [imageURL, setImageURL] = useState(null);
    const { nReviews, name, type, numStars, photoReference } = props;
    console.log(numStars);

    const onPress = () => {
        navigation.navigate("Place", {
            place: props.place,
            imageURL: imageURL,
        });
    };

    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
    }

    useEffect(() => {
        const getPhoto = async () => {
            try {
                await timeout(Math.floor(Math.random() * 1000));
                const URL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyAmTrEFmots6ROczWORr10PoFzQMGayKwY`;
                const result = await axios.get(URL);
                setImageURL(result.request.responseURL);
                //setImageURL(result)
            } catch (err) {
                console.log(err);
            }
        };
        if (photoReference) {
            getPhoto();
        }
    }, []);

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

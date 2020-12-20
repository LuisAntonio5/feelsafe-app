import React, { useState } from "react";
import {
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MainButton from "../components/MainButton.js";
import Rating from "../components/Rating.js";
import colors from "../helpers/Colors";
import Stars from "../components/Stars.js";

const RatingCard = () => {
    const ReviewState = {
        name: "Jesualdo",
        date: "12/12/2020",
        stars: "3",
        desc: "A única coisa má acerca do Moelas é estar fechado.",
    };
    return (
        <TouchableOpacity style={{ paddingHorizontal: "1%" }}>
            <View style={stylesReviewCard.card}>
                <View style={stylesReviewCard.rowOne}>
                    <View style={stylesReviewCard.colOne}>
                        <Text style={stylesReviewCard.ReviewCardTextBold}>
                            {ReviewState.name}
                        </Text>
                        <Text style={stylesReviewCard.ReviewCardTextDate}>
                            {ReviewState.date}
                        </Text>
                    </View>
                    <View style={stylesReviewCard.colTwo}>
                        <Stars
                            num={ReviewState.stars}
                            color1={"#fff"}
                            color2={"#00BCA2"}
                        />
                    </View>
                </View>
                <View style={stylesReviewCard.rowTwo}>
                    <Text style={stylesReviewCard.ReviewCardText}>
                        {ReviewState.desc}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const stylesReviewCard = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: colors.lightGreen,
        width: RFValue(350, 898),
        height: RFValue(170, 898),
        paddingHorizontal: "10%",
        paddingVertical: "5%",
    },
    rowOne: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ReviewCardTextBold: {
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 21,
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Raleway_700Bold",
        fontStyle: "normal",
        textAlign: "center",
    },
    ReviewCardText: {
        fontWeight: "800",
        fontSize: 16,
        lineHeight: 18,
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Raleway_400Regular",
        fontStyle: "normal",
        textAlign: "left",
        paddingVertical: RFValue(10, 898),
    },
    ReviewCardTextDate: {
        fontWeight: "800",
        fontSize: 15,
        lineHeight: 18,
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Raleway_400Regular",
        fontStyle: "normal",
        textAlign: "left",
        paddingBottom: RFValue(20, 898),
    },
});

function PlaceScreen(props) {
    const placeState = {
        name: "O Moelas",
        type: "Café/Bar",
        numTotalAvaliacoes: 5,
    };

    const onPressReview = () => {
        props.navigation.navigate("Review");
    };

    return (
        <ScrollView>
            <View style={styles.mainView}>
                <View style={styles.header}>
                    <View>
                        <Image
                            style={styles.image}
                            source={{
                                uri:
                                    "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb",
                            }}
                        />
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
                    onPress={onPressReview}
                    buttonStyle={styles.button}
                />
                <View style={styles.container}>
                    <View style={styles.subcontainerRow}>
                        <Text style={styles.subtitleRow}>
                            Condições sanitárias
                        </Text>
                        <Rating />
                    </View>
                    <View style={styles.subcontainerRow}>
                        <Text style={styles.subtitleRow}>
                            Imposição das regras
                        </Text>
                        <Rating />
                    </View>
                    <View style={styles.subcontainerRow}>
                        <Text style={styles.subtitleRow}>Distância Social</Text>
                        <Rating />
                    </View>
                    <Text style={styles.avaliacoesRow}>
                        Avaliações [{placeState.numTotalAvaliacoes}]
                    </Text>
                    <ScrollView horizontal={true}>
                        <RatingCard />
                        <RatingCard />
                        <RatingCard />
                        <RatingCard />
                        <RatingCard />
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFValue(30, 898),
    },
    scrollView: {
        marginHorizontal: 0,
    },
    subcontainerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    avaliacoesRow: {
        paddingBottom: "5%",
        fontSize: 25,
        lineHeight: 30,
        color: colors.darkGrey,
        fontFamily: "Raleway_700Bold",
        fontStyle: "normal",
    },
    buttonRow: {
        width: "40%",
        marginRight: RFValue(10, 898),
        marginLeft: RFValue(10, 898),
    },
    title: {
        fontWeight: "900",
        fontSize: RFValue(40, 898),
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
        fontSize: RFValue(30, 898),
        lineHeight: 48,
        display: "flex",
        alignItems: "center",
        color: colors.grey,
        fontFamily: "Raleway_400Regular",
        fontStyle: "normal",
        marginBottom: RFValue(40, 898),
    },
    subtitleRow: {
        marginVertical: RFValue(20, 898),
        fontSize: RFValue(25, 898),
        lineHeight: 30,
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
        paddingHorizontal: "6%",
    },

    header: {
        alignItems: "center",
    },

    button: {
        width: "100%",
        marginTop: RFValue(20, 898),
    },

    image: {
        borderRadius: RFValue(120, 898),
        width: RFValue(120, 898),
        height: RFValue(120, 898),
    },
    star: {},
});

export default PlaceScreen;

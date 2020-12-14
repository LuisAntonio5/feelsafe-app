import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MainButton from "../components/MainButton.js";
import Rating from "../components/Rating.js";
import Stars from "../components/Stars.js";
import colors from "../helpers/Colors";

function PlaceScreen(props) {
    const placeState = {
        name: "O Moelas",
        type: "Café/Bar",
        numTotalAvaliacoes: 5,
    };

    const ReviewState = {
        name: "Jesualdo",
        date: "12/12/2020",
        stars: "3",
        desc: "A única coisa má acerca do Moelas é estar fechado.",
    }

    const onPressReview = () => {
        props.navigation.navigate("Review");
    };

    const RatingCard = () => {
        return (
            <TouchableOpacity>
                <View style={stylesReviewCard.card}>
                    <View style={stylesReviewCard.rowOne}>
                        <View style={stylesReviewCard.colOne}>
                            <Text style={stylesReviewCard.ReviewCardTextBold}>{ReviewState.name}</Text>
                            <Text style={stylesReviewCard.ReviewCardTextDate}>{ReviewState.date}</Text>
                        </View>
                        <View style={stylesReviewCard.colTwo}>
                            <Stars num={ReviewState.stars} color1={"#fff"} color2={"#00BCA2"} />
                        </View>
                    </View>
                    <View style={stylesReviewCard.rowTwo}>
                        <Text style={stylesReviewCard.ReviewCardText}>{ReviewState.desc}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const stylesReviewCard = StyleSheet.create({
        card: {
            borderRadius: 10,
            backgroundColor: colors.lightGreen,
            width: RFValue(350, 898),
            height: RFValue(170, 898),
            paddingHorizontal: "8%",
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
        }

    });

    return (

        <ScrollView>
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
                    onPress={onPressReview}
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
                    <View style={(styles.avaliacoes)}>
                        <Text style={styles.avaliacoesRow}>Avaliações [{placeState.numTotalAvaliacoes}]</Text>
                        <TouchableOpacity>
                            <Text style={styles.verTodasButton}> Ver todas </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={{ paddingHorizontal: RFValue(25, 898), }}>
                            <RatingCard />
                        </View>
                        <View style={{ paddingHorizontal: RFValue(25, 898), }}>
                            <RatingCard />
                        </View>
                        <View style={{ paddingHorizontal: RFValue(25, 898), }}>
                            <RatingCard />
                        </View>
                        <View style={{ paddingHorizontal: RFValue(25, 898), }}>
                            <RatingCard />
                        </View>
                        <View style={{ paddingHorizontal: RFValue(25, 898), }}>
                            <RatingCard />
                        </View>
                    </ScrollView>

                </View>
            </View>
        </ScrollView >

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFValue(70, 898),
    },
    scrollView: {
        marginHorizontal: 0,
    },
    subcontainerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "10%",
    },
    avaliacoes: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: "10%",
        paddingBottom: "5%",
    },
    avaliacoesRow: {
        width: "100%",
        fontWeight: "500",
        fontSize: 25,
        lineHeight: 30,
        display: "flex",
        alignItems: "center",
        color: colors.darkGrey,
        fontFamily: "Raleway_700Bold",
        fontStyle: "normal",
        textAlign: "left",
    },
    verTodasButton: {
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 30,
        display: "flex",
        alignItems: "center",
        color: colors.lightGreen,
        fontFamily: "Raleway_700Bold",
        fontStyle: "normal",
        textAlign: "right",
        paddingRight: RFValue(40, 898),
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

import React, { useState, useEffect } from "react";
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    View,
    Image,
    Keyboard,
    Alert,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ReviewInput from "../components/ReviewInput.js";
import Rating from "../components/ReviewRating.js";
import colors from "../helpers/Colors";
import MainButton from "../components/MainButton.js";
import typeTranslator from "../helpers/typeTranslator.js";
import axios from "axios";
import API from "../helpers/API.js";

const regex = {
    writtenReview: /^[^±@^_§¡¢§¶•ªº«\\]{1,20}$/,
};

function ReviewScreen(props) {
    const { imageURL, place } = props.route.params;

    const [rateForm, setRateForm] = useState({
        ratingCond: 0,
        ratingRules: 0,
        ratingSpace: 0,
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss();
    };

    const [formValues, setFormValues] = useState({
        writtenReview: "",
    });
    const [errors, setErrors] = useState({
        writtenReview: null,
    });

    const validateForm = (field) => {};

    const handleChangeText = (text, fieldName) => {
        setFormValues((prev) => ({ ...prev, [fieldName]: text }));
        if (!text.match(regex[fieldName])) {
            setErrors((prev) => ({ ...prev, [fieldName]: "Invalid Field" }));
            setButtonDisabled(true);
        } else {
            setErrors((prev) => ({ ...prev, [fieldName]: null }));
            setButtonDisabled(checkDisabled());
        }
    };

    const onPressBack = () => {
        props.navigation.goBack();
    };

    const onPressPublish = async () => {
        try {
            await axios.post(API + `/reviews/${place.place_id}`, {
                ...rateForm,
                description: formValues.writtenReview,
            });
            props.navigation.navigate("Home");
        } catch (err) {
            console.log(err);
            Alert.alert("Error", "Please try again later.", [{ text: "Ok" }]);
        }
    };

    const checkDisabled = () => {
        var keys = Object.keys(errors);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (errors[key]) {
                return true;
            }
        }
        return false;
    };

    useEffect(() => {
        var keys = Object.keys(rateForm);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (rateForm[key] == 0) {
                setButtonDisabled(true);
                return;
            }
        }
        setButtonDisabled(false);
    }, [rateForm]);

    return (
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
            <View style={styles.mainView}>
                <View style={styles.header}>
                    <View style={styles.subcontainerRow}>
                        <View>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: imageURL,
                                }}
                            />
                        </View>
                        <View style={styles.subcontainer}>
                            <View>
                                <Text style={styles.title}>{place.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.subtitle}>
                                    {typeTranslator[place.types[0]]}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.subcontainerRow}>
                        <Text style={styles.subtitleRow}>
                            Condições sanitárias
                        </Text>
                        <Rating
                            ratingState={rateForm.ratingCond}
                            onPress={(num) =>
                                setRateForm((prev) => ({
                                    ...prev,
                                    ratingCond: num,
                                }))
                            }
                        />
                    </View>
                    <View style={styles.subcontainerRow}>
                        <Text style={styles.subtitleRow}>
                            Imposição das regras
                        </Text>
                        <Rating
                            ratingState={rateForm.ratingRules}
                            onPress={(num) =>
                                setRateForm((prev) => ({
                                    ...prev,
                                    ratingRules: num,
                                }))
                            }
                        />
                    </View>
                    <View style={styles.subcontainerRow}>
                        <Text style={styles.subtitleRow}>Distância Social</Text>
                        <Rating
                            ratingState={rateForm.ratingSpace}
                            onPress={(num) =>
                                setRateForm((prev) => ({
                                    ...prev,
                                    ratingSpace: num,
                                }))
                            }
                        />
                    </View>
                </View>
                <View style={styles.form}>
                    <ReviewInput
                        fieldName="writtenReview"
                        placeholder="Descreve a tua experiência (opcional)"
                        onChangeText={handleChangeText}
                        errors={errors}
                        validateForm={validateForm}
                    />
                </View>
                <View style={styles.subcontainerRow}>
                    <MainButton
                        text="Voltar"
                        onPress={onPressBack}
                        buttonStyle={styles.button}
                    />
                    <MainButton
                        backgroundGreen={true}
                        text="Publicar"
                        onPress={onPressPublish}
                        buttonStyle={styles.button}
                        disabled={buttonDisabled}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFValue(30, 898),
    },
    form: {
        marginTop: RFValue(20, 898),
        width: "100%",
    },
    subcontainerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subcontainer: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    buttonRow: {
        width: "40%",
        marginRight: RFValue(10, 898),
        marginLeft: RFValue(10, 898),
    },
    title: {
        fontSize: RFValue(32, 898),
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
        fontSize: RFValue(28, 898),
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
        fontSize: RFValue(27, 898),
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
        alignItems: "flex-start",
    },

    button: {
        width: "45%",
        marginHorizontal: "5%",
    },

    image: {
        borderRadius: RFValue(100, 898),
        width: RFValue(100, 898),
        height: RFValue(100, 898),
        marginRight: RFValue(50, 898),
        marginTop: RFValue(25, 898),
    },
    star: {
        marginRight: RFValue(4, 898),
    },
});

export default ReviewScreen;

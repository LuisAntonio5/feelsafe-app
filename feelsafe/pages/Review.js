import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ReviewInput from "../components/ReviewInput.js";
import Rating from "../components/Rating.js";
import colors from "../helpers/Colors";

const regex = {
    review: /^[^±@^_§¡¢§¶•ªº«\\]{1,20}$/,
};

function ReviewScreen(props) {
    const placeState = {
        name: "O Moelas",
        type: "Café/Bar"
    };

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formValues, setFormValues] = useState({
        writtenReview: "",
    });
    const [errors, setErrors] = useState({
        writtenReview: null,
    });

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss();
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

    const validateForm = (field) => { };


    const onPressHome = () => {
        props.navigation.navigate("Home");
    };

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

    return (
        <View style={styles.mainView}>
            <View style={styles.header}>
                <View style={styles.subcontainerRow}>
                    <View>
                        <Image style={styles.image} source={require('../assets/moelas.png')} />
                    </View>
                    <View style={styles.subcontainer}>
                        <View>
                            <Text style={styles.title}>{placeState.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.subtitle}>{placeState.type}</Text>
                        </View>
                    </View>
                </View>
            </View>
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
            <View style={(styles.form)}>
                <ReviewInput
                    labelText="Review"
                    fieldName="writtenReview"
                    placeholder="Descreve a tua experiência (opcional)"
                    onChangeText={handleChangeText}
                    errors={errors}
                    validateForm={validateForm}
                />
                <View style={styles.subcontainerRowApart}>
                    <TouchableOpacity
                        style={styles.CancelButton}
                    >
                        <Text style={styles.CancelButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.ApplyButton}
                    >
                        <Text style={styles.ApplyButtonText}>Aplicar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    subcontainerRowApart: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 0,
    },
    ApplyButton: {
        backgroundColor: colors.lightGreen,
        alignItems: "center",
        alignItems: "center",
        borderRadius: RFValue(50, 898),
        width: RFValue(150, 898),
        paddingVertical: RFValue(15, 898),
        marginTop: RFValue(50, 898),
    },
    ApplyButtonText: {
        fontWeight: "900",
        fontFamily: "Raleway_700Bold",
        fontStyle: "normal",
        color: "white",
        fontSize: RFValue(20, 898),
    },
    CancelButton: {
        backgroundColor: colors.grey,
        alignItems: "center",
        textAlign: "center",
        borderRadius: RFValue(50, 898),
        width: RFValue(150, 898),
        paddingVertical: RFValue(15, 898),
        marginTop: RFValue(50, 898),
    },
    CancelButtonText: {
        fontWeight: "900",
        fontFamily: "Raleway_700Bold",
        fontStyle: "normal",
        fontSize: RFValue(20, 898),
        color: colors.darkGrey,
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFValue(30, 898),
    },
    form: {
        marginTop: RFValue(20, 898),
        width: "100%",
        backgroundColor: "#fff",
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
        alignItems: "flex-start",
    },

    button: {
        width: "85%",
        marginTop: RFValue(20, 898),
    },

    image: {
        width: RFValue(100, 898),
        height: RFValue(100, 898),
        marginRight: RFValue(50, 898),
        marginTop: RFValue(25, 898),
    },
});

export default ReviewScreen;

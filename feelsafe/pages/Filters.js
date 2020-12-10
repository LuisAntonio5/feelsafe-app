import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Category from "../components/Category.js";
import Rating from "../components/Rating.js";
import Toggle from "../components/Toggle.js";
import colors from "../helpers/Colors";

function FilterScreen(props) {
	const handleSave = () => {
		props.navigation.navigate("Home");
	};
	const handleCancel = () => {
		props.navigation.navigate("Home");
	};
	return (
		// <SafeAreaView style={{ flex: 1}} >
		<View
			style={{
				flex: 1,
				height: "100%",
				width: "100%",
				padding: 0,
				margin: 0,
				backgroundColor: "#fff",
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Filtrar</Text>
				<View style={styles.subcontainer}>
					<Text style={styles.subtitle}>Categoria</Text>
					<Category name="Bar" />
					<Category name="Cinema" />
					<Category name="Supermercado" />
				</View>
				<View
					style={
						(styles.subcontainer,
						{ marginRight: RFValue(170, 898) })
					}
				>
					<Text style={styles.subtitle}>Avaliação</Text>
					<Rating />
				</View>
				<View style={styles.subcontainer}>
					<View style={styles.distancia}>
						<Text style={styles.subtitle}>Distância</Text>
					</View>
				</View>
				<View style={styles.subcontainerRowApart}>
					<View style={styles.viewTitle}>
						<Text style={styles.subtitle}>Aberto agora</Text>
					</View>
					<View style={styles.viewToggle}>
						<Toggle />
					</View>
				</View>
				<StatusBar style="auto" />
			</View>
			<View style={styles.subcontainerRowApart}>
				<TouchableOpacity
					onPress={handleSave}
					style={styles.CancelButton}
				>
					<Text style={styles.CancelButtonText}>Cancelar</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleCancel}
					style={styles.ApplyButton}
				>
					<Text style={styles.ApplyButtonText}>Aplicar</Text>
				</TouchableOpacity>
			</View>
		</View>
		// </SafeAreaView>
	);
}

export default FilterScreen;

const styles = StyleSheet.create({
	title: {
		fontWeight: "900",
		fontSize: 40,
		lineHeight: 48,
		display: "flex",
		alignItems: "center",
		color: "#46EBD0",
		fontFamily: "Lato_400Regular",
		fontStyle: "normal",

		marginBottom: RFValue(40, 898),
		marginTop: RFValue(54, 898),
	},
	subtitle: {
		fontWeight: "bold",
		fontSize: 20,
		lineHeight: 23,
		color: "#5F6368",
		fontFamily: "Raleway_700Bold",
		fontStyle: "normal",
	},
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	subcontainer: {
		flexDirection: "column",
		backgroundColor: "#fff",
		alignItems: "flex-start",
		justifyContent: "center",
		paddingRight: RFValue(150, 898),
		paddingBottom: RFValue(50, 898),
	},
	subcontainerRowApart: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		backgroundColor: "#fff",
	},
	viewTitle: {
		alignSelf: "flex-start",
	},
	viewToggle: {
		alignSelf: "flex-end",
		marginLeft: RFValue(150, 898),
	},
	ApplyButton: {
		backgroundColor: colors.lightGreen,
		alignItems: "center",
		borderRadius: RFValue(50, 898),
		width: RFValue(150, 898),
		marginTop: RFValue(120, 898),
		paddingVertical: RFValue(15, 898),
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
		marginTop: RFValue(120, 898),
		paddingVertical: RFValue(15, 898),
	},
	CancelButtonText: {
		fontWeight: "900",
		fontFamily: "Raleway_700Bold",
		fontStyle: "normal",
		fontSize: RFValue(20, 898),
		color: colors.darkGrey,
	},
	distancia: {
		paddingRight: RFValue(110, 898),
	},
});

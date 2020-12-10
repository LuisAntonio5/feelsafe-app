import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Category from "../components/Category.js";
import Rating from "../components/Rating.js";

function FilterScreen(props) {
	return (
		// <SafeAreaView style={{ flex: 1}} >
		<View style={{ flex: 1, height: '100%', width: '100%', padding: 0, margin: 0 }}>
			<View style={styles.container}>
				<Text style={styles.title}>Filtrar</Text>
				<View style={styles.subcontainer}>
					<Text style={styles.subtitle}>Categoria</Text>
					<Category name='Bar' />
					<Category name='Cinema' />
					<Category name='Supermercado' />
				</View>
				<View style={styles.subcontainer, { marginRight: RFValue(170, 898) }}>
					<Text style={styles.subtitle}>Avaliação</Text>

					<Rating />

				</View>
				<View style={styles.subcontainer}>
					<View style={styles.distancia}>
						<Text style={styles.subtitle}>Distância</Text>
					</View>
				</View>
				<View style={styles.subcontainer}>
					<View style={styles.subcontainerRowApart}>
						<Text style={styles.subtitle}>Aberto agora</Text>
						<IconFA style={styles.iconFlexEnd} name='toggle-on' size={RFValue(29, 898)} color='#46EBD0' />
					</View>
				</View>
				<StatusBar style="auto" />
			</View>
			<View style={styles.buttons}>
				<Button
					title="Cancelar"
					color="#fff"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
			<View style={styles.buttons}>
				<Button
					title="Aplicar"
					color="#fff"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		</View >
		// </SafeAreaView>
	);
}

export default FilterScreen;

const styles = StyleSheet.create({
	title: {
		fontWeight: '900',
		fontSize: 40,
		lineHeight: 48,
		display: 'flex',
		alignItems: 'center',
		color: '#46EBD0',
		fontFamily: 'Lato_400Regular',
		fontStyle: 'normal',

		marginBottom: RFValue(40, 898),
		marginTop: RFValue(40, 898),
	},
	subtitle: {
		fontWeight: 'bold',
		fontSize: 20,
		lineHeight: 23,
		color: '#5F6368',
		fontFamily: 'Raleway_700Bold',
		fontStyle: 'normal',
	},
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	subcontainer: {
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingRight: RFValue(150, 898),
		paddingBottom: RFValue(50, 898),
	},
	subcontainerRowApart: {
		flexDirection: 'row',
		paddingRight: RFValue(25, 898),
		justifyContent: 'space-between'
	},
	buttons: {
		backgroundColor: '#46EBD0',
		alignItems: 'center',
	},
	distancia: {
		paddingRight: RFValue(110, 898),
	},
	iconFlexEnd: {
		marginLeft: RFValue(20, 898),
	},

});


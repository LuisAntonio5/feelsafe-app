import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from "expo";
import {
	useFonts,
	Lato_400Regular,
	Lato_900Black,
} from "@expo-google-fonts/lato";
import {
	Raleway_400Regular,
	Raleway_700Bold
} from "@expo-google-fonts/raleway";


export default function HomeScreen({ navigation }) {
	return (
		// <SafeAreaView style={{ flex: 1}}>
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>This is the Home Screen!</Text>
			<Button
				title="Click here to go to the filters screen"
				onPress={() => navigation.navigate('Filters')}
			/>
		</View>

	);
}     
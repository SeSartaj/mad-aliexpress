import React, { useEffect, useState } from "react"
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import ProductBox from "../components/ProductBox"

import CategoriesBar from "../components/CategoriesBar"
import TopBar from "../components/TopBar"
import colors from "../utilities/colors"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"

export default function FavoriteProducts({ navigation }) {
	return (
		<SafeAreaView style={styles.page}>
			<View style={styles.topbar}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons
						name="arrow-back-circle-outline"
						size={26}
						color={colors.red}
					/>
				</TouchableOpacity>
			</View>
			{/* <TopBar /> */}
			<Text style={styles.bigtext}>Favorite Products</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: colors.background,
		paddingTop: 40,
	},
	icon: {
		width: 50,
		height: 50,
		borderRadius: 20,
	},
	bigtext: {
		fontSize: 30,
		marginBottom: 20,
		color: "orange",
		paddingLeft: 10,
		textAlign: "center",
	},
})

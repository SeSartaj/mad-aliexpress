import React from "react"
import { StyleSheet, Text, View } from "react-native"
import colors from "../utilities/colors"

const CategoriesBar = ({ categories }) => {
	const { category } = categories
	return (
		<View style={styles.container}>
			<Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
				{category}
			</Text>
		</View>
	)
}

export default CategoriesBar

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingHorizontal: 15,
		backgroundColor: colors.primary,
		marginHorizontal: 4,
		borderRadius: 10,
	},
})

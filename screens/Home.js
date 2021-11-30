import React, { useEffect, useState } from "react"
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import ProductBox from "../components/ProductBox"

import CategoriesBar from "../components/CategoriesBar"
import TopBar from "../components/TopBar"
import colors from "../utilities/colors"

export default function Home(props) {
	const [loadedCat, setLoadedCat] = useState("All")
	const [retrievedCat, setRetrievedCat] = useState()

	const Categories = props.route.params.Categories
	const Category = props.route.params.Category
	const Products = props.route.params.Products

	useEffect(() => {
		if (loadedCat === "All") {
			setRetrievedCat(Products)
		} else {
			setRetrievedCat(Category[loadedCat])
		}
	}, [loadedCat, Products])

	return (
		<SafeAreaView style={styles.page}>
			<TopBar />
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "baseline",
				}}
			>
				<Image
					source={require("../assets/alibaba-512.png")}
					style={styles.icon}
				/>
				<Text style={styles.bigtext}>Alibaba </Text>
			</View>

			<View style={{ paddingBottom: 10 }}>
				<FlatList
					data={Categories}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => setLoadedCat(item.category)}>
							<CategoriesBar categories={item} />
						</TouchableOpacity>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						alignItems: "center",
						marginVertical: 5,
					}}
				/>
			</View>

			<View style={{ flex: 1 }}>
				<FlatList
					data={retrievedCat}
					renderItem={({ item }) => <ProductBox product={item} />}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ alignItems: "center" }}
					columnWrapperStyle={{ justifyContent: "center" }}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: colors.background,
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
	},
})

import React from "react"
import { useState, useEffect } from "react"
import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Signin from "./screens/Signin"
import Signup from "./screens/Signup"
import Home from "./screens/Home"
import Description from "./screens/Description"
import Cart from "./screens/Cart"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Checkout from "./screens/Checkout"
import Menu from "./screens/Menu"
import FavoriteProducts from "./screens/favoriteProducts"

import getCategories from "./assets/data/Categories"
import getCategoriesIncludingProducts from "./assets/data/Category"
import getProducts from "./assets/data/Products"

export default function App() {
	const [Categories, setCategories] = useState([])
	const [Category, setCategory] = useState({})
	const [Products, setProducts] = useState([])

	useEffect(() => {
		getProducts().then((data) => {
			setProducts(data)
			console.log(data, "products from useeffect")
		})
	}, [])

	useEffect(() => {
		getCategoriesIncludingProducts().then((data) => {
			setCategory(data)
			console.log(data, "category from useeffect")
		})
	}, [])

	useEffect(() => {
		getCategories().then((data) => {
			setCategories(data)
			console.log(data, "categories from useeffect")
		})
	}, [])

	const MainNavigator = createStackNavigator()

	return (
		<View style={{ flex: 1 }}>
			<Provider store={store}>
				<NavigationContainer>
					<MainNavigator.Navigator
						screenOptions={{ headerShown: false }}
						initialRouteName="Signin"
					>
						<MainNavigator.Screen name="Signin" component={Signin} />
						<MainNavigator.Screen name="Signup" component={Signup} />
						<MainNavigator.Screen
							name="Favorite"
							component={FavoriteProducts}
						/>

						<MainNavigator.Screen
							name="Home"
							component={Home}
							initialParams={{ Categories, Category, Products }}
						/>
						<MainNavigator.Screen name="Menu" component={Menu} />
						<MainNavigator.Screen
							name="Description"
							component={Description}
							initialParams={{ Categories, Category, Products }}
						/>
						<MainNavigator.Screen name="Cart" component={Cart} />
						<MainNavigator.Screen name="Checkout" component={Checkout} />
					</MainNavigator.Navigator>
				</NavigationContainer>
			</Provider>
		</View>
	)
}

import { StatusBar } from "expo-status-bar"
import { useState, useEffect, isValidElement } from "react"
import axios from "axios"
import React from "react"
import {
	StyleSheet,
	Text,
	SafeAreaView,
	View,
	TouchableOpacity,
	ScrollView,
	Alert,
} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Entypo } from "@expo/vector-icons"
import colors from "../utilities/colors"

import { useDispatch, useSelector } from "react-redux"
import { actionCreators } from "../redux"
import { bindActionCreators } from "redux"

import checkEmailValidation from "../utilities/isEmailValid"
import { HOST } from "../utilities/consts"

export default function Signin({ navigation }) {
	const dispatch = useDispatch()

	const { signIn } = bindActionCreators(actionCreators, dispatch)

	const [email, setEmail] = useState("")
	const [isEmailValid, setIsEmailValid] = useState(true)
	const [password, setPassword] = useState("")
	const [isPasswordValid, setIsPasswordValid] = useState(false)

	function handleEmailChange(email) {
		setEmail(email)
		if (checkEmailValidation(email)) {
			setIsEmailValid(true)
		} else {
			setIsEmailValid(false)
		}
	}

	function handlePasswordChange(password) {
		setPassword(password)
		if (String(password).length > 5) {
			setIsPasswordValid(true)
		} else {
			setIsPasswordValid(false)
		}
	}

	function handleSubmit() {
		if (isEmailValid && isPasswordValid) {
			axios
				.post(HOST + "/api/auth/local", {
					identifier: email,
					password: password,
				})
				.then((response) => {
					console.log("User profile", response.data.user)
					console.log("User token", response.data.jwt)
					navigation.navigate("Home")
				})
				.catch((error) => {
					Alert.alert(error.response.data.error.message)
					console.log("An error occurred:", error.response)
				})
		} else {
			Alert.alert("email or password is invalid. please try again")
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ paddingTop: 40 }}>
					<Text style={styles.textbig}>Welcome{"\n"}Back</Text>
				</View>
				<View style={{ paddingTop: 40 }}>
					<View
						style={
							isEmailValid
								? styles.inputcon
								: { ...styles.inputcon, ...styles.inputconInvalid }
						}
					>
						<TextInput
							style={styles.input}
							placeholder="Email address"
							value={email}
							onChangeText={handleEmailChange}
						/>
					</View>

					<View style={styles.inputcon}>
						<TextInput
							style={styles.input}
							secureTextEntry={true}
							placeholder="Password"
							value={password}
							onChangeText={handlePasswordChange}
						/>
					</View>
				</View>
				<View style={styles.buttoncon}>
					<Text style={styles.signtext}>Sign In</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={handleSubmit}
						// disabled={isValidated}
					>
						<Entypo name="chevron-right" size={35} color="white" />
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignContent: "center",
					}}
				>
					<Text style={{ color: "lightgray", fontSize: 16 }}>
						Don't have an account ?{" "}
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
						<Text
							style={{
								color: colors.primary,
								fontSize: 16,
								fontWeight: "bold",
							}}
						>
							Sign up
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						justifyContent: "center",
						paddingTop: 20,
					}}
				>
					{/* <Text
						style={{ color: colors.primary, fontSize: 16, fontWeight: "bold" }}
					>
						Forgot Password ?
					</Text> */}
				</TouchableOpacity>
			</ScrollView>
			<StatusBar style="auto" />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		paddingHorizontal: 10,
		alignContent: "center",
		paddingBottom: 20,
	},
	textbig: {
		fontSize: 45,
		padding: 5,
		paddingVertical: 30,
		fontWeight: "bold",
		marginTop: 20,
		color: colors.text,
	},
	inputcon: {
		margin: 10,
		backgroundColor: "white",
		padding: 10,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: colors.secondary,
	},
	inputconInvalid: {
		borderColor: "red",
	},
	input: {
		fontSize: 16,
		paddingHorizontal: 10,
	},
	signtext: {
		fontSize: 30,
		padding: 5,
		paddingVertical: 30,
		fontWeight: "bold",
		color: colors.text,
	},
	button: {
		backgroundColor: colors.primary,
		borderRadius: 50,
		padding: 10,
	},
	buttoncon: {
		paddingTop: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingBottom: 10,
	},
	errorMessage: {
		fontSize: 8,
		color: "red",
	},
})

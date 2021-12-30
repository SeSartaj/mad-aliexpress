import { StatusBar } from "expo-status-bar"
import { useState, useEffect } from "react"
import React from "react"
import axios from "axios"
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
import isEmailValid from "../utilities/isEmailValid"
import { HOST } from "../utilities/consts"

export default function Signup({ navigation }) {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [emailValid, setEmailValid] = useState(true)

	const handleName = (name) => {
		setName(name)
	}

	const handleEmail = (email) => {
		setEmail(email)
		if (isEmailValid(email)) {
			setEmailValid(true)
		} else {
			setEmailValid(false)
		}
	}

	const handlePassword = (password) => {
		setPassword(password)
	}

	function isInputsValid() {
		const isNameValid = String(name).length > 3
		const isEValid = isEmailValid(email)
		const isPasswordValid = String(password).length > 3

		if (isNameValid && isEValid && isPasswordValid) {
			return true
		} else {
			Alert.alert("Invalid name, email or password")
			return false
		}
	}

	const handleSignUp = async () => {
		if (isInputsValid()) {
			try {
				await axios.post(HOST + "/api/auth/local/register", {
					username: name,
					email,
					password,
				})
				Alert.alert("Account successfully created")
				navigation.navigate("Signin")
			} catch (error) {
				console.log(error)
				Alert.alert("error registering accout, try again")
			}
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ paddingTop: 40 }}>
					<Text style={styles.textbig}>New here?</Text>
					<Text>You can start shopping after creating an account with us</Text>
				</View>
				<View style={{ paddingTop: 40 }}>
					<View style={styles.inputcon}>
						<TextInput
							style={styles.input}
							placeholder="Name"
							value={name}
							onChangeText={handleName}
						/>
					</View>
					<View
						style={
							emailValid
								? styles.inputcon
								: { ...styles.inputcon, ...styles.inputconInvalid }
						}
					>
						<TextInput
							style={styles.input}
							placeholder="Email address"
							value={email}
							onChangeText={handleEmail}
						/>
					</View>
					<View style={styles.inputcon}>
						<TextInput
							secureTextEntry={true}
							style={styles.input}
							placeholder="Password"
							value={password}
							onChangeText={handlePassword}
						/>
					</View>
				</View>
				<View style={styles.buttoncon}>
					<Text style={styles.signtext}>Sign Up</Text>
					<TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
						Already have an account ?{" "}
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Signin")}>
						<Text
							style={{
								color: colors.primary,
								fontSize: 16,
								fontWeight: "bold",
							}}
						>
							Sign in
						</Text>
					</TouchableOpacity>
				</View>
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
})

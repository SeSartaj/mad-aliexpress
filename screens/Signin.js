import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import colors from "../utilities/colors";

export default function Signin({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: 40 }}>
          <Text style={styles.textbig}>Welcome{"\n"}Back</Text>
        </View>
        <View style={{ paddingTop: 40 }}>
          <View style={styles.inputcon}>
            <TextInput style={styles.input} placeholder="Email address" />
          </View>
          <View style={styles.inputcon}>
            <TextInput style={styles.input} placeholder="Password" />
          </View>
        </View>
        <View style={styles.buttoncon}>
          <Text style={styles.signtext}>Sign In</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
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
          <Text
            style={{ color: colors.primary, fontSize: 16, fontWeight: "bold" }}
          >
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
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
});

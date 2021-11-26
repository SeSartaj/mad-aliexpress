import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import colors from "../utilities/colors";
import round from "../utilities/round";

export default function Checkout({ navigation }) {
  const totalPrice = useSelector((state) => state.price.totalPrice);

  const [paymentMethod, setPaymentMethod] = useState({
    CreditCard: true,
    PayPal: false,
  });

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={26}
            color={colors.icons}
          />
        </TouchableOpacity>
        <Text style={styles.bartext}>Checkout</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.card}>
          <View style={{ paddingTop: 5 }}>
            <Text style={styles.cardtext}>Information</Text>
            <View style={styles.inputcon}>
              <TextInput style={styles.input} placeholder="Name" />
            </View>
            <View style={styles.inputcon}>
              <TextInput style={styles.input} placeholder="Phone Number" />
            </View>
            <View style={styles.inputcon}>
              <TextInput style={styles.input} placeholder="Address" />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{ paddingTop: 5 }}>
            <Text style={styles.cardtext}>Payment</Text>

            <TouchableOpacity
              onPress={() =>
                setPaymentMethod({
                  CreditCard: true,
                  PayPal: false,
                })
              }
              style={styles.select}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  name="creditcard"
                  size={24}
                  color={colors.icons}
                  style={{ paddingRight: 5 }}
                />
                <Text style={{ fontSize: 16, color: colors.text }}>
                  Credit Card
                </Text>
              </View>
              <Ionicons
                name={
                  paymentMethod.CreditCard
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                color={colors.icons}
                size={18}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setPaymentMethod({
                  CreditCard: false,
                  PayPal: true,
                })
              }
              style={styles.select}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="paypal"
                  size={24}
                  color={colors.icons}
                  style={{ paddingRight: 5 }}
                />
                <Text style={{ fontSize: 16, color: colors.text }}>PayPal</Text>
              </View>
              <Ionicons
                name={
                  paymentMethod.PayPal ? "radio-button-on" : "radio-button-off"
                }
                color={colors.icons}
                size={18}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.pricecon}>
        <Text style={{ fontSize: 16, color: colors.text }}>Total </Text>
        <Text style={{ fontSize: 18, color: colors.primary }}>
          {"$"}
          {round(totalPrice, 2)}
        </Text>
      </View>

      <View style={styles.buttoncon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Your order is being processed")}
        >
          <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  topbar: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  bartext: {
    fontSize: 20,
    fontWeight: "500",
    flex: 1,
    textAlign: "left",
    marginLeft: 10,
    color: colors.text,
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 5,
  },
  cardtext: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  select: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttoncon: {
    paddingVertical: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  pricecon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

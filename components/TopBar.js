import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import colors from "../utilities/colors";

export default function TopBar({ route }) {
  const navigation = useNavigation();

  const numberOfProducts = useSelector((state) => state.cart.numberOfProducts);

  return (
    <View style={styles.topbar}>
      {route ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={27}
            color={colors.icons}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Feather name="menu" size={25} color={colors.icons} />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ flexDirection: "row" }}
      >
        <FontAwesome name="opencart" size={24} color={colors.icons} />
        {numberOfProducts ? (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{numberOfProducts}</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  badgeContainer: {
    backgroundColor: colors.primary,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 13,
    top: 13,
  },
  badgeText: {
    color: "white",
  },
});

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import colors from "../utilities/colors";

export default function ProductBox({ product }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Description", { id: product.id });
  };

  const { title, price, image } = product;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.prodname}>{title}</Text>
      <Text style={styles.price}>{`$${price}`} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: "45%",
    paddingVertical: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  prodname: {
    fontSize: 12,
    padding: 2,
    textAlign: "center",
  },
  price: {
    fontSize: 19,
    color: colors.primary,
  },
});

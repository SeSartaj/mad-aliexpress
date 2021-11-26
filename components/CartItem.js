import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import colors from "../utilities/colors";

export default function CartItem({ product }) {
  const { title, image, price } = product;

  const dispatch = useDispatch();

  const { removeItemFromCart, increaseCartPrice, decreaseCartPrice } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const unsubscribe = increaseCartPrice(price);
    return unsubscribe;
  }, []);

  const [counterNumber, setCounterNumber] = useState(1);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      {/* part containing name, time and last message */}
      <View style={styles.rightContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.price}>
              {"$"}
              {price * counterNumber}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", paddingHorizontal: 5 }}>
              <TouchableOpacity
                onPress={() => {
                  setCounterNumber(counterNumber + 1);
                  increaseCartPrice(price);
                }}
              >
                <Ionicons
                  name="ios-chevron-up"
                  size={24}
                  color={colors.icons}
                />
              </TouchableOpacity>
              <Text>{counterNumber}</Text>
              {counterNumber === 1 ? (
                <View>
                  <Ionicons
                    name="ios-chevron-down"
                    size={24}
                    color="lightgrey"
                  />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setCounterNumber(counterNumber - 1);
                    decreaseCartPrice(price);
                  }}
                >
                  <Ionicons
                    name="ios-chevron-down"
                    size={24}
                    color={colors.icons}
                  />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity
              style={{ paddingLeft: 5 }}
              onPress={() => {
                removeItemFromCart(product);
                decreaseCartPrice(price * counterNumber);
              }}
            >
              <AntDesign name="delete" size={24} color={colors.icons} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
  },

  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },

  name: {
    fontSize: 14,
    marginBottom: 2,
    color: colors.text,
  },
  price: {
    fontSize: 16,
    marginVertical: 2,
    textAlign: "right",
    color: colors.primary,
  },
  text: {
    color: "grey",
  },
});

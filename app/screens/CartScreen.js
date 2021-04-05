import React, { useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator, Alert } from "react-native";
import { useMutation } from "@apollo/client";

import { CartContext } from "../auth/context";

export default function CartScreen() {
  //   const [cart, setCart] = useContext(CartContext);

  return (
    <Text>
      {/* {cart.map((product) => (
        <View key={product.id}>{product.name}</View>
      ))} */}
      CART
    </Text>
  );
}

// const styles = StyleSheet.create({
//   cartitem: {
//     flexDirection: "column",
//   },
// });

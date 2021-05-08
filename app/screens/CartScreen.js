import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";

import CartItem from "../components/CartItem";
import Screen from "./Screen";
import colors from "../config/colors";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Store/cart";

export default function CartScreen({ navigation }) {
  //
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Screen>
      <ScrollView>
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            name={product.name}
            brand={product.brand}
            image={{ uri: `http://127.0.0.1:8000/media/${product.image}` }}
            price={product.price}
            quantity={product.quantity}
            onPress={() => dispatch(removeFromCart(product.id))}
            onIncreaseQuantity={() => dispatch(increaseQuantity(product.id))}
            onDecreaseQuantity={() => dispatch(decreaseQuantity(product.id))}
          />
        ))}
        {cartItems.length === 0 ? (
          <Text>Your Cart is empty</Text>
        ) : (
          <>
            <View style={styles.totalContainer}>
              <Text style={styles.total}>Total Amount: {totalAmount} Rs.</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("listing")}
              >
                <Text style={styles.buttonText}>Continue Shopping</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Checkout")}
              >
                <Text style={styles.buttonText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 7,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 15,
  },
  total: {
    marginBottom: 15,
    fontWeight: "bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

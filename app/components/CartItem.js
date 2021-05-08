import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

// import Text from "./lists/Text";
import colors from "../config/colors";

function CartItem({
  name,
  brand,
  image,
  price,
  quantity,
  onPress,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.brand} numberOfLines={1}>
            {brand}
          </Text>
        </View>
        <View style={styles.price}>
          <Text>{price}</Text>
          <Text>Rs./Item</Text>
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.quantity}>
            <Button
              title="-"
              style={styles.button}
              onPress={onDecreaseQuantity}
            />
            <Text style={styles.quantityText}>{quantity}</Text>
            <Button
              title="+"
              style={styles.button}
              onPress={onIncreaseQuantity}
            />
          </View>
          <TouchableOpacity style={styles.remove} onPress={onPress}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    backgroundColor: colors.white,
    marginBottom: 15,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
    elevation: 5, // works only in Android
    // Following effects works only in IOS
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    justifyContent: "space-between",
  },

  image: {
    width: "20%",
    height: 90,
    resizeMode: "contain",
  },
  brand: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  detailContainer: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 5,
  },
  price: {
    justifyContent: "center",
    paddingLeft: 5,
  },
  quantity: {
    flexDirection: "row",
    paddingLeft: 5,
    justifyContent: "center",
  },
  button: {
    margin: 10,
  },
  remove: {
    padding: 5,
    backgroundColor: colors.danger,
    borderRadius: 5,
  },
  quantityContainer: {
    padding: 5,
    justifyContent: "space-around",
  },
  removeText: {
    color: colors.light,
    padding: 3,
  },
  quantityText: {
    padding: 7,
  },
});

export default CartItem;

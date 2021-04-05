import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

import Text from "./Text";
import colors from "../../config/colors";
// import AddToCart from "../../../api/AddToCart";

function Card({ title, subTitle, image, onPress, AddToCart }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.title} numberOfLines={1}>
              Quantity:
            </Text>
            <Button title="Add to Cart" onPress={AddToCart} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    flex: 1,
    elevation: 5, // works only in Android
    // Following effects works only in IOS
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  detailsContainer: {
    padding: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    flex: 1,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
  viewContainer: {
    // alignContent: "stretch",
    // paddingLeft: 60,
    // paddingRight: 20,
  },
});

export default Card;

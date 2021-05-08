import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Button,
  TouchableHighlight,
} from "react-native";

import Text from "./Text";
import colors from "../../config/colors";

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
            <TouchableHighlight style={styles.button} onPress={AddToCart}>
              {/* <Button title="Add to Cart" onPress={AddToCart} /> */}
              <Text style={styles.text}>Add To Cart</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    borderWidth: 0.5,
    backgroundColor: colors.white,
    // marginBottom: 5,
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
  button: {
    height: 40,
    width: 110,
    borderRadius: 10,
    backgroundColor: colors.yellow,
    // marginLeft: 50,
    // marginRight: 50,
    // marginTop: 20,
  },
  text: {
    color: colors.medium,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;

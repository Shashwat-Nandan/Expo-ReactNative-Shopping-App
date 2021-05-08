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

function StoreItem({ onPress, image, name, storeCategory, description }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.main}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.brand} numberOfLines={1}>
            {storeCategory}
          </Text>
          <Text style={styles.description}>{description}</Text>
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
    // justifyContent: "space-between",
  },
  image: {
    width: "20%",
    height: 90,
    resizeMode: "contain",
  },
  detailContainer: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.secondary,
  },
  description: {
    fontSize: 10,
  },
  main: {
    marginTop: 0,
  },
});

export default StoreItem;

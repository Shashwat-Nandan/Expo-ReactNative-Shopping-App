import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Text from "../components/lists/Text";
import colors from "../config/colors";

function CatalogueItem({
  name,
  price,
  brand,
  skuSize,
  image,
  EditProduct,
  DeleteProduct,
}) {
  return (
    <TouchableWithoutFeedback onPress={EditProduct}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {price}
            </Text>
          </View>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {brand}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {skuSize}
            </Text>
          </View>
        </View>
        <View style={styles.viewContainer}>
          <TouchableHighlight style={styles.edit} onPress={EditProduct}>
            <View style={styles.editContainer}>
              <MaterialIcons name="edit" size={20} color={colors.dark} />
              <Text style={styles.text}>Edit</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.delete} onPress={DeleteProduct}>
            <View style={styles.deleteContainer}>
              <MaterialCommunityIcons
                name="trash-can"
                size={20}
                color={colors.white}
              />
              <Text style={styles.textDelete}>Delete</Text>
            </View>
          </TouchableHighlight>
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
    height: 120,
    resizeMode: "contain",
    flex: 1,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  edit: {
    height: 40,
    width: 110,
    borderRadius: 10,
    backgroundColor: colors.yellow,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,

    // marginLeft: 50,
    // marginRight: 50,
    // marginTop: 20,
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  delete: {
    height: 40,
    width: 110,
    borderRadius: 10,
    backgroundColor: colors.danger,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  deleteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.medium,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  textDelete: {
    color: colors.white,
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default CatalogueItem;

import React from "react";
import { View, Image, StyleSheet, Button, ScrollView } from "react-native";
import { useDispatch } from "react-redux";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/lists/Text";
import { addToCart } from "../Store/cart";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: `http://127.0.0.1:8000/media/${listing.node.image}` }}
      />
      <View style={styles.detailsContainer}>
        <Button
          title="Add to Cart"
          onPress={() => {
            dispatch(
              addToCart({
                id: listing.node.id,
                name: listing.node.name,
                price: listing.node.price,
                image: listing.node.image,
                brand: listing.node.brand,
              })
            );
          }}
        />
        <Text style={styles.title}>{listing.node.name}</Text>
        <Text style={styles.price}>Rs.{listing.node.price}</Text>
        <Text>Brand: {listing.node.brand}</Text>
        <Text>{listing.node.skuSize}</Text>
        <Text>{listing.node.description}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/som.jpg")}
            title="Somnath"
            subTitle="3 Products Listed"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;

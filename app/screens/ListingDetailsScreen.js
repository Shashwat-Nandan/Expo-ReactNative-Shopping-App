import React from "react";
import { View, Image, StyleSheet, Button, ScrollView } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/lists/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: `http://127.0.0.1:8000/media/${listing.image}` }}
      />
      <View style={styles.detailsContainer}>
        <Button title="Add to Cart" onPress={() => {}} />
        <Text style={styles.title}>{listing.name}</Text>
        <Text style={styles.price}>Rs.{listing.price}</Text>
        <Text>Brand: {listing.brand}</Text>
        <Text>{listing.skuSize}</Text>
        <Text>{listing.description}</Text>
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

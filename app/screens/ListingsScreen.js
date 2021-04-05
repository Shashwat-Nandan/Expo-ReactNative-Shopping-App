import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useQuery } from "@apollo/client";

import Card from "../components/lists/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";
import { ALL_PRODUCTS_QUERY } from "../../api/productList";
import { CartContext } from "../auth/context";

// import ActivityIndicator from "../components/lists/ActivityIndicator";

function ListingsScreen({ navigation }) {
  const [cart, setCart] = useState([]);
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (error) return <Text>Error: {error.message}</Text>;
  if (loading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {/* <ActivityIndicator visible={loading ? true : false} /> */}

      <Screen style={styles.screen}>
        <FlatList
          data={data.products}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.name}
              subTitle={"Rs." + item.price}
              id={item.id}
              image={{ uri: `http://127.0.0.1:8000/media/${item.image}` }}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              AddToCart={() => setCart([item])}
            />
          )}
        />
      </Screen>
    </CartContext.Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default ListingsScreen;

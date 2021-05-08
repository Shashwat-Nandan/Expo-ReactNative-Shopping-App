import React from "react";
import { useDispatch } from "react-redux";
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
import { addToCart } from "../Store/cart";
import { CURRENT_USER_QUERY } from "../../api/user";
import PRODUCTS_BY_STORE_QUERY from "../../api/ProductsByStore";

// import ActivityIndicator from "../components/lists/ActivityIndicator";

function ListingsScreen({ navigation, route }) {
  //
  const dispatch = useDispatch();
  const store = route.params;

  // const { data, error, loading } = useQuery(PRODUCTS_BY_STORE_QUERY, {
  //   variables: {
  //     id: store.id,
  //   },
  // });

  // if (error) return <Text>Error: {error.message}</Text>;
  // if (loading)
  //   return (
  //     <View style={[styles.container, styles.horizontal]}>
  //       <ActivityIndicator size="large" color="#00ff00" />
  //     </View>
  //   );

  return (
    <FlatList
      data={store.productSet.edges}
      keyExtractor={(listing) => listing.node.id}
      renderItem={({ item }) => (
        <Screen style={styles.screen}>
          <Card
            title={item.node.name}
            subTitle={"Rs." + item.node.price}
            id={item.node.id}
            image={{ uri: `http://127.0.0.1:8000/media/${item.node.image}` }}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            AddToCart={() => {
              dispatch(
                addToCart({
                  id: item.node.id,
                  name: item.node.name,
                  price: item.node.price,
                  image: item.node.image,
                  brand: item.node.brand,
                })
              );
              // console.log(cart);
            }}
          />
        </Screen>
      )}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    // padding: 10,
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

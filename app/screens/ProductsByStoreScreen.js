import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import { useQuery, useApolloClient, useMutation } from "@apollo/client";
import { MaterialIcons } from "@expo/vector-icons";

import { CURRENT_USER_QUERY } from "../../api/user";
import CatalogueItem from "../components/CatalogueItem";
import Screen from "./Screen";
import colors from "../config/colors";
import { DELETE_PRODUCT_MUTATION } from "../../api/deleteProduct";
import CreateStoreScreen from "./CreateStoreScreen";

function ProductByStoreScreen({ navigation }) {
  const client = useApolloClient();

  const { me } = client.readQuery({
    query: CURRENT_USER_QUERY,
  });

  const [runDelete] = useMutation(DELETE_PRODUCT_MUTATION);

  //   const { me, loading, error } = useQuery(CURRENT_USER_QUERY, {
  //     fetchPolicy: "network-only",
  //   });
  //   if (loading) <Text>Loading...</Text>;
  //   if (error) <Text>{error.message}</Text>;
  // const arr = existingProducts.store.productSet.edges;

  const productByUser = me?.store.productSet.edges.map((item) => (
    // <View key={item.node.id}>
    //   <Text>{item.node.name}</Text>
    // </View>
    <CatalogueItem
      key={item.node.id}
      name={item.node.name}
      price={item.node.price}
      brand={item.node.brand}
      skuSize={item.node.skuSize}
      image={{ uri: `http://127.0.0.1:8000/media/${item.node.image}` }}
      EditProduct={() => {
        navigation.navigate("ProductUpdate", item);
      }}
      DeleteProduct={() => {
        Alert.alert(
          "Delete Product",
          "Are you sure you want to delete the product?",
          [
            {
              text: "No",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Yes",
              onPress: () =>
                runDelete({
                  variables: {
                    id: item.node.id,
                  },
                  update(cache) {
                    const newList = me.store.productSet.edges.filter(
                      (product) => product.node.id !== item.node.id
                    );
                    console.log(newList);
                    cache.writeQuery({ query: CURRENT_USER_QUERY }, newList);
                  },
                }),
            },
          ]
        );
      }}
    />
  ));
  return (
    <>
      {productByUser.length === 0 ? (
        <CreateStoreScreen />
      ) : (
        <>
          <TouchableHighlight
            style={styles.add}
            onPress={() => navigation.navigate("ListingEdit")}
          >
            <View style={styles.addContainer}>
              <MaterialIcons name="add" size={18} color={colors.white} />
              <Text style={styles.addText}>Add Product</Text>
            </View>
          </TouchableHighlight>
          <ScrollView>
            <Screen>{productByUser}</Screen>
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  add: {
    height: 40,
    width: 150,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 0,
  },
  addText: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 18,
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProductByStoreScreen;

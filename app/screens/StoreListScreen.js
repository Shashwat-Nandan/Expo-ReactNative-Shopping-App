import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  SafeAreaView,
} from "react-native";
import { useQuery } from "@apollo/client";

import STORE_LIST_QUERY from "../../api/StoreList";
import { CURRENT_USER_QUERY } from "../../api/user";
import StoreItem from "../components/StoreItem";
import Screen from "./Screen";

function StoreListScreen({ navigation }) {
  const { data, error, loading } = useQuery(STORE_LIST_QUERY);
  const { data: ProductsByUser } = useQuery(CURRENT_USER_QUERY);

  if (error) return <Text>Error: {error.message}</Text>;
  if (loading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );

  return (
    <FlatList
      data={data.stores}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <SafeAreaView>
          <StoreItem
            onPress={() => {
              navigation.navigate("listing", item);
            }}
            name={item.name}
            storeCategory="Grocery and Vegetables"
            description="Delivery within 24 hours"
            image={{
              uri: `http://127.0.0.1:8000/media/products/2021/04/23/atta.jpeg`,
            }}
          />
        </SafeAreaView>
      )}
    />
  );
}

const styles = StyleSheet.create({
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

export default StoreListScreen;

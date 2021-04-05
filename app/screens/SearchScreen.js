import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import Screen from "../screens/Screen";
import TextInput from "../components/lists/TextInput";
import { SEARCH_PRODUCT_QUERY } from "../../api/searchProduct";
import { useLazyQuery, useQuery } from "@apollo/client";

function SearchScreen(props) {
  const [query, setQuery] = useState("shampoo");
  //   const [search, setSearch] = useState("redux");

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [runQuery, { data, loading, error }] = useLazyQuery(
    SEARCH_PRODUCT_QUERY
  );

  // you can now just use the data as you would regularly do:
  if (data) {
    console.log(data);
  }

  if (loading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    );
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView>
      <TextInput
        // style={styles.input}
        placeholder="Search for the product"
        value={query}
        onChangeText={(query) => setQuery(query)}
      />
      <Button
        color="#f194ff"
        title="Search"
        onPress={() => {
          // e.preventDefault();
          console.log(query);

          runQuery({
            variables: {
              search: query,
            },
          });
          setIsLoading(false);
        }}
      />

      <View>
        {/* {data?.products.map((item) => {
          <View key={item.id}>
            <Text>{item.brand}</Text>
          </View>;
        })} */}
        {isLoading && data ? (
          <Text>Loading....</Text>
        ) : (
          data?.products.map((item) => {
            <View key={item.id}>
              <Text>{item.brand}</Text>
            </View>;
          })
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
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

export default SearchScreen;

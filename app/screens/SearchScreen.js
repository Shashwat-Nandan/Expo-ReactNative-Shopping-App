import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import Screen from "../screens/Screen";
import TextInput from "../components/lists/TextInput";
import { SEARCH_PRODUCT_QUERY } from "../../api/searchProduct";
import { useLazyQuery } from "@apollo/client";
import colors from "../config/colors";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

function SearchScreen() {
  const [query, setQuery] = useState("shampoo");
  const debouncedQuery = useDebouncedValue(query, 200);

  const [runQuery, { data, loading, error }] = useLazyQuery(
    SEARCH_PRODUCT_QUERY,
    {
      fetchPolicy: "no-cache",
    }
  );

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
        // onChange={(e) => setQuery(e.target.value)}
        onChange={(e) => setQuery(e.target.value)}
      />
      <View style={styles.viewContainer}>
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => {
            runQuery({
              variables: {
                search: debouncedQuery,
              },
            });
          }}
        >
          <Text style={styles.button}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        {/* {data &&
          data.products.map((item) => {
            <View key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>{item.price}</Text>
            </View>;
          })} */}
        {/* <Text>{data && data.products[0].name}</Text> */}
        {data?.products.length !== 0 ? (
          <Text>{data?.products[0].name}</Text>
        ) : (
          <Text>Sorry, Nothing matches your search query</Text>
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
  resultContainer: {
    marginTop: 30,
  },
  searchContainer: {
    backgroundColor: colors.yellow,
    width: 100,
    alignItems: "center",
    padding: 10,
    borderRadius: 7,
  },
  button: {
    color: colors.dark,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "capitalize",
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default SearchScreen;

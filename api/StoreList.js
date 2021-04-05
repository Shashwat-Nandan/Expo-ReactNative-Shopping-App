import React from "react";
import { useQuery, gql } from "@apollo/client";
import { View, Text } from "react-native";

import Store from "./store";

const STORE_QUERY = gql`
  query {
    stores {
      id
      name
      locationArea
    }
  }
`;

function StoreList() {
  const { data, loading, error } = useQuery(STORE_QUERY);
  if (loading) return <Text>Loading....</Text>;
  if (error) return <Text>ERROR: {error.message}</Text>;

  return (
    <View>
      {data && (
        <>
          {data.stores.map((store) => (
            <Store key={store.id} store={store} />
          ))}
        </>
      )}
    </View>
  );
}

export default StoreList;

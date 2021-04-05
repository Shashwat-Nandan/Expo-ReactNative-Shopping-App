import React from "react";
import { View, Text } from "react-native";

function Store({ store }) {
  return (
    <View>
      <Text>
        {store.name} ({store.locationArea})
      </Text>
    </View>
  );
}

export default Store;

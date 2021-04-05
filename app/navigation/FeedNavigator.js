import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="listing"
      component={ListingsScreen}
      options={{
        title: "My Shop",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf: "center",
        },
      }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{
        title: "Product Details",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: "Search",
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
  </Stack.Navigator>
);

export default SearchNavigator;

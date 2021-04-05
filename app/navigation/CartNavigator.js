import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/CartScreen";

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{
        title: "Cart",
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

export default CartNavigator;

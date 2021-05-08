import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import SearchNavigator from "./SearchNavigator";
import CartNavigator from "./CartNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ padding: 5 }}>
              <View style={styles.viewcontainer}>
                <Text style={styles.text}>{cartQuantity}</Text>
              </View>

              <MaterialCommunityIcons name="cart" color={color} size={size} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  viewcontainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "rgba(95, 197, 123, 0.8)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default AppNavigator;

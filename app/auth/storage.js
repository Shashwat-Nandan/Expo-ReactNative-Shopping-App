import * as SecureStore from "expo-secure-store";
// import { ActivityIndicator, View, Text } from "react-native";

import { CURRENT_USER } from "../../api/user";
import { useQuery } from "@apollo/client";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = () => {
  // const token = await getToken();
  const { data } = useQuery(CURRENT_USER);

  return data?.me?.username;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, getUser, removeToken, storeToken };

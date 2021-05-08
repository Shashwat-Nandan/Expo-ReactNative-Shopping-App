import * as SecureStore from "expo-secure-store";
// import { ActivityIndicator, View, Text } from "react-native";

import { CURRENT_USER_QUERY } from "../../api/user";
import { useQuery, useApolloClient } from "@apollo/client";
import AuthContext from "./context";

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

const getUser = async () => {
  // const client = useApolloClient();
  // const { user, setUser } = useContext(AuthContext);

  const token = await getToken();
  client.query(CURRENT_USER_QUERY).then((result) => setUser(result.data.me));
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, getUser, removeToken, storeToken };

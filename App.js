import React, { useState, useEffect } from "react";
import { ApolloProvider, useQuery, useApolloClient } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import navigationTheme from "./app/navigation/navigationTheme";
import client from "./api/client";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import authStorage from "./app/auth/storage";
import AuthContext from "./app/auth/context";

import useUser from "./api/user";
import { CURRENT_USER_QUERY } from "./api/user";
import store from "./app/Store/index";

function App() {
  const [user, setUser] = useState([]);
  // const [isReady, setIsReady] = useState(false);
  //
  // const client = useApolloClient();
  // client.query(CURRENT_USER_QUERY).then((result) => setUser(result.me));
  // useEffect(() => {
  //   const { data, error, loading } = useQuery(CURRENT_USER_QUERY);
  //   if (data) setUser(data.me.username);
  //   if (error) setUser("");
  // }, []);

  // const restoreUser = async () => {
  //   const user = await authStorage.getUser();
  //   if (user) setUser(user);
  // };

  // if (!isReady)
  //   return (
  //     <AppLoading
  //       startAsync={restoreUser}
  //       onFinish={() => setIsReady(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AuthContext.Provider value={{ user, setUser }}>
          <NavigationContainer theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </Provider>
    </ApolloProvider>
  );
}

export default App;

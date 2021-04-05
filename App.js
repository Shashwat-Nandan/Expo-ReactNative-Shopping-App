import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import navigationTheme from "./app/navigation/navigationTheme";
import client from "./api/client";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import authStorage from "./app/auth/storage";
import AuthContext from "./app/auth/context";
import useUser from "./api/user";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

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
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

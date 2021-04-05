import React from "react";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from "expo-secure-store";

import authStorage from "../app/auth/storage";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httplink = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8000/graphql/" }),
]);

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await authStorage.getToken();

  //   await SecureStore.getItemAsync(AUTH_TOKEN, authToken);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      AUTHORIZATION: token ? `JWT ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httplink),
  cache: new InMemoryCache(),
});

export default client;

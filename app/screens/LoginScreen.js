import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Alert,
  Text,
  ActivityIndicator,
  View,
  Button,
} from "react-native";
import * as Yup from "yup";
import { useMutation, useLazyQuery } from "@apollo/client";

import Screen from "./Screen";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import { CURRENT_USER_QUERY } from "../../api/user";

import { LOGIN_MUTATION } from "../../api/login";
import useAuth from "../auth/useAuth";
import AuthContext from "../auth/context";
import { TouchableOpacity } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const auth = useAuth();
  const { user, setUser } = useContext(AuthContext);

  // const [runQuery, { data }] = useLazyQuery(CURRENT_USER_QUERY);

  // if (data) console.log("Data Fetched");

  // const [loginFailed, setLoginFailed] = useState(false);
  //
  // const [formState, setFormState] = useState({ email: "", password: "" });

  const [tokenAuth, { error, loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ tokenAuth }) => {
      try {
        auth.logIn(tokenAuth.token);

        const user = tokenAuth.payload;
        setUser(user);
        // runQuery();
      } catch (error) {
        console.log("Token Could not be saved");
      }
      Alert.alert("Login", "You have Successfully logged In");
    },
  });
  if (loading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  if (error) return <ErrorMessage visible error={error.message} />;

  // <Text>Error: {error.message}</Text>;

  return (
    <Screen style={styles.viewcontainer}>
      <Image style={styles.logo} source={require("../assets/logo.jpg")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={({ email, password }) => {
          // setFormState({ ...formState, email: email, password: password });
          return tokenAuth({
            variables: { email, password },
          });
        }}
        validationSchema={validationSchema}
      >
        {/* <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        /> */}
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.text}>Create Account?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "blue",
    padding: 10,
  },
});

export default LoginScreen;

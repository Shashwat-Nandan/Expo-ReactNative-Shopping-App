import React, { useState } from "react";
import { StyleSheet, Alert, View, TouchableOpacity, Text } from "react-native";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";

import Screen from "./Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import REGISTER_MUTATION from "../../api/register";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [createUser] = useMutation(REGISTER_MUTATION, {
    onCompleted: ({ createUser }) => {
      Alert.alert(
        "Register",
        `${createUser.user.username} has successfully registered`
      );
      navigation.navigate("Login");
    },
  });
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ formState }}
        onSubmit={({ name, email, password }) => {
          // console.log(setFormState.email);

          createUser({
            variables: { username: name, email, password },
          });
          // resetForm({email:"", password:""});
        }}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
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
        <SubmitButton title="Register" />
      </Form>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Already have an Account?</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    color: "blue",
  },
});

export default RegisterScreen;

import React from "react";
import { StyleSheet, View, Text, ActivityIndicator, Alert } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/lists/CategoryPickerItem";
import Screen from "./Screen";
import FormImagePicker from "../components/forms/FormImagePicker";

function CheckoutScreen() {
  return (
    <Screen>
      <Form>
        <FormField maxLength={255} name="first" placeholder="First Name" />
        <FormField maxLength={255} name="last" placeholder="Last Name" />
        <FormField maxLength={255} name="Brand" placeholder="Brand" />
        <FormField
          maxLength={255}
          multiline
          name="address"
          numberOfLines={3}
          placeholder="Address"
        />
        <FormField maxLength={20} name="postalcode" placeholder="PIN Code" />
        <FormField maxLength={255} name="city" placeholder="City" />

        <SubmitButton title="Confirm Order" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default CheckoutScreen;

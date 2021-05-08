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

function CreateStoreScreen() {
  return (
    <Screen>
      <Form>
        <FormField
          maxLength={255}
          name="name"
          placeholder="Name of the Store"
        />
        <FormField
          maxLength={255}
          name="slug"
          placeholder="Store unique Name"
        />

        <FormField
          maxLength={255}
          multiline
          name="address"
          numberOfLines={3}
          placeholder="Address"
        />
        <FormField
          maxLength={255}
          name="locationArea"
          placeholder="Location Area"
        />
        <FormField maxLength={20} name="postalcode" placeholder="PIN Code" />
        <FormField maxLength={255} name="city" placeholder="City" />

        <SubmitButton title="Create My Store" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default CreateStoreScreen;

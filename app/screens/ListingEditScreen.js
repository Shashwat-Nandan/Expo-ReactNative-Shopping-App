import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from "react-native";
import * as Yup from "yup";
import { useMutation, useApolloClient } from "@apollo/client";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/lists/CategoryPickerItem";
import Screen from "./Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import NEWPRODUCT_MUTATION from "../../api/createProduct";
// import UploadScreen from "./UploadScreen";

import { ALL_PRODUCTS_QUERY } from "../../api/productList";
// import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Product Name"),
  skuSize: Yup.string().required().min(1).label("SKU SIZE"),
  Brand: Yup.string().required().min(1).label("Brand"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  // category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().max(1, "Please select only one image."),
});

//
function ListingEditScreen({ navigation }) {
  const client = useApolloClient();
  // const location = useLocation();
  // const [uploadVisible, setUploadVisible] = useState(false);
  // const [progress, setProgress] = useState(0);

  const [product, { error, loading }] = useMutation(NEWPRODUCT_MUTATION, {
    onCompleted: () => {
      Alert.alert("New Product", "You have Successfully added the product");
      navigation.navigate("listing");
    },
    // refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    update(cache, { data: { createProduct } }) {
      const data = cache.readQuery({
        query: ALL_PRODUCTS_QUERY,
      });
      // existingProducts.products = [...existingProducts.products, createProduct];
      console.log(data);
      cache.writeQuery({
        query: ALL_PRODUCTS_QUERY,
        data: {
          products: [createProduct, ...data.products],
        },
      });
    },
  });
  if (loading) {
    // (progress) => setProgress(progress);
    // setUploadVisible(true);
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  //
  if (error) {
    // setUploadVisible(false);
    return <Text>Error: {error.message}</Text>;
  }

  return (
    // <Screen style={styles.viewcontainer}>
    <SafeAreaView>
      {/* <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      /> */}
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          Brand: "",
          skuSize: "",
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={({ title, price, description, Brand, skuSize }) => {
          return product({
            variables: {
              name: title,
              price,
              skuSize,
              brand: Brand,
              description,
            },
          });
        }}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Product Name" />
        <FormField maxLength={255} name="skuSize" placeholder="SKU Size" />
        <FormField maxLength={255} name="Brand" placeholder="Brand" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        {/* <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        /> */}
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="+ Add Product" />
      </Form>
      {/* </Screen> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    padding: 10,
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
});
export default ListingEditScreen;

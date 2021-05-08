import React from "react";
import { ScrollView } from "react-native";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";

import {
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import { UPDATE_PRODUCT_MUTATION } from "../../api/updateProduct";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Product Name"),
  skuSize: Yup.string().required().min(1).label("SKU SIZE"),
  brand: Yup.string().required().min(1).label("Brand"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  // category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().max(1, "Please select only one image."),
});

function ProductUpdateScreen({ route, navigation }) {
  const product = route.params;
  const [updateProduct] = useMutation(UPDATE_PRODUCT_MUTATION, {
    onCompleted: () => navigation.navigate("catalogue"),
  });
  return (
    <Formik
      initialValues={{
        name: product.node.name,
        brand: product.node.brand,
        skuSize: product.node.skuSize,
        price: product.node.price.toString(),
        description: product.node.description,
        image: product.node.image,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        updateProduct({
          variables: {
            id: product.node.id,
            name: values.name,
            brand: values.brand,
            skuSize: values.skuSize,
            price: values.price,
            description: values.description,
            image: values.image,
            available: "true",
          },
        })
      }
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView>
          <FormImagePicker name="Image" />
          <FormField
            maxLength={255}
            name="title"
            placeholder="Product Name"
            value={values.name}
          />
          <FormField
            maxLength={100}
            name="brand"
            placeholder="Brand"
            value={values.brand}
          />
          <FormField
            maxLength={100}
            name="skuSize"
            placeholder="SKU Size"
            value={values.skuSize}
            width={150}
          />
          <FormField
            maxLength={8}
            name="price"
            placeholder="Price"
            width={120}
            value={values.price}
          />
          <FormField
            maxLength={255}
            name="description"
            placeholder="Price"
            numberOfLines={3}
            value={values.description}
          />
          <SubmitButton title="Update Product" />
        </ScrollView>
      )}
    </Formik>
  );
}

export default ProductUpdateScreen;

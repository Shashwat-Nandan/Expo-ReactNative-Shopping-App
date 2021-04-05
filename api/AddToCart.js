import React from "react";
import { useMutation, gql } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./user";
import { Button } from "react-native";

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return <Button title="Add to Cart" onClick={addToCart} />;
}

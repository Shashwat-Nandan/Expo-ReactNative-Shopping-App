import { gql } from "@apollo/client";

const NEWPRODUCT_MUTATION = gql`
  mutation NewProductMutation(
    $name: String!
    $skuSize: String!
    $brand: String!
    $description: String
    $price: Float!
  ) {
    createProduct(
      name: $name
      skuSize: $skuSize
      brand: $brand
      description: $description
      price: $price
    ) {
      id
      name
      brand
      price
    }
  }
`;

export default NEWPRODUCT_MUTATION;

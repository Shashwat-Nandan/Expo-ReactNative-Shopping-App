import { gql } from "@apollo/client";

const UPDATE_PRODUCT_MUTATION = gql`
  mutation Update_Product(
    $id: ID!
    $brand: String
    $description: String
    $image: String
    $name: String
    $price: Float
    $skuSize: String
    $available: Boolean
  ) {
    updateProduct(
      id: $id
      brand: $brand
      description: $description
      image: $image
      name: $name
      price: $price
      skuSize: $skuSize
      available: $available
    ) {
      product {
        id
        name
        brand
        description
        image
        price
        skuSize
      }
    }
  }
`;

export { UPDATE_PRODUCT_MUTATION };

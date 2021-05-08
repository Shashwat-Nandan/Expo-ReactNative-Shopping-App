import { gql } from "@apollo/client";

const DELETE_PRODUCT_MUTATION = gql`
  mutation Delete_Product($id: ID!) {
    deleteProduct(id: $id) {
      product {
        id
        name
      }
    }
  }
`;

export { DELETE_PRODUCT_MUTATION };

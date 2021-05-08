import { gql } from "@apollo/client";

const PRODUCTS_BY_USER_QUERY = gql`
  query PRODUCTS_BY_USER_QUERY($id: Int!) {
    user(id: $id) {
      store {
        productSet {
          edges {
            node {
              id
              name
              description
              price
              skuSize
              brand
              available
            }
          }
        }
      }
    }
  }
`;

export default PRODUCTS_BY_USER_QUERY;

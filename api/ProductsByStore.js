import { gql } from "@apollo/client";

const PRODUCTS_BY_STORE_QUERY = gql`
  query PRODUCTS_BY_STORE_QUERY($id: Int!) {
    store(id: $id) {
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
`;

export default PRODUCTS_BY_STORE_QUERY;

import { gql } from "@apollo/client";

const STORE_LIST_QUERY = gql`
  query {
    stores {
      id
      name
      locationArea
      productSet {
        edges {
          node {
            id
            name
            brand
            available
            skuSize
            description
            image
            price
          }
        }
      }
    }
  }
`;

export default STORE_LIST_QUERY;

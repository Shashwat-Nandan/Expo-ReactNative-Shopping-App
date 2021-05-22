import { gql } from "@apollo/client";

const SEARCH_PRODUCT_QUERY = gql`
  query Search_Product($search: String) {
    products(search: $search) {
      id
      name
      brand
      description
      image
      price
      skuSize
      store {
        id
        name
        locationArea
      }
    }
  }
`;

export { SEARCH_PRODUCT_QUERY };

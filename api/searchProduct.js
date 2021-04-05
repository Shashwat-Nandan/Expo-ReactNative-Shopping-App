import { gql, useQuery } from "@apollo/client";

const SEARCH_PRODUCT_QUERY = gql`
  query Search_Product($search: String) {
    products(search: $search) {
      id
      brand
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

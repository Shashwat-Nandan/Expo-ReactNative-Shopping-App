import { gql, useQuery } from "@apollo/client";

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      name
      brand
      id
      description
      image
      price
      skuSize
    }
  }
`;

export { ALL_PRODUCTS_QUERY };

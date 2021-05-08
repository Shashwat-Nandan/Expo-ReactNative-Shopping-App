import { gql, useQuery } from "@apollo/client";

const CURRENT_USER_QUERY = gql`
  query Current_User {
    me {
      username
      email
      id
      kind
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
              image
            }
          }
        }
      }
    }
  }
`;

export default function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.me.username;
}

export { CURRENT_USER_QUERY };

import { gql, useQuery } from "@apollo/client";

const CURRENT_USER_QUERY = gql`
  query Current_User {
    me {
      username
      email
      id
      kind
      cartSet {
        id
        quantity
        product {
          id
          price
          name
          description
          image
        }
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.me;
}

export { CURRENT_USER_QUERY };

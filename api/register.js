import { gql } from "@apollo/client";

const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        email
        username
      }
    }
  }
`;

export default REGISTER_MUTATION;

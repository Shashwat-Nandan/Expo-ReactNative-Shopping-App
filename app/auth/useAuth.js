import { useContext } from "react";

import authStorage from "./storage";
import AuthContext from "./context";
import { useQuery, useApolloClient } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../../api/user";

const useAuth = () => {
  // const { user, setUser } = useContext(AuthContext);
  // const client = useApolloClient();

  const logIn = (authToken) => {
    authStorage.storeToken(authToken);
    // client.query(CURRENT_USER_QUERY).then((result) => setUser(result.data.me));
    // const user = authStorage.getUser();
    // setUser(data.me);
  };

  const logOut = () => {
    // setUser(null);
    authStorage.removeToken();
  };

  return { logIn, logOut };
};

export default useAuth;

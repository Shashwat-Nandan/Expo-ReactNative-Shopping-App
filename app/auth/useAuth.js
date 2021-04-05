import { useContext } from "react";

import authStorage from "./storage";
// import AuthContext from "./context";

export default useAuth = () => {
  // const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    authStorage.storeToken(authToken);
    // const user = authStorage.getUser();
    // setUser(user);
  };

  const logOut = () => {
    // setUser(null);
    authStorage.removeToken();
  };

  return { logIn, logOut };
};

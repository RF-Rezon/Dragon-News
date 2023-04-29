import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import app from './../Auth/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const user = null

const Authprovider = ({ children }) => {

  const authInfo = {user};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Authprovider;

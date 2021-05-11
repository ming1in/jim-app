import React, { createContext, useState } from "react";

import useUsers from "../hooks/useUsers";

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContext {}

export const AuthContext = createContext(null);

function AuthProvider(props: IAuthProviderProps) {
  const users = useUsers();

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthContext.Provider value={null}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;

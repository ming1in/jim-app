import React, { createContext, useState, useEffect } from "react";

import { IUser } from "../interfaces/user";

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContext {
  currentUser?: IUser;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser>>
}

export const AuthContext = createContext<IAuthContext | null>(null);

function AuthProvider(props: IAuthProviderProps) {
  const currentUserCached = JSON.parse(localStorage.getItem("currentUser")!);

  const [currentUser, setCurrentUser] = useState<IUser>(currentUserCached || null);

  useEffect(() => {
    if(currentUser) localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

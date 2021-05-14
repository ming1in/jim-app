import React, { createContext, useState, useEffect } from "react";

import { IUser } from "../interfaces/user";

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContext {
  signout: () => void;
  currentUser: IUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

export const AuthContext = createContext<IAuthContext | null>(null);

function AuthProvider(props: IAuthProviderProps) {
  const currentUserCached = JSON.parse(localStorage.getItem("currentUser")!);

  const [currentUser, setCurrentUser] = useState<IUser | null>(currentUserCached || null);

  const signout = () => {
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
  }

  useEffect(() => {
    if (currentUser) localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ signout, currentUser, setCurrentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

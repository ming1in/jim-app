/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "react-query";
import axios from "axios";

import { IAuthCredentials } from "../interfaces/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const baseUrl = "http://localhost:5000";

export default function useAuth() {
  const auth = useContext(AuthContext);

  const signup = useMutation(
    (credentials: IAuthCredentials) =>
      axios.post(`${baseUrl}/auth/signup`, credentials),
    {
      onSuccess: ({ data }) => {
        auth?.setCurrentUser(data);
      },
    }
  );

  const register = useMutation((details) =>
    axios.post(`${baseUrl}/auth/register`, details)
  );

  return { signup, register };
}

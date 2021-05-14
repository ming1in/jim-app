import { useContext } from "react";

import { useMutation } from "react-query";
import axios from "axios";
import moment from "moment";

import { IAuthCredentials } from "../interfaces/auth";
import { AuthContext } from "../context/AuthProvider";
import { EApi } from "../enums/api";

export default function useAuth() {
  const auth = useContext(AuthContext);

  const signup = useMutation(
    (credentials: IAuthCredentials) => axios.post(EApi.SIGNUP, credentials),
    {
      onSuccess: ({ data }) => auth?.setCurrentUser(data),
    }
  );

  const register = useMutation(
    (details: any) =>
      axios.post(EApi.REGISTER, {
        ...auth?.currentUser,
        ...details,
        registeredAt: moment().toISOString(),
      }),
    {
      onSuccess: ({ data }) => auth?.setCurrentUser(data),
    }
  );

  const login = useMutation(
    (credentials: IAuthCredentials) => axios.post(EApi.LOGIN, credentials),
    {
      onSuccess: ({ data }) => auth?.setCurrentUser(data),
    }
  );

  return { signup, register, login };
}

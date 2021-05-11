/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

export default function useUsers() {
  const baseUrl = "http://localhost:5000";

  const getUsers = async (): Promise<AxiosResponse> => {
    const users = await axios.get(`${baseUrl}/users`);
    return users.data;
  };

  const getAll = () => useQuery('getUsers', getUsers)

  return { getAll };
}


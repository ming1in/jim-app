/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useQuery } from "react-query";

export default function useUsers() {
  const baseUrl = "http://localhost:5000";

  const getAll = () =>
    useQuery("getUsers", () => axios.get(`${baseUrl}/users`),
    );

  return { getAll };
}


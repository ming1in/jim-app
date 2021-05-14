import { useContext } from "react";

import axios from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router";

import { AuthContext } from "../context/AuthProvider";
import { EApi } from "../enums/api";
import { ERoute } from "../enums/route";

export default function useUsers() {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const update = useMutation(
    (details: any) =>
      axios.post(`${EApi.EDIT_USER}/${auth?.currentUser?._id}`, {...auth?.currentUser ,...details}),
    {
      onSuccess: ({ data }) => {
        history.push(ERoute.PROFILE);
      },
    }
  );

  return { update };
}

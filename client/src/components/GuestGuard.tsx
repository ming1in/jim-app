import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { ERoute } from "../enums/route";

interface IGuestGuardProps {
  children: React.ReactChild;
}

export default function GuestGuard(props: IGuestGuardProps): JSX.Element {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext?.currentUser) history.push(ERoute.WORKOUT);
  }, [authContext?.currentUser]);

  return <>{props.children}</>;
}

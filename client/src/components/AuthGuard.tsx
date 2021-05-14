import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { ERoute } from "../enums/route";

interface IAuthGuardProps {
  children: React.ReactChild;
}

export default function AuthGuard(props: IAuthGuardProps): JSX.Element {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (!authContext?.currentUser) history.push(ERoute.LOGIN);
    if (!authContext?.currentUser?.registeredAt) history.push(ERoute.REGISTER);
  }, [authContext?.currentUser]);

  return <>{props.children}</>;
}

import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { ERoute } from "../enums/route";

interface IRegistrationGuardProps {
  children: React.ReactChild;
}

export default function RegistrationGuard(props: IRegistrationGuardProps): JSX.Element {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (!authContext?.currentUser) history.push(ERoute.LOGIN);
    else if (authContext?.currentUser!.registeredAt) history.push(ERoute.HOME);
  }, [authContext?.currentUser]);

  return <>{props.children}</>;
}

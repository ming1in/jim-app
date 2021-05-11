import React, { Fragment, lazy, LazyExoticComponent, Suspense } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import { ERoute } from "./enums/route";
import MainLayout from "./layouts/MainLayout";
import LoadingView from "./views/util/LoadingView";

interface RouteConfig {
  exact: boolean;
  path: string;
  component: (() => JSX.Element) | LazyExoticComponent<any>;
}

const WorkoutView = lazy(() => import("./views/workout/WorkoutView"));
const SignUpView = lazy(() => import("./views/auth/SignUpView"));
const LoginView = lazy(() => import("./views/auth/LoginView"));
const RegistrationView = lazy(() => import("./views/auth/RegistrationView"))

const routesConfig: RouteConfig[] = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to={ERoute.WORKOUT} />,
  },
  {
    exact: true,
    path: ERoute.WORKOUT,
    component: WorkoutView,
  },
  {
    exact: true,
    path: ERoute.SIGNUP,
    component: SignUpView,
  },
  {
    exact: true,
    path: ERoute.LOGIN,
    component: LoginView,
  },
  {
    exact: true,
    path: ERoute.LOGIN,
    component: LoginView,
  },
  {
    exact: true,
    path: ERoute.REGISTER,
    component: RegistrationView,
  },
];

const renderRoutes = (routes: RouteConfig[]): JSX.Element => (
  <Suspense fallback={LoadingView}>
    <Switch>
      {routes.map((route: any, i: number) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                <Component {...props} />
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;

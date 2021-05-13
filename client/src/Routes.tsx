import React, { Fragment, lazy, LazyExoticComponent, Suspense } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { ERoute } from "./enums/route";
import LoadingView from "./views/util/LoadingView";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";
import RegistrationGuard from "./components/RegistrationGuard";

interface RouteConfig {
  exact: boolean;
  path: string;
  guard?: any;
  component: (() => JSX.Element) | LazyExoticComponent<any>;
}

const WorkoutView = lazy(() => import("./views/workout/WorkoutView"));
const SignUpView = lazy(() => import("./views/auth/SignUpView"));
const LoginView = lazy(() => import("./views/auth/LoginView"));
const RegistrationView = lazy(() => import("./views/auth/RegistrationView"));
const ProfileView = lazy(() => import('./views/profile/ProfileView'));
const OptionsView = lazy(() => import('./views/workout/OptionsView'));
const LaunchView = lazy(() => import('./views/workout/LaunchView'));
const BuildView = lazy(() => import('./views/workout/BuildView'));
const EditProfileView = lazy(() => import('./views/profile/EditProfileView'));


const routesConfig: RouteConfig[] = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to={ERoute.WORKOUT} />,
  },
  {
    exact: true,
    path: ERoute.WORKOUT,
    guard: AuthGuard,
    component: WorkoutView,
  },
  {
    exact: true,
    path: ERoute.SIGNUP,
    guard: GuestGuard,
    component: SignUpView,
  },
  {
    exact: true,
    path: ERoute.LOGIN,
    guard: GuestGuard,
    component: LoginView,
  },
  {
    exact: true,
    path: ERoute.REGISTER,
    guard: RegistrationGuard,
    component: RegistrationView,
  },
  {
    exact: true,
    path: ERoute.PROFILE,
    component: ProfileView
  },
  {
    exact: true,
    path: ERoute.OPTIONS,
    component: OptionsView
  },
  {
    exact: true,
    path: '/LaunchView',
    component: LaunchView
  },
  {
    exact: true,
    path: ERoute.BUILD,
    component: BuildView,
  },
  {
  exact: true,
  path: ERoute.EDITPROFILE,
  component: EditProfileView,
  }
];

const renderRoutes = (routes: RouteConfig[]): JSX.Element => (
  <Suspense fallback={LoadingView}>
    <Switch>
      {routes.map((route: any, i: number) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  <Component {...props} />
                </Layout>
              </Guard>
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

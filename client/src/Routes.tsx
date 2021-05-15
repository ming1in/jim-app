import React, { Fragment, lazy, LazyExoticComponent, Suspense } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { ERoute } from "./enums/route";
import LoadingView from "./views/util/LoadingView";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";
import RegistrationGuard from "./components/RegistrationGuard";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

interface RouteConfig {
  exact: boolean;
  path: string;
  guard?: any;
  layout?: any;
  component: (() => JSX.Element) | LazyExoticComponent<any>;
}

const SignUpView = lazy(() => import("./views/auth/SignUpView"));
const LoginView = lazy(() => import("./views/auth/LoginView"));
const RegistrationView = lazy(() => import("./views/auth/RegistrationView"));

const ProfileView = lazy(() => import("./views/profile/ProfileView"));
const EditProfileView = lazy(() => import("./views/profile/EditProfileView"));

const HomeWorkoutView = lazy(() => import("./views/workout/HomeWorkoutView"));
const BuildWorkoutView = lazy(() => import("./views/workout/BuildWorkoutView"));
const WorkoutView = lazy(() => import("./views/workout/WorkoutView"));

const routesConfig: RouteConfig[] = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to={ERoute.HOME} />,
  },
  {
    exact: true,
    path: ERoute.SIGNUP,
    layout: AuthLayout,
    guard: GuestGuard,
    component: SignUpView,
  },
  {
    exact: true,
    path: ERoute.LOGIN,
    layout: AuthLayout,
    guard: GuestGuard,
    component: LoginView,
  },
  {
    exact: true,
    path: ERoute.REGISTER,
    layout: AuthLayout,
    guard: RegistrationGuard,
    component: RegistrationView,
  },
  {
    exact: true,
    path: ERoute.PROFILE,
    guard: AuthGuard,
    layout: MainLayout,
    component: ProfileView,
  },
  {
    exact: true,
    path: ERoute.EDIT_PROFILE,
    layout: MainLayout,
    component: EditProfileView,
  },
  {
    exact: true,
    path: ERoute.HOME,
    guard: AuthGuard,
    layout: MainLayout,
    component: HomeWorkoutView,
  },
  {
    exact: true,
    path: ERoute.BUILD,
    layout: MainLayout,
    component: BuildWorkoutView,
  },
  {
    exact: true,
    path: `${ERoute.WORKOUT}/:workoutId`,
    layout: MainLayout,
    component: WorkoutView,
  },
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

export default function Routes() {
  return renderRoutes(routesConfig);
}

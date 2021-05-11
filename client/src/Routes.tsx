/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, lazy, LazyExoticComponent, Suspense } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { ERoute } from './enums/route';

import LoadingView from './views/util/LoadingView';

interface RouteConfig {
  exact: boolean;
  path: string;
  component: (() => JSX.Element) | LazyExoticComponent<any>;
}

const WorkoutView = lazy(() => import('./views/workout/WorkoutView'));
const ProfileView = lazy(() => import('./views/profile/ProfileView'));
const AuthView = lazy(() => import('./views/auth/AuthView'));
const OptionsView = lazy(() => import('./views/workout/OptionsView'));
const LaunchView = lazy(() => import('./views/workout/LaunchView'));
const BuildView = lazy(() => import('./views/workout/BuildView'));

const routesConfig: RouteConfig[] = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to={ERoute.WORKOUT} />
  },
  {
    exact: true,
    path: ERoute.WORKOUT,
    component: WorkoutView
  },
  {
    exact: true,
    path: ERoute.PROFILE,
    component: ProfileView
  },
  {
    exact: true,
    path: ERoute.AUTH,
    component: AuthView
  },
  {
    exact: true,
    path: '/OptionsView',
    component: OptionsView
  },
  {
    exact: true,
    path: '/LaunchView',
    component: LaunchView
  },
  {
    exact: true,
    path: '/BuildView',
    component: BuildView
  }
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

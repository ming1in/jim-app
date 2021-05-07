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

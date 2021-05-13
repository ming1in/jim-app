import React from 'react';

import { Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';

import { themeConfig } from './theme';
import Routes from './Routes';
import MainLayout from './layouts/MainLayout';

function App() {
  const history = createBrowserHistory();

  return (
    <ThemeProvider theme={themeConfig}>
      <Router history={history}>
        <CssBaseline />
        <MainLayout>
          <Routes />
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

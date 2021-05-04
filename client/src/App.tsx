import React from "react";
import { Link, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div>
        <header>
          <p>The Jim-App </p>
        </header>
      </div>
    </Router>
  );
}

export default App;

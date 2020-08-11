import React from 'react';

import Home from './features/home';
import DocumentScreen from './features/documents';
import store, { history } from './store';

import { Switch, Route } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { Provider } from 'react-redux';

import './app.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/patents">
              <DocumentScreen />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

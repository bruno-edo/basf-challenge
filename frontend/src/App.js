import React from 'react';

import Home from './features/home';
import DocumentScreen from './features/documents';
import store, { history } from './store';

import { Switch, Route } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { Provider } from 'react-redux';

import { Sidebar } from './components';

import './app.css';

const App = () => {
  return (
    <div className="Container">
      <Provider store={store}>
        <Router history={history}>
          
          <Sidebar />

          <div className="App">
            <Switch>
              <Route path="/patents">
                <DocumentScreen />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

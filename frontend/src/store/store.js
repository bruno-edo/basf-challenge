import createSagaMiddleware from "redux-saga";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import chemicalReducer from './chemicalReducer';
import sagas from './sagas';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  chemicals: chemicalReducer,
});

const history = createBrowserHistory();
const reducers = createRootReducer(history);

const routingMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(applyMiddleware(routingMiddleware, sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export { history };

export default store;
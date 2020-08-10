import createSagaMiddleware from "redux-saga";

import { createStore, combineReducers, applyMiddleware } from "redux";

import chemicalReducer from './chemicalReducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  chemicals: chemicalReducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store;
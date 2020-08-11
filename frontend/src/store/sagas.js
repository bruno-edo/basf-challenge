import { all } from "redux-saga/effects";

import chemicalSagas from './chemicalSagas';

import { sagas as documentSagas } from '../features/documents';

export default function* rootSaga() {
    yield all([...chemicalSagas, ...documentSagas]);
}
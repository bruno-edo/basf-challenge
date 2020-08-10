import { all } from "redux-saga/effects";

import chemicalSagas from './chemicalSagas';

export default function* rootSaga() {
    yield all([...chemicalSagas]);
}
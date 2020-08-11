import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import api from '../api';

import { Types, Creators } from "./chemicalReducer";

function* queryRequest({ queryString }) {
    const response = yield call(api.getChemicalList, queryString);

    if (response.ok) {
        yield put(Creators.querySuccess(response.data, queryString));
    } else {
        yield put(Creators.queryFailure());
    }
}

export default [
    takeLatest(Types.QUERY_REQUEST, queryRequest),
];
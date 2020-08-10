import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import api from '../api';

import { Types, Creators } from "./chemicalReducer";

function* queryRequest({ queryString }) {
    const response = yield call(api.getChemicalList, queryString);

    if (response.ok) {
        yield put(Creators.querySuccess(response.data));
    } else {
        yield put(Creators.queryFailure());
    }
}

function* querySuccess() {
    yield put(push("/chemicals"))
}

export default [
    takeLatest(Types.QUERY_REQUEST, queryRequest),
    takeLatest(Types.QUERY_SUCCESS, querySuccess)
];
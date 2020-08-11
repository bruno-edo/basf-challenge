import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import api from "../../api";

import { Types, Creators } from "./reducer";

function* queryDocumentsRequest({ chemicalName, chemicalType }) {
  const response = yield call(api.getPatentList, chemicalName, chemicalType);

  if (response.ok) {
      console.log('response.data', response.data);
    yield put(Creators.queryDocumentsSuccess(response.data));
  } else {
    yield put(Creators.queryDocumentsFailure());
  }
}

function* queryDocumentsSuccess() {
  yield put(push("/patents"));
}

export default [
  takeLatest(Types.QUERY_DOCUMENTS_REQUEST, queryDocumentsRequest),
  takeLatest(Types.QUERY_DOCUMENTS_SUCCESS, queryDocumentsSuccess),
];

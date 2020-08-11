import { createActions, createReducer } from "reduxsauce";

export const INITIAL_STATE = {
  totalDocuments: 0,
  loading: false,
  error: false,
  documents: [],
};

export const { Types, Creators } = createActions({
  queryDocumentsRequest: ["chemicalName", "chemicalType"],
  queryDocumentsSuccess: ["data"],
  queryDocumentsFailure: null,
});

const queryDocumentsRequest = (state) => ({
  ...state,
  loading: true,
  error: false,
});

const queryDocumentsSuccess = (state, { data }) => ({
  ...state,
  documents: data.map(({ patent }) => ({
    id: patent.num,
    title: patent.title.toUpperCase(),
  })),
});

const queryDocumentsFailure = (state) => ({
  ...state,
  loading: false,
  error: true,
});

export const HANDLERS = {
  [Types.QUERY_DOCUMENTS_REQUEST]: queryDocumentsRequest,
  [Types.QUERY_DOCUMENTS_SUCCESS]: queryDocumentsSuccess,
  [Types.QUERY_DOCUMENTS_FAILURE]: queryDocumentsFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);

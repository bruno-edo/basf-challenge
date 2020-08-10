import { createActions, createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  hasData: false,
  chemicals: {}
};

export const { Types, Creators } = createActions({
  queryRequest: ['queryString'],
  querySuccess: ['data'],
  queryFailure: null,
});


const queryRequest = (state, { queryString }) => ({
  ...state,
  loading: true,
  error: false,
});

const querySuccess = (state, { data }) => ({
  ...state,
  loading: false,
  error: false,
  chemicals: data,
});

const queryFailure = (state, {}) => ({
  ...state,
  loading: false,
  error: true,
});

export const HANDLERS = {
  [Types.QUERY_REQUEST]: queryRequest,
  [Types.QUERY_SUCCESS]: querySuccess,
  [Types.QUERY_FAILURE]: queryFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
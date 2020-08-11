import { createActions, createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  totalDocuments: 0,
  loading: false,
  error: false,
  queryExecuted: false,
  chemicals: {}
};

export const { Types, Creators } = createActions({
  queryRequest: ['queryString'],
  querySuccess: ['data', 'queryString'],
  queryFailure: null,
});


const queryRequest = (state, { queryString }) => ({
  ...state,
  loading: true,
  error: false,
});

const querySuccess = (state, { data, queryString }) => {
  const mainChemical = data.find(
    ({ chemical }) =>
      chemical.name.toLowerCase() === queryString.toLowerCase()
  );

  const totalDocuments = mainChemical ? mainChemical.chemicalTotal : 0;

  return {
    ...state,
    totalDocuments: totalDocuments,
    queryExecuted: true,
    loading: false,
    error: false,
    chemicals: data.reduce((acc, currentValue) => {
      const chemicalTypeKey = `type${currentValue.chemical.type}`;

      if (!(chemicalTypeKey in acc)) {
        acc[chemicalTypeKey] = [];
      }

      acc[chemicalTypeKey].push({
        numDocResults: currentValue.chemicalTotal,
        name: currentValue.chemical.name.replace(
          /\w\S*/g,
          (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        ),
      });

      return acc;
    }, {}),
  };
};

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
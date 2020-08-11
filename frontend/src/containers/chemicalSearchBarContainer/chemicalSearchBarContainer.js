import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Creators } from "../../store/chemicalReducer";
import { SearchBar } from '../../components';

const ChemicalSearchBarContainer = () => {
    const dispatch = useDispatch();

    const { loading, error } = useSelector(
      ({ chemicals }) => chemicals
    );

    return (
      <SearchBar
        error={error}
        loading={loading}
        submitCallback={(query) => dispatch(Creators.queryRequest(query))}
      />
    );
};

export default ChemicalSearchBarContainer;

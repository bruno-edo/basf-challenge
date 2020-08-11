import React from "react";

import { CircularProgress } from "@material-ui/core";
import { useSelector } from 'react-redux';

import "./css/home.css";

import { ChemicalSectionContainer } from './containers';
import { ChemicalSearchBarContainer } from '../../containers';

const Screen = () => {
    const { loading, queryExecuted } = useSelector(
        ({ chemicals }) => chemicals
    )
    
    return (
      <div className="App">
        <div className="Input-search-container">
          <span className="App-link">Type your search here</span>
          <div className="Input-search">
            <ChemicalSearchBarContainer />
          </div>
          {loading ? <CircularProgress /> : null}
        </div>
        {queryExecuted ? <ChemicalSectionContainer /> : null}
      </div>
    );
};

export default Screen;
import React from "react";

import { CircularProgress } from "@material-ui/core";
import { useSelector } from 'react-redux';

import "./css/home.css";

import { ChemicalSearchBarContainer } from '../../containers';

const Home = () => {
    const { loading, hasData } = useSelector(
        ({ chemicals }) => chemicals
    )
    
    return (
      <div className="App">
        <div className="App-header">
          <span className="App-link">Type your search here</span>
          <div className="Input-search">
            <ChemicalSearchBarContainer />
          </div>
          {hasData ? <span>No data to show</span> : null}
          {loading ? <CircularProgress /> : null}
        </div>
      </div>
    );
};

export default Home;
import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import { Paper } from "@material-ui/core";

import { ChemicalTableContainer } from "../containers";

import "../css/home.css";

const ChemicalSectionComponent = ({
  dataChemicalType1,
  dataChemicalType2,
  totalDocuments,
}) => (
  <div className="Search-result-container">
    <Paper className="Total-paper">
      <div className="Total-documents-icon-container">
        <LibraryBooksIcon
          style={{ fontSize: 64, color: "white" }}
          className="Icon"
        />
      </div>

      <div className="Total-documents-text-container">
        <span className="App-link">Total Documents</span>
        <span className="Total-documents-text">{totalDocuments}</span>
      </div>
    </Paper>

    <div className="Tables-container">
      <div className="Table-1">
        <ChemicalTableContainer
          data={dataChemicalType1}
          title="Chemical Type 1"
        />
      </div>
      <div className="Table-2">
        <ChemicalTableContainer
          data={dataChemicalType2}
          title="Chemical Type 2"
        />
      </div>
    </div>
  </div>
);

export default ChemicalSectionComponent;;
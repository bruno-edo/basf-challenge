import React from "react";

import { useSelector } from "react-redux";

import ChemicalTableContainer from "./containers/chemicalTableContainer";

import "./css/chemicals.css";


const Chemicals = () => {
  const { chemicals } = useSelector(({ chemicals }) => chemicals);

  const dataChemicalType1 = chemicals["type1"] ? chemicals["type1"] : [];
  const dataChemicalType2 = chemicals["type2"] ? chemicals["type2"] : [];

  return (
    <div className="Container">
      <div>{/* TODO */}</div>

      <div className="TablesContainer">
        <div className="Table1">
          <ChemicalTableContainer
            data={dataChemicalType1}
            title="Chemical Type 1"
          />
        </div>
        <div className="Table2">
          <ChemicalTableContainer
            data={dataChemicalType2}
            title="Chemical Type 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Chemicals;

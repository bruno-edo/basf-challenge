import React from "react";

import { useSelector } from "react-redux";

import ChemicalTableContainer from "./containers/chemicalTableContainer";

import "./css/chemicals.css";


const Chemicals = () => {
  const { chemicals } = useSelector(({ chemicals }) => chemicals);

  const dataChemicalType1 = chemicals["type1"];
  const dataChemicalType2 = chemicals["type2"];

  return (
    <div style={{ width: "100%" }}>
      <div>{/* TODO */}</div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: 10, width: "100%" }}>
          <ChemicalTableContainer
            data={dataChemicalType1}
            title="Chemical Type 1"
          />
        </div>
        <div style={{ marginLeft: 10, width: "100%" }}>
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

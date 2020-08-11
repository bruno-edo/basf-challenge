import React from "react";

import { useSelector } from "react-redux";

import { ChemicalSectionComponent } from '../components';

import "../css/home.css";


const ChemicalsSectionContainer = () => {
  const { chemicals, totalDocuments } = useSelector(
    ({ chemicals }) => chemicals
  );

  const dataChemicalType1 = chemicals["type1"] ? chemicals["type1"] : [];
  const dataChemicalType2 = chemicals["type2"] ? chemicals["type2"] : [];

  return (
    <ChemicalSectionComponent
      dataChemicalType1={dataChemicalType1}
      dataChemicalType2={dataChemicalType2}
      totalDocuments={totalDocuments}
    />
  );
};

export default ChemicalsSectionContainer;

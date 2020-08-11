import React from 'react';

import { Table } from '../../../components';

const ChemicalTableContainer = ({ data, title }) => {
  const columns = [
    { title: "Name", field: "name" },
    { title: "#Documents", field: "numDocResults", type: "numeric" },
  ];
  return (
    <Table data={data} columns={columns} title={title} />
  );
};

export default ChemicalTableContainer;

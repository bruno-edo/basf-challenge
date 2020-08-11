import React from 'react';

import { useDispatch } from "react-redux";

import { Table } from '../../../components';
import { DocumentsActionCreators  } from "../../documents";

const ChemicalTableContainer = ({ data, title, type }) => {
  const dispatch = useDispatch();

  const columns = [
    { title: "Name", field: "name" },
    { title: "#Documents", field: "numDocResults", type: "numeric" },
  ];

  const onRowClickCallback = (_, { name }) =>
    dispatch(DocumentsActionCreators.queryDocumentsRequest(name, type));

  return (
    <Table
      data={data}
      columns={columns}
      title={title}
      onRowClick={onRowClickCallback}
    />
  );
};

export default ChemicalTableContainer;

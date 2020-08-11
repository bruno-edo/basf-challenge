import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/icons/Link";
import PictureAsPdf from "@material-ui/icons/PictureAsPdf";

import { useSelector } from "react-redux";

import { Table } from '../../components';

import './css/documents.css';

const Screen = () => {
    const { documents } = useSelector(({ documents }) => documents);
    const columns = [
      { title: "DocId", field: "id", width: "15%" },
      { title: "Title", field: "title" },
      {
        title: "Actions",
        field: "id",
        render: ({ id }) => (
          <div className="Action-buttons-containers">
            <IconButton aria-label="PDF" disabled>
              <PictureAsPdf />
            </IconButton>
            <IconButton
              aria-label="link"
              onClick={() =>
                window.location.assign(
                  `https://patents.google.com/patent/${id}`
                )
              }
            >
              <Link />
            </IconButton>
          </div>
        ),
        width: "10%",
      },
    ];

    return (
        <div style={{ width: "100%" }}>
            <Table
                data={documents}
                columns={columns}
                title="Available documents"
            />
        </div>
    );
};

export default Screen;
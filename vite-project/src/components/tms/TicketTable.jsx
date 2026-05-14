import React from "react";

import { DataGrid } from "@mui/x-data-grid";

import Box from "@mui/material/Box";

import useTicketStore from "../../store/ticketStore.js";

import PriorityChip from "./PriorityChip.jsx";
import StatusChip from "./StatusChip.jsx";

import "../../styles/tms.css";

const TicketTable = () => {

  const { tickets } = useTicketStore();

  const columns = [

    {
      field: "ticketNumber",
      headerName: "Ticket Number",
      width: 170,
    },

    {
      field: "title",
      headerName: "Title",
      width: 220,
    },

    {
      field: "category",
      headerName: "Category",
      width: 150,
    },

    {
      field: "requestedFor",
      headerName: "Requested For",
      width: 180,
    },

    {
      field: "priority",
      headerName: "Priority",
      width: 130,

      renderCell: (params) => (
        <PriorityChip priority={params.value} />
      ),
    },

    {
      field: "assignedTo",
      headerName: "Assigned To",
      width: 170,
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,

      renderCell: (params) => (
        <StatusChip status={params.value} />
      ),
    },

    {
      field: "attachments",
      headerName: "Attachments",
      width: 180,
    },
  ];

  return (
    <Box
      className = "ticket-table-container"
    >
      <DataGrid className="ticket-data-grid"
        rows={tickets}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default TicketTable;
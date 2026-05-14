import React from "react";

import {
  Box,
  MenuItem,
  Select,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import useTicketStore from "../../store/ticketStore";

import PriorityChip from "../tms/PriorityChip";
import StatusChip from "../tms/StatusChip";

const SUPPORT_AGENTS = [
  "Ranjith",
  "Rahul",
  "Network Team",
  "Infra Team",
];

const AdminTicketTable = () => {

  const {
    tickets,
    updateTicket,
  } = useTicketStore();

  const handleAssign = (
    ticketId,
    assignedTo
  ) => {

    updateTicket(ticketId, {
      assignedTo,
      status: "In Progress",
    });
  };

  const columns = [

    {
      field: "ticketNumber",
      headerName: "Ticket No",
      flex: 1,
      minWidth: 150,
    },

    {
      field: "createdBy",
      headerName: "Raised By",
      flex: 1,
      minWidth: 170,
    },

    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 220,
    },

    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
      minWidth: 140,

      renderCell: (params) => (
        <PriorityChip
          priority={params.value}
        />
      ),
    },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 150,

      renderCell: (params) => (
        <StatusChip
          status={params.value}
        />
      ),
    },

    {
      field: "assignedTo",
      headerName: "Assign To",
      flex: 1,
      minWidth: 220,

      renderCell: (params) => (

        <Select
          fullWidth
          size="small"
          value={
            params.row.assignedTo || ""
          }
          onChange={(e) =>
            handleAssign(
              params.row.id,
              e.target.value
            )
          }
        >

          {SUPPORT_AGENTS.map(
            (agent, index) => (

              <MenuItem
                key={index}
                value={agent}
              >
                {agent}
              </MenuItem>

            )
          )}

        </Select>

      ),
    },
  ];

  return (
    <Box className="ticket-table-container">

      <DataGrid
        rows={tickets}
        columns={columns}
        autoHeight
        pageSizeOptions={[5]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        className="ticket-data-grid"
      />

    </Box>
  );
};

export default AdminTicketTable;
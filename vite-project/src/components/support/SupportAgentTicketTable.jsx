import React from "react";

import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import { DataGrid } from "@mui/x-data-grid";

import useTicketStore from "../../store/ticketStore";

import PriorityChip from "../tms/PriorityChip";

import StatusChip from "../tms/StatusChip";

const loggedInAgent = "Ranjith";

const SupportAgentTicketTable = () => {

  const {
    tickets,
    updateTicket,
  } = useTicketStore();

  /* ONLY ASSIGNED TICKETS */

  const assignedTickets = tickets.filter(
    (ticket) =>
      ticket.assignedTo ===
      loggedInAgent
  );

  /* RESOLVE */

  const handleResolve = (
    ticketId
  ) => {

    updateTicket(ticketId, {

      status: "Resolved",
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
      field: "resolve",
      headerName: "Resolve Task",
      flex: 1,
      minWidth: 160,

      renderCell: (params) => (

        <Tooltip title="Mark Resolved">

          <IconButton
            color="success"
            onClick={() =>
              handleResolve(
                params.row.id
              )
            }
          >

            <CheckCircleOutlineOutlinedIcon />

          </IconButton>

        </Tooltip>

      ),
    },
  ];

  return (
    <Box className="ticket-table-container">

      <DataGrid
        rows={assignedTickets || []}
        columns={columns || []}
        autoHeight
        pageSizeOptions={[5]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableRowSelectionOnClick
        className="ticket-data-grid"
      />

    </Box>
  );
};

export default SupportAgentTicketTable;
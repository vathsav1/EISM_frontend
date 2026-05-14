import React from "react";

import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import useTicketStore from "../../store/ticketStore";

const MyTicketStats = () => {

  const { tickets } = useTicketStore();

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) =>
      ticket.status === "In Progress"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) =>
      ticket.status === "Resolved"
  ).length;

  const stats = [

    {
      title: "Open Tickets",
      value: openTickets,
    },

    {
      title: "In Progress",
      value: inProgressTickets,
    },

    {
      title: "Resolved",
      value: resolvedTickets,
    },
  ];

  return (
    <Grid container spacing={3} mt={1}>

      {stats.map((item, index) => (

        <Grid
          xs={12}
          md={4}
          key={index}
        >

          <Paper className="stats-card">

            <Typography className="stats-title">
              {item.title}
            </Typography>

            <Typography className="stats-value">
              {item.value}
            </Typography>

          </Paper>

        </Grid>

      ))}

    </Grid>
  );
};

export default MyTicketStats;
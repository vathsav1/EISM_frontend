import React from "react";

import {
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const QuickActions = ({
  setActiveMenu,
  setOpenModal,
}) => {

  return (
    <Paper className="quick-actions">

      <Typography className="quick-title">

        Quick Actions

      </Typography>

      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={2}
        mt={3}
      >

        <Button
          variant="contained"
          onClick={() =>
            setOpenModal(true)
          }
        >
          Create Ticket
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            setActiveMenu(
              "Knowledge Base"
            )
          }
        >
          Open Knowledge Base
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            setActiveMenu("TMS")
          }
        >
          My Requests
        </Button>

      </Stack>

    </Paper>
  );
};

export default QuickActions;
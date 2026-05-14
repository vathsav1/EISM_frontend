import React from "react";

import {
  Paper,
  Typography,
} from "@mui/material";

const WelcomeBanner = () => {

  return (
    <Paper className="welcome-banner">

      <Typography className="welcome-title">

        Welcome Back, Sai 👋

      </Typography>

      <Typography className="welcome-subtitle">

        Manage your requests, track tickets,
        and access internal services easily.

      </Typography>

    </Paper>
  );
};

export default WelcomeBanner;
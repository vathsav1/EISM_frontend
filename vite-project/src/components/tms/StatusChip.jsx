import React from "react";
import { Chip } from "@mui/material";

const StatusChip = ({ status }) => {

  const getColor = () => {
    switch (status) {
      case "Open":
        return "primary";

      case "In Progress":
        return "warning";

      case "Resolved":
        return "success";

      case "Cancelled":
        return "error";

      default:
        return "default";
    }
  };

  return (
    <Chip
      label={status}
      color={getColor()}
      size="small"
    />
  );
};

export default StatusChip;
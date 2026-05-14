import React from "react";
import { Chip } from "@mui/material";

const PriorityChip = ({ priority }) => {

  const getColor = () => {
    switch (priority) {
      case "P1":
        return "error";

      case "P2":
        return "warning";

      case "P3":
        return "primary";

      default:
        return "success";
    }
  };

  return (
    <Chip
      label={priority}
      color={getColor()}
      size="small"
    />
  );
};

export default PriorityChip;
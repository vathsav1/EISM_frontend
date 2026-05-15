import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import TicketTable from "../../components/tms/TicketTable";
import TicketForm from "../../components/tms/TicketForm";

const TMSSection = () => {

  const [openModal, setOpenModal] =
    useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="content-card">

      <div className="tms-header">

        <h1>
          Ticket Management System
        </h1>

        <Button
          variant="contained"
          onClick={() => setOpenModal(true)}
        >
          Create Ticket
        </Button>

      </div>

      <TicketTable />

      <Dialog
        open={openModal}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        scroll="paper"
      >

        <DialogTitle>
          Create Ticket
        </DialogTitle>

        <DialogContent>

          <TicketForm
            handleClose={handleClose}
          />

        </DialogContent>

      </Dialog>

    </div>
  );
};

export default TMSSection;
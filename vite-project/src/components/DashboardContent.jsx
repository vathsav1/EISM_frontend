import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import TicketTable from "../components/tms/TicketTable";
import TicketForm from "../components/tms/TicketForm";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import MyTicketStats from "../components/dashboard/MyTicketStats";
import QuickActions from "../components/dashboard/QuickActions";


const DashboardContent = ({ activeMenu }) => {

  const [openModal, setOpenModal] =
    useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="dashboard-content">

      {/* TMS SECTION */}

      {/* TMS SECTION */}

{activeMenu === "TMS" && (
  <div className="content-card">

    {/* HEADER */}

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

    {/* TABLE */}

    <TicketTable />

    {/* MODAL */}

    <Dialog
      open={openModal}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
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
)}

{/* DASHBOARD SECTION */}

{activeMenu === "Dashboard" && (
  <>
    <WelcomeBanner />
    <MyTicketStats />
    <QuickActions />
  </>
)}

{/* DEFAULT SECTION */}

{activeMenu !== "TMS" &&
 activeMenu !== "Dashboard" && (
  <div className="content-card">

    <h1>{activeMenu}</h1>

    <p>
      Welcome to the {activeMenu} section.
    </p>

  </div>
)}

    </div>
  );
};

export default DashboardContent;
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
import KnowledgeBaseUser from "../pages/KnowledgeBaseUser";
import AdminDashboard from "../pages/AdminDashboard";
import KnowledgeBaseAdmin from "../pages/KnowledgeBaseAdmin";
import SupportAgentDashboard from "../pages/SupportAgentDashboard";


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
)}

{/* DASHBOARD SECTION */}

{activeMenu === "Dashboard" && (
  <>
    <WelcomeBanner />
    <MyTicketStats />
    <QuickActions />
  </>
)}

{/*knowledge base*/}

{ activeMenu === "Knowledge Base" && (
  <>
  <KnowledgeBaseUser />
  </>
)}

{/* ADMIN DASHBOARD SECTION */}

{ activeMenu === "Admin Dashboard" && (
  <>
  <AdminDashboard />
  </>
)}

{/* ADMIN knowledge base*/}

{ activeMenu === "Admin Knowledge Base" && (
  <>
  <KnowledgeBaseAdmin />
  </>
)}

{/* AGENT DASHBOARD SECTION */}

{ activeMenu === "Agent Dashboard" && (
  <>
  <SupportAgentDashboard />
  </>
)}

{/* DEFAULT SECTION */}

{activeMenu !== "TMS" &&
 activeMenu !== "Dashboard" &&
 activeMenu !== "Admin Dashboard" &&
 activeMenu !== "Agent Dashboard" &&
 activeMenu !== "Admin Knowledge Base" &&
 activeMenu !== "Knowledge Base" && (
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
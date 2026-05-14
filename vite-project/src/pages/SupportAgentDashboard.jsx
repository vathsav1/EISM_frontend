import React from "react";

import WelcomeBanner from "../components/dashboard/WelcomeBanner";

import AdminAnalyticsCards from "../components/admin/AdminAnalyticsCards";

import SupportAgentTicketTable from "../components/support/SupportAgentTicketTable";

const SupportAgentDashboard = () => {

  return (
    <div className="dashboard-content">

      {/* WELCOME */}

      <WelcomeBanner />

      {/* ANALYTICS */}

      <AdminAnalyticsCards />

      {/* ASSIGNED TICKETS */}

      <div style={{ marginTop: "30px" }}>

        <h2 className="admin-table-title">

          Assigned Tickets

        </h2>

        <SupportAgentTicketTable />

      </div>

    </div>
  );
};

export default SupportAgentDashboard;
import React from "react";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";

import AdminAnalyticsCards from "../../components/admin/AdminAnalyticsCards";

import AdminTicketTable from "../../components/admin/AdminTicketTable";

const AdminDashboard = () => {

  return (
    <div className="dashboard-content">

      {/* WELCOME */}

      <WelcomeBanner />

      {/* ANALYTICS */}

      <AdminAnalyticsCards />

      {/* TICKETS */}

      <div style={{ marginTop: "30px" }}>

        <h2 className="admin-table-title">

          All Tickets

        </h2>

        <AdminTicketTable />

      </div>

    </div>
  );
};

export default AdminDashboard;
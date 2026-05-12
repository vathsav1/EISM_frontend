import React from "react";

const DashboardContent = ({ activeMenu }) => {
  return (
    <div className="dashboard-content">
      <div className="content-card">
        <h1>{activeMenu}</h1>

        <p>
          Welcome to the {activeMenu} section of your
          Service Portal.
        </p>
      </div>
    </div>
  );
};

export default DashboardContent;
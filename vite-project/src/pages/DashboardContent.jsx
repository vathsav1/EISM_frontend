import React from "react";

import TMSSection from "./sections/TMSSection";
import DashboardSection from "./sections/DashboardSection";
import ServiceCatalogSection from "./sections/ServiceCatalogSection";

import KnowledgeBaseUser from "./sections/KnowledgeBaseUser";
import AdminDashboard from "./sections/AdminDashboard";
import KnowledgeBaseAdmin from "./sections/KnowledgeBaseAdmin";
import SupportAgentDashboard from "./sections/SupportAgentDashboard";

const DashboardContent = ({ activeMenu }) => {

  return (
    <div className="dashboard-content">

      {activeMenu === "TMS" && (
        <TMSSection />
      )}

      {activeMenu === "Dashboard" && (
        <DashboardSection />
      )}

      {activeMenu === "Knowledge Base" && (
        <KnowledgeBaseUser />
      )}

      {activeMenu === "Admin Dashboard" && (
        <AdminDashboard />
      )}

      {activeMenu === "Admin Knowledge Base" && (
        <KnowledgeBaseAdmin />
      )}

      {activeMenu === "Agent Dashboard" && (
        <SupportAgentDashboard />
      )}

      {activeMenu === "Service Catalog" && (
        <ServiceCatalogSection />
      )}

    </div>
  );
};

export default DashboardContent;
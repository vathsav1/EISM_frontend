import React, { useState } from "react";
import Sidebar from "../../components/Sidebar.jsx";
import DashboardContent from "../DashboardContent.jsx";
import NotificationPopup from "../../components/NotificationPopup.jsx";
import Header from "../../components/Header.jsx";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import "../../styles/dashboard.css";

const DashboardPage = () => {
  const [showNotifications, setShowNotifications] =
    useState(false);

  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

  return (
    <div className="dashboard-page">
      <Header />

      <div className="dashboard-layout">
        {/* SIDEBAR */}

        <Sidebar
          
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        {/* MAIN */}

        <div className="main-section">
          {/* TOP BAR */}

          <div className="top-actions">
            <div
              className="notification-button"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
            >
              <NotificationsNoneOutlinedIcon />
            </div>

            <NotificationPopup
              show={showNotifications}
            />

          </div>

          {/* CONTENT */}

          <DashboardContent activeMenu={activeMenu} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
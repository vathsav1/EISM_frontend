import React, {useState, useEffect,} from "react";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import useAuthStore from "../store/authStore";

import "../styles/dashboard.css";

const Sidebar = ({activeMenu, setActiveMenu,}) => {

  const { user } = useAuthStore();

  const [collapsed, setCollapsed] = useState(false);

  /* USER MENUS */

  const userMenus = [
    {
      name: "Dashboard",
      icon:
        <DashboardOutlinedIcon />,
    },
    {
      name: "TMS",
      icon:
        <ConfirmationNumberOutlinedIcon />,
    },
    {
      name: "Knowledge Base",
      icon:
        <MenuBookOutlinedIcon />,
    },
    {
      name: "Service Catalog",
      icon:
        <Inventory2OutlinedIcon />,
    },
  ];

  /* ADMIN MENUS */

  const adminMenus = [
    {
      name: "Admin Dashboard",
      icon:
        <DashboardOutlinedIcon />,
    },
    {
      name:
        "Admin Knowledge Base",
      icon:
        <MenuBookOutlinedIcon />,
    },
  ];

  /* AGENT MENUS */

  const agentMenus = [
    {
      name:
        "Agent Dashboard",
      icon:
        <DashboardOutlinedIcon />,
    },
    {
      name: "Knowledge Base",
      icon:
        <MenuBookOutlinedIcon />,
    },
  ];

  /* ROLE BASED MENU */

  let menus = [];

  if (user?.role === "admin") {

    menus = adminMenus;
  }

  else if (
    user?.role ===
    "support-agent"
  ) {

    menus = agentMenus;
  }

  else {

    menus = userMenus;
  }

  /* RESPONSIVE SIDEBAR */

  useEffect(() => {

    const handleResize =
      () => {

        if (
          window.innerWidth <= 900
        ) {

          setCollapsed(true);

        } else {

          setCollapsed(false);
        }
      };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  return (
    <>

      <div
        className={`sidebar 
        ${
          collapsed
            ? "collapsed"
            : ""
        }`}
      >

        {/* TOGGLE */}

        <div
          className="toggle-button"
          onClick={() =>
            setCollapsed(
              !collapsed
            )
          }
        >

          <div className="sidebar-icon">

            <MenuOutlinedIcon />

          </div>

        </div>

        <br />

        {/* MENU ITEMS */}

        {menus.map(
          (menu, index) => (

            <div
              key={index}
              className={`sidebar-item ${
                activeMenu ===
                menu.name

                  ? "active"

                  : ""
              }`}
              onClick={() =>
                setActiveMenu(
                  menu.name
                )
              }
            >

              <div className="sidebar-icon">

                {menu.icon}

              </div>

              {!collapsed && (

                <p>
                  {menu.name}
                </p>

              )}

            </div>

          )
        )}

      </div>

    </>
  );
};

export default Sidebar;
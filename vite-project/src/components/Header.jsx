import React from "react";
import "../styles/dashboard.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";

import useAuthStore from "../store/authStore";

const Header = () => {
  const {isAuthenticated, logout,} = useAuthStore();
  return (
    <div className="header">
      <div className="logo">
        Service<span>Portal</span>
      </div>

      <div className="nav-links">
        <p>Home</p>
        <p>Services</p>
        <p>Support</p>
      </div>
      {isAuthenticated && (
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<LogoutIcon />}
        onClick={logout}
      >
        Logout
      </Button>
)}
    </div>
  );
};

export default Header;
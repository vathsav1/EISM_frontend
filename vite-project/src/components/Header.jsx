import React from "react";
import "../styles/dashboard.css";

const Header = () => {
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
    </div>
  );
};

export default Header;
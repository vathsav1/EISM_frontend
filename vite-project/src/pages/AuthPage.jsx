import React, { useState } from "react";
import Header from "../components/Header.jsx";
import AuthForm from "../components/AuthForm.jsx";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";

import "../styles/auth.css";

const features = [
  {
    icon: <ThumbUpAltOutlinedIcon />,
    text: "Manage all your services in one platform",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    text: "Get personalized support and updates",
  },
  {
    icon: <LaptopMacOutlinedIcon />,
    text: "Access your dashboard anywhere anytime",
  },
];

const AuthPage = ({ }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="page-container">
      <Header />

      <div className="auth-layout">
        {/* LEFT SECTION */}

        <div className="left-section">
          <h1>Welcome to Service Portal</h1>

          <p className="subtitle">
            Your one-stop platform for services and requests
          </p>

          <div className="feature-container">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{item.icon}</div>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="right-section">
          <div className="auth-card">
            <AuthForm
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
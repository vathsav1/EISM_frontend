import React from "react";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import MyTicketStats from "../../components/dashboard/MyTicketStats";
import QuickActions from "../../components/dashboard/QuickActions";

const DashboardSection = () => {
  return (
    <>
      <WelcomeBanner />
      <MyTicketStats />
      <QuickActions />
    </>
  );
};

export default DashboardSection;
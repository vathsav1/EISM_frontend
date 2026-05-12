import React from "react";

const NotificationPopup = ({ show }) => {
  if (!show) return null;

  return (
    <div className="notification-popup">
      <h3>Notifications</h3>

      <div className="notification-empty">
        No notifications
      </div>
    </div>
  );
};

export default NotificationPopup;
import React from "react";

// styles
import notificationStyles from "../styles/components/Notification.module.css";

const Notification = ({ closeNotification }: any) => {
  return (
    <div className={notificationStyles.mainWrapper}>
      <span
        className={notificationStyles.close}
        onClick={closeNotification}
      ></span>
      <p className={notificationStyles.message}>
        Your Message has been sent! ✅
      </p>
    </div>
  );
};

export default Notification;

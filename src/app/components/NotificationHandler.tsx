import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NotificationHandler: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.inventory.notifications);

  React.useEffect(() => {
    notifications.forEach(notification => {
      toast.info(notification);
    });
  }, [notifications]);

  return <ToastContainer position="top-right" autoClose={3000} />;
};

export default NotificationHandler;

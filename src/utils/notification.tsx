import { notification } from "antd";

const openNotification = (message: string) => {
  notification.open({
    message: message,
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

export default openNotification;

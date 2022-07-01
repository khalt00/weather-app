import { Box } from "@mui/material";
import React from "react";
import NotifyItem from "./NotifyItem";
export interface NotificationProps {}

const Notification: React.VFC<NotificationProps> = ({}) => {
  return (
    <Box sx={{ maxHeight: "calc(100vh - 70px);", overflowY: "auto", overflowX: "hidden", width: "280px" }}>
      <NotifyItem />
      <NotifyItem />
      <NotifyItem />
      <NotifyItem />
    </Box>
  );
};
export default Notification;

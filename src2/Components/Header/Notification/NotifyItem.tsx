import { Box, Chip, SvgIcon } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
export interface NotifyItemProps {}

const NotifyItem: React.VFC<NotifyItemProps> = ({}) => {
  return (
    <Box
      p={1.2}
      sx={{
        position: "relative",
        "&:not(:first-of-type)": { borderTop: "1px solid #DDDDDD" },
        "&:hover": {
          cursor: "pointer",
          background: "#FAFAFA",
          ".text_project": {
            color: "#000000DE",
          },
          ".iconClose": {
            opacity: "0.5",
          },
        },
      }}
    >
      <CloseIcon
        className="iconClose"
        sx={{ position: "absolute", top: "0", right: "0", color: "#757575", opacity: "0" }}
      />
      <Chip
        label="Clickable"
        sx={{
          fontSize: "0.6rem",
          height: "fit-content",
          color: "#fff",
          fontWeight: "bold",
          backgroundColor: "#BDBDBD",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: "8px",
          right: "10px",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#bdbdbd",
        }}
      >
        Done
      </Typography>
      <Box sx={{ position: "relative" }}>
        <SvgIcon sx={{ position: "absolute", top: "0", left: "0", fontSize: "16px", color: "#757575" }}>
          <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"></path>
        </SvgIcon>
        <Typography
          sx={{
            paddingLeft: "18px",
            fontSize: "0.6rem",
          }}
        >
          test demo 1
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <SvgIcon sx={{ position: "absolute", top: "0", left: "0", fontSize: "16px", color: "#757575" }}>
          <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"></path>
        </SvgIcon>
        <Typography
          className="text_project"
          sx={{
            paddingLeft: "18px",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          クライアント情報
        </Typography>
      </Box>
      <Typography
        component="p"
        sx={{
          fontSize: "0.7rem",
          textAlign: "right",
          color: "#BDBDBD",
        }}
      >
        9:23 PM
      </Typography>
    </Box>
  );
};
export default NotifyItem;

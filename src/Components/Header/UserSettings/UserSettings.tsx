import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuUserSettings from "./MenuUserSettings/MenuUserSettings";
export interface UserSettingsProps {}

const UserSettings: React.VFC<UserSettingsProps> = ({}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        overflowY: "auto",
        width: "600px",
        minWidth: "600px",
        height: "100%",
        backgroundColor: "#fff",
        position: "absolute",
        top: "0",
        right: "0",
        border: "none",
      }}
      square
    >
      <Box sx={{ width: "100%", backgroundColor: "#2d2d2d", minHeight: "64px" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={1} sx={{ height: "64px" }}></Grid>
          <Grid
            item
            xs={0.25}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <AccountBoxIcon />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{
              height: "64px",
              paddingLeft: "20px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "400",
                fontSize: "20px",
                textAlign: "left",
                color: "#fff",
              }}
            >
              User Profile
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <MenuUserSettings />
    </Paper>
  );
};
export default UserSettings;

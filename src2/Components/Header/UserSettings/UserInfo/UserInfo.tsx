import { Button, Input, InputLabel } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import React from "react";
import Social from "../Social/Social";

export interface UserInfoProps {}

const UserInfo: React.VFC<UserInfoProps> = ({}) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: "0" }}
    >
      <Grid container item xs={12} p={3} mb={5}>
        <Grid item xs={3}>
          <Avatar
            sx={{ width: "120px", height: "120px" }}
            alt="Cindy Baker"
            src="https://storage.googleapis.com/linker/pub/default.png"
          />
        </Grid>
        <Grid item xs={8}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "0.8rem",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">User name *</InputLabel>
              <Input
                sx={{ fontSize: "0.8rem" }}
                id="component-simple"
                value="Lâm Trường"
                // onChange={handleChange}
              />
            </FormControl>
            <FormControl disabled variant="standard" sx={{ marginTop: "25px" }}>
              <InputLabel htmlFor="component-email">Email</InputLabel>
              <Input
                sx={{ fontSize: "0.8rem" }}
                id="component-email"
                value="truongle.281000@gmail.com"
                // onChange={handleChange}
              />
            </FormControl>
            <FormControl disabled variant="standard" sx={{ marginTop: "25px" }}>
              <InputLabel htmlFor="component-user-id">User ID</InputLabel>
              <Input
                sx={{ fontSize: "0.8rem" }}
                id="component-user-id"
                value="6229917527dd3402e9f4bda7"
                // onChange={handleChange}
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={8}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#616161",
              backgroundColor: "#EEEEEE",
              textTransform: "none",
              minHeight: "36px",
              minWidth: "110px",
              borderRadius: "0",
              "&:hover": {
                color: "#9E9E9E",
                backgroundColor: " #fff",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              backgroundColor: "#1589d6",
              textTransform: "none",
              minHeight: "36px",
              minWidth: "110px",
              borderRadius: "0",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#2aabe4",
              },
            }}
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Social />
    </Grid>
  );
};
export default UserInfo;

import * as React from "react";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Social from "../Social/Social";
import Box from "@mui/material/Box";
export interface PasswordProps {}

const Password: React.VFC<PasswordProps> = ({}) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: "0" }}
    >
      <Grid container item xs={12} p={3} sx={{ fontSize: "0.7rem !important" }}>
        <Box component="form" sx={{ width: "100%" }}>
          <TextField
            label="Old Password *"
            variant="standard"
            fullWidth
            size="small"
            sx={{ marginTop: "20px", fontSize: "0.7rem !important" }}
            color="secondary"
          />
          <TextField
            label="New Password *"
            variant="standard"
            fullWidth
            size="small"
            sx={{ marginTop: "20px", fontSize: "0.7rem !important" }}
            color="secondary"
          />
          <TextField
            label="Confirm Password *"
            variant="standard"
            fullWidth
            size="small"
            sx={{ marginTop: "20px", fontSize: "0.7rem !important" }}
            color="secondary"
          />
          <Grid
            container
            item
            xs={12}
            mt={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                margin: "0 20px",
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
                margin: "0 20px",
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
              Reset
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: "0 20px",
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
              Save
            </Button>
          </Grid>
        </Box>
      </Grid>

      <Social />
    </Grid>
  );
};
export default Password;

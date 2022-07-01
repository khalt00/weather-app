import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TemplateTabs from "./TemplateTabs";
import React, { forwardRef, ReactElement, Ref, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Zoom } from "@mui/material";
export interface ModalAppProjectUpperProps {
  openModalAddProject: boolean;
  handleToggleModalAddProject: () => void;
}
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Zoom ref={ref} {...props} style={{ transitionDelay: "100ms" }} />;
});
const ModalAppProjectUpper: React.VFC<ModalAppProjectUpperProps> = ({
  openModalAddProject,
  handleToggleModalAddProject,
}) => {
  return (
    <Dialog
      open={openModalAddProject}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      onClose={handleToggleModalAddProject}
      sx={{
        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": { margin: "0", minWidth: "720px" },
        maxHeight: "720px",
        overflowY: "auto",
      }}
    >
      <DialogTitle sx={{ padding: "0" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2d2d2d !important;",
              height: "64px",
            }}
          >
            <Typography sx={{ fontSize: "20px", color: "#fff" }}>Create a new Project</Typography>
          </Box>
        </Grid>
      </DialogTitle>
      <DialogContent sx={{ padding: "16px" }}>
        <Grid container item xs={12} sx={{ overflowY: "auto", padding: "8px" }}>
          <Grid item xs={12} sx={{ color: "rgba(0,0,0,0.87)" }}>
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontSize: "0.9rem" }}>Enter the new Project Name</Typography>
            </Box>
          </Grid>

          <Grid container item xs={12} justifyContent="flex-start" p={2}>
            <Grid item xs={4} justifyContent="flex-start" textAlign="left">
              <TextField
                size="small"
                sx={{ width: "65%" }}
                id="Project Name(en)"
                label="Project Name(en)"
                variant="standard"
                inputProps={{ style: { fontSize: 13 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
              />
            </Grid>

            <Grid item xs={4} justifyContent="flex-end" textAlign="left">
              <TextField
                size="small"
                sx={{ width: "65%" }}
                id="Project Name(ja)"
                label="Project Name(ja)"
                variant="standard"
                inputProps={{ style: { fontSize: 13 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ marginBottom: "10px", textAlign: "left", fontSize: "0.8em", color: "black" }}>
              Select a Template
            </Typography>
            <TemplateTabs />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-around" }}>
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
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ModalAppProjectUpper;

import React, { ReactElement, Ref, forwardRef } from "react";
import Box from "@mui/material/Box";
import MenuModalSettings from "./MenuModalSettings/MenuModalSettings";
import { Dialog, DialogTitle, Zoom } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

export interface ModalSettingsProps {
  handleToggleModalSettings: () => void;
  openModalSettings: boolean;
}
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Zoom ref={ref} {...props} style={{ transitionDelay: "100ms" }} />;
});
const ModalSettings: React.VFC<ModalSettingsProps> = ({ handleToggleModalSettings, openModalSettings }) => {
  return (
    <Box>
      <Dialog
        open={openModalSettings}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        onClose={handleToggleModalSettings}
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            borderRadius: "0",
            margin: "0",
            minWidth: "240px",
            width: "calc(100vw - 40px)",
            maxWidth: "1400px",
            height: "calc(100vh - 40px)",
            padding: "0",
          },
          maxHeight: "100%",
          overflowY: "auto",
        }}
      >
        <DialogTitle sx={{ padding: 0 }}>
          <MenuModalSettings />
        </DialogTitle>
      </Dialog>
    </Box>
  );
};
export default ModalSettings;

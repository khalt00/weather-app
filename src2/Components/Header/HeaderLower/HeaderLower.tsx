import { Grid, Box, Button, Backdrop } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { CustomText } from "./style";
import ModalAppProjectUpper from "../ModalAddProject/ModalAddProject";
export interface HeaderLowerProps {}
const HeaderLower: React.VFC<HeaderLowerProps> = ({}) => {
  const [openModalAddProject, setOpenModalAddProject] = useState(false);

  const handleToggleModalAddProject = () => {
    setOpenModalAddProject(!openModalAddProject);
  };

  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{
          height: "32px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <HomeIcon
          sx={{
            color: "#fff",
            width: "28px",
            height: "100%",
            padding: "5px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#2d2d2d",
            flex: "1",
            maxHeight: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "auto",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ minWidth: "200px" }}>
              <CustomText variant="text">New project</CustomText>
            </Box>
            <Box sx={{ minWidth: "200px" }}>
              <CustomText variant="text">demo 21/4/22 Login_basic</CustomText>
            </Box>
          </Box>
        </Box>
        <AddIcon
          onClick={handleToggleModalAddProject}
          sx={{
            color: "#fff",
            width: "28px",
            height: "100%",
            padding: "5px",
            cursor: "pointer",
          }}
        />
      </Grid>

      <ModalAppProjectUpper
        openModalAddProject={openModalAddProject}
        handleToggleModalAddProject={handleToggleModalAddProject}
      />
    </>
  );
};
export default HeaderLower;

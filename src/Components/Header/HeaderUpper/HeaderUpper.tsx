import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Drawer,
  FormControl,
  Grid,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useGetCurrentUserQuery } from "api/users";
import { useGetAllWorkspacesQuery, useSetCurrentWorkspaceMutation } from "api/workspaces";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkspaceState } from "stores/workspaceState";
import { BackdropCustom, BoxIcon, BoxLogo, BoxSearch } from "./style";
import UserSettings from "Components/Header/UserSettings/UserSettings";
import Notification from "../Notification/Notification";
import ModalSettings from "../ModalSettings/ModalSettings";

export interface HeaderUpperProps {}
type Anchor = "top" | "left" | "bottom" | "right";
const HeaderUpper: React.VFC<HeaderUpperProps> = ({}) => {
  const navigate = useNavigate();
  const allWorkspacesQuery = useGetAllWorkspacesQuery();
  const { currentWorkspaceId } = useWorkspaceState();
  const getCurrentUserQuery = useGetCurrentUserQuery();
  const setCurrentWorkspaceMutation = useSetCurrentWorkspaceMutation();
  const handleChange = async (e: SelectChangeEvent<string>) => {
    if (e.target.value) {
      var results = await setCurrentWorkspaceMutation.mutateAsync(e.target.value);
      // console.log(results, "rewatch after new workspace");
      getCurrentUserQuery.refetch();
      // navigate(`/h/${e.target.value}`);
    }
  };

  const [openNotification, setOpenNotification] = useState(false);
  const [stateUserSettings, setStateUserSettings] = React.useState({
    right: false,
  });
  const [openModalSettings, setOpenModalSettings] = useState(false);

  const handleToggleModalSettings = () => {
    setOpenModalSettings(!openModalSettings);
  };

  const handleToggleNotification = () => {
    setOpenNotification(!openNotification);
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setStateUserSettings({ ...stateUserSettings, [anchor]: open });
  };
  return (
    <>
      <CssBaseline />
      <Grid container mt={0.5} pb={1} sx={{ padding: "0 10px", height: "36px", backgroundColor: "#fff" }}>
        <Grid item xs={4} sx={{ height: "100%" }}>
          <Grid container>
            <Grid item xs={6} sx={{ height: "100%" }}>
              <BoxLogo>
                <img
                  style={{ width: "90px" }}
                  src="https://storage.googleapis.com/linker/pub/hexabase.png"
                  alt="logo"
                />
              </BoxLogo>
            </Grid>
            <Grid item xs={5} sx={{ height: "100%" }}>
              <FormControl className="select-workspace header-select-workspace" variant="standard">
                <Select
                  className="workspace"
                  value={currentWorkspaceId}
                  onChange={handleChange}
                  sx={{
                    fontSize: "0.9rem",
                    border: "none",
                    width: "150px",
                    minWidth: "150px",
                    maxWidth: "150px",
                    maxHeight: "200px",
                    backgroundColor: "#fff",
                    "&:before": {
                      borderBottom: "none",
                    },
                    "&:focus": {
                      backgroundColor: "#fff !important",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "none",
                    },
                    "&:after": {
                      borderBottom: "none",
                    },
                  }}
                  MenuProps={{
                    style: {
                      maxHeight: "250px",
                    },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                  }}
                >
                  {allWorkspacesQuery.data &&
                    allWorkspacesQuery.data.workspaces.map((value, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={value.wId}
                          sx={{
                            fontSize: "0.8rem",
                            padding: "0 16px 0 16px",
                            height: "48px",
                          }}
                        >
                          {value.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ height: "100%" }}>
          <BoxSearch>
            <SearchIcon
              sx={{
                position: "absolute",
                top: "12%",
                left: "7px",
                color: "#9E9E9E;",
              }}
            />
            <input type="text" placeholder="Search" />
          </BoxSearch>
        </Grid>
        <Grid item xs={4} sx={{ height: "100%" }}>
          <Box sx={{ textAlign: "right", height: "100%" }}>
            <BoxIcon>
              <NotificationsIcon onClick={handleToggleNotification} />
              <Menu
                id="basic-menu"
                sx={{
                  marginTop: "20px",
                }}
                open={openNotification}
                onClose={handleToggleNotification}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Notification />
              </Menu>
            </BoxIcon>
            <BoxIcon>
              <SettingsIcon onClick={handleToggleModalSettings} />{" "}
              <ModalSettings
                handleToggleModalSettings={handleToggleModalSettings}
                openModalSettings={openModalSettings}
              />
            </BoxIcon>
            <BoxIcon onClick={toggleDrawer("right", true)}>
              <Avatar
                alt="Cindy Baker"
                src="https://storage.googleapis.com/linker/pub/default.png"
                sx={{ cursor: "pointer" }}
              />
            </BoxIcon>
            <BoxIcon>
              <LogoutIcon />
            </BoxIcon>
          </Box>
        </Grid>
      </Grid>
      <Drawer anchor={"right"} open={stateUserSettings["right"]} onClose={toggleDrawer("right", false)}>
        <Box
          sx={{ width: 600 }}
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <UserSettings />
        </Box>
      </Drawer>
    </>
  );
};
export default HeaderUpper;

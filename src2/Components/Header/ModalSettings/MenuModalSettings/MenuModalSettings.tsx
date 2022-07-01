import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import WorkspaceSettings from "../WorkspaceSettings/WorkspaceSettings";
export interface MenuModalSettingsProps {}

const MenuModalSettings: React.VFC<MenuModalSettingsProps> = ({}) => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1", position: "relative" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label={
                <Box
                  component="div"
                  fontSize={15}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <SettingsIcon sx={{ marginRight: "10px" }} />
                  <Typography component="span" fontSize={14} sx={{ textTransform: "none" }}>
                    Workspace Settings
                  </Typography>
                </Box>
              }
              value="1"
              sx={{
                ".Mui-selected": {
                  fontWeight: "bold !important",
                },
              }}
            />
            <Tab
              label={
                <Box
                  component="div"
                  fontSize={15}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <GroupIcon sx={{ marginRight: "10px" }} />
                  <Typography className="text_menu" component="span" fontSize={14} sx={{ textTransform: "none" }}>
                    Groups and Members
                  </Typography>
                </Box>
              }
              value="2"
              sx={{}}
            />
            <Tab
              label={
                <Box
                  component="div"
                  fontSize={15}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <LockIcon sx={{ marginRight: "10px" }} />
                  <Typography component="span" fontSize={14} sx={{ textTransform: "none" }}>
                    Password Policy Setting
                  </Typography>
                </Box>
              }
              value="3"
              sx={{}}
            />
          </TabList>
        </Box>

        <TabPanel value="1" sx={{ padding: 0 }}>
          <WorkspaceSettings />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0 }}>
          2
        </TabPanel>
        <TabPanel value="3" sx={{ padding: 0 }}>
          3
        </TabPanel>
      </TabContext>
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <CloseIcon
          sx={{
            color: "rgba(0,0,0,0.54)",
            width: "24px",
            height: "24px",

            "&:hover": {
              backgroundColor: "rgba(158,158,158,0.2)",
              cursor: "pointer",
            },
          }}
        />
      </Box>
    </Box>
  );
};
export default MenuModalSettings;

import React, { ReactNode, useState } from "react";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import TemplateItem from "./TemplateItem";

interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export interface TemplateTabsProps {}
const TemplateTabs: React.VFC<TemplateTabsProps> = ({}) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };
  return (
    <Box sx={{ width: "100%", border: "1px solid #dcdcdc", backgroundColor: "#fff" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
        sx={{ backgroundColor: "#eee", height: "38px", boxShadow: "none" }}
      >
        <Tab
          sx={{ fontSize: "0.9rem", textTransform: "none", color: "#757575", flex: "0.2" }}
          label="Examples"
          {...a11yProps(0)}
        />
        <Tab
          sx={{ fontSize: "0.9rem", textTransform: "none", color: "#757575", flex: "0.2" }}
          label="ヘルスクラウド"
          {...a11yProps(1)}
        />
      </Tabs>
      <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <TemplateItem />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <TemplateItem />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
};
export default TemplateTabs;

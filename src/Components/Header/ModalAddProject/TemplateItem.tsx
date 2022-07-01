import { Box } from "@mui/material";
import React from "react";
import TemplateCard from "./TemplateCard";
import Grid from "@mui/material/Grid";

export interface TemplateItemProps {}

const TemplateItem: React.VFC<TemplateItemProps> = ({}) => {
  return (
    <Box component="div">
      <Grid container spacing={2}>
        <Grid item xs={3.5}>
          <TemplateCard />
        </Grid>
        <Grid item xs={3.5}>
          <TemplateCard />
        </Grid>
        <Grid item xs={3.5}>
          <TemplateCard />
        </Grid>
        <Grid item xs={3.5}>
          <TemplateCard />
        </Grid>
      </Grid>
    </Box>
  );
};
export default TemplateItem;

import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FaceBook from "Assets/facebook.svg";
import Github from "Assets/github.svg";
import Google from "Assets/google.svg";
import Line from "Assets/line.svg";
import Microsoft from "Assets/microsoft.svg";
import Salesforce from "Assets/Salesforce.svg";
import Twitter from "Assets/twitter.svg";
import React from "react";
import SocialItem from "./SocialItem";
export interface SocialProps {}

const Social: React.VFC<SocialProps> = ({}) => {
  return (
    <Grid
      item
      xs={12}
      sx={{ paddingTop: "20px", margin: "0 auto", width: "90%" }}
    >
      <Divider sx={{ backgroundColor: "gray" }} />
      <Typography
        variant="body1"
        sx={{ textAlign: "left" }}
        pt={2}
        pb={2}
        ml={1}
      >
        Associated account
      </Typography>
      <Divider sx={{ backgroundColor: "gray" }} />
      <Grid container>
        <SocialItem data={FaceBook} name="Facebook" link="#" />
        <SocialItem data={Google} name="Google" link="#" />
        <SocialItem data={Github} name="Github" link="#" />
        <SocialItem data={Twitter} name=" Twitter" link="#" />
        <SocialItem data={Salesforce} name="Salesforce" link="#" />
        <SocialItem data={Microsoft} name="Microsoft" link="#" />
        <SocialItem data={Line} name="Line" link="#" />
      </Grid>
    </Grid>
  );
};
export default Social;

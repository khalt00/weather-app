import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
export interface WorkspaceSettingsProps {}

const WorkspaceSettings: React.VFC<WorkspaceSettingsProps> = ({}) => {
  return (
    <Box sx={{ p: 5 }}>
      <Grid container>
        <Grid item xs={2} sx={{ margin: "0 40px 50px 0" }}>
          <Typography sx={{ fontSize: "0.69rem", marginBottom: "5px", color: "#999" }}>Workspace Logo</Typography>

          <Box
            sx={{
              p: 2,
              border: "1px solid #DDDDDD",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "180px",
              height: "140px",
            }}
          >
            <CloudUploadIcon sx={{ color: "#9E9E9E" }} />
            <Typography component="span" sx={{ fontSize: "0.8rem" }}>
              Upload your Logo
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Enter the new Workspace Name "
            variant="standard"
            defaultValue="Default Value"
            inputProps={{}} // font size of input text
            InputLabelProps={{ style: { fontSize: "0.9rem", color: "#999" } }} // font size of input label
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ marginBottom: "5px", display: "flex", alignItems: "flex-start" }}>
            <AccessTimeIcon sx={{ marginRight: "5px", color: "#9E9E9E", width: "24px", height: "24px" }} />
            <Typography component="span" sx={{ fontSize: "14px" }}>
              Login Session Settings
            </Typography>
          </Box>
        </Grid>
        <Grid container item xs={12} sx={{ marginLeft: "10px" }}>
          <Grid item xs={12}>
            <Typography component="span" sx={{ fontSize: "12px" }}>
              For the User Session Settings, you can set the following Conditions
            </Typography>
          </Grid>
          <Grid container item xs={12} p={1}>
            <Grid item xs={3.5}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={
                    <Typography component="span" sx={{ fontSize: "12px" }}>
                      Check if you want to change session expire time
                    </Typography>
                  }
                />
              </FormGroup>
            </Grid>
            <Grid item xs={4}>
              <InputLabel sx={{ fontSize: "12px" }}>{"Session Expire time(sec) [min:60sec]"}</InputLabel>
              <Input disabled defaultValue="0" sx={{ fontSize: "14px", "& > input": { padding: "1px 0" } }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default WorkspaceSettings;

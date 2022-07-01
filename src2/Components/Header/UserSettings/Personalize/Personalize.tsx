import React, { useState } from "react";
import {
  Grid,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import Box from "@mui/material/Box";
import PublicIcon from "@mui/icons-material/Public";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import BugReportIcon from "@mui/icons-material/BugReport";
import Social from "../Social/Social";
export interface PersonalizeProps {}

const Personalize: React.VFC<PersonalizeProps> = ({}) => {
  const [language, setLanguage] = useState("English");

  return (
    <Grid container p={5}>
      <Grid container item xs={12} sx={{ paddingBottom: "10px" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <PublicIcon
              sx={{
                color: "#9E9E9E",
                marginRight: "5px",
              }}
            />
            <Typography component="span">Languages</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "5px",
          }}
        >
          <Typography component="span" sx={{ fontSize: "0.75rem" }}>
            Choose the Language to use for this Workspace
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "5px",
          }}
        >
          <FormControl
            className="select-workspace header-select-workspace"
            variant="standard"
          >
            <Typography
              component="span"
              sx={{
                fontSize: "10px",
                display: "flex",
                color: "rgba(0,0,0,0.54)",
                cursor: "pointer",
                backgroundColor: "#fff",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              Language
            </Typography>
            <Select
              className="workspace"
              value={language}
              sx={{
                fontSize: "0.9rem",
                border: "none",
                width: "150px",
                minWidth: "100px",
                maxWidth: "100px",
                maxHeight: "200px",
                textAlign: "left",
                backgroundColor: "#fff",

                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
                },
              }}
              MenuProps={{
                style: {
                  maxHeight: "250px",
                  marginTop: "-35px",
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
              <MenuItem
                value="English"
                sx={{ fontSize: "14px", padding: "10px 16px" }}
                onClick={() => {
                  setLanguage("English");
                }}
              >
                English
              </MenuItem>
              <MenuItem
                value="日本語"
                sx={{ fontSize: "14px", padding: "10px 16px" }}
                onClick={() => {
                  setLanguage("日本語");
                }}
              >
                日本語
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container item xs={12} sx={{ paddingBottom: "10px" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <InvertColorsIcon
              sx={{
                color: "#9E9E9E",
                marginRight: "5px",
              }}
            />
            <Typography component="span">Themes</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "5px",
          }}
        >
          <Typography component="span" sx={{ fontSize: "0.75rem" }}>
            Choose your Color Scheme
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Grid
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="dark"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
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
                      <Box
                        component="div"
                        sx={{
                          minWidth: "12px",
                          minHeight: "12px",
                          width: "12px",
                          height: "12px",
                          borderRadius: "2px",
                          backgroundColor: "rgb(45, 45, 45)",
                          marginRight: "8px",
                        }}
                      />
                      <Typography component="span" fontSize={14}>
                        Black
                      </Typography>
                    </Box>
                  }
                />
                <FormControlLabel
                  value="gray"
                  control={<Radio />}
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
                      <Box
                        component="div"
                        sx={{
                          minWidth: "12px",
                          minHeight: "12px",
                          width: "12px",
                          height: "12px",
                          borderRadius: "2px",
                          backgroundColor: "rgb(221, 221, 221)",
                          marginRight: "8px",
                        }}
                      />
                      <Typography component="span" fontSize={14}>
                        Gray
                      </Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid xs={9}></Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} sx={{ paddingBottom: "10px" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <BugReportIcon
              sx={{
                color: "#9E9E9E",
                marginRight: "5px",
              }}
            />
            <Typography component="span">Developer's Functions</Typography>
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            margin: "5px",
          }}
        >
          <Typography component="span" sx={{ fontSize: "0.75rem" }}>
            Choose to use Functions for Developers
          </Typography>

          <FormControlLabel
            sx={{ marginLeft: "5px", fontSize: "0.7rem" }}
            control={<Checkbox />}
            label={
              <Typography component="span" fontSize={14}>
                Check to Enable Developer's Functions
              </Typography>
            }
          />
        </Grid>
      </Grid>
      <Social />
    </Grid>
  );
};
export default Personalize;

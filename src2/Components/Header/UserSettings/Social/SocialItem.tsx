import {
  Button,
  Divider,
  Input,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import React from "react";

export interface SocialItemProps {
  data: string;
  name: string;
  link: string;
}

const SocialItem: React.VFC<SocialItemProps> = ({ data, name, link }) => {
  return (
    <>
      <Grid
        item
        xs={4}
        sx={{
          height: "50px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          marginTop: "15px",
        }}
      >
        <Avatar
          sx={{
            maxWidth: " 50px",
            maxHeight: "50px",
            width: "100%",
            height: "100%",
          }}
          alt="Cindy Baker"
          src={data}
        />
        <Box
          sx={{
            flex: "1",
            paddingLeft: "10px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "0.8rem",
            height: "100%",
          }}
        >
          <Box
            component="span"
            sx={{
              textAlign: "center",
              marginBottom: "4px",
            }}
          >
            {name}
          </Box>
          <Box
            component="span"
            sx={{
              border: "1px solid #dddddd",
              borderRadius: "8%",
              background: "none",
              height: "22px",
              textAlign: "center",
              padding: "2px 5px",
              cursor: "pointer",
            }}
          >
            <Link href={link} underline="none" sx={{ color: "black" }}>
              Link
            </Link>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default SocialItem;

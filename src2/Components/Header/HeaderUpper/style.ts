import { styled } from "@mui/material/styles";
import { Paper, MenuItem, Select, Backdrop } from "@mui/material";

export const BoxLogo = styled("div")(({ theme }) => {
  return {
    width: "auto",
    height: "100%",
    textAlign: "left",
  };
});

export const BoxSearch = styled("div")(({ theme }) => {
  return {
    fontSize: "0.9rem !important",
    position: "relative",
    border: "#DDDDDD 1px solid",
    borderRadius: "30px",
    boxSizing: "border-box",
    padding: "0 0 0 38px",
    overflow: "hidden",
    width: "100%",
    height: "80%",
    "&> input[type='text']": {
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
    },
  };
});
export const BoxIcon = styled("div")(({ theme }) => {
  return {
    padding: "0 7px",
    width: "40px",
    height: "100%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "start",

    "&>svg": {
      width: "26px",
      height: "26px",
      cursor: "pointer",
      color: "#9E9E9E",
    },
    "&>.MuiAvatar-circular": {
      height: "30px",
      width: "30px",
    },
  };
});
export const BackdropCustom = styled(Backdrop)(({ theme }) => {
  return {};
});

import { styled } from "@mui/material/styles";
import { Paper, MenuItem, Select, Button } from "@mui/material";

export const CustomBox = styled("div")(({ theme }) => {
  return {
    minWidth: "200px",
  };
});
export const CustomText = styled(Button)(({ theme }) => {
  return {
    margin: "auto",
    cursor: "pointer",
    minWidth: "60px",
    maxWidth: "300px",
    textAlign: "center",
    color: "#E0E0E0 !important",
    padding: "0 15px",
    height: "100%",
    textTransform: "none",
    fontSize: "0.8rem",
    "&:hover": {
      color: "#fff !important",
      backgroundColor: "rgba(66, 66, 66, 0.9)",
    },
    fontFamily:
      'ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo, Osaka", "ＭＳ Ｐゴシック", "MS PGothic", "sans-serif" !important',
  };
});

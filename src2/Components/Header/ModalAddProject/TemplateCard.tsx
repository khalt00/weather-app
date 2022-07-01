import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface TemplateCardProps {}

const TemplateCard: React.VFC<TemplateCardProps> = ({}) => {
  return (
    <Card
      sx={{
        width: "100%",
        border: "2px solid #ddd",
        background: "none",
        backgroundColor: "#fff",
        boxShadow: "none",
        borderRadius: "0",
        transition: "all 0.3s ease",
        "&:hover": {
          border: "2px solid #bbb",
          boxShadow: "1px 2px 3px #eee",
        },
      }}
    >
      <CardContent>
        <Typography
          sx={{
            textAlign: "left",
            height: "3em",
            marginBottom: "15px",
            fontSize: "0.9em",
            color: "#555",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login_basic
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            height: "8.8em",
            marginBottom: "15px",
            fontSize: "0.5rem",
            color: "#555",
            cursor: "pointer",
          }}
        >
          基本ログインサンプルのテンプレート
        </Typography>
      </CardContent>
    </Card>
  );
};
export default TemplateCard;

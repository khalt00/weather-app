import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "Router/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "ヒラギノ角ゴシック Pro",
      "Hiragino Kaku Gothic Pro",
      "メイリオ",
      "Meiryo, Osaka",
      "ＭＳ Ｐゴシック",
      "MS PGothic",
      "sans-serif",
    ].join(","),
  },
  palette: {
    secondary: {
      main: "#5e385a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;

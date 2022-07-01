import {
  Button,
  Container,
  FormControl,
  Link,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useState } from "react";
import Google from "Assets/google.svg";
import FaceBook from "Assets/facebook.svg";
import Github from "Assets/github.svg";
import SalesForce from "Assets/Salesforce.svg";
import Microsoft from "Assets/microsoft.svg";
import Twitter from "Assets/twitter.svg";
import Line from "Assets/line.svg";
import "./styles.scss";
import classNames from "classnames";
import { FormLogin } from "./FormLogin/FormLogin";

export interface LoginProps {}

export const Login = (props: LoginProps) => {
  const [language, setLanguage] = useState<string>("English");
  const [valueInput, setValueInput] = useState({
    email: "",
    password: "",
  });
  // const handleChange = (e: FormEvent): void => {
  //   console.log(e.currentTarget);
  // };
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setValueInput({ ...valueInput, [name]: value });
  };
  return (
    <div id="loginPage">
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            padding: "50px",
            display: "flex",
            backgroundColor: "#fff",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="#1589d6" className="title__login">
            LOGIN
          </Typography>
          <Box component="div" sx={{ mt: 2 }}>
            <FormLogin />
            <Typography
              component="span"
              sx={{
                marginTop: 1,
                fontSize: "10px",
                display: "flex",
                textDecoration: "underline",
                cursor: "pointer",
                backgroundColor: "#fff",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Forgot password
            </Typography>
            <Typography
              component="span"
              sx={{
                marginTop: 4,
                fontSize: "10px",
                display: "flex",
                color: "rgba(0,0,0,0.54)",
                cursor: "pointer",
                backgroundColor: "#fff",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              Choose your Language
            </Typography>
            <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="language"
                value={language}
                sx={{
                  fontSize: "12px",
                  textAlign: "left",
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
            <Box>
              <Typography
                component="span"
                sx={{
                  marginTop: 2,
                  fontSize: "13px",
                  display: "flex",
                  fontFamily: "inherit",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  alignItems: "start",
                }}
              >
                Don't have an account?
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    display: "inline",
                    textDecoration: "none",
                    color: "#007bad",
                  }}
                >
                  SignUp
                </Link>
              </Typography>
              <Box
                sx={{
                  maxHeight: " 250px",
                  padding: "2px",
                  overflowY: "scroll",
                }}
                className="box__type__login"
              >
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    width: "94%",
                    border: "1px solid #c2c8d0",
                    height: " 52px",
                    textTransform: "none",
                    color: "#2d333a",
                    justifyContent: "start",

                    paddingLeft: "30px",
                    "&:hover": {
                      border: "1px solid #c2c8d0",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img
                    src={Google}
                    alt="Google"
                    style={{
                      width: "20px",

                      height: "20px",
                      marginRight: "5px",
                    }}
                  ></img>
                  Login with Google
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    width: "94%",
                    border: "1px solid #c2c8d0",
                    height: " 52px",
                    textTransform: "none",
                    color: "#2d333a",
                    justifyContent: "start",
                    paddingLeft: "30px",
                    "&:hover": {
                      border: "1px solid #c2c8d0",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img
                    src={FaceBook}
                    alt="FaceBook"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  ></img>
                  Login with FaceBook
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    width: "94%",
                    border: "1px solid #c2c8d0",
                    height: " 52px",
                    textTransform: "none",
                    color: "#2d333a",
                    justifyContent: "start",
                    paddingLeft: "30px",
                    "&:hover": {
                      border: "1px solid #c2c8d0",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img
                    src={Github}
                    alt="Github"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  ></img>
                  Login with Github
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    width: "94%",
                    border: "1px solid #c2c8d0",
                    height: " 52px",
                    textTransform: "none",
                    color: "#2d333a",
                    justifyContent: "start",
                    paddingLeft: "30px",
                    "&:hover": {
                      border: "1px solid #c2c8d0",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img
                    src={SalesForce}
                    alt="SalesForce"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  ></img>
                  Login with Salesforce
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    width: "94%",
                    border: "1px solid #c2c8d0",
                    height: " 52px",
                    textTransform: "none",
                    color: "#2d333a",
                    justifyContent: "start",
                    paddingLeft: "30px",
                    "&:hover": {
                      border: "1px solid #c2c8d0",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img
                    src={Microsoft}
                    alt="Microsoft"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  ></img>
                  Login with Microsoft
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    width: "94%",
                    border: "1px solid #c2c8d0",
                    height: " 52px",
                    textTransform: "none",
                    color: "#2d333a",
                    justifyContent: "start",
                    paddingLeft: "30px",
                    "&:hover": {
                      border: "1px solid #c2c8d0",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img
                    src={Twitter}
                    alt="Twitter"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  ></img>
                  Login with Twitter
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    width: "94%",
                    border: "1px solid #c2c8d0",
                    height: " 52px",
                    textTransform: "none",
                    color: "#2d333a",
                    justifyContent: "start",
                    paddingLeft: "30px",
                    "&:hover": {
                      border: "1px solid #c2c8d0",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img
                    src={Line}
                    alt="Line"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  ></img>
                  Login with Line
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

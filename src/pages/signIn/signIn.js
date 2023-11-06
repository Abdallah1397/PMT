import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Button,
  LinearProgress,
} from "@mui/material";
import {
  LockOutlined,
  PersonOutline,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import "./signIn.css";
import LoginSVG from "../../assets/svgs/loginSVG/loginSVG";
import { Link } from "react-router-dom";

// Sign In Component
const SignIn = () => {
  // Password Visability
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container-fluid loginContainer">
      <LinearProgress />
      <div className="row loginWrapper">
        <div className="loginSVG col-md-6 col-lg-8">
          <LoginSVG />
        </div>
        <div className="col-md-6 col-lg-4 formWrapper">
          <div className="cardTitle">
            <img
              src={require("../../assets/images/PMT.png")}
              className="logoPage"
              alt="logPage"
            />
            <h3 className="login-font">Welcome back!</h3>
          </div>
          {/* Login Form */}
          <form noValidate>
            {/* Username */}
            <div style={{ marginTop: "1rem" }}>
              <TextField
                id="username"
                label="Enter Username"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {/* Password */}
            <div style={{ marginTop: "1rem" }}>
              <TextField
                id="password"
                type={showPassword ? "text" : "password"}
                label="Enter Password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        className="visabilityButton"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityOffOutlined />
                        ) : (
                          <VisibilityOutlined />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {/* Submit Button */}
            <div className="mt-5">
              <Button
                className="submitButton"
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </div>
          </form>
          <div>
            <p className="mt-1">
              Don't have an account?{" "}
              <Link style={{ color: "#1976d2" }}>Register</Link>
            </p>
          </div>
          {/* Error Alerts */}
          {/* <div className="errorAlerts">
                {isEmpty || isNotAuth || loginError ? (
                  <Alert severity="error" className="errorAlert">
                    {errorMsg}
                  </Alert>
                ) : null}
              </div> */}
        </div>
      </div>
    </div>
  );
};
export default SignIn;

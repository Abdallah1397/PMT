import React, { useState, useEffect, useRef } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Button,
  LinearProgress,
  Alert,
} from "@mui/material";
import {
  LockOutlined,
  PersonOutline,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../interceptors/axiosInstance";
import SignUpSVG from "../../assets/svgs/signUpSVG/signUpSVG";
// Sign In Component
const SignUp = () => {
  /*
   * useRef => Allows you to create a mutable object that hold a .current property.
   * this .current used to hold a mutable value and it persists across re-renders
   */
  const isMounted = useRef(false);
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      isMounted.current = true;
    };
  }, []);

  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  // userInfo State
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    confirmedPassword: "",
  });
  // Destruct the userInfo state
  const { username, password, confirmedPassword } = userInfo;
  // Password Visability
  const [showPassword, setShowPassword] = useState(false);
  // Error states
  const [errorStates, setErrorStates] = useState({
    isEmpty: false,
    notMatchingPasswords: false,
    errorMsg: "",
  });
  // Destructuring the errorStates obj
  const { isEmpty, errorMsg, notMatchingPasswords } = errorStates;
  // Handle Input Change
  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  };
  // Submitting function
  const onSubmit = (e) => {
    e.preventDefault();
    // Clear pervious errors
    setErrorStates({
      isEmpty: false,
      notMatchingPasswords: false,
      errorMsg: "",
    });
    // check if the inputs are empty or not
    if (Object.values(userInfo).some((item) => item === "")) {
      setErrorStates({
        notMatchingPasswords: false,
        isEmpty: true,
        errorMsg: "All values are required!",
      });
      return;
    }
    // Check if the input password and the confirmed password are equal or not
    if (password !== confirmedPassword) {
      setErrorStates({
        notMatchingPasswords: true,
        isEmpty: false,
        errorMsg: "Those passwords didn't match. Try again.",
      });
      return;
    }
    // Turn on loading progress
    setIsLoading(true);
    // HTTP request to make the user is registered
    api
      .post("auth/register", { username, password })
      .then((res) => {
        if (!isMounted.current) {
          // turn off loading progress
          setIsLoading(false);
          navigate("/signin");
        }
      })
      .catch((err) => {
        if (!isMounted.current) {
          // turn off loading progress
          setIsLoading(false);
          if (err.request.status === 401) {
            setErrorStates({
              notAuth: true,
              isEmpty: false,
              errorMsg: "Wrong Username or Password!",
            });
          }
        }
      });
  };
  return (
    <div className="container-fluid signupContainer">
      <div className="row signupWrapper">
        {/* Linear Progress */}
        {isLoading && <LinearProgress />}
        <div className="svgWrapper col-md-6 col-lg-8">
          <div className="signupSVG ">
            <SignUpSVG />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 formWrapper">
          <div className="signupTitle">
            <img
              src={require("../../assets/images/pmt.jpg")}
              className="logoPage"
              alt="logPage"
            />
            <h3 className="signupFont mt-2">Register Now</h3>
          </div>
          {/* Sign Up Form */}
          <form noValidate onSubmit={onSubmit}>
            {/* Username */}
            <div>
              <TextField
                id="username"
                label="Enter Username"
                fullWidth
                onChange={handleInputChange}
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
            <div className="mt-3">
              <TextField
                id="password"
                type={showPassword ? "text" : "password"}
                label="Enter Password"
                fullWidth
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {/* Confirm Password */}
            <div className="mt-3">
              <TextField
                id="confirmedPassword"
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                fullWidth
                onChange={handleInputChange}
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
            <div className="mt-3">
              <Button
                disabled={isLoading ? true : false}
                className="submitButton"
                type="submit"
                variant="contained"
                fullWidth
                style={{ backgroundColor: "#c1262a" }}
              >
                Sign Up
              </Button>
            </div>
            {/* Error Alerts */}
            <div className="mt-2">
              {isEmpty || notMatchingPasswords ? (
                <Alert severity="error" className="errorAlert">
                  {errorMsg}
                </Alert>
              ) : null}
            </div>
          </form>
          <div>
            <p className="mt-1">
              Already signed up?{" "}
              <Link style={{ color: "#c1262a" }} to="/signin">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

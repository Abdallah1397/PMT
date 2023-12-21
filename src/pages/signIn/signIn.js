import React, { useState, useEffect, useRef } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  LinearProgress,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  LockOutlined,
  PersonOutline,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import "./signIn.css";
import LoginSVG from "../../assets/svgs/loginSVG/loginSVG";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../interceptors/axiosInstance";
import { setUserStatus } from "../../redux/user.js";
import PrimaryButton from "../../components/primaryButton/primaryButton";
// Sign In Component
const SignIn = () => {
  /*
   * useRef => Allows you to create a mutable object that hold a .current property.
   * this .current used to hold a mutable value and it persists across re-renders
   */
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get user status that contains the username and isAuth status
  const userStatus = useSelector((state) => state.user);
  // destructuring the userStatus
  const { isAuth } = userStatus;
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
    return () => {
      isMounted.current = true;
    };
  }, [isAuth]);

  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  // userInfo State
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  // Password Visability
  const [showPassword, setShowPassword] = useState(false);
  // Error states
  const [errorStates, setErrorStates] = useState({
    notAuth: false,
    isEmpty: false,
    errorMsg: "",
  });
  // Destructuring the errorStates obj
  const { isEmpty, errorMsg, notAuth } = errorStates;
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
      notAuth: false,
      isEmpty: false,
      errorMsg: "",
    });
    // check if the inputs are empty or not
    if (Object.values(userInfo).some((item) => item === "")) {
      setErrorStates({
        notAuth: false,
        isEmpty: true,
        errorMsg: "All values are required!",
      });
      return;
    }
    // Turn on loading progress
    setIsLoading(true);
    // HTTP request to make the user is Authenticated
    api
      .post("auth/login", { ...userInfo })
      .then((res) => {
        if (!isMounted.current) {
          // turn off loading progress
          setIsLoading(false);
          dispatch(setUserStatus(userInfo.username));
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
    <div className="container-fluid loginContainer">
      <div className="row loginWrapper">
        {/* Linear Progress */}
        {isLoading && <LinearProgress color="error" />}
        <div className="svgWrapper col-md-6 col-lg-8">
          <div className="loginSVG ">
            <LoginSVG />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 formWrapper">
          <div className="cardTitle">
            <img
              src={require("../../assets/images/pmt.jpg")}
              className="logoPage"
              alt="logPage"
            />
            <h3 className="login-font">Welcome back!</h3>
          </div>
          {/* Login Form */}
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
             <PrimaryButton text="Login" disabled={isLoading} fullWidth/>
            </div>
            {/* Error Alerts */}
            <div className="mt-2">
              {isEmpty || notAuth ? (
                <Alert severity="error" className="errorAlert">
                  {errorMsg}
                </Alert>
              ) : null}
            </div>
          </form>
          <div>
            <p className="mt-1">
              Don't have an account?{" "}
              <Link style={{ color: "#c1262a" }} to="/signup">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;

import React, { useState } from "react";
import { api } from "./axiosInstance";
import { Snackbar, Alert } from "@mui/material";

const AxiosErrorHanlder = () => {
  // Error States
  const [errorStates, setErrorStates] = useState({
    forbiddenAccess: false,
    serverErr: false,
    networkErr: false,
    errorMsg: "",
  });
  //   Destructuring for the errorStates
  const { forbiddenAccess, serverErr, networkErr, errorMsg } = errorStates;
  //   Handle Axios Response
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.request.status === 0) {
        setErrorStates({
          forbiddenAccess: false,
          serverErr: false,
          networkErr: true,
          errorMsg: "Network Error, Can't connect to host!",
        });
      } else if (error.request.status === 403) {
        setErrorStates({
          forbiddenAccess: true,
          serverErr: false,
          networkErr: false,
          errorMsg:
            "Forbidden Access, you are unauthorized to perform this action!",
        });
      } else if (error.request.status === 500) {
        setErrorStates({
          forbiddenAccess: true,
          serverErr: false,
          networkErr: false,
          timeoutErr: false,
          validationErr: false,
          errorMsg:
            "Interal Server Error, please contact system administrator!",
        });
      }
      throw error; // Propagate the error
    }
  );
  //   Close Snackbar
  const closeSnackbar = () => {
    setErrorStates({
      forbiddenAccess: false,
      serverErr: false,
      networkErr: false,
      errorMsg: "",
    });
  };
  return (
    <Snackbar
      open={forbiddenAccess || serverErr || networkErr}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      autoHideDuration={6000}
    >
      <Alert severity="error" variant="filled" onClose={closeSnackbar}>
        {errorMsg}
      </Alert>
    </Snackbar>
  );
};
export default AxiosErrorHanlder;

import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

// Private Router
const PrivateRouter = () => {
  //   Get the user state
  const { isAuth } = useSelector((state) => state.user);
  //   if the user is Authenticated return the child element
  // else navigate to the login page
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRouter;

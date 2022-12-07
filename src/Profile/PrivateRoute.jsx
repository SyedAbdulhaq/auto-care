import { Navigate, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
// import { useAuthStatus } from "../Hook/useAuthStatus";
// import Spinner from "./Spinner";
import FeedbackContext from "../context/FeedbackContext";
const PrivateRoute = () => {
  // const { loggedIn, checkingStatus } = useAuthStatus();
  const { login } = useContext(FeedbackContext);

  // if (checkingStatus) {
  //   return <Spinner />;
  // }

  return login ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;

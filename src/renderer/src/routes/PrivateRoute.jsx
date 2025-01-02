import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home/home";
import {useSelector} from "react-redux";

function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user)

  return currentUser ? (
    <>
      <Home />
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute() {
  const currentUser = false;

  return currentUser ? (
    <>
      <p>Home</p>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default PrivateRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home/home";
import {useSelector} from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar.component";

function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user)

  return currentUser ? (
    <div className="dashboard_layout">
      <Sidebar />
      <div className="pages_layout">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default PrivateRoute;

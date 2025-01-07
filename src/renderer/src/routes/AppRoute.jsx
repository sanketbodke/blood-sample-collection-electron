import {Route, Routes, Navigate} from "react-router-dom";
import AuthLayout from "../pages/auth/authLayout";
import Login from "../pages/auth/form/login/login";
import Register from "../pages/auth/form/register/register";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/home";
import Profile from "../pages/profile/Profile.component";
import ResetPassword from "../components/ResetPassword/ResetPassword.component";
// agents

import ListAgents from "../pages/agent/listAgents/listAgents";
import CreateAgent from "../pages/agent/createAgent/createAgent";
import UpdateAgent from "../pages/agent/updateAgent/updateAgent";

// service map
import ServiceMap from "../pages/serviceMap/serviceMap";

function AppRoute() {
  return(
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="user/profile" element={<Profile />} />
        <Route path="user/password/reset" element={<ResetPassword />} />
        <Route path="/agents" element={<ListAgents />}/>
        <Route path="/agents/new" element={<CreateAgent />}/>
        <Route path="/agents/edit/:id" element={<UpdateAgent />}/>

        <Route path="/service-map" element={<ServiceMap />}/>
      </Route>
    </Routes>
  )
}

export default AppRoute;

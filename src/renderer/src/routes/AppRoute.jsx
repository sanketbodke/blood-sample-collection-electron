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

// schedule appointments
import ListAppointment from "../pages/patientAppointments/listAppointment/listAppoinment";
import CreateAppointment from "../pages/patientAppointments/createAppointment/createAppointment";
import UpdateAppointment from "../pages/patientAppointments/updateAppointment/updateAppointment";

// patient samples
import PatientSamples from "../pages/patientSamples/listSamples/patientSamples";
import UpdateSamples from "../pages/patientSamples/updateSamples/updateSamples";

// reports
import CreateReport from "../pages/patientReports/createReport/createReport";
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

        <Route path="/patient/appointments" element={<ListAppointment />}/>
        <Route path="/patient/appointments/new" element={<CreateAppointment />}/>
        <Route path="/patient/appointments/edit/:id" element={<UpdateAppointment />}/>

        <Route path="/patient/samples" element={<PatientSamples />}/>
        <Route path="/patient/samples/edit/:id" element={<UpdateSamples />}/>

        <Route path="patient/report/create" element={<CreateReport/>} />
      </Route>
    </Routes>
  )
}

export default AppRoute;

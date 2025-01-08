import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import currentUser from "../../../utils/user";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {message} from "antd";
import apiUrl from "../../../constant/apiUrl";
import axios from "axios";
const useUpdateAppointment = () => {
  const navigateTo = useNavigate();
  const {
    user
  } = currentUser();

  const [appointment, setAppointment] = useState({})
  const [agents, setAgents] = useState([]);

  const {
    register,
    handleSubmit
  } = useForm()

  const { id } = useParams()

  useEffect(() => {
    const getAppointmentDetails = async () => {
      try{
        const appointment = await axios.get(`${apiUrl.getAppointmentById.replace(":id", id)}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`
          }
        })
        setAppointment(appointment.data)
      }catch (error){
        console.log("Error to get appointment", error)
      }
    }

    getAppointmentDetails()
  }, [id]);

  useEffect(() => {
    const getAllAgents = async () => {
      try {
        const response = await axios.get(`${apiUrl.allAgents}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setAgents(response.data.agents);
        console.log(response.data.agents);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    getAllAgents();
  }, [user.token]);

  const onSubmit = async (data) => {
    try{
      console.log(data)
      const appointment = await window.api.updateAppointment(
        apiUrl.updateAppointment.replace(":id", id),
        data,
        user?.token
      )
      message.success("Appointment Updated")
      navigateTo("/patient/appointments")
    }catch (error){
      console.log("Error updating appointment", error)
      message.error("Error updating appointment")
    }
  }

  return{
    register,
    handleSubmit: handleSubmit(onSubmit),
    appointment,
    agents
  }
}

export default useUpdateAppointment

import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import currentUser from "../../../utils/user";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {message} from "antd";
import apiUrl from "../../../constant/apiUrl";
import axios from "axios";

const useUpdateSamples = () => {
  const navigateTo = useNavigate();
  const {
    user
  } = currentUser();

  const [appointment, setAppointment] = useState({})

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

  const onSubmit = async (data) => {
    const payload = {
      patient_appointment: {
        status: data.status,
      },
    };

    try {
      console.log(apiUrl.updateSampleStatus.replace(":id", id))
      const sample = await window.api.updateSampleStatus(
        apiUrl.updateSampleStatus.replace(":id", id),
        payload,
        user?.token
      );
      console.log("Sample Updated:", sample);
      message.success("Sample Updated");
      navigateTo("/patient/samples");
    } catch (error) {
      console.error("Error updating status:", error);
      message.error("Error updating status");
    }
  };

  return{
    register,
    handleSubmit: handleSubmit(onSubmit),
    appointment
  }
}

export default useUpdateSamples

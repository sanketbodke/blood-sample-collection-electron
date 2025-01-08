import currentUser from "../../../utils/user";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../../constant/apiUrl";
import { message } from "antd";

const useCreateAppointment = () => {
  const {
    user
  } = currentUser();
  const navigateTo = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const getAllAgents = async () => {
      try {
        const response = await axios.get(apiUrl.allAgents, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        setAgents(response.data.agents || []);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    getAllAgents();
  }, [user?.token]);

  const onSubmit = async (data) => {
    try {
      await window.api.scheduleAppointment(apiUrl.scheduleAppointment, data, user?.token);
      message.success("Appointment Scheduled");
      reset();
      navigateTo("/patient/appointments");
    } catch (error) {
      console.error("Error scheduling appointment", error);
      message.error("Error scheduling appointment");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    agents,
  };
};

export default useCreateAppointment;

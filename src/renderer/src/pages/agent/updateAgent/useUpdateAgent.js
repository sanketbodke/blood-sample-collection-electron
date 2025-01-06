import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import currentUser from "../../../utils/user";
import apiUrl from "../../../constant/apiUrl";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {message} from "antd";

const useUpdateAgent = () => {
  const navigateTo = useNavigate();
  const {
    user
  } = currentUser();

  const [agent, setAgent] = useState({});

  const {
    register,
    handleSubmit
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    const getAgentDetails = async () => {
      try {
        const agent = await axios.get(`${apiUrl.getAgentById.replace(':id', id)}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`
          }
        });
        setAgent(agent.data);
      } catch (error) {
        console.error('Error fetching agent details:', error);
      }
    };

    getAgentDetails();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const agent = await window.api.updateAgent(
        apiUrl.updateAndDeleteAgents.replace(":id", id),
        data,
        user?.token
      );
      console.log(agent)
      navigateTo("/agents");
      message.info("Agent Updated")
    } catch (error) {
      console.log("Error updating agent", error);
      message.error("Error updating agent")
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    agent
  };
};

export default useUpdateAgent;

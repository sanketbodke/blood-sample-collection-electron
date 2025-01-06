import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import currentUser from "../../../utils/user";
import apiUrl from "../../../constant/apiUrl";
import {message} from "antd";

const useCreateAgent = () => {
  const { user } = currentUser();
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const agent = await window.api.createAgent(apiUrl.createAndGetAgents, data, user?.token);
      console.log("Agent created successfully:", agent);
      navigateTo("/agents");
      message.success("Agent Created")
    } catch (error) {
      console.log("Error creating agent:", error);
      message.error("Error creating agent")
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useCreateAgent;

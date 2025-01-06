import { useQuery } from '@tanstack/react-query';
import apiUrl from "../../../constant/apiUrl";
import currentUser from "../../../utils/user";
import {useState} from "react";
import {message} from "antd";
import {useNavigate} from "react-router-dom";

const useListAgent = () => {
  const navigateTo = useNavigate();
  const { user } = currentUser();

  const [tableHeaders, _] = useState([
    "Name",
    "Email",
    "Phone",
    "Address",
    "Actions"
  ])

  const [tableData, setTableData] = useState([])

  const AllAgents = async () => {
    const agents = await window.api.getAgents(`${apiUrl.createAndGetAgents}`, user.token);
    setTableData(agents?.agents)
    return agents?.agents;
  };

  const {
    data,
    error,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['agents'],
    queryFn: AllAgents,
  });

  const handleDelete = async (agentId) => {
    try {
      const agent = await window.api.deleteAgent(
        `${apiUrl.updateAndDeleteAgents.replace(":id", agentId)}`,
        user?.token
      );
      if (agent) {
        navigateTo("/agents");
        message.info("Agent Deleted");
      }
    } catch (error) {
      console.error("Error deleting agent:", error);
      alert("Failed to delete the agent");
    }
  };

  return{
    user,
    AllAgents,
    data,
    error,
    isLoading,
    isError,
    tableHeaders,
    tableData,
    handleDelete
  }
}

export default useListAgent

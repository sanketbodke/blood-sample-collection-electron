import { useQuery, useQueryClient } from '@tanstack/react-query';
import apiUrl from "../../../constant/apiUrl";
import currentUser from "../../../utils/user";
import { useState } from "react";
import { message } from "antd";

const useListAgent = () => {
  const queryClient = useQueryClient();
  const { user } = currentUser();

  const [tableHeaders] = useState([
    "Name",
    "Email",
    "Phone",
    "Address",
    "Actions"
  ]);

  const AllAgents = async () => {
    const agents = await window.api.getAgents(`${apiUrl.createAndGetAgents}`, user.token);
    console.log(agents)
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
      await window.api.deleteAgent(
        `${apiUrl.updateAndDeleteAgents.replace(":id", agentId)}`,
        user?.token
      );
      queryClient.invalidateQueries(['agents']);
      message.info("Agent Deleted");
    } catch {
      message.error("Failed to delete the agent");
    }
  };

  return {
    data,
    error,
    isLoading,
    isError,
    tableHeaders,
    tableData: data || [],
    handleDelete
  };
};

export default useListAgent;

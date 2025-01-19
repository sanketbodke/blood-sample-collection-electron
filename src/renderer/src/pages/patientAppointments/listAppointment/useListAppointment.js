import {useState} from "react";
import currentUser from "../../../utils/user";
import apiUrl from "../../../constant/apiUrl";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {message} from "antd";

const useListAppointment = () => {
  const {
    user
  } = currentUser()

  const queryClient = useQueryClient();

  const [tableHeaders] = useState([
    "Appointment ID",
    "Agent",
    "Appointment Time",
    "Test Type",
    "Status",
    "Location",
    "Notes",
    "Report",
    "Actions",
  ]);

  const AllAppointments = async () => {
    try {
      const appointments = await window.api.getAppointments(apiUrl.listAppointments, user?.token);
      return appointments?.appointments;
    } catch (error) {
      console.log("Error fetching appointments:", error);
    }
  };

  const handleAppointmentDelete = async (appointmentId) => {
    try {
      await window.api.deleteAppointment(
        `${apiUrl.deleteAppointment.replace(":id", appointmentId)}`,
        user?.token
      );
      queryClient.invalidateQueries(['appointments']);
      message.info("Appointment Deleted");
    } catch {
      message.error("Failed to delete the appointment");
    }
  };

  const {
    data,
    error,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: AllAppointments,
  });

  return{
    user,
    tableHeaders,
    data,
    error,
    isLoading,
    isError,
    handleAppointmentDelete
  }
}

export default useListAppointment;

import {useState} from "react";
import currentUser from "../../../utils/user";
import apiUrl from "../../../constant/apiUrl";
import {useQuery} from "@tanstack/react-query";
const usePatientSamples = () => {

  const {
    user
  } = currentUser()


  const [tableHeaders] = useState([
    "Appointment ID",
    "Agent",
    "Patient ID",
    "Patient Name",
    "Appointment Time",
    "Test Type",
    "Status",
    "Location",
    "Notes",
    "Actions",
  ]);

  const getPatientSamples = async () => {
    try{
      const samples = await window.api.getPatientSamples(apiUrl.getPatientSamples, user?.token)
      console.log(samples.appointments)
      return samples?.appointments
    }catch (error){
      console.log("Error to get patient samples", error)
    }
  }

  const {
    data,
    error,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["samples"],
    queryFn: getPatientSamples,
  })

  return{
    data,
    error,
    isLoading,
    isError,
    tableHeaders
  }
}

export default usePatientSamples

import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../../constant/apiUrl";
import currentUser from "../../../utils/user";
import { message } from "antd";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  Form,
  FormField,
  FormSubmitButton,
} from "../../../style/Form.styled";
import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";

const CreateReport = () => {
  const { user } = currentUser();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getAllPatients = async () => {
      try {
        const response = await axios.get(`${apiUrl.getPatientSamples}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
        message.error("Failed to load patients.");
      }
    };

    if (user?.token) {
      getAllPatients();
    }
  }, [user?.token]);

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("patient_report[user_id]", data.user_id);
    formData.append("patient_report[report]", data.report[0]);

    try {
      const response = await axios.post(
        apiUrl.generatePatientReport,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Report Generated:", response.data);
      message.success("Report Generated Successfully!");
    } catch (error) {
      console.error("Error generating report:", error);
      message.error("Error generating report.");
    }
  };

  return (
    <FormContainer>
      <PagesHeading heading="Generate Report" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <label>Select Patient</label>
          <select {...register("user_id")} defaultValue="">
            <option value="" disabled>
              Select a Patient
            </option>
            {patients.appointments?.map((patient) => (
              <option value={patient.id} key={patient.id}>
                {patient.user.first_name}
              </option>
            ))}
          </select>

          <label>Report File</label>
          <input
            {...register("report")}
            type="file"
            accept=".pdf,.doc,.docx,.txt"
          />
        </FormField>
        <FormSubmitButton type="submit">Generate Report</FormSubmitButton>
      </Form>
    </FormContainer>
  );
};

export default CreateReport;

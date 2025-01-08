import React from "react";
import useUpdateAppointment from "./useUpdateAppointment";
import {
  FormContainer,
  Form,
  FormHeading,
  FormFiledGroup,
  FormField,
  FormSubmitButton,
} from "../../../style/Form.styled";
import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";
import BackPageButton from "../../../components/BackPageButton/BackPageButton.component";

const UpdateAppointment = () => {
  const {
    register,
    handleSubmit,
    appointment,
    agents } = useUpdateAppointment();

  return (
    <FormContainer>
      <PagesHeading heading="Update Appointment" />
      <BackPageButton backLink="/patient/appointments" />

      <Form onSubmit={handleSubmit}>
        <FormHeading>Appointment Information</FormHeading>

        <FormFiledGroup>
          <FormField>
            <label>Select Agent</label>
            <select {...register("agent_id")} defaultValue={appointment?.agent_id}>
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </FormField>

          <FormField>
            <label>Appointment Time</label>
            <input
              type="datetime-local"
              {...register("appointment_time")}
              defaultValue={appointment?.appointment_time}
            />
          </FormField>

          <FormField>
            <label>Test Type</label>
            <select {...register("test_type")} defaultValue={appointment?.test_type}>
              <option value="Blood Sugar Test">Blood Sugar Test</option>
              <option value="Cholesterol Test">Cholesterol Test</option>
              <option value="Complete Blood Count">Complete Blood Count</option>
              <option value="Liver Function Test">Liver Function Test</option>
              <option value="Kidney Function Test">Kidney Function Test</option>
            </select>
          </FormField>
        </FormFiledGroup>

        <FormFiledGroup>
          <FormField>
            <label>Collection Location</label>
            <input
              {...register("collection_location")}
              defaultValue={appointment?.collection_location}
            />
          </FormField>

          <FormField>
            <label>Note</label>
            <input {...register("note")} defaultValue={appointment?.note} />
          </FormField>
        </FormFiledGroup>

        <FormSubmitButton type="submit">Update Appointment</FormSubmitButton>
      </Form>
    </FormContainer>
  );
};

export default UpdateAppointment;

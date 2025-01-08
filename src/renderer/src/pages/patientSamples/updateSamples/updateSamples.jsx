import React from 'react';
import useUpdateSamples from "./useUpdateSamples";
import {
  FormContainer,
  Form,
  FormField,
  FormSubmitButton,
} from "../../../style/Form.styled";
import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";

const UpdateSamples = () => {
  const {
    register,
    handleSubmit,
    appointment
  } = useUpdateSamples();

  console.log(appointment.status)

  return (
    <FormContainer>
      <PagesHeading heading="Update Status" />

      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Status</label>
          <select {...register('status')}>
            <option defaultValue={appointment.status} selected disabled>{appointment.status}</option>
            <option value="Pending">Pending</option>
            <option value="InProgress">InProgress</option>
            <option value="Completed">Completed</option>
          </select>
        </FormField>

        <FormSubmitButton type="submit">Update Status</FormSubmitButton>
      </Form>
    </FormContainer>
  );
};

export default UpdateSamples;

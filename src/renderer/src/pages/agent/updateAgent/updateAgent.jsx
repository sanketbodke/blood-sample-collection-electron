import React from "react";
import useUpdateAgent from "./useUpdateAgent";
import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";
import {
  Form,
  FormContainer,
  FormField,
  FormHeading,
  FormFiledGroup, FormSubmitButton
} from "../../../style/Form.styled";
import BackPageButton from "../../../components/BackPageButton/BackPageButton.component";

const UpdateAgent = ({ agentData }) => {
  const {
    register,
    handleSubmit,
    agent
  } = useUpdateAgent();

  return (
    <FormContainer>
      <PagesHeading heading="Update Agent" />
      <BackPageButton
        backLink="/agents"
      />
      <Form onSubmit={handleSubmit}>
        <FormHeading>Agent Information</FormHeading>
        <FormFiledGroup>
          <FormField>
            <label>Name</label>
            <input {...register("name")} defaultValue={agent?.name} />
          </FormField>

          <FormField>
            <label>Phone</label>
            <input {...register("phone")} defaultValue={agent?.phone} />
          </FormField>

          <FormField>
            <label>Email</label>
            <input {...register("email")} defaultValue={agent?.email} />
          </FormField>
        </FormFiledGroup>

        <FormHeading>Agent Address Information</FormHeading>
        <FormFiledGroup>
          <FormField>
            <label>Street</label>
            <input {...register("address_attributes.street")} defaultValue={agent?.address?.street} />
          </FormField>

          <FormField>
            <label>City</label>
            <input {...register("address_attributes.city")} defaultValue={agent?.address?.city} />
          </FormField>

          <FormField>
            <label>State</label>
            <input {...register("address_attributes.state")} defaultValue={agent?.address?.state} />
          </FormField>
        </FormFiledGroup>

        <FormField>
          <label>Zip</label>
          <input {...register("address_attributes.zip")} defaultValue={agent?.address?.zip} />
        </FormField>

        <FormSubmitButton type="submit">
          Update Agent
        </FormSubmitButton>
      </Form>
    </FormContainer>
  );
};

export default UpdateAgent;

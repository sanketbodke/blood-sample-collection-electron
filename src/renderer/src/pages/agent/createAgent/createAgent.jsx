import React from "react";
import useCreateAgent from "./useCreateAgent";
import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";
import {
  Form,
  FormContainer,
  FormField,
  FormHeading,
  FormFiledGroup, FormSubmitButton
} from "../../../style/Form.styled";
const CreateAgent = () => {
  const {
    register,
    handleSubmit
  } = useCreateAgent();

  return (
    <FormContainer>
      <PagesHeading
        heading="Create Agent"
      />
      <Form onSubmit={handleSubmit}>
        <FormHeading>
          Agent Information
        </FormHeading>

        <FormFiledGroup>

          <FormField>
            <label> Name </label>
            <input {...register("name")} />
          </FormField>

          <FormField>
            <label> Phone </label>
            <input {...register("phone")} />
          </FormField>

          <FormField>
            <label>Email</label>
            <input {...register("email")} />
          </FormField>
        </FormFiledGroup>

        <FormHeading>
          Agent Address Information
        </FormHeading>
        <FormFiledGroup>

          <FormField>
            <label>Street</label>
            <input {...register("address_attributes.street")} />
          </FormField>

          <FormField>
            <label>City</label>
            <input {...register("address_attributes.city")} />
          </FormField>

          <FormField>
            <label>State</label>
            <input {...register("address_attributes.state")} />
          </FormField>

        </FormFiledGroup>
        <FormField>
          <label>Zip</label>
          <input {...register("address_attributes.zip")} />
        </FormField>

        <FormSubmitButton type="submit">
          Create Agent
        </FormSubmitButton>
      </Form>
    </FormContainer>
  );
};

export default CreateAgent;

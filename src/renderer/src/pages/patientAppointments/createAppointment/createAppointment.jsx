import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";
import BackPageButton from "../../../components/BackPageButton/BackPageButton.component";
import {
  Form,
  FormContainer,
  FormField,
  FormHeading,
  FormFiledGroup,
  FormSubmitButton,
} from "../../../style/Form.styled";
import useCreateAppointment from "./useCreateAppointment";

const CreateAppointment = () => {
  const {
    register,
    handleSubmit,
    agents
  } = useCreateAppointment();

  return (
    <FormContainer>
      <PagesHeading heading="Schedule Appointment" />
      <BackPageButton backLink="/patient/appointments" />

      <Form onSubmit={handleSubmit}>
        <FormHeading>Appointment Information</FormHeading>

        <FormFiledGroup>
          <FormField>
            <label>Select Agent</label>
            <select {...register("agent_id")}>
              <option value="" disabled>
              </option>
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </FormField>

          <FormField>
            <label>Appointment Time</label>
            <input type="datetime-local" {...register("appointment_time")} />
          </FormField>

          <FormField>
            <label>Select Test Type</label>
            <select {...register("test_type")} defaultValue="">
              <option value="" disabled>
              </option>
              <option value="Blood Sugar Test">Blood Sugar Test</option>
              <option value="Complete Blood Count (CBC)">
                Complete Blood Count (CBC)
              </option>
              <option value="Liver Function Test (LFT)">
                Liver Function Test (LFT)
              </option>
              <option value="Lipid Profile">Lipid Profile</option>
              <option value="Kidney Function Test (KFT)">
                Kidney Function Test (KFT)
              </option>
              <option value="Thyroid Function Test (TFT)">
                Thyroid Function Test (TFT)
              </option>
            </select>
          </FormField>
        </FormFiledGroup>

        <FormFiledGroup>
          <FormField>
            <label>Collection Location</label>
            <input {...register("collection_location")} />
          </FormField>

          <FormField>
            <label>Note</label>
            <input {...register("note")} />
          </FormField>
        </FormFiledGroup>

        <FormSubmitButton type="submit">Schedule Appointment</FormSubmitButton>
      </Form>
    </FormContainer>
  );
};

export default CreateAppointment;

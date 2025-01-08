const baseUrl = "http://localhost:3000/api/v1";

const apiUrls = {
  register: `${baseUrl}/users`,
  login: `${baseUrl}/users/sign_in`,
  updateUser: `${baseUrl}/users/:id`,
  otpRequest: `${baseUrl}/users/:id/send_otp`,
  resetPassword: `${baseUrl}/users/:id/reset_password`,
  updateLab: `${baseUrl}/labs/:id`,

  // agents
  allAgents: `${baseUrl}/agents`,
  createAndGetAgents: `${baseUrl}/agents`,
  updateAndDeleteAgents: `${baseUrl}/agents/:id`,
  getAgentById: `${baseUrl}/agents/:id`,

  // service map
  serviceMap: `${baseUrl}/service_maps`,

  // schedule appointment
  scheduleAppointment: `${baseUrl}/patient_appointments`,
  listAppointments: `${baseUrl}/patient_appointments`,
  updateAppointment: `${baseUrl}/patient_appointments/:id`,
  deleteAppointment: `${baseUrl}/patient_appointments/:id`,
  getAppointmentById: `${baseUrl}/patient_appointments/:id`,

  // patient samples
  getPatientSamples: `${baseUrl}/patient_samples`,
  updateSampleStatus: `${baseUrl}/patient_samples/:id`,

};

export default apiUrls;

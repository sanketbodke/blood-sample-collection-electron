const baseUrl = "http://localhost:3000/api/v1";

const apiUrls = {
  register: `${baseUrl}/users`,
  login: `${baseUrl}/users/sign_in`,
  updateUser: `${baseUrl}/users/:id`,
  otpRequest: `${baseUrl}/users/:id/send_otp`,
  resetPassword: `${baseUrl}/users/:id/reset_password`,
  updateLab: `${baseUrl}/labs/:id`,

  // agents
  createAndGetAgents: `${baseUrl}/agents`,
  updateAndDeleteAgents: `${baseUrl}/agents/:id`,
  getAgentById: `${baseUrl}/agents/:id`,
};

export default apiUrls;

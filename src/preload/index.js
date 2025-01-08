import { contextBridge, ipcRenderer } from 'electron';

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', {
      ...api,
      getAgents: (apiToGetAgents, token) => ipcRenderer.invoke('get-agents', { apiToGetAgents, token }),
      createAgent: (apiToCreateAgent, agentData, token) => ipcRenderer.invoke('create-agent', { apiToCreateAgent, agentData ,token }),
      updateAgent: (apiToUpdateAgent, agentData, token) => ipcRenderer.invoke('update-agent', { apiToUpdateAgent, agentData, token }),
      deleteAgent: (apiToDeleteAgent, token) => ipcRenderer.invoke('delete-agent', { apiToDeleteAgent, token }),

      // appointments

      getAppointments: (apiToGetAppointments, token) => ipcRenderer.invoke('get-appointments', { apiToGetAppointments, token }),
      scheduleAppointment: (apiToCreateAppointments, appointmentData ,token) => ipcRenderer.invoke('schedule-appointments', { apiToCreateAppointments, appointmentData, token }),
      updateAppointment: (apiToUpdateAppointment, appointmentData, token) => ipcRenderer.invoke('update-appointment', {apiToUpdateAppointment, appointmentData, token}),
      deleteAppointment: (apiToDeleteAppointment, token) => ipcRenderer.invoke('delete-appointment', {apiToDeleteAppointment, token}),

      // patient samples
      getPatientSamples: (apiToGetPatientSamples, token) => ipcRenderer.invoke('get-patient-samples', {apiToGetPatientSamples, token}),
      updateSampleStatus: (apiToUpdateSampleStatus, sampleStatusData, token) => ipcRenderer.invoke('update-sample-status', { apiToUpdateSampleStatus, sampleStatusData, token }),

    });
  } catch (error) {
    console.error("Error exposing APIs:", error);
  }
} else {
  window.api = {
    ...api,
    getAgents: (apiToGetAgents, token) => ipcRenderer.invoke('get-agents', { apiToGetAgents, token }),
  };
}

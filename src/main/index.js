import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import axios from "axios";

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      webSecurity: false,
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.webContents.openDevTools()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// agents api
ipcMain.handle('get-agents', async (event, { apiToGetAgents, token }) => {
  try {
    const agents = await axios.get(apiToGetAgents, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return agents.data;
  } catch (error) {
    console.error('Error fetching agents:', error);
  }
});

ipcMain.handle('create-agent', async (event, { apiToCreateAgent, agentData, token }) => {
  try {
    const newAgent = await axios.post(apiToCreateAgent, agentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return newAgent.data;
  } catch (error) {
    console.error('Error creating agent:', error);
  }
});

ipcMain.handle('update-agent', async (event, { apiToUpdateAgent, agentData, token }) => {
  try {
    const updatedAgent = await axios.put(apiToUpdateAgent, agentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return updatedAgent.data;
  } catch (error) {
    console.error('Error updating agent:', error);
  }
});

ipcMain.handle('delete-agent', async (event, { apiToDeleteAgent, token }) => {
  try {
    const deletedAgent = await axios.delete(apiToDeleteAgent, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error deleting agent:', error);
  }
});

// appointment

ipcMain.handle('get-appointments', async (event, { apiToGetAppointments, token }) => {
  try {
    const appointments = await axios.get(apiToGetAppointments, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return appointments.data;
  } catch (error) {
    console.error("Error to get appointments", error);
  }
});

ipcMain.handle('schedule-appointments', async (event, { apiToCreateAppointments, appointmentData ,token }) => {
  try {
    const new_appointment = await axios.post(
      apiToCreateAppointments,
      appointmentData,
      {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return new_appointment.data
  } catch (error) {
    console.error("Error to schedule appointments", error);
  }
});

ipcMain.handle('update-appointment', async (event, { apiToUpdateAppointment, appointmentData, token }) => {
  try{
    const updated_appointment = await axios.put(
      apiToUpdateAppointment,
      appointmentData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return updated_appointment.data
  }catch (error){
    console.log("Error to update appointment", error)
  }
})

ipcMain.handle('delete-appointment', async (event, { apiToDeleteAppointment, token }) => {
  try{
    const deleted_appointment = await axios.delete(
      apiToDeleteAppointment,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  }catch (error){
    console.log("Error to delete appointment", error)
  }
})

// patient samples

ipcMain.handle('get-patient-samples', async (event, { apiToGetPatientSamples, token }) => {
  try{
    const samples = await axios.get(apiToGetPatientSamples, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    return samples.data
  }catch (error){
    console.log("Error to get patient samples")
  }
})

// update patient sample status
ipcMain.handle('update-sample-status', async (event, { apiToUpdateSampleStatus, sampleStatusData, token }) => {
  try {
    const updated_status = await axios.put(
      apiToUpdateSampleStatus,
      sampleStatusData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return updated_status.data;
  } catch (error) {
    console.error("Error updating status sample:", error);
  }
});

// generate patient report

ipcMain.handle('generate-patient-report', async (event, { apiToHandleReport, reportData, token }) => {
  try{
    const generated_report = await axios.post(
      apiToHandleReport,
      reportData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return generated_report.data
  }catch (error){
    console.error("Error generating report", error)
  }
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

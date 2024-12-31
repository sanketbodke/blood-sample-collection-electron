import {BrowserRouter as Router} from "react-router-dom";
import AppRoute from "./routes/AppRoute";
function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <Router>
      <AppRoute />
    </Router>
  )
}

export default App


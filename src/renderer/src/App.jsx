import {BrowserRouter as Router} from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppRoute />
      </QueryClientProvider>
    </Router>
  )
}

export default App


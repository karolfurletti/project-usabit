import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RoutesComponent} from "./routes";
import {BrowserRouter} from "react-router-dom";
function App() {

    const queryClient = new QueryClient()

    return (
          <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <RoutesComponent/>
              </BrowserRouter>
          </QueryClientProvider>
  )
}

export default App

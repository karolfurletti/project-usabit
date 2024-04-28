import {useEffect} from 'react'
import './App.css'
import {setupWorker} from "msw/browser";
import { handlers } from './mocks/handlers';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RoutesComponent} from "./routes";
function App() {

    const queryClient = new QueryClient()

    useEffect(() => {
        const Worker = setupWorker(...handlers);
        void Worker.start({ onUnhandledRequest: 'bypass' });
    }, []);



    return (
          <QueryClientProvider client={queryClient}>
            <RoutesComponent/>
          </QueryClientProvider>
  )
}

export default App

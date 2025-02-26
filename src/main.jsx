import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import { BrowserRouter } from 'react-router-dom'
import {
  queryClient,
  QueryClientProvider,
  ReactQueryDevtools,
} from './config/reactQueryProvider.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools buttonPosition="bottom-right" />
        </QueryClientProvider>
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
)

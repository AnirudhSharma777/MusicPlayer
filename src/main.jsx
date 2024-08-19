import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataContextProvider } from './context/ApiContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <DataContextProvider>
        <App />
      </DataContextProvider>
  </StrictMode>
)

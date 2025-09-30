import { CambrianProvider } from "cambrian-ds";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CambrianProvider><App /></CambrianProvider>
  </StrictMode>,
)
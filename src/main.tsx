import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ManageRoutes from './routers/manageRoutes.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ManageRoutes />
  </StrictMode>,
)

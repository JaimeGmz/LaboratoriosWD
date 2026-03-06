import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Usuarios from './Usuarios.jsx'
import Empleados from './Empleados.jsx'
import Clientes from './Clientes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clientes />
  </StrictMode>,
)

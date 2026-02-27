import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/*import App from './App.jsx'
import Hola from './Hola.jsx'
import Segundo from './Segundo.jsx'
import Tercer from './Tercer.jsx'
import Cuarto from './Cuarto.jsx'
import UtensiliosList from './utensiliosCocina.jsx'
import HolaMundo from './HolaMundo.jsx'
import Despedida from './Despedida.jsx'*/
import { SimpleForm } from './lab3/src/componentes/SimpleForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleForm />
  </StrictMode>,
)

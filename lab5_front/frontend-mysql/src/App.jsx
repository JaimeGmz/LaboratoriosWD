import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClienteList from './components/ClienteList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Administrador de Clientes</h1>
      </header>
      <main>
        <ClienteList />
      </main>
      <footer>
        <p>CRUD de Clientes © 2026</p>
      </footer>
    </div>
  )
}

export default App

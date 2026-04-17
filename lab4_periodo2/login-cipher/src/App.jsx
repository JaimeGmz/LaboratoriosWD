import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import CryptoJS from 'crypto-js';
import './App.css'

function App() {

  const CLAVE_REAL = "12345678"

  const [llaveInput, setLlaveInput] = useState("")
  const [textoPlano, setTextoPlano] = useState("")
  const [textoCifrado, setTextoCifrado] = useState("")
  const [textoParaDescifrar, setTextoParaDescifrar] = useState("")
  const [textoDescifrado, setTextoDescifrado] = useState("")
  const [error, setError] = useState("")

  const cifrar = (texto) => {
    return CryptoJS.AES.encrypt(texto, CLAVE_REAL).toString()
  }

  const descifrar = (texto) => {
    const bytes = CryptoJS.AES.decrypt(texto, CLAVE_REAL)
    return bytes.toString(CryptoJS.enc.Utf8)
  }

  const validarLlave = () => {
    if (llaveInput !== CLAVE_REAL) {
      setError("Llave incorrecta")
      return false
    }
    setError("")
    return true
  }

  const handleCifrar = () => {
    if (!validarLlave()) return
    const resultado = cifrar(textoPlano)
    setTextoCifrado(resultado)
  }

  const handleDescifrar = () => {
    if (!validarLlave()) return
    const resultado = descifrar(textoParaDescifrar)
    setTextoDescifrado(resultado)
  }


  return (
    <>
      <div className="App">
        <h1>Cifrado con Validación de Llave</h1>

        {/* FORMULARIO LLAVE */}
        <div>
          <h3>Ingresa la llave secreta</h3>
          <input
            type="password"
            placeholder="Llave secreta"
            value={llaveInput}
            onChange={(e) => setLlaveInput(e.target.value)}
          />
          <p style={{ color: "red" }}>{error}</p>
        </div>

        <hr />

        {/* CIFRAR */}
        <div>
          <h3>Cifrar texto</h3>
          <input
            type="text"
            placeholder="Texto a cifrar"
            value={textoPlano}
            onChange={(e) => setTextoPlano(e.target.value)}
          />
          <br /><br />
          <button onClick={handleCifrar}>Cifrar</button>

          <p><strong>Texto cifrado:</strong> {textoCifrado}</p>
        </div>

        <hr />

        {/* DESCIFRAR */}
        <div>
          <h3>Descifrar texto</h3>
          <input
            type="text"
            placeholder="Texto cifrado"
            value={textoParaDescifrar}
            onChange={(e) => setTextoParaDescifrar(e.target.value)}
          />
          <br /><br />
          <button onClick={handleDescifrar}>Descifrar</button>

          <p><strong>Texto descifrado:</strong> {textoDescifrado}</p>
        </div>

      </div>
    </>
  )
}

export default App

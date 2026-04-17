import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import CryptoJS from 'crypto-js';
import './App.css'

function App() {

  const cifrar = (texto) => {
    var textoCifrado = CryptoJS.AES.encrypt(texto, '12345678').toString();
    return textoCifrado;
  }

  const descifrar = (texto) => {
    var bytes = CryptoJS.AES.decrypt(texto, '12345678');
    var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado;
  }

  return (
    <>
      <div className="App">
        <h2>Texto Cifrado: {cifrar("Tecnologico")}</h2>
        <br />
        <h2>Texto Descifrado: {
          descifrar("U2FsdGVkX18DjfofRq0jRnT4TrzPWiA8GDkpI6o7KVE=")}</h2>
        <br />
      </div>
    </>
  )
}

export default App

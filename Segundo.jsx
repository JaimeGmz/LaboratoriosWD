import React from 'react'

const Segundo = () => {

  const saludo = 'Hola Mundo saludo desde variable'
  
  function mostrarSaludo() {
    return('Saludando desde funcion')
  } 

  return (
    <div>Segundo
        <br />
        {saludo}
        <br />
        {mostrarSaludo()}
    </div>
  )
}

export default Segundo
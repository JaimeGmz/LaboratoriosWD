import React from 'react'

const Despedida = () => {
  const mostrarDespedida = () => {
    return "¡Hasta luego, que tengas un excelente día!"
  }

  return (
    <div>
      <h2>{mostrarDespedida()}</h2>
    </div>
  )
}

export default Despedida
import React from 'react'
import { utensiliosCocina } from './assets/utensilios'

const UtensiliosList = () => {
  return (
    <div>
      <h2>Lista de Utensilios de Cocina</h2>
      <ol>
        {utensiliosCocina.map((utensilio) => (
          <li key={utensilio.id}>
            {utensilio.name} - {utensilio.material}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default UtensiliosList
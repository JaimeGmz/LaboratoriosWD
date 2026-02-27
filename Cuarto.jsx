import React from 'react'
import {animales} from './assets/animales'

const Cuarto = () => {
  return (
    <div>
        <h1>Lista de animales</h1>
        <ol>
            {animales.map((a) => (
                <li key={a.id}>
                    {a.id} - {a.name} - {a.type}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default Cuarto

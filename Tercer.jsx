import React from 'react'
import {bancos} from './assets/bancos'

const Tercer = () => {


    
  return (
    <div>
        <h1>Lista de bancos</h1>
        <ol>
            {bancos.map((a) => (
                <li key={a.id}>
                    {a.id} - {a.name} - {a.country}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default Tercer
import { useEffect, useState } from 'react';
import { Message } from './Message';

import React from 'react';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        matricula: 'A01410192',
        nombre: 'Jaime',
        apellidos: 'Gamez',
        edad: '25',
        universidad: 'Tec de Monterrey',
        carrera: 'ITC'
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState(prev => ({...prev, [name]: value }));
    }

    const onSubmit = (event) => {
      event.preventDefault(); // evita recargar la página
      setIsSubmitted(true); // guarda los datos
    };

    if (isSubmitted) {
      return (
        <>
          <h1>Datos Guardados</h1>
          <hr />

          <p><strong>Matrícula:</strong> {matricula}</p>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Apellidos:</strong> {apellidos}</p>
          <p><strong>Edad:</strong> {edad}</p>
          <p><strong>Universidad:</strong> {universidad}</p>
          <p><strong>Carrera:</strong> {carrera}</p>
        </>
      );
    }

    return (
        <>
            <h1>Formulario Simple</h1><hr />
            <input type="text" className="form-control" placeholder="Matricula" name="matricula"
                value={ matricula }
                onChange={ onInputChange }
            />
            <br></br>
            <input type="text" className="form-control mt-2" placeholder="Nombre" name="nombre"
                value={ nombre }
                onChange={ onInputChange }
            />
            <br></br>
            <input type="text" className="form-control mt-2" placeholder="Apellidos" name="apellidos"
                value={ apellidos }
                onChange={ onInputChange }
            />
            <br></br>
            <input type="number" className="form-control mt-2" placeholder="Edad" name="edad"
                value={ edad }
                onChange={ onInputChange }
            />
            <br></br>
            <input type="text" className="form-control mt-2" placeholder="Universidad" name="universidad"
                value={ universidad }
                onChange={ onInputChange }
            />
            <br></br>
            <input type="text" className="form-control mt-2" placeholder="Carrera" name="carrera"
                value={ carrera }
                onChange={ onInputChange }
            />
            <br></br>
            <button 
              onClick={ onSubmit } 
              className="btn btn-primary mt-2"
            >
              Guardar
            </button>

            {
                (nombre === 'secret' ) && <Message />
            }
        </>
    )
}
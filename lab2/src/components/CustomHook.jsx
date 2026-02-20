import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import { Card } from './Card'
import { Loading } from './Loading'

export const CustomHook = () => {
    const {counter, increment, decrement } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const { data: simpsonsData, hasError: simpsonsError, isLoading: simpsonsLoading } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${counter}`
  );

  
    const sprite = simpsonsData?.portrait_path
    ? `https://cdn.thesimpsonsapi.com/500${simpsonsData.portrait_path}`
    : null;

  return (
    <>
    <h1>Información de Pokemon</h1>
    <h2>Nombre: </h2>
    <h2>{data?.name}</h2>
        {isLoading ? <Loading/> 
        : (<Card id={counter} name={data.name} sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,

        ]}/>)}
        <button className='btn btn-primary' onClick={() => decrement()}>Anterior</button>
        <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>

        <h1>Información de Personaje</h1>

        <h2>Nombre:</h2>
        <h2>{simpsonsData?.name}</h2>
        
        {
          simpsonsLoading
          ? <Loading/>
          : (
            <Card
              id={counter}
              name={simpsonsData?.name}
              sprites={[ sprite ]}
            />
          )
        }
    
        <button className='btn btn-primary' onClick={() => decrement()}>
          Anterior
        </button>
      
        <button className='btn btn-primary' onClick={() => increment()}>
          Siguiente
        </button>
    </>
  )
}

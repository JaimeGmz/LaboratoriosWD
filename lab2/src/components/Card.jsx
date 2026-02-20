import React from 'react'

export const Card = ({id, name, sprites = []}) => {
  return (
    <section className='card'>
        <div>
            {sprites.map(sprite => (
                <img src={sprite} alt={name} key={sprite}/>
            ))}
        </div>
    </section>
  )
}
import React from 'react';

const PokemonListItem = (props) => {
    return (
      <div className="pokemonItem">
        <div>Name: {props.item.name}</div>
        <div>Id: {props.item.id}</div>
        <img src={props.item.sprites.front_default} alt="pokemon image"/> 
      </div>
    )
}

export default PokemonListItem;
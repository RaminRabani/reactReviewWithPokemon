import React from 'react';


var PokemonListItem = (props) => {
  return (
  <div className="pokemonItem">
    <div>Name: {props.pokeman.name}</div>
    <div>Id: {props.pokeman.id}</div>
    <img src={props.pokeman.sprites.front_default} alt="pokemon image"/> 
  </div>
  );
}

export default PokemonListItem;
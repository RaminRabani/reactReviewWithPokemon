import React from 'react'
import PokemonListItem from './PokemonListItem.js'

var PokemonList = (props) => (
  <div id="pokemonList">
  {props.pokemon.map( (pokeman, i) => 
    <PokemonListItem pokeman={pokeman} key={i}/>
  )}
  </div>
);

export default PokemonList
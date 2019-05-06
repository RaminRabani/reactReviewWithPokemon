import React from 'react';
import PokemonListItem from './PokemonListItem';

var  PokemonList = (props) => {
return (
<div id="pokemonList">
  {props.pokemon.map(function (item, index) {
    return <PokemonListItem pokeman={item} key={index}/>
    })
  }

</div>)
};

export default PokemonList;
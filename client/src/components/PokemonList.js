import React from 'react';
import PokemonListItem from './PokemonListItem';

var PokemonList = (props) => {
    return (
        <div id="pokemonList">
          {props.pokemon.map(function(item, i) {return (<PokemonListItem item={item} key={i} />)})}
        </div>
    )
};

export default PokemonList;
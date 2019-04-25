import React from 'react';

const PokemonListItem = ({pokeman}) => ( // let {name, id, sprites} = props ...........destructuring
  <div className="pokemonItem">
    <div>Name: {pokeman.name}</div>
    <div>Id: {pokeman.id}</div>
    <img src={pokeman.sprites.front_default} alt="pokemon image"/>
  </div>
)

export default PokemonListItem

//for src, make sure there are not double quotation marks


/*
  props = {
    pokeman: {
      name,
      id,
      sprites: {}
    }
  }
*/


//Before destructuring props:

// const PokemonListItem = (props) => ( // let {name, id, sprites} = props ...........destructuring
//   <div className="pokemonItem">
//     <div>Name: {props.pokeman.name}</div>
//     <div>Id: {props.pokeman.id}</div>
//     <img src={props.pokeman.sprites.front_default} alt="pokemon image"/>
//   </div>
// )




//////// class : use this.props
//////// functional const: props
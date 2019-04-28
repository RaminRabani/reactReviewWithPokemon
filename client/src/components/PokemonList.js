import React from 'react';
import PokemonListItem from './PokemonListItem';

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
        <div id="pokemonList">
          <PokemonListItem />
          <PokemonListItem />
          <PokemonListItem />
          <PokemonListItem />
          <PokemonListItem />
        </div>
    )
  }
};

export default PokemonList;
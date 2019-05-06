import React from 'react';
import PokemonList from './PokemonList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount() {
    this.setState ({
      pokemon: []
    })
  }

  getPokemon (query) {
    this.props.getPokemon(query, (response) => {
     //callback on the response object
      var pokemon = response.data;
      var {id, name, sprites} = pokemon
      var copy = this.state.pokemon.slice();
      copy.push({id, name, sprites})
      this.setState({
        pokemon: copy
      })
    });
  }

  render() {
    return <div>
      <Search getPokemon={this.getPokemon} />
      <PokemonList pokemon={this.state.pokemon} />
    </div>
  }
}

export default App;
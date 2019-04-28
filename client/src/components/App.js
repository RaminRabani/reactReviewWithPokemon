import React from 'react';
import PokemonList from './PokemonList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    this.setState({
      pokemon: this.props.pokemon
    })
  }

  render() {
    return (
      <div>
        <Search />
        <PokemonList pokemon = {this.state.pokemon} />
      </div>
    );
  }
}

export default App;
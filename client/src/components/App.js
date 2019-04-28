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

  }

  render() {
    return (
      <div>
        <Search />
        <PokemonList />
      </div>
    );
  }
}

export default App;
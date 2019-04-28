import React from 'react';
import PokemonList from './PokemonList.js';
import Search from './Search.js';
import ShuffleButton from './ShuffleButton.js';

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

  getPokemon = (query) => {
    this.props.getPokemon(query, (response) => {
      let data = response.data;

      let id = data.id;
      let name = data.name;
      let sprites = data.sprites;
      
      let copy = this.state.pokemon.slice();
      copy.push({id:id, name:name, sprites: sprites});
      this.setState({pokemon: copy})

      // ^^^^^equivalent to:
      // let pokemon = [...this.state.pokemon, {id, name, sprites}];
      // this.setState({pokemon:pokemon})

    })
  }

  shufflePokemon = () => {
    var shuffle = function(array) {
      var size = array.length;
      var itemsRemaining = size;
      for (let i = 0; i < size; i++) {
        var randomIndex = (Math.floor(Math.random() * itemsRemaining)) + i;
        var placeholderCopy = Object.assign({},array[i]);
        array[i] = array[randomIndex];
        array[randomIndex] = placeholderCopy;
        itemsRemaining--;
      }
      return array;
    };

    var shuffled = shuffle(this.state.pokemon);
    this.setState({pokemon: shuffled})
  }

  render() {
    return (
      <div>
        <Search getPokemon = {this.getPokemon} />
        <ShuffleButton shufflePokemon = {this.shufflePokemon} />
        <PokemonList pokemon = {this.state.pokemon} />
      </div>
    );
  }
}

export default App;
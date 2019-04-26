import React from 'react';
import PokemonList from './PokemonList.js'
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    this.setState({pokemon: this.props.pokemon} /*, () => console.log(this.state) */ ); 
    //callback function (second argument) runs after setState since setState is asynchronous
  }

  getPokemon = (query) => {
    this.props.getPokemon(query, ({data}) => { //This is using axios which is like an AJAX request; second part is the success callback
      //destructuring above ^^^^^^^^ let data = data.data
      console.log(data);
      let { id, name, sprites /*, pokeman */} = data; //Destructuring. This means id = data.id, name = data.name, sprites = data.sprites

      /*
      var id = data.id;
      var name = data.name;
      var sprites = data.sprites;
      var pokeman = undefined
      */

      //make copy of state array
      // let copy = this.state.pokemon.slice()
      // //add to that array
      // copy.push({id, name, sprites});
      // //set state
      // this.setState({ pokemon: copy })


      //this is equivalent to the copy above using ES6
      let pokemon = [...this.state.pokemon, {id, name, sprites}];
      this.setState({pokemon}); //{pokemon: pokemon}
    })
  }

  //this.props.getPokemon comes from index
  //this.getPokemon is passing down the function in App as a prop to Search

  render() {
    return (
      <div>
        <Search getPokemon={this.getPokemon}/>
        <PokemonList pokemon={this.state.pokemon}/>
      </div>
    )
  }
}

export default App;
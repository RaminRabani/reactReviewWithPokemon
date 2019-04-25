import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange = (e) => {
    let query = e.target.value;
    this.setState({query} /*, () => console.log(this.state) */); // {query: query} is the same as {query}
  }

  handleSubmit = (e) => {
    e.preventDefault(); //tells the button not to do whatever it would do by default (like refresh)
    console.log(this.state);
    this.props.getPokemon(this.state.query); 
  }

  render () {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}> 
          <input type="text" onChange = {this.handleChange}/>
          <button type='submit'>Add Pokemon</button>
        </form>
      </div>
    )
  }
}

export default Search;


//A button inside a form is a submit event that refreshes the page

//WEBPACK IS HELPING US TO AVOID WRITING THE BIND FUNCTIONS IN THE STATE

//Difference between onSubmit and onChange? Kin explained but I missed it.
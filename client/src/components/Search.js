import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let query = e.target.value;
    this.setState({ query } /*, () => console.log(this.state) */ )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getPokemon(this.state.query);
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleChange}/>
          <button>Add Pokemon</button>
        </form>
      </div>
    )
  }
}

export default Search;
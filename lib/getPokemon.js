import axios from 'axios';

const getPokemon = (query, callback) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/'+ query)
  .then(function (response) {
    callback(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default getPokemon;
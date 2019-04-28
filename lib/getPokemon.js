import axios from 'axios';

const getPokemon = (query, callback) => {
  var url = 'https://pokeapi.co/api/v2/pokemon/'+ query;
  axios.get(url)
  .then(function (response) {
    callback(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default getPokemon;
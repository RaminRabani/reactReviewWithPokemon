import React from 'react';

var ShuffleButton = (props) => {
  return (
    <div>
      <button onClick={props.shufflePokemon} >Shuffle Pokemon</button>
    </div>
  )
}

export default ShuffleButton;
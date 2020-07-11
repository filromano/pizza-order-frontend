import React from 'react';

export default (props) => {

  const flavors = props.flavors.map(flavor => 
    <div>
      <p>{flavor.name}</p>
      <p>{flavor.ingredients.join(', ')}</p>
      <p>{flavor.price}</p>
    </div>
  )

  return (
    <div>
      <h3>Escolha seus sabores:</h3>
      {flavors}
    </div>
  )
};

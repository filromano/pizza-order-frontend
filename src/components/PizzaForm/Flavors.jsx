import '../../style/Flavors.css';

import React from 'react';

export default (props) => {

  const flavors = props.flavors.map((flavor, index) => 
    <div key={index}>
      <input type="radio"
             id={flavor.name}
             name="flavor1"
             value={flavor.name}
             onChange={e => props.changeFlavor(e.target.value)} />
      <label>{flavor.name}</label>
      <p>{flavor.ingredients.join(', ')}</p>
    </div>
  )

  return (
    <div className="Flavors">
      <h3>Escolha seus sabores:</h3>
      {flavors}
      <button onClick={props.nextStep}>Próximo passo</button>
    </div>
  )
};

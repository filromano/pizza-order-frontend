import '../../style/Flavors.css';

import React from 'react';

export default (props) => {

  const flavors = props.flavors.map((flavor, index) => 
    <div key={index}>
      <input type="radio"
             id={flavor.name}
             name="flavor1"
             value={flavor.name}
             onChange={e => props.changeFlavor(e.target.value, props.position)} />
      <label>{flavor.name}</label>
      <p>{flavor.ingredients.join(', ')}</p>
    </div>
  )

  return (
    <div className="Flavors">
      <h3>Escolha seus sabores:</h3>
      {flavors}
      <button onClick={e => { props.nextStep(); props.calculateTotal();}}>Próximo passo</button>
    </div>
  )
};

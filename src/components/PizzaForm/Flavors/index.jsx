import './Flavors.scss';

import React from 'react';

import { verifyRadioButton } from '../verify';

export default (props) => {

  const flavors = props.flavors.map((flavor, index) => {
    
    const special = flavor.name === props.pizzaDia ? true : false;
    let star;
    if(special) {
      star = <span className="fa fa-star checked"></span>;
    }

    return (
      <div key={index} className={`items ${special ? 'special' : ''}`}>
        <input type="radio"
              id={flavor.name}
              name="flavor"
              value={flavor.name}
              onChange={e => props.changeFlavor(e.target.value, props.position)} />
        <label>{flavor.name}</label>
        {star}
        <p>{flavor.ingredients.join(', ')}</p>
      </div>
    );
  });

  return (
    <div className="Flavors">
      <h3>Escolha seus sabores:</h3>
      {flavors}
      <button onClick={(e) => 
          verifyRadioButton(document.querySelectorAll('input[name="flavor"]'), [ props.nextStep, props.calculateTotal])}>
        Próximo passo
        </button>
    </div>
  )
};

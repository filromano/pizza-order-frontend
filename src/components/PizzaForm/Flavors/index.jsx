import './Flavors.scss';

import React from 'react';

import { verifyRadioButton } from '../verify';

export default (props) => {

  const {pizzaDia, flavors, position, nextStep, calculateTotal} = props;

  const flavorsItem = flavors.map((flavor, index) => {
    
    const special = flavor.name === pizzaDia ? true : false;
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
              onChange={e => props.changeFlavor(e.target.value, position)} />
        <label>{flavor.name}</label>
        {star}
        <p>{flavor.ingredients.join(', ')}</p>
      </div>
    );
  });

  return (
    <div className="Flavors">
      <h3>Escolha seus sabores:</h3>
      {flavorsItem}
      <button onClick={(e) => 
          verifyRadioButton(document.querySelectorAll('input[name="flavor"]'), [ nextStep, calculateTotal])}>
        Próximo passo
        </button>
    </div>
  )
};

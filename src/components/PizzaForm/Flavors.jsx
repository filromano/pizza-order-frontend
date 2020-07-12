import '../../style/Flavors.css';

import React from 'react';

export default (props) => {

  function verify() {
    const rbs = document.querySelectorAll('input[name="flavor"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if(selectedValue !== undefined){
      props.nextStep();
      props.calculateTotal();
    } else {
      alert('Você precisa escolher um sabor');
    }
    
  }

  const flavors = props.flavors.map((flavor, index) => {
    
    const special = flavor.name === props.pizzaDia ? true : false;
    let star;
    if(special) {
      star = <span class="fa fa-star checked"></span>;
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
      <button onClick={e => verify()}>Próximo passo</button>
    </div>
  )
};

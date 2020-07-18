import React from 'react';

import { verify } from '../verify';

export default (props) => {

  const items = props.crusts.map((item, index) => 
    <option value={item} key={index}>{item}</option>
  );

  return (
    <div>
      <h3>Selecione uma massa:</h3>
      <select name="crust"
              id="crust"
              onChange={e => props.updateValue(e.target.value)}>
        <option value="">Escolha uma</option>
        {items}
      </select>
      <button onClick={e => verify(document.getElementById('crust'), props.nextStep)}>Próximo passo</button>
    </div>
  )
};

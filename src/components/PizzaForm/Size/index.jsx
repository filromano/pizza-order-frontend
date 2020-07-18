import React from 'react';

import { verify } from '../verify';

export default (props) => {

  const {sizes, updateValue, nextStep} = props;

  const items = sizes.map((item, index) => 
    <option value={item} key={index}>{item}</option>
  );


  return (
    <div>
      <h3>Selecione um tamanho:</h3>
      <select name="size"
              id="size"
              onChange={e => updateValue(e.target.value)}>
        <option value="">Escolha uma</option>
        {items}
      </select>
      <button onClick={e => verify(document.getElementById('size'), nextStep)}>Próximo passo</button>
    </div>
  )
};

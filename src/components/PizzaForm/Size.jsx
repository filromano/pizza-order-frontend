import React from 'react';

export default (props) => {

  const items = props.sizes.map((item, index) => 
    <option value={item} key={index}>{item}</option>
  );


  return (
    <div>
      <h3>Selecione um tamanho:</h3>
      <select name="size"
              onChange={e => props.updateValue(e.target.value)}>
        <option value="">Escolha uma</option>
        {items}
      </select>
      <button onClick={props.nextStep}>Próximo passo</button>
    </div>
  )
};

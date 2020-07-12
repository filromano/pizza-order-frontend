import React from 'react';

export default (props) => {

  function verify() {
    if(document.getElementById('size').value !== '') {
      props.nextStep();
    } else {
      alert('Você precisa escolher um tamanho'); 
    }
  }

  const items = props.sizes.map((item, index) => 
    <option value={item} key={index}>{item}</option>
  );


  return (
    <div>
      <h3>Selecione um tamanho:</h3>
      <select name="size"
              id="size"
              onChange={e => props.updateValue(e.target.value)}>
        <option value="">Escolha uma</option>
        {items}
      </select>
      <button onClick={e => verify()}>Próximo passo</button>
    </div>
  )
};

import React from 'react';

export default (props) => {

  function verify() {
    if(document.getElementById('crust').value !== '') {
      props.nextStep();
    } else {
      alert('Você precisa escolher uma massa'); 
    }
  }

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
      <button onClick={e => verify()}>Próximo passo</button>
    </div>
  )
};
